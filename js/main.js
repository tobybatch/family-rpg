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

  function lookupValue(value) {
    if (10 === value) {
      return 'Weakest';
    }
    if (20 === value) {
      return 'Poor';
    }
    if (30 === value) {
      return 'Average';
    }
    if (40 === value) {
      return 'Good';
    }
    if (50 === value) {
      return 'Superhuman';
    }

    return 'Err: Unknown';
  }
  
  function evaluateAttributes() {
    var total = 0;
    $( ".slider" ).each(function() {
      var slider = this;
      var value = $(slider).slider('option', 'value');
      total += value;
      // console.log($(slider).data('name') + ': ' + value);
      var txtval = lookupValue(value);
      $(slider).parent().find('.attval').html(txtval);
    });
    total = total/10;
    $('#total .attval').html(total);
    $('#total .attval').removeClass('under');
    $('#total .attval').removeClass('on');
    $('#total .attval').removeClass('over');
    if (18 == total) {
      $('#total .attval').addClass('on');
    }
    if (18 < total) {
      $('#total .attval').addClass('over');
    }
    if (18 > total) {
      $('#total .attval').addClass('under');
    }
  }
  

  function lookupValue(value) {
      if (10 === value) {
          return 'Weakest';
      }
      if (20 === value) {
          return 'Poor';
      }
      if (30 === value) {
          return 'Average';
      }
      if (40 === value) {
          return 'Good';
      }
      if (50 === value) {
          return 'Superhuman';
      }

      return 'Err: Unknown';
  }

  evaluateAttributes();
});
