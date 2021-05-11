// webpack默认的入口，src/index.js
import { sum, mul } from "./js/math.js";
const { priceFormat } = require("./js/format.js");

console.log(sum(10, 20));
console.log(mul(10, 20));
console.log(priceFormat(100));
