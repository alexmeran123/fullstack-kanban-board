import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import routes from './src/v1/routes/index.js';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1', routes);

// const PORT = process.env.PORT || 5000;
// app.listen(
//     PORT,
//     console.log(
//       `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
//     )
//   );

export default app;
