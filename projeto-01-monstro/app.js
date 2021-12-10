new Vue({
    el: '#app',
    data: {
        initGame: false,
    },
    methods: {
        beginGame() {
            this.initGame = this.initGame ? false : true;
        }
    },
})