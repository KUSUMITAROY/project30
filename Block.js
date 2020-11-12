class Block{
  constructor(x, y, width, height, angle) {
      var options = {
        restitution : 0.7,
        friction : 0,
        isStatic : false,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.Visibility = 255;
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      if(this.body.speed <7)
    {
      
     
    
      
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop();
    }
    else {
    push();
    World.remove(world,this.body);
    this.Visibility = this.Visibility - 5;
    tint(255,this.Visibility);
   // rect(this.body,this.body.position.x,this.body.position.y);
    pop()}
    }
}


 
 
 