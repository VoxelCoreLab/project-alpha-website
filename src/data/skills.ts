export type SkillType = 'Passive' | 'Normal' | 'Ultimate'

export interface Skill {
    id: string
    name: string
    description: string
    image: string
    type: SkillType
    /** Cooldown in seconds, if known */
    cooldown?: number
    maxCharges?: number
}

const icons = import.meta.glob<string>('../assets/iconSkills/*.{jpg,webp}', {
    eager: true,
    import: 'default',
})

function icon(fileName: string): string {
    const url = icons[`../assets/iconSkills/${fileName}`]
    if (!url) {
        throw new Error(`Missing skill icon: ${fileName}`)
    }
    return url
}

export const skills: Skill[] = [
    // Skills from earlier builds
    {
        id: 'swiftness',
        name: 'Swiftness',
        description: 'You move 50% faster for 3 seconds.',
        image: icon('swiftness.jpg'),
        cooldown: 30,
        maxCharges: 2,
        type: 'Normal',
    },
    {
        id: 'spiritual-blessing',
        name: 'Spiritual Blessing',
        description: 'Heals for 60. You sacrifice 20% of your health. You do not sacrifice health if you are within earshot of a spirit.',
        image: icon('spirit_blessing.jpg'),
        cooldown: 30,
        maxCharges: 1,
        type: 'Normal',
    },
    {
        id: 'sentinel',
        name: 'Sentinel',
        description: 'Shields a player for 25.',
        image: icon('monk_force_shield.jpg'),
        cooldown: 30,
        maxCharges: 1,
        type: 'Normal',
    },
    {
        id: 'protective-hands',
        name: 'Protective Hands',
        description: 'Reduces incoming damage by 3 for 20 seconds.',
        image: icon('monk_hands.jpg'),
        cooldown: 40,
        maxCharges: 2,
        type: 'Normal',
    },
    {
        id: 'resurrection',
        name: 'Resurrection',
        description: 'Revives an allied player with full health.',
        image: icon('monk_resurrection.jpg'),
        cooldown: 120,
        maxCharges: 1,
        type: 'Ultimate',
    },
    {
        id: 'rune-of-healing',
        name: 'Rune of Healing',
        description: 'Heals 30 health. Heals an additional 60 health over 5 seconds if the target is below 50% health.',
        image: icon('monk_rune_of_healing.jpg'),
        cooldown: 60,
        maxCharges: 1,
        type: 'Ultimate',
    },
    {
        id: 'minion-of-the-dead',
        name: 'Minion of the Dead',
        description: 'Summons an undead minion from a nearby corpse to fight by your side.',
        image: icon('necro_minion_of_the_dead.jpg'),
        cooldown: 40,
        maxCharges: 1,
        type: 'Normal',
    },
    {
        id: 'blessing-of-the-lion',
        name: 'Blessing of the Lion',
        description: 'Gain 1 shield per second while moving, up to 20.',
        image: icon('ritual_blessing_of_the_lion.jpg'),
        type: 'Passive',
    },
    {
        id: 'preservation',
        name: 'Preservation',
        description: 'Summons a spirit for 60 seconds that heals nearby allies for 20 health over 5 seconds every 10 seconds.',
        image: icon('ritual_ghost_healing.jpg'),
        cooldown: 70,
        maxCharges: 1,
        type: 'Ultimate',
    },
    {
        id: 'essence-strike',
        name: 'Essence Strike',
        description: 'Casts a lightning bolt dealing 30 damage.',
        image: icon('ritual_lighting_strike.jpg'),
        cooldown: 35,
        maxCharges: 1,
        type: 'Normal',
    },
    {
        id: 'soul-mend',
        name: 'Soul Mend',
        description: 'Heals for 40. Removes one condition for each spirit within earshot.',
        image: icon('ritual_soul_mend.jpg'),
        cooldown: 40,
        maxCharges: 1,
        type: 'Normal',
    },
    {
        id: 'barrier',
        name: 'Barrier',
        description: 'Places a solid wall for 40 seconds.',
        image: icon('wizard_barrier.jpg'),
        cooldown: 60,
        maxCharges: 1,
        type: 'Normal',
    },
    {
        id: 'cone-of-cold',
        name: 'Cone of Cold',
        description: 'Slows enemies in a cone in front of you by 50% for 5 seconds and deals 20 damage.',
        image: icon('wizard_ConeOfCold.jpg'),
        cooldown: 40,
        maxCharges: 1,
        type: 'Normal',
    },
    {
        id: 'ice-blast',
        name: 'Ice Blast',
        description: 'Fires a long beam dealing 50 damage to all enemies hit.',
        image: icon('wizard_ice_blast.jpg'),
        cooldown: 45,
        maxCharges: 1,
        type: 'Normal',
    },

    // Sword & Shield
    {
        id: 'stalwart-presence',
        name: 'Stalwart Presence',
        description: 'Build threat around you and take reduced damage.',
        image: icon('sword_shield_stalwart_presence.webp'),
        type: 'Passive',
    },
    {
        id: 'swipe',
        name: 'Swipe',
        description: 'Strike enemies in front of you, gaining damage reduction for each target hit.',
        image: icon('sword_shield_swipe.webp'),
        type: 'Normal',
    },
    {
        id: 'challenge-me',
        name: 'Challenge Me',
        description: 'Charge forward, damaging enemies on impact and forcing them to attack you.',
        image: icon('sword_shield_challenge_me.webp'),
        type: 'Normal',
    },
    {
        id: 'steadfast-strike',
        name: 'Steadfast Strike',
        description: 'Taking damage from enemies grants stacks. Activate to consume them, dealing damage and restoring health per stack.',
        image: icon('sword_shield_steadfast_strike.webp'),
        type: 'Normal',
    },
    {
        id: 'smash-smash-smash',
        name: 'Smash, Smash, Smash!',
        description: 'Channel your strength and unleash three powerful smashes in a line, dealing heavy damage.',
        image: icon('sword_shield_smash_smash_smash.webp'),
        type: 'Ultimate',
    },

    // Bow (Poison Arrow replaces the former "Apply Poison")
    {
        id: 'poison-arrow',
        name: 'Poison Arrow',
        description: 'Your projectiles apply Poison, dealing damage over time.',
        image: icon('bow_poison_arrow.webp'),
        type: 'Passive',
    },
    {
        id: 'fast-fingers',
        name: 'Fast Fingers',
        description: 'Rapidly fire arrows at your target.',
        image: icon('bow_fast_fingers.webp'),
        type: 'Normal',
    },
    {
        id: 'barrage',
        name: 'Barrage',
        description: 'Rain arrows over an area, damaging and slowing enemies while marking them.',
        image: icon('bow_barrage.webp'),
        type: 'Normal',
    },
    {
        id: 'piercing-arrow',
        name: 'Piercing Arrow',
        description: 'Fire a piercing shot that deals bonus damage to poisoned enemies and grants attack speed on hit.',
        image: icon('bow_piercing_arrow.webp'),
        type: 'Normal',
    },
    {
        id: 'seeking-arrow',
        name: 'Seeking Arrow',
        description: 'Release a guided arrow that damages enemies, heals allies, and gains bonus effects on marked targets.',
        image: icon('bow_seeking_arrow.webp'),
        type: 'Ultimate',
    },

    // Fire Staff
    {
        id: 'on-fire',
        name: 'On Fire',
        description: 'Your spells build stacks. At three stacks, your next projectile explodes, dealing area damage and applying Burn.',
        image: icon('fire_staff_on_fire.webp'),
        type: 'Passive',
    },
    {
        id: 'fireball',
        name: 'Fireball',
        description: 'Launch a fireball that creates a fire zone if it hits a burning enemy.',
        image: icon('fire_staff_fireball.webp'),
        type: 'Normal',
    },
    {
        id: 'dragons-breath',
        name: "Dragon's Breath",
        description: 'Unleash a wave of fire that burns enemies over time.',
        image: icon('fire_staff_dragons_breath.webp'),
        type: 'Normal',
    },
    {
        id: 'flame-strike',
        name: 'Flame Strike',
        description: 'Call down fire on a target area, dealing damage and stunning enemies.',
        image: icon('fire_staff_flame_strike.webp'),
        type: 'Normal',
    },
    {
        id: 'meteor-rain',
        name: 'Meteor Rain',
        description: 'Summon a rain of meteors that devastates a large area.',
        image: icon('fire_staff_meteor_rain.webp'),
        type: 'Ultimate',
    },

    // Nature Staff
    {
        id: 'self-preservation',
        name: 'Self Preservation',
        description: 'Healing an ally also restores your health, and your heals can critically strike.',
        image: icon('nature_staff_self_preservation.webp'),
        type: 'Passive',
    },
    {
        id: 'healing-leaf',
        name: 'Healing Leaf',
        description: 'Restore health over time to an ally.',
        image: icon('nature_staff_healing_leaf.webp'),
        cooldown: 30,
        maxCharges: 2,
        type: 'Normal',
    },
    {
        id: 'healing-floor',
        name: 'Healing Floor',
        description: 'Create a healing area that restores allies within it, becoming stronger on buffed targets.',
        image: icon('nature_staff_healing_floor.webp'),
        type: 'Normal',
    },
    {
        id: 'breath-of-renewal',
        name: 'Breath of Renewal',
        description: 'Instantly heal a target ally.',
        image: icon('nature_staff_breath_of_renewal.webp'),
        type: 'Normal',
    },
    {
        id: 'heaven-encore',
        name: 'Heaven Encore',
        description: 'Create a large healing zone around you that pulses healing over time.',
        image: icon('nature_staff_heaven_encore.webp'),
        type: 'Ultimate',
    },

    // Scythe (Spirit Call replaces the former "Bloodsong")
    {
        id: 'soul-binding',
        name: 'Soul Binding',
        description: 'Damaging enemies binds their souls. Bound souls empower your rituals and healing.',
        image: icon('scythe_soul_binding.webp'),
        type: 'Passive',
    },
    {
        id: 'spirit-call',
        name: 'Spirit Call',
        description: 'Summon a spirit that fights for you and restores health to nearby allies.',
        image: icon('scythe_spirit_call.webp'),
        cooldown: 60,
        maxCharges: 1,
        type: 'Normal',
    },
    {
        id: 'binding-circle',
        name: 'Binding Circle',
        description: 'Create a ritual zone that slows enemies and strengthens your spirits within it.',
        image: icon('scythe_binding_circle.webp'),
        type: 'Normal',
    },
    {
        id: 'soul-harvest',
        name: 'Soul Harvest',
        description: 'Sweep your scythe to damage enemies and harvest bound souls, restoring health per soul consumed.',
        image: icon('scythe_soul_harvest.webp'),
        type: 'Normal',
    },
    {
        id: 'ritual-of-ascendance',
        name: 'Ritual of Ascendance',
        description: 'Perform a powerful ritual that summons multiple spirits and releases a surge of healing energy around you.',
        image: icon('scythe_ritual_of_ascendance.webp'),
        type: 'Ultimate',
    },

    // Daggers
    {
        id: 'sharp-blade',
        name: 'Sharp Blade',
        description: 'Your attacks apply Bleed over time.',
        image: icon('dagger_sharp_blade.webp'),
        type: 'Passive',
    },
    {
        id: 'cut-through',
        name: 'Cut Through',
        description: 'Dash forward, striking all enemies. Deals bonus damage to bleeding targets and can be recast after hitting them.',
        image: icon('dagger_cut_through.webp'),
        type: 'Normal',
    },
    {
        id: 'splitter-grenade',
        name: 'Splitter Grenade',
        description: 'Throw a grenade that explodes after a short delay, damaging enemies and applying Bleed.',
        image: icon('dagger_splitter_grenade.webp'),
        type: 'Normal',
    },
    {
        id: 'shadow-step',
        name: 'Shadow Step',
        description: 'Teleport behind a target and strike. Recast to slow enemies. Crits when attacking from behind.',
        image: icon('dagger_shadow_step.webp'),
        type: 'Normal',
    },
    {
        id: 'shadow-form',
        name: 'Shadow Form',
        description: 'Enter Shadow Form, gaining speed, damage, and damage reduction. Attacks grant Soul stacks. Recast to unleash a spinning strike that deals increased damage per stack.',
        image: icon('dagger_shadow_form.webp'),
        cooldown: 70,
        maxCharges: 1,
        type: 'Ultimate',
    },
]

const skillsById = new Map(skills.map(skill => [skill.id, skill]))

export function getSkill(id: string): Skill {
    const skill = skillsById.get(id)
    if (!skill) {
        throw new Error(`Unknown skill: ${id}`)
    }
    return skill
}
