class Produto {
    constructor(nome, peso, preco, vencimento) {
        this.nome = nome;
        this.peso = peso;
        this.preco = preco;
        this.vencimento = vencimento;
    }
    estahVencido() {
        return !this.vencimento >= 2024;

        // if(this.vencimento >= 2024) {
        //     return false;
        // } else {
        //     return true;
        // }
    }

}