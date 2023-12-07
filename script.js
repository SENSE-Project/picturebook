let activeImage = null;

const images = document.querySelectorAll('img');

const audio1 = new Audio('audio/beehive.mp4');
const audio2 = new Audio('audio/Tree bark 2 lr.mp4');

audio1.muted = false;
audio2.muted = false;

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
		} else if (imageId === 'image2') {
			console.log('Image 2 selected');
			audio2.play();
		}
	});

	image.addEventListener('mouseup', () => {
		console.log('mouseup event');

		audio1.pause();
		audio2.pause();
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

		if (imageId === 'image1') {
			console.log('Image 1 selected');
			audio1.play();
		} else if (imageId === 'image2') {
			console.log('Image 2 selected');
			audio2.play();
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
	});
});

const stopSwipe = () => {
	console.log('stopSwipe event');

	audio1.pause();
	audio2.pause();
};

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