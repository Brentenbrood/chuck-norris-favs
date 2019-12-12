<template>
    <md-card>
        <md-card-header>
            <md-card-media>
                <img :src="joke.icon_url" alt="Chuck Norris">
            </md-card-media>
            <md-card-header-text>
                <div>{{joke.value}}</div>
            </md-card-header-text>
        </md-card-header>
        <md-card-actions>
            <md-checkbox v-model="value" :value="joke"></md-checkbox>
        </md-card-actions>
    </md-card>
</template>

<script>
    module.exports = {
        props: {
            value: {
                type: Array,
                required: true
            },
            joke: {
                type: Object,
                required: true
            }
        }
    }
</script>
<style>
    .md-card-header-text {
        padding:5px;
    }
</style>
