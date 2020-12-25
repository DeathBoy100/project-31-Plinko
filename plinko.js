class plinko{    
    constructor(x,y,r){
      var options = {
          isStatic: true,
          friction: 0,
          density: 4,
          restitution:1
      }
       this.radius = r;
       this.body = Bodies.circle(x,y,r,options)
       World.add(world,this.body)
    }    
    display(){
        
        var p = this.body.position;
        var a = this.body.angle;
       // translate(this.body.position.x, this.body.position.y);
       push();
      //  rotate(a);
      fill("green");
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius)
        pop();
    }
 }