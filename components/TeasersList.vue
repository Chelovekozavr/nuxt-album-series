<template>
  <div>
    <h2 class="mb-2">{{ title }}</h2>
    <div class="block__list block__list--teasers">
      <TeasersListItem
        v-for="teaser in list"
        :key="`teaser-${teaser.id}`"
        :teaser="teaser"
      >
      </TeasersListItem>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeasersList",
  props: {
    title: String,
    list: Array,
  }
}
</script>

<style scoped>

</style>
