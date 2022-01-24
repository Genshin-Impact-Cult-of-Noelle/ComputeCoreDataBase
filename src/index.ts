/*
 * @Date: 2022-01-21 16:30:21
 * @LastEditors: YueAo7
 * @LastEditTime: 2022-01-24 17:09:24
 * @FilePath: \noelleCoreDataBase\src\index.ts
 */
import Noelle from "noelle-core"
const t =  require.context("./",true,/^(?!index).*\.ts/)
let DBT = {length:0}
t.keys().map(item=>{
    DBT={...DBT,...t(item)}  
})
const DB:any[] = []
Object.keys(DBT).map(item=>{
    DB.push(DBT[item])
});
export const DX = DB
export default DB

