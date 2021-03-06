const cvs = document.getElementById("snake");
const ctx = cvs.getContext("2d");

// create the unit
const box = 32;

// Chargement des images

const ground = new Image();
ground.src = "./img/ground.png";

const foodImg = new Image();
foodImg.src = "./img/food.png";

// charger les fichiers audio

let dead = new Audio();
let eat = new Audio();
let up = new Audio();
let right = new Audio();
let left = new Audio();
let down = new Audio();

dead.src = "./audio/dead.mp3";
eat.src = "./audio/eat.mp3";
up.src = "./audio/up.mp3";
right.src = "./audio/right.mp3";
left.src = "./audio/left.mp3";
down.src = "./audio/down.mp3";

// crée le serpent

let snake = [];

snake[0] = {
	x: 9 * box,
	y: 10 * box
};

// créer la nourriture

let food = {
	x: Math.floor(Math.random() * 17 + 1) * box,
	y: Math.floor(Math.random() * 15 + 3) * box
}

// crée la partition var

let score = 0;

// contrôle le serpent

let d;

document.addEventListener("keydown", direction);

function direction(event) {
	let key = event.keyCode;
	if (key == 37 && d != "RIGHT") {
		left.play();
		d = "LEFT";
	} else if (key == 38 && d != "DOWN") {
		d = "UP";
		up.play();
	} else if (key == 39 && d != "LEFT") {
		d = "RIGHT";
		right.play();
	} else if (key == 40 && d != "UP") {
		d = "DOWN";
		down.play();
	}
}

// vérifier la fonction de collision
function collision(head, array) {
	for (let i = 0; i < array.length; i++) {
		if (head.x == array[i].x && head.y == array[i].y) {
			return true;
		}
	}
	return false;
}

// dessine tout sur le canvas

function draw() {

	ctx.drawImage(ground, 0, 0);

	for (let i = 0; i < snake.length; i++) {
		ctx.fillStyle = (i == 0) ? "#4a752c" : "white";
		ctx.fillRect(snake[i].x, snake[i].y, box, box);

		ctx.strokeStyle = "#4a752c";
		ctx.strokeRect(snake[i].x, snake[i].y, box, box);
	}

	ctx.drawImage(foodImg, food.x, food.y);

	// ancienne position de la tête
	let snakeX = snake[0].x;
	let snakeY = snake[0].y;

	// quelle direction
	if (d == "LEFT") snakeX -= box;
	if (d == "UP") snakeY -= box;
	if (d == "RIGHT") snakeX += box;
	if (d == "DOWN") snakeY += box;
	// si le serpent mange la nourriture
	if (snakeX == food.x && snakeY == food.y) {
		score++;
		eat.play(); 	
		food = {
			x: Math.floor(Math.random() * 17 + 1) * box,
			y: Math.floor(Math.random() * 15 + 3) * box
		}
		// on n'enlève pas la queue
	} else {
		// enlève la queue
		snake.pop();
	}

	// ajouter une nouvelle tête

	let newHead = {
		x: snakeX,
		y: snakeY
	}

	// jeu terminé
	if (snakeX < box || snakeX > 17 * box || snakeY < 3 * box || snakeY > 17 * box || collision(newHead, snake)) {
		clearInterval(game);
		dead.play();
	}
	snake.unshift(newHead);

	ctx.fillStyle = "white";
	ctx.font = "45px Changa one";
	ctx.fillText(score, 2 * box, 1.6 * box);

}


// appelle la fonction draw toutes les 100 ms

let game = setInterval(draw, 100);