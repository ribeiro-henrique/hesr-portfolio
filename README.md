# 💼 Dev Portfolio - React + Vite + Bootstrap

[Portfólio](https://hesr-portfolio.vercel.app/)

[Planilha de Contato](https://docs.google.com/spreadsheets/d/1punuY0g8i4rGii7LZJoln2C-CezJP_zQ5kvLbzAuEjU/edit?usp=sharing)

Portfólio desenvolvido com **React + Vite**, utilizando
**Bootstrap 5** para layout responsivo e integração com **n8n** para
automação de envio de mensagens do formulário de contato.

O projeto apresenta informações profissionais, projetos e um formulário
de contato funcional que envia dados para um **webhook do n8n**,
responsável por persistir os dados em uma **planilha do Google Sheets**.

------------------------------------------------------------------------

# 🚀 Tecnologias Utilizadas

## Frontend

-   React 19
-   Vite
-   TypeScript
-   Bootstrap 5

## Automação / Backend

-   n8n (Webhook Automation)
-   Google Sheets API

------------------------------------------------------------------------

# 🏗️ Estrutura da Aplicação

    src
     ├── components
     │   ├── Hero
     │   ├── About
     │   ├── Projects
     │   └── Contact
     │
     ├── styles
     │
     ├── App.tsx
     └── main.tsx

### Componentes principais

**Hero**\
Apresentação inicial do portfólio.

**About**\
Seção com informações profissionais e habilidades.

**Projects**\
Apresentação de projetos desenvolvidos.

**Contact**\
Formulário de contato integrado com automação via webhook.

------------------------------------------------------------------------

# 📬 Fluxo do Formulário de Contato

<img width="1316" height="540" alt="image" src="https://github.com/user-attachments/assets/bc58894d-670d-4d4d-bfc4-49ffb71db2a0" />


O formulário envia dados para um **webhook do n8n**, que processa e
salva os dados.

### Campos enviados

-   Nome
-   Email
-   Telefone
-   Mensagem

------------------------------------------------------------------------

# 🔄 Arquitetura da Automação (n8n)

Fluxo configurado no **n8n**:

    Frontend (React)
          │
          ▼
    Webhook (POST)
          │
          ▼
    Format Data
          │
          ▼
    Google Sheets (Append Row)
          │
          ▼
    Response → Frontend

### Etapas do fluxo

#### 1️⃣ Webhook Contact

Recebe a requisição `POST` enviada pelo formulário.

Endpoint:

    /webhook/portfolio-contact

------------------------------------------------------------------------

#### 2️⃣ Format Data

Normaliza os dados recebidos e adiciona timestamp.

Campos formatados:

    name
    email
    phone
    message
    created_at

------------------------------------------------------------------------

#### 3️⃣ Save Contact

<img width="1123" height="326" alt="image" src="https://github.com/user-attachments/assets/3de37ff8-3e93-47e3-be32-23f39faf7a25" />


Insere uma nova linha na planilha **Google Sheets**.

Planilha utilizada:

    Contatos - Portfólio

Campos persistidos:

| name \| email \| phone \| message \| created_at \|

------------------------------------------------------------------------

#### 4️⃣ Respond to Frontend

Retorna uma resposta JSON para o frontend.

``` json
{
  "status": "success",
  "message": "Contato recebido"
}
```

------------------------------------------------------------------------

# 💬 Feedback ao Usuário

Após o envio do formulário:

-   Em caso de sucesso → **SweetAlert2** exibe confirmação
-   Em caso de erro → alerta de falha no envio

------------------------------------------------------------------------

# 🧪 Scripts Disponíveis

## Rodar ambiente de desenvolvimento

``` bash
npm run dev
```

------------------------------------------------------------------------

# 👨‍💻 Autor

**Henrique Ribeiro**

Desenvolvedor focado em soluções web, automação e construção de produtos
digitais.
