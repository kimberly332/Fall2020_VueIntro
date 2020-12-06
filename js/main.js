import { fetchData } from "./components/TheDataMiner.js";
import ProfCard from "./components/TheProfCard.js";

(() => {

    let vue_vm = new Vue({
        // link Vue to an element in our HTML
        //el: "#app",

        data: {
            message: "Hello from Vue!",
            anotherMessage: "more text, so simple! much winning",
            removeAformat: true, 
            showBioData: false,
            profs: [],
            currentProfData: {}

            // profs: [
            //     { name: "Justin", role: "coordinator", nickname: "nitsuJ" },
            //     { name: "John", role: "prof", nickname: "super chill" },
            //     { name: "Joe", role: "prof", nickname: "Teddy Bear" },
            // ]
        },

        // this is the "mounted" lifecycle hook. Vue is done creating itself, and has attached itself, and has attached itself to the "app" div on the page
        mounted: function() {
            console.log("Vue is mounted, trying a fetch for the initial data");
            
            fetchData("./includes/index.php")
                .then(data => {
                    // push the prof data into profs array
                    data.forEach(prof => this.profs.push(prof));
                })
                .catch(err => console.error(err));
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

            showProfData(target) {
                
                // remove this prof from the prods array
                console.log("clicked to view prof bio data", target, target.name);
                // the "this" keyword inside a vue instance REFERS to the Vue instance itself by default
                
                // toggle the property between true and false using a ternary statement
                this.showBioData = this.showBioData ? false : true;

                // make the selected prof's data visible
                this.currentProfData = target;
            },

            removeProf(target) {
                // remove this prof from the prods array
                console.log("clicked to remove prof", target, target.name);
                // the "this" keyword inside a vue instance REFERS to the Vue instance itself by default
                
                // make the selected prof's data visible
                // this.profs.splice(this.profs.indexOf(target), 1);
                this.$delete(this.profs, target);
            }
        },

        components: {
            "prof-card": ProfCard
        }
    }).$mount("#app"); // also connects Vue to your wrapper in HTML
})();