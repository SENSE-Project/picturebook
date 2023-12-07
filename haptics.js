window.addEventListener('load', 
  function() { 

let activeImage = null;

const images = document.querySelectorAll('img');

const audio1 = new Audio('audio/beehive.mp4');
const audio2 = new Audio('audio/Tree bark 2 lr.mp4');
const audio3 = new Audio('audio/bumblebee.mp4');
const audio4 = new Audio('audio/fur2.mp4');
const audio5 = new Audio('audio/croc-scales.mp4');
const audio6 = new Audio('audio/sand.mp4');
const audio7 = new Audio('audio/Tree bark 4 rl.mp4');
const audio8 = new Audio('audio/Velvet lr.mp4');
const audio9 = new Audio('audio/Wooden hard smooth 2 tb.mp4');
const audio10 = new Audio('audio/Tree bark 2 lr.mp4');

audio1.muted = false;
audio2.muted = false;
audio3.muted = false;
audio4.muted = false;
audio5.muted = false;
audio6.muted = false;
audio7.muted = false;
audio8.muted = false;
audio9.muted = false;
audio10.muted = false;




images.forEach(image => {
	const imageId = image.getAttribute('id');

	// Handle mouse events
	image.addEventListener('mousedown', () => {
		console.log('mousedown event');

		if (activeImage) {
			activeImage.classList.remove('image-active');
		}

		image.classList.add('image-active');
		activeImage = image;

		if (imageId === 'image1' || imageId === 'image_b_1') {
			console.log('Image 1 selected');
			audio1.play();
		} else if (imageId === 'image2'  || imageId === 'image_t_1') {
			console.log('Image 2 selected');
			audio2.play();
		} else if (imageId === 'image_b_2') {
			console.log('Image_b_2 selected');
			audio3.play();
		} else if (imageId === 'image_b_3') {
			console.log('Image_b_3 selected');
			audio4.play();
		} else if (imageId === 'image_b_4') {
			console.log('Image_b_4 selected');
			audio5.play();
		} else if (imageId === 'image_b_5') {
			console.log('Image_b_5 selected');
			audio6.play();
		} else if (imageId === 'image_t_2') {
			console.log('Image_t_2 selected');
			audio7.play();
		} else if (imageId === 'image_t_3') {
			console.log('Image_t_3 selected');
			audio8.play();
		} else if (imageId === 'image_t_4') {
			console.log('Image_t_4 selected');
			audio9.play();
		} else if (imageId === 'image_t_5') {
			console.log('Image_t_5 selected');
			audio10.play();
		}

	});

	image.addEventListener('mouseup', () => {
		console.log('mouseup event');

		audio1.pause();
		audio2.pause();
		audio3.pause();
		audio4.pause();
		audio5.pause();
		audio6.pause();
		audio7.pause();
		audio8.pause();
		audio9.pause();
		audio10.pause()
	});

	// Handle touch events
	image.addEventListener('touchstart', (e) => {
		console.log('touchstart event');

		if (activeImage) {
			activeImage.classList.remove('image-active');
		}

		const touches = e.touches;
		const firstTouch = touches[0];
		const touchX = firstTouch.clientX;
		const touchY = firstTouch.clientY;
		image.style.left = touchX + 'px';
		image.style.top = touchY + 'px';
		activeImage = image;

		if (imageId === 'image1' || imageId === 'image_b_1') {
			console.log('Image 1 selected');
			audio1.play();
		} else if (imageId === 'image2'  || imageId === 'image_t_1') {
			console.log('Image 2 selected');
			audio2.play();
		} else if (imageId === 'image_b_2') {
			console.log('Image_b_2 selected');
			audio3.play();
		} else if (imageId === 'image_b_3') {
			console.log('Image_b_3 selected');
			audio4.play();
		} else if (imageId === 'image_b_4') {
			console.log('Image_b_4 selected');
			audio5.play();
		} else if (imageId === 'image_b_5') {
			console.log('Image_b_5 selected');
			audio6.play();
		} else if (imageId === 'image_t_2') {
			console.log('Image_t_2 selected');
			audio7.play();
		} else if (imageId === 'image_t_3') {
			console.log('Image_t_3 selected');
			audio8.play();
		} else if (imageId === 'image_t_4') {
			console.log('Image_t_4 selected');
			audio9.play();
		} else if (imageId === 'image_t_5') {
			console.log('Image_t_5 selected');
			audio10.play();
		}
	});

	image.addEventListener('touchmove', (e) => {
		console.log('touchmove event');

		const touches = e.touches;
		const firstTouch = touches[0];
		const touchX = firstTouch.clientX;
		const touchY = firstTouch.clientY;
		image.style.left = touchX + 'px';
		image.style.top = touchY + 'px';
	});

	image.addEventListener('touchend', () => {
		console.log('touchend event');

		audio1.pause();
		audio2.pause();
		audio3.pause();
		audio4.pause();
		audio5.pause();
		audio6.pause();
		audio7.pause();
		audio8.pause();
		audio9.pause();
		audio10.pause()
	});
});

const stopSwipe = () => {
	console.log('stopSwipe event');

	audio1.pause();
	audio2.pause();
	audio3.pause();
	audio4.pause();
	audio5.pause();
	audio6.pause();
	audio7.pause();
		audio8.pause();
		audio9.pause();
		audio10.pause()
};

});

function submitQuiz() {
	const correctAnswers = ["b", "b", "c", "b", "c", "c"];
	let score = 0;

	for (let i = 1; i <= 6; i++) {
		const selectedAnswer = document.querySelector(`input[name="q${i}"]:checked`);
		if (selectedAnswer) {
			if (selectedAnswer.value === correctAnswers[i - 1]) {
				score++;
			}
		}
	}

	const resultElement = document.getElementById("result");
	resultElement.textContent = `You got ${score} out of 6 correct. The correct answers are given below:`;

	// Display correct answers
	for (let i = 1; i <= 6; i++) {
		const correctAnswer = document.querySelector(`input[name="q${i}"][value="${correctAnswers[i - 1]}"]`).parentNode.textContent;
		resultElement.innerHTML += `<br><strong>Question ${i}:</strong> ${correctAnswer}`;
	}
};