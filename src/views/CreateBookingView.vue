<script setup>
import { computed, ref } from 'vue';


const count = ref(1);

const total = computed(() => {
  return  count.value * 1000; 
})

</script>

<template>
    <section class="py-4 my-auto ">
        <div class="lg:w-[80%] md:w-[90%] xs:w-[96%] mx-auto flex gap-4">
            <div
                class="lg:w-[88%] md:w-[80%] sm:w-[88%] xs:w-full mx-auto shadow-2xl p-4 rounded-md h-fit self-center bg-indigo-200">
                <!--  -->
                <div class="">
                    <h1
                        class="mb-2 font-serif font-extrabold text-indigo-700 lg:text-3xl md:text-2xl sm:text-xl xs:text-xl">
                        Create Bookings
                    </h1>
                    <form>    
                        <div class="flex flex-col justify-center w-full gap-2 lg:flex-row md:flex-col sm:flex-col">
                            <div class="w-full mb-4 lg:mt-6">
                                <label for="" class="text-indigo-700 ">Phone</label>
                                <input type="number"
                                    class="w-full p-3 mt-2 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-200"
                                    placeholder="Phone">
                            </div>
                            <div class="w-full mb-4 lg:mt-6">
                                <label for="" class="text-indigo-700 ">Address</label>
                                <input type="text"
                                    class="w-full p-3 mt-2 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-200"
                                    placeholder="Address">
                            </div>
                        </div>
                        <div class="flex flex-col justify-center w-full gap-2 lg:flex-row md:flex-col sm:flex-col">
                            <div class="w-full mb-4 lg:mt-6">
                                <label for="" class="text-indigo-700 ">Travel Date</label>
                                <input type="date"
                                    class="w-full p-3 mt-2 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-200"
                                    placeholder="Travel Date">
                            </div>
                            <div class="w-full mb-4 lg:mt-6">
                                <label for="" class="text-indigo-700 ">people</label>
                                <input type="range" min="1" max="50" v-model="count"
                                    class="w-full p-3 mt-2 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-200"
                                    placeholder="Count">
                                    {{ count }}
                            </div>
                        </div>
                        <p
                        class="mb-2 font-serif font-extrabold text-gray-700 text-md">
                        {{ 'Price: '+ 1000}} *
                        {{ 'People: '+ count}} 
                        </p>
                        
                        <p
                        class="mb-2 font-serif font-extrabold text-indigo-700 lg:text-3xl md:text-2xl  text-md">
                        {{ 'Total: '+ total}}
                        </p>

                        <div class="w-full mt-4 text-lg font-semibold text-white bg-indigo-700 rounded-md hover:bg-indigo-900">
                            <button type="submit" class="w-full p-2">Create</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>


