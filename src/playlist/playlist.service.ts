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