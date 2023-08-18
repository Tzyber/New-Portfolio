<script setup lang="ts">

function openLinkInNewTab(link: String) {
  window.open(link, '_blank')
}
</script>

<template>
  <div class=" flex flex-col gap-8 lg:gap-16 mb-16">
    <div class="flex flex-col gap-8 mt-[4rem]">
      <div class="p-4 sm:ml-64 dark:bg-black"
           style="height: inherit;">
        <div
            class=" w-full h-full overflow-auto overflow-x-hidden">
          <div class="flex flex-col gap-8 lg:gap-16 mb-16">
            <div class="flex flex-col gap-8">
              <div class="flex justify-center">
                <h1 class="text-xl justify-center sm:text-3xl text-white md:text-4xl md:leading-normal slg:text-5xl slg:leading-relaxed font-theme_bold text-head_text">
                  Current and Old Projects</h1>
              </div>
              <div class="border-b border-amber-300"></div>
              <div class="grid justify-center gap-8">
                <!-- Border animation Here -->
                <div style="z-index: 100">
                  <a @click="openLinkInNewTab('https://github.com/Tzyber/aboutme')"
                     class="flex cursor-pointer flex-col  items-center bg-white  border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:hover:bg-gray-700 relative border  before:absolute before:-bottom-2 before:-right-2 before:h-4 before:w-4 before:border-b before:border-r before:transition-all before:duration-300 before:ease-in-out after:absolute after:-top-2 after:-left-2 after:h-4 after:w-4 after:border-t after:border-l after:transition-all after:duration-300 after:ease-in-out hover:before:h-[calc(100%+16px)] hover:before:w-[calc(100%+16px)] hover:after:h-[calc(100%+16px)] hover:after:w-[calc(100%+16px)]">
                    <img class="object-cover w-full rounded-t-lg  md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                         src="../assets/aboutme.jpg" alt="" style="height: 100%">
                    <div class="flex flex-col justify-between p-4 leading-normal">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">First simple
                        Portfolio</h5>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">My very first portfolio thrown
                        together with some scss</p>
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
                </div>
                <a @click="openLinkInNewTab('https://github.com/Tzyber/twitchChatBot')"
                   class="flex cursor-pointer flex-col  items-center bg-white  border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:hover:bg-gray-700 relative border  before:absolute before:-bottom-2 before:-right-2 before:h-4 before:w-4 before:border-b before:border-r before:transition-all before:duration-300 before:ease-in-out after:absolute after:-top-2 after:-left-2 after:h-4 after:w-4 after:border-t after:border-l after:transition-all after:duration-300 after:ease-in-out hover:before:h-[calc(100%+16px)] hover:before:w-[calc(100%+16px)] hover:after:h-[calc(100%+16px)] hover:after:w-[calc(100%+16px)]">
                  <img
                      class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                      src="../assets/aboutme.jpg" alt="" style="height: 100%">
                  <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">twitch Quiz
                      Chatbot</h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Simple twitch Quiz Chatbot made
                      with javascript and express</p>
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
    </div>
  </div>
</template>
