import loader from  './components/loader.js'
import showMenu from './components/showMenu.js' 
import showCart from './components/showCart.js'
import products from './components/products.js'
import getProducts from './helpers/getProducts.js'


/* UI Elements */
/* Ocultar loader */

loader()

/* Mostrar menú*/

showMenu() 

/* Mostrar carrito */

showCart()

/* End UI Elements */

/* Products */

products(await getProducts())