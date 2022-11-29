const tableBody = document.getElementById("table-body");

let flights = [
  {
    time: "08:11",
    destination: "OMAN",
    flight: "OX 203",
    gate: "A 01",
    remarks: "ON TIME",
  },
  {
    time: "10:20",
    destination: "DUBAI",
    flight: "TK 211",
    gate: "A 32",
    remarks: "DELAYED",
  },
  {
    time: "16:35",
    destination: "LAX",
    flight: "DEV 616",
    gate: "E 40",
    remarks: "CANCELLED",
  },
];

const destinations = ['TOKYO', "LONDON", "PUERTO RICO", "DUBAI", "COLORADO"]
const remarks = ['ON TIME', 'DELAYED', 'CANCELLED']
let hour = 15

function populateTable() {
  for (const flight of flights) {
    const tableRow = document.createElement("tr");

    for (const flightDetail in flight) {
      const tableCell = document.createElement("td");
      const word = Array.from(flight[flightDetail])

      for (const [index, letter] of word.entries()) {
        const letterEl = document.createElement('div')

        setTimeout(() => {
                    letterEl.classList.add('flip')
                    letterEl.textContent = letter
                    tableCell.append(letterEl)
            
        }, 100 * index)
      }

      tableRow.append(tableCell);
    }

    tableBody.append(tableRow);
  }
}

populateTable();

function generateLetter() {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    return alphabet.charAt(Math.floor(Math.random() * alphabet.length))
}

function generateNumber(maxNumber) {
    const numbers = "0123456789"
    if (maxNumber) {
        const newNumbers = numbers.slice(0, maxNumber)
        return newNumbers.charAt(Math.floor(Math.random() * newNumbers.length))
    }
    return numbers.charAt(Math.floor(Math.random() * numbers.length))
}

function generateTime() {
    let displayHour = hour

    if (hour < 24) {
        hour++
    }
    if (hour >= 24) {
        hour = 1
        displayHour = hour
    }
    if (hour < 10) {
        displayHour = "0" + hour
    }

    return displayHour + ":" + generateNumber(5) + generateNumber()
}

function shuffleUp() {
    flights.shift()
    flights.push({
        time: generateTime(),
        destination: destinations[Math.floor(Math.random() * destinations.length)],
        flight: generateLetter() + generateLetter() + " " + generateNumber() + generateNumber(),
        gate: generateLetter() + " " + generateNumber() + generateNumber(),
        remark: remarks[Math.floor(Math.random() * remarks.length)]
    })

    tableBody.textContent = ""
    populateTable()
}

setInterval(shuffleUp, 5000)
