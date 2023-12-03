var nowHour = dayjs().hour();

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$('.main' ).children('.time-block').each(function () {
  var timeSlot = ($(this).attr('id')).substring(5);
  $(this).removeClass('past','present','future');
  if (timeSlot < nowHour) {
    $(this).addClass('past');
  } else if (timeSlot == nowHour) {
    $(this).addClass('present');
  } else {
    $(this).addClass('future');
  };
});

idContent = JSON.parse(localStorage.getItem('content'));

$(function () {
  // Render the current date to the bottom of the header
  $("#currentDay").text(dayjs().format('dddd, MMMM D'));

  // Save user input for a given timeslot to local storage
  $('.saveBtn').on('click',function() {
    // Create a local object with the time slot's time ID and content

    var Jhour = $(this).parent().attr('id');
    var JidContent = $(this).siblings(".description").val();
    
    idContent.push(Jhour);
    idContent.push(JidContent);
    
    // Input this object to localStorage
    localStorage.setItem('content', JSON.stringify(idContent));
  })
console.log(idContent);
  // Render each timeslot with local storage information
$('.main' ).children('.time-block').each(function () {
  var timeSlot = $(this).attr('id');
  var textToRender = idContent.indexOf(timeSlot);
  if (textToRender > -1) {
    $(this).children('.description').text(idContent[textToRender+1]);
};
});





  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
