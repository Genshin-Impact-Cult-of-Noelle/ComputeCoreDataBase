/*
 * @Page: Do not edit
 * @Version: Do not edit
 * @Autor: Do not edit
 * @Date: 2021-11-05 15:22:21
 * @LastEditors: YueAo7
 * @LastEditTime: 2022-01-26 18:33:58
 */
const fs  = require ("fs")
// const Noelle = require("../../noelle-core-v2/main").default
const {Noelle} = require("noelle-core")
require("../main")
// Noelle.load(require("../main/index.js").default)
// Noelle.load(require("../main/index.js").DX)
const a = new Noelle.Action()
a.do("元素爆发").do("普通攻击").do("元素爆发").do("普通攻击").do("元素爆发").do("普通攻击").do("元素爆发").do("普通攻击").do("元素爆发").do("普通攻击").do("元素爆发").do("普通攻击").do("元素爆发").do("普通攻击").do("元素爆发").do("普通攻击").do("元素爆发").do("普通攻击").do("元素爆发").do("普通攻击").do("元素爆发").do("普通攻击").do("元素爆发").do("普通攻击").do("元素爆发").do("普通攻击").do("元素爆发").do("普通攻击").do("元素爆发").do("普通攻击").do("元素爆发").do("普通攻击").do("元素爆发").do("普通攻击").do("元素爆发").do("普通攻击").do("元素爆发").do("普通攻击").do("元素爆发").do("普通攻击").do("普通攻击").do("普通攻击").do("普通攻击").do("普通攻击").do("普通攻击").do("普通攻击").do("元素爆发").do("普通攻击").do("普通攻击")
const n = new  Noelle.Control("诺艾尔").setWeapon("白影剑",{level:90,extra:5})
n
    .setArtifact({
    name: "x",
    set: "华馆梦醒形骸记",
    type: "理之冠",
    main: {
        critDamage: 0.622,
    },
    other: {
        critRate: 0.031,
        atkExtra: 33,
        atkRate: 0.146,
        defRate: 0.124,
    },
    })
    .setArtifact({
        name: "x",
        set: "华馆梦醒形骸记",
        type: "死之羽",
        main: {
            atkExtra: 311,
        },
        other: {
            critDamage: 0.109,
            atkRate: 0.058,
            defRate: 0.204,
            critRate: 0.066,
        },
    })
    .setArtifact({
        name: "x",
        set: "华馆梦醒形骸记",
        type: "生之花",
        main: {
            healthExtra: 4780,
        },
        other: {
            defRate: 0.168,
            critDamage: 0.21,
            healthRate: 0.053,
            atkExtra: 27,
        },
    })
    .setArtifact({
        name: "x",
        set: "华馆梦醒形骸记",
        type: "空之杯",
        main: {
            elementDMGGeo: 0.466,
        },
        other: {
            atkRate: 0.058,
            defRate: 0.124,
            defExtra: 60,
            critRate: 0.101,
        },
    })
    .setArtifact({
        name: "x",
        set: "绝缘之旗印",
        type: "时之沙",
        main: {
            defRate: 0.583,
        },
        other: {
            critRate: 0.171,
            atkExtra: 19,
            healthRate: 0.111,
            critDamage: 0.062,
        },
    })
const m = new  Noelle.Control("木桩")
a.play(n,m)
console.log(n.Last.def.content)
a


// n.setWeapon("白影剑")
// n.A(m,1)
// n.A(m,2)
// n.A(m,3)
// console.log(n.A(m,4));

// console.log( n.Last.atk);
// console.log( n.getBuffArr("object")[0].target.atk);

// console.log( n.getBuffProps(n.getBuffArr("object")));



// n.BaseBuff.map(item=>{
//     console.log(item.target.atk);
    
// })