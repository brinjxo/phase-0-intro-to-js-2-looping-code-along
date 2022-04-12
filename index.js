// Code your solutions in this file
// function writeCards(nameArray,event) {
// let cards = []
// for (let x = 0; x < nameArray.length; x++) {
//     cards.push(`Thankyou, ${nameArray[x]}, for the wonderful ${event} gift!`)
// }
// return cards
// }
function writeCards( namesArray, event ) {
    let thankYouCards = []
    for ( let i = 0; i < namesArray.length; i++ ) {
      thankYouCards.push( `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!` )
    }
    return thankYouCards
  }
// 1- create a new, empty array to hold the messages;
// 2-iterate through the input array and, inside the loop, build out the 'thank you' message for each name using string interpolation, then add that message to the new array you created;
//3- after the loop finishes and all of the messages have been added to the new array, return the new array.

function countDown( startingNumber ) {
    while ( startingNumber > 0 ) {
      console.log( startingNumber );
      startingNumber -= 1;
    }
    console.log( startingNumber );
  }