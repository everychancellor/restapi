const mongoose = require('mongoose');

mongoose
	.connect('mongodb://localhost/mongo-exercises', { useNewUrlParser: true })
	.then(() => console.log('Connected to db...'))
	.catch(err => console.error('Could not connected to MongoDB...', err));

console.log('Running...');
const courseSchema = new mongoose.Schema({
	name: String,
	author: String,
	tags: [String],
	date: { type: Date, default: Date.now },
	isPublished: Boolean,
	price: Number
});

const Course = mongoose.model('courses', courseSchema);

async function getCourses() {
	const courses = await Course.find({
		isPublished: true
		//tags: { $in: ['frontend', 'backend'] }
	})
		.or([{ tags: 'backend' }, { tags: 'frontend' }])
		.select({ name: 1, author: 1 })
		.sort({ price: -1 });
	return courses;
}

async function run() {
	console.log('courses\n', await getCourses());
}

run();
