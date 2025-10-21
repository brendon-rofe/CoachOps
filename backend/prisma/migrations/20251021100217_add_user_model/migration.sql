/*
  Warnings:

  - Added the required column `userId` to the `ConnectRequest` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ConnectRequest" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "recipientName" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "ConnectRequest_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ConnectRequest" ("id", "recipientName") SELECT "id", "recipientName" FROM "ConnectRequest";
DROP TABLE "ConnectRequest";
ALTER TABLE "new_ConnectRequest" RENAME TO "ConnectRequest";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
