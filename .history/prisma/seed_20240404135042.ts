import { PrismaClient } from "@prisma/client";
import { links } from "../data/links";

const prisma = new PrismaClient();


async function main() {
    await prisma.user.create({
        data: {
            email: "testemail@gmail.com",
            
        }
    })
}