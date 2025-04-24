<template>
    <LayoutBasic :breadcrumbs="breadcrumbs">
        <div class="mx-4">
            <div class="relative max-w-6xl mx-auto">
                <img alt="" src="../assets/world-map.jpg" class="w-full" />

                <div v-for="(point, index) in points" :key="point.id" class="absolute z-0 focus-within:z-10"
                    :style="{ left: point.x + '%', top: point.y + '%' }">
                    <div class="absolute transform -translate-x-1/2 -translate-y-1/2">
                        <div class="dropdown dropdown-center group">
                            <div tabindex="0" role="button" :style="{ animationDelay: (index * 0.2) + 's' }"
                                class="group/circle z-0 bg-base-100/60 w-8 h-8 rounded-full grid justify-center items-center cursor-pointer hover:bg-base-100/70 group-focus-within:bg-base-100/70 group-focus-within:border-2 group-focus-within:border-base-300 pulstrigger transition-all">
                                <div
                                    class="w-5 h-5 bg-base-100/90 rounded-full group-focus-within:bg-secondary/70 group-hover/circle:bg-secondary/70 transition-all">
                                </div>
                                <div
                                    class="absolute whitespace-nowrap cursor-pointer [inset-inline-end:_calc(1/2_*_100%)] translate-x-[50%] bg-base-100/60 group-hover/circle:bg-base-100/70 group-focus-within:bg-base-100/70 px-2 py-1 mt-15 rounded-md text-sm transition-all">
                                    {{ point.name }}</div>
                            </div>

                            <div tabindex="0" class="dropdown-content card card-sm bg-base-300 absolute w-64 shadow-lg mt-8">
                                <div class="card-body">
                                    <p class="font-bold text-sm">{{ point.name }}</p>
                                    <p class="text-sm">{{ point.description }}</p>
                                </div>
                                <button class="btn btn-neutral btn-sm btn-circle btn-ghost absolute right-2 top-2"
                                    onclick="document.activeElement.blur()">✕</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </LayoutBasic>
</template>
<script setup lang="ts">
import LayoutBasic from '../layouts/LayoutBasic.vue'

const breadcrumbs = [
    {
        text: 'Weltkarte',
        href: '/world-map'
    }
]

const points = [
    {
        id: 1, x: 78, y: 52, name: 'Das verderbte Mausoleum',
        description: 'Tief im Herzen eines verfluchten Sumpfes liegt das verderbte Mausoleum, einst Ruhestätte eines vergessenen Schattenkults. Dort brach vor Jahrhunderten die Schattenseuche aus. Ein dunkler Fluch, der Fleisch, Geist und Licht gleichermassen zerfrisst. Noch heute wabern schwarze Nebel durch die zerfallenen Hallen, und aus den Gräbern flüstern Stimmen, die längst tot sein sollten.'
    },
    {
        id: 2, x: 58.5, y: 55, name: 'Elderglade',
        description: 'Versteckt im leuchtenden Blauen Kristallwald erhebt sich Elderglade, eine uralte Stadt, in der Naturmagie in jedem Blatt pulsiert. Ihre Bewohner (eine Allianz aus Elfen, Druiden und Kristallwächtern) bewahren das Gleichgewicht zwischen den lebenden Wäldern und den arkanen Strömen unter der Erde. Es heisst, dass Elderglade selbst atmet und nur jene willkommen heisst, die sich den Prüfungen des Waldes zu stellen.'
    },
    {
        id: 3, x: 30, y: 10, name: 'Die weissen Gräber',
        description: 'Weit im gefrorenen Norden, wo selbst der Wind zu flüstern scheint, liegen die Weissen Gräber. Uralte Hügel aus ewigem Schnee, die einst gefallenen Königen und vergessenen Helden gehörten. Doch unter dem Eis regen sich Schatten, und die Geister der Toten wandeln unruhig, gefesselt an ein uraltes, gebrochenes Schwurband. Kein Lebender bleibt dort lange. Denn die Kälte zehrt nicht nur am Körper, sondern auch an der Seele.'
    },
    {
        id: 3, x: 38, y: 86, name: 'Düsterhafen',
        description: 'Düsterhafen liegt verborgen in einer immerwährenden Nebelbucht, wo die Sonne nur als blasses Flackern durch den grauen Dunst dringt. Einst ein sicherer Handelsposten, wurde die Stadt von verfluchten Piraten übernommen, die ihre Seelen für ewige Beute dem Tiefenmeer geopfert haben.'
    },
    {
        id: 3, x: 85, y: 80, name: 'Geistersee',
        description: 'Die Geistersee ist ein endlos weites, nebelverhangenes Meer, dessen Wasser bei Nacht gespenstisch silbern leuchtet. Die alten Seefahrer sagen, wer weit genug hinaussegle, hört die Glocken einer ewigen Flotte läuten. Ein Ruf der Toten, dem niemand widerstehen kann.'
    }
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