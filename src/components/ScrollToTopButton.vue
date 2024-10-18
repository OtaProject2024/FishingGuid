<template>
    <button 
        v-if="isVisible" 
        @click="scrollToTop" 
        class=
            "fixed 
             bottom-5 
             right-5 
             !bg-white 
             !bg-opacity-70 
             text-black 
             rounded-full 
             w-12
             h-12
             shadow-lg 
             !transition-opacity 
             duration-300 
             hover:!bg-gray-300 
             hover:!bg-opacity-90" 
        aria-label="Scroll to top"
    >
      ↑
    </button>
</template>
  
<script>
  export default {
    data() {
      return {
        isVisible: false,
      };
    },
    methods: {
      scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
      checkScroll() {
        this.isVisible = window.scrollY > 100;
      },
    },
    mounted() {
      window.addEventListener('scroll', this.checkScroll);
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.checkScroll);
    },
  };
</script>