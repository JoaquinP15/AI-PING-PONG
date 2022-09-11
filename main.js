function preload(){

}

function setup(){
    canvas = createCanvas(600,500);
    canvas.parent("canvas");

    posenet = ml5.posenet(posenet,modelLoaded);
    posnet.on();
}

function modelLoaded(){
    console.log("posenet is loaded",gotResults);
}