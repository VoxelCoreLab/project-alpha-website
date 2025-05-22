import imgSelira from '../assets/characters/feather-girl.webp'
import imgKael from '../assets/characters/bounty-hunter.webp'
import imgVelmon from '../assets/characters/ghost.webp'
import imgVareth from '../assets/characters/prince-of-death.webp'

const characters: { id: string, name: string, backstory: string, image: string }[] = [
    {
        id: 'selira',
        name: 'Selira',
        backstory: 'Eine Assassinin aus dem Schattenzirkel. Hinterlässt silberne Dornen bei ihren Opfern.',
        image: imgSelira
    },
    {
        id: 'kael',
        name: 'Kael',
        backstory: 'Ein maskierter Kopfgeldjäger mit Jagdgewehr. Redet nicht. Verfehlt nie. Seine Liste ist persönlich und tödlich.',
        image: imgKael
    },
    {
        id: 'velmon',
        name: 'Velmon',
        backstory: 'Ein ruheloser Geist. Einst Sternenweise, jetzt Bote dunkler Vorzeichen. Flüstert Warnungen.',
        image: imgVelmon
    },
    {
        id: 'vareth',
        name: 'Vareth',
        backstory: 'Verfluchter Prinz eines toten Reiches. Halb lebendig, halb Tod. Jeder Schlag bringt ihn seinem göttlichen Erbe näher.',
        image: imgVareth
    }
]

export function useCharacters() {
    return {
        characters
    }
}