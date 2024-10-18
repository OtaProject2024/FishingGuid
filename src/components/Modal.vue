<template>
    <div v-if="isVisible" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
        @click="closeModal">
        <img :src="imageSrc" class="max-w-full max-h-full" @click.stop>
    </div>
</template>

<script>
export default {
    props: {
        imageSrc: {
            type: String,
            required: true,
        },
        isVisible: {
            type: Boolean,
            required: true,
        },
    },
    methods: {
        closeModal() {
            this.$emit('close');
        },
    },
};
</script>