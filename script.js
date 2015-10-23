$(document).ready(function() {

  // Select by id. jQuery *always* returns an array of
  // elements, even when there's only one
  // 
  // var topArticle = document.getElementById("top-article");
  var article = $("#top-article");

  // Select by tag name.
  // 
  // var topArticle = document.getElementByTagName("button");
  var button = $("button");
  console.log("button", button.html());

  // Select by class
  // 
  // var mainArticles = document.getElementsByClassName("article--main");
  $(".article--main").each(function(arrayIndex, currentElement) {
    console.log($(currentElement).html());
  });

  // Select by attribute
  var umbreallaElement = $("h1[umbrella='open']");
  console.log("umbrella text: ", umbreallaElement.html());
  
  // Select children
  console.log("all children: ", $(".container").children()); // There are two children

  // Select specific children
  console.log("the h1: ", $(".container").children("h1"));
  console.log("the section: ", $(".container").children("section"));

  // Select specific child index (useful for ul/ol)
  // Example of chaining selectors
  console.log("third li: ", $("#letters").children(".letter").eq(2).html());

  // Finding an element
  var album = $(".container").find(".album");
  console.log("album", album.html());

  // Selecting siblings
  var aSibling = $(".a").next();
  console.log("aSibling: ", aSibling.html());

  // Selecting all siblings
  var aSiblings = $(".a").nextAll();
  aSiblings.each(function(index, el) {
    console.log("sibling text: ", $(el).html());
  });

  // Working with form fields and the val() method
  console.log("field value: ", $("#firstName").val());

  // Handling events
  $("#destroyer").click(function() {
    $(".container").hide();
    // $(".container").show();
    // $(".container").toggle();
  });

  $("#firstName").keyup(function() {
    $(".echo").html($(this).val());
  });

});


