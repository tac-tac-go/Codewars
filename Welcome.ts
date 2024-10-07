export function greet(language: string): string {
  interface GreetingInDifferentLanguages {
    [property: string]: string;
  }
  
  const differentGreeating: GreetingInDifferentLanguages = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso',
  }
  
  const invalidInputs: GreetingInDifferentLanguages = {
    IP_ADDRESS_INVALID: 'Welcome',
    IP_ADDRESS_NOT_FOUND: 'Welcome',
    IP_ADDRESS_REQUIRED: 'Welcome',
  }
  
  if (invalidInputs[language]) {
    return invalidInputs[language];
  }
  
  return differentGreeating[language];
}
