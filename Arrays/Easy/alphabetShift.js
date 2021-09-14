const alphabetShift = function(inputString){
    let alphabet = ['a', 'b', 'c', 'd', 'e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let outputString = inputString.split('');

    for (let i = 0; i < outputString.length; i++){

        let index = 0;

        if(outputString[i] !== 'z'){
            index = alphabet.indexOf(outputString[i]) + 1;
        }
        outputString[i] = alphabet[index];

    }
    return outputString.join('');
    
}

console.log(alphabetShift('crazy'));