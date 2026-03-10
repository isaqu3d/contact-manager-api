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
    components: {
      schemas: {
        Contact: {
          type: 'object',
          properties: {
            id: { type: 'integer', example: 1 },
            nome: { type: 'string', example: 'João Silva' },
            telefone: { type: 'string', example: '(11) 91234-5678' },
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
        ErrorResponse: {
          type: 'object',
          properties: {
            message: { type: 'string', example: 'Mensagem de erro' },
          },
        },
      },
    },
  },
  apis: ['./src/routes/*.ts'],
};

export default swaggerJsdoc(options);
