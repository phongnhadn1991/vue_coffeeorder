<template>
    <div class="c-page__checkout">
        <div class="main-content">
            <div class="container">
                <CheckoutList></CheckoutList>
            </div>
        </div>
    </div>
</template>

<script>
// import EventBus from "../eventbus/event-bus"
import CheckoutList from "@/components/checkouts/CheckoutList.vue"
export default {
    name: 'CheckoutView',

    data() {
        return {
            
        };
    },
    components: {
        CheckoutList
    },
    created(){
        // EventBus.$on('checkout-data', this.handler);
    },
     methods: {
        // handler(e){
        //     console.log('HELLO' + e)
        // }
    },
};
</script>

<style lang="scss" scoped>

</style>