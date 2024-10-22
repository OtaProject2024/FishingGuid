<template>
    <div id="app" class="animate-fade-in">
        <ScrollToTopButton />
        <Header />
        <Title title="ルール・マナーについてみてみる" />
        <Chapter 
            title="ルール" 
            titleText=
            "・立入禁止場所には入らない
            ・割り込みをしない
            ・釣り糸が絡むことがあるので、間隔を空けて釣る
            ・大きな音を出さない、騒がない
            ・ライトで海を照らさない
            ・釣り場に持ち物を広げない
            ・周囲の安全を確認しよう
            ・持ち帰る魚以外はリリースする
            ・漁船や漁具に近づかない
            ・小さい魚はリリースする
            ・汚した釣り場は洗い流す
            ・ゴミは持ち帰る"
        />
        <Chapter 
            title="マナー"
            titleText="
            釣り場では間隔を開ける→海は常に変化するため仕掛けが横に流されてしまうことが多々あります。
            間隔を取りライントラブル（糸の絡まり）を回避するようにしましょう。

            挨拶をする→隣の方と糸が絡まるトラブルは多くあります。
            互いに気持ちよく釣りができるように、挨拶はするようにしましょう。" 
        />
        <End 
            titleText=
            "参考文献
            [1]釣り初心者に知ってほしいルールとマナー　SHIMANO
            https://fish.shimano.com/ja-JP/content/beginners/fishing/manners/index.html
            （2024年10月16日アクセス）"
        />
        <Footer />
    </div>
</template>

<style scoped>
* {
    background-color: #79CAD7;
}

.header-background {
    background: url('@/assets/img/header2.png') no-repeat center/100% 100%;
    /* 背景画像の設定 */
    width: 100vw;
    /* 画面全体の幅に設定 */
    height: 25vh;
    /* 画面高さの1/4 */
}

.footer-background {
    background: url('@/assets/img/footer2.png') no-repeat center/100% 100%;
    width: 100vw;
    height: 15vh;
}
</style>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Title from '@/components/Title.vue'
import Chapter from '@/components/Chapter.vue'
import End from '@/components/End.vue'

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