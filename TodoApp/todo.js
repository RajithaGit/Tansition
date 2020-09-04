function toDoForm(action) {
  if (action === "open") {
    document.getElementById("displayForm").style.display = "block";
  } else {
    document.getElementById("displayForm").style.display = "none";
  }
}

function addRow(tableID) {
  let table = document.getElementById(tableID);

  let rowCount = table.rows.length;
  let row = table.insertRow(rowCount);

  let cell = row.insertCell(0);
  let element = document.createElement("input");
  element.type = "checkbox";
  element.innerHTML = "Complete";
  cell.appendChild(element);

  let cell1 = row.insertCell(1);
  let element1 = document.createElement("input");
  element1.type = "text";
  element1.name = "Priority";
  cell1.appendChild(element1);

  let cell2 = row.insertCell(2);
  let element2 = document.createElement("input");
  element2.type = "text";
  element2.name = "ToDo";
  cell2.appendChild(element2);

  let cell3 = row.insertCell(3);
  let element3 = document.createElement("input");
  element3.type = "text";
  element3.name = "End Date";
  cell3.appendChild(element3);

  let cell4 = row.insertCell(4);
  let element4 = document.createElement("input");
  element4.type = "text";
  element4.name = "Status";
  cell4.appendChild(element4);

  let cell5 = row.insertCell(5);
  let id = rowCount + 1;
  let inputTag = document.createElement("div"); 
  inputTag.innerHTML = "<button onClick = \"deleteRow('"+tableID+"',id)\" id=" + id + ">Delete";    
  cell5.appendChild(inputTag);  
}

function deleteRow(tableID, rowID) {
  try {
    let table = document.getElementById(tableID);
    table.deleteRow(rowID);
  } catch (e) {
    alert(e);
  }
}

function deleteAll(tableID) {
  let table = document.getElementById(tableID);

  for (i = table.rows.length - 1; i > 0; i--) {
    table.deleteRow(i);
  }
}
