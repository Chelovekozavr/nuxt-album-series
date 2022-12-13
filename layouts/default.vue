<template>
  <v-app dark>
    <v-app-bar fixed app>
      <v-btn
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        class="d-flex mr-4"
      >
        <v-icon class="mr-2">{{ item.icon }}</v-icon>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      items: [
        {
          icon: 'mdi-home',
          title: 'Home',
          to: '/'
        },
        {
          icon: 'mdi-contacts',
          title: 'Contacts',
          to: '/'
        },
        {
          icon: 'mdi-apps',
          title: 'About',
          to: '/'
        }
      ],
    }
  }
}
</script>
