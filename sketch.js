var mic;
var button;
var smoothMicLevel=0;

function preload() {
    bgimage = loadImage('images/background.png');
    image1 =loadImage('images/flower-1.png');
    image2 =loadImage('images/flower-2.png');
    image3 =loadImage('images/flower-3.png');
    image4 =loadImage('images/drop-1.png');
    image5 =loadImage('images/drop-2.png');
    image6 =loadImage('images/drop-3.png');
    image7 =loadImage('images/flower-4.png');
    image8 =loadImage('images/drop-4.png');
    image9 =loadImage('images/drop-5.png');
    image10 =loadImage('images/flower-5.png');
    image11 =loadImage('images/flower-6.png');
    image12 =loadImage('images/drop-6.png');
    image13 =loadImage('images/flower-7.png');
    image14 =loadImage('images/drop-7.png');
    image15 =loadImage('images/flower-8.png');
    image16 =loadImage('images/drop-8.png');
    image17 =loadImage('images/drop-9.png');
    image18 =loadImage('images/drop-10.png');
    image19 =loadImage('images/drop-11.png');
    image20 =loadImage('images/drop-12.png');









}
function setup() {
    createCanvas(windowWidth, windowHeight-50);
    background(0);
    button = createButton('Listen');
    button.mousePressed(toggleListen);

    mic = new p5.AudioIn();
    mic.start();


    
}

function draw() {

    micLevel = mic.getLevel();

    smoothMicLevel = lerp(smoothMicLevel, micLevel, 0.9);
    imageMode(CENTER);
    image(bgimage,width/2,height/2,width, height);

    var randmiclevel = random(smoothMicLevel*3000);
    var randmiclevel2 = random(smoothMicLevel*2200)

    image(image1,1160,750, randmiclevel,randmiclevel2);
    image(image2,700,750, randmiclevel,randmiclevel2);
    image(image3,280,700, randmiclevel,randmiclevel2);
    image(image4,1750,950, randmiclevel,randmiclevel2);
    image(image5,540,940, randmiclevel,randmiclevel2);
    image(image6,300,880, randmiclevel,randmiclevel2);
    image(image7,1250,1010, randmiclevel,randmiclevel2);
    image(image8,1500,1010, randmiclevel,randmiclevel2);
    image(image9,1800,820, randmiclevel,randmiclevel2);
    image(image10,380,800, randmiclevel,randmiclevel2);
    image(image11,990,660, randmiclevel,randmiclevel2);
    image(image12,1200,640, randmiclevel,randmiclevel2);
    image(image13,840,880, randmiclevel,randmiclevel2);
    image(image14,470,650, randmiclevel,randmiclevel2);
    image(image15,320,60, randmiclevel,randmiclevel2);
    image(image16,850,10, randmiclevel,randmiclevel2);
    image(image17,820,80, randmiclevel,randmiclevel2);
    image(image18,1350,10, randmiclevel,randmiclevel2);
    image(image19,1250,90, randmiclevel,randmiclevel2);
    image(image20,300,90, randmiclevel,randmiclevel2);
    image(image9,750,600, randmiclevel,randmiclevel2);
    image(image9,1100,880, randmiclevel,randmiclevel2);












    






}

function toggleListen() {
	if (getAudioContext().state !== 'running') {
    	getAudioContext().resume();
		text('listening to audio', width/2, height/2);
		button.html("Stop");
	} else {
        text('click Play button to start', width/2, height/2);

        button.html("Listen");
    }
}