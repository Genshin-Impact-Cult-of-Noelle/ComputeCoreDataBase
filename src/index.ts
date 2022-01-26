/*
 * @Date: 2022-01-21 16:30:21
 * @LastEditors: YueAo7
 * @LastEditTime: 2022-01-26 18:39:14
 * @FilePath: \ComputeCoreDataBase\src\index.ts
 */
import Noelle from "noelle-core"
const t = require.context("./", true, /^(?!index).*\.ts/)
const DB: any[]=[]
t.keys().map(item => {
    DB.push(...Object.values(t(item)))
})
Noelle.load(DB)

