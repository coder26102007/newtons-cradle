class Rope{
constructor(body1,body2,oofsetX,offsetY){
this.offsetX = oofsetX;
this.offsetY = offsetY;

var op={

bodyA:body1,
bodyB: body2,
pointB: {x:this.offsetX,y:this.offsetY}

}
this.rope = Matter.constrant.create(op);
World.add(world,this.rope);

}
display(){
var point1 = this.rope.bodyA.position;
var ponit2 = this.rope.bodyB.position;

strokeWeight(2);

var Anchor1x = point1.x;
var Anchor1y = point1.y;


var Anchor2x = point2.x + this.offsetX;
var Anchor2y = point2.y + this.offsetY;

line(Anchor1x,Anchor1y,Anchor2x,Anchor2y);

}
}