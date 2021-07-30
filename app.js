

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
            grandTotal += hourlyTotal;
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