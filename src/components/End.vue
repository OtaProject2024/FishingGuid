<template>
  <div class="flex justify-center">
    <p class="text-left text-1xl font-semibold leading-loose w-2/3 my-6 mb-16 whitespace-pre-line overflow-hidden break-words">
      <span v-for="(part, index) in formattedText" :key="index">
        <a 
          v-if="isValidUrl(part)" 
          :href="part" 
          class="text-blue-500 underline" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          {{ part }}
        </a>
        <span v-else>{{ part }}</span>
      </span>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    titleText: {
      type: String,
      required: true,
    },
  },
  computed: {
    formattedText() {
      // URLの正規表現を使用してテキストを分割
      const urlPattern = /(https?:\/\/[^\s]+)/g;
      return this.titleText.split(urlPattern);
    },
  },
  methods: {
    isValidUrl(text) {
      // シンプルなURLチェック
      return /https?:\/\/[^\s]+/.test(text);
    },
  },
};
</script>

<style scoped>
/* ここでオーバーフローを防ぐためのスタイルを追加 */
.overflow-hidden {
  overflow: hidden; /* オーバーフローを隠す */
}
.break-words {
  overflow-wrap: break-word; /* 単語の折り返しを許可 */
  word-break: break-all; /* 長い単語を折り返す */
}
</style>
