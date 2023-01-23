import { db } from "../database/server";

type play = {
    id:number;
    name: string;
    userId:number;
}
 //La función devuelve los resultados encontrados en la base de datos.
export const Playlistlists = async (): Promise<play[]> => {
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

// Para poder ejecutar el siguiente código primero importamos la bd. Luego se ha definifo una interfaz llamada play con las las 3 propiedades que se pueden ver ("id", "name" y "userId"). Luego se ha implementado una función exportada llamada Playlistlists la cual devuelve una promesa en base a interfaz "play". 
//La función utiliza el objeto db, el cual fue importado al inicio para usar el método "findMany" para buscar varios elementos en la tabla "playlist" en la base de datos. Cabe resaltar que sólo buscará que exista match en las columnas id, name y userId y las columnas obviadas serán user y songs Especifica las columnas que se deben seleccionar "id", "name" y "userId" y las columnas "user" y "songs" no deben ser seleccionadas.