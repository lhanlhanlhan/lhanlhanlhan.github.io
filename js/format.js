function detectTaskList() {
    var taskListObjects = document.getElementsByTagName("input");
    for (var i = 0; i < taskListObjects.length; i++) {
      var par = taskListObjects[i].parentNode;
      par.classList.add("task-list-item");
      par.parentNode.classList.add("task-list");
    }
}

function detectBlockTable() {
  var tableListObjects = document.getElementsByTagName("thead");
  for (var i = 0; i < tableListObjects.length; i++) {
    var par = tableListObjects[i].parentNode;
    par.classList.add("block-table");
  }
}

function detectCodeArea() {
  var codeObjects = document.getElementsByClassName("code");
  for (var i = 0; i < codeObjects.length; i++) {
    var children = codeObjects[i].childNodes;
    if (children && children.length > 0) {
      children = children[0];
      children.setAttribute("tabindex", 0);
    }
  }
}

function detectors(){
  detectTaskList();
  detectBlockTable();
  detectCodeArea();
}


