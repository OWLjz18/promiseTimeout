<h1 align="center">promiseTimeout</h1>  

It's the usual setTimeout, but with **promises** or **async/await**.

- - -

### Instalation 🔧 ### 

You can add it as a git submodule to your project:

``` sh
git submodule add 'https://github.com/OWLjz18/promiseTimeout.git'
```

Or you can use the npm module:

``` sh
npm i promise-timeout-jz
```

Or with pnpm:

``` sh
pnpm add promise-timeout-jz
```

- - -

### Use 🔎 ###

#### Syntax: 
``` javascript
promiseTimeout(callback[, delay, { error }]);
```

  * **callback** => It is the callback that will execute after the specified time.
  * **delay?** => It is the time it will take before executing the callback.
  * **error?** => With this parameter we can intentionally reject the promise. What is it for? In case you want to test error handling.

#### Example:

In the examples I will assume you are using Nodejs and the ESmodules.

Way #1: Using **promises**.

``` javascript
import promiseTimeout from 'promise-timeout-jz';

console.log('HTML');

promiseTimeout(() => console.log('CSS'), 2000)
  .then(() => console.log('Javascript'))
  .catch(error => console.error(error));
```

Way #2: Using **async/await**.

``` javascript
import promiseTimeout from 'promise-timeout-jz';

(async () => {
  
  console.log('HTML');
  await promiseTimeout(() => console.log('CSS'), 2000);
  console.log('Javascript');
  
})();
```

Or with top-level await:

``` javascript
import promiseTimeout from 'promise-timeout-jz';

console.log('HTML');
await promiseTimeout(() => console.log('CSS'), 2000);
console.log('Javascript');
```

As a result in any of the three previous examples, we obtain the following by console:

  1. HTML
  2. CSS (after two seconds)
  3. Javascript

Let's look at one last example, where we make the promise to be rejected, using the error parameter:

``` javascript
import promiseTimeout from 'promise-timeout-jz';

console.log('HTML');

promiseTimeout(() => console.log('CSS'), 2000, { error: true })
  .then(() => console.log('Javascript')) // Skip this...
  .catch(error => console.error(error)); // The error is fired and goes into the catcher.
```

**_NOTE:_** In some forums (such as stack overflow, for example), there is already a solution like the following:

``` javascript
const delay = (cb, ms) => new Promise(res => setTimeout(() => res(cb()), ms));
```

And yes, it's a single line instead of a module installation, but... I wanted to do my own. 😹

- - -

### Autor 🦉 ###

  * *__José Zambrano__* ([OWLjz18](https://github.com/OWLjz18)) => Project creator.
    * Instagram => [@owljz18](https://instagram.com/owljz18)
    * Email => <owl.jz18@gmail.com>

- - -

### Support 🤝 ###

If you like the project, you can give us a star. 🌟

- - -

### License 📃 ###

This project is licensed under an _MIT_ license, please visit the [LICENSE.md](./LICENSE.md) file for more information about it.
