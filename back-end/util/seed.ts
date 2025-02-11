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

    const draftChapter1 = await prisma.chapter.create({
        data: {
            chapterNumber: 1,
            chapterTitle: 'Part 1: The World vs. Made In Heaven',
            chapterDescription: "The fierce battle between them begins and... concludes? What is there more we don't know of?",
            chapterImagesHash: '88RpG1b',
            chapterType: 'Draft'
        }
    })

    const draftChapter2 = await prisma.chapter.create({
        data: {
            chapterNumber: 2,
            chapterTitle: 'Part 2: The World vs. Killer Queen',
            chapterDescription: "2 years have passed since a person with powers attacked our main protagonist? Who is he and who is he working with? What do they want?",
            chapterImagesHash: '9qeLKCL',
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
