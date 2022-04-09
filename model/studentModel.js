import mongoose from 'mongoose'

const studentSchema = new mongoose.Schema({
  studentName :                  String,
  studentAge   :                 String,
  studentDob    :                String,
  studentGender  :               String,
  studentState    :              String,
  studentLga       :             String,
  studentTown       :            String,
  studentPlaceOfBirth:           String,
  studentReligion     :          String,
  studentNationality   :         String,
  studentHealthHistory  :        String,
  studentHealthHistoryExplained: String,
  parentName  :                  String,
  parentAge    :                 String,
  parentDob     :                String,
  parentState    :               String,
  parentReligion  :              String,
  parentEmail      :             String,
  parentAddress     :            String,
  parentPhoneNumber  :           String,
  parentRelationshipWithWard :   String,
  parentOccupation  :            String,
  parentNationality  :           String,
  admissionClass      :          String,
  primarySchoolWithDate:         String,
  secondarySchoolWithDate:       String,
  lastClass     :                String,
  reasonForLiving:               String,
  studentPassport :              String,
  sponsorPassport  :             String,
})

module.exports =  mongoose.models.Student || mongoose.model('Student', studentSchema)