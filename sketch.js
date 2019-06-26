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

    image(image1,width * .8,height * .7, randmiclevel,randmiclevel2);
    image(image2,width * .3,height * .75, randmiclevel,randmiclevel2);
    image(image3,width * .1,height * .6 , randmiclevel,randmiclevel2);
    image(image4,width * .85,height * .95, randmiclevel,randmiclevel2);
    image(image5,width * .27,height * .93, randmiclevel,randmiclevel2);
    image(image6,width * .15,height * .86, randmiclevel,randmiclevel2);
    image(image7,width * .6,height * .98 , randmiclevel,randmiclevel2);
    image(image8,width * .74,height * .98, randmiclevel,randmiclevel2);
    image(image9,width * .9,height * .8, randmiclevel,randmiclevel2);
    image(image10,width * .2,height * .8, randmiclevel,randmiclevel2);
    image(image11,width * .5,height * .63, randmiclevel,randmiclevel2);
    image(image12,width * .62,height * .6, randmiclevel,randmiclevel2);
    image(image13,width * .4,height * .85, randmiclevel,randmiclevel2);
    image(image14,width * .22,height * .65, randmiclevel,randmiclevel2);
    image(image15,width * .15,height * .1, randmiclevel,randmiclevel2);
    image(image16,width * .4,height * .01, randmiclevel,randmiclevel2);
    image(image17,width * .4,height * .11, randmiclevel,randmiclevel2);
    image(image18,width * .65,height * .01, randmiclevel,randmiclevel2);
    image(image19,width * .61,height * .09, randmiclevel,randmiclevel2);
    image(image20,width * .15,height * .13, randmiclevel,randmiclevel2);
    image(image9,width * .35,height * .6, randmiclevel,randmiclevel2);
    image(image9,width * .55,height * .85, randmiclevel,randmiclevel2);












    






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