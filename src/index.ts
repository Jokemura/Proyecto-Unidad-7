import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from "cors";
import { userRouter } from './users/routers.users';
import { songRouter } from './songs/songs.router';
import { playlistRouter } from './playlist/playlist.router';


// Base Settings
dotenv.config();
const port: number = Number(process.env.PORT);
const app: Express = express();
app.use(cors());
app.use(express.json());



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



app.listen(port, () => console.log(`Server init at http://localhost:${port}`));


