# API para Gerenciador de tarefas

Projeto construido utilizando NodeJS/Express e Prisma integrado com MongoDB

## Usuários

### Criar Usuário

**Método:** `POST`  
**URL:** `http://localhost:3000/cadastro`  
**Headers:**  
- `Content-Type: application/json`  

**Body:**
```json
{
  "name": "luan",
  "email": "luan@gmail.com",
  "password": "senha123"
}
```

---

### Login

**Método:** `POST`  
**URL:** `http://localhost:3000/login`  
**Headers:**  
- `Content-Type: application/json`

**Body:**
```json
{
  "email": "luan@gmail.com",
  "password": "senha123"
}
```

---

## Tarefas

## Listar Tarefas

**Método:** `GET`  
**Endpoint:** `/list`  
**Query Params (opcional):**
- `taskId`: retorna uma tarefa específica.
- `authorId`: filtra tarefas pelo ID do autor.
- `completed`: filtra por status (`true` ou `false`).

**Resposta:** 200 com objeto(s) da(s) tarefa(s) ou 404 se não encontrada.

---

## Criar Tarefa

**Método:** `POST`  
**Endpoint:** `/add`  
**Headers:**
- `Content-Type: application/json`

**Body:**
```json
{
  "title": "Título da tarefa",
  "description": "Descrição da tarefa",
  "authorId": "ID do autor"
}
```

**Resposta:** 201 com a tarefa criada ou 404 em caso de erro.

---

## Atualizar Tarefa

**Método:** `PUT`  
**Endpoint:** `/edit/:taskId`  
**Parâmetro de rota:** `taskId` (ID da tarefa a ser editada)  
**Headers:**
- `Content-Type: application/json`

**Body:**
```json
{
  "title": "Novo título",
  "description": "Nova descrição",
  "completed": true
}
```

**Resposta:** 201 com a tarefa atualizada ou 404 em caso de erro.

---

## Remover Tarefa

**Método:** `DELETE`  
**Endpoint:** `/delete/:taskId`  
**Parâmetro de rota:** `taskId` (ID da tarefa a ser removida)

**Resposta:** 201 com mensagem de sucesso ou 404 em caso de erro.

---

Todas as rotas utilizam o Prisma Client para comunicação com o banco de dados.