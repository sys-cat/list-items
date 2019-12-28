<template>
    <h1>{{message}}</h1>
</template>

<script>
export default {
    name: 'Hello',
    props: {
        message: String
    }
}
</script>