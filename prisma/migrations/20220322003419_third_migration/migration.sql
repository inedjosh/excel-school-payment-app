-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_studentRegistration" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "studentName" TEXT NOT NULL,
    "studentAge" INTEGER NOT NULL,
    "studentDob" TEXT NOT NULL,
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
    "parentDob" TEXT NOT NULL,
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
INSERT INTO "new_studentRegistration" ("admissionClass", "id", "lastClass", "parentAddress", "parentAge", "parentDob", "parentEmail", "parentName", "parentNationality", "parentOccupation", "parentPhoneNumber", "parentRelationshipWithWard", "parentReligion", "parentState", "primarySchoolWithDate", "reasonForLiving", "secondarySchoolWithDate", "studentAge", "studentDob", "studentGender", "studentHealthHistory", "studentHealthHistoryExplained", "studentLga", "studentName", "studentNationality", "studentPlaceOfBirth", "studentReligion", "studentState", "studentTown") SELECT "admissionClass", "id", "lastClass", "parentAddress", "parentAge", "parentDob", "parentEmail", "parentName", "parentNationality", "parentOccupation", "parentPhoneNumber", "parentRelationshipWithWard", "parentReligion", "parentState", "primarySchoolWithDate", "reasonForLiving", "secondarySchoolWithDate", "studentAge", "studentDob", "studentGender", "studentHealthHistory", "studentHealthHistoryExplained", "studentLga", "studentName", "studentNationality", "studentPlaceOfBirth", "studentReligion", "studentState", "studentTown" FROM "studentRegistration";
DROP TABLE "studentRegistration";
ALTER TABLE "new_studentRegistration" RENAME TO "studentRegistration";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
