import { db } from "../database/server";

type song = {
    id: number;
    name: string;
    artist: string;
    album: string;
    year: number;
    genre: string;
    duration: number;
    isPublic: boolean
}

export const listSongs = async (): Promise<song[]> => {
    return db.song.findMany({
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


// Get songs by Id

export const getSongs = async (id: number): Promise<song | null> => {
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
export const createSong = async (song: Omit<song, 'id'>): Promise<song> => {
    const { name, artist, album, year, genre, duration, isPublic} = song;
    return db.song.create({
        data: {
            name, 
            artist, 
            album, 
            year, 
            genre, 
            duration,
            isPublic
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
export const getUser = async (id: number): Promise<song | null> => {
    return db.song.findUnique({
        where: {
            id,
        },
        select: {
            id: true,
            name:true, 
            playlist:true,
        }
    })
}


// Funcion para Actualizar canciones
export const updateSong = async (song: Omit<song, 'id'>, id:number): Promise<song> => {
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

//Funcion para borra canciones
export const deleteSong = async (id:number): Promise<void> => {
    await db.song.delete({
        where: {
            id,
        },
    })
}