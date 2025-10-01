import imgSelira from '../assets/characters/feather-girl.webp'
import imgKael from '../assets/characters/bounty-hunter.webp'
import imgVelmon from '../assets/characters/ghost.webp'
import imgVareth from '../assets/characters/prince-of-death.webp'

const characters: { id: string, name: string, backstory: string, image: string }[] = [
    {
        id: 'selira',
        name: 'Selira',
        backstory: 'An assassin from the Shadow Circle. Leaves silver thorns with her victims.',
        image: imgSelira
    },
    {
        id: 'kael',
        name: 'Kael',
        backstory: 'A masked bounty hunter with a hunting rifle. Speaks not. Never misses. His list is personal and deadly.',
        image: imgKael
    },
    {
        id: 'velmon',
        name: 'Velmon',
        backstory: 'A restless spirit. Once a Sage of the Stars, now a harbinger of dark omens. Whispers warnings.',
        image: imgVelmon
    },
    {
        id: 'vareth',
        name: 'Vareth',
        backstory: 'Cursed prince of a dead kingdom. Half alive, half death. Each strike brings him closer to his divine heritage.',
        image: imgVareth
    }
]


export function useCharacters() {
    return {
        characters
    }
}