<template>
  <div class="card d-flex flex-column justify-space-between pa-2 rounded">
    <p class="card__title mb-2">{{ series.id }}. {{ series.name }}</p>
    <div>
      <p class="mb-0">Albums: {{ series.albums_count }}</p>
      <p class="card__price mb-0">{{ series.lowest_price }}<span class="card__currency">€</span></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SeriesesListItem",
  props: {
    series: Object
  }
}
</script>
