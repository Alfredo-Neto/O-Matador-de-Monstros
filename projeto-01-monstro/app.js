new Vue({
    el: '#app',
    data: {
        initGame: false,
        width: '100%',
        life: 100,
    },
    methods: {
        beginGame() {
            this.initGame = this.initGame ? false : true;
        },
        giveUpGame() {
            this.initGame = this.initGame ? false : true;
            this.life = 100;
            this.width = `${this.life}%`;
        },
        battle() {
            this.life -= 10;
            this.width = `${this.life}%`;
        },
    },
})