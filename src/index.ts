import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from "cors";
import { userRouter } from './users/routers.users';
import { songRouter } from './songs/song.router';
import { playlistRouter } from './playlist/playlist.router';


// Base Settings
dotenv.config();
const PORT: number = parseInt(process.env.PORT as string, 10);
const app: Express = express();
app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});

// Principal
app.get('/', (req: Request, res: Response) => {
  res.send('Hola a Mundo Music s👌 ');
});

// Users Module
app.use('/api/v1/users', userRouter);

// Songs Module
app.use('/api/v1/songs', songRouter);

// Playlists Module
app.use('/api/v1/playlist', playlistRouter);

const PORT =9002

app.listen(PORT, () => console.log(`Server init at http://localhost:${PORT}`));
