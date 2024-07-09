<template>

<div class="antialiased text-gray-900 ">
    <div class="overflow-hidden bg-white rounded-lg shadow-xl shadow-indigo-400 max-w-64">
      <!--E11-->
      <img class="object-cover w-full h-48 object-end" src="https://images.unsplash.com/photo-1570797197190-8e003a00c846?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80" alt="Home in Countryside" />
      
      <div class="p-6">
        <span class="inline-block mx-1 px-4 py-1 text-xs font-semibold tracking-wide text-indigo-800 uppercase bg-indigo-200 rounded-full">New</span>
        <RouterLink :to="{ name: 'packages.details', params: { slug: 'erina' } }">
          <h4 class=" text-lg font-semibold leading-tight truncate">Beautiful Home in the countryside</h4>
        </RouterLink>
        <div class="flex items-baseline">
        
          <div class=" text-xs font-semibold tracking-wide text-gray-600 uppercase">
            USA NEW YORk <br/>
            10 days
          </div>
        </div>

        <div class="mt-1">
          <span>$1,900 $</span>
          <span class="inline-block mx-1 px-4 py-1 text-xs font-semibold tracking-wide text-red-800 uppercase bg-red-200 rounded-full" title="Discount">10%</span>
        </div>

      </div>
    </div>
</div>
</template>

<script setup>
import { RouterLink } from 'vue-router';


</script>
