$(document).ready(function(){

    $("#search").on("click", function() {
        var searchTerm = $("#searchTerm").val()
        var startYear = $("#startYear").val()
        var endYear = $("#endYear").val()
        var number = $("#recordNumber").val()

        console.log(searchTerm);
        console.log(startYear);
        console.log(endYear);
        console.log(number);

        $("#articles").text(searchTerm + "" + startYear)
    });

    $("#clear").on("click",function() {
        $("#articles").empty()
    });
  
    var startYear = startYear + "0101";
    var endYear = endYear + "1231";
    
    

        // var url ="http://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&begin_date=" +  startYear + "&end_date=" + endYear + "&api-key=99e97c43887f4b1788f57730290598c8"

        var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "99e97c43887f4b1788f57730290598c8",
  'q': searchTerm,
  'begin_date': startYear,
  'end_date': endYear,
});

        $.ajax({
          url: url,
          method: 'GET',
        }).then(function(result) {
          console.log(result.response);

          for (var i = 0; i < number - 1; i++) {
            
            // $(".test").append("<p>" + parseInt(1+i) + "</p>");
            $("#title").append("<p>" + result.response.docs[i].headline.main + "</p>");
            $("#section").append("<p>" + result.response.docs[i].section_name + "</p>");
            $("#source-url").append("<a href=" + result.response.docs[i].web_url + ">" + result.response.docs[i].web_url + "</a>");
            console.log(result.response.docs[i]);
          }

         
        });

});