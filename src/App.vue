<template>
  <v-app>
    <v-main>
      <ContentBlock/>
    </v-main>

    <v-footer app v-bind="localAttrs">
      <Footer />
    </v-footer>
  </v-app>
</template>

<script>
import ContentBlock from '@/views/ContentBlock.vue';
import Footer from '@/ui/Footer.vue';

export default {
  name: 'App',

  components: {
    ContentBlock,
    Footer
  },

  computed: {
    localAttrs () {
      const attrs = {}

      attrs.absolute = true
      attrs.fixed = false

      return attrs
    },
  },
};
</script>