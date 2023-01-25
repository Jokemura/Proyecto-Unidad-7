import { db } from "../database/db.server";
import { Song } from "@prisma/client";



export const listSongs = async (): Promise<Song[]> => {
    return db.song.findMany({
        select: {
            id: true,
            name: true,
            artist: true,
            album: true,
            year: true,
            genre: true,
            duration: true,
            isPublic: true  ,
        }
    })
}


//listar canciones por id

export const getSongs = async (id: number): Promise<Song | null> => {
    return db.song.findUnique({
        where: {
            id,
        },
        select: {
            id: true,
            name:true, 
            artist:true, 
            album:true, 
            year:true, 
            genre:true, 
            duration:true,
            isPublic: true,
        }
    })
}



// Funcion para crear nuevas canciones
export const createSong = async (song: Omit<Song, 'id'>): Promise<Song> => {
    const { name, artist, album, year, genre, duration, isPublic} = song;
    return db.song.create({
        data: {
            name, 
            artist, 
            album, 
            year, 
            genre, 
            duration,
            isPublic,
        },
        select: {
            id: true,
            name:true, 
            artist:true, 
            album:true, 
            year:true, 
            genre:true, 
            duration:true,
            isPublic: true,
        }
    })
}

//Funcion para listar por id
export const getUser = async (id: number): Promise< Song | null> => {
    return db.song.findUnique({
        where: {
            id,
        },
        select: {
            id: true,
            name: true,
            artist: true,
            album: true,
            year: true,
            genre: true,
            duration: true,
            isPublic: true,
            
        }
    })
}


// Funcion para Actualizar canciones
export const updateSong = async (song: Omit<Song, 'id'>, id:number): Promise<Song> => {
    const { name, artist, album, year, genre, duration, isPublic } = song;
    return db.song.update({
        where: {
            id,
        },
        data: {
            name,
            artist,
            album,
            year,
            genre,
            duration,
            isPublic,
        },
        select: {
            id: true,
            name:true, 
            artist:true, 
            album:true, 
            year:true, 
            genre:true, 
            duration:true,
            isPublic: true,
        }
    })
}

//Funcion para borrar canciones
export const deleteSong = async (id:number): Promise<void> => {
    await db.song.delete({
        where: {
            id,
        },
    })
}