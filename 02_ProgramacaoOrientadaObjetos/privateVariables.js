class Cliente{
    nome;
    cpf;
    contaCorrente = new ContaCorrente();
}

class ContaCorrente{
    agencia;
    #saldo = 0; // a cerquilha é uma nova convenção do EcmaScript 2022 (ES12) que faz de fato com que o atributo seja privado
    _saldoPrivado = 100;// pra versões anteriores do JS, existe uma convenção na comunidade que variáveis com _ são privadas e não devem ser alteradas manualmente

    sacar(valor){
        if(this.#saldo >= valor){
            this.#saldo -= valor;
        }
    }

    depositar(valor){
        if(valor > 0){
            this.#saldo += valor;
        }
    }

    imprimeSaldo(){
        console.log("Saldo", this.#saldo);
    }
}

const cliente1 = new Cliente();
cliente1.cpf = '325338328080';
cliente1.nome = 'Fernando Passaia';
cliente1._saldoPrivado = 200; // funciona por que apesar de ser convenção, essa variável não é de fato privada
cliente1.contaCorrente.depositar(100);
cliente1.contaCorrente.sacar(50);
cliente1.contaCorrente.imprimeSaldo(); // 50
console.log("Cliente._saldoPrivado", cliente1._saldoPrivado); // 200
console.log("Cliente1", cliente1); // variável #saldo é omitida por que é privada - 
//console.log("Cliente.#saldo", cliente.contaCorrente.#saldo); //exception por que a variável é de fato privada
