# Contact Manager API

API REST para gerenciamento de contatos com nome e telefone.

![Node.js](https://img.shields.io/badge/Node.js-24.x-339933?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Express](https://img.shields.io/badge/Express-5.x-000000?style=for-the-badge&logo=express&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-7.x-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-8.0-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-4.x-3E67B1?style=for-the-badge&logo=zod&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)

---

## 🚀 About

API para gerenciar uma lista de contatos, permitindo criação, listagem, atualização e exclusão de contatos com validações de nome e telefone.

---

## 🛠 Technologies

| Technology | Purpose |
|---|---|
| **Node.js 24** | Runtime (ES Modules) |
| **TypeScript 5.9** | Type-safe development |
| **Express 5** | HTTP framework |
| **Prisma 7** | ORM with MySQL (MariaDB driver adapter) |
| **MySQL 8** | Relational database |
| **Zod v4** | Schema validation |
| **Docker** | Local MySQL via docker-compose |
| **Scalar** | Interactive API documentation UI |

---

## 📁 Project Structure

```
contact-manager-api/
├── prisma/
│   ├── schema.prisma          # Database schema and models
│   └── migrations/            # SQL migration history
├── src/
│   ├── server.ts              # Entry point
│   ├── app.ts                 # Express app setup
│   ├── config/
│   │   ├── database.ts        # Prisma client singleton
│   │   └── swagger.ts         # OpenAPI spec definition
│   ├── controllers/
│   │   └── contact.controller.ts
│   ├── services/
│   │   └── contact.service.ts
│   ├── repositories/
│   │   └── contact.repository.ts
│   ├── middlewares/
│   │   ├── error.middleware.ts
│   │   ├── validate.middleware.ts
│   │   └── contact.schema.ts
│   ├── routes/
│   │   └── contatos.routes.ts
│   └── types/
│       └── contact.types.ts
├── prisma.config.ts
├── docker-compose.yml
├── .env.example
└── package.json
```

### Request Flow

```
Request → Express Route → Validation Middleware → Controller → Service → Repository → Prisma → Response
```

---

## 🗄️ Database

```
┌─────────────────────────────┐
│          contacts            │
├─────────────────────────────┤
│ id         (PK, autoincrement) │
│ nome       (string)            │
│ telefone   (string, unique)    │
│ createdAt  (datetime)          │
│ updatedAt  (datetime)          │
└─────────────────────────────┘
```

---

## ⚙️ How to Run

### Prerequisites

- Node.js 18+
- npm
- Docker

### 1. Clone the repository

```sh
git clone git@github.com:isaqu3d/contact-manager-api.git
cd contact-manager-api
```

### 2. Install dependencies

```sh
npm install
```

### 3. Set up environment variables

```sh
cp .env.example .env
```

Edit `.env` and fill in the required values:

```env
DATABASE_URL="mysql://root:root@localhost:3306/contact_manager"
PORT=3000
```

### 4. Start the database

```sh
docker compose up -d
```

### 5. Run database migrations

```sh
npx prisma migrate dev
```

### 6. Start the development server

```sh
npm run dev
```

The API will be available at `http://localhost:3000`.
Interactive API docs (Scalar) will be at `http://localhost:3000/docs`.

---

## 📖 API Endpoints

| Method | Route | Description | Status |
|--------|-------|-------------|--------|
| `POST` | `/contatos` | Create a new contact | `201` |
| `GET` | `/contatos` | List all contacts | `200` |
| `GET` | `/contatos/:id` | Get contact by ID | `200` |
| `PATCH` | `/contatos/:id` | Update an existing contact | `200` |
| `DELETE` | `/contatos/:id` | Delete a contact | `204` |

### Validations

- **nome**: at least two words, each with at least 3 characters
- **telefone**: format `(XX) XXXXX-XXXX` or `(XX) XXXX-XXXX`, must be unique

### Error Responses

| Status | Description |
|--------|-------------|
| `400` | Validation error (invalid name, phone format, etc.) |
| `404` | Contact not found |
| `409` | Phone number already exists |
| `500` | Internal server error |

---

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with hot reload |
| `npm run build` | Compile TypeScript |
| `npm start` | Start compiled server |
| `npm run db:migrate` | Run database migrations |
| `npm run db:generate` | Generate Prisma client |
| `npm run db:studio` | Open Prisma Studio |
| `npm run db:push` | Push schema to database |

---

## 📝 License

[MIT License](LICENSE)

Made by [Isaque de Sousa](https://github.com/isaqu3d)
