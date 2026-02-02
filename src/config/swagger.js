import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Yevheniia Pyshniuk API',
      version: '1.0.0',
      description: 'API documentation for Yevheniia Pyshniuk API application',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
    components: {
      securitySchemes: {
        cookieAuth: { type: 'apiKey', in: 'cookie', name: 'sessionId' },
      },

      // Models
      schemas: {
        User: {
          type: 'object',
          properties: {
            _id: { type: 'string', example: '507f1f77bcf86cd799439011' },
            firstName: { type: 'string', example: 'Oleksandr' },
            lastName: { type: 'string', example: 'Mykhailenko' },
            email: {
              type: 'string',
              format: 'email',
              example: 'oleksandr@example.com',
            },
            avatar: {
              type: 'string',
              format: 'uri',
              example:
                'https://res.cloudinary.com/ddln4hnns/image/upload/v1769512644/default-avatar_hlcio8.webp',
            },
            role: {
              type: 'string',
              enum: ['Guest', 'Admin'],
              example: 'Guest',
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
              example: '2026-02-02T12:00:00Z',
            },
            updatedAt: {
              type: 'string',
              format: 'date-time',
              example: '2026-02-02T12:30:00Z',
            },
          },
        },
        Session: {
          type: 'object',
          properties: {
            _id: { type: 'string', example: '64f1f77bcf86cd799439011a' },
            userId: {
              type: 'string',
              description: 'ID користувача (ObjectId)',
              example: '507f1f77bcf86cd799439011',
            },
            accessToken: {
              type: 'string',
              description: 'JWT access token',
              example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
            },
            refreshToken: {
              type: 'string',
              description: 'JWT refresh token',
              example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
            },
            accessTokenValidUntil: {
              type: 'string',
              format: 'date-time',
              description: 'Дата закінчення дії access token',
              example: '2026-02-02T14:00:00Z',
            },
            refreshTokenValidUntil: {
              type: 'string',
              format: 'date-time',
              description: 'Дата закінчення дії refresh token',
              example: '2026-03-02T14:00:00Z',
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
              example: '2026-02-02T12:00:00Z',
            },
            updatedAt: {
              type: 'string',
              format: 'date-time',
              example: '2026-02-02T12:30:00Z',
            },
          },
        },
        Project: {
          type: 'object',
          properties: {
            _id: { type: 'string', example: '64f1f77bcf86cd799439011a' },
            images: {
              type: 'array',
              items: { type: 'string', format: 'uri' },
              example: [
                'https://res.cloudinary.com/demo/image/upload/v1234567890/project1.jpg',
                'https://res.cloudinary.com/demo/image/upload/v1234567890/project2.jpg',
              ],
            },
            en: {
              type: 'object',
              properties: {
                title: { type: 'string', example: 'Modern Interior Design' },
                description: {
                  type: 'string',
                  example:
                    'A project showcasing modern interior design with minimalistic elements.',
                },
              },
            },
            uk: {
              type: 'object',
              properties: {
                title: {
                  type: 'string',
                  example: "Сучасний інтер'єрний дизайн",
                },
                description: {
                  type: 'string',
                  example:
                    "Проєкт, що демонструє сучасний інтер'єрний дизайн з мінімалістичними елементами.",
                },
              },
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
              example: '2026-02-02T12:00:00Z',
            },
            updatedAt: {
              type: 'string',
              format: 'date-time',
              example: '2026-02-02T12:30:00Z',
            },
          },
        },
        Message: {
          type: 'object',
          properties: {
            _id: { type: 'string', example: '64f1f77bcf86cd799439011a' },
            userName: {
              type: 'string',
              description: "Ім'я користувача, який залишив повідомлення",
              example: 'Олександр',
            },
            phone: {
              type: 'string',
              description: 'Телефон користувача',
              example: '+380501234567',
            },
            comment: {
              type: 'string',
              description: 'Текст повідомлення/коментаря',
              example: 'Хочу замовити консультацію з дизайну',
            },
            isRead: {
              type: 'boolean',
              description: 'Статус прочитання повідомлення',
              example: false,
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
              example: '2026-02-02T12:00:00Z',
            },
            updatedAt: {
              type: 'string',
              format: 'date-time',
              example: '2026-02-02T12:30:00Z',
            },
          },
        },
        Feedback: {
          type: 'object',
          properties: {
            _id: { type: 'string', example: '64f1f77bcf86cd799439011a' },
            userName: {
              type: 'string',
              description: "Ім'я користувача, який залишив відгук",
              example: 'Олександр',
            },
            comment: {
              type: 'string',
              description: 'Текст відгуку',
              example: 'Дуже задоволений сервісом, все швидко і якісно!',
            },
            rating: {
              type: 'number',
              description: 'Оцінка від 1 до 5',
              minimum: 1,
              maximum: 5,
              example: 5,
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
              example: '2026-02-02T12:00:00Z',
            },
            updatedAt: {
              type: 'string',
              format: 'date-time',
              example: '2026-02-02T12:30:00Z',
            },
          },
        },
      },
    },

    paths: {
      '/api/messages': {
        get: {
          tags: ['Messages'],
          summary: 'Отримати всі повідомлення',
          description: 'Повертає список повідомлень з кількістю',
          responses: {
            200: {
              description: 'Успішна відповідь',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      totalCount: { type: 'number', example: 10 },
                      unreadCount: { type: 'number', example: 3 },
                      readCount: { type: 'number', example: 7 },
                      messages: {
                        type: 'array',
                        items: { $ref: '#/components/schemas/Message' },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  apis: [],
};
export const swaggerSpec = swaggerJsdoc(options);
