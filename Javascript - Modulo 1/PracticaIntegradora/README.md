# Practica integradora

## La idea de esta practica es que pongas a ejercitar todo lo visto hasta ahora: variables, funciones, funciones y metodos nativos y condicionales.

### Ejercicio 1

- Crear una funcion que reciba por parametro un string y devuelva solo la primer letra de dicho string.
```javascript
capitalLetter("Reloj") // output: "R"
capitalLetter("Murcielago") // output: "M"
```

### Ejercicio 2

- Crear una funcion que reciba por parametro un string y devuelva la ultima letra de dicho string.
```javascript
lastLetter("Reloj") // output: "j"
lastLetter("Murcielago") // output: "o"
```

### Ejercicio 3

- Crear una funcion que reciba tres parametros number y que permita sumar los primeros dos, o los tres valores en caso de recibir los tres. Pero si solo recibe dos valores, que sume solo esos dos.
```javascript
sumar(5, 10) // output 15
sumar(5, 10, 20) // output 35
```

### Ejercicio 4

- Investigar que metodo podemos utilizar para sacar la raiz cuadrada de un numero. Una vez investigado, crear una funcion que devuelva el resultado.
```javascript
raizCuadrada(4) // output 2
raizCuadrada(16) // output 4
```

### Ejercicio 5

- Investigar que metodo podemos utilizar para sacar el cuadrado de un numero. Una vez investigado, crear una funcion que devuelva el resultado.
```javascript
alCuadrado(4) // output 16
alCuadrado(16) // output 256
```

### Ejercicio 6

- Crear una función gritar que tome como argumento un string y devuelva el mismo string con un signo de exclamación al principio y al final del mismo.
```javascript
gritar('hola') // output ¡hola!
gritar('aaaaaa') // output ¡aaaaaa!
```

### Ejercicio 7

- Crear una función convertirHorasEnSegundos que tome como argumento un número de horas y devuelva la conversión a segundos de dicha cantidad de horas.
```javascript
convertirHorasEnSegundos(1) // output 3600
convertirHorasEnSegundos(3) // output 10800
convertirHorasEnSegundos(4.5) // output 16200
```

### Ejercicio 8

- Crear una función obtenerDatosDeCiudad que tome como argumentos un string nombre, un número poblacion y un string pais y devuelva string con el siguiente formato: La ciudad de NOMBRE tiene una población de POBLACION habitantes y está ubicada en PAIS.
```javascript
obtenerDatosDeCiudad('Santa Fe', 545606, 'Argentina') // output 'La ciudad de Santa Fe tiene una población de 545606 habitantes y está ubicada en Argentina'
```

### Ejercicio 9

- FPS son cuadros por segundo (frames per second). Crear una una función calcularFPS que tome como argumentos una cantidad de cuadros por segundo y una cantidad de minutos, y devuelva cuántos cuadros hubo en esa cantidad de minutos.
```javascript
calcularFPS(1, 1) // output 60
calcularFPS(10, 2) // output 1200
calcularFPS(2, 3) // output 360
```

### Ejercicio 10

- Crear una función sumarPorcentaje que tome como argumentos un número y un porcentaje y devuelva la suma de dicho número con la de su porcentaje. Usar la función calcularPorcentaje para obtener el porcentaje a sumar.
```javascript
sumarPorcentaje(100, 15) // output 115
sumarPorcentaje(10, 50) // output 15
sumarPorcentaje(200, 10) // output 220
```

### Ejercicio 11

- Crear una función restarPorcentaje que tome como argumentos un número y un porcentaje y devuelva la resta de dicho número con la de su porcentaje. Usar la función calcularPorcentaje para obtener el porcentaje a restar.
```javascript
restarPorcentaje(100, 15) // output 85
restarPorcentaje(10, 40) // output 6
restarPorcentaje(200, 10) // output 180
```

### Ejercicio 12

- Crear una función generarEmail que tome como argumentos dos string usuario y dominio y el un string email con el formato usuario@dominio.com.
```javascript
generarEmail('adalovelace', 'gmail') // output 'adalovelace@gmail.com'
```

### Ejercicio 13
- Crear una funcion que reciba dos strings y devuelva el numero de caracteres del string mas largo.
```javascript
esStringMasLargo("Esta soleado","No llovio en toda la semana") // output 27
```

### Ejercicio 14
- Crear una función aceptaDeposito que tome como argumento un número monto y devuelva true si el monto es divisible por 10 o false si no lo es.
```javascript
aceptaDeposito(440) // output: true
aceptaDeposito(123) // output: false
aceptaDeposito(500.50) // output: false
aceptaDeposito(1000) // output: true
```

### Ejercicio 15
- Crear una función esUltimoCaracter que tome como argumentos una palabra y un caracter y devuelva true si la palabra termina con el caracter o false de lo contrario.
```javascript
esUltimoCaracter('lovelace', 'e') // output: true
esUltimoCaracter('lovelace', 'f') // output: false
```

### Ejercicio 16
- Crear una función esValida que tome como argumento una contrasenia (string) y devuelva true si tiene 8 caracteres o más o false si tienen menos de 8 caracteres.
```javascript
esValida('contraseniaMuySegura') // output: true
esValida('abc123') // output: false
```

### Ejercicio 17
- Crear una función sonIguales que tome como argumentos dos strings a y b y devuelva true si ambos strings tienen el mismo contenido independientes del caso y false en caso contrario.
```javascript
sonIguales('javascript', 'JavaScript') // output: true
sonIguales('AdA LoVeLaCe', 'Ada Lovelace') // output: true
sonIguales('NO ESTOY GRITANDO', 'ESTOY GRITANDO') // output: false
```

### Ejercicio 18
- Crear una función capitalizar que tome como argumento un string str y devuelva el mismo string con la primera letra en mayúscula.
```javascript
capitalizar('lovelace') // output 'Lovelace'
capitalizar('había una vez...') // output 'Había una vez...'
```

### Ejercicio 19
- Crear una función obtenerDuracionEnSegundos que tome como argumento un string duracion con el formato (mm:ss) y la cantidad de segundos totales de la duración.
```javascript
obtenerDuracionEnSegundos('00:33') // output 33
obtenerDuracionEnSegundos('01:05') // output 65
obtenerDuracionEnSegundos('10:42') // output 642
```

### Ejercicio 20
- Crear una funcion que reciba por parametro un string de saludo y devuelva true o false si el string incluye la palabra "Hola". Ojo las mayusculas.
```javascript
esSaludoValido("Hola alumna!") // output: true
esSaludoValido("Que onda perri") // output: false
```

### Ejercicio 21
- Crear una función esValida que tome como argumento una contrasenia (string) y devuelva true si tiene 8 caracteres o más o false si tienen menos de 8 caracteres.
```javascript
esValida('contraseniaMuySegura') // output: true
esValida('abc123') // output: false
```

### Ejercicio 22
- Crear una funcion que evalue dos contrasenias y devuelva true si son identicas y false si no lo son.
```javascript
sonIdenticas('contraseniaMuySegura', 'contraseniaMuySegura') // output: true
sonIdenticas('abc123', 'abc123456') // output: false
```

### Ejercicio 23
- Crear una función esFraccionMayorAUno que tome como argumento un string fraccion (en el formato 'numerador/denominador') y devuelva true si dicha fracción es mayor a 1 o false de lo contrario.
```javascript
esFraccionMayorAUno('1/2') // output: false
esFraccionMayorAUno('2/2') // output: false
esFraccionMayorAUno('4/2') // output: true
```

### Ejercicio 24
- Crear una función esPuenteSeguro que tome como string un puente que consista en caracteres numerales y espacios y devuelva true si el puente está cortado (tiene espacios) o false si está entero y es seguro atravesar.
```javascript
esPuenteSeguro('### ##') // output: false
esPuenteSeguro('##### ####') // output: false
esPuenteSeguro('########') // output: true
```

### Ejercicio 25
- Crear una función obtenerExtension que tome como argumento un string archivo con el formato 'nombre.extension' y devuelva la extensión del archivo. Investigar la funcion nativa split() y pensar si nos ayuda para este problema.
```javascript
obtenerExtension('imagen.png') // output: 'png'
obtenerExtension('index.html') // output: 'html'
obtenerExtension('notas.txt') // output: 'txt'
```