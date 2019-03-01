const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/playground', { useNewUrlParser: true })
  .then(() => console.log('Connected to db...'))
  .catch(err => console.error('Could not connected to MongoDB...', err));

console.log('Running...');
const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean
});

const Course = mongoose.model('course', courseSchema);

async function createCourse() {
  const course = new Course({
    name: 'Angular',
    author: 'aringinc',
    tags: ['angular', 'frontend'],
    isPublished: true
  });
  const result = await course.save();
  console.log('result', result);
}

async function getCourses() {
  const courses = await Course.find()
    .limit(10)
    .sort({ name: 1 })
    .select({ name: 1, tags: 1 });
  console.log('courses', courses);
  //const courses = await Course.find({ isPublished: true });
}
getCourses();
