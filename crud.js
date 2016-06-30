$(document).ready(function() {
  var myDBReference = new Firebase('https://smapfaminfo.firebaseio.com//');
  
  $('#submit-parent-info').on("click", function(event) {
    event.preventDefault();
    var parentInfo = new Object();
      parentInfo.momFirst = $('#mother-first').val();
      parentInfo.momLast = $('#mother-last').val();
      parentInfo.dadFirst = $('#father-first').val();
      parentInfo.dadLast = $('#father-last').val();

    var $momFirst = parentInfo.momFirst;
    var $momLast = parentInfo.momLast;
    var $dadFirst = parentInfo.dadFirst;
    var $dadLast = parentInfo.dadLast;
    // create an empty object, put the values of input field into that object
    // push that data object to firebase

    var familyInfo = myDBReference.child('parentInformation');  
  
    familyInfo.push({
      momFirst: $momFirst,
      momLast: $momLast,
      dadFirst: $dadFirst,
      dadLast: $dadLast   
    });
  });

    

myDBReference.child('parentInformation').on('child_added', function(results) {
    results.forEach(function(parentInformation) {
      var data = {
        momFirst: results.val().momFirst,
        momLast: results.val().momLast,
        dadFirst: results.val().dadFirst,
        dadLast: results.val().dadLast, 
        id: results.key()
      }

      var userEntryValue = parentInformation.A.B;
      var userEntryKey = parentInformation.Y.path.u[2];
      var dataKey = parentInformation.Y.path.u[1];
      
      var readableData = dataKey + " , " + userEntryValue + ": "+ userEntryKey;
     console.log(readableData);
     //console.log(userEntryValue);
      //console.log(data);
      });

      //console.log(parentInformation.A.B);
      //console.log(parentInformation.Y.path.u[2]);
      //console.log(parentInformation.Y.path.u[1]);
      //console.log(parentInformation);
      //console.log(parentInformation.Y.path.u.1);
    });
    
   
    });

  

  


/*

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

 