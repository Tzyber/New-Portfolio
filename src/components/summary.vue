<script setup lang="ts">

function openLinkInNewTab(link: String) {
  window.open(link, '_blank')
}
</script>

<template>
  <div class="p-4 sm:ml-64 bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700" style="height: inherit;">
  <div class="max-w-screen-lg w-full  mb-20 px-8 mx-auto pb-24 sm:mt-28 sm:px-16 slg:px-24 lg:mt-48 lg:mt-58 overflow-auto">
    <div class="flex flex-col gap-8 lg:gap-16 mb-16">
      <div class="flex flex-col gap-8">
        <div class="flex justify-center">
        <h1 class="text-xl justify-center sm:text-3xl text-white md:text-4xl md:leading-normal slg:text-5xl slg:leading-relaxed font-theme_bold text-head_text">
          Current and Old Projects</h1>
        </div>
        <div class="border-b border-amber-300"></div>
        <div class="grid">

          <a @click="openLinkInNewTab('https://github.com/Tzyber/aboutme')" class="flex cursor-pointer mb-2 flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img class="object-cover w-full rounded-t-lg  md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="../assets/aboutme.jpg" alt="" style="height: 100%">
            <div class="flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">First simple Portfolio</h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">My very first portfolio thrown together with some scss</p>
              <div class="">
              <span
                  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Vue3</span>
                <span
                    class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#SCSS</span>
                <span
                    class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Vue Router</span>
                <div class="flex justify-end">
                </div>
              </div>
            </div>
          </a>
          <a @click="openLinkInNewTab('https://github.com/Tzyber/twitchChatBot')"   class="flex cursor-pointer flex-col mt-2 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="../assets/aboutme.jpg" alt="" style="height: 100%">
            <div class="flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">twitch Quiz Chatbot</h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Simple twitch Quiz Chatbot made with javascript and express</p>
              <div class="">
              <span
                  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Twitch</span>
                <span
                    class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Javascript</span>
                <span
                    class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Express</span>
              </div>
            </div>
          </a>
        </div>
        <div class="border-b border-amber-300"></div>
      </div>

    </div>
  </div>
  </div>
</template>
