import { PrismaClient } from "@prisma/client";


// PrismaClient is attached to the 'global' object in development to prevent
// exhausting your database connecting limit.
// Learn mor: https://pris.ly/d/help/next-js-best-practices

let prisma: PrismaClient;

if(process.env.NODE_ENV === 'production') {
    prisma = new PrismaClient();
} else {
    global.pris
}