var parseComicForm = function(data){
     
     for (var p = 0; p <= data.length; p++){
       if (data[p]) {
        var counter = 1;
        counter += p;
        var id = data[p].name.replace(/\[\]/, '');
        id = (id.indexOf('title') !== -1) ? id + counter : id;
        console.log(id);
        }
     }

};

$('a.force-reload').live('click', function(e) {
	var url = $(this).attr('href');
	$.mobile.changePage( url, { reloadPage: true, transition: "none"} );
	

});


$(document).bind('pageinit', function(){
    
 //Uses default lib to create the connection
 $('#rating, #notes').defaultValue();
  
 //sets default date
 var now = new Date();
 var month = (now.getMonth() + 1);               
 var day = now.getDate();
    if(month < 10) 
        month = "0" + month;
    if(day < 10) 
        day = "0" + day;
    var today = now.getFullYear() + '-' + month + '-' + day;
    $('#date').val(today);

  //$("#need").attr ("checked", "checked").checkboxradio ("refresh");

  //loads form validation
  var comicfm = $('#comicForm');                                           //uses validator plugin to set form
  comicfm.validate({                                                       //accesses methods of validator plugin
        invalidHandler: function(form, validator){},                       //calls the invalid fields handler
        submitHandler: function(){                                         //sets the submit handler
            var data = comicfm.serializeArray();                           
            parseComicForm(data);
    }
  });



 
 });



