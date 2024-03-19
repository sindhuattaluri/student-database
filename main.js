
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/studentDatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const academicRecordSchema = new mongoose.Schema({
  studentID: Number,
  name: String,
  grades: [String],
  subjects: [String],
  
});


const AcademicRecord = mongoose.model('AcademicRecord', academicRecordSchema);


const coCurricularSchema = new mongoose.Schema({
  studentID: Number,
  name: String,
  activityType: String,
  duration: String,
  achievements: String,
  
});


const CoCurricularActivity = mongoose.model('CoCurricularActivity', coCurricularSchema);


const academicRecordsData = [
  {
    studentID: 1,
    name: 'John Doe',
    grades: ['A', 'B', 'A'],
    subjects: ['Math', 'Science', 'History'],
  },
  
];

const coCurricularData = [
  {
    studentID: 1,
    name: 'John Doe',
    activityType: 'Sports',
    duration: '2 years',
    achievements: 'Won inter-school basketball championship',
  },
 
];

// Function to populate academic records
async function populateAcademicRecords() {
  try {
    await AcademicRecord.insertMany(academicRecordsData);
    console.log('Academic records populated successfully');
  } catch (error) {
    console.error('Error populating academic records:', error);
  }
}


async function populateCoCurricularActivities() {
  try {
    await CoCurricularActivity.insertMany(coCurricularData);
    console.log('Co-curricular activities populated successfully');
  } catch (error) {
    console.error('Error populating co-curricular activities:', error);
  }
}


populateAcademicRecords();
populateCoCurricularActivities();

async function testDatabaseOperations() {
 
  const academicRecords = await AcademicRecord.find();
  console.log('Academic Records:', academicRecords);

  const coCurricularActivities = await CoCurricularActivity.find();
  console.log('Co-curricular Activities:', coCurricularActivities);

 
  await AcademicRecord.updateOne({ studentID: 1 }, { $set: { name: 'Updated Name' } });
  console.log('Academic record updated successfully');


  await CoCurricularActivity.deleteOne({ studentID: 1 });
  console.log('Co-curricular activity deleted successfully');
}


testDatabaseOperations();
