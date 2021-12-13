new Vue({
    el: '#app',
    data: {
        isRunning: false,
        isHealing: false,
        playerLife: 100,
        monsterLife: 100,
        maxLife: 100,
        playerDamage: 0,
        monsterDamage: 0,
        logs: [],
    },
    computed: {
        hasResult(){
           return this.playerLife == 0 || this.monsterLife == 0;
        },
    },
    methods: {
        giveUpGame(){
            this.isRunning = this.isRunning ? false : true;
            this.logs = [];
        },
        newGame() {
            this.isRunning = this.isRunning ? false : true;
            this.resetLife();
        },
        attack(special){
            this.playerDamage = this.getRandomArbitrary(5, 10);
            this.monsterDamage = this.getRandomArbitrary(7, 12);
            if (this.monsterLife > 0) {
                this.hurt('playerLife', 'monsterDamage', 'Monstro', 'Jogador', false);
            }
            this.hurt('monsterLife', 'playerDamage', 'Jogador', 'Monstro', special);
        },
        heal(){
            // even when healing, player must be attacked at the same time
            this.monsterDamage = this.getRandomArbitrary(7, 12);
            this.hurt('playerLife', 'monsterDamage', 'Monstro', 'Jogador', false);

           
            this.isHealing = true;
            // causes monster to take away a negative amount of life from the player,
            // thus, healing him.
            this.monsterDamage = this.getRandomArbitrary(-10, -5);
            this.hurt('playerLife', 'monsterDamage', 'Monstro', 'Jogador', false);
            this.isHealing = false;
        },
        hurt(whichLife, whichDamage, attacking, attacked, special){
            const plus = special ? 5 : 0;
            const hurt = this[whichDamage] + plus;
            // console.log(`Hurt: ${whichDamage} => `, hurt);
            if (this.isHealing) {
                this.registerLogs(`${attacked} se curou com +${Math.abs(hurt)}`);
            } else {
                this.registerLogs(`${attacking} atingiu ${attacked} com ${hurt} de dano.`);
            }
            this[whichLife] -= hurt;
            if (this[whichLife] < 0) {
                this[whichLife] = 0;
            } else if (this[whichLife] > 100) {
                this[whichLife] = 100;
            }
        },
        getRandomArbitrary(min, max) {
            const attack = Math.random() * (max - min) + min;
            return Math.round(attack);
        },
        resetLife() {
            this.playerLife = this.maxLife;
            this.monsterLife = this.maxLife;
        },
        registerLogs(value){
            this.logs.unshift(value);
        },
    },
    watch: {
        hasResult(value){
            if (value == true) {this.isRunning = false};
        },
    },
})