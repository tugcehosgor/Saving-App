import "./styles.css";
// we use templete literal for HTML generation
document.getElementById("app").innerHTML = `
<div> 
<row>
  <col></col>
  <col></col>
  <col>
    <label>Daily saving:</label><br>
    <input id="dailySa" type="number" value="5"><br><br>
    <label >Savings so far (if you have any):</label><br>
    <input id="totalSa" type="number" value="100"><br><br>
    <label>Goal:</label><br>
    <input id="goal" type="number" value="900"><br><br>
    <button id="submit">calculate</button><br><br>
    <label id="textpaidFor"></label>
  </col>
</row>
</div>`;
// define variables
var dailyMoney;
let paidFor;
var totalSaving;
const today = new Date();
var goal;
var x;
// convert inputs into numbers
function onlyNumbers(a) {
  a = a.toString().replace(/\D/g, "");
  return a;
}

// read values from input
function readInputs() {
  dailyMoney = onlyNumbers(document.getElementById("dailySa").value);
  totalSaving = onlyNumbers(document.getElementById("totalSa").value);
  goal = onlyNumbers(document.getElementById("goal").value);
  console.log("daily money: " + dailyMoney);
  console.log("total saving " + totalSaving);
  console.log("today's date " + today);
  console.log("goal money " + goal);
}

// Add days to today's date **we define paidFor inside the function to reset it every time.
function addDays(date, days) {
  paidFor = new Date(date);
  paidFor.setDate(paidFor.getDate() + days);
  console.log("save until" + paidFor);
}

//Calculate how many days we need to save that money
function calculate() {
  // const paidDay = new Date();
  x = (goal - totalSaving) / dailyMoney;
  console.log("kac gun " + x);

  console.log(today);
  console.log(today.getDate() + x);
  // paidDay.setDate(today.getDate() + x);
  // console.log("hangi gun odeneiyor " + paidDay);
  return x;
}

//Write results
function write() {
  document.getElementById("textpaidFor").innerHTML =
    "You need to save until " + paidFor.toDateString();
}

//define what is going to happen when you hit the calculate button.
document.getElementById("submit").addEventListener("click", function () {
  readInputs();
  calculate();
  addDays(today, x);
  console.log("son dakka control: " + paidFor.toDateString());
  write();
});
