# To-Do List API

Este projeto é uma API simples para gerenciamento de tarefas (To-Do List), construída com **Node.js**, **Express**, e **MySQL**. A API permite a criação, leitura, atualização e remoção de tarefas.

## Funcionalidades

A API oferece as seguintes funcionalidades:
- **Criar uma nova tarefa**
- **Listar todas as tarefas**
- **Atualizar o status de uma tarefa**
- **Deletar uma tarefa**

## Tecnologias Utilizadas

- **Node.js**: Plataforma JavaScript server-side.
- **Express**: Framework para Node.js que facilita a criação de APIs.
- **MySQL**: Banco de dados relacional usado para armazenar as tarefas.
- **MySQL2**: Cliente MySQL compatível com Promises.
- **dotenv**: Gerenciamento de variáveis de ambiente.
- **CORS**: Middleware para permitir o acesso a partir de outras origens.

## Dependências

```json
{
  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.21.0",
    "mysql2": "^3.11.3"
  }
}
```

# Configuração do Banco de Dados

Execute o seguinte comando SQL no seu banco de dados MySQL para criar a tabela necessária para armazenar as tarefas:

```sql
CREATE TABLE tasks (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(45) NOT NULL,
    status VARCHAR(45) NOT NULL,
    created_at VARCHAR(45) NOT NULL
);
```

# Variáveis de Ambiente

Você precisará criar um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```
DB_HOST=localhost
DB_USER=seu_user
DB_PASSWORD=sua_senha
DB_NAME=todolist
```
# Como Executar o Projeto

Clone o repositório:

```
git clone https://github.com/seu-usuario/todolist-api.git](https://github.com/JeanFabioGruber/Lista-de-tarefas.git
```

Instale as dependências:

```
npm install
```

Configure suas variáveis de ambiente no arquivo `.env`.

Inicialize o servidor:

```bash
npm start
```

Acesse a API em [http://localhost:3000].

## Endpoints da API

1. **Listar todas as tarefas**  
   **URL:** `/tasks`  
   **Método:** `GET`  
   **Descrição:** Lista todas as tarefas cadastradas.

2. **Criar uma nova tarefa**  
   **URL:** `/tasks`  
   **Método:** `POST`  
   **Descrição:** Cria uma nova tarefa.  
   **Body (JSON):**

   ```json
   {
     "title": "Nome da tarefa",
     "status": "pendente"
   }
  ``
3. **Atualizar uma tarefa**  
   **URL:** `/tasks/:id`  
   **Método:** `PUT`  
   **Descrição:** Atualiza o status de uma tarefa específica.  
   **Body (JSON):**

   ```json
   {
     "status": "concluída"
   }
  ```

## Endpoints da API

4. **Deletar uma tarefa**  
   **URL:** `/tasks/:id`  
   **Método:** `DELETE`  
   **Descrição:** Remove uma tarefa específica.

## Middlewares

- **validateBody:** Middleware que valida o corpo das requisições POST.
- **validatePutBody:** Middleware que valida o corpo das requisições PUT.
