<script setup>
import PaginationC from '@/components/common/PaginationC.vue';
import client from '@/utils/client';
import BookingItem from '@/components/items/BookingItem.vue'
import { onMounted, reactive, ref } from 'vue';

const bookings = reactive({
    list: {},
    links: [],
    meta: {},
})

onMounted(async () => {
    let res = await client.get('/api/bookings');
    Object.assign(bookings, res.data);
    console.log(bookings)
})

</script>

<template>
    <div>
        <div class="flex justify-start gap-5 ms-5">
            <h3 class="text-2xl font-bold text-center md:text-5xl">Bookings</h3>
        </div>
        <div class="flex flex-wrap justify-center gap-4 p-6 font-serif text-lg" 
        v-if="bookings.list.length >1">
            <template v-for="booking, index in bookings.list" v-bind:key="index">
                <BookingItem :booking />
            </template>
        </div>
        

        <div class="mx-auto sm:w-1/2">
            <PaginationC />
        </div>
    </div>

</template>
