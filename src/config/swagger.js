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
        UpdateRoleRequest: {
          type: 'object',
          properties: {
            role: {
              type: 'string',
              enum: ['Guest', 'Admin'],
              example: 'Guest',
            },
          },
          required: ['role'],
        },
        UpdateNameRequest: {
          type: 'object',
          properties: {
            firstName: {
              type: 'string',
              example: 'Petro',
            },
            lastName: {
              type: 'string',
              example: 'Petrenko',
            },
          },
          required: ['firstName', 'lastName'],
        },
        UpdatePasswordRequest: {
          type: 'object',
          properties: {
            oldPassword: {
              type: 'string',
              format: 'password',
              example: 'mypassword123',
            },
            newPassword: {
              type: 'string',
              format: 'password',
              example: 'mypassword456',
            },
          },
          required: ['oldPassword', 'newPassword'],
        },
        CreateFeedbackRequest: {
          type: 'object',
          properties: {
            userName: {
              type: 'string',
              example: 'Petro Petrenko',
            },
            comment: {
              type: 'string',
              example: 'Telegram',
            },
            rating: {
              type: 'number',
              minimum: 1,
              maximum: 5,
              example: '5',
            },
          },
          required: ['userName', 'comment', 'rating'],
        },
        Error: {
          type: 'object',
          properties: {
            message: {
              type: 'string',
              example: 'Error message',
            },
          },
        },
      },
    },

    paths: {
      // Auth
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
      '/api/auth/login': {
        post: {
          tags: ['Auth'],
          summary: 'Login user',
          description:
            'Authenticates user and returns user data with session cookies',
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/LoginRequest',
                },
              },
            },
          },
          responses: {
            200: {
              description: 'User successfully logged in',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/User',
                  },
                },
              },
            },
            401: {
              description: 'Invalid credentials',
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
      '/api/auth/logout': {
        post: {
          tags: ['Auth'],
          summary: 'Logout user',
          description: 'Logs out user and clears session cookies',
          security: [
            {
              cookieAuth: [],
            },
          ],
          responses: {
            204: {
              description: 'User successfully logged out',
            },
          },
        },
      },
      '/api/auth/refresh': {
        get: {
          tags: ['Auth'],
          summary: 'Refresh user session',
          description: 'Refreshes user session and returns new session cookies',
          responses: {
            200: {
              description: 'Session successfully refreshed',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      message: {
                        type: 'string',
                        example: 'Session refreshed',
                      },
                    },
                  },
                },
              },
            },
            401: {
              description: 'Session not found or expired',
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

      // Users
      '/api/users': {
        get: {
          tags: ['Users'],
          summary: 'Get all users',
          description: 'Returns a paginated list of all users (Admin only)',
          security: [{ cookieAuth: [] }],
          parameters: [
            {
              name: 'page',
              in: 'query',
              schema: { type: 'integer', minimum: 1, default: 1 },
              description: 'Page number',
            },
            {
              name: 'perPage',
              in: 'query',
              schema: { type: 'integer', minimum: 5, maximum: 20, default: 10 },
              description: 'Number of users per page',
            },
          ],
          responses: {
            200: {
              description: 'List of users with pagination',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      page: { type: 'integer', example: 1 },
                      perPage: { type: 'integer', example: 10 },
                      totalUsers: { type: 'integer', example: 50 },
                      totalPages: { type: 'integer', example: 5 },
                      users: {
                        type: 'array',
                        items: {
                          $ref: '#/components/schemas/User',
                        },
                      },
                    },
                  },
                },
              },
            },
            401: {
              description: 'Unauthorized',
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
      '/api/users/me': {
        get: {
          tags: ['Users'],
          summary: 'Get current user',
          description: 'Returns the currently authenticated user',
          security: [{ cookieAuth: [] }],
          responses: {
            200: {
              description: 'Current user data',
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/User' },
                },
              },
            },
            401: {
              description: 'Unauthorized',
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
      '/api/users/{userId}': {
        get: {
          tags: ['Users'],
          summary: 'Get user by ID',
          description: 'Returns user data by ID',
          parameters: [
            {
              name: 'userId',
              in: 'path',
              required: true,
              schema: { type: 'string' },
              description: 'User ID',
            },
          ],
          responses: {
            200: {
              description: 'User data',
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/User' },
                },
              },
            },
            404: {
              description: 'User not found',
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
      '/users/me/avatar': {
        patch: {
          tags: ['Users'],
          summary: 'Update user avatar',
          description: 'Uploads and updates avatar for current user',
          security: [{ cookieAuth: [] }],
          requestBody: {
            required: true,
            content: {
              'multipart/form-data': {
                schema: {
                  type: 'object',
                  properties: { avatar: { type: 'string', format: 'binary' } },
                },
              },
            },
          },
          responses: {
            200: {
              description: 'Avatar updated',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: { url: { type: 'string', format: 'uri' } },
                  },
                },
              },
            },
            400: {
              description: 'No file provided',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/Error',
                  },
                },
              },
            },
            401: {
              description: 'Unauthorized',
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
      '/users/{userId}/role': {
        patch: {
          tags: ['Users'],
          summary: 'Update user role',
          description: 'Updates role of a user (Admin only)',
          security: [{ cookieAuth: [] }],
          parameters: [
            {
              name: 'userId',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          ],
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/UpdateRoleRequest' },
              },
            },
          },
          responses: {
            200: {
              description: 'Role updated',
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/User' },
                },
              },
            },
            401: {
              description: 'Unauthorized',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/Error',
                  },
                },
              },
            },
            404: {
              description: 'User not found',
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
      '/users/me/name': {
        patch: {
          tags: ['Users'],
          summary: 'Update user name',
          description: 'Updates first and last name of current user',
          security: [{ cookieAuth: [] }],
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/UpdateNameRequest' },
              },
            },
          },
          responses: {
            200: {
              description: 'Name updated',
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/User' },
                },
              },
            },
            401: {
              description: 'Unauthorized',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/Error',
                  },
                },
              },
            },
            404: {
              description: 'User not found',
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
      '/users/me/password': {
        patch: {
          tags: ['Users'],
          summary: 'Update user password',
          description: 'Updates password of current user',
          security: [{ cookieAuth: [] }],
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/UpdatePasswordRequest' },
              },
            },
          },
          responses: {
            200: {
              description: 'Password updated',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      message: { type: 'string', example: 'Password updated' },
                    },
                  },
                },
              },
            },
            401: {
              description: 'Unauthorized',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/Error',
                  },
                },
              },
            },
            404: {
              description: 'User not found',
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

      // Projects
      '/api/projects': {
        get: {
          tags: ['Projects'],
          summary: 'Get all projects',
          description: 'Returns a paginated list of projects',
          parameters: [
            {
              name: 'page',
              in: 'query',
              schema: { type: 'integer', minimum: 1, default: 1 },
              description: 'Page number',
            },
            {
              name: 'perPage',
              in: 'query',
              schema: { type: 'integer', minimum: 5, maximum: 20, default: 10 },
              description: 'Number of projects per page',
            },
          ],
          responses: {
            200: {
              description: 'List of projects with pagination',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      page: { type: 'integer', example: 1 },
                      perPage: { type: 'integer', example: 10 },
                      totalProjects: { type: 'integer', example: 50 },
                      totalPages: { type: 'integer', example: 5 },
                      projects: {
                        type: 'array',
                        items: { $ref: '#/components/schemas/Project' },
                      },
                    },
                  },
                },
              },
            },
          },
        },
        post: {
          tags: ['Projects'],
          summary: 'Create a new project',
          description: 'Creates a new project (Admin only)',
          security: [{ cookieAuth: [] }],
          requestBody: {
            required: true,
            content: {
              'multipart/form-data': {
                schema: {
                  type: 'object',
                  properties: {
                    images: {
                      type: 'array',
                      items: { type: 'string', format: 'binary' },
                      description: 'Up to 10 images',
                    },
                    en: {
                      type: 'object',
                      properties: {
                        title: {
                          type: 'string',
                          example: 'Modern Interior Design',
                        },
                        description: {
                          type: 'string',
                          example: 'Project description in English',
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
                          example: 'Опис проєкту українською',
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          responses: {
            201: {
              description: 'Project successfully created',
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/Project' },
                },
              },
            },
            400: {
              description: 'Images required',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/Error',
                  },
                },
              },
            },
            401: {
              description: 'Unauthorized (Admin only)',
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
      '/api/projects/{projectId}': {
        get: {
          tags: ['Projects'],
          summary: 'Get project by ID',
          description: 'Returns project data by ID',
          parameters: [
            {
              name: 'projectId',
              in: 'path',
              required: true,
              schema: { type: 'string' },
              description: 'Project ID',
            },
          ],
          responses: {
            200: {
              description: 'Project data',
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/Project' },
                },
              },
            },
            404: {
              description: 'Project not found',
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
        patch: {
          tags: ['Projects'],
          summary: 'Update project',
          description: 'Updates project data (Admin only)',
          security: [{ cookieAuth: [] }],
          parameters: [
            {
              name: 'projectId',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          ],
          requestBody: {
            required: true,
            content: {
              'multipart/form-data': {
                schema: {
                  type: 'object',
                  properties: {
                    images: {
                      type: 'array',
                      items: { type: 'string', format: 'binary' },
                      description: 'Optional new images',
                    },
                    en: {
                      type: 'object',
                      properties: {
                        title: { type: 'string' },
                        description: { type: 'string' },
                      },
                    },
                    uk: {
                      type: 'object',
                      properties: {
                        title: { type: 'string' },
                        description: { type: 'string' },
                      },
                    },
                  },
                },
              },
            },
          },
          responses: {
            200: {
              description: 'Project updated',
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/Project' },
                },
              },
            },
            401: {
              description: 'Unauthorized (Admin only)',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/Error',
                  },
                },
              },
            },
            404: {
              description: 'Project not found',
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
        delete: {
          tags: ['Projects'],
          summary: 'Delete project',
          description: 'Deletes a project (Admin only)',
          security: [{ cookieAuth: [] }],
          parameters: [
            {
              name: 'projectId',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          ],
          responses: {
            200: {
              description: 'Project deleted',
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/Project' },
                },
              },
            },
            401: {
              description: 'Unauthorized (Admin only)',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/Error',
                  },
                },
              },
            },
            404: {
              description: 'Project not found',
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

      // Feedbacks
      '/api/feedbacks': {
        get: {
          tags: ['Feedbacks'],
          summary: 'Get all feedbacks',
          description: 'Returns a paginated list of feedbacks',
          parameters: [
            {
              name: 'page',
              in: 'query',
              schema: { type: 'integer', minimum: 1, default: 1 },
              description: 'Page number',
            },
            {
              name: 'perPage',
              in: 'query',
              schema: { type: 'integer', minimum: 5, maximum: 20, default: 10 },
              description: 'Number of feedbacks per page',
            },
          ],
          responses: {
            200: {
              description: 'List of feedbacks with pagination',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      page: { type: 'integer', example: 1 },
                      perPage: { type: 'integer', example: 10 },
                      totalFeedbacks: { type: 'integer', example: 50 },
                      totalPages: { type: 'integer', example: 5 },
                      feedbacks: {
                        type: 'array',
                        items: { $ref: '#/components/schemas/Feedback' },
                      },
                    },
                  },
                },
              },
            },
          },
        },
        post: {
          tags: ['Feedbacks'],
          summary: 'Create feedback',
          description: 'Creates a new feedback entry',
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/CreateFeedbackRequest' },
              },
            },
          },
          responses: {
            201: {
              description: 'Feedback successfully created',
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/Feedback' },
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
      '/api/feedbacks/{feedbackId}': {
        get: {
          tags: ['Feedbacks'],
          summary: 'Get feedback by ID',
          description: 'Returns feedback data by ID',
          parameters: [
            {
              name: 'feedbackId',
              in: 'path',
              required: true,
              schema: { type: 'string' },
              description: 'Feedback ID',
            },
          ],
          responses: {
            200: {
              description: 'Feedback data',
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/Feedback' },
                },
              },
            },
            404: {
              description: 'Feedback not found',
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
        delete: {
          tags: ['Feedbacks'],
          summary: 'Delete feedback',
          description: 'Deletes a feedback (Admin only)',
          security: [{ cookieAuth: [] }],
          parameters: [
            {
              name: 'feedbackId',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          ],
          responses: {
            200: {
              description: 'Feedback deleted',
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/Feedback' },
                },
              },
            },
            401: {
              description: 'Unauthorized (Admin only)',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/Error',
                  },
                },
              },
            },
            404: {
              description: 'Feedback not found',
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
    },
  },
  apis: [],
};
export const swaggerSpec = swaggerJsdoc(options);
