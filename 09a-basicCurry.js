
  const greetCurry = (greeting) => (name) => {console.log(`${greeting} world, from ${name}`)}

  const greetHello = greetCurry('Hello');

  greetHello(); //Hello world, from undefined

  greetHello('John'); //Hello world, from John

  const greetWassup = greetCurry('Wassup');

  greetWassup('Tim');