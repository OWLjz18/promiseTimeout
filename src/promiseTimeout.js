/**
 * @author OWLjz18 <owl.jz18@gmail.com>
 * @version 1.0.0
 * @license MIT > https://github.com/OWLjz18/promiseTimeout/blob/main/LICENSE.md
*/

/**
 * Función que ejecuta una 'funcion de vuelta' (callback) luego del tiempo especificado, tal cuál como el 'setTimeout', con la diferencia de que este retorna una promesa.
 * @param {Function} funcion - Es la función que se ejecutará luego del tiempo establecido.
 * @param {Number | String} [tiempoEspera=0] - Es el tiempo que va a esperar para ejecutar la función recibida anteriormente,  de no asignarse ninguno la 'funcion de vuelta' se ejecutará al instante.
 * @param {Boolean} [error=false] - Por defecto está establecido en 'false', si lo establecemos en 'true' la promesa falla y en vez de ejecutarse 'resolve', se ejecuta el 'reject'. Sirve principalmente para que practique como manejar el error, si así lo desea.
 * @returns {Promise<Any>} - Retorna una promesa que contiene el resultado de la 'función de vuelta' (callback).
*/
export default function (funcion, tiempoEspera = 0, error = false){
  
  const promiseTimeoutError = class extends Error {
    
    constructor(message) {
      super('Error al ejecutar "promiseTimeout": ' + message);
      this.name = this.constructor.name;
    }; 
    
  };
  
  if (arguments.length === 0) {
    
    throw new promiseTimeoutError('Un argumento es requerido y no se ha recibido ninguno.');
    
  }
  
  if (typeof funcion !== 'function') {
    
    throw new promiseTimeoutError('El argumento "funcion" no es una función, por lo que no se puede invocar.');
    
  }
  
  return new Promise( (resolve, reject) => {
    
    if (!error) {
      
      return setTimeout(() => resolve(funcion()), tiempoEspera);
      
    }
    
    reject(new promiseTimeoutError(`Haz establecido el parámetro "error" en ${error}`));
    
  });
  
};
