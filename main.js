const app = new Vue({
    el: '#root',
    data:{
        counter:0,
        images: [
            "./img/elephants.jpg",
            "./img/lion.jpg",
            "./img/lamb.jpg",
            "./img/giraff.jpg"
        ],
       
    },
    methods:{
        left(){
            console.log('Click on left arrow');
        },
        right(){
            console.log('Click on right arrow');
        }
    }
})