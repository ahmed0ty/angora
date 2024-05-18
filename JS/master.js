var texts = [
    "“It's not what happens to you, but how you react to it that matters.”<br> ― Epictetus","“Be yourself; everyone else is already taken.”<br> ― Oscar Wilde","“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”<br> ― Marilyn Monroe",
    "“So many books, so little time.”,<br> ― Frank Zappa","“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”<br> ― Albert Einstein","“A room without books is like a body without a soul.”<br> ― Marcus Tullius Cicero",
    "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”<br> ― Bernard M. Baruch","“You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.”<br> ― William W. Purkey","“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”<br> ― Dr. Seuss","“You only live once, but if you do it right, once is enough.”<br> ― Mae West"
    ,"“Be the change that you wish to see in the world.”<br> ― Mahatma Gandhi","“In three words I can sum up everything I've learned about life: it goes on.”<br> ― Robert Frost","“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”<br> ― J.K. Rowling, Harry Potter and the Goblet of Fire","“Don’t walk in front of me… I may not followDon’t walk behind me… I may not leadWalk beside me… just be my friend”<br> ― Albert Camus","“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”<br> ― Maya Angelou"
    ,"“Here's to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They're not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can't do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do.”<br> ― Steve Jobs"

];


var x = 0;
var y = 0;

var button = document.getElementById("btn");
button.onclick = function() {
    
    while(y === x){
        y = Math.floor(Math.random() * texts.length);
    }
    x = y;

    var randomText = texts[y];
    document.getElementById("demo").innerHTML = randomText;
    
};
