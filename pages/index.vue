<template>
  <div class="page d-flex flex-column pa-14">
    <div
      v-for="(data, index) in structuredData"
      :key="`block-${index}`"
      class="mb-8"
    >
      <component :is="data.component" :title="`#${index+1} ${data.blockTitle}`" :list="data.list"></component>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      structuredData: [],
    }
  },
  async fetch({ store }) {
    await store.dispatch('catalog/initPage');
  },
  created() {
    this.structuredData = this.$store.getters['catalog/structuredPageData'];
  },
}
</script>
