<template>
    <div>
        <div id="screen" v-bind:class="state">{{message}}</div>
        <div>
            <div>평균시간 : {{}}</div>
            <button @click="onReset">리셋</button>
        </div>
    </div>
</template>

<script>
    const getNumbers = () => {
        const candidates = [1,2,3,4,5,6,7,8,9];
        const array = [];
        for(let i = 0; i<4; i+=1){
            const chosen = candidates.splice(Math.floor(Math.random() * (9-i)),1)[0];
            array.push(chosen);
        }
        return array;
    };
    export default {
        data(){ //화면에 보여지는 것은 data
            return{
                result:[],
                state: 'waiting',
                message: '클릭해서 시작하세요.',
            }
        },
        methods:{
            onReset(){

            }
        }
    };
</script>

<style scoped>
    #screen{
        width: 300px;
        height: 200px;
        text-align: center;
        user-select: none;
    }

    #screen.waiting{
        background-color: aqua;
    }

    #screen.ready{
        background-color: red;
        color: white;
    }

    #screen.now{
        background-color: greenyellow;
    }
</style>