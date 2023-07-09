const data = [
        {
            unit: "Length (Meters/Feet)",
            firstMetric: "meters",
            secondMetric: "feet",
            conversion: 3.281},    
        {
            unit: "Volume (Liters/Gallons)",
            firstMetric: "liters",
            secondMetric: "gallons",
            conversion: 0.264},
        {
            unit: "Mass (Kilograms/Pounds)",
            firstMetric: "kilograms",
            secondMetric: "pounds",
            conversion: 2.204}
]

const btnEl = document.getElementById("convert-btn")
const listEl = document.getElementById("conversion-list")
const textEl = document.getElementById("input-field")

let numvalue = 0

function populateList(arr){
    let titleString = ""
    for (i = 0; i < arr.length; i++){
        titleString += `<p><li>${arr[i].unit}</li>
                        <li class="result">${numvalue} ${arr[i].firstMetric} = ${(numvalue * arr[i].conversion).toFixed(2)} ${arr[i].secondMetric} | ${numvalue} ${arr[i].secondMetric} = ${(numvalue / arr[i].conversion).toFixed(2)} ${arr[i].firstMetric} </li></p>`
    }
    listEl.innerHTML = titleString
}

const convEl = document.getElementById("conversion-text")

btnEl.addEventListener("click", function(){
    numvalue = textEl.value
    populateList(data)
})

