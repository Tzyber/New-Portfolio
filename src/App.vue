<script setup lang="ts">
import {RouterView} from 'vue-router'
import router from "@/router/router";

function routerNavigation(route: String) {
  router.push(route)
}
</script>

<template>
  <nav class="fixed top-0 z-50 w-full bg-white border-b border-white dark:bg-black dark:border-white">
    <div class="px-3 py-3 lg:px-5 lg:pl-3">
      <div class="flex items-center justify-between">
        <div class="flex items-center justify-start">
          <button  data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar"
                  aria-controls="logo-sidebar"
                  type="button"
                  class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <span class="sr-only">Open sidebar</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                 xmlns="http://www.w3.org/2000/svg">
              <path clip-rule="evenodd" fill-rule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            </svg>
          </button>
          <span class=" ml-2 self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Dominik Dörrier</span>
        </div>
        <div class="flex items-center justify-center rounded">
          <img src="https://api.netlify.com/api/v1/badges/59188988-3dcc-4be9-82e1-3f47cea36363/deploy-status"
               alt="currentStatus" width="150" height="30">
        </div>
      </div>
    </div>
  </nav>

  <aside
      id="logo-sidebar"
      class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-black dark:border-white"
      aria-label="Sidebar">
    <div class="h-full px-3 pb-4 overflow-y-auto  dark:bg-black">
      <ul class="space-y-2 font-medium" style="margin: 10px 10px 10px 10px;">
        <li>
          <a
              data-drawer-hide="logo-sidebar" @click="routerNavigation('/')"
                class="flex mb-2  justify-center flex-col  items-center   border-gray-200 rounded-lg  md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-black relative   before:absolute before:-bottom-2 before:-right-2 before:h-4 before:w-4 before:border-b before:border-r before:transition-all before:duration-300 before:ease-in-out after:absolute after:-top-2 after:-left-2 after:h-4 after:w-4 after:border-t after:border-l after:transition-all after:duration-300 after:ease-in-out hover:before:h-[calc(100%+16px)] hover:before:w-[calc(100%+16px)] hover:after:h-[calc(100%+16px)] hover:after:w-[calc(100%+16px)]">
<!--            <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">-->
            <!--              <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>-->
            <!--              <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>-->
            <!--            </svg>-->
            <span class="ml-3">Home</span>
          </a>
        </li>
        <li>
          <hr
              class="my-6 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
        </li>
        <li>
          <a>
          <a data-drawer-hide="logo-sidebar"
              @click="routerNavigation('/aboutme')"
             class="flex  justify-center flex-col  items-center   border-gray-200 rounded-lg  md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-black relative   before:absolute before:-top-2 before:-right-2 before:h-4 before:w-4 before:border-t before:border-r before:transition-all before:duration-300 before:ease-in-out after:absolute after:-bottom-2 after:-left-2 after:h-4 after:w-4 after:border-l after:border-b after:transition-all after:duration-300 after:ease-in-out hover:before:h-[calc(100%+16px)] hover:before:w-[calc(100%+16px)] hover:after:h-[calc(100%+16px)] hover:after:w-[calc(100%+16px)]">
            <!--            <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">-->
            <!--              <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>-->
            <!--            </svg>-->
            <span class="ml-3">Projects</span>
          </a>
          </a>
        </li>
      </ul>
    </div>
  </aside>
  <div class="fixed w-full h-full  overflow-auto">
    <RouterView/>
  </div>

</template>

<style scoped>

</style>
