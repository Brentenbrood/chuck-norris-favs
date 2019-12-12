<template>
        <md-content v-if="jokes.length">
                <JokeItem
                    v-for="joke in jokes"
                    :key="joke.id"
                    :joke="joke"
                    v-model="selectedJokes"
                />
            <md-button
                v-if="favorites"
                class="accent"
                v-on:click="removeFromFavorites"
            >
                Remove
            </md-button>
            <md-button
                v-else
                class="md-primary"
                v-on:click="saveToFavorites"
            >
                Save
            </md-button>
        </md-content>
    <md-content v-else>
        No items found.
    </md-content>
</template>

<script>
    import JokeItem from './JokeItem.vue'

     export default {
        components: {
            JokeItem
        },
         props: {
           favorites: Boolean
         },
        data () {
            return {
                favoriteJokes: [],
                selectedJokes: [],
                jokes: []
            }
        },
        methods: {
            // Get amount of jokes from chuck norris api
            getJokes(amount){
                for( let i = 0; i < amount; i++){
                    axios
                        .get('https://api.chucknorris.io/jokes/random')
                        .then(response => {
                            this.jokes.push(response.data);
                        })
                }
            },
            // Store and merge selected items with existing favorites
            saveToFavorites(e) {
                const newFavorites = this.selectedJokes;
                const merged = JSON.stringify([...newFavorites, ...this.favoriteJokes]);
                localStorage.setItem('favoriteJokes', merged);
            },
            // Remove selected items from favorites
            removeFromFavorites(e) {
                const newFavorites = this.jokes.filter( joke => !this.selectedJokes.includes(joke));
                this.jokes = newFavorites;
                localStorage.setItem('favoriteJokes', JSON.stringify(newFavorites));
            }
        },
        mounted() {
            // Get favorites
            if (localStorage.getItem('favoriteJokes')) {
                this.favoriteJokes = JSON.parse(localStorage.getItem('favoriteJokes'));
            }
            // Check page
            if(this.favorites) {
                this.jokes = this.favoriteJokes;
            } else {
                this.getJokes(10);
            }
        }
    }
</script>
<style lang="scss" scoped>
    .md-content {
        margin: 20px;
    }
    .md-button {
        float: right;
    }
</style>
