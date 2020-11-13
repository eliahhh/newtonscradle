class Rope{
    constructor(body1, body2, offsetX, offsetY){
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB:{x:this.offsetX, y:this.offsetY}
        }
        
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
   

    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        strokeWeight(2);
        var A = pointA.x;
        var B = pointA.y;
        var A1 = pointB.x+this.offsetX;
        var B1 = pointB.y+this.offsetY;
        line(A,B,A1,B1);
    }
    
}