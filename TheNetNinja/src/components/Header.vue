<template>
    <header>
        <h1>Football DB</h1>
    </header>
</template>
<script>
export default {
    props: {
      title: {
        type: String,
        required: true
      }
    },
    data(){
        return{

        }
    },
    methods: {

    }
}
</script>
<style scoped>
header{
    background: grey;
    padding: 10px;
}
h1{
    color: honeydew;
    text-align: center;
}
</style>
 