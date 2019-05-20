// Write your code here
let Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Composites = Matter.Composites;
    Constraint = Matter.Constraint;
let engine = Engine.create();
let render = Render.create({
    element: document.body,
    engine: engine
});
Engine.run(engine);
Render.run(render);

let ball=Bodies.circle(200, 10, 40);
let myBall = Bodies.circle(300,40, 60);
let floor=Bodies.trapezoid(340,500,500,100,.9,{isStatic: false});
let myCradle=Composites.newtonsCradle(600, 200, 1000, -20, 30);
let cradle2= Composites.newtonsCradle(700, 300, 400, -5, 30);
let constraint = Constraint.create({
    length:250,
    stiffness:.1,
    pointA: {x: 250, y:20},
    bodyB: myBall,
});

World.add(engine.world, [ball,floor,myCradle,cradle2,myBall,constraint]);


let world = engine.world;
let Mouse= Matter.Mouse;
let MouseConstraint=Matter.MouseConstraint;
let mouse = Mouse.create(render.canvas);
let mouseConstraint = MouseConstraint.create(engine, {mouse: mouse});
World.add(world, mouseConstraint);
render.mouse = mouse;
