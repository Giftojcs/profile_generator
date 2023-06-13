const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const profile = {};

const questions = [
  "What's your name? Nicknames are also acceptable :)",
  "What's an activity you like doing?",
  "What do you listen to while doing that?",
  "Which meal is your favourite (eg: dinner, brunch, etc.)",
  "What's your favourite thing to eat for that meal?",
  "Which sport is your absolute favourite?",
  "What is your superpower? In a few words, tell us what you are amazing at!",
];

const askQuestion = (questionIndex) => {
  rl.question(questions[questionIndex] + ' ', (answer) => {
    profile[`answer${questionIndex + 1}`] = answer;

    if (questionIndex === questions.length - 1) {
      generateProfile();
      rl.close();
    } else {
      askQuestion(questionIndex + 1);
    }
  });
};

const generateProfile = () => {
  console.log('\n--- Profile ---\n');

  const {
    answer1,
    answer2,
    answer3,
    answer4,
    answer5,
    answer6,
    answer7,
  } = profile;

  console.log(
    `Name: ${answer1}\n` +
      `Activity: ${answer2}\n` +
      `Listening to: ${answer3}\n` +
      `Favorite meal: ${answer4}\n` +
      `Favorite food: ${answer5}\n` +
      `Favorite sport: ${answer6}\n` +
      `Superpower: ${answer7}`
  );
};

askQuestion(0);

