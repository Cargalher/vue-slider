const app = new Vue({
    el: '#root',
    data:{
        title: 'Be kind to Every Kind',
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

    },
    mounted(){
        // add event listener for key events 
        document.addEventListener('keyup', (e) =>{
           if (e.key === 'ArrowRight'){
               this.right();
           }
           if(e.key === 'ArrowLeft'){
            this.left();
           }
        })
        // bonus_interval of 5 seconds applied to make pictures changing automatically every 5 secs.
        setInterval(this.right, 5000)
    }
})
