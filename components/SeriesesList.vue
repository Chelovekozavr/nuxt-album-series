<template>
  <div>
    <h2 class="mb-2">{{ title }}</h2>
    <div v-if="list.length" class="block__list block__list--serieses">
      <SeriesesListItem
        v-for="series in list"
        :key="`series-${series.id}`"
        :series="series"
      ></SeriesesListItem>
    </div>
    <div v-else>
      <p class="mb-0">Not available</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Serieses",
  props: {
    list: Array,
    title: String,
  }
}
</script>

<style scoped>

</style>
