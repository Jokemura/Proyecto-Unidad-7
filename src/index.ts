import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from "cors";
import { userRouter } from './users/routers.users';
import { songRouter } from './songs/songs.router';
import { playlistRouter } from './playlist/playlist.router';


// Base Settings
dotenv.config();
const port: number = parseInt(process.env.PORT as string, 10);
const app: Express = express();
app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

// Principal
app.get('/', (req: Request, res: Response) => {
  res.send('Hola a Mundo Music s👌 ');
});

// Rutta de usuarios
app.use('/api/v1/users', userRouter);

// Ruta de canciones
app.use('/api/v1/songs', songRouter);

// Rutas de Playlist
app.use('/api/v1/playlist', playlistRouter);



app.listen(PORT, () => console.log(`Server init at http://localhost:${PORT}`));
