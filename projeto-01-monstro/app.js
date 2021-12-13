new Vue({
    el: '#app',
    data: {
        isRunning: false,
        playerLife: 100,
        monsterLife: 100,
        playerDamage: 16,
        monsterDamage: 15,
        special: 50,
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
            this.hurt('playerLife', 'monsterDamage', false);
            this.hurt('monsterLife', 'playerDamage', special);
        },
        hurt(prop, whichDamage, special){
            const hurt = special ? this.special : this[whichDamage];
            this[prop] -= hurt;
            this[prop] = this[prop] < 0 ? 0 : this[prop];
            if (this[prop] == 0) {
                this.isRunning = false;
            }
        },
        getRandomArbitrary(min, max) {
            return Math.random() * (max - min) + min;
        },
        resetLife() {
            this.playerLife = this.maxLife;
            this.monsterLife = this.maxLife;
        }
    },
})