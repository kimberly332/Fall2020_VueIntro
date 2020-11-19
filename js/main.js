(() => {
    let vue_vm = new Vue({
        // link Vue to an element in our HTML
        //el: "#app",

        data: {
            message: "Hello from Vue!",
            anotherMessage: "more text, so simple! much winning",
            removeAformat: true, 
            showBioData: false,

            profs: [
                { name: "Justin", role: "coordinator", nickname: "nitsuJ" },
                { name: "John", role: "prof", nickname: "super chill" },
                { name: "Joe", role: "prof", nickname: "Teddy Bear" },
            ]
        },

        // this is the "mounted" lifecycle hook. Vue is done creating itself, and has attached itself, and has attached itself to the "app" div on the page
        mounted: function() {
            console.log("Vue is mounted!");
            // alert("Hey there! your vue instance is ready");

            this.profs.push({name: "Jarrod", role: "supermodel prof", nickname: "Zoolander"})
            // alert("you added Jarrod!")
        },

        // run a method when you change our view (update the DOM with Vue)
        updated: function() {
            console.log("Vue just updated the DOM");
        },

        methods: {
            logClicked() {
                console.log("clicked on a prof name");
            },

            clickedHeader() {
                console.log("clikced on the header");
            },

            removeProf(target) {
                // remove this prof from the prods array
                console.log("clicked to remove prof", target, target.name);
                // the "this" keyword inside a vue instance REFERS to the Vue instance itself by default
                
                // toggle the property between true and false using a ternary statement
                this.showBioData = this.showBioData ? false : true
            }
        }
    }).$mount("#app"); // also connects Vue to your wrapper in HTML
})();