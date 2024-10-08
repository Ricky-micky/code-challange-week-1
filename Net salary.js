// Prompt user for basic salary and benefits
let basicPay = Number(prompt(Enter_your_basic_pay, 0));
let benefits = Number(prompt(Enter_your_benefits, 0));


// Calculate gross pay
const grossPay = basicPay + benefits;

// calculating the NHIF payments 
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

//calculating the NSSF payments
let nssfPayments = 0;
const tierOne = 7000;
const tierTwo = 36000;
if (grossPay <= tierOne) {
    nssfPayments = grossPay * (6 / 100); // 6% of grossPay if within Tier 1
} else {
    nssfPayments = tierTwo * (6 / 100); // Fixed 6% of tierTwo for grossPay above Tier 1
}

// calculation for PAYE (Tax) 
let payePayments = 0;
let taxableIncome = grossPay - nhifPayments - nssfPayments;

if (taxableIncome <= 288000) {
    payePayments = taxableIncome * (10 / 100);
} else if (taxableIncome <= 388000) {
    payePayments = taxableIncome * (25 / 100);
} else if (taxableIncome <= 6000000) {
    payePayments = taxableIncome * (30 / 100);
} else if (taxableIncome <= 9600000) {
    payePayments = taxableIncome * (32.5 / 100);
} else {
    payePayments = taxableIncome * (35 / 100);
}

// Total deductions
let totalDeductions = nhifPayments + nssfPayments + payePayments;

//calculating Net Pay 
const netPay = grossPay - totalDeductions;

// Output results
console.log(Your_gross_salary_is$grossPay);

console.log(Your_NHIF_payment_is_$nhifPayments);

console.log(Your_NSSF_payment_is$nssfPayments);

console.log(Your_PAYE_payment_is$ayePayments);

console.log(Your_Total_Deductions_are$totalDeductions);

console.log(Your_Net_Pay_is$_netPay);