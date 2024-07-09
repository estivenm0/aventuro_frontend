<script setup>
import { RouterLink } from 'vue-router';


defineProps({
  type: String
})



</script>

<template>
  <section class="flex items-center justify-center w-screen h-screen">
    <div class="w-full max-w-xs p-5 m-auto bg-indigo-300 rounded shadow-2xl ">
      <RouterLink to="/">
        <img class="w-20 mx-auto mb-2" src="/favicon.ico" />
      </RouterLink>
      <form>
        <div v-if="type === 'Register'" >
          <label class="block mb-2 text-indigo-500 rounded-md" for="username">Name</label>
          <input class="w-full p-2 mb-3 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-200"
            type="text" name="username">
        </div>
        <div >
          <label class="block mb-2 text-indigo-500 rounded-md" for="username">Email</label>
          <input class="w-full p-2 mb-3 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-200"
            type="email" name="email">
        </div>
        <div>
          <label class="block mb-2 text-indigo-500" for="password">Password</label>
          <input class="w-full p-2 mb-3 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-200"
            type="password" name="password">
        </div>
        <div v-if="type === 'Register'">
          <label class="block mb-2 text-indigo-500" for="password">Password Confirmation</label>
          <input class="w-full p-2 mb-3 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-200"
            type="password" name="password">
        </div>
        <div>
          <button class="w-full px-4 py-2 mb-3 font-bold text-white bg-indigo-700 rounded hover:bg-pink-700"
            type="submit">
             {{type}}
          </button>
        </div>
      </form>
      <footer v-if="type === 'Login'">
        <a class="float-right text-sm text-indigo-700 hover:text-pink-700" href="#">Create Account</a>
      </footer>
    </div>
  </section>


</template>


