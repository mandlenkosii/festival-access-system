
let attendees = [
    { name: "Lebo", age: 22, ticket: "General", hasTicket: true, checkedIn: false, spend: 350 },
    { name: "Aisha", age: 19, ticket: "VIP", hasTicket: true, checkedIn: false, spend: 1200 },
    { name: "Thabo", age: 17, ticket: "General", hasTicket: true, checkedIn: false, spend: 250 },
    { name: "Naledi", age: 25, ticket: "VIP", hasTicket: true, checkedIn: false, spend: 850 },
    { name: "Jason", age: 31, ticket: "General", hasTicket: false, checkedIn: false, spend: 0 },
    { name: "Zanele", age: 20, ticket: "General", hasTicket: true, checkedIn: false, spend: 650 },
    { name: "Karabo", age: 16, ticket: "VIP", hasTicket: true, checkedIn: false, spend: 900 },
    { name: "Michael", age: 28, ticket: "General", hasTicket: true, checkedIn: false, spend: 450 }
];



console.log("===== CHALLENGE 1: VIEW THE QUEUE =====");

for (let attendee of attendees) {
    console.log("========================");
    console.log("Name: " + attendee.name);
    console.log("Age: " + attendee.age);
    console.log("Ticket: " + attendee.ticket);
    console.log("Valid Ticket: " + attendee.hasTicket);
}
//  CHALLENGE 2

console.log("===== CHALLENGE 2: WHO CAN ENTER? =====");

for (let attendee of attendees) {
    if (attendee.age >= 18 && attendee.hasTicket === true) {
        console.log(attendee.name + " -> ENTRY APPROVED");
    } else if (attendee.age < 18) {
        console.log(attendee.name + " -> ENTRY DENIED: UNDER 18");
    } else {
        console.log(attendee.name + " -> ENTRY DENIED: NO VALID TICKET");
    }
}

// CHALLENGE 3

console.log("===== CHALLENGE 3: ACCESS ZONES =====");

for (let attendee of attendees) {
    if (attendee.age >= 18 && attendee.hasTicket === true) {
        console.log("Name: " + attendee.name);

        switch (attendee.ticket) {
            case "VIP":
                console.log("Wristband: GOLD");
                break;

            case "General":
                console.log("Wristband: BLUE");
                break;

            default:
                console.log("Wristband: UNKNOWN TICKET TYPE");
        }
    }
}

// CHALLENGE 4

console.log("===== CHALLENGE 4: VIP LOUNGE =====");

for (let attendee of attendees) {
    if (
        attendee.hasTicket === true &&
        attendee.ticket === "VIP" &&
        attendee.age >= 18
    ) {
        console.log(attendee.name + " -> VIP LOUNGE ACCESS APPROVED");
    } else if (attendee.ticket === "VIP") {
        console.log(attendee.name + " -> VIP LOUNGE ACCESS DENIED");
    }
}

// CHALLENGE 5


console.log("===== CHALLENGE 5: FIND A PERSON =====");

let searchName = "Zanele";
let found = false;

for (let attendee of attendees) {
    if (attendee.name === searchName) {
        console.log("ATTENDEE FOUND");
        console.log("Name: " + attendee.name);
        console.log("Age: " + attendee.age);
        console.log("Ticket: " + attendee.ticket);
        console.log("Valid Ticket: " + attendee.hasTicket);

        found = true;
        break;
    }
}

if (found === false) {
    console.log("ATTENDEE NOT FOUND");
}

// CHALLENGE 6


console.log("===== CHALLENGE 6: SECURITY FAST LANE =====");

for (let attendee of attendees) {
    if (attendee.hasTicket === false) {
        continue;
    }

    console.log("Checking " + attendee.name + "...");
}

// CHALLANGE 7


console.log("===== CHALLENGE 7: FOOD VOUCHERS =====");

for (let attendee of attendees) {
    if (attendee.spend >= 1000) {
        console.log(attendee.name + " -> R200 food voucher");
    } else if (attendee.spend >= 500) {
        console.log(attendee.name + " -> R100 food voucher");
    } else if (attendee.spend >= 300) {
        console.log(attendee.name + " -> R50 food voucher");
    } else {
        console.log(attendee.name + " -> No voucher");
    }
}

//CHALLENGE 8


console.log("===== CHALLENGE 8: FESTIVAL STATISTICS =====");

let totalAttendees = attendees.length;
let validTickets = 0;
let invalidTickets = 0;
let under18 = 0;
let vipCount = 0;
let generalCount = 0;
let totalSpend = 0;
let biggestSpender = attendees[0];

for (let attendee of attendees) {
    if (attendee.hasTicket === true) {
        validTickets++;
    } else {
        invalidTickets++;
    }

    if (attendee.age < 18) {
        under18++;
    }

    if (attendee.ticket === "VIP") {
        vipCount++;
    } else if (attendee.ticket === "General") {
        generalCount++;
    }

    totalSpend = totalSpend + attendee.spend;

    if (attendee.spend > biggestSpender.spend) {
        biggestSpender = attendee;
    }
}

let averageSpend = totalSpend / totalAttendees;

console.log("Total attendees: " + totalAttendees);
console.log("Valid tickets: " + validTickets);
console.log("Invalid tickets: " + invalidTickets);
console.log("Under 18: " + under18);
console.log("VIP ticket holders: " + vipCount);
console.log("General ticket holders: " + generalCount);
console.log("Total spending: R" + totalSpend);
console.log("Average spending: R" + averageSpend.toFixed(2));
console.log("Highest spender: " + biggestSpender.name);

//CHALLENGE 9


console.log("===== CHALLENGE 9: BIGGEST SPENDER =====");

let topCustomer = attendees[0];

for (let attendee of attendees) {
    if (attendee.spend > topCustomer.spend) {
        topCustomer = attendee;
    }
}

console.log("===== TOP CUSTOMER =====");
console.log("Name: " + topCustomer.name);
console.log("Amount Spent: R" + topCustomer.spend);

if (topCustomer.spend >= 1000) {
    console.log("Reward: Backstage Upgrade");
}

