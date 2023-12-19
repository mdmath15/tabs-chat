# GoBots - Chat

Este é um projeto de chat simples que possibilita a comunicação entre abas do navegador usando a BroadcastChannel API. Desenvolvido com React e TypeScript, o projeto também utiliza Zustand para gerenciamento de estado, Axios para requisições HTTP, React Query para gerenciamento de dados assíncronos, Styled-Components para estilização e Vite como build tool. Ele oferece uma maneira prática e eficiente para troca de mensagens em tempo real dentro do mesmo navegador.

## Pré-requisitos

Antes de começar, certifique-se de ter o Docker instalado em sua máquina. Se você não tem o Docker, pode baixá-lo e instalá-lo [aqui](https://www.docker.com/get-started).

## Configuração

Clone o repositório do projeto para a sua máquina local:

```bash
git clone https://github.com/mdmath15/gobots-chat.git
cd gobots-chat
``` 
### Construção da Imagem Docker

Para construir a imagem Docker do seu projeto, execute o seguinte comando no diretório raiz do projeto:

```bash
docker build -t nome-da-imagem .
``` 
Este comando construirá uma imagem Docker usando o Dockerfile fornecido. Substitua nome-da-imagem pelo nome que você deseja dar à sua imagem.

### Executando o Projeto

Depois de construir a imagem, você pode executar o projeto com o seguinte comando:

```bash
docker run -p 8080:8080 nome-da-imagem
``` 
Isso iniciará um servidor na porta 8080. Você pode acessar o aplicativo no seu navegador em http://localhost:8080.