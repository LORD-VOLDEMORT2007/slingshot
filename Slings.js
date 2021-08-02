class Sling{


    constructor(bdyA , bdyB){

        var options = {

            length: 50,
            stiffness : 0.04,
            bodyA : bdyA,
            bodyB : bdyB
        }

        this.const = Constraint.create(options)
        World.add(world , this.const)

    }
display(){

    var bd1 = this.const.bodyA.position
    var bd2 = this.const.bodyB.position

    strokeWeight(5)
    line(bd1.x , bd1.y , bd2.x , bd2.y);

}


}