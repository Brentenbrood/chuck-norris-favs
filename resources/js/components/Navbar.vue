<template>
    <div>
    <md-tabs class="md-primary" md-alignment="centered">
        <md-tab id="tab-overview" md-icon="pages" md-label="Overview" exact>
            <jokes/>
        </md-tab>
        <md-tab id="tab-favorites" md-icon="star" md-label="Favorites" v-if="renderComponent" v-on:click="forceRerender" exact>
            <jokes favorites></jokes>
        </md-tab>
    </md-tabs>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                renderComponent: true,
            };
        },
        methods: {
            // Rerender items
            forceRerender() {
                this.renderComponent = false;
                this.$nextTick().then(() => {
                    this.renderComponent = true;
                });
            }
        }
    }
</script>

<style scoped>

</style>
