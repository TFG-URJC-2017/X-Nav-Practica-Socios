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
    source: [ "ALL", "A1", "A2", "A3", "A4", "A5", "NONE" ]
});
function favisos1() {
    $("#actualizaciones").zIndex(1);
    $("#mensajesPanel").zIndex(-1);
};
function favisos2() {
    $("#actualizaciones").zIndex(-1);
    $("#mensajesPanel").zIndex(1);
};
function sociosToBg() {
   $("#actualizaciones").zIndex(-1);
   $("#mensajesPanel").zIndex(-1);
   $("#profilePanel").zIndex(-1);
   $("#groupPanel").zIndex(-1);
   
};
function sociosToFg() {
   $("#actualizaciones").zIndex(1);
   $("#mensajesPanel").zIndex(0);
   $("#profilePanel").zIndex(0);
   $("#groupPanel").zIndex(0);
   
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
$(function() {
   
   $("#sociosBar").resizable({ 
                        containment: '#socios', 
                        handles:'e, w', 
                        minWidth: 200, 
                        maxWidth:400,
                        start: function( event, ui ) {
                              
                        }   
});
});
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