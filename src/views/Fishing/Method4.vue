<template>
    <div class="animate-fade-in">
        <ScrollToTopButton />
        <Header />
        <Title title="海上釣り掘" />
        <p class="text-right">（ライター：虫）</p>
        <Chapter 
            title="特徴" 
            titleText=
            "海上釣り掘は名前のとおり、海の上に作られた釣り掘です。波の穏やかな湾や防波堤の内側に口の字の形に木製のイカダが浮かべ、その中に網を張ってイケスを作ります。その中には釣って楽しく、食べて美味しい魚たちを泳がせています。足場が揺れないところが多いので、海の釣りを手軽に楽しむことができます。船酔いの心配もほとんどなく、個人でもグループでも安心して楽しめます。ただし、釣り堀には一般的な海上釣り堀の内容について紹介させていただきます。"
        />
        <Chapter
            title="時期"
            titleText="一年中行うことができます。ただし、季節によって釣れる魚が変わってくる場合があります。"
        />
        <Chapter 
            title="自分で必ず準備する必要があるもの"
            titleText=
            "・タオル
            （濡れた手を拭いたり、魚を掴んだりするのに便利。2、3枚用意したい)"  
        />
        <Chapter 
            title="プランに含まれているもの"
            titleText=
            "・ライフジャケット（救命胴衣）
            　（万一落水した時に安全を確保する)"
        />
        <Chapter 
            title="有料でレンタルできるもの"
            titleText=
            "・長靴
            （足元は汚れやすく、魚の血やエサが付くと取れにくいので、お気に入りの靴は避けたい）
            ・ハサミ
            （仕掛けや釣り糸を切る時によく使う）
            ・プライヤー
            （魚に掛かった釣り針を外せる）
            ・発泡スチロール
            ・竿（竿の長さは約３．２メートルの船竿）
            ・エサ
            　（よく使われるエサは、大きく分けて3種類。「練りエサ」「エビやオキアミ」「イワシなどの小魚」）
            ・氷
            ・折りたたみ椅子など"
        />
        <Chapter 
            title="あったらいいもの"
            titleText=
            "食べ物
            （朝食、昼食にサッと食べれるパン、おにぎりが人気。お弁当を注文できる釣り堀もある）
            飲み物
            （夏場はかなり汗をかくので、一人２ℓは必要）
            パイプ椅子
            （ほとんどの人が座って釣っています。ピクニック用折りたたみパイプ椅子があると便利です。）"
        />
        <Chapter 
            title="タックル図" 
            titleText="[img:tackle4.webp]"
        />
        <Chapter 
            title="服装"
            titleText=
            "オールシーズン長袖がおすすめです。
            特に、夏場は日差しが強いので長袖シャツがおすすめです。
            女性は帽子、日焼け止めクリームも必需品です。
            海水なのでスポーツシューズなど洗える靴が良いです。
            [img:image4-1.webp]"
        />
        <Chapter 
            title="費用"
            titleText=
            "海上釣り堀には、大きく分けて「釣り放題方式」と「買い取り方式」の2種類があります。

            釣り放題方式→入場料を支払うことで制限時間内であればどれだけ釣っても追加料金がかからない仕組みのことです。料金は大人で10000〜13000円前後になります。
            買い取り方式→釣れた魚の量に対して料金が発生する仕組みのことです。思っていた以上に大漁だった場合に買取料金が高くなってしまうケースも考えられるので釣り過ぎには注意が必要です。魚ごとに値段が決まっています。例えば、タイだと1尾あたり2000円、カンパチだと1kgあたり1000円という価格設定になっています。"
        />
        <Chapter 
            title="釣り方"
            titleText=
            "針に餌を付け、仕掛けを水中に投入します。
            　ウキ仕掛けの場合、ウキが見やすい位置に来るように調整します。ウキが沈むなどの動きを見て、魚が食いついたことを確認します。ウキが消えたら、素早く竿を立てて魚を掛けます。
            　底釣りの場合は、餌が底に届くように設定します。ウキが沈むなどの動きを見て、魚が食いついたことを確認します。竿先に当たりが出るのを待ち、しっかりとした当たりがあったら竿を立てて魚を掛けます。
            　魚が掛かったら、リールを使ってゆっくりと引き寄せます。魚が暴れる場合は、無理に引かず、竿をしならせて魚の動きを吸収します。魚が水面に近づいたら、タモ（網）を使って慎重に取り込みます。タモを使う際は、魚が暴れないように注意します。"
        />
        <Chapter 
            title="釣れる魚の種類とリリース"
            titleText=
            "代表的な魚といえばマダイと青もの（ブリ、カンパチ、ヒラマサ）。このほかに季節や地域によって、シマアジ、ヒラメ、イサキ、クエ、スズキ、イシガキダイなどもいる。魚は種類によって、好む居場所やエサに大まかな傾向がある。
            [img:image4-2.webp]
            　リリースとは、魚を傷つけずに水中に戻す行為のことです。海上釣り堀では、キープした後でのリリースは認められてません。"
        />
        <End 
            titleText=
            "参考文献
            Honda釣り倶楽部(2023/9)　海上釣り堀　徹底攻略 
            https://www.honda.co.jp/fishing/enjoy/season/season-201612/#stepTop
            (2024年/9月/20日アクセス)

            FISHING 遊 So enjoy your FISHING world.(2011/4/1)　ENJOY FISHING 海上釣堀編
            https://fishing-you.com/wp-content/uploads/2016/07/enjoy_18kaijyoutsuribori.pdf
            (2024年/9月/20日アクセス)

            ANA(2021/3/30)　初心者でも高級魚が釣れる「海上釣り堀」入門
            https://www.ana.co.jp/travelandlife/article/000830/#:~:text=%E6%B5%B7%E4%B8%8A%E9%87%A3%E3%82%8A%E5%A0%80%E3%81%A7%E3%80%81%E6%9C%80%E3%82%82%E5%A4%9A%E3%81%8F,%E3%81%8C%E6%94%BE%E3%81%95%E3%82%8C%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82
            (2024年/9月/20日アクセス)

            ひるが海上釣堀(2023/4/3)　ひるが 海上 釣堀 魚の買取価格について
            https://blog.goo.ne.jp/hiruga-turi/e/b216dd1cc9e662f4478b55acd7d168dc
            (2024年/9月/20日アクセス)
            
            魚速タックルDB（2022）　タックル図・仕掛け図作成
            https://tackledb.uosoku.com/generator
            (2024年/9月/20日アクセス)"
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