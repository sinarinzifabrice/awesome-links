import { PrismaClient } from "@prisma/client";


// PrismaClient is attached to the 'global' object in development to prevent
// exhausting your database connecting limit.
// Learn 