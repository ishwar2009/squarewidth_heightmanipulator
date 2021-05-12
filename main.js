noseX=0;
noseY=0;
difference=0;
leftwristx=0;
rightwristx=0;

function setup(){
    canvas=createCanvas(550,550);
    canvas.position(560,200)
    video=createCapture(VIDEO);
    video.size(550,550)
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPose);
}
function modelLoaded(){
    console.log('Posenet is initialized');
}

function gotPose(results){
if(results.length>0){
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("nose x:"+noseX +"nose y:"+noseY);
    leftwristx=results[0].pose.leftWrist.x;
    rightwristx=results[0].pose.rightWrist.x;
    difference=floor(leftwristx-rightwristx)
    console.log(leftwristx +","+rightwristx +","+difference );
}
}
function draw(){
    document.getElementById("square_width_height").innerHTML="square width and height="+difference+"px"
    background("#4dff00")
    fill("#000dff");
    stroke("#ff0000")
    square(noseX,noseY,difference);
}