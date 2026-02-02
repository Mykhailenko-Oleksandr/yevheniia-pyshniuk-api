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
        RegisterRequest: {
          type: 'object',
          properties: {
            firstName: { type: 'string', example: 'Oleksandr' },
            lastName: { type: 'string', example: 'Mykhailenko' },
            email: {
              type: 'string',
              format: 'email',
              example: 'oleksandr@example.com',
            },
            password: {
              type: 'string',
              format: 'password',
              example: 'mypassword123',
            },
          },
          required: ['firstName', 'lastName', 'email', 'password'],
        },
        LoginRequest: {
          type: 'object',
          properties: {
            email: {
              type: 'string',
              format: 'email',
              example: 'oleksandr@example.com',
            },
            password: {
              type: 'string',
              format: 'password',
              example: 'mypassword123',
            },
          },
          required: ['email', 'password'],
        },
        AuthResponse: {
          type: 'object',
          properties: {
            _id: { type: 'string', example: '507f1f77bcf86cd799439011' },
            firstName: { type: 'string', example: 'Oleksandr' },
            lastName: { type: 'string', example: 'Mykhailenko' },
            email: { type: 'string', example: 'oleksandr@example.com' },
            avatar: {
              type: 'string',
              example: 'https://res.cloudinary.com/.../default-avatar.webp',
            },
            role: {
              type: 'string',
              enum: ['Guest', 'Admin'],
              example: 'Guest',
            },
          },
        },
        Error: {
          type: 'object',
          properties: {
            statusCode: { type: 'number', example: 400 },
            message: { type: 'string', example: 'Validation error' },
          },
        },
      },
    },

    paths: {
      '/api/auth/register': {
        post: {
          tags: ['Auth'],
          summary: 'Register a new user',
          description:
            'Creates a new user account and returns user data with session cookies',
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/RegisterRequest',
                },
              },
            },
          },
          responses: {
            201: {
              description: 'User successfully registered',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/User',
                  },
                },
              },
            },
            409: {
              description: 'Email already in use',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/Error',
                  },
                },
              },
            },
            400: {
              description: 'Validation error',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/Error',
                  },
                },
              },
            },
          },
        },
      },
      // '/api/auth/login': {
      //   post: {
      //     tags: ['Auth'],
      //     summary: 'Login user',
      //     description:
      //       'Authenticates user and returns user data with session cookies',
      //     requestBody: {
      //       required: true,
      //       content: {
      //         'application/json': {
      //           schema: {
      //             $ref: '#/components/schemas/LoginRequest',
      //           },
      //         },
      //       },
      //     },
      //     responses: {
      //       200: {
      //         description: 'User successfully logged in',
      //         content: {
      //           'application/json': {
      //             schema: {
      //               $ref: '#/components/schemas/User',
      //             },
      //           },
      //         },
      //       },
      //       401: {
      //         description: 'Invalid credentials',
      //         content: {
      //           'application/json': {
      //             schema: {
      //               $ref: '#/components/schemas/Error',
      //             },
      //           },
      //         },
      //       },
      //       400: {
      //         description: 'Validation error',
      //         content: {
      //           'application/json': {
      //             schema: {
      //               $ref: '#/components/schemas/Error',
      //             },
      //           },
      //         },
      //       },
      //     },
      //   },
      // },
      // '/api/auth/logout': {
      //   post: {
      //     tags: ['Auth'],
      //     summary: 'Logout user',
      //     description: 'Logs out user and clears session cookies',
      //     security: [
      //       {
      //         cookieAuth: [],
      //       },
      //     ],
      //     responses: {
      //       204: {
      //         description: 'User successfully logged out',
      //       },
      //     },
      //   },
      // },
      // '/api/auth/refresh': {
      //   post: {
      //     tags: ['Auth'],
      //     summary: 'Refresh user session',
      //     description: 'Refreshes user session and returns new session cookies',
      //     responses: {
      //       200: {
      //         description: 'Session successfully refreshed',
      //         content: {
      //           'application/json': {
      //             schema: {
      //               type: 'object',
      //               properties: {
      //                 message: {
      //                   type: 'string',
      //                   example: 'Session refreshed',
      //                 },
      //               },
      //             },
      //           },
      //         },
      //       },
      //       401: {
      //         description: 'Session not found or expired',
      //         content: {
      //           'application/json': {
      //             schema: {
      //               $ref: '#/components/schemas/Error',
      //             },
      //           },
      //         },
      //       },
      //     },
      //   },
      // },
    },
  },
  apis: [],
};
export const swaggerSpec = swaggerJsdoc(options);
