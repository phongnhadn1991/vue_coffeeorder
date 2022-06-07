<template>
    <div>
        checkout
    </div>
</template>

<script>
import EventBus from "../../eventbus/event-bus"
export default {
    name: 'CheckoutList',

    data() {
        return {
            
        };
    },
    created(){
        EventBus.$on('checkout-data', this.handler);
    },
    mounted() {
    },

    methods: {
        handler(e){
            console.log('HELLO' + e)
        }
    },
};
</script>

<style lang="scss" scoped>

</style>