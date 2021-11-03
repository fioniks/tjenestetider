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
