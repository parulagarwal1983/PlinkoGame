class Particles{
    constructor(x,y,radius){
        var options = {
            isStatic: false,
            'restitution':0.4
        }

        this.x = x;
        this.y = y;
        this.radius = radius;
        this.body = Matter.Bodies.circle(this.x,this.y,this.radius,options);
        this.color = rgb(random(0,250),random(0,250),random(0,250));
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);       
        ellipseMode(RADIUS);  
        fill(this.color);    
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}