function preload(){

}

function setup(){
    canvas = createCanvas(600,500);
    canvas.parent("canvas");

    video = createCapture(VIDEO);
    video.size(400,300);

    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on("pose",gotResults);
}

function modelLoaded(){
    console.log("posenet is initialized");
}