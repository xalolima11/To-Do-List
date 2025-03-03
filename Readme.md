# 📝 To-Do List App
Aplicativo Full-Stack de Lista de Tarefas (To-Do List) desenvolvido com **React (Vite)** no frontend e **Node.js (Express.js) + MongoDB (Mongoose)** no backend.

---

## 🚀 Tecnologias Utilizadas

- **Frontend:** React, Vite
- **Backend:** Node.js, Express.js, Mongoose
- **Base de Dados:** MongoDB (MongoDB Atlas)

---

## 📂 Estrutura do Projeto

```
📦 todo-list-app
├── 📂 backend          # Código do servidor (Node.js + Express)
│   ├── 📂 models       # Modelos do MongoDB
│   ├── 📂 routes       # Rotas da API
│   ├── 📂 controllers  # Lógica da aplicação
│   ├── server.js       # Ponto de entrada do backend
│   └── package.json    # Dependências e scripts do backend
│
├── 📂 frontend         # Código do cliente (React + Vite)
│   ├── 📂 src          # Código-fonte do React
│   ├── 📂 components   # Componentes da aplicação
│   ├── App.jsx         # Componente principal
│   ├── main.jsx        # Ponto de entrada do React
│   ├── index.css       # Estilos globais
│   └── package.json    # Dependências e scripts do frontend
│
└── README.md           # Instruções do projeto
```

---

## 🔧 Como Rodar o Projeto

### 1️⃣ Configuração do Backend (Servidor)
1. Acesse a pasta do backend:
   ```sh
   cd backend
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Crie um arquivo **.env** na pasta `backend` e adicione a string de conexão com o MongoDB Atlas:
   ```sh
   MONGO_URI=mongodb+srv://seu_usuario:senha@cluster.mongodb.net/todoDB
   ```
4. Inicie o servidor:
   ```sh
   npm start
   ```
   O backend será executado em **http://localhost:5000**.

---

### 2️⃣ Configuração do Frontend (Cliente)
1. Acesse a pasta do frontend:
   ```sh
   cd frontend
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Inicie o frontend:
   ```sh
   npm run dev
   ```
   O frontend será executado em **http://localhost:5173**.

---

## 📡 API - Rotas Disponíveis

### 📌 **Tarefas (`/tasks`)**
- `GET /tasks` → Retorna todas as tarefas
- `POST /tasks` → Adiciona uma nova tarefa `{ title: "Nova Tarefa", completed: false }`
- `PATCH /tasks/:id` → Atualiza uma tarefa `{ completed: true }`
- `DELETE /tasks/:id` → Remove uma tarefa

