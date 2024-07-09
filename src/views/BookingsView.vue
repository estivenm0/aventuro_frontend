<script setup>
import PaginationC from '@/components/common/PaginationC.vue';


</script>

<template>
    <div>
        <div class="flex justify-start gap-5 ms-5">
          <h3 class="text-2xl font-bold text-center md:text-5xl">Bookings</h3>
        </div>
         <div class="flex flex-wrap justify-center gap-4 p-6 font-serif text-lg">
        <a href="#"
            class="flex-grow w-full px-3 py-2 text-black bg-gray-100 border-l-8 border-green-500 rounded-md md:w-5/12 lg:w-3/12">
            Computer Science Engineering

            <div class="pt-1 text-sm font-thin text-gray-500">
                <span>Topics: 63</span>
                <span>MCQs: 20697</span>
            </div>
        </a>
        <a class="flex-grow w-full px-3 py-2 text-black bg-gray-100 border-l-8 border-green-500 rounded-md md:w-5/12 lg:w-3/12"
            href="#">
            Mechanical Engineering
            <div class="text-sm font-thin text-gray-500">
                <span>Topics: 48</span>
                <span>MCQs: 18222</span>
            </div>
        </a>
        <a class="flex-grow w-full px-3 py-2 text-black bg-gray-100 border-l-8 border-green-500 rounded-md md:w-5/12 lg:w-3/12"
            href="#">
            Civil Engineering
            <div class="text-sm font-thin text-gray-500">
                <span>Topics: 55</span>
                <span>MCQs: 14783</span>
            </div>
        </a>
        <a class="flex-grow w-full px-3 py-2 text-black bg-gray-100 border-l-8 border-green-500 rounded-md md:w-5/12 lg:w-3/12"
            href="#">
            Information Technology Engineering
            <div class="text-sm font-thin text-gray-500">
                <span>Topics: 26</span>
                <span>MCQs: 8818</span>
            </div>
        </a>
        <a class="flex-grow w-full px-3 py-2 text-black bg-gray-100 border-l-8 border-green-500 rounded-md md:w-5/12 lg:w-3/12"
            href="#">
            Biomedical Engineering
            <div class="text-sm font-thin text-gray-500">
                <span>Topics: 1</span>
                <span>MCQs: 217</span>
            </div>
        </a>
        <a class="flex-grow w-full px-3 py-2 text-black bg-gray-100 border-l-8 border-green-500 rounded-md md:w-5/12 lg:w-3/12"
            href="#">
            Manufacturing Engineering
            <div class="text-sm font-thin text-gray-500">
                <span>Topics: 1</span>
                <span>MCQs: 154</span>
            </div>
        </a>
    </div>

    <div class="mx-auto sm:w-1/2">
        <PaginationC/>        
    </div>
    </div>
   
</template>
