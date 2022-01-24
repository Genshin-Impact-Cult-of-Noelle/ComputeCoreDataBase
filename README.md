<!--
 * @Date: 2022-01-19 09:22:06
 * @LastEditors: YueAo7
 * @LastEditTime: 2022-01-21 16:24:01
 * @FilePath: \noelle-core-v2\README.md
-->
# noelleCore
![![诺艾尔神教](https://www.noelle.cool/)](https://www.noelle.cool/favicon.ico)

[![State-of-the-art Shitcode](https://img.shields.io/static/v1?label=State-of-the-art&message=Shitcode&color=7B5804)](https://github.com/trekhleb/state-of-the-art-shitcode)
### 介绍
noelleCore,适用于原神计算,诺艾尔神教 构造 计算核心。
通过构造自定义函数来完成原神中的技能机制

### 快速入门

#### 安装
```
npm i noelle-core --save
```
#### 使用

```js
import noelle,{ Tools, Types, Classes } from "noelle-core"

```

#### 圣遗物属性词典
```json
//请使用键名构造圣遗物数据
{
    "atkBase":"攻击力-白",
    "atkExtra": "攻击力-固",
    "atkRate": "攻击力-%",
    "defBase":"防御力-白",
    "defExtra": "防御力-固",
    "defRate": "防御力-%",
    "healthBase":"生命值-白",
    "healthExtra": "生命值-固",
    "healthRate": "生命值-%",
    "critRate": "暴击率",
    "critDMG": "暴击伤害",
    "energyRechargeRate": "元素充能效率",
    "elementMastery": "元素精通",
    "elementDMGPyro": "火元素伤害加成",
    "elementDMGHydro": "水元素伤害加成",
    "elementDMGCryo": "冰元素伤害加成",
    "elementDMGElectro": "雷元素伤害加成",
    "elementDMGGeo": "岩元素伤害加成",
    "elementDMGAnemo": "风元素伤害加成",
    "elementDMGDendro": "草元素伤害加成",
    "elementDMGPhysical": "物理伤害加成",
    "cureRate": "治疗加成"
}
```
