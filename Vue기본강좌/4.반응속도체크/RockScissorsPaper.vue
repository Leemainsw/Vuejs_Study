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
    };

    const scores = {
        가위: 1,
        바위: 0,
        보: -1,
    }

    const computerChoice = (imgCord) =>{
        return Object.entries(rspCords).find(function(v){
            return v[1] === imgCord;
        })[0];
    };

    let interval = null;

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
            changeHand(){
                interval = setInterval(() => {
                    if(this.imgCord === rspCords.바위){
                        this.imgCord = rspCords.가위;
                    } else if(this.imgCord === rspCords.가위){
                        this.imgCord = rspCords.보;
                    } else if(this.imgCord === rspCords.보){
                        this.imgCord = rspCords.바위;
                    }
                }, 100);
            },
            onClickButton(choice){
                clearInterval(interval);
                const myScore = scores[choice];
                const cpuScore = scores[computerChoice(this.imgCord)];
                const diff = myScore - cpuScore;
                if(diff === 0){
                    this.result = '비겼습니다.';
                } else if([-1,2].includes(diff)){
                    this.result = '이겼습니다.';
                    this.score += 1;
                } else{
                    this.result = '졌습니다.';
                    this.score -= 1;
                }
                setTimeout(() => {
                    this.changeHand();
                }, 1000);
            }
        },

        mounted() {
            console.log('mounted');
            this.changeHand();
        },

        beforeDestroy() {
            console.log('beforeDestroy');
            clearInterval(interval);
        }
    };
</script>

<style scoped>
    #computer{
        width: 142px;
        height: 200px;
        background-position: 0 0;
    }

</style>