-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Chapter" (
    "id" SERIAL NOT NULL,
    "chapterCoverHash" TEXT NOT NULL,
    "chapterNumber" INTEGER NOT NULL,
    "chapterTitle" TEXT NOT NULL,
    "chapterDescription" TEXT NOT NULL,
    "chapterImagesHash" TEXT NOT NULL,
    "chapterType" TEXT NOT NULL,
    "chapterReleaseDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Chapter_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
