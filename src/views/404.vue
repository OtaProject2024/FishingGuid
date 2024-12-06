<template>
    <div class="flex items-center justify-center h-screen bg-[#79CAD7]">
        <div class="text-center text-white">
            <h1 class="text-6xl font-bold font-serif">404</h1>
            <h2 class="font-seri">NOT FOUND</h2>
            <p class="mt-4 text-lg font-serif text-gray-600">お探しのページは見つかりませんでした。</p> 
            <router-link to="/" class="mt-6 inline-block px-4 py-2 border shadow-md border-gray-300 text-white hover:bg-blue-100 text-1xl">トップページに戻る</router-link>
        </div>
    </div>
</template>
<script>export default { name: 'NotFound' } </script>
<style scoped>
 /* Add any additional styles here if needed */
</style>