class Parent {
    constructor(x,y,width,height)
     {
      var options = {
        'density':1.5,
        'friction': 1.0,
        'restitution':0.5
      };
      this.body = Bodies.rectangle(x, y, this.width,this.height, options);
      this.width = this.width;
      this.height = this.height;
      this.image=loadImage("sprites/base.png")
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image,0,0,this.width,this.height);
      pop();
    };
  };