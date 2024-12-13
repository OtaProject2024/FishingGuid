<template>
    <div v-if="isVisible" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
        @click="closeModal">
        <img :src="imageSrc" class="max-w-full max-h-full" @click.stop>
    </div>
</template>

<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}
.modal {
    position: relative;
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 1001;
    max-width: 90%;
    max-height: 90%;
    overflow: auto;
}
</style>

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