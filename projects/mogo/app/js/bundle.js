(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var initCounter = function initCounter(id) {
  var endValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  $("#".concat(id)).easy_number_animate({
    start_value: 0,
    end_value: endValue
  });
};

UIkit.scrollspy("#numbers", {
  cls: "_active"
});

var callbackFunc = function callbackFunc() {
  initCounter("first_number", 42);
  initCounter("second_number", 123);
  initCounter("third_number", 15);
  initCounter("fourth_number", 99);
  initCounter("fifth_number", 24);
};

UIkit.util.on("#numbers", "inview", callbackFunc);

var installHeaderStyles = function installHeaderStyles() {
  var $nav = $(".navigation");
  var $topBtn = $(".to-top");

  if ($nav.length) {
    $(document).on("scroll", function (e, d) {
      var offset = $(document).scrollTop();

      if (offset > 40 && !$nav.hasClass("_shadow") && !$topBtn.hasClass("_visible")) {
        $nav.addClass("_shadow");
        $topBtn.addClass("_visible");
      } else if (offset <= 40 && $nav.hasClass("_shadow") && $topBtn.hasClass("_visible")) {
        $nav.removeClass("_shadow");
        $topBtn.removeClass("_visible");
      }
    });
  }
};

window.onload = function () {
  return installHeaderStyles();
};

},{}]},{},[1])

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwcm9qZWN0cy9tb2dvL3NyYy9qcy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQU0sV0FBVyxHQUFHLFNBQWQsV0FBYyxDQUFDLEVBQUQsRUFBd0I7QUFBQSxNQUFuQixRQUFtQix1RUFBUixHQUFRO0FBQzFDLEVBQUEsQ0FBQyxZQUFLLEVBQUwsRUFBRCxDQUFZLG1CQUFaLENBQWdDO0FBQzlCLElBQUEsV0FBVyxFQUFFLENBRGlCO0FBRTlCLElBQUEsU0FBUyxFQUFFO0FBRm1CLEdBQWhDO0FBSUQsQ0FMRDs7QUFPQSxLQUFLLENBQUMsU0FBTixDQUFnQixVQUFoQixFQUE0QjtBQUFFLEVBQUEsR0FBRyxFQUFFO0FBQVAsQ0FBNUI7O0FBQ0EsSUFBTSxZQUFZLEdBQUcsU0FBZixZQUFlLEdBQU07QUFDekIsRUFBQSxXQUFXLENBQUMsY0FBRCxFQUFpQixFQUFqQixDQUFYO0FBQ0EsRUFBQSxXQUFXLENBQUMsZUFBRCxFQUFrQixHQUFsQixDQUFYO0FBQ0EsRUFBQSxXQUFXLENBQUMsY0FBRCxFQUFpQixFQUFqQixDQUFYO0FBQ0EsRUFBQSxXQUFXLENBQUMsZUFBRCxFQUFrQixFQUFsQixDQUFYO0FBQ0EsRUFBQSxXQUFXLENBQUMsY0FBRCxFQUFpQixFQUFqQixDQUFYO0FBQ0QsQ0FORDs7QUFPQSxLQUFLLENBQUMsSUFBTixDQUFXLEVBQVgsQ0FBYyxVQUFkLEVBQTBCLFFBQTFCLEVBQW9DLFlBQXBDOztBQUVBLElBQU0sbUJBQW1CLEdBQUcsU0FBdEIsbUJBQXNCLEdBQU07QUFDaEMsTUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDLGFBQUQsQ0FBZDtBQUNBLE1BQU0sT0FBTyxHQUFHLENBQUMsQ0FBQyxTQUFELENBQWpCOztBQUVBLE1BQUksSUFBSSxDQUFDLE1BQVQsRUFBaUI7QUFDZixJQUFBLENBQUMsQ0FBQyxRQUFELENBQUQsQ0FBWSxFQUFaLENBQWUsUUFBZixFQUF5QixVQUFDLENBQUQsRUFBSSxDQUFKLEVBQVU7QUFDakMsVUFBTSxNQUFNLEdBQUcsQ0FBQyxDQUFDLFFBQUQsQ0FBRCxDQUFZLFNBQVosRUFBZjs7QUFDQSxVQUNFLE1BQU0sR0FBRyxFQUFULElBQ0EsQ0FBQyxJQUFJLENBQUMsUUFBTCxDQUFjLFNBQWQsQ0FERCxJQUVBLENBQUMsT0FBTyxDQUFDLFFBQVIsQ0FBaUIsVUFBakIsQ0FISCxFQUlFO0FBQ0EsUUFBQSxJQUFJLENBQUMsUUFBTCxDQUFjLFNBQWQ7QUFDQSxRQUFBLE9BQU8sQ0FBQyxRQUFSLENBQWlCLFVBQWpCO0FBQ0QsT0FQRCxNQU9PLElBQ0wsTUFBTSxJQUFJLEVBQVYsSUFDQSxJQUFJLENBQUMsUUFBTCxDQUFjLFNBQWQsQ0FEQSxJQUVBLE9BQU8sQ0FBQyxRQUFSLENBQWlCLFVBQWpCLENBSEssRUFJTDtBQUNBLFFBQUEsSUFBSSxDQUFDLFdBQUwsQ0FBaUIsU0FBakI7QUFDQSxRQUFBLE9BQU8sQ0FBQyxXQUFSLENBQW9CLFVBQXBCO0FBQ0Q7QUFDRixLQWpCRDtBQWtCRDtBQUNGLENBeEJEOztBQTBCQSxNQUFNLENBQUMsTUFBUCxHQUFnQjtBQUFBLFNBQU0sbUJBQW1CLEVBQXpCO0FBQUEsQ0FBaEIiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImNvbnN0IGluaXRDb3VudGVyID0gKGlkLCBlbmRWYWx1ZSA9IDEwMCkgPT4ge1xuICAkKGAjJHtpZH1gKS5lYXN5X251bWJlcl9hbmltYXRlKHtcbiAgICBzdGFydF92YWx1ZTogMCxcbiAgICBlbmRfdmFsdWU6IGVuZFZhbHVlLFxuICB9KTtcbn07XG5cblVJa2l0LnNjcm9sbHNweShcIiNudW1iZXJzXCIsIHsgY2xzOiBcIl9hY3RpdmVcIiB9KTtcbmNvbnN0IGNhbGxiYWNrRnVuYyA9ICgpID0+IHtcbiAgaW5pdENvdW50ZXIoXCJmaXJzdF9udW1iZXJcIiwgNDIpO1xuICBpbml0Q291bnRlcihcInNlY29uZF9udW1iZXJcIiwgMTIzKTtcbiAgaW5pdENvdW50ZXIoXCJ0aGlyZF9udW1iZXJcIiwgMTUpO1xuICBpbml0Q291bnRlcihcImZvdXJ0aF9udW1iZXJcIiwgOTkpO1xuICBpbml0Q291bnRlcihcImZpZnRoX251bWJlclwiLCAyNCk7XG59O1xuVUlraXQudXRpbC5vbihcIiNudW1iZXJzXCIsIFwiaW52aWV3XCIsIGNhbGxiYWNrRnVuYyk7XG5cbmNvbnN0IGluc3RhbGxIZWFkZXJTdHlsZXMgPSAoKSA9PiB7XG4gIGNvbnN0ICRuYXYgPSAkKFwiLm5hdmlnYXRpb25cIik7XG4gIGNvbnN0ICR0b3BCdG4gPSAkKFwiLnRvLXRvcFwiKTtcblxuICBpZiAoJG5hdi5sZW5ndGgpIHtcbiAgICAkKGRvY3VtZW50KS5vbihcInNjcm9sbFwiLCAoZSwgZCkgPT4ge1xuICAgICAgY29uc3Qgb2Zmc2V0ID0gJChkb2N1bWVudCkuc2Nyb2xsVG9wKCk7XG4gICAgICBpZiAoXG4gICAgICAgIG9mZnNldCA+IDQwICYmXG4gICAgICAgICEkbmF2Lmhhc0NsYXNzKFwiX3NoYWRvd1wiKSAmJlxuICAgICAgICAhJHRvcEJ0bi5oYXNDbGFzcyhcIl92aXNpYmxlXCIpXG4gICAgICApIHtcbiAgICAgICAgJG5hdi5hZGRDbGFzcyhcIl9zaGFkb3dcIik7XG4gICAgICAgICR0b3BCdG4uYWRkQ2xhc3MoXCJfdmlzaWJsZVwiKTtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIG9mZnNldCA8PSA0MCAmJlxuICAgICAgICAkbmF2Lmhhc0NsYXNzKFwiX3NoYWRvd1wiKSAmJlxuICAgICAgICAkdG9wQnRuLmhhc0NsYXNzKFwiX3Zpc2libGVcIilcbiAgICAgICkge1xuICAgICAgICAkbmF2LnJlbW92ZUNsYXNzKFwiX3NoYWRvd1wiKTtcbiAgICAgICAgJHRvcEJ0bi5yZW1vdmVDbGFzcyhcIl92aXNpYmxlXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG53aW5kb3cub25sb2FkID0gKCkgPT4gaW5zdGFsbEhlYWRlclN0eWxlcygpO1xuIl0sInByZUV4aXN0aW5nQ29tbWVudCI6Ii8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltNXZaR1ZmYlc5a2RXeGxjeTlpY205M2MyVnlMWEJoWTJzdlgzQnlaV3gxWkdVdWFuTWlMQ0p3Y205cVpXTjBjeTl0YjJkdkwzTnlZeTlxY3k5aGNIQXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFN096dEJRMEZCTEVsQlFVMHNWMEZCVnl4SFFVRkhMRk5CUVdRc1YwRkJZeXhEUVVGRExFVkJRVVFzUlVGQmQwSTdRVUZCUVN4TlFVRnVRaXhSUVVGdFFpeDFSVUZCVWl4SFFVRlJPMEZCUXpGRExFVkJRVUVzUTBGQlF5eFpRVUZMTEVWQlFVd3NSVUZCUkN4RFFVRlpMRzFDUVVGYUxFTkJRV2RETzBGQlF6bENMRWxCUVVFc1YwRkJWeXhGUVVGRkxFTkJSR2xDTzBGQlJUbENMRWxCUVVFc1UwRkJVeXhGUVVGRk8wRkJSbTFDTEVkQlFXaERPMEZCU1VRc1EwRk1SRHM3UVVGUFFTeExRVUZMTEVOQlFVTXNVMEZCVGl4RFFVRm5RaXhWUVVGb1FpeEZRVUUwUWp0QlFVRkZMRVZCUVVFc1IwRkJSeXhGUVVGRk8wRkJRVkFzUTBGQk5VSTdPMEZCUTBFc1NVRkJUU3haUVVGWkxFZEJRVWNzVTBGQlppeFpRVUZsTEVkQlFVMDdRVUZEZWtJc1JVRkJRU3hYUVVGWExFTkJRVU1zWTBGQlJDeEZRVUZwUWl4RlFVRnFRaXhEUVVGWU8wRkJRMEVzUlVGQlFTeFhRVUZYTEVOQlFVTXNaVUZCUkN4RlFVRnJRaXhIUVVGc1FpeERRVUZZTzBGQlEwRXNSVUZCUVN4WFFVRlhMRU5CUVVNc1kwRkJSQ3hGUVVGcFFpeEZRVUZxUWl4RFFVRllPMEZCUTBFc1JVRkJRU3hYUVVGWExFTkJRVU1zWlVGQlJDeEZRVUZyUWl4RlFVRnNRaXhEUVVGWU8wRkJRMEVzUlVGQlFTeFhRVUZYTEVOQlFVTXNZMEZCUkN4RlFVRnBRaXhGUVVGcVFpeERRVUZZTzBGQlEwUXNRMEZPUkRzN1FVRlBRU3hMUVVGTExFTkJRVU1zU1VGQlRpeERRVUZYTEVWQlFWZ3NRMEZCWXl4VlFVRmtMRVZCUVRCQ0xGRkJRVEZDTEVWQlFXOURMRmxCUVhCRE96dEJRVVZCTEVsQlFVMHNiVUpCUVcxQ0xFZEJRVWNzVTBGQmRFSXNiVUpCUVhOQ0xFZEJRVTA3UVVGRGFFTXNUVUZCVFN4SlFVRkpMRWRCUVVjc1EwRkJReXhEUVVGRExHRkJRVVFzUTBGQlpEdEJRVU5CTEUxQlFVMHNUMEZCVHl4SFFVRkhMRU5CUVVNc1EwRkJReXhUUVVGRUxFTkJRV3BDT3p0QlFVVkJMRTFCUVVrc1NVRkJTU3hEUVVGRExFMUJRVlFzUlVGQmFVSTdRVUZEWml4SlFVRkJMRU5CUVVNc1EwRkJReXhSUVVGRUxFTkJRVVFzUTBGQldTeEZRVUZhTEVOQlFXVXNVVUZCWml4RlFVRjVRaXhWUVVGRExFTkJRVVFzUlVGQlNTeERRVUZLTEVWQlFWVTdRVUZEYWtNc1ZVRkJUU3hOUVVGTkxFZEJRVWNzUTBGQlF5eERRVUZETEZGQlFVUXNRMEZCUkN4RFFVRlpMRk5CUVZvc1JVRkJaanM3UVVGRFFTeFZRVU5GTEUxQlFVMHNSMEZCUnl4RlFVRlVMRWxCUTBFc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlRDeERRVUZqTEZOQlFXUXNRMEZFUkN4SlFVVkJMRU5CUVVNc1QwRkJUeXhEUVVGRExGRkJRVklzUTBGQmFVSXNWVUZCYWtJc1EwRklTQ3hGUVVsRk8wRkJRMEVzVVVGQlFTeEpRVUZKTEVOQlFVTXNVVUZCVEN4RFFVRmpMRk5CUVdRN1FVRkRRU3hSUVVGQkxFOUJRVThzUTBGQlF5eFJRVUZTTEVOQlFXbENMRlZCUVdwQ08wRkJRMFFzVDBGUVJDeE5RVTlQTEVsQlEwd3NUVUZCVFN4SlFVRkpMRVZCUVZZc1NVRkRRU3hKUVVGSkxFTkJRVU1zVVVGQlRDeERRVUZqTEZOQlFXUXNRMEZFUVN4SlFVVkJMRTlCUVU4c1EwRkJReXhSUVVGU0xFTkJRV2xDTEZWQlFXcENMRU5CU0Vzc1JVRkpURHRCUVVOQkxGRkJRVUVzU1VGQlNTeERRVUZETEZkQlFVd3NRMEZCYVVJc1UwRkJha0k3UVVGRFFTeFJRVUZCTEU5QlFVOHNRMEZCUXl4WFFVRlNMRU5CUVc5Q0xGVkJRWEJDTzBGQlEwUTdRVUZEUml4TFFXcENSRHRCUVd0Q1JEdEJRVU5HTEVOQmVFSkVPenRCUVRCQ1FTeE5RVUZOTEVOQlFVTXNUVUZCVUN4SFFVRm5RanRCUVVGQkxGTkJRVTBzYlVKQlFXMUNMRVZCUVhwQ08wRkJRVUVzUTBGQmFFSWlMQ0ptYVd4bElqb2laMlZ1WlhKaGRHVmtMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWlobWRXNWpkR2x2YmlncGUyWjFibU4wYVc5dUlISW9aU3h1TEhRcGUyWjFibU4wYVc5dUlHOG9hU3htS1h0cFppZ2hibHRwWFNsN2FXWW9JV1ZiYVYwcGUzWmhjaUJqUFZ3aVpuVnVZM1JwYjI1Y0lqMDlkSGx3Wlc5bUlISmxjWFZwY21VbUpuSmxjWFZwY21VN2FXWW9JV1ltSm1NcGNtVjBkWEp1SUdNb2FTd2hNQ2s3YVdZb2RTbHlaWFIxY200Z2RTaHBMQ0V3S1R0MllYSWdZVDF1WlhjZ1JYSnliM0lvWENKRFlXNXViM1FnWm1sdVpDQnRiMlIxYkdVZ0oxd2lLMmtyWENJblhDSXBPM1JvY205M0lHRXVZMjlrWlQxY0lrMVBSRlZNUlY5T1QxUmZSazlWVGtSY0lpeGhmWFpoY2lCd1BXNWJhVjA5ZTJWNGNHOXlkSE02ZTMxOU8yVmJhVjFiTUYwdVkyRnNiQ2h3TG1WNGNHOXlkSE1zWm5WdVkzUnBiMjRvY2lsN2RtRnlJRzQ5WlZ0cFhWc3hYVnR5WFR0eVpYUjFjbTRnYnlodWZIeHlLWDBzY0N4d0xtVjRjRzl5ZEhNc2NpeGxMRzRzZENsOWNtVjBkWEp1SUc1YmFWMHVaWGh3YjNKMGMzMW1iM0lvZG1GeUlIVTlYQ0ptZFc1amRHbHZibHdpUFQxMGVYQmxiMllnY21WeGRXbHlaU1ltY21WeGRXbHlaU3hwUFRBN2FUeDBMbXhsYm1kMGFEdHBLeXNwYnloMFcybGRLVHR5WlhSMWNtNGdiMzF5WlhSMWNtNGdjbjBwS0NraUxDSmpiMjV6ZENCcGJtbDBRMjkxYm5SbGNpQTlJQ2hwWkN3Z1pXNWtWbUZzZFdVZ1BTQXhNREFwSUQwK0lIdGNiaUFnSkNoZ0l5UjdhV1I5WUNrdVpXRnplVjl1ZFcxaVpYSmZZVzVwYldGMFpTaDdYRzRnSUNBZ2MzUmhjblJmZG1Gc2RXVTZJREFzWEc0Z0lDQWdaVzVrWDNaaGJIVmxPaUJsYm1SV1lXeDFaU3hjYmlBZ2ZTazdYRzU5TzF4dVhHNVZTV3RwZEM1elkzSnZiR3h6Y0hrb1hDSWpiblZ0WW1WeWMxd2lMQ0I3SUdOc2N6b2dYQ0pmWVdOMGFYWmxYQ0lnZlNrN1hHNWpiMjV6ZENCallXeHNZbUZqYTBaMWJtTWdQU0FvS1NBOVBpQjdYRzRnSUdsdWFYUkRiM1Z1ZEdWeUtGd2labWx5YzNSZmJuVnRZbVZ5WENJc0lEUXlLVHRjYmlBZ2FXNXBkRU52ZFc1MFpYSW9YQ0p6WldOdmJtUmZiblZ0WW1WeVhDSXNJREV5TXlrN1hHNGdJR2x1YVhSRGIzVnVkR1Z5S0Z3aWRHaHBjbVJmYm5WdFltVnlYQ0lzSURFMUtUdGNiaUFnYVc1cGRFTnZkVzUwWlhJb1hDSm1iM1Z5ZEdoZmJuVnRZbVZ5WENJc0lEazVLVHRjYmlBZ2FXNXBkRU52ZFc1MFpYSW9YQ0ptYVdaMGFGOXVkVzFpWlhKY0lpd2dNalFwTzF4dWZUdGNibFZKYTJsMExuVjBhV3d1YjI0b1hDSWpiblZ0WW1WeWMxd2lMQ0JjSW1sdWRtbGxkMXdpTENCallXeHNZbUZqYTBaMWJtTXBPMXh1WEc1amIyNXpkQ0JwYm5OMFlXeHNTR1ZoWkdWeVUzUjViR1Z6SUQwZ0tDa2dQVDRnZTF4dUlDQmpiMjV6ZENBa2JtRjJJRDBnSkNoY0lpNXVZWFpwWjJGMGFXOXVYQ0lwTzF4dUlDQmpiMjV6ZENBa2RHOXdRblJ1SUQwZ0pDaGNJaTUwYnkxMGIzQmNJaWs3WEc1Y2JpQWdhV1lnS0NSdVlYWXViR1Z1WjNSb0tTQjdYRzRnSUNBZ0pDaGtiMk4xYldWdWRDa3ViMjRvWENKelkzSnZiR3hjSWl3Z0tHVXNJR1FwSUQwK0lIdGNiaUFnSUNBZ0lHTnZibk4wSUc5bVpuTmxkQ0E5SUNRb1pHOWpkVzFsYm5RcExuTmpjbTlzYkZSdmNDZ3BPMXh1SUNBZ0lDQWdhV1lnS0Z4dUlDQWdJQ0FnSUNCdlptWnpaWFFnUGlBME1DQW1KbHh1SUNBZ0lDQWdJQ0FoSkc1aGRpNW9ZWE5EYkdGemN5aGNJbDl6YUdGa2IzZGNJaWtnSmlaY2JpQWdJQ0FnSUNBZ0lTUjBiM0JDZEc0dWFHRnpRMnhoYzNNb1hDSmZkbWx6YVdKc1pWd2lLVnh1SUNBZ0lDQWdLU0I3WEc0Z0lDQWdJQ0FnSUNSdVlYWXVZV1JrUTJ4aGMzTW9YQ0pmYzJoaFpHOTNYQ0lwTzF4dUlDQWdJQ0FnSUNBa2RHOXdRblJ1TG1Ga1pFTnNZWE56S0Z3aVgzWnBjMmxpYkdWY0lpazdYRzRnSUNBZ0lDQjlJR1ZzYzJVZ2FXWWdLRnh1SUNBZ0lDQWdJQ0J2Wm1aelpYUWdQRDBnTkRBZ0ppWmNiaUFnSUNBZ0lDQWdKRzVoZGk1b1lYTkRiR0Z6Y3loY0lsOXphR0ZrYjNkY0lpa2dKaVpjYmlBZ0lDQWdJQ0FnSkhSdmNFSjBiaTVvWVhORGJHRnpjeWhjSWw5MmFYTnBZbXhsWENJcFhHNGdJQ0FnSUNBcElIdGNiaUFnSUNBZ0lDQWdKRzVoZGk1eVpXMXZkbVZEYkdGemN5aGNJbDl6YUdGa2IzZGNJaWs3WEc0Z0lDQWdJQ0FnSUNSMGIzQkNkRzR1Y21WdGIzWmxRMnhoYzNNb1hDSmZkbWx6YVdKc1pWd2lLVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlLVHRjYmlBZ2ZWeHVmVHRjYmx4dWQybHVaRzkzTG05dWJHOWhaQ0E5SUNncElEMCtJR2x1YzNSaGJHeElaV0ZrWlhKVGRIbHNaWE1vS1R0Y2JpSmRmUT09In0=