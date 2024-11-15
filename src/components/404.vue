<template>
    <div class="flex items-center justify-center h-screen bg-gray-100">
        <div class="text-center">
            <h1 class="text-6xl font-bold font-serif">404</h1>
            <h2 class="font-serif">NOT FOUND</h2>
            <p class="mt-4 text-lg text-gray-700 font-serif">お探しのページは見つかりませんでした。</p> <router-link
                to="/" class="mt-6 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">トップページに戻る</router-link>
        </div>
    </div>
</template>
<script>export default { name: 'NotFound' } </script>
<style scoped>
 /* Add any additional styles here if needed */
</style>