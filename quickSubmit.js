document.QS = {};
document.QS.submitActiveForm = function() {
  (function(node) {
    while (node && node.nodeName != "FORM") {
      node = node.parentNode;
    }
    if (node) {
      console.log(node);
      node.submit();
    }
  })(document.activeElement);
};

document.QS.keysPressed = 0;
document.addEventListener('keydown', function(e) {
  if (e.keyCode == 18) {
    document.QS.keysPressed |= 0x01;
  } else if (e.keyCode == 16) {
    document.QS.keysPressed |= 0x02;
  } else if (e.keyCode == 83) {
    document.QS.keysPressed |= 0x04;
  } else {
    document.QS.keysPressed = 0;
  }
});

document.addEventListener('keyup', function(e) {
  if (document.QS.keysPressed == 0x07) {
    if (window.console) {
      console.log("QuickSubmit: alt+shift+s keypress detected!");
    }
    document.QS.submitActiveForm();
  }
  if (e.keyCode == 18) {
    document.QS.keysPressed &= ~0x01;
  } else if (e.keyCode == 16) {
    document.keysPressed &= ~0x02;
  } else if (e.keyCode == 83) {
    document.QS.keysPressed &= ~0x04;
  } else {
    document.QS.keysPressed = 0;
  }
});