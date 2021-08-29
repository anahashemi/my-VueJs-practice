new Vue({
    el: "#app",

    data: {
        step: 3,
        counter: 0,
        x: 0,
        y: 0,
    },

    computed: {
        state() {
            return this.counter % 2 == 0 ? "Even" : "Odd";
        },
        color() {
            return this.counter % 2 == 0 ? "Green" : "Red";
        },
    },

    methods: {
        /**
         * Increament counter by the specified value x 2
         * @param {number} step The step value
         */
        inc2: function (step) {
            this.counter += step * 2;
        },

        /**
         * Decreament counter by the specified value x 2
         * @param {number} step The step value
         */
        dec2: function (step) {
            this.counter -= step * 2;
        },

        /**
         * Increament counter by the specified value
         * @param {number} step The step value
         */
        increase: function (step) {
            this.counter += step;
        },

        /**
         * Decreament counter by the specified value
         * @param {number} step The step value
         */
        decrease: function (step) {
            this.counter -= step;
        },

        /**
         * Get cursor position
         * @param {Event} event
         */
        getCursor: function (event) {
            this.x = event.clientX;
            this.y = event.clientY;
        },
    },
});
