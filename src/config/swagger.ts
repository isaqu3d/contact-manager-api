import swaggerJsdoc from 'swagger-jsdoc';

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Contact Manager API',
      version: '1.0.0',
      description: 'API para gerenciamento de contatos com nome e telefone.',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
    paths: {
      '/contatos': {
        get: {
          tags: ['Contatos'],
          summary: 'Listar todos os contatos',
          responses: {
            200: {
              description: 'Lista de contatos',
              content: {
                'application/json': {
                  schema: {
                    type: 'array',
                    items: { $ref: '#/components/schemas/Contact' },
                  },
                },
              },
            },
          },
        },
        post: {
          tags: ['Contatos'],
          summary: 'Criar novo contato',
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/ContactBody' },
              },
            },
          },
          responses: {
            201: {
              description: 'Contato criado',
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/Contact' },
                },
              },
            },
            400: {
              description: 'Dados inválidos',
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/ErrorResponse' },
                },
              },
            },
          },
        },
      },
      '/contatos/{id}': {
        get: {
          tags: ['Contatos'],
          summary: 'Buscar contato por ID',
          parameters: [
            {
              in: 'path',
              name: 'id',
              required: true,
              schema: { type: 'integer' },
            },
          ],
          responses: {
            200: {
              description: 'Contato encontrado',
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/Contact' },
                },
              },
            },
            404: {
              description: 'Contato não encontrado',
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/ErrorResponse' },
                },
              },
            },
          },
        },
        patch: {
          tags: ['Contatos'],
          summary: 'Atualizar contato existente',
          parameters: [
            {
              in: 'path',
              name: 'id',
              required: true,
              schema: { type: 'integer' },
            },
          ],
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/ContactUpdateBody' },
              },
            },
          },
          responses: {
            200: {
              description: 'Contato atualizado',
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/Contact' },
                },
              },
            },
            400: {
              description: 'Dados inválidos',
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/ErrorResponse' },
                },
              },
            },
            404: {
              description: 'Contato não encontrado',
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/ErrorResponse' },
                },
              },
            },
          },
        },
        delete: {
          tags: ['Contatos'],
          summary: 'Remover contato',
          parameters: [
            {
              in: 'path',
              name: 'id',
              required: true,
              schema: { type: 'integer' },
            },
          ],
          responses: {
            204: {
              description: 'Contato removido com sucesso',
            },
            404: {
              description: 'Contato não encontrado',
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/ErrorResponse' },
                },
              },
            },
          },
        },
      },
    },
    components: {
      schemas: {
        Contact: {
          type: 'object',
          properties: {
            id: { type: 'integer', example: 1 },
            nome: { type: 'string', example: 'João Silva' },
            telefone: { type: 'string', example: '(11) 91234-5678' },
            createdAt: { type: 'string', format: 'date-time', example: '2026-03-10T12:00:00.000Z' },
            updatedAt: { type: 'string', format: 'date-time', example: '2026-03-10T12:00:00.000Z' },
          },
        },
        ContactBody: {
          type: 'object',
          required: ['nome', 'telefone'],
          properties: {
            nome: { type: 'string', example: 'João Silva' },
            telefone: { type: 'string', example: '(11) 91234-5678' },
          },
        },
        ContactUpdateBody: {
          type: 'object',
          properties: {
            nome: { type: 'string', example: 'João Silva' },
            telefone: { type: 'string', example: '(11) 91234-5678' },
          },
        },
        ErrorResponse: {
          type: 'object',
          properties: {
            message: { type: 'string', example: 'Mensagem de erro' },
          },
        },
      },
    },
  },
  apis: [],
};

export const swaggerSpec = swaggerJsdoc(options);
