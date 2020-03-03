<template>
    <div>
        <h1>{{result}}</h1>
        <form @submit.prevent="onSubmitForm">
        <input ref="answer" minlength="4"  maxlength="4" v-model="value" />
        <button type="submit">입력</button>
        </form>
        <div>시도 :   {{tries.length}}</div>
        <ul>
            <li v-for="t in tries">
                <div>{{t.try}}</div>
                <div>{{t.result}}</div>
            </li>
        </ul>
    </div>

<!--    <div>시도 : {{}}</div>-->
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
                answers: getNumbers(), //배열
                tries: [],
                value: '',
                result: '',
            }
        },
        methods:{
            onSubmitForm(){
                if(this.value === this.answers.join('')){ //정답 맞으면
                    this.tries.push({
                        try: this.value,
                        result: "홈런",
                    });
                    this.result = '홈런';
                    alert('게임을 다시 실행합니다.');
                    this.result='';
                    this.tries = [];
                    this.$refs.answers.focus();
                } else{
                    if(this.tries.length >=9) { //10번째 시도
                        this.result = `10번 넘게 돌려서 실행! 답은 ${this.answers.join(',')}였습니다!`;
                        alert('게임을 다시 실행합니다.');
                        this.result='';
                        this.tries = [];
                        this.$refs.answers.focus();
                    }
                    let strike = 0;
                    let ball = 0;
                    const answerArray = this.value.split('').map(v => parseInt(v));
                    for(let i = 0; i< 4; i += 1){
                        if(answerArray[i] === this.answers[i]){ //숫자 자리수 모두 정답
                            strike++;
                        }else if(this.answers.includes(answerArray[i])){ //숫자만
                            ball++;
                        }
                    }

                    this.tries.push({
                        try: this.value,
                        result: `${strike} 스트라이크, ${ball} 볼입니다.`,
                    });
                    this.value = '';
                    this.$refs.answers.focus();
                }

            }
        },
    };
</script>

<style>

</style>