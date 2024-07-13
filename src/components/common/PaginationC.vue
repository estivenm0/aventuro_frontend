<script setup>
import { reactive, watch } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

const { meta, name } = defineProps(['meta', 'name'])

const route = useRoute()

const pages = reactive({
    current: "",
    next: "",
    prev: ""
})

watch(() => route.query.page, (newPage) => {
    newPage = newPage ? newPage : 1;
    pages.prev = `/${name}?page=${ newPage > 1 ? parseInt(newPage) - 1 : 1}`
    pages.current =  newPage 
    pages.next = `/${name}?page=${ newPage < meta.last_page ? parseInt(newPage) + 1 : newPage}`
}, {immediate: true})




</script>
<template>
    <div class="flex items-center w-10/12 px-2 mx-auto mt-4">
        <RouterLink :to="pages.prev"
            class="w-full p-4 text-base text-gray-600 bg-white border rounded-l-xl hover:bg-indigo-200">
            <svg width="9" fill="currentColor" height="8" class="" viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z">
                </path>
            </svg>
        </RouterLink>
        
        <RouterLink :to="pages.prev" v-if="pages.current != 1"
            class="w-full px-4 py-2 text-base text-center bg-white border hover:bg-indigo-200">
            {{ parseInt(pages.current) - 1 }}
        </RouterLink>
        <RouterLink :to="{ name: name, query: { page: pages.current}}"
            class="w-full px-4 py-2 text-base text-center text-indigo-600 bg-white border hover:bg-indigo-200">
            {{ pages.current }}
        </RouterLink>
        <RouterLink :to="pages.next" v-if="pages.current < meta.last_page"
            class="w-full px-4 py-2 text-base text-center bg-white border hover:bg-indigo-200">
            {{ parseFloat(pages.current) + 1 }}
        </RouterLink>

        <RouterLink :to="pages.next" v-if="pages.current < meta.last_page"
            class="flex justify-end w-full p-4 text-base text-gray-600 bg-white border-t border-b border-r rounded-r-xl hover:bg-indigo-200">
            <svg width="9" fill="currentColor" height="8" class="" viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                </path>
            </svg>
        </RouterLink>
    </div>
</template>
