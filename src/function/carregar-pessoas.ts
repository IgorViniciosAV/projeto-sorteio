import fs from "fs";
import Pessoa from "../model/Pessoa";

export default function carregarPessoas(arquivo: string): Pessoa[] {
    const conteudo = fs.readFileSync(arquivo, "utf-8");
    const linhas = conteudo.split("\n");

    const pessoas = linhas
        .filter((l) => l.trim().length > 0) // remove as linhas em brando
        .map((linha) => {
            const [nome, email] = linha.split(";"); // desestruturação de array
            return new Pessoa(nome.trim(), email.trim());
        });

    return pessoas;
}
