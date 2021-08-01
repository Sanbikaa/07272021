

function randNumCust(minCust, maxCust) {
    return Math.floor(Math.random() * (maxCust - minCust + 1)) + minCust;
}


const table = document.getElementById("salesTable");

const bhours = [
    "6am",
    "7am",
    "8am",
    "9am",
    "10am",
    "11am",
    "12pm",
    "1pm",
    "2pm",
    "3pm",
    "4pm",
    "5pm",
    "6pm",
    "7pm",
    "8pm",
];
console.log(table);
function createHeader() {
    let headerRow = document.createElement("tr");
    let tblHdr = document.createElement("th");
    tblHdr.textContent = "Locations";
    headerRow.appendChild(tblHdr);

    for (let i = 0; i < bhours.length; i++) {
        tblHdr = document.createElement("th");
        tblHdr.textContent = bhours[i];
        headerRow.appendChild(tblHdr);
    }
    tblHdr = document.createElement("th");
    tblHdr.textContent = "Daily Location Total";
    headerRow.appendChild(tblHdr);
    table.appendChild(headerRow);
}

createHeader();


let Seattle = {

    minCust: 23,
    maxCust: 65,
    avgCookieSale: 6.3,

    custPerHour: [],
    cookiesSoldPerHr: [],
    totalDailyCookies: 0,


    getCustPerHr: function () {

        for (let index = 0; index < bhours.length; index++) {

            this.custPerHour.push(randNumCust(this.minCust, this.maxCust));
        }

        console.log(
            `The min value is ${this.minCust} the max value is ${this.maxCust}`
        );
    },

    getCookiesSoldPerHour: function () {

        totalDailyCookies = 0;
        this.getCustPerHr();

        for (let index = 0; index < this.custPerHour.length; index++) {

            let dailyCookies = Math.floor(
                this.custPerHour[index] * this.avgCookieSale
            );

            this.cookiesSoldPerHr.push(dailyCookies);

            this.totalDailyCookies += dailyCookies;
        }
    },

    render() {
        this.getCookiesSoldPerHour();
        let dataRow = document.createElement("tr");
        let seattleData = document.createElement("td");
        seattleData.textContent = "Seattle";
        dataRow.appendChild(seattleData);

        for (let i = 0; i < bhours.length; i++) {
            seattleData = document.createElement("td");
            seattleData.textContent = this.cookiesSoldPerHr[i];
            dataRow.appendChild(seattleData);
        }
        seattleData = document.createElement("td");
        seattleData.textContent = this.totalDailyCookies;
        dataRow.appendChild(seattleData);
        table.appendChild(dataRow);
    },
};


let Tokyo = {

    minCust: 3,
    maxCust: 24,
    avgCookieSale: 1.2,

    custPerHour: [],
    cookiesSoldPerHr: [],
    totalDailyCookies: 0,


    getCustPerHr: function () {

        for (let index = 0; index < bhours.length; index++) {

            this.custPerHour.push(randNumCust(this.minCust, this.maxCust));
        }

        console.log(
            `The min value is ${this.minCust} the max value is ${this.maxCust}`
        );
    },

    getCookiesSoldPerHour: function () {

        totalDailyCookies = 0;
        this.getCustPerHr();
        for (let index = 0; index < this.custPerHour.length; index++) {

            let dailyCookies = Math.floor(
                this.custPerHour[index] * this.avgCookieSale
            );

            this.cookiesSoldPerHr.push(dailyCookies);

            this.totalDailyCookies += dailyCookies;
        }
    },
    render() {
        this.getCookiesSoldPerHour();
        let dataRow = document.createElement("tr");
        let tokyoData = document.createElement("td");
        tokyoData.textContent = "Tokyo";
        dataRow.appendChild(tokyoData);

        for (let i = 0; i < bhours.length; i++) {
            tokyoData = document.createElement("td");
            tokyoData.textContent = this.cookiesSoldPerHr[i];
            dataRow.appendChild(tokyoData);
        }
        tokyoData = document.createElement("td");
        tokyoData.textContent = this.totalDailyCookies;
        dataRow.appendChild(tokyoData);
        table.appendChild(dataRow);
    },
};


let Dubai = {

    minCust: 11,
    maxCust: 38,
    avgCookieSale: 3.7,

    custPerHour: [],
    cookiesSoldPerHr: [],
    totalDailyCookies: 0,


    getCustPerHr: function () {

        for (let index = 0; index < bhours.length; index++) {

            this.custPerHour.push(randNumCust(this.minCust, this.maxCust));
        }

        console.log(
            `The min value is ${this.minCust} the max value is ${this.maxCust}`
        );
    },

    getCookiesSoldPerHour: function () {

        totalDailyCookies = 0;
        this.getCustPerHr();

        for (let index = 0; index < this.custPerHour.length; index++) {

            let dailyCookies = Math.floor(
                this.custPerHour[index] * this.avgCookieSale
            );
            //Get a whole number
            this.cookiesSoldPerHr.push(dailyCookies);
            //add to total
            this.totalDailyCookies += dailyCookies;
        }
    },
    render() {
        this.getCookiesSoldPerHour();
        let dataRow = document.createElement("tr");
        let dubaiData = document.createElement("td");
        dubaiData.textContent = "Dubai";
        dataRow.appendChild(dubaiData);

        for (let i = 0; i < bhours.length; i++) {
            dubaiData = document.createElement("td");
            dubaiData.textContent = this.cookiesSoldPerHr[i];
            dataRow.appendChild(dubaiData);
        }
        dubaiData = document.createElement("td");
        dubaiData.textContent = this.totalDailyCookies;
        dataRow.appendChild(dubaiData);
        table.appendChild(dataRow);
    },
};

let Paris = {

    minCust: 20,
    maxCust: 38,
    avgCookieSale: 2.3,

    custPerHour: [],
    cookiesSoldPerHr: [],
    totalDailyCookies: 0,


    getCustPerHr: function () {

        for (let index = 0; index < bhours.length; index++) {

            this.custPerHour.push(randNumCust(this.minCust, this.maxCust));
        }

        console.log(
            `The min value is ${this.minCust} the max value is ${this.maxCust}`
        );
    },

    getCookiesSoldPerHour: function () {

        totalDailyCookies = 0;
        this.getCustPerHr();

        for (let index = 0; index < this.custPerHour.length; index++) {

            let dailyCookies = Math.floor(
                this.custPerHour[index] * this.avgCookieSale
            );

            this.cookiesSoldPerHr.push(dailyCookies);

            this.totalDailyCookies += dailyCookies;
        }
    },
    render() {
        this.getCookiesSoldPerHour();
        let dataRow = document.createElement("tr");
        let parisData = document.createElement("td");
        parisData.textContent = "Paris";
        dataRow.appendChild(parisData);
        //for loop to go through bhours array
        for (let i = 0; i < bhours.length; i++) {
            parisData = document.createElement("td");
            parisData.textContent = this.cookiesSoldPerHr[i];
            dataRow.appendChild(parisData);
        }
        parisData = document.createElement("td");
        parisData.textContent = this.totalDailyCookies;
        dataRow.appendChild(parisData);
        table.appendChild(dataRow);
    },
};

let Lima = {

    minCust: 2,
    maxCust: 16,
    avgCookieSale: 4.6,

    custPerHour: [],
    cookiesSoldPerHr: [],
    totalDailyCookies: 0,


    getCustPerHr: function () {


        for (let index = 0; index < bhours.length; index++) {

            this.custPerHour.push(randNumCust(this.minCust, this.maxCust));
        }

        console.log(
            `The min value is ${this.minCust} the max value is ${this.maxCust}`
        );
    },

    getCookiesSoldPerHour: function () {

        totalDailyCookies = 0;
        this.getCustPerHr();

        for (let index = 0; index < this.custPerHour.length; index++) {

            let dailyCookies = Math.floor(
                this.custPerHour[index] * this.avgCookieSale
            );

            this.cookiesSoldPerHr.push(dailyCookies);

            this.totalDailyCookies += dailyCookies;
        }
    },
    render() {
        this.getCookiesSoldPerHour();
        let dataRow = document.createElement("tr");
        let limaData = document.createElement("td");
        limaData.textContent = "Lima";
        dataRow.appendChild(limaData);

        for (let i = 0; i < bhours.length; i++) {
            limaData = document.createElement("td");
            limaData.textContent = this.cookiesSoldPerHr[i];
            dataRow.appendChild(limaData);
        }
        limaData = document.createElement("td");
        limaData.textContent = this.totalDailyCookies;
        dataRow.appendChild(limaData);
        table.appendChild(dataRow);
    },
};

const locations = [Seattle, Paris, Dubai, Lima, Tokyo];
function renderFooter() {
    let footerRow = document.createElement("tr");
    let footerHeader = document.createElement("th");
    footerHeader.textContent = "Hourly Numbers For All Locations";
    footerRow.appendChild(footerHeader);
    let grandTotal = 0;
    for (let i = 0; i < bhours.length; i++) {
        let hourlyTotal = 0;

        for (let j = 0; j < locations.length; j++) {
            hourlyTotal += locations[j].cookiesSoldPerHr[i];
            grandTotal += hourlyTotal[j].cookiesSoldPerHr[j];
        }
        let footerHeader = document.createElement("th");
        footerHeader.textContent = hourlyTotal;
        footerRow.appendChild(footerHeader);
    }
    footerHeader = document.createElement("th");
    footerHeader.textContent = grandTotal;
    footerRow.appendChild(footerHeader);
    table.appendChild(footerRow);

}
Seattle.render();
Paris.render();
Dubai.render();
Lima.render();
Tokyo.render();
renderFooter();
// function getRandomNumberOfCustomersGivenARange(minCustomers, maxCustomers) {
//     return (Math.floor(Math.random() * (maxCustomers - minCustomers + 1)) + minCustomers); // if we get 0 we start at mincustomers, otherwise we multiply difference between max and min times 0 or 1 adding 1 because zero based
// }


// const biznessHours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm"];


// function CookieStand(locationName, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerSale) {
//     this.locationName = locationName;
//     this.minCustomersPerHour = minCustomersPerHour;
//     this.maxCustomersPerHour = maxCustomersPerHour;
//     this.avgCookiesPerSale = avgCookiesPerSale;
//     this.customersEachHour = [];
//     this.cookiesEachHour = [];
//     this.totalDailyCookies = 0;
// }

// CookieStand.prototype.getCookiesSoldPerHour = function () {
//     for (let i = 0; i < biznessHours.length; i++) {
//         this.customersEachHour.push(getRandomNumberOfCustomersGivenARange(this.minCustomersPerHour, this.maxCustomersPerHour));
//     }
// };

// CookieStand.prototype.calcCookiesEachHour = function () {
//     this.getCookiesSoldPerHour();
//     for (let i = 0; i < biznessHours.length; i++) {
//         const oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale);
//         console.log(`Adding cookie hr ${oneHour}`);
//         this.cookiesEachHour.push(oneHour);
//         this.totalDailyCookies += oneHour;
//     }
// };

// CookieStand.prototype.render = function () {
//     this.calcCookiesEachHour();
//     const unorderedList = document.getElementById(this.locationName); // find a DIV with the same name as the city
//     for (let i = 1; i < biznessHours.length; i++) {
//         const listItem = document.createElement('li');
//         console.log(`${this.cookiesEachHour.length}`);
//         for (let index = 0; index < this.cookiesEachHour.length; index++) {
//             console.log(`${this.cookiesEachHour[index]}`);

//         }
//         listItem.innerText = biznessHours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
//         unorderedList.appendChild(listItem);
//     }
//     const listItem = document.createElement('li');
//     listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
//     unorderedList.appendChild(listItem);
// };


// let allCookieStands = [
//     new CookieStand('seattle', 23, 65, 6.3),
//     new CookieStand('tokyo', 3, 24, 1.2),
//     new CookieStand('dubai', 11, 38, 3.7),
//     new CookieStand('paris', 20, 38, 2.3),
//     new CookieStand('lima', 2, 16, 4.6),
// ];

// for (let index = 0; index < allCookieStands.length; index++) {
//     allCookieStands[index].render();

// }

let myForm = document.getElementById("nameForm")
// we add an event listener tied to what element we attached to the variable myForm
myForm.addEventListener('submit', submitLocation);
// this event listener should react when we press submit

function submitLocation(evt) {
    evt.preventDefault(); // prevent the default stuff from happening, Kevin example
    // alert("form submit"); sanity checks
    let locname = evt.target.locname.value;
    let locmin = evt.target.locmin.value;
    let locmax = evt.target.locmax.value;
    let locavg = evt.target.locavg.value;
    // do with values (eg. add to array)
    alert(`Thanks for submitting ${locname} to our data banks !, With ${locmin} minimum customers a day, and ${locmax} maximum customers per day, averaging about ${locavg} customers a day !`);
     let newLocation = new CookieStand(locname, locmin, locmax, locavg);
    newLocation.render();
};

// Let's load up an array with instances of cookie stands
let allCookieStands = [
    new CookieStand('seattle', 23, 65, 6.3),
    new CookieStand('tokyo', 3, 24, 1.2),
    new CookieStand('dubai', 11, 38, 3.7),
    new CookieStand('paris', 20, 38, 2.3),
    new CookieStand('lima', 2, 16, 4.6),
];

// Iterate through the array of stands and render each one
for (let index = 0; index < allCookieStands.length; index++) {
    allCookieStands[index].render();

}

createFooter();