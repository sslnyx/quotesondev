// fetch a random quote post 
(function ($) {
  //load all the posts and count them and then do a random number from 1 to whatver

  var rootUrl = api_vars.root_url;

  $('#new-quote-button').on('click', function (s) {
    s.preventDefault();
    $.ajax({
      url: rootUrl + 'wp/v2/posts?filter[orderby]=rand&filter[posts_per_page]=1',
      success: function (data) {

        // var content = data[0].content.rendered;
        var quoteUrl = data[0]._qod_quote_source_url;
        // var template = '';

        if (quoteUrl.length > 0) {

          console.log(data);
          $(".entry-content").empty();
          $(".entry-content").append(data[0].content.rendered);
          $(".entry-title").empty();
          $(".entry-title").append('&mdash; ' + data[0].title.rendered);

          // article append template variable

          $(".source").empty();
          $(".source").append(', <a href="' + data[0]._qod_quote_source_url + '">' + data[0]._qod_quote_source + '</a>');
        } else if (data[0]._qod_quote_source.length > 0) {
          $(".entry-content").empty();
          $(".entry-content").append(data[0].content.rendered);
          $(".entry-title").empty();
          $(".entry-title").append('&mdash; ' + data[0].title.rendered);
          $(".source").empty();
          $(".source").append(" , " + data[0]._qod_quote_source);
        } else {
          $(".entry-content").empty();
          $(".entry-content").append(data[0].content.rendered);
          $(".entry-title").empty();
          $(".entry-title").append('&mdash; ' + data[0].title.rendered);
          $(".source").empty();
        }
        var push_url = api_vars.home_url + "/" + data[0].slug + "/"; 
        history.pushState(null, null, push_url);
  
      }

    });
//history api,


    lastPage = document.URL;

    $(window).on('popstate', function() {
      console.log("popstate fired!");
      if (window.location.hash.indexOf('qm-overview ') === 1) {
        return false;
      } else {
        window.location.replace(lastPage);
      }
  });
  });

  // submit a new quote from the form, e.g. button .on click form .submit
  // post request wp-json/wp/v2/posts
  // before send nonce authentication, it's in the slides from wp ajax lesson
  $('.submit-btn').on('click', function (event) {
    event.preventDefault();

    $.ajax({
      method: 'post',
      url: api_vars.root_url + 'wp/v2/posts/',
      data: {
        title: $('#quote-author').val(),
        content: $('#quote-content').val(),
        _qod_quote_source: $('#quote-source').val(),
        _qod_quote_source_url: $('#quote-source-url').val(),
      },
      beforeSend: function (xhr) {
        xhr.setRequestHeader('X-WP-Nonce', api_vars.nonce);
      }
    }).done( function(data) {
        console.log(api_vars.success);
        $('#quote-submission-form').hide('slow');
        $('.quote-submission-wrapper .entry-title').append('<p>' + api_vars.success + '</p>');
    });

  }); // End submit quote button

})(jQuery);
