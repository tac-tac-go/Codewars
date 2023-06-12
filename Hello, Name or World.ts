export function hello(name:string = 'World'): string {
  if(name.length==0){return 'Hello, World!'}
  return `Hello, ${name.charAt(0).toUpperCase()+name.slice(1).toLowerCase()}!`;
}
