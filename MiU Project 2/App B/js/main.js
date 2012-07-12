//Jerry Pennell 1206
//Project 4
//Visual Framworks (VFW)
//Mobile Development
//Full Sail University

//Wait until the DOM is ready
window.addEventListener("DOMContentLoaded", function(){

  //Before the page is created this will add a back button for the list drill downs

   $(':jqmData(url^=search)').live('pagebeforecreate', 
   function(event) {
    $(this).filter(':jqmData(url*=ui-page)').find(':jqmData(role=header)')
      .prepend('<a href="#" data-rel="back" data-icon="back">Back</a>')
    });
	
	addEventListener("load", function() {
    window.scrollTo(1, 0);
    }, false);
	
     //getElementById function
     function ge(x){
           var theElement = document.getElementById(x);          //Pass in name for getting tag name by Id
           return theElement;								     //Returns the element
     }
     
     
     //Create select field element and populate with options
     function makeComics(){
         var     formTag = document.getElementsByTagName("form"), //formTag is an array of all the form tags
		 selectLi    = ge('select'),                               //assignment for select element
		 makeSelect  = document.createElement('select');          //creates a select element
		 makeSelect.setAttribute("id","groups");                  //sets an atttribute for id called groups
         for(var i=0, j=comicGroups.length; i<j; i++){  		  //itterate over the options for the comicgroups variable
             var makeOption = document.createElement('option');   //adds the option if item is found in the array
             var optText = comicGroups[i];						  //Adds the item in the array
             makeOption.setAttribute("value", optText);			  //value for the option item
             makeOption.innerHTML = optText;					  //makes inner html
             makeSelect.appendChild(makeOption);				  //appends to the child element
         }
         if(selectLi != null){
           selectLi.appendChild(makeSelect);                        //at the end of the object appends the select 
         }
      }
     
     //Find value of selected radio button
     function getSelectedRadio(){			
         var radios = document.forms[0].haveit;					  //initialized the form to the radios
         for(var i=0; i<radios.length; i++){					  //loops the form radio set called haveit
            if(radios[i].checked){                                //checks to see which value is checked
               haveitValue = radios[i].value;
            }
          }
     }
	 
     //Find value of the check box
     function getCheckboxValue(){								  
       if(ge('need').checked){                                     //sees if the need check box is checked
          needValue = ge('need').value;
       }else{
           needValue = "No";                                      //if the checkbox is not checked then it will set to value of No
       }
     }
     
     //Toggles te view of the style add area or display area
     function toggleControls(n){
        switch(n){
            case "on":                                            //Case statement to see if the variable is on for turning on the display
                 ge('comicForm').style.display ="none";            //Turns off the comicForm style element id
                 ge('clear').style.display="inline";               //Turns on the clear style element id
                 ge('displayLink').style.display ="none";          //Turns of the displayLink element id
                 ge('addNew').style.display = "inline";			  //Turns on the addNew element id
                 break;
            case "off":											  //If the toggle controls is off
                 ge('comicForm').style.display ="block";           //comicForm is set to block
		         ge('clear').style.display="inline";				  //clear element id is turned on
		         ge('displayLink').style.display ="inline";		  //displayLink is turned on
                 ge('addNew').style.display = "none";			  //addNew element id is turned off
                 ge('items').style.display = "none";               //items id is turned off
                 break;
            default:
                return false;
        }
     }
     
     
     //Save data into local storage
     function storeData(key){       
          //If there is no key, this means this is a brand new item and we need a new key.
	      if(!key){			  
              var id             = Math.floor(Math.random()*10000001);
		  }else{
			  //Set the id to the existing key we're editing so that it will save over the data
			  //The key is the same key that's been passed along from the editSubmit event handler
			  //to the validate function, and then passed here, into the storeData function			  
			  id = key;
		  }
          //Gather up all our form field values and store in an object
          //Object properties contain array with the form label and input value
          getSelectedRadio();													//Checks the selected radio button
          getCheckboxValue();													//Checks the checkbox value
          var item               = {};											//Items object created
              item.publisher     = ["Publisher:",ge('groups').value];			//Property for publisher created
              item.cname         = ["Comic Name:",ge('cname').value];			//Property for comic name created
              item.iname         = ["Issue:",ge('iname').value];					//Property for issue created
              item.email         = ["Email:",ge('email').value];                 //Property for email created
              item.haveit        = ["Have it?:",haveitValue];                   //Property for Have it created
              item.need          = ["Needs appraisal:",needValue];              //Property for needs appraisal created
              item.rating        = ["Rating:",ge('rating').value];               //Property for creating rating is created
              item.date          = ["Date:",ge('date').value];					//Property for data is created
              item.notes         = ["Notes:",ge('notes').value];		            //Property for notes is created
              
              
          //Save all the data into local storage Use Stringify to convert our object to a string.          
          localStorage.setItem(id, JSON.stringify(item));    					//Stores the item locally with stringfy as string
		  console.log("This is an id: " +id);               					//Showing the id creation
          alert("Comic Saved");													//Tells the Comic is saved
      }
      
	  //Function to get the data stored local storage
      function getData(){
         toggleControls("on");													//Turns on the controls for display 
         if(localStorage.length === 0){											//Checks to see if items are in local storage
           alert("There is no data in Local Storage so default data was added.");  //alert there is no localstorage data
		   autoFillData(); 							                            //alert prompt there is no data found
         }
         //Write Data from Local Storage to the browser.
         var makeDiv = document.createElement('div');							//creates a div tag 
         makeDiv.setAttribute("id", "items");									//sets attributes for new div tag id called items
         var makeList = document.createElement('ul');							//creates ul tag
         makeDiv.appendChild(makeList);											//appends ul to div tag
         document.body.appendChild(makeDiv);									//appends div tag with its child to body tag
         ge('items').style.display = "block";									//sets style for items to display
         for(var i=0, len=localStorage.length; i<len; i++){						//itterate the local storage
             var makeli = document.createElement('li');							//makes li tag
             var linksLi = document.createElement('li');					    //makes li tag for links edit-delete
             makeList.appendChild(makeli);										//appends li to ul
             var key = localStorage.key(i); 									//key for localstorage objects
             var value = localStorage.getItem(key);								//value of the object by key
             //Convert the string from local storage value back to an object by using JSON.parse()
             var obj = JSON.parse(value);										//Json parsing of object
             var makeSubList = document.createElement('ul');				    //creates the sublist ul element
             makeli.appendChild(makeSubList);									//appends to li ul element
			 getImage(obj.publisher[1], makeSubList);								//adds image for identification
             for(var n in obj){													//itterates the item in the object
                var makeSubli = document.createElement('li');					//creates element li 
                makeSubList.appendChild(makeSubli);								//appends to sublist li
                var optSubText = obj[n][0]+" "+obj[n][1];						//gets the text in the object
                makeSubli.innerHTML = optSubText;								//adds the innerHtml element for the text
                makeSubList.appendChild(linksLi);
             }
              makeItemLinks(localStorage.key(i), linksLi);                      //Create our edit and delete buttons/link for 
			  var addHl = document.createElement('hr');							//adds a horizontal rule seperator for look
			  addHl.setAttribute("id","genlist");								//adds id attribute for css to add styles
		      makeSubList.appendChild(addHl);									//appends the element to the end of the ul set
         }
      }
      
      
      
	  
	  //Function to get the data stored local storage for JQM
      function getJQData(){
      
      JSONFormatter.format(json, {});
      
      var getLister = ge('lister');
      var putHere = ge('jDataLoad');
      putHere.appendChild(getLister);
      
      }
      
      //This is for the clear Filer button on the search page
      function clearFilter(){
         $('input[data-type="search"]').val("");
         $('input[data-type="search"]').trigger("keyup");
      }

	  //New Get the image for the right category

	  function getImage(catName, makeSubList){
		  var imageLi = document.createElement('li');
		  makeSubList.appendChild(imageLi);
		  var newImg = document.createElement('img');
		  var setSrc = newImg.setAttribute("src", "images/"+ catName + ".png");
		  imageLi.appendChild(newImg);
	  }

	  

	  //Auto Populate Local Storage
	  function autoFillData(){
		  //The actual JSON Object data required for this to work is coming from our json.js file
		  //Store the JSON Object into Local Storage
		  for(var n in json){
			  var id  = Math.floor(Math.random()*10000001);
			  localStorage.setItem(id, JSON.stringify(json[n]));
		  }
	  }
      
      //Create the edit and delete links for each stored item when displayed
	  function makeItemLinks(key, linksLi){
		  //add edit single item link
		  var editLink = document.createElement('a');							//Creates anchor tag
		  editLink.href = "#";													//sets the value to pound tag
		  editLink.key = key;													//gets the key for the item being edited
		  var editText = "Edit Comic";									    	//Creates text of Edit comic	
		  editLink.addEventListener("click", editItem);							//Adds the event listener for the edit item link
		  editLink.setAttribute("class","sublinks");                            //Adds class sublinks for css
		  editLink.innerHTML = editText;										//adds the link to the html
		  linksLi.appendChild(editLink);										//by appending the edit link
		  
		  //add line break
		  var breakTag = document.createElement('br');							//Adds a break to create the element spacing
		  linksLi.appendChild(breakTag);										//Appends the break tag
		  
		  //add delete single item link
		  var deleteLink = document.createElement('a');							//adds an anchor tag for the delete link
		  deleteLink.href = "#";												//adds the link value to pound going same page
		  deleteLink.key = key;													//sets the key to the comic being deleted
		  var deleteText = "Delete Comic";										//creates the text to delete the comic
		  deleteLink.addEventListener("click", deleteItem);						//adds the event listener to delete the item
		  deleteLink.setAttribute("class","sublinks");
		  deleteLink.innerHTML = deleteText;									//adds the link to the html
		  linksLi.appendChild(deleteLink);										//appends the deletelink child 
	  }
	  
	  
	  // Edits an Item from the list 
	  function editItem(){
		  //Grab the data from our item from Local Storage
		  var value = localStorage.getItem(this.key);							//gets the item the selected key item from localStorage
		  var item = JSON.parse(value);											//parses the retrieved value
		  
		  //Show the form
		  toggleControls("off");												//shows the form
		  
		  //populate the form fields with current localStorage values.
		  ge('groups').value = item.publisher[1];								//gets the stored key value of publisher
		  ge('cname').value = item.cname[1];										//gets the stored key value of the comic name
		  ge('iname').value = item.iname[1];										//gets the stored key value element of issue
		  ge('email').value = item.email[1];										//gets the stored key value element of email 
		  var radios = document.forms[0].haveit;								//checks the value of the radio stored button value
		  for(var i=0; i<radios.length; i++){									//itterate the radio set
			  if(radios[i].value == "Yes" && item.haveit[1] == "Yes"){			//checking which values should be set
				  radios[i].setAttribute("checked", "checked");
			  }else if(radios[i].value == "No" && item.haveit[1] == "No"){		//if not yes value set the no value in set
				  radios[i].setAttribute("checked", "checked");
			  }
		  }
		  if(item.need[1] == "Yes"){											//reviews the checkbox to see if it should be checked
			  ge('need').setAttribute("checked", "checked");
		  }
		  ge('rating').value = item.rating[1];									//calls the rating value by key
		  document.forms[0].display_rate.value = item.rating[1];                //sets the visible rating 
		  ge('date').value = item.date[1];										//gets the date value by key
		  ge('notes').value = item.notes[1];										//gets the stored notes value by key
		  
		  //Remove the intial listener from the input 'save comic' button.
		  save.removeEventListener("click", storeData);
		  
		  //change Submit Button value to Edit Button
		  ge('submit').value = "Edit Comic";
		  var editSubmit = ge('submit');
		  //Save the key value established in this function as a property of the editSubmit event
		  //so we can use that value when we save the data we edited
		  editSubmit.addEventListener("click", validate);						//sets the validate listener to the edit submit
		  editSubmit.key = this.key;											//sets to key to the selected key edited
	  }
	  
	  //Deletes an item from the list
	  function deleteItem(){
		  var ask = confirm("Are you sure you want to delete this comic?");	    //confirmation to delete the comic
		  if(ask){																//if yes its ok to delete
			  localStorage.removeItem(this.key);								//removed the key from local storage
			  alert("Comic was deleted!!");									    //tells us the comic was deleted
			  window.location.reload();											//reloads the window
		  }else{
			  alert("Comic was NOT deleted.");								    //Otherwise the comic was not deleted
		  }
	  }																		    //each item in local storage
      
      //Clear all data
      function clearLocal()  {
           if(localStorage.length === 0){										//Checks the lenghth of the localStorage
                alert("There is no data to clear.");							//Alert no data to clear
           }else{
               localStorage.clear();											//if length is greater clear them
               alert("All comics deleted.");									//Alert all the comics were deleted
               window.location.reload();										//reload of the window
               return false;													//returns false
           }
       }
         
 
      function validate(e){														//Validates the input fields
		 //Define the elements we want to check 
		 var getGroup = ge('groups');											//variable of the group of comic names was choosen
		 var getCname = ge('cname');												//variable a name was put in for the comic name
		 var getIname = ge('iname');												//variable to see if an issue number was put in
		 var getEmail = ge('email');												//variabel set to field email
		 
		 //Reset Error Message
		 errMsg.innerHTML = "";
		 getGroup.style.border ="1px solid black";								//comic publisher border set back to orginal type
		 getCname.style.border ="1px solid black";								//comic name border field set back to orginal color
		 getIname.style.border ="1px solid black";								//comic issue name set back to orginal color
		 getEmail.style.border ="1px solid black";								//email border for field set back to orginal color
		 
		 //Get Error Messages
		 var messageAry = [];
		 //Group Validation
		 if(getGroup.value === "-- Choose A Publisher --"){					    //validates the comic publisher
			 var groupError = "Please choose a comic publisher.";				//error message choosing a publisher
			 getGroup.style.border ="1px solid red";							//changes the field to show an error
			 messageAry.push(groupError);										//adds the error to the array
		 }
		 
		 //Comic Name Validation
		if(getCname.value === ""){												//validates that a comic name has been added
			 var cNameError = "Please enter a comic name.";						//asking to enter a comic name
			 getCname.style.border ="1px solid red";							//sets the comic name as errored
			 messageAry.push(cNameError);										//adding the item to the error array
		 }
		 
		 //Issue Validation
		 if(getIname.value === ""){												//validates an issue has been added
			 var iNameError = "Please enter a issue number.";					//error text to enter an issue number
			 getIname.style.border ="1px solid red";							//red error for the field value
			 messageAry.push(iNameError);										//adds the error to the error array
		 }
		 
		 //Email Validation
		 var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;				//regular expression to validate the email is in correct format
		 if(!(re.exec(getEmail.value))){										//if the value does not pass the regular expression
			 var emailError = "Please enter a valid email address.";			//creates the error text for the invalid email address
			 getEmail.style.border = "1px solid red";							//sets the field to red for the email address if invalid
			 messageAry.push(emailError);										//puts the error in the error array 
		 }
		 
		 //If there were errors, display them on the screen
		 if(messageAry.length >= 1){
		   for(var i=0, j=messageAry.length; i < j; i++){						//itterate the error array to get the errors out
			   var txt = document.createElement('li');							//creates an li element for the errors text items
			   txt.style.color = "red";
			   txt.innerHTML = messageAry[i];									//puts them in the innerHTML from the array
			   errMsg.appendChild(txt);											//appends the errors list items to the html
		   }
		    e.preventDefault();													//prevents the default
		    return false;														//returns false for validation
		 }else{
			 //If all is ok, save our data. Send the  key value (which came from the editData function).
			 //Remember this key value was passed through the editSubmit event listener as a property.
			 storeData(this.key);
		 }
	 }
     
     //variable defaults
     var comicGroups = ["-- Choose A Publisher --", "DC","Marvel","Image","Dark Horse"],   //List of comics to be passed in for the select
         haveitValue,																	   //Holding value for if we have it
         needValue = "No"  																   //default needs appraisal value
         errMsg = ge('errors');
     ;         
     makeComics();															               //calls the function for making the comics list
     
     
     //Set Link & Submit Click Events
     
     var dataLoader = ge('dataLoader');	
     var clearit = ge('clearit');											//adds listener for button
     if(clearit){
        clearit.addEventListener("click", clearFilter);
     }
     if(dataLoader){								  	                            //gets the tag id called dataLoader
        dataLoader.addEventListener("click", getJQData);					    //adds the eventlistener fo click to the getJQData function  
     }else{
        var displayLink = ge('displayLink');								    //gets the tag id called displayLink
        displayLink.addEventListener("click", getData);					        //adds the eventlistener fo click to the displayLink to getData function
        var clearLink =ge('clear');											    // gets the tag id called clear 
        clearLink.addEventListener("click", clearLocal);					    //assigns an event listener of click to clearLocal data function for id tag clear
        var save = ge('submit');											    //gets the tag id called submit
        save.addEventListener("click", validate);								//adds the eventlistener of click to call validate before storeData
     }

         
});         