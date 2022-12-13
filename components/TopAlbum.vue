<template>
  <div>
    <h2 class="mb-2">
      {{ title }}
    </h2>
    <div class="card rounded pt-8 px-8 pb-4">
      <img src="../assets/placeholder.svg" alt="image" class="rounded image">
      <div class="d-flex justify-space-between align-center">
        <p>{{ list.title }}</p>
        <p class="card__price">{{ list.price }} <span class="card__currency"> {{ list.currency }}</span></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopAlbum",
  props: {
    title: String,
    list: Object,
    data: Object,
  }
}
</script>

<style lang="sass" scoped>
.image
  width: 100%
</style>
