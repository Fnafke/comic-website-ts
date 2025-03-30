import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

const main = async() => {
    await prisma.user.deleteMany();
    await prisma.chapter.deleteMany();

    const admin = await prisma.user.create({
        data: {
            username: `${process.env.ADMIN_USERNAME}`,
            email: `${process.env.ADMIN_EMAIL}`,
            password: await bcrypt.hash(`${process.env.ADMIN_PASSWORD}`,12),
            role: 'admin'
        }
    })

    const draftChapter1 = await prisma.chapter.create({
        data: {
            chapterNumber: 1,
            chapterCoverHash: 'liWKLsE',
            chapterTitle: 'Part 1: The World vs. Made In Heaven',
            chapterDescription: "The fierce battle between them begins and... concludes? What is there more we don't know of?",
            chapterImagesHash: '88RpG1b',
            chapterType: 'Draft',
            chapterReleaseDate: new Date(new Date().setFullYear(2025,1,24)).toISOString()
        }
    })

    const draftChapter2 = await prisma.chapter.create({
        data: {
            chapterNumber: 2,
            chapterCoverHash: 'b5i5lOd',
            chapterTitle: 'Part 2: The World vs. Killer Queen',
            chapterDescription: "2 years have passed since a person with powers attacked our main protagonist? Who is he and who is he working with? What do they want?",
            chapterImagesHash: '9qeLKCL',
            chapterType: 'Draft',
            chapterReleaseDate: new Date(new Date().setFullYear(2025,1,24)).toISOString()
        }
    })

    const draftChapter3 = await prisma.chapter.create({
        data: {
            chapterNumber: 3,
            chapterCoverHash: 'DKbvzHA',
            chapterTitle: 'The Intruder',
            chapterDescription: "Jotaro gets ambushed by another person of Dio's organisation, but he escapes and has acquired the coordinates to a hidden pyramid. On his way he gets ambushed again. What's next for him?",
            chapterImagesHash: 'hHjXfWs',
            chapterType: 'Draft',
            chapterReleaseDate: new Date(new Date().setFullYear(2025,1,24)).toISOString()
        }
    })

    const draftChapter4 = await prisma.chapter.create({
        data: {
            chapterNumber: 4,
            chapterCoverHash: 'BLUZ4Se',
            chapterTitle: 'Zaraki Kenpachi',
            chapterDescription: "Jotaro and Shinji are on their way to retrieve the Reqiuem Arrow, but, they realise that they're not alone.",
            chapterImagesHash: 'lZlvQNO',
            chapterType: 'Draft',
            chapterReleaseDate: new Date(new Date().setFullYear(2025,1,24)).toISOString()
        }
    })

    const draftChapter5 = await prisma.chapter.create({
        data: {
            chapterNumber: 5,
            chapterCoverHash: 'jbzbWqt',
            chapterTitle: 'Bankai',
            chapterDescription: "In the middle of grief, Shinji Hirako continues his battle with Zaraki Kenpachi and seems to have finally gotten the advantage on Zaraki. But is Shinji's power enough to stop that monster?",
            chapterImagesHash: 'nUxQYR4',
            chapterType: 'Draft',
            chapterReleaseDate: new Date(new Date().setFullYear(2025,1,24)).toISOString()
        }
    })

    const draftChapter6 = await prisma.chapter.create({
        data: {
            chapterNumber: 6,
            chapterCoverHash: 'R5mLfrC',
            chapterTitle: 'Gojo Satoru',
            chapterDescription: "After a hard fought battle, Gojo Satoru mixed his red and blue abilities to form his maximum ability called 'Purple'. Is this the end for Shinji Hirako?",
            chapterImagesHash: 'qwpda49',
            chapterType: 'Draft',
            chapterReleaseDate: new Date(new Date().setFullYear(2025,1,24)).toISOString()
        }
    })

    const draftChapter7 = await prisma.chapter.create({
        data: {
            chapterNumber: 7,
            chapterCoverHash: 'FRFH2jH',
            chapterTitle: 'The Resurrection',
            chapterDescription: "After defeating Gojo Satoru, Jotaro Kujo and Shinji Hirako made their way to the hidden garden on the other side of the pyramid, where they are confronted by Diavolo holding the Reqiuem Arrow. What is his goal?",
            chapterImagesHash: 'SMoG2ek',
            chapterType: 'Draft',
            chapterReleaseDate: new Date(new Date().setFullYear(2025,1,24)).toISOString()
        }
    })

    const draftChapter8 = await prisma.chapter.create({
        data: {
            chapterNumber: 8,
            chapterCoverHash: 'JpH3hGv',
            chapterTitle: 'Made In Heaven',
            chapterDescription: "As planned by Dio Brando himself, his resurrection has been realised. With the Reqiuem Arrow in his grasp, he's sure to become unstoppable.",
            chapterImagesHash: 'DqSGQhl',
            chapterType: 'Draft',
            chapterReleaseDate: new Date(new Date().setFullYear(2025,1,24)).toISOString()
        }
    })

    const draftChapter9 = await prisma.chapter.create({
        data: {
            chapterNumber: 9,
            chapterCoverHash: 'gl7hL3r',
            chapterTitle: 'The World of Stopped Time',
            chapterDescription: "Unbound by the seals on his body, Dio Brando is now able to freely use all his power and the 3 of them seem to be no match for him. How are they going to stop him?",
            chapterImagesHash: 'smlayNs',
            chapterType: 'Draft',
            chapterReleaseDate: new Date(new Date().setFullYear(2025,1,24)).toISOString()
        }
    })

    const draftChapter10 = await prisma.chapter.create({
        data: {
            chapterNumber: 10,
            chapterCoverHash: 'kQAN32O',
            chapterTitle: 'Shinji Hirako',
            chapterDescription: "Dio obtained the power to put time to a halt and he wants to make sure no one makes it past the end.",
            chapterImagesHash: 'zLy1ClX',
            chapterType: 'Draft',
            chapterReleaseDate: new Date(new Date().setFullYear(2025,1,24)).toISOString()
        }
    })

    const draftChapter11 = await prisma.chapter.create({
        data: {
            chapterNumber: 11,
            chapterCoverHash: 'mp5ULy8',
            chapterTitle: 'Two centimeters',
            chapterDescription: "Shinji remembers what happened to him and his friends and has entered his True Bankai form. Unable to control it, he jumps at Dio. Is he finally going to defeat him?",
            chapterImagesHash: '0EIGpzy',
            chapterType: 'Draft',
            chapterReleaseDate: new Date(new Date().setFullYear(2025,1,24)).toISOString()
        }
    })

    
    const draftChapter12 = await prisma.chapter.create({
        data: {
            chapterNumber: 12,
            chapterCoverHash: 'iVxyl9f',
            chapterTitle: 'The sole survivor',
            chapterDescription: "Dio defeated everyone... or did he? There is one person standing, one desperate attempt left to defeat this god like being.",
            chapterImagesHash: 'lNDdQfp',
            chapterType: 'Draft',
            chapterReleaseDate: new Date(new Date().setFullYear(2025,1,24)).toISOString()
        }
    })

    const draftChapter13 = await prisma.chapter.create({
        data: {
            chapterNumber: 13,
            chapterCoverHash: '88UDZIf',
            chapterTitle: 'Hell',
            chapterDescription: "Dio's stand Made In Heaven has evolved and is able to transport all of humanity to another universe, but before doing that, he wants to get rid of Jotaro.",
            chapterImagesHash: 'tahIXvo',
            chapterType: 'Draft',
            chapterReleaseDate: new Date(new Date().setFullYear(2025,1,24)).toISOString()
        }
    })

    const draftChapter14 = await prisma.chapter.create({
        data: {
            chapterNumber: 14,
            chapterCoverHash: 'RG6W2bq',
            chapterTitle: 'Minor Inconvenience',
            chapterDescription: "Dio welcomes Jotaro to his Hell. The heat is unbearable but Jotaro seems to bare it. The cards are in Jotaro's favour... is this their final clash?",
            chapterImagesHash: 'gtfGKxR',
            chapterType: 'Draft',
            chapterReleaseDate: new Date(new Date().setFullYear(2025,2,3)).toISOString()
        }
    })

    const draftChapter15 = await prisma.chapter.create({
        data: {
            chapterNumber: 15,
            chapterCoverHash: 'mm5RMjV',
            chapterTitle: 'The Awakening',
            chapterDescription: "Dio Brando is 20 years old and still has not awakened his powers yet. Genryusai Yamamoto, Dio's best friend, reassures him that he's better off not awakening his powers but Dio is envious of him.",
            chapterImagesHash: 'DfKkKFo',
            chapterType: 'Draft',
            chapterReleaseDate: new Date(new Date().setFullYear(2025,2,10)).toISOString()
        }
    })

    const draftChapter16 = await prisma.chapter.create({
        data: {
            chapterNumber: 16,
            chapterCoverHash: 'EIeL2NH',
            chapterTitle: 'The Beginning of the End',
            chapterDescription: "Dio shares with Yamamoto that he finally awakened his powers and that they can finally save their kind from discrimination. Yamamoto isn't too fond of Dio's vision on 'saving the world', it doesn't align with his. What does this mean for Dio now...?",
            chapterImagesHash: 'FXGO5zV',
            chapterType: 'Draft',
            chapterReleaseDate: new Date(new Date().setFullYear(2025,2,17)).toISOString()
        }
    })

    const draftChapter17 = await prisma.chapter.create({
        data: {
            chapterNumber: 17,
            chapterCoverHash: 'REnQp2u',
            chapterTitle: 'The Sealing',
            chapterDescription: "After his massive show in the courtroom, Dio got sent to the underground prison, there he got a visit from the person whom he'll loathe forever.",
            chapterImagesHash: 'EMrajsK',
            chapterType: 'Draft',
            chapterReleaseDate: new Date(new Date().setFullYear(2025,2,23)).toISOString()
        }
    })

    const draftChapter18 = await prisma.chapter.create({
        data: {
            chapterNumber: 18,
            chapterCoverHash: '1lwhXpj',
            chapterTitle: 'High-Rise Invasion',
            chapterDescription: "100 years have passed since the sealing of Dio Brando and an army emerges at the edges of the British lands. An unexpected invasion begins!",
            chapterImagesHash: 'x5X1Wra',
            chapterType: 'Draft',
            chapterReleaseDate: new Date(new Date().setFullYear(2025,2,30)).toISOString()
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
