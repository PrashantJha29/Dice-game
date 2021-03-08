var randomnum1=Math.floor(Math.random()*6)+1;
var randomnum2=Math.floor(Math.random()*6)+1;

var player1=prompt("Enter player 1's name");
var player2=prompt("enter player 2's name");

var randomDiceImg="dice"+randomnum1+".png";

var image1= document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDiceImg);

var randomDiceImg2="dice"+randomnum2+".png";

var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src",randomDiceImg2);

document.querySelectorAll("p")[0].innerHTML=player1;

document.querySelectorAll("p")[1].innerHTML=player2;

if(randomnum1>randomnum2)
{
    document.querySelector("h1").innerHTML=player1 +" Wins :)";
}
else if(randomnum2>randomnum1)
{
    document.querySelector("h1").innerHTML=player2 +" wins :)";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}