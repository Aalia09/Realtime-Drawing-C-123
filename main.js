noseX = 0;
noseY = 0;
difference = 0;
leftwristX= 0;
rightwristX = 0;

function setup()
{
    video= createCapture(VIDEO);
    video.size(550 , 500);

    canvas = createCanvas(550 ,540);
    canvas.position(560 , 110);

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on("pose" , gotPoses);


}

function modelLoaded()
{
    console.log("PoseNet is initialized");
}

function draw()
{
    background("#6e75d4");
    document.getElementById("square_side").innerHTML = "Width and Height of a Square will be = " + difference + "px";
    fill("black");
    stroke("peach");
    square(noseX , noseY , difference);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + "noseY = " + noseY);

        leftwristX = results[0].pose.leftWrist.x;
        rightwristX = results[0].pose.rightWrist.x;
        difference = floor(leftwristX - rightwristX);

        console.log("leftwristX = " + leftwristX + "rightwristX = " + rightwristX + "difference = " + difference);
    }

}