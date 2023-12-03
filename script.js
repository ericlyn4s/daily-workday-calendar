// Create global variable of the hour of the day and an array of saved items in local storage

var nowHour = dayjs().hour();
var idContent = JSON.parse(localStorage.getItem('content'))||[];

$(function () {
  // Render the current date to the bottom of the header
  $("#currentDay").text(dayjs().format('dddd, MMMM D'));

  // At startup, render each hour time slot with past, present or future CSS via a function 
  $('.main' ).children('.time-block').each(function () {
  var timeSlot = ($(this).attr('id')).substring(5);
  // Remove any existing class assignments, assign a new class by comparing the time slot ID to the nowHour variable
  $(this).removeClass('past','present','future');
  if (timeSlot < nowHour) {
    $(this).addClass('past');
    } else if (timeSlot == nowHour) {
    $(this).addClass('present');
    } else {
    $(this).addClass('future');
  } ;
  });

  // Render each timeslot with local storage information
  $('.main' ).children('.time-block').each(function () {
    var idContent = JSON.parse(localStorage.getItem('content'));
    var timeSlot = $(this).attr('id');
    if (idContent != null) {
    var textToRender = idContent.indexOf(timeSlot);
    if (textToRender > -1) {
      $(this).children('.description').text(idContent[textToRender+1]);
    };
  };
  });

});

  // Save user input for a given timeslot to local storage
  $('.saveBtn').on('click',function() {
    // Create a local object with the time slot's time ID and content
    var Jhour = $(this).parent().attr('id');
    var JidContent = $(this).siblings(".description").val();

    // If user is overriding an existing event, update the value in local storage
    if (idContent.indexOf(Jhour)>-1) {
      idContent[idContent.indexOf(Jhour)+1] = JidContent;
    } else {    
    idContent.push(Jhour);
    idContent.push(JidContent);
    };

    // Input this object to localStorage
    localStorage.setItem('content', JSON.stringify(idContent));
  });
