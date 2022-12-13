<template>
  <div class="card pa-2 d-flex flex-column justify-space-between rounded">
    <p class="mb-2 card__title card__title--teaser">{{ teaser.id}}. {{teaser.title_bold }}</p>
    <v-btn :href="teaser.url" small>Link</v-btn>
  </div>
</template>

<script>
export default {
  name: "TeasersListItem",
  props: {
    teaser: Object
  }
}
</script>
