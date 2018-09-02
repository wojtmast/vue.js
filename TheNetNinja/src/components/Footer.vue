<template>
    <footer>
        <p>Created by <b>wojtmast ®</b></p>
    </footer>
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
    }
}
</script>
<style scoped>
footer{
    background:lightblue;
    padding: 6px;
}
p{
        color:black;
        text-align: center;
}
</style>
