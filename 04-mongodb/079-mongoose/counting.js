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

async function getCoursesCount() {
	const coursesNumber = await Course.find().count();
	console.log('courses\n', coursesNumber);
}

getCoursesCount();
