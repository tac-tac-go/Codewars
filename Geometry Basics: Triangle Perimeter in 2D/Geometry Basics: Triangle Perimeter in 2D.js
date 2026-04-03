const calc = (o1,o2) =>  Math.sqrt(Math.pow(o1.x - o2.x, 2) + Math.pow(o1.y - o2.y, 2));
const trianglePerimeter = (triangle) => calc(triangle.a,triangle.b)+calc(triangle.b,triangle.c)+calc(triangle.a,triangle.c)
