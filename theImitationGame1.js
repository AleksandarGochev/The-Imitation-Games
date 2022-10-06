function imitation(input) {
 
    let msg = input.shift();
    let line = input.shift();
 
    while (line !== 'Decode') {
 
        let tokens = line.split('|');
        let command = tokens[0];
        if (command == 'Move') {
            let [_, n] = tokens;
            n = Number(n);
 
            let left = msg.slice(0, n);
            let right = msg.slice(n,);
            msg = right + left
 
        } else if (command == 'Insert') {
            let [_, index, value] = tokens;
            index = Number(index);
            let left = msg.slice(0, index);
            let right = msg.slice(index,);
            msg = left + value + right;
 
        } else {
            let [_, substring, replacement] = tokens;
            if (msg.includes(substring)) {
                msg = msg.split(substring).join(replacement)
            }
        }
 
        line = input.shift();
    }
console.log(`The decrypted message is: ${msg}`)
 
}