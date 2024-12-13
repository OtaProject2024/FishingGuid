<!-- Chapter.vue -->
<template>
    <div>
        <div class="flex justify-start">
            <!-- 白の四角と章タイトル-->
            <div class="bg-white w-8 h-16 border border-gray-300 shadow-md relative md:ml-44 ml-4"></div>
            <h1 class="md:text-3xl text-2xl font-bold ml-4 my-4 whitespace-pre-line">{{ title }}</h1>
        </div>
        <div class="flex justify-center">
            <!-- 章の内容 -->
            <p class="text-left text-1xl font-semibold leading-loose md:w-2/3 w-full my-6 mb-16 whitespace-pre-line px-4 md:px-0">
                <!-- 正規表現判別で動作を分ける -->
                <span v-for="(part, index) in formattedText" :key="index">
                    <template v-if="isLocalImage(part)">
                        <!-- 画像の処理 -->
                        <img 
                            :src="imagePaths[part]" 
                            class="block my-4 w-full md:w-1/2 h-auto mx-auto cursor-pointer"
                            alt="Local Image"
                            @click="openModal(imagePaths[part])"/>
                    </template>
                    <template v-else-if="isValidUrl(part)">
                        <!-- UTLの処理 -->
                        <a 
                          :href="part" 
                          class="text-blue-500 underline" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          {{ part }}
                        </a>
                    </template>
                    <template v-else>
                        <!-- 通常テキストとして処理 -->
                        {{ part }}
                    </template>
                </span>
            </p>
        </div>
        <!-- 画像の拡大表示 -->
        <Modal v-if="isModalVisible" :imageSrc="selectedImage" :isVisible="isModalVisible" @close="closeModal"/>
    </div>
</template>

<script>
import Modal from '@/components/Modal.vue';

export default {
    components: {
        Modal,
    },
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
            imagePaths: {},
            isModalVisible: false,
            selectedImage: ''
        };
    },
    computed: {
        formattedText() {
            // URLおよびローカルファイルパスの正規表現を使用してテキストを分割
            const imgPattern = /\[img:(.*?)\]/g; // プレースホルダーパターン [img:example.webp]
            const urlPattern = /(https?:\/\/[^\s]+|\/[\w-]+(?:\/[\w-]+)+\.\w+)/g; // URLおよびローカルパスパターン
            const textWithUrls = this.titleText.split(urlPattern);
            const formattedParts = textWithUrls.flatMap(part => part.split(imgPattern));
            return formattedParts;
        }
    },
    methods: {
        isLocalImage(part) {
            // webpおよびgifとして有効かどうか判別
            return /\.(webp|webp|webp|gif)$/.test(part);
        },
        isValidUrl(text) {
            // URLおよびローカルファイルパスとして有効かどうかを判別
            return /https?:\/\/[^\s]+|\/[\w-]+(?:\/[\w-]+)+\.\w+/.test(text);
        },
        async loadImages() {
            // 画像をロードする
            const images = import.meta.glob('@/assets/views/*.{webp,webp,webp,gif}');
            for (const path in images) {
                const fileName = path.split('/').pop();
                const module = await images[path]();
                this.imagePaths[fileName] = module.default;
            }
        },
        // 画像の拡大表示処理
        openModal(imageSrc) {
            this.selectedImage = imageSrc; // クリックされた画像のパスを設定
            this.isModalVisible = true; // モーダルを表示
        },
        closeModal() {
            this.isModalVisible = false; // モーダルを非表示
            this.selectedImage = ''; // 選択された画像をリセット
        }
    },
    mounted() {
        // 画像をロード
        this.loadImages();
    }
}
</script>

<style scoped>
.cursor-pointer {
    cursor: pointer; /* 画像にカーソルポインタを追加 */
}
</style>
