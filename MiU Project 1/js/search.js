	//Search
	var search = $('searchBtn');
	
	var getSearch = function(){
		var category = $('groups').value;
		var term = $('search').value;
		
		//By Category Only
		if(category != "--Choose A Group--" && term === ""){
			for(i=0, j=localStorage.length; i<j; i++){
				var key = localStorage.key(i);
				var value = localStorage.getItem(key);
				var obj = JSON.parse(value);
				if(category === obj.group[1]){
					for (n in obj){
					    console.log(obj[n][1]);
					}
				}
			}
		}
		
		//By Term Only
		if(term != "" && category === "--Choose A Group--"){
			for(i=0, j=localStorage.length; i<j; i++){
				var key = localStorage.key(i);
				var value = localStorage.getItem(key);
				var obj = JSON.parse(value);
				for (n in obj){
				    if(term === obj[n][1]){
					     for (q in obj){
					     	console.log(obj[q][1]);
					     } 
				    }
				}
			 }
		 }
		
		//By Category AND Term
		if(term !="" && category != "--Choose A Group--"){
		}
			
	 }	

	 search.addEventListener("click",getSearch);



<a href="search.html">Search</a>

<li><label for="fname">Search term:</label><input type="text" id="search"></li>
</ul>
</fieldset>
<input type="button" value="Search" id="searchBtn" /></br>
</form>
<div id="results"></div>