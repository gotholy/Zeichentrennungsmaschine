// * Sumbit auf das form Element um dieses auszuführen bei Submit
document.getElementById("form").addEventListener("submit", (event) => {
  event.preventDefault();

  // * Inputeingaben abrufen
  const zeichenkette = document.getElementById("zeichenkette").value;
  const woranTrennen = document.getElementById("woranTrennen").value;
  const trennOption = document.querySelector(
    `input[name="trennOption"]:checked`
  ).value;
  const davor = document.querySelector(".output");
  const danach = document.querySelector(".output2");
  console.log(davor);
  console.log(danach);
  console.log({ zeichenkette }, { woranTrennen }, { trennOption });
  if (zeichenkette.includes(woranTrennen)) {
    const indexTrennung = zeichenkette.indexOf(woranTrennen);
    console.log({ indexTrennung });
    const trennLenght = woranTrennen.length;
    console.log(trennLenght);
    // gib mir Index nach suchwort aus
    const afterSearchName = indexTrennung + trennLenght;
    console.log({ afterSearchName });
    // hier kommen wir rein wenn er das Trennwort findet
    // davor.innerHTML = "wort gefunden";
    if (trennOption == "davor") {
      davor.innerHTML = zeichenkette.slice(0, indexTrennung);
      danach.innerHTML = zeichenkette.slice(indexTrennung);
    } else {
      davor.innerHTML = zeichenkette.slice(0, afterSearchName);
      danach.innerHTML = zeichenkette.slice(afterSearchName);
    }
  } else {
    // hier kommen wir rein wenn er das Trennwort nicht findet
    davor.innerHTML = "fehler wort nicht gefunden";
    danach.innerHTML = "";
  }
});
