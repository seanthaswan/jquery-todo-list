$(document).ready(function() {

  //Variables: add to list button, complete list, incomplete list, input box
  var todoDiv = $(".todo");
  var doneDiv = $(".done");
  var incomplete = $("ul#incomplete");
  var complete = $("ul#complete");
  var addButton = $("#add-button");
  var form = $("#form");
  var notDoneItem = $("#not-done-item");
  var doneItem = $("#done-item");
  var formBox = $("#form-box");
  var placeholderNotDone = $(".placeholder1");
  var placeholderDone = $(".placeholder2");

  // Stops form from refreshing the page upon "enter" key press.
  form.submit(function(e) {
    e.preventDefault();
    var listItem = $("#form-box").val();
    incomplete.append("<li id='not-done-item'>" + listItem + "</li>");
    formBox.val("");
    placeholderNotDone.remove();
    form.focus();
  })

  //Add to (div).todo's (ul).incomplete list
  addButton.click(function() {
    var listItem = $("#form-box").val();
    incomplete.append("<li id='not-done-item'>" + listItem + "</li>");
    formBox.val("");
    placeholderNotDone.remove();
  });

  // On click move to complete
  incomplete.on("click", "li", function() {
    var listItem = $(this).html();
    complete.append("<li id='done-item'>" + listItem + "</li>");
    this.remove();
    placeholderDone.remove();
  });

  // Remove from site
  complete.on("click", "li", function() {
  	var listItem = $(this).html();
  	this.remove();
  });


});
