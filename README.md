# Projeto Sorteio - Formação.DEV Express 🎉

Este projeto foi criado para realizar o sorteio de um prêmio entre participantes de um evento. No entanto, o sorteio tem uma lógica invertida: **o último participante sorteado, ou seja, o "azarado mais sortudo", será o vencedor**!

## Funcionalidades

- ✅ **Carregar a lista de participantes**: O sistema carrega a lista de participantes do evento que preencheram os critérios para participar do sorteio.
- ✅ **Sorteio aleatório invertido**: Participantes são sorteados um a um, até que reste o último, que será o vencedor.
- ✅ **Registro do vencedor**: O nome do último participante sorteado será destacado como o vencedor.
- ✅ **Interface interativa**: Barra de progresso que mostra o andamento do sorteio até o último participante.

## Como Usar

### 1. **Clone o Repositório**

```bash
git clone https://github.com/IgorViniciosAV/projeto-sorteio
cd sorteio
```

### 2. **Instale as Dependências**

O projeto utiliza [Node.js](https://nodejs.org/) para rodar. Certifique-se de que está instalado em sua máquina e rode o seguinte comando:

```bash
npm install
```

### 3. **Forneça a Lista de Participantes**

Prepare um arquivo CSV contendo o nome e o e-mail dos participantes, no seguinte formato (nome;email):

```
João Silva;joao@example.com
Maria Oliveira;maria@example.com
```

Salve o arquivo como `data/dados.csv` na pasta `src` do projeto.

### 4. **Execute o Sorteio**

Para executar o sorteio invertido e selecionar o "azarado mais sortudo", utilize o seguinte comando:

```bash
npm start
```

### 5. **Veja o Resultado**

Os participantes serão sorteados um a um, e o último nome sorteado será o grande vencedor do prêmio especial.

## Tecnologias Utilizadas

- **Node.js**: Plataforma para execução do código JavaScript no backend.
- **TypeScript**: Linguagem de programação que aumenta a robustez do código.
- **terminal-kit**: Biblioteca usada para criar uma interface de terminal interativa e exibir a barra de progresso.

## Exemplo de Execução

```bash
npm start
```

Saída esperada:

```bash
Iniciando o Sorteio...

Progresso: 100%[=======================================>] done
O AZARADO MAIS SORTUDO é:
Betty Robinson <yes***@lawson.info>

🎉🎉🎉🎉🎉🎉🎉🎉🎉
```

## Contribuição

Contribuições são bem-vindas! Se você tiver sugestões de melhorias ou encontrar problemas, abra uma **issue** ou envie um **pull request**.

---

Feito com diversão e emoção para todos os participantes da Formação.DEV Express! 😉
