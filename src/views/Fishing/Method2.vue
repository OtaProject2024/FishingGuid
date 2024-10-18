<template>
    <div id="app" class="animate-fade-in">
        <ScrollToTopButton />
        <Header />
        <Title title="陸上サビキ釣り" />
        <Chapter 
            title="特徴" 
            titleText=
            "サビキ釣りは、手軽に始められる海釣りで、初心者から経験者にまで幅広く楽しまれています。アジやサバ、イワシなどの群れをなす魚を狙うため、一度釣れ始めると続けて釣れることが多いのが特徴です。簡単に楽しめるため、家族連れにおすすめの釣りとなっています。"
        />
        <Chapter
            title="時期"
            titleText=
            "5月から9月が最適な時期とされています。この期間は魚が活発に活動し、特に早朝や夕方は時合いと呼ばれ魚が表層にあつ集まりやすいためよく釣れる時間帯です。"
        />
        <Chapter 
            title="準備する必要があるもの"
            titleText=
            "・釣り竿：一般的に2.4m〜3.6mの長さを使用します。初心者の方は3mがおすすめです。
            ・リール：スピニングリールを使用します。おすすめは2500番です。
            ・釣り糸(ライン)：ナイロンラインの2〜4号を使用します。おすすめは３号です。
            ・釣り針：針だけを買うのではなく、市販のサビキ釣り仕掛けを使用するのがおすすめです。夏場は特に他の魚に糸をぐるぐるにされるので5〜6個は必要です。
            ・重り：なす形おもりと呼ばれるおもりの5〜20号を使用します。波や潮の速さによって変える必要があるので、5号・10号・20号の３種類を持つのがおすすめです。
            ・アミカゴ：餌を入れるためのかごです。
            ・エサ：アミコマセを利用します。半日釣りをする場合は約1kg、1日釣りをする場合は2kgあると良いです。アミコマセには冷凍されているものと常温保存のチューブがあります。チューブタイプの方が良い匂いで、冷蔵もしなくて良いので手軽ですが、冷凍に比べると釣れにくいので、冷凍の餌を買うことをおすすめします。"
        />
        <Chapter 
            title="フィールド（釣り場）"
            titleText=
            "サビキ釣りが行える場所は、海岸近くの堤防や海釣り施設などがあります。
            これらの場所は足場が安定しているため、海釣り初心者の方でも安全に釣りを楽しむことができます。"
        />
        <Chapter 
            title="服装"
            titleText=
            "釣りをする時の服装は、日焼けを防ぐために、長袖・長ズボン・帽子が適しています。"
        />
        <Chapter 
            title="持ち物"
            titleText=
            "・タオル：手が汚れることが多いので、汚れてもいいものを持ってくると良いです。
            ・ハサミ：ラインや袋を切ったりするときに使用します。
            ・ビニール袋：ゴミや汚れてしまったものを入れる時に使用します。
            ・水汲みバケツ：海水を入れて釣った魚を入れておくのに使用します。
            ・クーラーボックス：釣った魚を持ち帰る時に使用します。氷も必要です。
            ・魚掴み用グリップ：釣った魚を掴むために必要です。手づかみもできますが、あったほうが便利です。
            ・ライフジャケット：必需品です。命を守るために自分の体にあったものを持っていきましょう。"
        />
        <Chapter 
            title="あったらいいもの"
            titleText=
            "・偏光グラス：水面の反射を抑え、魚を見やすくします。
            ・日焼け止め・帽子：屋根などがないところが多いため日差しから守るものがあると良いです。
            ・軽食：いつ魚が釣れるかわからないため、軽食があると小腹を満たすのにちょうどいいです。
            ・虫除けスプレー：蚊が多いので持っておくと便利です。
            ・小さい椅子：釣れるまで待つ釣りなので座れた方が楽です。クーラーボックスに座るのもありです。
            ・ビニール手袋：餌や釣った魚などで手が臭くなります。厚手の手袋だと切れることがなく安心です。"
        />
        <Chapter 
            title="タックル図" 
            titleText="[img:tackle2.jpg]"
        />
        <Chapter 
            title="道具について"
            titleText=
            ""
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