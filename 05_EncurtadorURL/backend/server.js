import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import shortid from "shortid";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log("INCOMING:", req.method, req.url);
  next();
});

const mongoUri = process.env.MONGO_URL;

await mongoose.connect (mongoUri);

//1234
const urlSchema = new mongoose. Schema({
    originalUrl: {type: String, required: true},
    shortUrl: {type: String, required: true, unique: true}
});

const Url = mongoose.model("Url", urlSchema);


// shorten API p/ encurtar URLs
// TO-DO: ZOD validação
// TO-DO: Error handling middleware |
app.post("/api/shorten", async (req, res) => {
  let { originalUrl } = req.body;

  // Normaliza URL (se não tiver protocolo, adiciona https://)
  if (!/^https?:\/\//i.test(originalUrl)) {
    originalUrl = `https://${originalUrl}`;
  }

  const shortUrl = shortid.generate();

  const newUrl = new Url({
    originalUrl,
    shortUrl
  });

  await newUrl.save();

  res.status(201).json({ originalUrl, shortUrl });
});

// redirect API p/ redirecionar URLs
app.get("/api/:shortUrl", async (req, res) => {
    const { shortUrl } = req.params;
    const urlData = await Url.findOne({ shortUrl });
    if (urlData) {
        res.redirect(urlData.originalUrl);
    } else {
        res.status(404).json({ message: "URL not found" });
    }
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));