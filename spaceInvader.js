"use strict";

alert("Draw your space invader here");

    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

drawspaceinvader();

function drawspaceinvader(){


    context.lineWidth = 1;
    context.strokeStyle = '#F0F0F0';
    context.beginPath();
    context.fillStyle = '#F0F0F0';
    context.rect(50,50,300,300);
    context.fill();
    context.stroke();

    context.lineWidth = 1;
    context.strokeStyle = '#8A9ED9';
    context.beginPath();
    context.fillStyle =  '#8A9ED9';
    context.rect(75,75,50,50);
    context.rect(175,75,50,250);
    context.rect(125,175,150,100);
    context.rect(275,75,50,50);
    context.fill();
    context.stroke();

    
}