import express, { Express } from "express";
import { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import * as _playlistService from './playlist.service';
export const playlistRouter = express.Router();

playlistRouter.get('/', async (request: Request, response: Response) => {
    try {
        const playlist = await _playlistService.listPlaylist();
        return response.status(200).json(playlist);
    } catch (error: any) {
        return response.status(500).json(error.message);
    }
});
















//Aquí se ha definido una ruta GET para el enrutador de la Playlist. La ruta GET se activa cuando se accede a la raíz de la ruta de listas de reproducción. Cuando se activa, se llama a una función asíncrona que llama a una función llamada "Playlistlists" del módulo "service" , el cual se ha importado al inicio. Cuando  la función se ejecute correctamente, va a devolver un código de estado HTTP 200 y una respuesta JSON con la lista de reproducción. Por el contrario si muestra error va a devolver un código de estado HTTP 500 y un mensaje de error JSON, de esta forma el cliente no podrá ver el error exacto generando un britch de seguridad.