// console.log("Working?");

// alert("Testing.");
function getRandomNumberOfCustomersGivenARange(minCustomers, maxCustomers) {
    return (Math.floor(Math.random() * (maxCustomers - minCustomers + 1)) + minCustomers); // if we get 0 we start at mincustomers, otherwise we multiply difference between max and min time 0 or 1 adding 1 because zero based
}

// The hours in the requirements were from... 6am 2 8pm

// we need to be able to keep up with sales numbers by the hr so we need to have a list of the hours
const biznessHours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm"];

// boom
// Declare and define an object via a literal. make generic at 1st and just for one. if works for one. will work for whatever location we wanna make.


let Seattle = {
    // Props
    minCustomers: 23, // minimum custs. We didnt set low boundary. 
    maxCustomers: 65, // max custs
    avgCookieSale: 1, // sales
    // Both of these next 2 arrays should end up the same length as the array for each hr of the day 15
    customersPerHour: [], // need an array to store all the customer numbers per hour
    cookiesSoldPerHour: [], // same. need an array to sore sold number of cookies per hour
    totalDailyCookies: 0,

    // methods
    getCustomersPerHour: function () {
        //Use our random customer method. in same obj/instance so use 'this'
        // add each random num of custs to our array where each index aligns with an hour in the day array
        for (let index = 0; index < biznessHours.length; index++) {
            // Add computed average customer value for each hour to our array/list
            // the 'this' keyword... the props we using are in this class so we need 'this'
            this.customersPerHour.push(getRandomNumberOfCustomersGivenARange(this.minCustomers, this.maxCustomers));// pass in min customers. pass in max customers.;           
        }
        // lets see if we r even close. lets add some debug..... string literal
        console.log(`The min value is ${this.minCustomers} the max value is ${this.maxCustomers}`);
    },

    // now based on an average number of customers for a given hr, we need to us that value from array rando number along with data given for avg cookies per person and calcualte a guesstimate at number of cookies
    getCookiesSoldPerHour: function () {
        // initialize an ongoing total
        totalDailyCookies = 0;
        this.getCustomersPerHour(); // load up customer data
        // lets load up our cookiesSoldPerHour by walking through each element in our average customers per hour array (number of customers * cookies sold per customer)
        for (let index = 0; index < this.customersPerHour.length; index++) {
            // Calc number of cookies
            let dailyCookies = Math.floor(this.customersPerHour[index] * this.avgCookieSale);
            // Lets floor it so we get a whole number
            this.cookiesSoldPerHour.push(dailyCookies); // multiply the 2 values shove as new element into cookies sold array          
            // add to total
            this.totalDailyCookies += dailyCookies;
        }
        // // debug
        // console.log(`Here's what we got: ${this.cookiesSoldPerHour}`);
    },
    render() {
        this.getCookiesSoldPerHour();
        const unorderedList = document.getElementById('seattle');
        for (let i = 0; i < biznessHours.length; i++) {
            const listItem = document.createElement('li');
            // 6am: 16 cookies
            listItem.textContent = biznessHours[i] + ': ' + this.cookiesSoldPerHour[i] + ' cookies';
            unorderedList.appendChild(listItem);
        }
        const listItem = document.createElement('li');
        listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
        unorderedList.appendChild(listItem);
    }


}


// Point of Entry: first line of code to run

// lets try our location object out
// get the customer values loaded up in the object (constructors in classes will do this for us soon)
// someLocation.getCustomersPerHour();
// // get the cookie sales loaded in the object
// someLocation.getCookiesSoldPerHour();

// // now get the list of customers
// console.log(someLocation.customersPerHour);

// // now lets get the list of cookies sold per hour
// console.log(someLocation.cookiesSoldPerHour);

// LETS test
// Now we can target individual DIVs

Seattle.render();

function getRandomNumberOfCustomersGivenARange(minCustomers, maxCustomers) {
    return (Math.floor(Math.random() * (maxCustomers - minCustomers + 1)) + minCustomers); // if we get 0 we start at mincustomers, otherwise we multiply difference between max and min time 0 or 1 adding 1 because zero based
}

const hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm"];



let Tokyo = {

    minCustomers: 3,
    maxCustomers: 24,
    avgCookieSale: 1.2,
    customersPerHour: [],
    cookiesSoldPerHour: [],
    totalDailyCookies: 0,

    // methods
    getCustomersPerHour: function () {
        for (let index = 0; index < hours.length; index++) {
            this.customersPerHour.push(getRandomNumberOfCustomersGivenARange(this.minCustomers, this.maxCustomers));
        }
        console.log(`The min value is ${this.minCustomers} the max value is ${this.maxCustomers}`);
    },

    getCookiesSoldPerHour: function () {
        totalDailyCookies = 0;
        this.getCustomersPerHour();
        for (let index = 0; index < this.customersPerHour.length; index++) {
            let dailyCookies = Math.floor(this.customersPerHour[index] * this.avgCookieSale);
            this.cookiesSoldPerHour.push(dailyCookies);
            this.totalDailyCookies += dailyCookies;
        }
    },
    render() {
        this.getCookiesSoldPerHour();
        const unorderedList = document.getElementById('Tokyo');
        for (let i = 0; i < hours.length; i++) {
            const listItem = document.createElement('li');
            listItem.textContent = hours[i] + ': ' + this.cookiesSoldPerHour[i] + ' cookies';
            unorderedList.appendChild(listItem);
        }
        const listItem = document.createElement('li');
        listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
        unorderedList.appendChild(listItem);
    }


}

Tokyo.render();

function getRandomNumberOfCustomersGivenARange(minCustomers, maxCustomers) {
    return (Math.floor(Math.random() * (maxCustomers - minCustomers + 1)) + minCustomers);
}

const Workhours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm"];

// let someLocation3 = {
//     minCustomers: 11,
//     maxCustomers: 38,
//     avgCookieSale: 3.7,
//     customersPerHour: [],
//     cookiesSoldPerHour: [],
//     totalDailyCookies: 0,

//     // methods
//     getCustomersPerHour: function () {
//         for (let index = 0; index < Workhours.length; index++) {
//             this.customersPerHour.push(getRandomNumberOfCustomersGivenARange(this.minCustomers, this.maxCustomers));
//         }
//         console.log(`The min value is ${this.minCustomers} the max value is ${this.maxCustomers}`);
//     },
//     getCookiesSoldPerHour: function () {
//         totalDailyCookies = 0;
//         this.getCustomersPerHour();
//         for (let index = 0; index < this.customersPerHour.length; index++) {

//             let dailyCookies = Math.floor(this.customersPerHour[index] * this.avgCookieSale);
//             this.cookiesSoldPerHour.push(dailyCookies)
//             this.totalDailyCookies += dailyCookies;
//         }
//     },
//     render() {
//         this.getCookiesSoldPerHour();
//         const unorderedList = document.getElementById('Dubai');
//         for (let i = 0; i < Workhours.length; i++) {
//             const listItem = document.createElement('li');
//             listItem.textContent = Workhours[i] + ': ' + this.cookiesSoldPerHour[i] + ' cookies';
//             unorderedList.appendChild(listItem);
//         }
//         const listItem = document.createElement('li');
//         listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
//         unorderedList.appendChild(listItem);
//     }


// }

let Dubai = {

    minCustomers: 11,
    maxCustomers: 38,
    avgCookieSale: 3.7,
    customersPerHour: [],
    cookiesSoldPerHour: [],
    totalDailyCookies: 0,

    // methods
    getCustomersPerHour: function () {
        for (let index = 0; index < Workhours.length; index++) {
            this.customersPerHour.push(getRandomNumberOfCustomersGivenARange(this.minCustomers, this.maxCustomers));
        }
        console.log(`The min value is ${this.minCustomers} the max value is ${this.maxCustomers}`);
    },

    getCookiesSoldPerHour: function () {
        totalDailyCookies = 0;
        this.getCustomersPerHour();
        for (let index = 0; index < this.customersPerHour.length; index++) {
            let dailyCookies = Math.floor(this.customersPerHour[index] * this.avgCookieSale);
            this.cookiesSoldPerHour.push(dailyCookies);
            this.totalDailyCookies += dailyCookies;
        }
    },
    render() {
        this.getCookiesSoldPerHour();
        const unorderedList = document.getElementById('Dubai');
        for (let i = 0; i < Workhours.length; i++) {
            const listItem = document.createElement('li');
            listItem.textContent = Workhours[i] + ': ' + this.cookiesSoldPerHour[i] + ' cookies';
            unorderedList.appendChild(listItem);
        }
        const listItem = document.createElement('li');
        listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
        unorderedList.appendChild(listItem);
    }


}
// someLocation3.render();
Dubai.render();


const Workhours2 = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm"];

let someLocation4 = {
    minCustomers: 11,
    maxCustomers: 38,
    avgCookieSale: 3.7,
    customersPerHour: [],
    cookiesSoldPerHour: [],
    totalDailyCookies: 0,

    // methods
    getCustomersPerHour: function () {
        for (let index = 0; index < Workhours2.length; index++) {
            this.customersPerHour.push(getRandomNumberOfCustomersGivenARange(this.minCustomers, this.maxCustomers));
        }
        console.log(`The min value is ${this.minCustomers} the max value is ${this.maxCustomers}`);
    },
    getCookiesSoldPerHour: function () {
        totalDailyCookies = 0;
        this.getCustomersPerHour();
        for (let index = 0; index < this.customersPerHour.length; index++) {

            let dailyCookies = Math.floor(this.customersPerHour[index] * this.avgCookieSale);
            this.cookiesSoldPerHour.push(dailyCookies)
            this.totalDailyCookies += dailyCookies;
        }
    },
    render() {
        this.getCookiesSoldPerHour();
        const unorderedList = document.getElementById('Paris');
        for (let i = 0; i < Workhours2.length; i++) {
            const listItem = document.createElement('li');

            listItem.textContent = Workhours2[i] + ': ' + this.cookiesSoldPerHour[i] + ' cookies';
            unorderedList.appendChild(listItem);
        }
        const listItem = document.createElement('li');
        listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
        unorderedList.appendChild (listItem);
    }


}

let Paris = {

    minCustomers: 20,
    maxCustomers: 38,
    avgCookieSale: 2.3,
    customersPerHour: [],
    cookiesSoldPerHour: [],
    totalDailyCookies: 0,

    // methods
    getCustomersPerHour: function () {
        for (let index = 0; index < Workhours2.length; index++) {
            this.customersPerHour.push(getRandomNumberOfCustomersGivenARange(this.minCustomers, this.maxCustomers));
        }
        console.log(`The min value is ${this.minCustomers} the max value is ${this.maxCustomers}`);
    },

    getCookiesSoldPerHour: function () {
        totalDailyCookies = 0;
        this.getCustomersPerHour();
        for (let index = 0; index < this.customersPerHour.length; index++) {
            let dailyCookies = Math.floor(this.customersPerHour[index] * this.avgCookieSale);
            this.cookiesSoldPerHour.push(dailyCookies);
            this.totalDailyCookies += dailyCookies;
        }
    },
    render() {
        this.getCookiesSoldPerHour();
        const unorderedList = document.getElementById('paris');
        for (let i = 0; i < Workhours2.length; i++) {
            const listItem = document.createElement('li');
            listItem.textContent = Workhours2[i] + ': ' + this.cookiesSoldPerHour[i] + ' cookies';
            unorderedList.appendChild(listItem);
        }
        const listItem = document.createElement('li');
        listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
        unorderedList.appendChild(listItem);
    }


}
someLocation4.render();

const Workhours3 = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm"];

let someLocation5 = {
    minCustomers: 2,
    maxCustomers: 16,
    avgCookieSale: 4.6,
    customersPerHour: [],
    cookiesSoldPerHour: [],
    totalDailyCookies: 0,

    // methods
    getCustomersPerHour: function () {
        for (let index = 0; index < Workhours3.length; index++) {
            this.customersPerHour.push(getRandomNumberOfCustomersGivenARange(this.minCustomers, this.maxCustomers));
        }
        console.log(`The min value is ${this.minCustomers} the max value is ${this.maxCustomers}`);
    },
    getCookiesSoldPerHour: function () {
        totalDailyCookies = 0;
        this.getCustomersPerHour();
        for (let index = 0; index < this.customersPerHour.length; index++) {

            let dailyCookies = Math.floor(this.customersPerHour[index] * this.avgCookieSale);
            this.cookiesSoldPerHour.push(dailyCookies)
            this.totalDailyCookies += dailyCookies;
        }
    },
    render() {
        this.getCookiesSoldPerHour();
        const unorderedList = document.getElementById('lima');
        for (let i = 0; i < Workhours3.length; i++) {
            const listItem = document.createElement('li');

            listItem.textContent = Workhours3[i] + ': ' + this.cookiesSoldPerHour[i] + ' cookies';
            unorderedList.appendChild(listItem);
        }
        const listItem = document.createElement('li');
        listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
        unorderedList.appendChild (listItem);
    }


}

let lima = {

    minCustomers: 20,
    maxCustomers: 38,
    avgCookieSale: 2.3,
    customersPerHour: [],
    cookiesSoldPerHour: [],
    totalDailyCookies: 0,

    getCustomersPerHour: function () {
        for (let index = 0; index < Workhours.length; index++) {
            this.customersPerHour.push(getRandomNumberOfCustomersGivenARange(this.minCustomers, this.maxCustomers));
        }
        console.log(`The min value is ${this.minCustomers} the max value is ${this.maxCustomers}`);
    },

    getCookiesSoldPerHour: function () {
        totalDailyCookies = 0;
        this.getCustomersPerHour();
        for (let index = 0; index < this.customersPerHour.length; index++) {
            let dailyCookies = Math.floor(this.customersPerHour[index] * this.avgCookieSale);
            this.cookiesSoldPerHour.push(dailyCookies);
            this.totalDailyCookies += dailyCookies;
        }
    },
    render() {
        this.getCookiesSoldPerHour();
        const unorderedList = document.getElementById('Lima');
        for (let i = 0; i < Workhours.length; i++) {
            const listItem = document.createElement('li');
            listItem.textContent = Workhours[i] + ': ' + this.cookiesSoldPerHour[i] + ' cookies';
            unorderedList.appendChild(listItem);
        }
        const listItem = document.createElement('li');
        listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
        unorderedList.appendChild(listItem);
    }


}
// someLocation3.render();
lima.render();
