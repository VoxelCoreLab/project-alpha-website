<template>
    <LayoutBasic :breadcrumbs="breadcrumbs">
        <div class="grid h-full max-w-6xl text-left m-auto p-4 md:p-8">
            <div class="flex flex-col gap-6">
                <h1 class="text-4xl font-bold">Impressum</h1>
                <h2 class="text-2xl font-bold">Voxel Core Lab GmbH</h2>
                <p>Sitz: Bern</p>
                <p>
                    Postadresse:<br>
                    Voxel Core Lab GmbH<br>
                    Fährstrasse 49<br>
                    3004 Bern
                </p>
                <p>E-Mail: voxelcorelab@gmail.com</p>
            </div>
        </div>
    </LayoutBasic>
</template>
<script lang="ts" setup>

import LayoutBasic from '../layouts/LayoutBasic.vue'

const breadcrumbs = [
    {
        text: 'Impressum',
        href: '/imprint'
    }
]
</script>
