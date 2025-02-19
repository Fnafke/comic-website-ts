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

    const draftChapter3 = await prisma.chapter.create({
        data: {
            chapterNumber: 3,
            chapterTitle: 'The Intruder',
            chapterDescription: "Jotaro gets ambushed by another person of Dio's organisation, but he escapes and has acquired the coordinates to a hidden pyramid. On his way he gets ambushed again. What's next for him?",
            chapterImagesHash: 'hHjXfWs',
            chapterType: 'Draft'
        }
    })

    const draftChapter4 = await prisma.chapter.create({
        data: {
            chapterNumber: 4,
            chapterTitle: 'Zaraki Kenpachi',
            chapterDescription: "Jotaro and Shinji are on their way to retrieve the Reqiuem Arrow, but, they realise that they're not alone.",
            chapterImagesHash: 'lZlvQNO',
            chapterType: 'Draft'
        }
    })

    const draftChapter5 = await prisma.chapter.create({
        data: {
            chapterNumber: 5,
            chapterTitle: 'Bankai',
            chapterDescription: "In the middle of grief, Shinji Hirako continues his battle with Zaraki Kenpachi and seems to have finally gotten the advantage on Zaraki. But is Shinji's power enough to stop that monster?",
            chapterImagesHash: 'nUxQYR4',
            chapterType: 'Draft'
        }
    })

    const draftChapter6 = await prisma.chapter.create({
        data: {
            chapterNumber: 6,
            chapterTitle: 'Gojo Satoru',
            chapterDescription: "After a hard fought battle, Gojo Satoru mixed his red and blue abilities to form his maximum ability called 'Purple'. Is this the end for Shinji Hirako?",
            chapterImagesHash: 'qwpda49',
            chapterType: 'Draft'
        }
    })

    const draftChapter7 = await prisma.chapter.create({
        data: {
            chapterNumber: 7,
            chapterTitle: 'The Resurrection',
            chapterDescription: "After defeating Gojo Satoru, Jotaro Kujo and Shinji Hirako made their way to the hidden garden on the other side of the pyramid, where they are confronted by Diavolo holding the Reqiuem Arrow. What is his goal?",
            chapterImagesHash: 'SMoG2ek',
            chapterType: 'Draft'
        }
    })

    const draftChapter8 = await prisma.chapter.create({
        data: {
            chapterNumber: 8,
            chapterTitle: 'Made In Heaven',
            chapterDescription: "As planned by Dio Brando himself, his resurrection has been realised. With the Reqiuem Arrow in his grasp, he's sure to become unstoppable.",
            chapterImagesHash: 'DqSGQhl',
            chapterType: 'Draft'
        }
    })

    const draftChapter9 = await prisma.chapter.create({
        data: {
            chapterNumber: 9,
            chapterTitle: 'The World of Stopped Time',
            chapterDescription: "Unbound by the seals on his body, Dio Brando is now able to freely use all his power and the 3 of them seem to be no match for him. How are they going to stop him?",
            chapterImagesHash: 'smlayNs',
            chapterType: 'Draft'
        }
    })

    const draftChapter10 = await prisma.chapter.create({
        data: {
            chapterNumber: 10,
            chapterTitle: 'Shinji Hirako',
            chapterDescription: "Dio obtained the power to put time to a halt and he wants to make sure no one makes it past the end.",
            chapterImagesHash: 'zLy1ClX',
            chapterType: 'Draft'
        }
    })

    const draftChapter11 = await prisma.chapter.create({
        data: {
            chapterNumber: 11,
            chapterTitle: 'Two centimeters',
            chapterDescription: "Shinji remembers what happened to him and his friends and has entered his True Bankai form. Unable to control it, he jumps at Dio. Is he finally going to defeat him?",
            chapterImagesHash: '0EIGpzy',
            chapterType: 'Draft'
        }
    })

    
    const draftChapter12 = await prisma.chapter.create({
        data: {
            chapterNumber: 12,
            chapterTitle: 'The sole survivor',
            chapterDescription: "Dio defeated everyone... or did he? There is one person standing, one desperate attempt left to defeat this god like being.",
            chapterImagesHash: 'lNDdQfp',
            chapterType: 'Draft'
        }
    })

    const draftChapter13 = await prisma.chapter.create({
        data: {
            chapterNumber: 13,
            chapterTitle: 'Hell',
            chapterDescription: "Dio's stand Made In Heaven has evolved and is able to transport all of humanity to another universe, but before doing that, he wants to get rid of Jotaro.",
            chapterImagesHash: 'tahIXvo',
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
