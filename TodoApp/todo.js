function toDoForm(action) {
  if (action === "open") {
    document.getElementById("displayForm").style.display = "block";
  } else {
    let prioritySelection = document.getElementById("priority");
    console.log(prioritySelection.options[prioritySelection.selectedIndex].text);
    console.log(document.getElementById("toDoText").value);
    console.log(document.getElementById("toDoDesc").value);
    console.log(document.getElementById("date").value);
    document.getElementById("displayForm").style.display = "none";
  }
}

function addRow(tableID) {
  let table = document.getElementById(tableID);

  let rowCount = table.rows.length;
  let row = table.insertRow(rowCount);
  let rowId = rowCount + 1;

  let cell = row.insertCell(0);
  let checkTag = document.createElement("div");
  checkTag.innerHTML =
    '<input type="checkbox" onClick = "strikeOffToDo(\'todo' +
    rowId +
    "')\" id=" +
    rowId +
    ' name="task"> <label for = "task">Complete</label>';
  cell.appendChild(checkTag);

  let cell1 = row.insertCell(1);
  let prioritySelection = document.getElementById("priority");
  let element1 = document.createElement("INPUT");
  element1.type = "text";
  element1.value = prioritySelection.options[prioritySelection.selectedIndex].text;
  cell1.appendChild(element1);

  let cell2 = row.insertCell(2);
  let element2 = document.createElement("input");
  element2.type = "text";
  element2.value = document.getElementById("toDoText").value;
  element2.id = "todo" + rowId;
  cell2.appendChild(element2);

  let cell3 = row.insertCell(3);
  let element3 = document.createElement("input");
  element3.type = "text";
  element3.value = document.getElementById("date").value;
  cell3.appendChild(element3);

  let cell4 = row.insertCell(4);
  let element4 = document.createElement("input");
  element4.type = "text";
  element4.value = "Pending";
  cell4.appendChild(element4);

  let cell5 = row.insertCell(5);
  let inputTag = document.createElement("div");
  inputTag.innerHTML =
    "<button onClick = \"deleteRow('" +
    tableID +
    "',id)\" id=" +
    rowId +
    "><img src=\"delete.png\">";
  cell5.appendChild(inputTag);
}

function deleteRow(tableID, rowId) {
  let table = document.getElementById(tableID);
  let j = 0;
  table.deleteRow(rowId - 1);

  let buttonList = document.querySelectorAll("td div button");
  for (i = 2; i <= table.rows.length; i++) {
    buttonList[j].id = i;
    j++;
  }
}

function deleteAll(tableID) {
  let table = document.getElementById(tableID);
  for (i = table.rows.length - 1; i > 0; i--) {
    table.deleteRow(i);
  }
}

function strikeOffToDo(todoId) {
  let toDoText = document.getElementById(todoId);
  toDoText.style.setProperty("text-decoration", "line-through");
}
