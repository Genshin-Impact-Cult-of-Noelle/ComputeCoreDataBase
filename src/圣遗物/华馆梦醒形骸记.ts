/*
 * @Date: 2022-01-24 12:25:26
 * @LastEditors: YueAo7
 * @LastEditTime: 2022-01-26 13:51:46
 * @FilePath: \ComputeCoreDataBase\src\圣遗物\华馆梦醒形骸记.ts
 */
import Noelle from "noelle-core"
const { Tool: { getFrame, DMGRate }, Class: { Damage, Buff, Prop } } = Noelle

const ArtifactSetName = "华馆梦醒形骸记"
export const 华馆梦醒形骸记: Noelle.Type.ArtifactSet = {
    type: "artifact",
    doc: "简简单单的华馆",
    skill: {
        name: ArtifactSetName,
        init(skill) {
            skill.fnc = (from, to, frame, lv?) => {
                const Extra = lv ?? 0
                if (Extra > 1) {
                    const Def = new Prop().push(ArtifactSetName + 2, 0.3, "rate")
                    const buff = new Buff(ArtifactSetName, "object", "never")
                    buff.target.def = Def
                    if (Extra > 3) {
                        let count = 0
                        let deadTime = 0
                        let underTime = 0
                        buff.modifyDMG = (C, T, D) => {
                            if (D && D.ElementType === "Geo") {
                                deadTime=0
                                if (count < 4) {
                                    count++
                                    buff.target.elementDEFGeo = new Prop().push(ArtifactSetName + 4,count*0.06,"base")
                                    buff.target.def =new Prop().add(Def).push(ArtifactSetName + 4,count*0.06,"rate") 
                                } else {
                                    
                                }

                            }
                            return D
                        }
                        buff.frameFnc=(T)=>{
                            if(!from.isNow){
                                if (++deadTime>360) {
                                    deadTime = 0
                                    count--
                                    buff.target.elementDEFGeo = new Prop().push(ArtifactSetName + 4,count*0.06,"base")
                                    buff.target.def =new Prop().add(Def).push(ArtifactSetName + 4,count*0.06,"rate") 
                                }
                            }else{
                                if(++underTime>180){
                                    underTime= 0 
                                    count--
                                    buff.target.elementDEFGeo = new Prop().push(ArtifactSetName + 4,count*0.06,"base")
                                    buff.target.def =new Prop().add(Def).push(ArtifactSetName + 4,count*0.06,"rate") 
                                }
                            }
                        }
                        
                    }
                    from.pushBuff("artifact", buff)
                }

                // if(lv>2)
                return {
                    delay: {
                        must: 0,
                        last: 0
                    }
                }
            }
        }
    },
    artifactSet: {
        name: ArtifactSetName
    }

}

