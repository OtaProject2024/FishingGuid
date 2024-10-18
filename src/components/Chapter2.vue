<template>
    <div>
        <div class="flex justify-start">
            <div class="bg-white w-8 h-16 border bordr-gray-300 shadow-md relative ml-44"></div>
            <h1 class="text-3xl font-bold ml-4 my-4 whitespace-pre-line">{{ title }}</h1>
        </div>
        <div class="flex justify-center">
            <p class="text-left text-1xl font-semibold leading-loose w-2/3 my-6 mb-16 whitespace-pre-line">
                <span v-for="(part, index) in formattedText" :key="index">
                    <!-- ローカルの画像かどうかを判定して挿入 -->
                    <img 
                        v-if="isLocalImage(part)" 
                        :src="imagePaths[part]" 
                        class="block my-4 w-1/2 h-auto mx-auto"
                        alt="Local Image"/>
                    <span v-else>{{ part }}</span>
                </span>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        titleText: {
            type: String,
            required: true,
            default: ""
        }
    },
    data() {
        return {
            imagePaths: {}
        };
    },
    computed: {
        formattedText() {
            // テキストを改行と画像パスで分割
            const imgPattern = /\[img:(.*?)\]/g; // プレースホルダーパターン [img:example.jpg]
            return this.titleText.split(imgPattern);
        }
    },
    methods: {
        isLocalImage(part) {
            // 画像プレースホルダーかどうかを判定
            return /\.(jpg|jpeg|png|gif)$/.test(part);
        },
        async loadImages() {
            // 画像のパスをインポート
            const images = import.meta.glob('@/assets/views/*.{jpg,jpeg,png,gif}');
            for (const path in images) {
                const fileName = path.split('/').pop(); // ファイル名を取得
                // 正しいURLを取得するために await で非同期インポート
                const module = await images[path]();
                this.imagePaths[fileName] = module.default; // URLを取得
            }
        }
    },
    mounted() {
        // コンポーネントがマウントされたときに画像をロード
        this.loadImages();
    }
}
</script>
