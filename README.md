<div align="center">
  
  ![](src/assets/imagens/memoteca_logo.png)
  
</div>
<div align="center">

![Badge da versão do Angular](https://img.shields.io/badge/Angular-14.0.0-red?logo=Angular&link=https%3A%2F%2Fangular.io%2Fguide%2Fupdate-to-version-14)
![Badge Versão do NPM](https://img.shields.io/badge/NPM-9.8.1-dark_green)
![Badge de tamanho do repositório](https://img.shields.io/github/repo-size/eduhaag/Memoteca)
![Badge de Last Commit](https://img.shields.io/github/last-commit/eduhaag/memoteca?color=orange)
![](https://img.shields.io/badge/licence-MIT-green)
  
</div>

<div align="center">  
 <a href="#-sobre-o-projeto">Sobre</a> •
  <a href="#-funcionalidades">Funcionalidades</a> •
 <a href="#-layout">Layout</a> • 
 <a href="#-como-executar-o-projeto">Como executar</a> • 
 <a href="#-tecnologias">Tecnologias</a> • 
 <a href="#-como-contribuir-para-o-projeto">Como contribuir</a> • 
 <a href="#-licença">Licença</a>
  
</div>

## 💻 Sobre o projeto
O Memoteca consiste em um mural simulando um *pegboard*, que permite salvar idéias, memórias, citações, trechos de livros e etc, podendo também marcar seus registros como favoritos.

O projeto foi desenvolvido durante uma aula sobre o framework Angular na [Alura](https://alura.com.br)

## 🎨 Funcionalidades
- [x] O usuário deve poder cadastrar uma nova citação contento (opcionalmente) além do conteúdo, o autor e uma estilização (cor);
  - [x] Deve ser possível editar e excluir um registro;
  - [x] Deve ser possível marcar como favorito.
- [x] Deve ser possível listar os registros em formato de mural.
  - [x] Deve haver um campo de busca que permita a busca de um registro por um trecho do texto ou pelo nome do autor.
- [x] Deve ser possível listar apenas os registros marcados como favoritos.

## 🎨 Layout
O layout da aplicação está disponível no figma:<br />
![Badge de acesso ao layout no figma](https://img.shields.io/badge/Acessar_layout-Figma-Green?link=https%3A%2F%2Fwww.figma.com%2Ffile%2FgnU7MbCD1ZGLNUPxqQCBZq%2FMemoteca---Angular%253A-Come%25C3%25A7ando-com-o-Framework%3Ftype%3Ddesign%26node-id%3D148%253A26%26mode%3Ddesign%26t%3DQIjgk1PVB1uphaO0-1)


![](src/assets/imagens/memoteca.png)

## 🚀 Como executar o projeto
### Pré-requisitos
Para executar o projeto, você vai precisar ter instalado em sua máquina as seguintes ferramentas: [Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

### Clonando o repositório
```bash
# Clone o repositório
$ git clone git@github.com:eduhaag/Memoteca.git

# Acesse a página do projeto
$ cd Memoteca
```

### Executando o front-end
```bash
# Instale as dependências
$ npm install

# Rode o servidor de desenvolvimento
$ npm run start

# O servidor front-end será inicializado na porta padrão do Angular (4200). Acesso http://localhost:4200. 
# Caso a porta já esteja sendo usada, o Angular irá informar a porta para acessar a aplicação.
```

### Executando o back-end
```bash
# Acesse a pasta do back-end
$ cd backend

# Instale as dependências
$ npm install

# Rode o servidor
$ npm run start

# O servidor será inicializado na porta 3000 - acesse http://localhost:3000
```

## 🛠️ Tecnologias
**Front-end**
- **[Angular](https://angular.io/)** - E suar ferramentas e bibliotecas internas;
- **[Typescript](https://www.typescriptlang.org/)**.
> Veja o arquivo [package.json](https://github.com/eduhaag/Memoteca/package.json)

**Back-end**
- **[Json-server](https://github.com/typicode/json-server)**
> Veja o arquivo [package.json](https://github.com/eduhaag/Memoteca/backend/package.json)

**Utilitários**
- Protótipo: **[Figma](https://www.figma.com/file/gnU7MbCD1ZGLNUPxqQCBZq/Memoteca---Angular%3A-Come%C3%A7ando-com-o-Framework?type=design&node-id=148%3A26&mode=design&t=MN3YxHfQAxS4HQkL-1)**;
- Editor:  **[Visual Studio Code](https://code.visualstudio.com/)**
- Fontes: **[Inter](https://fonts.google.com/specimen/Inter), [Roboto Mono](https://fonts.google.com/specimen/Roboto+Mono)**

## 💪 Como contribuir para o projeto
1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`

## 📝 Licença
Este projeto esta sobe a licença MIT.
