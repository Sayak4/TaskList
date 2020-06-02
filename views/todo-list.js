$(document).ready(function(){

  $('form').on('submit', function(){
      console.log("ajax called ");

      var item = $('form input');
      var todo = {item: item.val()};

      $.ajax({
        type: 'POST',
        url: '/',
        data: todo,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });

      return false;

  });

  $('li').on('click', function(){
      var item = $(this).text().replace(/ /g, "-");
      $.ajax({
        type: 'DELETE',
        url: '/' + item,
        success: function(tasks){
          //do something with the data via front-end framework
          location.reload();
        }
      });
  });

});
