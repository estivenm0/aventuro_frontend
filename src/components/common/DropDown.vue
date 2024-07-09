<template>
    <div class="group relative cursor-pointer py-2">

        <div class="flex items-center justify-between space-x-5 bg-indigo-600 px-2 rounded-sm ">
            <a class="menu-hover my-1 text-base font-medium text-gray-200 lg:mx-4">
                User
            </a>
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </span>
        </div>

        <div
            class="invisible absolute z-50 flex w-full flex-col bg-indigo-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible">

            <RouterLink to="/profile" class="my-2 block border-b border-gray-100  font-semibold text-gray-500 hover:text-black md:mx-2">
                Profile
            </RouterLink>
            <hr>
            <RouterLink to="/bookings" class="my-2 block border-b border-gray-100  font-semibold text-gray-500 hover:text-black md:mx-2">
                Bookings
            </RouterLink>
            <hr>
            <RouterLink to="/profile" class="my-2 block border-b border-gray-100  font-semibold text-red-500 hover:text-red-700 md:mx-2">
                Log out
            </RouterLink>


        </div>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';


</script>
