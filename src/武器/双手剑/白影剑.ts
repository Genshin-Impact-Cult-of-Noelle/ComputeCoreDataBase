/*
 * @Date: 2022-01-20 10:05:29
 * @LastEditors: YueAo7
 * @LastEditTime: 2022-01-26 18:34:26
 * @FilePath: \ComputeCoreDataBase\src\武器\双手剑\白影剑.ts
 */
import Noelle from "noelle-core"
const { Tool: { getFrame, DMGRate }, Class: { Damage, Buff, Prop }, ConstData: { WeaponExtraArr } } = Noelle
const weaponName = "白影剑",
    skillName = "注能之锋",
    rate = [0.06, 0.075, 0.09, 0.105, 0.12]
let buffCount = 0,
    CD = 0,
    deadTime = 0
export const 白影剑: Noelle.Type.Weapon = {
    doc: "简简单单白影剑",
    type: "weapon",
    weapon: {
        levelData: {
            atk: {
                base: WeaponExtraArr.S4M42
            },
            critRate: {
                extra: WeaponExtraArr.EP133
            }
        },
        name: weaponName,
        star: 4,
        weaponType: "claymore"
    },
    skill: {
        name: weaponName,
        init(skill) {
            skill.fnc = (from, to, t, lv = 1) => {
                const weaponBuff = new Buff(weaponName, "object", "never", (b) => {
                    b.frameFnc = (frame) => {
                        CD && CD--
                        if (deadTime == frame) {
                            buffCount = 0
                            b.target.clean()
                        }
                    }
                    b.modifyDMG = (cmd, f, DMG) => {
                        if (DMG && (DMG.DMGType === "ATKNORMAL" || DMG.DMGType === "ATKBASH") && buffCount < 4 && !CD) {
                            buffCount++
                            CD = 48
                            b.target.clean()
                            const label = skillName + buffCount,
                                val = rate[lv - 1] * buffCount,
                                type = "rate"
                            b.target.atk.push(label, val, type)
                            b.target.def.push(label, val, type)
                        } else {

                        }
                        return DMG
                    }
                })
                from.pushBuff("weapon", weaponBuff)
                return {}
            }
        }

    }
}