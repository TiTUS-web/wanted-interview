<template>
  <v-container>
    <v-row
        align="center"
        justify="center"
        class="ma-4"
    >
      <Logo />

      <Filters />

      <UserList />
    </v-row>
  </v-container>
</template>


<script>
import Logo from '@/ui/Logo';
import Filters from '@/components/Filters';
import UserList from '@/components/UserList';

  export default {
    name: 'ContentBlock',
    components: {
      Filters,
      UserList,
      Logo,
    },
  }
</script>
