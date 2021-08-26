var myApplication = new Vue({
    el: '#app',
    data: {
        title: 'Hello Vue.js',
        link: 'http://toplearn.com'
    },
    methods: {
        changeTitle: function (event) {
            this.title = event.target.value;
        },
        sayHello: function(){
            return 'Hello Ana joon';
        },
        sayBye:function(){
            return this.title;
        }
    }
});