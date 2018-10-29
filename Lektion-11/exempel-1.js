// Arbeta med iterationer
// For-satsen 
// Exemepl 1

for (let i = 0; i < 10; i++) { // i++ eller i=i+1   // visar 0-9
    console.log(i);
}

console.log("----------------------");
// Exempel-2

for (let i = 1; i <= 10; i++) { // Visar 1-10
    console.log(i);
}
console.log("---------------------");

// Exmepel-3

for (let i = 1; i <= 10; i = i + 2) { // Visar udda tal upp til 10

}
console.log("----------------------");

let str = "";
for (let i = 1; i <= 10; i = i + 2) {
    str += i;
    if (i < 10) {
        str += i + ",";
    }
} // Skriver ut följande tal mellan 1 och 10
// 1, 3, 5, 7, 9
console.log(str);

console.log("-------------------");
// Exempel 4

for (let i = 1; i <= 10; i++) {

    if (i % 3 === 0) // ingen rest vid division av 3
        console.log(i);
}
console.log("-----------------");

let os = ['Windows', 'Macintosh', 'Linux'];
for (let i = 0; i < os.length; i++) {
    console.log(os[i]);
}
console.log("------------------------");

let operativsystem = ["Windows", "Macintosh", "Linux", "IOS"];
for (let i = 0; i < operativsystem.length; i++) {
    console.log(operativsystem[i]);
}
console.log("-------------------------");

let data = [{
        name: "Anna",
        email: "anna@gmail.com"
    },
    {
        name: "Frida",
        email: "frida@gmail.com"
    },
    {
        name: "Elin",
        email: "elin@gmail.com"
    },
    {
        name: "Alex",
        email: "alex@gmail.com"
    },

];
for (let i = 0; i < data.length; i++) {
    console.log(data[i].email);
}
console.log("------------For-in----------------");
// For-in-satsen   || enklare syntax 
for (let i in data) {
    console.log(i + ":" + data[i].name);
}

console.log("-------------For-of-------------");

// For-of-satsen
for (let obj of data) {
    console.log(obj.email);
}

console.log("----------------------");

/*data = [{
            name: "Anna",
            email: "anna@gmail.com",
            address: {
                street: "Tomtebodavägen 3A",
                area: "Solna",
                zipcode: "171 12"
            },
            {
                name: "Frida",
                email: "frida@gmail.com",
                address: {
                    street: "Tomtebodavägen 3A",
                    area: "Solna",
                    zipcode: "171 12"

                },
                {
                    name: "Elin",
                    email: "elin@gmail.com",
                    address: {
                        street: "Tomtebodavägen 3A",
                        area: "Solna",
                        zipcode: "171 12"
                    },
                    {
                        name: "Alex",
                        email: "alex@gmail.com",
                        address: {
                            street: "Tomtebodavägen 3A",
                            area: "Solna",
                            zipcode: "171 12"
                        },

                    }]; */

                for (let obj of data) {
                    console.log(obj);
                }