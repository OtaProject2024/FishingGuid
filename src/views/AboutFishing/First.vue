<template>
    <div id="app" class="animate-fade-in">
        <ScrollToTopButton />
        <Header />
        <Title title="まずはこちら" />
        <div>
                <Chapter 
                    title="釣りの種類" 
                    titleText=
                    "大きく分けて2つ
                    　-餌を釣る餌釣り
                    　-擬似餌（ルアー）を使うルアー釣り
                    "
                />
            <p class="text-center font-bold -mb-4">＜海＞</p>
            <div class="flex m-6 space-x-6 justify-center text-center font-bold">
                <div class="w-1/3 aspect-w-4 aspect-h-3">
                    <p>堤防</p>
                    <img src="@/assets/img/image3.jpg" alt="" class="w-full h-full object-cover">
                </div>
                <div class="w-1/3 aspect-w-4 aspect-h-3">
                    <p>船</p>
                    <img src="@/assets/img/image2.jpg" alt="" class="w-full h-full object-cover">
                </div>
                <div class="w-1/3 aspect-w-4 aspect-h-3">
                    <p>磯</p>
                    <img src="@/assets/img/image5.jpg" alt="" class="w-full h-full object-cover">
                </div>
            </div>
            <p class="text-center font-bold mt-10 -mb-4">＜川、池、湖＞</p>
            <div class="flex m-6 space-x-6 justify-center text-center font-bold mb-20">
                <div class="w-1/3 aspect-w-4 aspect-h-3">
                    <p>渓流</p>
                    <img src="@/assets/img/image4.jpg" alt="" class="w-full h-full object-cover">
                </div>
                <div class="w-1/3 aspect-w-4 aspect-h-3">
                    <p>人工池</p>
                    <img src="@/assets/img/image1.jpg" alt="" class="w-full h-full object-cover">
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<style scoped>
* {
    background-color: #79CAD7;
}

.header-background {
  background: url('@/assets/img/header2.png') no-repeat center/100% 100%; /* 背景画像の設定 */
  width: 100vw; /* 画面全体の幅に設定 */
  height: 25vh; /* 画面高さの1/4 */
}
.footer-background {
  background: url('@/assets/img/footer2.png') no-repeat center/100% 100%;
  width: 100vw;
  height: 15vh;
}
@media (max-width: 768px) {
  .header-background {
    height: 15vh;
  }
  
  .footer-background {
    height: 10vh;
  }
}
</style>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Title from '@/components/Title.vue'
import Chapter from '@/components/Chapter.vue'
import End from  '@/components/End.vue'

import ScrollToTopButton from '@/components/ScrollToTopButton.vue'

export default {
    components: {
        Header,
        Footer,
        Title,
        Chapter,
        End,
        ScrollToTopButton
    }
}
</script>