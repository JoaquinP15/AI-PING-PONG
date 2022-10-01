rightwristx = 0;
rightwristy = 0;

scorerightwrist = 0;

function preload(){

}

function setup(){
    canvas = createCanvas(600,500);
    canvas.parent("canvas");

    video = createCapture(VIDEO);
    video.size(400,300);

    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on("pose",gotPoses);
}

function modelLoaded(){
    console.log("posenet is initialized");
}

function gotPoses(results){
    if(results.length > 0){
		console.log(results);
		rightwristx = results[0].pose.rightWrist.x;
		rightwristy = results[0].pose.rightWrist.y;

        scorerightwrist = results[0].pose.keypoints[10].score;
	}
}

function draw(){
    if(scorerightwrist > 0.2){
        fill("blue");
        stroke("white");
        circle(rightwristx ,rightwristy);
    }
}