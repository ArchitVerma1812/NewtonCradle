class rope{
    constructor(bodyA,bodyB,offsetX,offsetY) {

        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options={
            bodyA : bodyA,
            bodyB : bodyB,
            pointB:{x:offsetX,y:offsetY},
            stiffness : 0.05,
            length :10

        }

        this.rope = Constraint.create(options)
        World.add(world,this.rope);
    }

fly(){
    this.rope.bodyA = null;
}

display(){
    if(this.rope.bodyA){
    var pointA = this.rope.bodyA.position;
    var pointB = this.rope.bodyB.position;
    line(pointA.x,pointA.y, pointB.x,pointB.y);
    }
}
}