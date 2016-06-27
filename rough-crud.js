$(document).ready(function() {
  // create object instance of my Firebase database
  var myDBReference = new Firebase('https://smapfaminfo.firebaseio.com//');
/*
  var sourceTemplate = $('#list-template').html();
  var template = Handlebars.compile(sourceTemplate);
*/
  // define submit event listener/handler
  $('#submit-button').click(function(event) {
    // prevents page refresh
    event.preventDefault();

    // grab user input
    var famInfo = 'family information'
    var parentNames = $('#mother-first').val();
   /* var residence = $('#addresses').val();*/
    var familyInfo = myDBReference.child(famInfo);  
    familyInfo.push({
      momFirst: parentNames   

    });
  });
/*
  // Read functionality
  myDBReference.child('messages').on('child_added', function(results) {
    results.forEach(function(message) {

      var data = {
        message: message.val(),
        id: results.key()
      };

      var templateHTML = template(data);

      var $templateHTML = $(templateHTML);

      $templateHTML.click(function() {
        var messageId = $(this).data('id');
        updateMessage(messageId);
      })
      $('#messages-list').append($templateHTML);
    });
  });

  // Update Functionality
  function updateMessage(id, message) {
    var messageReference = new Firebase('https://fan-message-board.firebaseio.com/messages/' + id);

    messageReference.update({
      message: 'fu man shu'
    });

  }

  // Delete functionality
  function deleteMessage(id) {
    var messageReference = new Firebase('https://fan-message-board.firebaseio.com/messages/' + id);

    messageReference.remove();
  }

*/
});
