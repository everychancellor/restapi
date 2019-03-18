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
	isPublished: Boolean,
	price: Number
});

const Course = mongoose.model('courses', courseSchema);

async function getCourses() {
	const courses = await Course.find({})
		.select({ name: 1, author: 1 })
		.sort({ name: 1 });
	return courses;
}

async function updateCourse(id) {
	console.log('searching for record... ', id);
	const course = await Course.findById(id);
	if (!course) return;
	console.log('name... ', course);
	course.name = 'Node.js + Vue.js';
	course.set({ author: 'aringinc' });
	await course.save();
}

async function run() {
	updateCourse('5c740a789cb7cb29f02cd030');
	console.log('courses\n', await getCourses());
}
run();
