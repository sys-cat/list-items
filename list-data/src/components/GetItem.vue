<template>
    <section id="list-tabs">
        <div v-if="info != null">
            <b-tabs card>
                <b-tab :title="`${key}日`" v-for='(val, key) in info' :key="key">
                    <div  v-if="val.length > 0">
                        <b-table outlined :items="val"></b-table>
                    </div>
                    <div v-else>
                        <b-alert show variant="warning">no data</b-alert>
                    </div>
                </b-tab>
            </b-tabs>
        </div>
        <div v-else>
            <b-alert id="alert" show variant="danger">nothing data</b-alert>
        </div>
    </section>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            info: null,
            errors: null,
            url: process.env.VUE_APP_URL,
        }
    },
    mounted() {
        axios
            .get(this.url, {crossDomain: true})
            .then(response => (this.info = response.data))
            .catch(error => this.errors = error)
    }
}
</script>

<style>
#alert {
    margin: 10px;
}
</style>