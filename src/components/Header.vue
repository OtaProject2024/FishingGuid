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
             space-x-20
             pt-2
             pr-50
             text-3xl 
             font-bold">
      <router-link to="/" class="text-black">ホーム</router-link>
      <a href="/#Fish" class="text-black">釣りについて</a>
      <a href="/#How-To" class="text-black">釣り方</a>
      <img src="@/assets/img/logo.png" alt="Fish" class="px-8">
    </nav>
  </header>
</template>
  