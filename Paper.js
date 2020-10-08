class Paper {
    constructor(x,y,r) {
      var options = {
          restitution:0.3,
          friction:0.5,
          density:1.2
      }
      this.body = Bodies.circle(x,y,r,options);
      this.width = r;
      this.height = r;
      this.image = loadImage("Images/paper.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(RADIUS);
      fill("yellow");
      image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
      
      
    }
  };