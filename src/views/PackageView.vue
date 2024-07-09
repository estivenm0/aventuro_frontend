<script setup>
import { RouterLink } from 'vue-router';


</script>

<template>
    <div class="py-2 ">
        <div class="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
            <div class="flex flex-col -mx-4 md:flex-row">
                <div class="px-4 md:flex-1">
                    <div class="h-[460px] rounded-lg  ">
                        <img class="object-cover w-full h-full rounded-lg"
                            src="https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg"
                            alt="Product Image">
                    </div>
                </div>
                <div class="px-4 md:flex-1">
                    <h1 class="mb-2 text-2xl font-bold text-gray-800 ">Product Name</h1>
                    <p class="mt-2 text-gray-600 text-md">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                        sed ante justo. Integer euismod libero id mauris malesuada tincidunt. Vivamus commodo nulla ut
                        lorem rhoncus aliquet. Duis dapibus augue vel ipsum pretium, et venenatis sem blandit. Quisque
                        ut erat vitae nisi ultrices placerat non eget velit. Integer ornare mi sed ipsum lacinia, non
                        sagittis mauris blandit. Morbi fermentum libero vel nisl suscipit, nec tincidunt mi consectetur.
                    </p>
                    <div>
                        <ul class="my-3 space-y-3 font-medium">
                            <li class="flex items-start lg:col-span-1">
                                <div class="flex-shrink-0">
                                    <svg class="w-5 h-5 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                </div>
                                <p class="ml-3 leading-5 text-gray-800">
                                    Build functional APIs with zero coding.
                                </p>
                            </li>
                        </ul>
                    </div>

                    <div class="flex flex-wrap mb-4 ">
                        <div class="mr-4">
                            <span class="font-bold text-gray-700 ">Destination: </span>
                            <span class="text-gray-600 "> alibaba</span>
                        </div>
                        <div class="mr-4">
                            <span class="font-bold text-gray-700 ">Duration: </span>
                            <span class="text-gray-600 "> 10</span>
                        </div>
                        <div class="mr-4">
                            <span class="font-bold text-gray-700 ">Price: </span>
                            <span class="text-gray-600 "> $29.99</span>
                        </div>
                    </div>

                    <div class="w-1/2 px-2 ">
                        <RouterLink :to="{name: 'bookings.create', params: { package: 2 }}"
                            class="w-full block text-center px-4 py-2 font-bold text-white bg-indigo-600 rounded-full hover:bg-indigo-800">
                            Reserve
                        </RouterLink >
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
