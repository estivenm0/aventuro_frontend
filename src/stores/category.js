import client from "@/utils/client";
import { defineStore } from "pinia";
import { ref } from "vue";


export const useCategoryStore = defineStore('category', ()=>{

    const categories = ref([]);
    

    async function getCategories(){
        if(sessionStorage.getItem('categories')){
            categories.value = JSON.parse(sessionStorage.getItem('categories'));
            return 
        }
        const res = await client.get('/api/v1/categories')

        categories.value = res.data;
        sessionStorage.setItem('categories', JSON.stringify(res.data))
    }

    return {getCategories, categories}

})