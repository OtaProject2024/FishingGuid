<template>
    <div class="animate-fade-in">
        <ScrollToTopButton />
        <Header />
        <Title title="ニジマス釣り" />
        <p class="text-right">（ライター：木下梓月）</p>
        <Chapter 
            title="特徴" 
            titleText=
            "[img:image4-4.jpg]
            ニジマスは釣りの対象魚として、世界中で人気の魚です。今回は初心者にも優しい、管理釣り場で行うルアーフィッシング（エリアトラウト）について説明していきたいと思います。"
        />
        <Chapter
            title="時期"
            titleText="管理釣り場：1年中（釣り場によって異なる）"
        />
        <Chapter 
            title="準備する必要があるもの"
            titleText=
            "釣り道具(管理釣り場ならほとんどレンタル可)
            管理釣り場に行く際はレンタルが可能な釣り道具が多いですが、必ず行く場所で何をレンタルしているのか確認してください。

            ・釣り竿：初心者には、スピニングロッドと呼ばれる竿が使いやすいです。長さは1.8メートルくらいがおすすめです。エリアトラウト専用のロットを使用すると魚のあたり(魚がエサを突いたり、のみ込んだりするときに竿先に現われる動き)がわかりやすくなります
            [img:image3-5.jpg]
            ・リール：釣り糸を巻き取る道具です。釣り竿と一緒にセットで使います。初心者にはスピニングリールの2000番のものが簡単で扱いやすいです。
            [img:image3-4.jpg]
            ・ルアー： ルアーは魚を引き寄せるための人工的なエサのようなもので、魚の注意を引くことができます。ニジマス釣りには、スプーンやミノー、プラグと呼ばれるルアーがよく使われます。
            [img:image3-2.jpg]
            ・スプーン
            [img:image3-6.jpg]
            ルアー色々(シンキング、ペンシル、プラグ、ミノー)

            ・ビク（スカリ）：釣った魚を一時的に保管するための容器です。水に浮かべて使います。ただし、場所によっては禁止のところもあるため、調べる必要があります。
            [img:image3-1.jpg]
            ・ラバーコーティングネット（網）：魚を傷つけないように設計されたネットです。釣り上げた魚をキャッチやリリースする時に使用します。釣り場によってはレンタルが可能です。

            ・クーラーボックス(氷・保冷剤): 釣った魚を新鮮に保つために、氷を入れたクーラーボックスがあると便利です。釣った魚を持ち帰る場合は必ず必要になります。

            ・ハサミ：糸や仕掛を切るために必要です。"
        />
        <Chapter 
            title="フィールド"
            titleText=
            "①管理釣り場とは
            主にマス類を放流した有料の「釣り堀」の一種です。沢山の魚がいるので、確実に魚を釣ることができます。
            ②「ポンド型」と「渓流型」の2種類がある
            ポンド型は水を溜めた池に魚を放流した管理釣り場で、渓流型は自然の河川を利用して、敷地内を流れる川に放流された魚を釣る管理釣り場となっています。
            ③初心者におすすめなのは「ポンド型」
            「ポンド型」は市街地に近いことが多いためアクセスがよく、また足場が安定しているため初心者の方に釣りやすい場所となっています。"
        />
        <Chapter 
            title="あったらいいもの"
            titleText=
            "・偏光サングラス：目の怪我(慣れていなかったりすると自分に向かって勢いよくルアーが飛んで切れる場合がある)を予防することもでき、水中の魚の様子も見えるので格段に釣りやすくなります。偏光タイプがなければサングラスでも目を守るという観点では問題ありません。
            ・日焼け止め：焼けます。
            ・虫除けスプレー: 自然の中には虫が多いので、持って行くと安心です。
            ・タオル：汚れを拭くために必要です。
            ・ビニール袋：釣り場で出たゴミを入れるのに必要です。また釣った魚をビニール袋に入れて持ち帰るとクーラーボックスの中が汚れないためオススメです。
            ・ウェットシート：エサや魚で手が汚れた時、釣り場でご飯を食べる時にあれば快適です。"
        />
        <Chapter 
            title="タックル図" 
            titleText="[img:tackle3.png]"
        />
        <Chapter 
            title="服装"
            titleText=
            "基本的に汚れたり濡れたりしても大丈夫なものを着用するのがおすすめです。釣りバリでの思わぬケガを避けることができることと、山間部ではハチなどの被害を避けることの意味で、半袖は避けた方が望ましいです。夏の場合はスポーツ用のアンダーシャツを着用するなどがおすすめです。"
        />
        <Chapter 
            title="餌（餌の付け方も）"
            titleText=
            "餌を使う場合は、いくらやミミズを針に通します。擬似餌を使用する場合はルアーをつけます。"
        />
        <Chapter 
            title="値段"
            titleText=
            "東京都・奥多摩フィッシングセンターに行くことを想定しています。ここは釣り上げた魚を「さばき場」へ持っていくとスタッフが無料でさばいて竹串（別料金：1本 30円）に刺して塩をふって渡してくれるので、バーベキューコンロ小をレンタルすればその場で食べることもできます。

            レンタルの場合(※初級者エサ釣り場を参考にしています)
            遊漁券：3900円(釣竿込み、釣りの修理無料)
            釣り餌：500円"
        />
        <Chapter 
            title="釣り方"
            titleText=
            "①水面に向かって穏やかに竿を振ってルアーを投げます。まっすぐ振りかぶって投げる事をイメージしてください。
            ②餌が水中に沈んだら、ゆっくりと糸を巻き続けます。ニジマスが食いつくまで、リールを巻くのを繰り返します。
            ③魚が餌に食いつくと、竿先が動いたり、ラインが引っ張られます。これを「アタリ」と言います。アタリがあったら、すぐに竿を軽く引いて針をニジマスの口にしっかりと掛けます。
            ④ニジマスが掛かったら、糸を緩めないように注意しながら冷静にリールを巻いて魚を手元に寄せます。魚が暴れるときは、無理に引っ張らず、リールを緩めてください。
            ⑤ニジマスが近づいてきたら、ラバーコーティングネットで魚をすくい上げます。リリースする場合は、魚は素手で触れないように注意しながら優しく針を外してあげましょう。（素手で直接触ってしまうと体温で魚がやけどして死んでしまいます。）"
        />
        <Chapter 
            title="釣れる魚の種類"
            titleText=
            "ニジマス
            [img:image4-8.jpg]
            ジャガートラウト
            [img:image4-7.jpg]
            ブルックトラウト
            [img:image4-6.png]
            ヤマメ
            [img:image4-5.jpg]

            
            （危険な魚や小さい魚リリースの注意喚起）
            食べられない分の魚は素手で触れないように注意し、リリースしましょう。（素手で直接触ってしまうと体温で魚がやけどして死んでしまいます。）"
        />
        <End 
            titleText=
            "参考資料
            okp (2022) 釣りに興味がある人に伝えたい、「管理釣り場」はいいぞ。
            いろんなタイプの釣りをしてきた私が今も気晴らしに楽しんでいるわけ　みんなのマネ活 
            https://www.rakuten-card.co.jp/minna-money/fun/article_2206_90345/#h_73752
            (2024年9月1日アクセス)

            Honda釣り倶楽部 (2020) 初めての「管理釣り場のニジマス釣り」入門
            https://www.honda.co.jp/fishing/enjoy/season/season-202004/
            (2024年9月1日アクセス)
            
            Honda釣り倶楽部 (2011) ニジマスの特徴
            https://www.honda.co.jp/fishing/picture-book/nijimasu/trap01/
            (2024年9月1日アクセス)

            SHIMANOニジマスの特徴と釣り方　釣り初めてみたい人を徹底的にサポート 
            https://fish.shimano.com/ja-JP/content/beginners/fish/nijimasu/index.html
            (2024年9月1日アクセス)

            Honda釣り倶楽部 (2020) 開放的な水辺でリフレッシュ！おすすめのニジマス釣り場10選
            https://www.honda.co.jp/fishing/news/news-20200407/
            (2024年9月1日アクセス)

            つり人 TSURIBITO online (2023) ニジマス釣り初心者入門｜仕掛け・釣り方やタックル、釣り場など
            https://web.tsuribito.co.jp/beginner/nijimasu-fishing
            (2024年9月1日アクセス)
            
            魚速タックルDB（2022）　タックル図・仕掛け図作成
            https://tackledb.uosoku.com/generator
            （2024年/9月/1日アクセス）"
        />
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
import ScrollToTopButton from'@/components/ScrollToTopButton.vue'

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