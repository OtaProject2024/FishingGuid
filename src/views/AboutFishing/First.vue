<template>
    <div id="app" class="animate-fade-in">
        <ScrollToTopButton />
        <Header />
        <Title title="初心者はこちら" />
        <div>
            <!--釣りの種類の説明とページリンクボタン-->
            <div class="flex justify-start">
                <div class="!bg-white w-8 h-16 border border-gray-300 shadow-md relative md:ml-44 ml-4"></div>
                <h1 class="md:text-3xl text-2xl font-bold ml-4 my-4 whitespace-pre-line">釣りの種類</h1>
            </div>
            <div class="flex justify-center">
                <p
                    class="text-left text-1xl font-semibold leading-loose md:w-2/3 w-full my-6 mb-12 whitespace-pre-line px-4 md:px-0">
                    大きく分けて2つ<br><br>

                    　- 餌を釣る餌釣り<br>
                    <button @click="goToPage('/Method1')"
                        class="border !bg-white px-4 py-2 mx-4 my-4 rounded hover:!bg-gray-200">アジ釣り</button>
                    <button @click="goToPage('/Method2')"
                        class="border !bg-white px-4 py-2 mx-4 my-4 rounded hover:!bg-gray-200">陸上サビキ釣り</button>
                    <button @click="goToPage('/Method4')"
                        class="border !bg-white px-4 py-2 mx-4 my-4 rounded hover:!bg-gray-200">海上釣り</button>
                    <button @click="goToPage('/Method5')"
                        class="border !bg-white px-4 py-2 mx-4 my-4 rounded hover:!bg-gray-200">ワカサギ釣り</button><br>

                    　- 擬似餌（ルアー）を使うルアー釣り<br>
                    <button @click="goToPage('/Method3')"
                        class="border !bg-white px-4 py-2 mx-4 my-4 rounded hover:!bg-gray-200">ニジマス釣り</button>
                </p>
            </div>

            <!--釣りの種類紹介の画像の配置-->
            <p class="text-center font-bold -mb-4">＜海＞</p>
            <div class="flex m-6 space-x-6 justify-center text-center font-bold">
                <div class="w-1/3 aspect-w-4 aspect-h-3">
                    <p>堤防</p>
                    <img src="@/assets/img/image3.webp" alt="堤防釣り" class="w-full h-full object-cover">
                </div>
                <div class="w-1/3 aspect-w-4 aspect-h-3">
                    <p>船</p>
                    <img src="@/assets/img/image2.webp" alt="船釣り" class="w-full h-full object-cover">
                </div>
                <div class="w-1/3 aspect-w-4 aspect-h-3">
                    <p>磯</p>
                    <img src="@/assets/img/image5.webp" alt="磯釣り" class="w-full h-full object-cover">
                </div>
            </div>
            <p class="text-center font-bold mt-10 -mb-4">＜川、池、湖＞</p>
            <div class="flex m-6 space-x-6 justify-center text-center font-bold mb-20">
                <div class="w-1/3 aspect-w-4 aspect-h-3">
                    <p>渓流</p>
                    <img src="@/assets/img/image4.webp" alt="渓流釣り" class="w-full h-full object-cover">
                </div>
                <div class="w-1/3 aspect-w-4 aspect-h-3">
                    <p>人工池</p>
                    <img src="@/assets/img/image1.webp" alt="人口池釣り" class="w-full h-full object-cover">
                </div>
            </div>

            <!--TODO:紐の結び方と動画を追加-->
            <div class="flex justify-start">
                <div class="!bg-white w-8 h-16 border border-gray-300 shadow-md relative md:ml-44 ml-4"></div>
                <h1 class="md:text-3xl text-2xl font-bold ml-4 my-4 whitespace-pre-line">紐の結び方</h1>
            </div>
            <!-- YouTube動画の埋め込み -->
            <div class="flex justify-center w-full">
                <div class="relative w-full max-w-2xl mx-4 my-6" style="aspect-ratio: 16 / 9;"> <!-- アスペクト比を保持 -->
                    <iframe class="absolute top-0 left-0 w-full h-full"
                        src="https://www.youtube.com/embed/bZIYU4eEqbA?si=id9QbH6CmLP4s5Cf" title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                    </iframe>
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
    /* ヘッダー */
    background: url('@/assets/img/header2.webp') no-repeat center/100% 100%;
    /* 背景画像の設定 */
    width: 100vw;
    /* 画面全体の幅に設定 */
    height: 25vh;
    /* 画面高さの1/4 */
}

.footer-background {
    /* フッター */
    background: url('@/assets/img/footer2.webp') no-repeat center/100% 100%;
    width: 100vw;
    height: 15vh;
}

@media (max-width: 768px) {

    /* レスポンシブ対応 */
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

export default {
    components: {
        ...components,
    },
    methods: {
        goToPage(route) {
            this.$router.push(route);
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
        const iframes = document.querySelectorAll('iframe.lazy-load');

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const iframe = entry.target;
                    iframe.src = iframe.getAttribute('data-src'); // data-srcからsrcに設定
                    iframe.classList.remove('lazy-load'); // 遅延読み込みのクラスを削除
                    observer.unobserve(iframe); // 監視を停止
                }
            });
        }, { threshold: 0.1 }); // 10%が表示されたときに読み込みを開始

        iframes.forEach(iframe => {
            observer.observe(iframe); // 各iframeを監視
        });
    });
</script>