import { db } from "../database/server";

type user = {
    id: number
    email: string
    name: String
}

export const Userslist = async (): Promise<user[]> => {
    return db.users.findMany({
        select: {
            id: true,
            name: true,
            email: true,
        }
    })
}