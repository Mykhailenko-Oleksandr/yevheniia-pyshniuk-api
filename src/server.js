// Libraries
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { errors } from 'celebrate';
import 'dotenv/config';
import swaggerUi from 'swagger-ui-express';
import cookieParser from 'cookie-parser';

//MongoDB
import { connectMongoDB } from './db/connectMongoDB.js';

// Middlewares
import { logger } from './middleware/logger.js';
import { notFoundHandler } from './middleware/notFoundHandler.js';
import { errorHandler } from './middleware/errorHandler.js';

// Swagger
import { swaggerSpec } from './config/swagger.js';

// Routes
import projectsRoutes from './routes/projectsRoutes.js';
import feedbacksRoutes from './routes/feedbacksRoutes.js';
import usersRoutes from './routes/usersRoutes.js';
import authRoutes from './routes/authRoutes.js';
import messagesRoutes from './routes/messagesRoutes.js';

const app = express();
const PORT = process.env.PORT ?? 3030;

app.use(logger);
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(cookieParser());

// Swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(projectsRoutes);
app.use(feedbacksRoutes);
app.use(usersRoutes);
app.use(authRoutes);
app.use(messagesRoutes);

app.use(notFoundHandler);

app.use(errors());

app.use(errorHandler);

await connectMongoDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
