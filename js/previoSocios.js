$(function() {
    $( ".draggable" ).draggable({containment: 'body'});
    $( ".droppable" ).droppable({
        drop: function( event, ui ) {
            $( this )
                .addClass( "ui-state-highlight" )
                .find( "p" )
                .html( "Dropped!" );
        }
    });
});
$( ".autocomplete" ).autocomplete({
    source: [ "ALL", "verde", "rojo", "grupo1", "grupo2", "NONE" ]
});

function sociosToBg() {
   $("#actualizaciones").zIndex(-1);
   $("#mensajesPanel").zIndex(-1);
   $("#profilePanel").zIndex(-1);
   $("#groupPanel").zIndex(-1);  
   $("#chat").zIndex(-1);
};

function sociosToFg() {
   $("#actualizaciones").zIndex(1);
   $("#mensajesPanel").zIndex(0);
   $("#profilePanel").zIndex(0);
   $("#groupPanel").zIndex(0);
   $("#chat").zIndex(0);
};
function favisos1() {
    sociosToBg();
    $("#actualizaciones").zIndex(1);
};
function favisos2() {
    sociosToBg();
    $("#actualizaciones").zIndex(0);
    $("#mensajesPanel").zIndex(1);
    $("#chat").zIndex(1);
};

$($("#avisos1" ).click(function( event ) {
            favisos2();
        }),
  $("#avisos2" ).click(function( event ) {
            favisos2();
        }),
   $("#avisos3" ).click(function( event ) {
            favisos1();
        }));

$( "#datepicker" ).datepicker().show();

$(function() {
    $( "#tabs" ).tabs();
});
$(document).ready(function() {
                createStoryJS({
                    type:       'timeline',
                    width:      '100%',
                    height:     '400',
                    start_at_end: 'true',
                    source:     'json/timeline.json',
                    embed_id:   'my-timeline'
                });
            });
 $.getJSON("json/update.json", function(data) {
     for(var i=0; i<data.update.length; i++) {   
            $('#tabs-n').prepend('<h3><img style="height:40px; width:40px;"  src="'+data.update[i].avatar+'"></img>' + data.update[i].autor +': '+data.update[i].titulo +'</h3>'+'<div><p>'+data.update[i].contenido+'</p><br></div>');    
      } ;
      $("#tabs-n").accordion(); 
    });
$.getJSON("json/myline.json", function(data) {
      for(var i=0; i<data.myline.length; i++) {   
            $('#tabs-v').prepend('<h3>'+ data.myline[i].autor + ": "+data.myline[i].titulo +'</h3>'+'<div><p><img style="height:40px; width:40px;"  src="'+data.myline[i].avatar+'"></img>'+data.myline[i].contenido+'</p><br></div>');    
      } ;
      $("#tabs-v").accordion(); 
    }); 