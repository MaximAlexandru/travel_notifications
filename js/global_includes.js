function menu_init(){
			
        	alert("lang"+LANG);       
			$what="header";
			string="header_request="+$what+"&"+"lang="+LANG;		
		    $.ajax({
            type: 'POST',
            url: "http://www.brasovtour.com/mobile-app/ajax/ajax.php",
            data:  string,
            success:function(response){
            	  panel=response;
			      $.mobile.pageContainer.prepend(panel);
				  $("#menu").panel();
				  $('#list-view').listview();
				  $('#menu').trigger('create');
				  	$('.catli').on('click',function()
		{
			$('.subcats').hide();
			$(this).children('.subcats').toggle();
		});
		
	   $('.catli').children('.subcats').find('.goback').on('click',function(){
	   		$(this).parent().hide();
	   		return false;
	    });
             
            	}
		  });	 		
}
function navbar_init(){
	var nav ='<a href="#" class=" button" id="btn-menu">Menu</a>'+
	'<a href="#" class=" button" onclick="populate_categorie(true,false)">Around</a>'+
	'<a href="#" class=" button" onclick="populate_categorie(false,true)">Open</a>';
	return nav;
	
}
function navbar(d){
	 	var header = $(d).find('#wrap-header');
	 	header.empty();
	 	header.append(navbar_init());
	    header.find('#btn-menu').on('click',function(){
			 $('#menu').panel('open');
 		 });	
}


