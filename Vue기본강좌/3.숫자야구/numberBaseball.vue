<template>
    <div>
        <h1>{{result}}</h1>
        <form v-on:submit="onSubmitForm">
        <input rel="answer" maxlength="4" v-model="value />
        <button>입력</button>
        </form>
        <div>시도: {{}}</div>
    </div>
</template>

<script>
    export default {
        date(){
        },
        methods:{
            onSubmitForm(e){
                e.preventDefault();
            }
        },       
    };
</script>

<style>

</style>