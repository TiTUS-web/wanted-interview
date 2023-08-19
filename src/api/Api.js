import users from '@/data/users.json'
class Api {
    getUsers() {
        return new Promise((resolve, reject) => {
            return fetch('data/users.json')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed to fetch mock data.');
                    }

                    resolve(users.data)
                })
                .catch(error => {
                    reject(error);
                });
        })
    }
}

export default Api;