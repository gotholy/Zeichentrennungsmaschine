// ! ========  ERSTER VERSUCH GESCHEITERT :D ====== //
// * Ergebnis wird nur entweder das davor oder das danach angezeigt :( //

// document.getElementById("form").addEventListener("submit", (event) => {
//   event.preventDefault();

//   // Benutzereingaben abrufen
//   const zeichenkette = document.getElementById("zeichenkette").value;
//   const woranTrennen = document.getElementById("woranTrennen").value;
//   const trennOption = document.querySelector(
//     `input[name="trennOption"]:checked`
//   ).value;

//   // Zeichenkette trennen
//   let ergebnis;
//   if (trennOption === "davor") {
//     ergebnis = zeichenkette.split(woranTrennen)[0];
//   } else {
//     ergebnis = zeichenkette.split(woranTrennen)[1];
//   }

//   // Ergebnis anzeigen
//   const outputElement1 = document.querySelector(".output");
//   outputElement1.textContent = ergebnis;
// });

// ! ========== ZWEITER VERSUCH ========== //

// * Sumbit auf das form Element um dieses auszuführen bei Submit
document.getElementById("form").addEventListener("submit", (event) => {
  event.preventDefault();

  // * Inputeingaben abrufen
  const zeichenkette = document.getElementById("zeichenkette").value;
  const woranTrennen = document.getElementById("woranTrennen").value;
  const trennOption = document.querySelector(
    `input[name="trennOption"]:checked`
  ).value;

  // * Zeichenkette trennen
  let ergebnis1, ergebnis2;
  if (trennOption === "davor") {
    // - "davor"
    {
      const splitResult = zeichenkette.split(woranTrennen);
      ergebnis1 = splitResult[0];
      ergebnis2 = splitResult.slice(1).join(woranTrennen);
    }
  } else {
    // - "danach"
    {
      const index = zeichenkette.indexOf(woranTrennen);
      if (index !== -1) {
        ergebnis1 = zeichenkette.substring(0, index);
        ergebnis2 = zeichenkette.substring(index + woranTrennen.length);
      } else {
        ergebnis1 = zeichenkette;
        ergebnis2 = "";
      }
    }
  }

  // * Ergebnisse anzeigen
  const outputElement = document.querySelector(".output");
  const output2Element = document.querySelector(".output2");
  outputElement.textContent = ergebnis1;
  output2Element.textContent = ergebnis2;
});
