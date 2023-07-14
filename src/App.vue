<script setup>
import {RouterView} from 'vue-router'
import router from "@/router/router";
</script>

<template>
  <div id="topNav"
       class="fixed right-0 flex items-center justify-between w-full h-[56px] border-b border-b-[#32323D]">
    <div class="flex items-center justify-center w-full">
          <button @click="router.push('/');"   class="bg-[#121216] transition ease-in-out delay-150 hover:bg-white hover:text-black   border-b text-white font-bold py-2 px-4 rounded">
            About Me
      </button>
      <button @click="router.push('/aboutme');"  class="bg-[#121216] ml-5 transition ease-in-out delay-150 hover:bg-white hover:text-black   border-b text-white font-bold py-2 px-4 rounded">
        Projects
      </button>
    </div>
    <div class="flex items-center pr-10">
      <div class="mr-4 p-1 hover:bg-gray-600 rounded-full cursor-pointer">

      </div>

    </div>
  </div>
  <div class="fixed w-full h-full mt-[50px] ">
      <RouterView />
  </div>

</template>

<style scoped>

</style>
