class Ball{
    constructor(x, y,radius) {
      var options = {
          'restitution':0.4,
          'friction':0.3,
          'density':0.4,
          
      }
      this.body = Bodies.circle(x,y,radius,options);

      this.image = loadImage("open.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      //var angle = this.body.angle;
      //push();
      //translate(pos.x, pos.y);
      //rotate(angle);
      imageMode(RADIUS);

      
      image(this.image,pos.x, pos.y);
      //pop();
    }
  };