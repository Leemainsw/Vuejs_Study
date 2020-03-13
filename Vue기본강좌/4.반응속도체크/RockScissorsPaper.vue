<template>
    <div>
        <div id="computer" :style="computedStyleObject"></div>
        <div>
            <button @click="onClickButton('바위')">바위</button>
            <button @click="onClickButton('가위')">가위</button>
            <button @click="onClickButton('보')">보</button>
        </div>
            <div>{{result}}</div>
            <div>현재 {{score}}</div>
        </div>
</template>

<script>

    const rspCords = {
        바위 :  '0',
        가위 : '-142px',
        보 : '-284px',
    }

    export default {
        data(){ //화면에 보여지는 것은 data
            return{
                imgCord: rspCords.바위,
                result: '',
                score: 0,
            };
        },

        computed:{
            computedStyleObject() {
                return {
                    background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${this.imgCord} 0`,
                }
            }

        },

        methods:{
            onClickButton(choice){

            }
        },
    };
</script>

<style scoped>
    #computer{
        width: 142px;
        height: 200px;
        background-position: 0 0;
    }

</style>