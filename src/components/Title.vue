<template>
    <h1 class="flex text-5xl font-bold my-24 justify-center text-center">{{ title }}</h1>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        }
    }
}
</script>