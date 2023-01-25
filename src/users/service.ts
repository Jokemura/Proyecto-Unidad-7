import { db } from "../database/db.server"
import { User } from "@prisma/client"
import { createHmac } from "node:crypto"



export const listUsers = async (): Promise<User[]> => {
    return db.user.findMany({
        select: {
            id: true,
            name: true,
            email: true,
            password: true,
            last_session: true,
            updated_at: true,
            date_born: true,
        }
    })
}



export const createUser = async (user: Omit<User, 'id'>): Promise<User> => {
    const { email, name, password } = user;
    if(password === null) {
        throw new Error("La contraseña no puede ser nula");
    }
    const hash = createHmac("sha256", "salt-key").update(password).digest("hex");
    return db.user.create({
        data: {
            email,
            name,
            password: hash,
            last_session: new Date,
            date_born : new Date,
            
                        
        },
        select: {
            id: true,
            email: true,
            name: true,
            password: true,
            last_session: true,
            date_born: true,
            updated_at: true
    
    }    })
}

export const getUser = async (id: number): Promise<User | null> => {
    const user = await db.user.findUnique({
        where: {
            id,
        },
        select: {
            id: true,
            name: true,
            email: true,
            password: true,
            last_session: true,
            updated_at: true,
            date_born: true
        }
    });
    if(!user) return null;
    
    
    user.updated_at = new Date();
    user.date_born = new Date();
    return user;
}