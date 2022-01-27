<h1 align="center">promiseTimeout</h1>  

promiseTimeout se encarga de ejecutar una _"función de vuelta"_ (conocida como callback) luego de un tiempo específicado, exactamente como lo hace el _**"setTimeout"**_, a diferencia de que _**promiseTimeout**_ retorna una promesa, lo que nos permite tener de manera más comoda el control de la asincronía al usar un *"timeout"*. Aunque deben tener en cuenta que este no retorna lo que conocemos como el _**timeoutID**_, por lo que no podrá usar un **"clearTimeout()"**.

- - -

### 📝 Pre-Requisitos ### 

  * [Git](https://git-scm.com/) Lo usaremos para clonar el repositorio.

- - -

### 🔧 Instalación ### 

Diríjase al proyecto en que desea implementarlo, abra su terminal y realice un:

``` sh
git clone 'https://github.com/OWLjz18/promiseTimeout.git'
```

- - -

### 🔎 Uso ###

#### Sintaxis: 
``` javascript
promiseTimeout(funcion[, tiempo, error]);
```

  * funcion => Es la función que se ejecutará (callback) luego del tiempo indicado.
  * tiempo? => Es el tiempo en milisegundos que se demorará **promiseTimeout** en ejecutar la función, sino se establece ningúno se ejecutará inmediatamente.
  * error? => Este parámetro opcional indica si se lanzará un error o no, por defecto viene establecido en **false**, si lo establece en **true**, se arrojará un error. La funcionalidad de este parámetro es permitirle a usted prácticar el manejo de errores.

#### Ejemplo:

_**promiseTimeout**_ se puede utilizar de la misma forma que el **setTimeout**, pero estaríamos desperdiciando o (ignorando) el uso para el que fué creado, el cuál es poder trabajar de forma "síncrona" al hacer uso de un **"timeout"**. Veamos las dos formas de manejar la asincronía mediante un ejemplo:

Comencemos creando un archivo en la raíz del proyecto, en mi caso lo nombraré _"code.js"_ en el hay que importar el _**"promiseTimeout"**_, si al instalarlo lo posicionó en la raíz de su proyecto, así se vería la importación: 

``` javascript
import promiseTimeout from './promiseTimeout/src/promiseTimeout.js';
```

Forma #1: Usando la sintaxis de promesas:

``` javascript
import promiseTimeout from './promiseTimeout/src/promiseTimeout.js';

console.log('HTML');

promiseTimeout(() => console.log('CSS'), 2000)
  .then(() => console.log('Javascript'))
  .catch(error => console.error(error));
```

Forma #2: Usando la sintaxis de async/await.

``` javascript
import promiseTimeout from './promiseTimeout/src/promiseTimeout.js';

( async () => {
  
  console.log('HTML');
  await promiseTimeout(() => console.log('CSS'), 2000);
  console.log('Javascript');
  
})();
```

En el caso de la segunda forma como hacemos uso de _**"async/await"**_ necesitamos estar dentro de una función **async**, por lo que hice uso de las funciones autoinvocadas para crear una especie de "envoltorio", pero si usted está dentro de una función o un evento asíncrono puede ignorar ese "envoltorio", le daré un ejemplo para aplicarlo en un evento asíncrono. 

Imaginemos que tenemos esto en nuestro HTML:
``` html
<button id="boton">Click aquí</button>
```

``` javascript
import promiseTimeout from './promiseTimeout/src/promiseTimeout.js';

const boton = document.getElementById('boton');

boton.addEventListener('click', async () => {
  
  console.log('HTML');
  await promiseTimeout(() => console.log('CSS'), 2000);
  console.log('Javascript');

});
```

_**NOTA:**_ Recuerden que para el manejo de errores con async/await pueden hacer uso de try...catch

Cómo resultado de los tres ejemplos anteriores veran por consola:

  1. HTML
  2. CSS (Luego de dos segundos)
  3. Javascript

_**NOTA:**_ En muchos foros ya se encuentra una solución como esta `const delay = (callback, ms) => new Promise( res => setTimeout(() => res(callback()), ms) );` a la hora de usar promesas con un **setTimeout**, pero yo quise crear mi propia función con errores personalizados y un tanto mas legible.

- - -

### 🦉 Autor ###

  * *__José Zambrano__* ([OWLjz18](https://github.com/OWLjz18)) => Creador del proyecto.
    * Instagram => [owl.jz18](https://github.com/owl.jz18)
    * Correo electrónico => <owl.jz18@gmail.com>

- - -

### 🤝 Apoyo ###

Si te gusta el proyecto puedes comentarle a otros sobre él y regalarnos una 🌟.

- - -

### 📃 Licencia ###

Este proyecto esta bajo una licencia MIT, visite el archivo [LICENSE.md](./LICENSE.md) para obtener mas información sobre dicha licencia.
