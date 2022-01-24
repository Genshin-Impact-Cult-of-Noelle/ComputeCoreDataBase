/*
 * @Page: Do not edit
 * @Version: Do not edit
 * @Autor: Do not edit
 * @Date: 2021-11-05 15:22:21
 * @LastEditors: YueAo7
 * @LastEditTime: 2022-01-24 19:07:28
 */
const {Noelle} = require("../../noelle-core-v2/dist")
Noelle.load(require("../main/index.js").DX)
const n = new  Noelle.Control("诺艾尔")
const m = new  Noelle.Control("木桩")
n.setWeapon("白影剑")
n.A(m,1)
n.A(m,2)
n.A(m,3)
n.A(m,4)
console.log( n.Last.atk);
// console.log( n.getBuffArr("object")[0].target.atk);

// console.log( n.getBuffProps(n.getBuffArr("object")));



// n.BaseBuff.map(item=>{
//     console.log(item.target.atk);
    
// })