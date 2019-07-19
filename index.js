const readline = require('readline');
const generateSequence = require('./generateSequence');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let seed = 1;
let sequenceLength = 10;

const question1 = () => new Promise((resolve, reject) => {
    rl.question('First number of sequence ', answer => {
        console.log(`Seed is : ${answer}`);
        seed = answer;
        resolve()
    })
});

const question2 = () => new Promise((resolve, reject) => {
    rl.question('Minimum length of sequence ', answer => {
        console.log(`Length is: ${answer}`);
        sequenceLength = answer;
        resolve()
    })
});

const main = async () => {
    await question1()
    await question2()

    generateSequence(seed, sequenceLength);

    rl.close()
}

main()