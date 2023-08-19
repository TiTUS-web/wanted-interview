<template>
  <v-col
      cols="12"
      md="4"
  >
    <v-select
        v-model="selectedCountry"
        @change="filterUsers"
        :items="countries"
        clearable
        label="Filter by country"
    ></v-select>

    <v-select
        v-model="selectedScore"
        @change="filterUsers"
        :items="scores"
        clearable
        label="Filter by score"
    ></v-select>
  </v-col>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: 'Filters',
  data() {
    return {
      selectedCountry: '',
      selectedScore: '',
    }
  },
  computed: {
    ...mapState({
      countries: state => state.countries,
      scores: state => state.scores,
    })
  },
  methods: {
    filterUsers() {
      this.$store.commit('filterUsers', {country: this.selectedCountry, score: this.selectedScore});
    },
  }
}
</script>
