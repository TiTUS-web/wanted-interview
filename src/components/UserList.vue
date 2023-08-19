<template>
  <v-col
      cols="12"
      md="4"
  >
    <v-card
      max-width="450"
      class="mx-auto"
    >
      <v-list three-line>
        <v-subheader>
          List
        </v-subheader>

        <transition-group name="fade" tag="div">
            <User
                v-for="(user, index) in displayUsers"
                :user="user"
                :users-length="displayUsers.length"
                :index="index"
                :key="user.address"
            />
        </transition-group>
      </v-list>

      <v-overlay :value="isLoading" absolute>
        <v-progress-circular indeterminate color="primary"></v-progress-circular>
      </v-overlay>
    </v-card>
  </v-col>
</template>

<script>
import {mapState} from "vuex";
import User from "@/components/User";

export default {
  name: 'UserList',
  components: {
    User,
  },
  created() {
    this.$store.dispatch('getUsers');
  },
  computed: {
    ...mapState({
      isLoading: state => state.isLoading,
      users: state => state.users,
      filteredUsers: state => state.filteredUsers,
    }),
    displayUsers() {
      return this.filteredUsers ? this.filteredUsers : this.users;
    },
  },
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
