const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");
const Pessoa = require("../src/Pessoa.js");

let pessoa;
let resultado;

function defineIdade(idade, contexto) {
    pessoa = new Pessoa();
    contexto.idade = idade;
}

Given("que a pessoa tem {int} anos ou mais", function (idade) {
    defineIdade(idade, this);
});

When("verifico se ela pode consumir bebida alcoólica", function () {
    resultado = pessoa.ehMaiorDeIdade(this.idade);
});

Then("a resposta deve ser que pode consumir bebida alcoólica", function () {
    assert.strictEqual(resultado, true);
});

Given("que a pessoa tem menos de {int} anos", function (idade) {
    defineIdade(idade, this);
});

Then("a resposta deve ser que não pode consumir bebida alcoólica", function () {
    assert.strictEqual(resultado, false);
});
