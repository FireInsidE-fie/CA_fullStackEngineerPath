// https://www.codecademy.com/paths/full-stack-engineer-career-path/tracks/fscp-javascript-syntax-part-ii/modules/fecp-learn-javascript-syntax-objects/projects/meal-maker
// 01.09.2021
// UNFINISHED AND PROBABLY BROKEN

const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: [],

        // Setter methods.
        set appetizers(appetizersIn) {
            this.appetizers = appetizersIn;
        },
        set mains(mainsIn) {
            this.mains = mainsIn;
        },
        set desserts(dessertsIn) {
            this.desserts = dessertsIn;
        },

        // Getters methods.
        get appetizers() {
            if (this.appetizers) {
                return this.appetizers;
            } else {
                console.log('appetizers doesn\'t exist.')
            }
        },
        get mains() {
            if (this.mains) {
                return this.mains;
            } else {
                console.log('mains doesn\'t exist.')
            }
               
        },
        get desserts() {
            if (this.desserts) {
                return this.desserts;
            } else {
                console.log('desserts doesn\'t exist.')
            }
                
        }
    },

    get courses() {
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts
        };
    },

    addDishToCourse(courseName, dishName, dishPrice) {
        let dish = {
            name: dishName,
            price: dishPrice
        }

        switch (courseName) {
            case 'appetizers':
                this._courses.appetizers.push(dish);
            case 'mains':
                this._courses.mains.push(dish);
            case 'desserts':
                this._courses.desserts.push(dish);
        }
    },

    getRandomDishFromCourse(courseName) {
        let dishes = this._courses.courseName;
        return dishes[Math.floor(Math.random() * this.dishes.length)];
    },

    generateRandomMeal() {
        let appetizer = this.getRandomDishFromCourse('appetizers');
        let main = this.getRandomDishFromCourse('mains');
        let dessert = this.getRandomDishFromCourse('desserts');

        return ``;
    }
}
