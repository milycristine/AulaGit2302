class livro{
    constructor(pNome, pPreco){
        this.nome= pNome
        this.preco= pPreco
    }
    get Nome(){return this.nome }
    set Nome(pNome){this.nome=pNome}
    get Preco(){return this.preco }
    set Preco(pPreco){this.preco=pPreco}
}
var obj_livro1= new livro("Use a cabeça Java", 200)
console.log("O livro "+ obj_livro1.nome + " custa "+obj_livro1.preco+" reais ")