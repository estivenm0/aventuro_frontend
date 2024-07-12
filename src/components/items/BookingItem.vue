<script setup>
import { RouterLink } from 'vue-router';


defineProps(['booking'])
</script>

<template>
    <RouterLink :to="{ name: 'packages.details', params: { slug: booking.package.slug } }"
            class="flex-grow w-full px-3 py-2 text-black bg-gray-100 border-l-8 border-green-500 rounded-md md:w-5/12 lg:w-3/12">
            {{ booking.package.title }}

            <div class="flex pt-1 text-sm font-thin text-gray-500 gap-x-1">
                <span>Topics: 63</span>
                <span>MCQs: 20697</span>
            </div>
        </RouterLink>
</template>



