<template>
    <section>
        <p v-if="msg.length > 0">{{msg}}</p>
        <p v-else>no text</p>
        <div class="form-group">
            <input type="text" class="form-control" v-model="msg" >
        </div>
        <button class="btn btn-primary" @click="clear()">clear</button>
    </section>
</template>

<script>
export default {
    name: 'Hello',
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
