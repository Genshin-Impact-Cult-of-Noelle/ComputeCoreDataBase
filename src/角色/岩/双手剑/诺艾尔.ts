/*
 * @Date: 2022-01-21 16:38:20
 * @LastEditors: YueAo7
 * @LastEditTime: 2022-01-28 10:41:28
 * @FilePath: \ComputeCoreDataBase\src\角色\岩\双手剑\诺艾尔.ts
 */
import Noelle from "noelle-core"
const { Tool: { getFrame, DMGRate }, Class: { Damage, Buff, Prop } } = Noelle
const skillLabel = "大扫除"
const burstData: Noelle.Type.SkillRate[] = [
    {
        row: [{
            use: "atk",
            rate: [0.672, 0.7224, 0.7728, 0.84, 0.8904, 0.9408, 1.008, 1.0752, 1.1424, 1.2096, 1.2768, 1.344, 1.428, 1.512, 1.596]
        },
        {
            use: "atk",
            rate: [0.928, 0.9976, 1.0672, 1.16, 1.2296, 1.2992, 1.392, 1.4848, 1.5776, 1.6704, 1.7632, 1.856, 1.972, 2.088, 2.204]
        }
        ]

    }
]
const Burst: Noelle.Type.Skill = {
    name: skillLabel,
    init(skillObj) {
        let CD = 0
        const defToAtk = [0.4, 0.43, 0.46, 0.5, 0.53, 0.56, 0.60, 0.64, 0.68, 0.72, 0.76, 0.8, 0.85, 0.9, 0.95]
        skillObj.fnc = (from, to, t, lv = 1) => {
            if (CD > t) {
                const sum = CD - t
                console.warn("尚未冷却警告", skillLabel, "剩余时间", Math.floor(sum / 60), "秒", sum % 60, "帧")
            }
            CD = 900 * (1 - from.Last.coolDownRate.Last) + t
            from.character.core.nowBaseAtkElement="Geo"
            const buff = new Buff(skillLabel, "object", getFrame(t, 12), (buffObj) => {
                buffObj.frameFnc=(F)=>{
                    if(false){
                        from.character.core.nowBaseAtkElement ="Physical"
                    }else{
                        from.character.core.nowBaseAtkElement ="Geo"

                    }                    
                }
            })
            const Character = from.character.core
            const CharacterDEF = from.Last.def.Last
            const Rate = defToAtk[lv - 1] + (Character.extraStar > 5 ? 0.5 : 0)
            const atk = new Prop().push(skillLabel, CharacterDEF * Rate, "extra")
            buff.target["atk"].add(atk)

            from.pushBuff("character", buff)
            if (to.character.core.tag != from.character.core.tag) {
                const DMG = new Damage(from, skillObj, to, DMGRate(burstData[0], lv), "QSKILL", "Geo")
                from.modifyDamage(DMG, t, "Q")
                to.pushDamage(DMG, t)
            }
            return {
                delay: {
                    must: 120,
                    last: 119
                }
            }
        }
    }
}



const AttackName = "普通攻击·西风剑术·女仆"
let atkCount = 0
const atkdata: Noelle.Type.SkillRate[] = [
    {
        row: [
            {
                use: "atk",
                rate: [0.7912, 0.8556, 0.9200, 1.0120, 1.0764, 1.1500, 1.2512, 1.3524, 1.4536, 1.5640, 1.6744, 1.7848, 1.8952, 2.0056, 2.116],
            }
        ],
    },
    {
        row: [
            {
                use: "atk",
                rate: [0.7336, 0.7933, 0.853, 0.9383, 0.998, 1.0663, 1.1601, 1.2539, 1.3477, 1.4501, 1.5525, 1.6548, 1.7572, 1.8595, 1.9619],
            }
        ],
    },
    {
        row: [
            {
                use: "atk",
                rate: [0.8626, 0.9328, 1.003, 1.1033, 1.1735, 1.2538, 1.3641, 1.4744, 1.5847, 1.7051, 1.8255, 1.9458, 2.0662, 2.1865, 2.3069],
            }
        ],
    },
    {
        row: [
            {
                use: "atk",
                rate: [1.1343, 1.2267, 1.319, 1.4509, 1.5432, 1.6488, 1.7938, 1.9389, 2.084, 2.2423, 2.4006, 2.5589, 2.7171, 2.8754, 3.0337],
            }
        ],
    },
]
const Attack: Noelle.Type.Skill = {
    name: AttackName,
    init(s) {
        s.fnc = (from, to, t, lv = 1) => {
            if (from.tag != to.tag) {
                const DMG = new Damage(from, s, to, DMGRate(atkdata[atkCount], lv), "ATKNORMAL", from.character.core.nowBaseAtkElement)
                from.modifyDamage(DMG, t, "A")
                to.pushDamage(DMG, t)
            }
            atkCount++
            atkCount %= 4
            return {
                delay: {
                    must: 35,
                    last: 40
                }
            }
        }

    }

}
const SkillName = "护心凯"
const SkillData: Noelle.Type.SkillRate[] = [
    {
        row: [
            {
                use: "def",
                rate: [1.2, 1.29, 1.38, 1.5, 1.59, 1.68, 1.8, 1.92, 2.04, 2.16, 2.28, 2.4, 2.55, 2.7, 2.85]
            },
        ]

    },
    {
        row: [
            {
                use: "atk",
                rate: [1.2, 1.29, 1.38, 1.5, 1.59, 1.68, 1.8, 1.92, 2.04, 2.16, 2.28, 2.4, 2.55, 2.7, 2.85]
            },
        ],

    }
]
const Skill: Noelle.Type.Skill = {
    name: SkillName,
    init(skillObj) {
        skillObj.fnc = (from, to, time, lv = 1) => {
            if (from.tag != to.tag) {
                const DMG = new Damage(from, skillObj, to, DMGRate(SkillData[0], lv), "ESKILL", "Geo")
                from.modifyDamage(DMG, time, "A")
                to.pushDamage(DMG, time)
            }
            const Arm = new Buff(SkillName, "teamNow", getFrame(time, 12), (buffObj) => {
                buffObj.frameFnc = (frame) => {
                    if (frame == buffObj.DeadTime && from.tag != to.tag && from.character.core.extraStar > 3) {
                        const DMG = new Damage(from, skillObj, to, [{ prop: "atk", rate: 4 }], "ESKILL", "Geo")
                        from.modifyDamage(DMG, frame, "E")
                        to.pushDamage(DMG, frame)
                    }
                }
            })
            from.pushBuff("character", Arm)
            return {
                delay: {
                    must: 130,
                    last: 130
                }
            }
        }
    }
}
export const 诺艾尔: Noelle.Type.Character = {
    doc: "简简单单诺艾尔",
    type: "character",
    character: {
        elementType: "Geo",
        gender: "girl",
        levelData: {
            def: {
                rate: [0, 0, 0, 0, 0.075, 0.075, 0.15, 0.15, 0.15, 0.15, 0.225, 0.225, 0.30, 0.30],
                base: [67, 172, 222, 333, 368, 423, 471, 526, 562, 617, 652, 708, 743, 799],
            },
            atk: {
                base: [16, 41, 53, 80, 88, 101, 113, 126, 134, 148, 156, 169, 178, 191],
            },
            health: {
                base: [1012, 2600, 3356, 5027, 5564, 6400, 7117, 7953, 8490, 9325, 9862, 10698, 11235, 12071],
            }
        },
        name: "诺艾尔",
        star: 4,
        tag: "Tivat",
        weaponType: "claymore"
    },
    skill: {
        elementBurst: Burst,
        elementSkill: Skill,
        normalAttack: Attack
    }
}

