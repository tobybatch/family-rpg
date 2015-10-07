$(function() {
  // setup graphic EQ
    $( ".slider" ).each(function() {
    // read initial values from markup and remove that
    var value = parseInt( $( this ).text(), 10 );
    $( this ).empty().slider({
      value: value,
      min: 10,
      max: 50,
      step: 10,
      change: function( event, ui ) {
        evaluateAttributes();
      }
    });
  });

  function evaluateAttributes() {
    $( ".slider" ).each(function() {
      var slider = this;
      var value = $(slider).slider('option', 'value');
        console.log($(slider).data('name') + ': ' + value);
      });
  }
});
