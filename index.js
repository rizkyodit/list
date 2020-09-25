function get() {
  let display = document.getElementById("input");
  document.getElementById("output").innerHTML += `<tr>
      <td>
      ${display.value}
      </td>
      <td>
        <input type="checkbox" required />
        
      </td>
    </tr>`;
  display.value = "";
}
let theItem = document.getElementById(item);
document.getElementById(el).innerHTML += "<br>";
document.getElementById(el).innerHTML += theItem.value;
theItem.value = "";
