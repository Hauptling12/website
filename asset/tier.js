function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}
function addtier() {
    var input = document.getElementById("inp").value;
    var html = '<p style="color:white" id="drag1" draggable="true" ondragstart="drag(event)">' + input + '</p>';
    document.getElementById("items").insertAdjacentHTML("beforeend",html)
}
