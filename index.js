
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
