$.get("/api/all", function(data) {

  if (data.length !== 0) {

    for (var i = 0; i < data.length; i++) {

      var row = $("<div>");
      row.addClass("chirp");

      row.append("<p>" + data[i].name + "</p>");
      row.append("<p>" + data[i].email + "</p>");
      row.append("<p>" + data[i].message + "</p>");
      row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");

      $("#chirp-area").prepend(row);

    }

  }

});


$("#contact-submit").on("click", function(event) {
  event.preventDefault();


  var newContact = {
    name: $("#name").val().trim(),
    email: $("#email").val().trim(),
    message: $("#message").val().trim(),
    created_at: moment().format("YYYY-MM-DD HH:mm:ss")
  };


  $.post("/api/new", newContact)
    .then(function() {

      var row = $("<div>");
      row.addClass("chirp");

      row.append("<p>" + newContact.name + "</p>");
      row.append("<p>" + newContact.email + "</p>");
      row.append("<p>" + newContact.message + "</p>");
      row.append("<p>At " + moment(newContact.created_at).format("h:mma on dddd") + "</p>");

      $("#chirp-area").prepend(row);

    });


  $("#name").val("");
  $("#email").val("");
  $("#message").val("");
});
