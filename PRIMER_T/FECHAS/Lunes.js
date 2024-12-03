const day = new Date("2024-9-15");
const year = 2070;

function Luens(day , year) {
    let match = 0;
    let years = [];

    while (day.getFullYear() <= year) {
        if (day.getDay() == 1) {
            match++;
            years.push(day.getFullYear());
        }
        day.setFullYear(day.getFullYear() + 1);
    }
    years.push("Total: " + match);
    return years;
}
console.log(Luens(day, year))
