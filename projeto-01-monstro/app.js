new Vue({
    el: '#app',
    data: {
        initGame: false,
        width: '100%',
        playerLife: 100,
        monsterLife: 100,
    },
    computed: {
        
    },
    methods: {
        game() {
            this.initGame = this.initGame ? false : true;
            this.resetLife();
        },
        battle() {
            this.playerAttack();
            this.monsterAttack();
        },
        playerAttack(){
            this.monsterLife -= 10;
            this.width = `${this.monsterLife}%`;
        },
        monsterAttack(){
            this.playerLife -= 10;
            this.width = `${this.playerLife}%`;
        },
        resetLife() {
            this.playerLife = 100;
            this.width = `${this.playerLife}%`;
            this.monsterLife = 100;
            this.width = `${this.monsterLife}%`;
        }
    },
})