<template>
    <div class="animate-fade-in">
        <Header />
        <Title title="ワカサギ釣り" />
        <p class="text-right">（ライター：まひ）</p>

        <div>
            <!-- 切り替えボタン -->
            <div class="flex justify-center text-2xl font-semibold mb-6">
                <button 
                    @click="showContent(1)" 
                    :class="['border shadow-md mx-6', selected === 1 ? '!bg-white border-gray-300' : 'bg-blue-500 text-white hover:bg-blue-100']"
                    class="w-40 h-12">
                    ドーム船釣り
                </button>
                <button 
                    @click="showContent(2)" 
                    :class="['border shadow-md mx-6', selected === 2 ? '!bg-white border-gray-300' : 'bg-blue-500 text-white hover:bg-blue-100']"
                    class="w-40 h-12">
                    氷上釣り
                </button>
            </div>

            <!-- コンテンツエリア -->
            <div v-if="selected === 1" class="animate-slide-in-left">
                <Method5_1 />
            </div>

            <div v-if="selected === 2" class="animate-slide-in-right">
                <Method5_2 />
            </div>
        </div>
        <Footer />
        <ScrollToTopButton />
    </div>
</template>


<style scoped>
* {
    background-color: #79CAD7;
}

.header-background {
    background: url('@/assets/img/header2.webp') no-repeat center/100% 100%;
    /* 背景画像の設定 */
    width: 100vw;
    /* 画面全体の幅に設定 */
    height: 25vh;
    /* 画面高さの1/4 */
}

.footer-background {
    background: url('@/assets/img/footer2.webp') no-repeat center/100% 100%;
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
import * as components from '@/components'
import { Method5_1, Method5_2 } from '@/views/Fishing'

export default {
    data() {
        return {
            selected: "", // デフォルトで左コンテンツを表示
        };
    },
    methods: {
        showContent(index) {
            // スライドの方向を設定
            this.selected = index;
        }
    },
    components: {
        ...components,
        Method5_1,
        Method5_2
    }
}
</script>