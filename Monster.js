class Monster{
    constructor(x, y, radius) {
        var options = {
            'density':5,
            'frictionAir':0
            
        }
        this.x=x
        this.y=y
        this.radius=radius
        this.MonsterImg=loadImage("Monster-01.png")
        this.body = Bodies.circle(this.x,this.y,this.radius, options);
        World.add(world, this.body);
        
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(RADIUS)
        //ellipse(0, 0, this.radius/2);
        image(this.MonsterImg,0,0,this.radius,this.radius)
        pop();
      }
}