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
		name: 'Angular2',
		author: 'arings',
		tags: ['angular', 'frontend'],
		isPublished: true
	});
	const result = await course.save();
	console.log('result', result);
}
//createCourse();
async function getCourses() {
	//const courses = await Course.find({ isPublished: true });
	const courses = await Course.find()
		.limit(10)
		.sort({ name: 1 })
		.select({ name: 1, tags: 1 });
	console.log('courses\n', courses);
}

async function getCourses2() {
	// eq (equal)
	// ne (not equal)
	// gt (greater than)
	// gte (greater than or equal to)
	// lt (lest than)
	// lte (less than or equal to)
	// in
	// nin (not in)

	const courses = await Course
		//.find({ price: { $gt: 10, $lte: 20 } })
		.find({ price: { $in: [10, 15, 20] } });
	console.log('courses\n', courses);
}

async function getCourses3() {
	// or
	// and

	const courses = await Course.find()
		.or([{ author: aringinc }, { isPublished: true }])
		.and([{ author: aringinc }, { isPublished: true }]);
	console.log('courses\n', courses);
}

async function getCourses3() {
	// regular expressions
	// starts with /^word/
	// end with /word$/
	// case insensitive /patterm/i
	// contains /.*word.*/

	//const courses = await Course.find({ author: /^aring/ });
	//const courses = await Course.find({ author: /s$/ });
	//const courses = await Course.find({ author: /S$/i });

	const courses = await Course.find({ author: /.*s.*/i });
	console.log('courses\n', courses);
}

getCourses3();
