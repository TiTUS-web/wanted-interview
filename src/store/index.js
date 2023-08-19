import Vue from 'vue';
import Vuex from 'vuex';

import Api from "@/api/Api";

const $Api = new Api();

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        users: [],
        filteredUsers: null,

        isLoading: false,

        countries: ['russia', 'usa'],
        scores: ['> 20', '< 10'],
    },
    mutations: {
        getUsersStart(state) {
            state.users = [];
        },
        getUsersSuccess(state, payload) {
            state.users = payload;
        },
        getUsersFailure(state) {
            state.users = [];
        },
        filterUsers(state, { country, score }) {
            state.isLoading = true;
            // setTimeout необходим для демонстрации preloader
            setTimeout(() => {
                state.filteredUsers = state.users.filter(user => {
                    if (country && user.country !== country) {
                        return false;
                    }
                    if (score) {
                        if (score === '> 20' && Number(user.score) <= 20) {
                            return false;
                        }
                        if (score === '< 10' && Number(user.score) >= 10) {
                            return false;
                        }
                    }
                    return true;
                });
                state.isLoading = false;
            }, 500);
        }
    },
    actions: {
        getUsers(context) {
            return new Promise(resolve => {
                context.commit('getUsersStart');
                $Api
                    .getUsers()
                    .then(users => {
                        context.commit(
                            'getUsersSuccess',
                            users
                        );
                        resolve(users);
                    })
                    .catch(() => {
                        context.commit('getUsersFailure');
                    });
            });
        },
    },
});