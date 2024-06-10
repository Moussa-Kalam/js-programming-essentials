/** Conditionals */
let userRole = 'admin';
let accessLevel;

if (userRole === 'admin') {
  accessLevel = 'Full access granted';
} else if (userRole === 'manager') {
  accessLevel = 'Limited access granted';
} else {
  accessLevel = 'No access granted';
}

console.log('Access Level:', accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
  if (userRole === 'admin') {
    userMessage = 'Welcome, Admin!';
  } else {
    userMessage = 'Welcome, User!';
  }
} else {
  userMessage = 'Please log in to access the system.';
}

console.log('User Message:', userMessage);

/** Switch statement */
let userType = 'subscriber';
let userCategory;

switch (userType) {
  case 'admin':
    userCategory = 'Administrator';
    break;
  case 'manager':
    userCategory = 'Manager';
    break;
  case 'subscriber':
    userCategory = 'Subscriber';
    break;
  default:
    userCategory = 'Unknown';
}

console.log('User Category:', userCategory);

/** Ternary operator */
let isAuthenticated = true;

let authenticationStatus = isAuthenticated
  ? 'Authenticated'
  : 'Not authenticated';

console.log('Authentication Status:', authenticationStatus);

/* Practice task */

let person = 'Subscriber';

let authorization1;

if (person === 'Employee') {
  authorization1 = 'You are eligible to Dietary Services';
} else if (person === 'Enrolled Member') {
  authorization1 =
    'You are eligible for dietary Services & a 1:1 with the dietician';
} else if (person === 'Subscriber') {
  authorization1 =
    'You are eligible to a partial access to Dietary Services only';
} else if (person === 'Non-Subscriber') {
  authorization1 = 'You need to subscribe first to avail this facility.';
} else {
  authorization1 = 'You need to subscribe first to avail this facility.';
}

console.log(authorization1);

// Using ternary
let authorization2 =
  person === 'Employee'
    ? 'You are eligible to Dietary Services'
    : person === 'Enrolled Member'
    ? 'You are eligible for dietary Services & a 1:1 with the dietician'
    : person === 'Subscriber'
    ? 'You are eligible to a partial access to Dietary Services only'
    : 'You need to subscribe first to avail this facility.';

console.log(authorization2);
