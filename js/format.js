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

function detectImagesAndGeneratePreviews() {
  let previewBlock = $('.hp-imgpreview');

  if (!previewBlock.length) {
    return;
  }

  function hidePreview() {
    previewBlock.removeAttr("tabindex")
    previewBlock.attr('hidden', 'true')
  }

  // add preview dismiss methods
  previewBlock.keydown(function(event) {
    if (event.keyCode === 27) {
      hidePreview()
    }
  });
  
  previewBlock.click(function(event) {
    if ($(event.target).hasClass("hp-imgpreview")) {
      console.log("您点击了父元素！");
      hidePreview()
    }
    // 阻止事件冒泡
    event.stopPropagation();
  })

  // detect image blocks for which we generate a preview page for it
  $('.post-content img').each(function(ii, img) {
    if (!img.src) return;

    $(this).click(function() {
      previewBlock.attr("tabindex", "0")
      previewBlock.removeAttr('hidden')
      previewBlock.focus()
      $('.hp-imgpreview a').attr('href', img.src).click(function(event) {
        event.preventDefault();
        if (img.src) {
          window.open(img.src, "newWindow", "width=800,height=600");
        }
      });
      $('.hp-imgpreview .prev-img').attr('src', img.src)
    })
  })
}


function detectors(){
  detectTaskList();
  detectBlockTable();
  detectCodeArea();
  detectImagesAndGeneratePreviews();
}


