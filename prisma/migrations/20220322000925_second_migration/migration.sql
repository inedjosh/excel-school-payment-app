/*
  Warnings:

  - You are about to drop the `studentRgeistration` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "studentRgeistration";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "studentRegistration" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "studentName" TEXT NOT NULL,
    "studentAge" INTEGER NOT NULL,
    "studentDob" DATETIME NOT NULL,
    "studentGender" TEXT NOT NULL,
    "studentState" TEXT NOT NULL,
    "studentLga" TEXT NOT NULL,
    "studentTown" TEXT NOT NULL,
    "studentPlaceOfBirth" TEXT NOT NULL,
    "studentReligion" TEXT NOT NULL,
    "studentNationality" TEXT NOT NULL,
    "studentHealthHistory" TEXT NOT NULL,
    "studentHealthHistoryExplained" TEXT NOT NULL,
    "parentName" TEXT NOT NULL,
    "parentAge" TEXT NOT NULL,
    "parentDob" DATETIME NOT NULL,
    "parentState" TEXT NOT NULL,
    "parentReligion" TEXT NOT NULL,
    "parentEmail" TEXT NOT NULL,
    "parentAddress" TEXT NOT NULL,
    "parentPhoneNumber" TEXT NOT NULL,
    "parentRelationshipWithWard" TEXT NOT NULL,
    "parentOccupation" TEXT NOT NULL,
    "parentNationality" TEXT NOT NULL,
    "admissionClass" TEXT NOT NULL,
    "primarySchoolWithDate" TEXT NOT NULL,
    "secondarySchoolWithDate" TEXT NOT NULL,
    "lastClass" TEXT NOT NULL,
    "reasonForLiving" TEXT NOT NULL
);
