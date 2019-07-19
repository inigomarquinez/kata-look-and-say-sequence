module.exports = generateSequence = (seed, length) => {
    let finalSequence = seed;
    
    while (finalSequence.length < length) {
        const numberArr = finalSequence.split('')
        finalSequence = '';
        let count = 1;
        for(i=0; i < numberArr.length; i++) {
            if (numberArr[i] === numberArr[i+1]) {
                count++;
            } else {
                finalSequence += count.toString() + numberArr[i].toString();
                count = 1;
            }
        }

        console.log('Sequence: ', finalSequence, (finalSequence.length));
    }

    return finalSequence;
};