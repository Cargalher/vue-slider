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
            if(this.counter === 0){
                return this.counter = this.images.length -1
            }
            return this.counter -=1
        },
        right(){
            console.log('Click on right arrow');
            if(this.counter === this.images.length -1){
                return this.counter = 0
            }
            return this.counter +=1
        },
       dotimages(counter){
           
       return this.counter = counter;
           
       }
    }
})