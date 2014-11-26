import boo from './lib/foo'
import blockScope from './blockScope'
import classes from './classes'
import generators from './generators'

console.log('Hello from es6talk');

if (window) {
  System.import('jquery').then(function($) {
    console.log(`we loaded jQuery ${$().jquery} because this is a browser.`)
  })
}
export default 'main'