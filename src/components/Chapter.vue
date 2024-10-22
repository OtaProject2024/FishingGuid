<template>
    <div>
        <div class="flex justify-start">
            <div class="bg-white w-8 h-16 border border-gray-300 shadow-md relative ml-44"></div>
            <h1 class="text-3xl font-bold ml-4 my-4 whitespace-pre-line">{{ title }}</h1>
        </div>
        <div class="flex justify-center">
            <p class="text-left text-1xl font-semibold leading-loose w-2/3 my-6 mb-16 whitespace-pre-line">
                <span v-for="(part, index) in formattedText" :key="index">
                    <template v-if="isLocalImage(part)">
                        <img 
                            :src="imagePaths[part]" 
                            class="block my-4 w-1/2 h-auto mx-auto cursor-pointer"
                            alt="Local Image"
                            @click="openModal(imagePaths[part])"/>
                    </template>
                    <template v-else-if="isLink(part)">
                        <a :href="getLink(part)" target="_blank" class="text-blue-600 underline">
                            {{ getLinkText(part) }}
                        </a>
                    </template>
                    <template v-else>
                        {{ part }}
                    </template>
                </span>
            </p>
        </div>
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
            const imgPattern = /\[img:(.*?)\]/g; // プレースホルダーパターン [img:example.jpg]
            const linkPattern = /\[link:(.*?)\|([^[]+)\]/g; // リンクパターン [link:URL|テキスト]
            const textWithLinks = this.titleText.split(linkPattern);
            const formattedParts = textWithLinks.flatMap(part => part.split(imgPattern));
            return formattedParts;
        }
    },
    methods: {
        isLocalImage(part) {
            return /\.(jpg|jpeg|png|gif)$/.test(part);
        },
        isLink(part) {
            return /^\[link:/.test(part);
        },
        getLink(part) {
            const match = part.match(/\[link:(.*?)\|/);
            return match ? match[1] : '';
        },
        getLinkText(part) {
            const match = part.match(/\|([^[]+)\]/);
            return match ? match[1] : '';
        },
        async loadImages() {
            const images = import.meta.glob('@/assets/views/*.{jpg,jpeg,png,gif}');
            for (const path in images) {
                const fileName = path.split('/').pop();
                const module = await images[path]();
                this.imagePaths[fileName] = module.default;
            }
        },
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
        this.loadImages();
    }
}
</script>

<style scoped>
.cursor-pointer {
    cursor: pointer; /* 画像にカーソルポインタを追加 */
}
</style>
