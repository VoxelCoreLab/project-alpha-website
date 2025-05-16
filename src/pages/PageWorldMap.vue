<template>
    <LayoutBasic :breadcrumbs="breadcrumbs">
        <div class="mx-4">
            <div class="relative max-w-6xl mx-auto">
                <img alt="" src="../assets/world-map-mix.webp" class="w-full" />

                <div v-for="(point, index) in points" :key="point.id" class="absolute z-0 focus-within:z-10"
                    :style="{ left: point.x + '%', top: point.y + '%' }">
                    <div class="absolute transform -translate-x-1/2 -translate-y-1/2">
                        <div class="group">
                            <div tabindex="0" role="button" :style="{ animationDelay: (index * 0.2) + 's' }"
                                @click="openPoint(point.id)" @keydown.enter="openPoint(point.id)"
                                class="group/circle z-0 bg-base-100/60 w-8 h-8 rounded-full grid justify-center items-center cursor-pointer hover:bg-base-100/70 pulstrigger transition-all">
                                <div
                                    class="w-5 h-5 bg-base-100/90 rounded-full group-hover/circle:bg-secondary/70 transition-all">
                                </div>
                                <div
                                    class="hidden sm:block absolute whitespace-nowrap cursor-pointer [inset-inline-end:_calc(1/2_*_100%)] translate-x-[50%] bg-base-100/60 group-hover/circle:bg-base-100/70 px-2 py-1 mt-15 rounded-md text-sm transition-all">
                                    {{ point.name }}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Point Dialog -->
                <dialog ref="mapPointDialog" class="modal modal-bottom sm:modal-middle">
                    <div class="modal-box">
                        <form method="dialog">
                            <button class="btn btn-circle btn-ghost absolute right-4 top-4">✕</button>
                        </form>
                        <h3 class="text-lg font-bold">{{ getActivePoint?.name }}</h3>
                        <div class="max-h-[60vh] overflow-y-auto">
                            <img class="w-full aspect-video h-auto rounded-lg mt-4" :src="getActivePoint?.image" alt="" />
                            <p class="py-4">{{ getActivePoint?.description }}</p>
                        </div>
                    </div>
                    <form method="dialog" class="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog>
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
        text: 'Weltkarte',
        href: '/world-map'
    }
]

const points: { id: number, x: number, y: number, name: string, description: string, image: string }[] = [
    {
        id: 1, x: 78, y: 52, name: 'Das verderbte Mausoleum', image: imgMausoleum,
        description: 'Tief im Herzen eines verfluchten Sumpfes liegt das verderbte Mausoleum, einst Ruhestätte eines vergessenen Schattenkults. Dort brach vor Jahrhunderten die Schattenseuche aus. Ein dunkler Fluch, der Fleisch, Geist und Licht gleichermassen zerfrisst. Noch heute wabern schwarze Nebel durch die zerfallenen Hallen, und aus den Gräbern flüstern Stimmen, die längst tot sein sollten.'
    },
    {
        id: 2, x: 58.5, y: 55, name: 'Elderglade', image: imgElderglade,
        description: 'Versteckt im leuchtenden Blauen Kristallwald erhebt sich Elderglade, eine uralte Stadt, in der Naturmagie in jedem Blatt pulsiert. Ihre Bewohner bewahren das Gleichgewicht zwischen den lebenden Wäldern und den arkanen Strömen unter der Erde. Es heisst, dass Elderglade selbst atmet und nur jene willkommen heisst, die sich den Prüfungen des Waldes zu stellen.'
    },
    {
        id: 3, x: 30, y: 10, name: 'Die weissen Gräber', image: imgWhitegraves,
        description: 'Weit im gefrorenen Norden, wo selbst der Wind zu flüstern scheint, liegen die Weissen Gräber. Uralte Hügel aus ewigem Schnee, die einst gefallenen Königen und vergessenen Helden gehörten. Doch unter dem Eis regen sich Schatten, und die Geister der Toten wandeln unruhig, gefesselt an ein uraltes, gebrochenes Schwurband. Kein Lebender bleibt dort lange. Denn die Kälte zehrt nicht nur am Körper, sondern auch an der Seele.'
    },
    {
        id: 4, x: 38, y: 86, name: 'Düsterhafen', image: imgDusterhafen,
        description: 'Düsterhafen liegt verborgen in einer immerwährenden Nebelbucht, wo die Sonne nur als blasses Flackern durch den grauen Dunst dringt. Einst ein sicherer Handelsposten, wurde die Stadt von verfluchten Piraten übernommen, die ihre Seelen für ewige Beute dem Tiefenmeer geopfert haben.'
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