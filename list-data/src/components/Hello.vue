<template>
    <section>
        <h1>{{message}}</h1>
        <p v-if="msg.length > 0">{{msg}}</p>
        <p v-else>no text</p>
        <input type="text" v-model="msg" >
        <button @click="clear()">clear</button>
    </section>
</template>

<script>
export default {
    name: 'Hello',
    props: {
        message: String
    },
    data() {
        return {
            msg: ''
        }
    },
    methods: {
        clear () {
            this.msg = '';
        }
    }
}
</script>
