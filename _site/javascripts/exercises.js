$(function(){
  $("pre").snippet("ruby", {style: "acid", clipboard: "/javascripts/ZeroClipboard.swf"});

  $(".solution").hover(
    function () {
      $(this).show();
    },
    function () {
      $(this).hide();
    }
  );
})
