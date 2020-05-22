let birth_date = ''; // Fill with your birthday (MM-DD-YYYY H:i:s)
let start_date = new Date(birth_date);

// Indonesian Life expectancy custom with your country
let estimated_date = new Date(start_date.getFullYear()+74, start_date.getMonth()+3, start_date.getDate()+17);

function calculateDay(time, lasttime = null) { // birthday is a date
    if(!lasttime)
        lasttime = new Date();
    let different = lasttime.getTime() - time.getTime();
    return different/ (1000 * 3600 * 24);
}
function percentage(){
    let time = calculateDay(start_date);
    let estimated = calculateDay(start_date, estimated_date);
    console.log(time/estimated);
    return (Math.round(time/estimated*10000)/100).toFixed(2);
}
function bar(){
    return percentage()*99/100;
}
document.getElementById("data").style.width = bar()+"%";
document.getElementById("total").innerHTML = percentage()+"%";