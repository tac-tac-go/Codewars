function hello(name) {
  if(!name)return 'Hello, World!'
  name = name[0].charAt(0).toUpperCase()+name.slice(1).toLowerCase()
  return `Hello, ${name}!`
}
