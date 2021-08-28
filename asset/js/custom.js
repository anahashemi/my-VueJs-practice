var myApplication = new Vue({
    el: '#app',
    data: {
        counter: 0
    
    },
    methods: {
        increase: function(step){
            this.counter+=step;
        },
        getCursor: function(event){
            this.x = event.clientX;
            this.y = event.clientY;

        }

    }

});