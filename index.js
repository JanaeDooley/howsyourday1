function howIsYourDay(){
    const messages1 = ['Your Day is gonna be horrible', 'Be on the Lookout for ladders or broken glass', 'Be wary, but you are gonna be find', 'You woke up on the right side of bed', 'You got lady luck on your side'];
    const result = Math.floor(math.random()* messages1.length);
    console.log(messages[result]);
}