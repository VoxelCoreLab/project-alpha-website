import { getSkill, type Skill } from './skills'

import imgSwordAndShieldTank from '../assets/builds/characters/sword-and-shield-tank.webp'
import imgBowHunter from '../assets/builds/characters/bow-hunter.webp'
import imgStaffFireMage from '../assets/builds/characters/staff-fire-mage.webp'
import imgStaffHealer from '../assets/builds/characters/staff-healer.webp'
import imgScytheRitualist from '../assets/builds/characters/scythe-ritualist.webp'
import imgDaggerAssassin from '../assets/builds/characters/dagger-assassin.webp'

/**
 * Example builds. Players do not pick a hero or class: any weapon can be combined
 * freely with 1 passive, 3 normal skills and 1 ultimate. These are only inspiration.
 */
export interface Build {
    id: string
    name: string
    tagline: string
    weapon: string
    /** Accent color of the build (glow, highlights) */
    color: string
    image: { src: string, width: number, height: number }
    passive: Skill
    skills: [Skill, Skill, Skill]
    ultimate: Skill
}

function build(data: Omit<Build, 'passive' | 'skills' | 'ultimate'> & {
    passive: string
    skills: [string, string, string]
    ultimate: string
}): Build {
    return {
        ...data,
        passive: getSkill(data.passive),
        skills: data.skills.map(getSkill) as [Skill, Skill, Skill],
        ultimate: getSkill(data.ultimate),
    }
}

export const builds: Build[] = [
    build({
        id: 'sword-and-shield-tank',
        name: 'Sword & Shield Tank',
        tagline: 'Protect & Control',
        weapon: 'Sword & Shield',
        color: '#e2b53e',
        image: { src: imgSwordAndShieldTank, width: 584, height: 869 },
        passive: 'stalwart-presence',
        skills: ['swipe', 'challenge-me', 'steadfast-strike'],
        ultimate: 'smash-smash-smash',
    }),
    build({
        id: 'bow-hunter',
        name: 'Bow Hunter',
        tagline: 'Poison & Mark',
        weapon: 'Bow',
        color: '#7bcb3a',
        image: { src: imgBowHunter, width: 617, height: 890 },
        passive: 'poison-arrow',
        skills: ['fast-fingers', 'barrage', 'piercing-arrow'],
        ultimate: 'seeking-arrow',
    }),
    build({
        id: 'staff-fire-mage',
        name: 'Staff Fire Mage',
        tagline: 'Fire & Explosion',
        weapon: 'Fire Staff',
        color: '#e0482c',
        image: { src: imgStaffFireMage, width: 471, height: 873 },
        passive: 'on-fire',
        skills: ['fireball', 'dragons-breath', 'flame-strike'],
        ultimate: 'meteor-rain',
    }),
    build({
        id: 'staff-healer',
        name: 'Staff Healer',
        tagline: 'Heal & Support',
        weapon: 'Nature Staff',
        color: '#4cc46a',
        image: { src: imgStaffHealer, width: 486, height: 927 },
        passive: 'self-preservation',
        skills: ['healing-leaf', 'healing-floor', 'breath-of-renewal'],
        ultimate: 'heaven-encore',
    }),
    build({
        id: 'scythe-ritualist',
        name: 'Scythe Ritualist',
        tagline: 'Heal & Bindings',
        weapon: 'Scythe',
        color: '#38c6d9',
        image: { src: imgScytheRitualist, width: 569, height: 874 },
        passive: 'soul-binding',
        skills: ['spirit-call', 'binding-circle', 'soul-harvest'],
        ultimate: 'ritual-of-ascendance',
    }),
    build({
        id: 'dagger-assassin',
        name: 'Dagger Assassin',
        tagline: 'Bleed & Burst',
        weapon: 'Daggers',
        color: '#a456f0',
        image: { src: imgDaggerAssassin, width: 435, height: 853 },
        passive: 'sharp-blade',
        skills: ['cut-through', 'splitter-grenade', 'shadow-step'],
        ultimate: 'shadow-form',
    }),
]

export const defaultBuildId = 'staff-fire-mage'

export function findBuild(id: unknown): Build | undefined {
    return builds.find(b => b.id === id)
}
