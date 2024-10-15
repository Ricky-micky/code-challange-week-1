// Prompt user for basic salary and benefits
let basicPay = Number(prompt("Enter your basic pay", 0));
let benefits = Number(prompt("Enter your benefits", 0));

// Calculate gross pay
const grossPay = basicPay + benefits;

// Calculating the NHIF payments 
let nhifPayments = 0;
if (grossPay <= 5999) nhifPayments = 150;
else if (grossPay <= 7999) nhifPayments = 300;
else if (grossPay <= 11999) nhifPayments = 400;
else if (grossPay <= 14999) nhifPayments = 500;
else if (grossPay <= 19999) nhifPayments = 600;
else if (grossPay <= 24999) nhifPayments = 750;
else if (grossPay <= 29999) nhifPayments = 850;
else if (grossPay <= 34999) nhifPayments = 900;
else if (grossPay <= 39999) nhifPayments = 950;
else if (grossPay <= 44999) nhifPayments = 1000;
else if (grossPay <= 49999) nhifPayments = 1100;
else if (grossPay <= 59999) nhifPayments = 1200;
else if (grossPay <= 69999) nhifPayments = 1300;
else if (grossPay <= 79999) nhifPayments = 1400;
else if (grossPay <= 89999) nhifPayments = 1500;
else if (grossPay <= 99999) nhifPayments = 1600;
else nhifPayments = 1700;

// Calculating the NSSF payments
let nssfPayments = 0;
const tierOne = 7000;
const tierTwo = 36000;

if (grossPay <= tierOne) {
    nssfPayments = grossPay * (6 / 100); // 6% of grossPay if within Tier 1
} else {
    nssfPayments = tierOne * (6 / 100); // Fixed 6% of tierOne for grossPay above Tier 1
}

// Calculation for PAYE (Tax) 
let payePayments = 0;
let taxableIncome = grossPay - nhifPayments - nssfPayments;

if (taxableIncome <= 288000) {
    payePayments = taxableIncome * (10 / 100);
} else if (taxableIncome <= 388000) {
    payePayments = (taxableIncome - 288000) * (25 / 100) + (288000 * 0.1);
} else if (taxableIncome <= 6000000) {
    payePayments = (taxableIncome - 388000) * (30 / 100) + (100000 * 0.25) + (288000 * 0.1);
} else if (taxableIncome <= 9600000) {
    payePayments = (taxableIncome - 6000000) * (32.5 / 100) + (2112000 * 0.3) + (100000 * 0.25) + (288000 * 0.1);
} else {
    payePayments = (taxableIncome - 9600000) * (35 / 100) + (3600000 * 0.325) + (2112000 * 0.3) + (100000 * 0.25) + (288000 * 0.1);
}

// Total deductions
let totalDeductions = nhifPayments + nssfPayments + payePayments;

// Calculating Net Pay 
const netPay = grossPay - totalDeductions;

// Output results
console.log(`Your gross salary is: $${grossPay}`);
console.log(`Your NHIF payment is: $${nhifPayments}`);
console.log(`Your NSSF payment is: $${nssfPayments}`);
console.log(`Your PAYE payment is: $${payePayments}`);
console.log(`Your total deductions are: $${totalDeductions}`);
console.log(`Your net pay is: $${netPay}`);
