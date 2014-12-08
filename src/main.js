import foo from './lib/foo'
import {bar} from './lib/bar'
import blockScope from './blockScope'
import classes from './classes'
import generators from './generators'

console.log('Hello from es6talk');
console.log(foo);
console.log(bar);

if (window) {
  System.import('jquery').then(function ($) {
    console.log(`we loaded jQuery v ${$().jquery} because this is a browser.`);
  });
}