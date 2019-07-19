const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let seed = 1;
let sequenceLength = 10;

const question1 = () => new Promise((resolve, reject) => {rl.question('First number of sequence ', answer => {
  // TODO: Log the answer in a database
  console.log(`Seed is : ${answer}`);

  seed = answer;
  resolve()
})});

const question2 = () => new Promise((resolve, reject) => {rl.question('Length of sequence ', answer => {
  // TODO: Log the answer in a database
  console.log(`Length is: ${answer}`);

  sequenceLength = answer;
  resolve()
})});

const main = async () => {
    await question1()
    await question2()

    const numberArr = seed.split('')
    let newSequenceString = '';
    let count = 1;
    for(i=0; i < numberArr.length; i++) {
        if (numberArr[i] === numberArr[i+1]) {
            count++;
        } else {
            newSequenceString += count.toString() + numberArr[i].toString();
            count = 1;
        }
    }
    
    console.log('Sequence', newSequenceString);
    rl.close()
}

main()