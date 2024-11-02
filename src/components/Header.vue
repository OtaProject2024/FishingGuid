<template>
  <header
    class="w-full
           top-0
           left-0
           right-0
           header-background">
    <nav
      class="flex
             items-center
             justify-end
             md:space-x-20
             space-x-4
             pt-2
             pr-5">
      <router-link to="/" class="text-black text-lg md:text-2xl lg:text-3xl font-bold">ホーム</router-link>
      <router-link to="/#Fish" class="text-black text-lg md:text-2xl lg:text-3xl font-bold">釣りについて</router-link>
      <router-link to="/#How-To" class="text-black text-lg md:text-2xl lg:text-3xl font-bold">釣り方</router-link>
      <img src="@/assets/img/logo.png" alt="Fish" class="w-16 md:w-24">
    </nav>
  </header>
</template>
