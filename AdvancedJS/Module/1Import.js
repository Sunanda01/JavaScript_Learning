//IMPORT SINGLE FUNCTION
import {multiply as mul} from "./2Export.js";               
import {add as a} from "./2Export.js";
console.log(mul(2,3,4));
console.log(a(4,5));

//DEFAULT IMPORT
import sub from "./2Export.js"
console.log(sub(10,2));

// IMPORT ALL FUNCTIONS
import * as all from "./2Export.js"          
console.log(all.multiply(2,3,4));
console.log(all.add(4,5));