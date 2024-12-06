<template>
    <div id="app" class="animate-fade-in">
        <ScrollToTopButton />
        <Header />
        <Title title="単位についてみてみる" />
        <Chapter 
            title="単位"
            titleText=
            "釣りでは馴染のない単位が使用されています。
	        ・重さを表す単位
		    　　・号　オモリの重さやエギなどの大きさを表す際に使用されます。
		    　　・gグラム（kg)　魚の重さやルアーの重さどを表す際に使用される。
		    　　・oz オンス　ルアーやシンカー（おもり）の重さを表し、1ozはおよそ28gとなっています。
            　　　ブラックバス関連ではoz表示が多いです。

	        ・強度を表す単位
		    　　・lb　ライン（釣り糸）の強度表記として使われ、1lbおよそ453gとなっています。

	        ・長さを表す単位
		    　　・ft　ルアーロッドの長さの表記によく使われ、1ftは30.48cmとなっています。
		    　　・m　ロッドの長さの表記によく使われます。
		    　　・inch インチ　ルアーの長さの単位としてよく使われ、1inchは2.54cmとなっています。
		    　　・ヒロ　人が両手を伸ばした長さ（約1.5m）のことで、釣り糸を測る際などに、１ヒロ（ひとひろ）のように使われます。
		    　　・尺　1尺は約30.3cmで30cmを超えるアジなどを尺アジなどと言ったりします。"
        />
        <End titleText=
        "参考文献
        [1]井上海生（2021）今さら聞けない釣り用語のキホン：日常生活では使わない釣りの「単位」　TSURINEWS
        https://tsurinews.jp/169228/（2024年10月16日アクセス）"
        />
        <Footer />
    </div>
</template>

<style scoped>
* {
    background-color: #79CAD7;
}

.header-background {
  background: url('@/assets/img/header2.webp') no-repeat center/100% 100%; /* 背景画像の設定 */
  width: 100vw; /* 画面全体の幅に設定 */
  height: 25vh; /* 画面高さの1/4 */
}
.footer-background {
  background: url('@/assets/img/footer2.webp') no-repeat center/100% 100%;
  width: 100vw;
  height: 15vh;
}
</style>

<script>
import * as components from '@/components';
export default {
    components: {
        ...components,
    }
}
</script>