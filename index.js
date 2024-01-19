function countDown(number) {
    let countup = number;
    while (countup >= 0) {
      console.log(countup--);
    }
  }
  
  countDown(10);
  
  function writeCards(names, event) {
    let messages = [];
  
    for (let i = 0; i < names.length; i++) {
      let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
      messages.push(message);
    }
  
    return messages;
  }
