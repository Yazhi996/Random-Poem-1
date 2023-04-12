//Each refresh generates a new poem

let gradient;
let c1 = "A piece of";
let c2 = ["paper", "leaf", "cake", "jewelry", "candy", "fabric"];
let c3 = ["Run", "Swim", "Dance", "Sing", "Play"];
let c4 = ["In the morning", "In the park", "In the restaurant" ,"In the office"];
let c5 = ["Quietly", "Seriously", "Anxiously", "Patiently"];

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  textSize(50);
  fill(255);

  gradient = createGradient(width, height, ['#43F6D7', '#4469FF']);
}

function draw() {
  clear();
  
  image(gradient, 0, 0);
  
  text(c1, windowWidth/2, windowHeight/2 - 100);
  text(random(c2), windowWidth/2, windowHeight/2 - 50);
  text(random(c3), windowWidth/2, windowHeight/2);
  text(random(c4), windowWidth/2, windowHeight/2 + 50);
  text(random(c5), windowWidth/2, windowHeight/2 + 100);

noLoop();

}

function createGradient(w, h, colors) {
  let gradient = createGraphics(w, h);
  let from = color(colors[0]);
  let to = color(colors[1]);
  for (let i = 0; i < w; i++) {
    let inter = map(i, 0, w, 0, 1);
    let c = lerpColor(from, to, inter);
    gradient.stroke(c);
    gradient.line(i, 0, i, h);
  }
  return gradient;
}