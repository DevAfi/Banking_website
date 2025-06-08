function calculateMortgage() {
    const loanamount2 = parseFloat(document.getElementById("loanamount").value);           // I STILL HAVE TO FIND OUT HOW TO MAKE TEXT INPUTS RAAAAAAAH
    const loanterm2 = parseFloat(document.getElementById("loanterm").value);  
    const monthlyincome2 = parseFloat(document.getElementById("monthlyincome").value);  
    const MIR = 0.00375
    const nmp = 12 * loanterm2
    const interestrate = 4.5 

    const payment_threshold = 0.3 * monthlyincome2

    // top bit of calculation calculation
    const firstcalc = loanamount2 * MIR
    const secondcalc = 1 + MIR
    const thirdcalc = Math.pow(secondcalc, nmp)
    const fourthcalc = firstcalc * thirdcalc

    //bottom bit of calculation calculation AND FINAL ANSWER

    const fifthcalc = thirdcalc - 1
    const finalamount = fourthcalc / fifthcalc

    const alert_percentage = finalamount / monthlyincome2

    if (payment_threshold > finalamount) {
        document.getElementById("result").innerText = finalamount.toFixed(2);
        console.log(finalamount)
    }
    else {
        alert('your payment should not exceed 30% of your monthly income, the monthly payment would be £' + finalamount.toFixed(2) + '. The maximum monthly payment you could recieve is £' + payment_threshold)
    }
    
} 