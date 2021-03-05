class Superhero{
    constructor(x, y, radius) {
        var options = {
            'frictionAir':1,
            'density':1.0
        }
        this.x=x
        this.y=y
        this.radius=radius
        this.superheroImg=loadImage("Superhero-01.png")
        this.body = Bodies.circle(x, y,radius, options);
        World.add(world, this.body);
        
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        //rotate(angle);
        ellipseMode(RADIUS)
        //ellipse(0, 0, this.radius);
        image(this.superheroImg,0,0,150,100)
        pop();
      }
}