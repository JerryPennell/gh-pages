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

//Clear form function

    $.fn.clearForm = function() {
      // iterate each matching form
      return this.each(function() {
        // iterate the elements within the form
        $(':input', this).each(function() {
          var type = this.type, tag = this.tagName.toLowerCase();
          if (type == 'text' || type == 'password' || type == 'email' || tag == 'textarea')
            this.value = '';
          else if (type == 'checkbox' || type == 'radio')
            this.checked = false;
          else if (tag == 'select')
            this.selectedIndex = -1;
        });
      });
    };



//Resets the form
$('#reset').click(function() {
    $('#comicForm').clearForm(); 
    
});


$(document).bind('pageinit', function(){
    
 //Uses default lib to create the connection
 $('#rating, #notes').defaultValue();

 $("#need").attr ("checked", "checked").checkboxradio ("refresh");
 
 //sets default date
  var now = new Date();
  var month = (now.getMonth() + 1);               
  var day = now.getDate();
     if(month < 10) 
         month = "0" + month;
     if(day < 10) 
         day = "0" + day;     
     var today = month + '/' + day + '/' + now.getFullYear();
    $('#date').val(today);
 
 
 //Mobiscroll plugin
 $('#date').scroller({
          preset: 'date',         
          theme: 'ios',
          display: 'modal',
          mode: 'scroller',
  });    
 

  
 
 


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



