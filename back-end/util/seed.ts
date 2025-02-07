import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

const main = async() => {
    await prisma.user.deleteMany();
    await prisma.chapter.deleteMany();

    const admin = await prisma.user.create({
        data: {
            username: 'Admin',
            email: "admin@email.com",
            password: await bcrypt.hash('admin123',12),
            role: 'admin'
        }
    })

    const chapterTest = await prisma.chapter.create({
        data: {
            chapterNumber: 0,
            chapterTitle: 'Test',
            chapterDescription: 'This is a test',
            chapterImagesHash: '4tJJOS4',
            chapterType: 'Draft'
        }
    })
}

(async () => {
    try {
        await main();
        await prisma.$disconnect();
    } catch (error) {
        console.error(error);
        await prisma.$disconnect();
        process.exit(1);
    }
})();
