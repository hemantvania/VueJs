var app = new Vue ({
            el: '#app',
            data: {
                title: 'Vue JS welcomes you!',
                linkTitle: 'Vue js',
                link: 'https://vuejs.org/v2/guide/installation.html',
                googleLink: '<a target="_blank" href="http://google.com">Go to google</a>',
                counter: 0,
                counter2 : 2
            },
            computed : {
               output : function(){
                    return this.counter > 5 ? "Greater than 5" : "Smaller than 5";
               },
               output2 : function(){
                return this.counter > 3  && this.counter <= 5 ? "Greater than 3" : "Smaller than 3 and 5";
                },
                output22 : function(){
                        let maxLimt = 10;
                        
                        let msg =  this.counter2 > 10 ? "Max limit " + maxLimt + " is reached! " : this.counter2 < 0 ? "Min value for this is 0:" : "Smaller than max count";
                        this.counter2 = this.counter2 > 10 ? 10 : this.counter2 < 0 ? 0 : this.counter2;
                        return msg;
                    }       
            },
            methods: {
                welcomeMsg : function(){
                    return this.title;
                },
                result: function(){
               
                    return this.counter > 3 ? "Greater than 3" : "Smaller than 3";
                }
            }
});