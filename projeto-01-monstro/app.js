new Vue({
    el: '#app',
    data: {
        isRunning: false,
        playerLife: 100,
        monsterLife: 100,
        playerDamage: 0,
        monsterDamage: 0,
        maxLife: 100,
    },
    computed: {
        hasResult(){
           return this.playerLife == 0 || this.monsterLife == 0;
        },
    },
    methods: {
        game() {
            this.isRunning = this.isRunning ? false : true;
            this.resetLife();
        },
        attack(special){
            this.playerDamage = this.getRandomArbitrary(5, 10);
            this.monsterDamage = this.getRandomArbitrary(10, 15);
            this.hurt('monsterLife', 'playerDamage', special);
            this.hurt('playerLife', 'monsterDamage', false);
        },
        hurt(prop, whichDamage, special){
            const plus = special ? 5 : 0;
            const hurt = this[whichDamage] + plus;
            console.log(`Hurt: ${whichDamage} => `, hurt);
            this[prop] -= hurt;
            this[prop] = this[prop] < 0 ? 0 : this[prop];
            if (this[prop] == 0) {
                this.isRunning = false;
            }
        },
        getRandomArbitrary(min, max) {
            const attack = Math.random() * (max - min) + min;
            return Math.round(attack);
        },
        resetLife() {
            this.playerLife = this.maxLife;
            this.monsterLife = this.maxLife;
        }
    },
})