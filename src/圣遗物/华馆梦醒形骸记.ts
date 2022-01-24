/*
 * @Date: 2022-01-24 12:25:26
 * @LastEditors: YueAo7
 * @LastEditTime: 2022-01-24 16:32:02
 * @FilePath: \noelleCoreDataBase\src\圣遗物\华馆梦醒形骸记.ts
 */
import Noelle from "noelle-core"
const { Tool: { getFrame, DMGRate }, Class: { Damage, Buff, Prop } } = Noelle

const ArtifactSetName = "华馆梦醒形骸记"
export const 华馆梦醒形骸记: Noelle.Type.ArtifactSet = {
    type: "artifact",
    doc:"简简单单的华馆",
    skill:{
        name:ArtifactSetName,
        init(skill){
            skill.fnc=(from,to,frame,lv?)=>{
                const buff = new Buff(ArtifactSetName,"object","never",(buffObj)=>{
                    buffObj.modifyDMG = (c,f,d)=>{
                        if(d&&d.ElementType==="Geo"){

                        }   
                        return d
                    }
                })
                // if(lv>2)
                return {
                    delay:{
                        must:0,
                        last:0
                    }
                }
            }
        }
    },
    artifactSet:{
        name:ArtifactSetName
    }
    
}

