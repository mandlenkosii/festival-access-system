
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

// CHALLENGE 10

console.log("===== CHALLENGE 10: VENUE CAPACITY =====");

let capacity = 5;
let peopleInside = 0;

for (let attendee of attendees) {
    if (attendee.age >= 18 && attendee.hasTicket === true) {
        peopleInside++;
        attendee.checkedIn = true;

        console.log(attendee.name + " entered.");
        console.log("People inside: " + peopleInside + " / " + capacity);

        if (peopleInside === capacity) {
            console.log("VENUE FULL");
            console.log("STOP ADMITTING PEOPLE");
            break;
        }
    } else {
        console.log(attendee.name + " was denied entry.");
    }
}

// CHALLENGE 11

console.log("===== CHALLENGE 11: COUNTDOWN =====");

let minutes = 10;

while (minutes >= 1) {
    console.log("Festival closes in " + minutes + " minute(s)...");

    if (minutes === 5) {
        console.log("WARNING: LAST ENTRY HAS ENDED");
    }

    if (minutes === 2) {
        console.log("PLEASE PROCEED TO THE EXIT");
    }

    minutes--;
}

console.log("FESTIVAL CLOSED");


// DASHBOARD CONTROL

console.log("===== FESTIVAL CONTROL =====");
console.log("1 - View Attendee Queue");
console.log("2 - Process Entry");
console.log("3 - View VIP Guests");
console.log("4 - View Denied Attendees");
console.log("5 - View Festival Statistics");
console.log("6 - Find Biggest Spender");
console.log("7 - Close Festival");

let option = 2;

switch (option) {
    case 1:
        console.log("ATTENDEE QUEUE");

        for (let attendee of attendees) {
            console.log(attendee.name + " - " + attendee.ticket);
        }
        break;

    case 2:
        console.log("PROCESSING ENTRY");

        let dashboardInside = 0;
        let dashboardCapacity = 5;

        for (let attendee of attendees) {
            if (attendee.age >= 18 && attendee.hasTicket === true) {
                if (dashboardInside < dashboardCapacity) {
                    dashboardInside++;
                    console.log(attendee.name + " -> ENTRY APPROVED");
                } else {
                    console.log("VENUE FULL - STOP ADMITTING PEOPLE");
                    break;
                }
            } else if (attendee.age < 18) {
                console.log(attendee.name + " -> DENIED: UNDER 18");
            } else {
                console.log(attendee.name + " -> DENIED: NO VALID TICKET");
            }
        }
        break;

    case 3:
        console.log("ELIGIBLE VIP GUESTS");

        for (let attendee of attendees) {
            if (
                attendee.ticket === "VIP" &&
                attendee.hasTicket === true &&
                attendee.age >= 18
            ) {
                console.log(attendee.name);
            }
        }
        break;

    case 4:
        console.log("DENIED ATTENDEES");

        for (let attendee of attendees) {
            if (attendee.age < 18) {
                console.log(attendee.name + " -> UNDER 18");
            } else if (attendee.hasTicket === false) {
                console.log(attendee.name + " -> NO VALID TICKET");
            }
        }
        break;

    case 5:
        console.log("FESTIVAL STATISTICS");

        let dashboardValid = 0;
        let dashboardInvalid = 0;
        let dashboardUnder18 = 0;
        let dashboardVIP = 0;
        let dashboardGeneral = 0;
        let dashboardSpend = 0;

        for (let attendee of attendees) {
            if (attendee.hasTicket === true) {
                dashboardValid++;
            } else {
                dashboardInvalid++;
            }

            if (attendee.age < 18) {
                dashboardUnder18++;
            }

            if (attendee.ticket === "VIP") {
                dashboardVIP++;
            } else if (attendee.ticket === "General") {
                dashboardGeneral++;
            }

            dashboardSpend = dashboardSpend + attendee.spend;
        }

        console.log("Total attendees: " + attendees.length);
        console.log("Valid tickets: " + dashboardValid);
        console.log("Invalid tickets: " + dashboardInvalid);
        console.log("Under 18: " + dashboardUnder18);
        console.log("VIP guests: " + dashboardVIP);
        console.log("General guests: " + dashboardGeneral);
        console.log("Total spending: R" + dashboardSpend);
        console.log(
            "Average spending: R" +
            (dashboardSpend / attendees.length).toFixed(2)
        );
        break;

    case 6:
        console.log("BIGGEST SPENDER");

        let dashboardTop = attendees[0];

        for (let attendee of attendees) {
            if (attendee.spend > dashboardTop.spend) {
                dashboardTop = attendee;
            }
        }

        console.log("Name: " + dashboardTop.name);
        console.log("Amount spent: R" + dashboardTop.spend);
        break;

    case 7:
        console.log("FESTIVAL CLOSED");
        break;

    default:
        console.log("Invalid menu option");
}
