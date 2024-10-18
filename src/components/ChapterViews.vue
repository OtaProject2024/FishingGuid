<template>
    <div class="flex justify-start">
        <div 
            class="bg-white 
                     w-8 
                     h-16 
                     border 
                     bordr-gray-300 
                     shadow-md
                     relative
                     ml-44">
        </div>
        <h1 class="text-3xl font-bold ml-4 my-4 whitespace-pre-line">{{ title }}</h1>
    </div> 
    <div class="flex justify-center">
    <p class="text-left text-1xl font-semibold leading-loose w-2/3 my-6 mb-16 whitespace-pre-line">{{ titleText }}</p>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        titleText: {
            type: String,
            required: true
        }
    }
}
</script>