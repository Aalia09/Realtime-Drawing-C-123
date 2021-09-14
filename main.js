function setup()
{
    video= createCapture(VIDEO);
    video.size(550 , 500);

    canvas = createCanvas(550 ,550);
    canvas.position(560 , 150);

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
}

function gotPoses()
{
    console.log("Got poses");
}