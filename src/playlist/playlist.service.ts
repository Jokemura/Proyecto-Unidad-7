import { db } from  "../database/db.server";
import { Playlist } from "@prisma/client";




export const listPlaylist = async (): Promise<Playlist[]> => {
    return db.playlist.findMany({
        select: {
            id: true,
            name: true,
            userId:true,
            user:false,
            songs:true,
        }
    })
}


// listar playlist por id 
export const getPlaylist = async (id: number): Promise<Playlist | null> => {
    return db.playlist.findUnique({
        where: {
            id,
        },
        select: {
            id: true,
            name: true,
            userId:true
        }
    })
}

// crear playlist
export const createPlaylist = async (play: Omit<Playlist, 'id'>): Promise<Playlist> => {
    const { name, userId } = play;
    let userIdToSave = userId;
    if(userId === null) {
      userIdToSave = -1;
    }
    return db.playlist.create({
        data: {
            name,
            userId: userIdToSave,
        },
        select: {
            id: true,
            name: true,
            userId: true,
        }
    });
}


// actualizar la playlist
export const updatePlaylist = async (user: Omit<Playlist, 'id'>, id:number): Promise<Playlist> => {
    const { name, userId } = user;
    return db.playlist.update({
        where: {
            id,
        },
        data: {
            name,
            userId,
        },
        select: {
            id: true,
            name:true,
            userId: true,
        }
    })
}


// Borrar playlist por id
export const deletePlaylist = async (id:number): Promise<void> => {
    await db.playlist.delete({
        where: {
            id,
        },
    })
}






















// Para poder ejecutar el siguiente código primero importamos la bd. Luego se ha definifo una interfaz llamada play con las las 3 propiedades que se pueden ver ("id", "name" y "userId"). Luego se ha implementado una función exportada llamada Playlistlists la cual devuelve una promesa en base a interfaz "play". 
//La función utiliza el objeto db, el cual fue importado al inicio para usar el método "findMany" para buscar varios elementos en la tabla "playlist" en la base de datos. Cabe resaltar que sólo buscará que exista match en las columnas id, name y userId y las columnas obviadas serán user y songs Especifica las columnas que se deben seleccionar "id", "name" y "userId" y las columnas "user" y "songs" no deben ser seleccionadas.