// Code your solutions in this file
const messages = [];
function writeCards(array, event) {
    for (let i=0; i < array.length; i++) {
        const card = `Thank you, ${array[i]}, for the wonderful ${event} gift!`
        messages.push(card);
    }
    return messages;

}

function countDown(int) {
    while (int >= 0) {
        console.log(int);
        int--;
    }
}

console.log(countDown(10));