var readlineSync = require("readline-sync");
const chalk = require("chalk");

var userName = readlineSync.question(chalk.bgCyan("What is your name :") + " ");

console.log("\n");

console.log(
	chalk.bold.white.bgMagenta(
		" Hello " + userName + "!  Welcome to Game of Thrones Quiz! "
	)
);
console.log("\n");

console.log(
	chalk.italic.bgRed("Rules:") +
		"\n1. Use the correct input type (a,b,c) then click enter.\n2. You need to score > 3 to reach second level and >7 to third level. "
);

console.log(chalk.blue("-------------------------------------------"));

console.log(chalk.bgGray("Let's start the questions."));
console.log(chalk.blue("-------------------------------------------"));

var score = 0;

var highScore = [
	{
		name: "Prashant",
		score: 10,
	},
];

function play(question, answer) {
	var userAnswer = readlineSync.question(question + "\nYour answer: ");
	// userAnswer = userAnswer.toString();
	// if(userAnswer!=="a" || userAnswer!=="b"|| userAnswer!=="c"){
	//   console.log(chalk.bgRed("\nInvalid Input. Kindly input again.\n"));
	//   var userAnswer = readlineSync.question(question);
	// }

	if (userAnswer.toUpperCase() === answer.toUpperCase()) {
		console.log(chalk.greenBright.bold("Right answer!"));
		score = score + 1;
	} else {
		console.log(chalk.redBright.bold("Wrong answer!"));
	}

	console.log("Your current score is " + score);
	console.log(chalk.blue("-------------------------------------------"));
}

var questionSet = [
	{
		question:
			"GOT is written by?\na. G.G. Martin\nb. Vince Gilligan\nc. Tony Moore\n",
		answer: "a",
	},
	{
		question:
			"The meaning of “Valar morghulis”?\na. All men must die.\nb. All men must serve.\n",
		answer: "a",
	},
	{
		question:
			"Name the season in which Jon Snow died.\na. Season 6\nb. Season 5\nc. Season 4\n",
		answer: "b",
	},
	{
		question:
			"_____ is the biggest castle in the Westeros.\na. Casterly Rock\nb. Highgarden\nc. Harrenhal\n",
		answer: "c",
	},
	{
		question:
			'Episode "Red Wedding" is in ?\na. Season 4\nb. Season 3\nc. Season 2\n',
		answer: "b",
	},
	{
		question: "Ned Stark had __ siblings?\na. 3\nb. 2\nc. 4",
		answer: "a",
	},
	{
		question:
			"‘The Viper’ is the nickname of whom?\na. Ellaria Sand\nb. Ella Sand\nc. Oberyn Martell",
		answer: "c",
	},
	{
		question:
			"Daenerys legitimized Gendry Baratheon and made him Lord of _____.\na. Dragon Stone\nb. Stormland\nc. Highgarden",
		answer: "b",
	},
	{
		question:
			"Which character is also known as the ‘Onion Knight’?\na. Bronn\nb. Brienne\nc. Ser Davos",
		answer: "c",
	},
	{
		question: "Name of Gilly’s child.\na. Jon\nb. Pyp\nc. Sam",
		answer: "c",
	},
	{
		question:
			"How many kings/queens of Westeros did Lord Varys serve?\na. 4\nb. 3\nc. 5",
		answer: "a",
	},
	{
		question:
			'How was "The Queen of Thorns" commonly known as?\na. Margery Tyrell\nb. Olenna Tyrell\nc. Cersie Lannister',
		answer: "b",
	},
	{
		question:
			'What does Daenerys mean when she says "Shekh ma shieraki anni"\na. Moon of my life\nb. My love\nc. My sun and stars',
		answer: "c",
	},
];

for (var i = 0; i < 5; i++) {
	var currentQuestion = questionSet[i];
	play(currentQuestion.question, currentQuestion.answer);
}

// console.log("\nYAY... You scored ",score," out of ",questionSet.length);

if (score > 3) {
	console.log(chalk.bgRed("\nNice... You have reached second level!!!"));
	console.log(chalk.blue("-------------------------------------------"));
	console.log("\n");

	for (var i = 5; i < 10; i++) {
		var currentQuestion = questionSet[i];
		play(currentQuestion.question, currentQuestion.answer);
	}
} else {
	console.log("\nhuhhhmmmmmm.... you need to watch GOT again!!!\n");
}

if (score > 7) {
	console.log(chalk.bgRed("\nGreat... You have reached final level!!!"));
	console.log(chalk.blue("-------------------------------------------"));
	console.log("\n");

	for (var i = 10; i < questionSet.length; i++) {
		var currentQuestion = questionSet[i];
		play(currentQuestion.question, currentQuestion.answer);
	}
}

console.log(
	chalk.greenBright(
		"Your final score is " + score + " out of " + questionSet.length
	)
);
console.log("\n");

if (score == questionSet.length) {
	console.log(
		chalk.bgMagenta.bold(
			"BRAVO !!! YOU KNOW EVERYTHING !!! HATS OFF TO YOU BUDDY !!!"
		)
	);
	console.log("\n");
}

if (score > highScore[0].score) {
	console.log(chalk.bold.italic.bgRed("YOU DID BEAT HIGHSCORE !!!"));
	console.log("\n");
	console.log("Send me the screenshot so I can update the highscore.");
}
