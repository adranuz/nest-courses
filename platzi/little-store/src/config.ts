import { registerAs } from '@nestjs/config';

// de esta manera declaramos las variables de entorno
// en caso de no tenerlas nos dara errores que podemos arreglar
export default registerAs('config', () => ({
  database: {
    name: process.env.DATABASE_NAME,
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
  },
  apiKey: process.env.API_KEY,
  env: process.env.NODE_ENV,
}));
