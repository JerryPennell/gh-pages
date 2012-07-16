//Jerry Pennell 1206
//Project 3
//Mobile Interfaces and Usability
//Mobile Development
//Full Sail University

JSONFormatter = (function() {

  var init = function( json, options ) { 
    
    // default settings
    var settings = $.extend( {
      'appendTo' : 'body',
      'list_id' : 'lister',
      'collapse' : true
    }, options);
    
    var loopCount = 0;
    
    
    //loops through the objects to pull from JSON to list the items
    //For each object it will put that object into a span tag
    
    loopObjectOfObjects = function(json2, ulId) {
      $.each(json2, function(k3, v3) {
        // object of objects
        if(typeof v3 == 'object') {
          $('#' + settings.list_id + ' #' + ulId).append('<li><span>{</span> <ul data-role="listview" id="' + ulId + '-' + k3 + '"></ul></li>');
          $.each(v3, function(k4, v4) {
            if(typeof v4 == 'object' && v4 != null) {
              $('#' + settings.list_id + ' #' + ulId + '-' + k3).append('<li>' + k4 + ' <span>{</span> <ul id="'+k4+'-'+loopCount+'"></ul></li>');
              loopAgain(v4, k4, k4 + '-' + loopCount);
            }
            else {
              $('#' + settings.list_id + ' #' + ulId + '-' + k3).append('<li>' + k4 + ': ' + v4 + '</li>');
            }

          });
        } 
        else {
          // normal array
          $('#' + settings.list_id + ' #' + ulId).append('<li>' + v3 + '</li>')
        }
      });
    },

   //Sub elements are appended
   //for each item found
   
    loopAgain = function(v, k, ulId) {
      loopCount++;
      $.each(v, function(nextKey, nextVal) {
        var nextListId = nextKey + '-' + loopCount;
        var newList = '<ul id="' + nextListId + '"></ul>';
        if(nextVal != null && typeof nextVal == 'object') {
          if(nextVal.length == 0) {
            // an empty object, just output that
            $('#' + settings.list_id + ' #' + ulId).append('<li><i>' + nextKey + ':</i> []</li>');
          } 
          else if(nextVal.length >= 1) {
            // an object of objects
            $('#' + settings.list_id + ' #' + ulId).append('<li><b>' + nextKey + ':</b> <span>[</span> ' + newList + '</li>');
            loopObjectOfObjects(nextVal, nextListId);
          }
          else if(nextVal.length == undefined) {
            // next node
            $('#' + settings.list_id + ' #' + ulId).append('<li><b>' + nextKey + ':</b> <span>{</span> ' + newList + '</li>');
            loopAgain(nextVal, nextKey, nextListId);
          }        
        }
        else {
            $('#' + settings.list_id + ' #' + ulId).append('<li><i>'+ nextKey + ':</i> ' + nextVal + '</li>');
        }
      });
    },
    
    //Adds the closing braces to mimic the list
    addClosingBraces = function() {
      $('#' + settings.list_id + ' span').each(function() {
        var closingBrace = '<span>}</span>';
        if($(this).text() == "[") {
          closingBrace = '<span>]</span>';
        }
        $(this).parent().find('ul').eq(0).after(closingBrace);
      });      
    };

    var jsonList = $('<ul id="' + settings.list_id + '" />');

    $(settings.appendTo).append(jsonList);

    $.each(json, function(key, val) {

      if(val != null && typeof val == 'object') {
        var goObj = false;
        var goArray = false;
        var nk = '';
        $.each(val, function(nextKey, nextVal) {
        
          if(nextVal != null && typeof nextVal == 'object') {
            if(nextVal.length == undefined) {
              goObj = true;
              nk = nextKey;
            }
            else {
              goObj = false;
            }
          }
          else {
            // console.log('nextVal ' + nextVal);
            goArray = true;
          }
        });

        if(goObj) {
          $('#' + settings.list_id).append('<li><b>' + key + ':</b> <span>[</span><ul id="' + nk + '-' + loopCount + '"></ul></li>');
          loopObjectOfObjects(val, nk + '-' + loopCount);
        }
        else if(goArray) {
          $('#' + settings.list_id).append('<li><b>' + key + ':</b> <span>[</span><ul id="' + nk + '-' + loopCount + '"></ul></li>');
          loopAgain(val, nk, nk + '-' + loopCount);
        }
        else {
          $('#' + settings.list_id).append('<li><b>' + key + ':</b> <span>{</span><ul id="' + key + '-' + loopCount + '"></ul></li>');
          loopAgain(val, key, key + '-' + loopCount);              
        }
        
      }
      else {
        $('#' + settings.list_id).append('<li><i>' + key + ':</i> ' + val + '</li>');
      }
    });
    
    addClosingBraces();
    
    if(settings.collapse) {
      addToggles(settings.list_id);      
    }
    
  },
  
  addToggles = function( listId ) {
    $('#' + listId + " > li").find('ul').each(function() {
      $(this).parent().find('span').eq(0).after('<span class="toggle fake-link"> - </span>');
    });

    $('.toggle').next().slideUp().end().text(' + ');

    $('.toggle').live('click', function() {
      if($(this).next().is(":visible")) {
        $(this).next().slideUp().end().text(' + ');
      }
      else {
        $(this).next().slideDown().end().text(' - ');
      }
    });
  };
  
  return {

    format: function(json, options) {
      init(json, options);
    }

  }
  

})();


  //Before the page is created this will add a back button for the list drill downs

   $(':jqmData(url^=search)').live('pagebeforecreate', 
   function(event) {
    $(this).filter(':jqmData(url*=ui-page)').find(':jqmData(role=header)')
      .prepend('<a href="#" data-rel="back" data-icon="back">Back</a>')
    });
	
