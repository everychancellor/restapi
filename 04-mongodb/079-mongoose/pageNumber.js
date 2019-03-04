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

async function getCourses() {
	const pageNumber = 1;
	const pageSize = 2;
	const courses = await Course.find()
		.skip((pageNumber - 1) * pageSize)
		.limit(pageSize)
		.sort({ name: 1 });
	console.log('courses\n', courses);
}

getCourses();
