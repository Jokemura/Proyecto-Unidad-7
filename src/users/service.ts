import { db } from "../database/db.server"

type user = {
    id: number
    email: string
    name: String
}

export const Userslist = async (): Promise<user[]> => {
    return db.user.findMany({
        select: {
            id: true,
            name: true,
            email: true,
        }
    })
}