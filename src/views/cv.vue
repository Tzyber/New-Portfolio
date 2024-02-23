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
            </div>
            <div class="border-b border-amber-300"></div>

            <div class="max-w-3xl mx-auto px-4 py-8">
              <div class="mb-8">
                <h2 class="text-2xl font-bold mb-2">Lebenslauf</h2>
                <p class="text-white">Hier ist mein bisheriger Werdegang:</p>
              </div>

              <div class="mb-8">
                <h3 class="text-xl font-semibold mb-2">Berufliche Erfahrung</h3>
                <div v-for="(job, index) in jobs" :key="index" class="mb-4">
                  <h4 class="text-lg font-medium">{{ job.title }}</h4>
                  <p class="text-sm text-amber-300">{{ job.company }}, {{ job.location }}</p>
                  <p class="text-sm text-amber-300">{{ job.date }}</p>
                  <ul class="list-disc list-inside">
                    <li v-for="(responsibility, i) in job.responsibilities" :key="i" class="ml-4">{{ responsibility }}</li>
                  </ul>
                </div>
              </div>

              <div class="mb-8">
                <h3 class="text-xl font-semibold mb-2">Ausbildung</h3>
                <div v-for="(education, index) in educations" :key="index" class="mb-4">
                  <h4 class="text-lg font-medium">{{ education.degree }}</h4>
                  <p class="text-sm text-amber-300">{{ education.institution }}, {{ education.location }}</p>
                  <p class="text-sm text-amber-300">{{ education.date }}</p>
                </div>
              </div>
            </div>

            <div class="border-b border-amber-300"></div>
          </div>

        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script setup>
const jobs = [
  {
    title: "Frontend Developer",
    company: "Docunite GmbH",
    location: "Wuppertal, Germany",
    date: "june 2020 - Present",
    responsibilities: [
      "Optimales Umsetzen von komplexen Werbeprojekten.",
      "Professionelles Entwickeln von Frontends mit Technologien wie Vuetify,primevue, vuejs",
      "Implementieren von responsiven HTML-Prototypen auf Basis von Entwürfen"
    ]
  },
  {
    title: "Webdesigner",
    company: "Mammut Code UG",
    location: "Solingen, Germany",
    date: "April 2019 - November 2020",
    responsibilities: [
      "Gestalten von digitalen Designs für Websites, Newsletter, Infografiken und Banner.",
      "Umsetzen von Web-Designs wie Wireframes, Webinterfaces und Webapplikationen.",
    ]
  }
];

const educations = [
  {
    degree: "Fachoberschulreife ",
    institution: "Technisches Berufskolleg Solingen",
    location: "Solingen, Germany",
    date: "2016 - 2018"
  },
];
</script>
