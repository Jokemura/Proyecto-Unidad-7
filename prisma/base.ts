import { type } from "os";
import { db } from "../src/database/server";

type user = {
    email: string
    name: String
    password: String
}

type song = {
    name: string;
    artist: string;
    album: string;
    year: number;
    genre: string;
    duration: number;
    playlistid: number
}

type playlist = {
    name: string;
}

async function base1() {
    await Promise.all(
        getUsers().map((user) => {
            return db.users.create({
                data: {
                    email: user.email,
                    name: user.name,
                    password: user.password,
                },
            })
        })
    );
    await Promise.all(
        getPlaylists().map((playlist) => {
            return db.playlist.create({
                data: {
                    name: playlist.name,
                    userId: 1
                },
            })
        })
    );
    await Promise.all(
        getSongs().map((song) => {
            return db.song.create({
                data: {
                    name: song.name,
                    artist: song.artist,
                    album: song.album,
                    year: song.year,
                    genre: song.genre,
                    duration: song.duration,
                    playlistid: song.playlistid,
                },
            })
        })
    );
}

base1();

function getUsers() {
    return [{
        email: 'email@gmail.com',
        name: 'Usuario 1',
        password: '123456',
    }]
}

function getPlaylists(): Array<playlist> {
    return [{
        name: 'Too Good',
    }]
}

function getSongs(): Array<song> {
    return [{
        name: 'Too Good',
        album: 'Too Good',
        artist: 'Rihanna y Drake',
        year: 2016,
        genre: 'Hip-Hop',
        duration: 4.24,
        playlistid: 1
    }]
}

//En este archivo base he definido tres tipos de interfaz "user", "song" y "playlist" con las propiedades y tipos de datos específicos, es decir si son string, number, etc.
//Luego he planteado una función asíncrona llamada "base1" que inserta datos en las tablas "users", "playlist" y "song" en la base de datos. 
//En tercer lugar utilizando el método "create" del objeto "db" importado al inicio para insertar datos en las tablas. pero para que espere los datos de las tres tablas utilizamos la función "Promise.all" y así esperar a que se completen todas las promesas antes de continuar.
//Se han planteado tres funciones "getUsers", "getPlaylists" y "getSongs" las cuáles nos brindan  los datos específicos que se deben insertar en la base de datos y por último con la función "base1" se insertan los datos.