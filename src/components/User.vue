<template>
  <v-list-item>
    <v-list-item-avatar>
      <v-img @click="toggleAddress" :src="user.avatar" />
    </v-list-item-avatar>

    <v-list-item-content class="pa-0">
      <v-list-item-title>
        {{ user.title }}

        <span
            v-if="user.notifications"
            class="grey--text text--lighten-1"
        >
          {{ user.notifications }}
        </span>
      </v-list-item-title>
      <v-list-item-subtitle>
        <span class="text--primary">
          {{ user.to }} &mdash;
        </span>

        {{ user.subtitle }}
      </v-list-item-subtitle>

      <template v-if="showAddress">
        {{ user.address }}
      </template>

      <v-divider v-if="index < usersLength - 1" />
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  name: 'User',
  props: {
    user: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    usersLength: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      showAddress: false
    }
  },
  methods: {
    toggleAddress() {
      this.showAddress = !this.showAddress;
    }
  }
}
</script>