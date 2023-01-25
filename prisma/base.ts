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

async function seed() {
    await Promise.all(
        getUsers().map((user) => {
            return db.user.create({
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

seed();

function getUsers() {
    return [{
        email: 'email@gmail.com',
        name: 'Usuario 1',
        password: '123456',
    }]
}

function getPlaylists(): Array<playlist> {
    return [{
        name: 'Despacito',
    }]
}

function getSongs(): Array<song> {
    return [{
        name: 'Cancion',
        album: 'albums',
        artist: 'artista',
        year: 2020,
        genre: 'gernero',
        duration: 400,
        playlistid: 1
    }]
}