<template>
    <LayoutBasic :breadcrumbs="breadcrumbs">
        <div class="m-4 md:m-8">
            <div class="relative max-w-6xl mx-auto">
                <img alt="" src="../assets/world-map-mix.webp" class="w-full bg-base-300 skeleton" />

                <div v-for="(point, index) in points" :key="point.id" class="absolute z-0 focus-within:z-10"
                    :style="{ left: point.x + '%', top: point.y + '%' }">
                    <div class="absolute transform -translate-x-1/2 -translate-y-1/2">
                        <div class="group">
                            <div tabindex="0" role="button" :style="{ animationDelay: (index * 0.2) + 's' }"
                                @click="openPoint(point.id)" @keydown.enter="openPoint(point.id)"
                                class="group/circle z-0 bg-base-100/60 w-8 h-8 rounded-full grid justify-center items-center cursor-pointer hover:bg-base-100/70 pulstrigger transition-all">
                                <div
                                    class="w-5 h-5 bg-base-100/90 rounded-full group-hover/circle:bg-secondary/70 transition-all font-bold [line-height:19px] text-sm text-center justify-center"><span class="sm:hidden">{{point.letter}}</span></div>
                                <div
                                    class="hidden sm:block absolute whitespace-nowrap cursor-pointer [inset-inline-end:_calc(1/2_*_100%)] translate-x-[50%] bg-base-100/60 group-hover/circle:bg-base-100/70 px-2 py-1 top-8 rounded-md text-sm transition-all">
                                    {{ point.name }}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Point Dialog -->
                <dialog ref="mapPointDialog" class="modal modal-bottom sm:modal-middle">
                    <div class="modal-box pb-0 px-0">
                        <form method="dialog">
                            <button class="btn btn-circle btn-ghost absolute right-4 top-4">✕</button>
                        </form>
                        <h3 class="text-lg font-bold px-6"><span :key="activePoint || ''">{{ getActivePoint?.name }}</span></h3>
                        <div class="max-h-[60vh] overflow-y-auto pb-6 px-6" :key="activePoint || ''">
                            <img class="w-full aspect-video h-auto rounded-lg mt-4 bg-base-300 skeleton"
                                :src="getActivePoint?.image" alt="" />
                            <h2 class="text-lg font-semibold mt-4">Monsters</h2>
                            <div class="grid grid-cols-4 gap-2 mt-2">
                                <div v-for="(monster, index) in getActivePoint?.monsters" :key="index"
                                    class="bg-base-100/60 rounded-lg">
                                    <img class="w-full aspect-square h-auto rounded-lg bg-base-300 skeleton" :src="monster"
                                        alt="" />
                                </div>
                            </div>
                            <h2 class="text-lg font-semibold mt-4">Difficulty</h2>
                            <div class="flex items-center gap-2 pt-2">
                                <div v-for="i in 3" :key="i" class="w-8 h-8 rounded-full" :class="{
                                    'text-red-600': i <= (getActivePoint?.difficulty ?? 0),
                                    'text-white/30': i > (getActivePoint?.difficulty ?? 0)
                                }">
                                    <svg class="h-8 w-8" fill="currentColor" version="1.1" id="Capa_1"
                                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                        width="800px" height="800px" viewBox="0 0 931.316 931.316" xml:space="preserve">
                                        <g>
                                            <path d="M390.53,702.023h150.255l-75.127-129.996L390.53,702.023z M443.361,674.271l22.297-38.582l22.296,38.582H443.361
		L443.361,674.271z" />
                                            <path d="M822.837,464.958c13.43-31.464,22.452-63.093,26.818-94.011c5.735-40.606,3.514-80.391-6.6-118.248
		c-12.042-45.072-35.38-87.76-69.361-126.877c-18.075-20.806-39.407-39.573-63.404-55.784
		c-22.811-15.408-48.144-28.589-75.296-39.171C583.187,10.674,524.63,0,465.658,0c-58.973,0-117.529,10.674-169.337,30.869
		c-27.152,10.582-52.485,23.763-75.296,39.171c-23.997,16.211-45.329,34.979-63.404,55.784
		c-33.983,39.117-57.319,81.805-69.361,126.877c-10.114,37.857-12.334,77.641-6.6,118.248c4.366,30.918,13.389,62.547,26.818,94.011
		c10.656,24.964,21.878,44.802,30.465,59.292c18.477,31.188,0.19,63.799,0,64.117l-6.495,10.963l2.529,12.488l26.233,129.539
		l5.375,26.541h27.079c22.18,0,41.572,5.553,59.283,16.979c14.562,9.393,27.784,22.766,39.301,39.742
		c20.23,29.828,27.941,55.16,28.013,55.457l2.507,10.35l8.067,6.947c17.187,14.801,42.752,24.576,78.16,29.893
		c24.346,3.654,46.266,4.049,54.562,4.049c0.942,0,1.65-0.006,2.104-0.01c0.453,0.004,1.161,0.01,2.101,0.01
		c8.295,0,30.214-0.395,54.558-4.049c35.41-5.314,60.977-15.092,78.163-29.893l8.161-7.027l2.4-10.213
		c0.374-1.459,8.461-27.277,29.03-56.977c11.487-16.584,24.633-29.631,39.075-38.775c17.511-11.09,36.648-16.482,58.506-16.482
		h27.079l5.375-26.539l26.232-129.541l2.609-12.883l-6.497-10.441c-1.572-2.867-17.906-34.15-0.077-64.242
		C800.959,509.76,812.182,489.924,822.837,464.958z M763.886,507.373c-28.994,48.938,0,97.875,0,97.875l-26.233,129.539
		c-124.262,0-158.779,137.496-158.779,137.496c-28.731,24.742-98.153,25.92-111.112,25.92c-1.364,0-2.103-0.014-2.103-0.014
		s-0.737,0.014-2.103,0.014c-12.967,0-82.384-1.18-111.113-25.92c0,0-34.518-137.496-158.779-137.496L167.43,605.248
		c0,0,28.994-48.938,0-97.875c-12.37-20.879-35.545-61.672-47.762-113.433l71.988-43.318l15.903-78.353l-32.341-6.564
		l-13.015,64.126l-48.678,29.292c-7.336-63.288,5.255-138.103,69.093-211.584C248.89,71.255,357.274,33.113,465.658,33.113
		c67.455,0,134.907,14.778,192.209,44.326l-46.264,144.453l-63.825,24.341l11.759,30.834l78.653-29.995l48.898-152.681
		c23.023,14.974,43.832,32.687,61.608,53.148C881.244,300.11,792.879,458.436,763.886,507.373z" />
                                            <path d="M437.269,530.922c7.925-11.867,15.187-31.684,4.776-58.686c-10.488-27.208-31.34-48.446-60.297-61.42
		c-29.029-13.007-59.33-15.123-79.638-14.607c-18.015,0.457-35.181,3.126-49.647,7.72c-16.943,5.38-28.363,12.848-33.943,22.196
		c-8.89,14.894-11.076,38.104-6.684,70.956c2.992,22.387,8.034,41.037,8.248,41.822l0.965,3.547l2.377,2.807
		c17.305,20.426,55.33,31.918,101.716,30.742C377.391,574.674,419.307,557.822,437.269,530.922z M409.731,512.533
		c-11.456,17.156-45.786,29.357-85.43,30.363c-31.984,0.812-61.194-5.953-73.28-16.676c-1.54-6.311-4.493-19.367-6.413-33.875
		c-4.498-33.991,0.513-46.096,2.278-49.139c3.449-4.338,23.889-13.081,56.062-13.896c23.859-0.604,47.036,3.559,65.261,11.724
		c21.11,9.459,35.558,23.965,42.94,43.115C413.905,491.295,416.756,502.014,409.731,512.533z" />
                                            <path d="M678.853,403.928c-14.465-4.594-31.633-7.263-49.647-7.72c-20.308-0.516-50.608,1.602-79.638,14.607
		c-28.958,12.975-49.809,34.212-60.297,61.42c-10.41,27.002-3.148,46.816,4.776,58.686c17.962,26.898,59.88,43.752,112.127,45.076
		c46.387,1.176,84.411-10.316,101.717-30.742l2.377-2.807l0.965-3.547c0.214-0.785,5.255-19.438,8.248-41.822
		c4.392-32.853,2.205-56.062-6.685-70.956C707.215,416.776,695.795,409.308,678.853,403.928z M686.707,492.346
		c-1.92,14.508-4.874,27.564-6.413,33.875c-12.085,10.723-41.295,17.486-73.28,16.676c-39.643-1.006-73.973-13.207-85.429-30.363
		c-7.024-10.52-4.174-21.236-1.418-28.385c7.382-19.15,21.829-33.656,42.94-43.115c18.224-8.165,41.4-12.327,65.261-11.724
		c32.173,0.815,52.613,9.56,56.062,13.896C686.194,446.25,691.205,458.355,686.707,492.346z" />
                                        </g>
                                    </svg>
                                </div>
                            </div>
                            <h2 class="text-lg font-semibold mt-4">Lore</h2>
                            <p class="pt-2">{{ getActivePoint?.description }}</p>
                        </div>
                    </div>
                    <form method="dialog" class="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog>
            </div>
            <div class="flex gap-2 flex-wrap mt-4 sm:hidden">
                <div v-for="(point) in points" :key="point.id">
                    <button @click="openPoint(point.id)" class="btn btn-soft btn-sm pl-1"><div class="bg-base-300/90 rounded-full px-2 py-1 font-bold self-center items-center text-center">{{point.letter}}</div>{{ point.name }}</button>
                </div>
            </div>
        </div>
    </LayoutBasic>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'
import LayoutBasic from '../layouts/LayoutBasic.vue'
import imgDusterhafen from '../assets/illustration/dusterhafen.webp'
import imgElderglade from '../assets/illustration/elderglade.webp'
import imgWhitegraves from '../assets/illustration/whitegrave.webp'
import imgMausoleum from '../assets/illustration/mausoleum.webp'

import imgMausoleumMonster1 from '../assets/avatars/mausoleum/monster1.webp'
import imgMausoleumMonster2 from '../assets/avatars/mausoleum/monster2.webp'
import imgMausoleumMonster3 from '../assets/avatars/mausoleum/monster3.webp'
import imgMausoleumMonster4 from '../assets/avatars/mausoleum/monster4.webp'
import imgMausoleumMonster5 from '../assets/avatars/mausoleum/monster5.webp'
import imgMausoleumMonster6 from '../assets/avatars/mausoleum/monster6.webp'

import imgEldergladeMonster1 from '../assets/avatars/elderglade/monster1.webp'
import imgEldergladeMonster2 from '../assets/avatars/elderglade/monster2.webp'
import imgEldergladeMonster3 from '../assets/avatars/elderglade/monster3.webp'
import imgEldergladeMonster4 from '../assets/avatars/elderglade/monster4.webp'

import imgWhitegravesMonster1 from '../assets/avatars/whitegraves/monster1.webp'
import imgWhitegravesMonster2 from '../assets/avatars/whitegraves/monster2.webp'
import imgWhitegravesMonster3 from '../assets/avatars/whitegraves/monster3.webp'
import imgWhitegravesMonster4 from '../assets/avatars/whitegraves/monster4.webp'
import imgWhitegravesMonster5 from '../assets/avatars/whitegraves/monster5.webp'

import imgDusterhafenMonster1 from '../assets/avatars/dusterhafen/monster1.webp'
import imgDusterhafenMonster2 from '../assets/avatars/dusterhafen/monster2.webp'
import imgDusterhafenMonster3 from '../assets/avatars/dusterhafen/monster3.webp'
import imgDusterhafenMonster4 from '../assets/avatars/dusterhafen/monster4.webp'
import imgDusterhafenMonster5 from '../assets/avatars/dusterhafen/monster5.webp'

const mapPointDialog = ref<HTMLDialogElement | null>(null)
const activePoint = ref<number | null>(null)
const getActivePoint = computed(() => {
    return points.find(point => point.id === activePoint.value)
})

const openMapPointDialog = () => {
    mapPointDialog.value?.showModal()
}

const openPoint = (pointId: number) => {
    activePoint.value = pointId
    openMapPointDialog()
}


const breadcrumbs = [
    {
        text: 'World Map',
        href: '/world-map'
    }
]

const points: { id: number, x: number, y: number, name: string, description: string, image: string, monsters: string[], difficulty: number, letter: string }[] = [
    {
        id: 1, x: 78, y: 52, name: 'The Corrupted Mausoleum', image: imgMausoleum,
        description: 'Deep in the heart of a cursed swamp lies the Corrupted Mausoleum, once the resting place of a forgotten shadow cult. Centuries ago, the Shadow Plague broke out there. A dark curse that devours flesh, spirit, and light alike. Even today, black mists swirl through the crumbling halls, and voices whisper from graves that should long be silent.',
        monsters: [imgMausoleumMonster1, imgMausoleumMonster2, imgMausoleumMonster3, imgMausoleumMonster4, imgMausoleumMonster5, imgMausoleumMonster6],
        difficulty: 3,
        letter: 'A'
    },
    {
        id: 2, x: 58.5, y: 55, name: 'Elderglade', image: imgElderglade,
        description: 'Hidden within the glowing Blue Crystal Forest stands Elderglade, an ancient city where nature magic pulses in every leaf. Its inhabitants maintain the balance between the living forests and the arcane currents beneath the earth. It is said that Elderglade itself breathes and only welcomes those who dare to face the trials of the forest.',
        monsters: [imgEldergladeMonster1, imgEldergladeMonster2, imgEldergladeMonster3, imgEldergladeMonster4],
        difficulty: 1,
        letter: 'B'
    },
    {
        id: 3, x: 30, y: 10, name: 'The White Graves', image: imgWhitegraves,
        description: 'Far in the frozen North, where even the wind seems to whisper, lie the White Graves. Ancient mounds of eternal snow, once belonging to fallen kings and forgotten heroes. Yet beneath the ice, shadows stir, and the spirits of the dead wander restlessly, bound to an ancient, broken oath. No living soul lingers there for long. For the cold preys not only on the body, but on the soul as well.',
        monsters: [imgWhitegravesMonster1, imgWhitegravesMonster2, imgWhitegravesMonster3, imgWhitegravesMonster4, imgWhitegravesMonster5],
        difficulty: 3,
        letter: 'C'
    },
    {
        id: 4, x: 38, y: 86, name: 'Black Harbor', image: imgDusterhafen,
        description: 'Black Harbor lies hidden within a bay of everlasting mist, where the sun pierces the gray haze only as a pale flicker. Once a secure trading post, the city was seized by cursed pirates who sacrificed their souls to the Deep Sea in exchange for eternal plunder. Now, the harbor is a labyrinth of decaying docks and haunted taverns, where the restless dead seek to reclaim what was lost to the depths.',
        monsters: [imgDusterhafenMonster1, imgDusterhafenMonster2, imgDusterhafenMonster3, imgDusterhafenMonster4, imgDusterhafenMonster5],
        difficulty: 2,
        letter: 'D'
    },
    /*
    {
        id: 3, x: 85, y: 80, name: 'Geistersee',
        description: 'Die Geistersee ist ein endlos weites, nebelverhangenes Meer, dessen Wasser bei Nacht gespenstisch silbern leuchtet. Die alten Seefahrer sagen, wer weit genug hinaussegle, hört die Glocken einer ewigen Flotte läuten. Ein Ruf der Toten, dem niemand widerstehen kann.'
    }
    */
]
</script>

<style scoped>
.pulstrigger {
    animation: pulse 3s infinite;
}

@keyframes pulse {
    0% {
        box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
    }

    30% {
        box-shadow: 0 0 5px 25px rgba(255, 255, 255, 0);
    }

    100% {
        box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
    }
}
</style>