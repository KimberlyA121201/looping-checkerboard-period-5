function setup() {
  createCanvas(500,400)
}

function draw() {
  background(0)
  fill(250)

  var x = 50

  for (var i = 0; i < 8; i++) {
    rect(x, height/2, 40, 40)
    x += 50
    var count=0
   if(count %2===0)
   fill("red")
   rect(x, height/2, 40, 40)
    x += 50
  }

}