$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tbody").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
function lastSunday(year, month) {
    var date = new Date(year,month,1,12);
    let weekday = date.getDay();
    let dayDiff = weekday===0 ? 7 : weekday;
    let lastSunday = date.setDate(date.getDate() - dayDiff);
    return date.toDateString();
}
jQuery(function($) {
  // loop over all td's with the class of demand
  $('td.demand').each(function() {
    // load the DL-XXX into a variable (since it's used more than once)
    var dl = $(this).text();
    // change the td html to the link, referencing the DL-XXX number
    $(this).html('<a href="order.php?dl=' + dl + '">' + dl + '</a>');
  });
});
