<script setup lang="ts">

function openLinkInNewTab(link: String) {
  window.open(link, '_blank')
}
</script>

<template>
  <div class="max-w-screen-lg w-full  mb-20 px-8 mx-auto pb-24 sm:mt-28 sm:px-16 slg:px-24 lg:mt-48 lg:mt-58 overflow-auto">
    <div class="flex flex-col gap-8 lg:gap-16 mb-16">
      <div class="flex flex-col gap-8">
        <div class="flex justify-center">
        <h1 class="text-xl justify-center sm:text-3xl text-white md:text-4xl md:leading-normal slg:text-5xl slg:leading-relaxed font-theme_bold text-head_text">
          Current and Old Projects</h1>
        </div>
        <div class="border-b border-amber-300"></div>
        <div class="flex flex-row">
          <div class="max-w-sm bg-white rounded overflow-hidden shadow-lg mr-16">
            <img class="w-full min-h-[70%] max-h-[70%]" src="../assets/aboutme.jpg" alt="scss">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Outdated About me</div>
              <p class="text-gray-700 text-base">
                First simple About me Page
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span
                  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Vue3</span>
              <span
                  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#SCSS</span>
              <span
                  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Vue Router</span>
              <div class="flex justify-end">
                <button @click="openLinkInNewTab('https://github.com/Tzyber/aboutme')" class="bg-white transition ease-in-out delay-150 hover:bg-black hover:text-white   border-b text-black font-bold py-2 px-4 rounded">
                  learn More
                </button>

              </div>
            </div>
          </div>
          <div class="max-w-sm bg-white rounded overflow-hidden shadow-lg  ml-16">
            <img class="w-full min-h-[70%] max-h-[70%]" src="../assets/twitchbot.jpg" alt="scss">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Simple twitch Quiz Chatbot</div>
              <p class="text-gray-700 text-base">
                Simple twitch bot for Quizzes
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span
                  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Twitch</span>
              <span
                  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Javascript</span>
              <span
                  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Express</span>
              <div class="flex justify-end">
                <button @click="openLinkInNewTab('https://github.com/Tzyber/twitchChatBot')" class="bg-white transition ease-in-out delay-150 hover:bg-black hover:text-white   border-b text-black font-bold py-2 px-4 rounded">
                    learn More
                </button>

              </div>
            </div>
          </div>
        </div>
        <div class="border-b border-amber-300"></div>
      </div>

    </div>
  </div>
</template>
