let isLoggedIn = true;
let userMessage; 

if (isLoggedIn) {
    let userRole = "admin"; 

    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

console.log("User Message:", userMessage); 

let userRole = "admin"; 
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level:", accessLevel);

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:", userCategory);

let isAuthenticated = true;

let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log("Authentication Status:", authenticationStatus);

// Define the person's role
let personRole = "Enrolled Member"; // Example roles: "Employee", "Enrolled Member", "Subscriber", "Non-Subscriber"

// Define the authorization message
let accessMessage;

// Use a switch statement to determine access based on role
switch (personRole) {
    case "Employee":
        accessMessage = "You are authorized to have access to Dietary Services.";
        break;
    case "Enrolled Member":
        accessMessage = "You are authorized to have access to Dietary Services and one-on-one interaction with a dietician.";
        break;
    case "Subscriber":
        accessMessage = "You are authorized to have partial access to Dietary Services.";
        break;
    case "Non-Subscriber":
        accessMessage = "Please enroll or subscribe to avail Dietary Services.";
        break;
    default:
        accessMessage = "Invalid role. Please provide a valid role to determine access.";
}

// Print the access message
console.log(accessMessage);
