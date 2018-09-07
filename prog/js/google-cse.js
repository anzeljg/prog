(function() {
    var host = window.location.hostname;
    if (host.indexOf('github') >= 0) {
        var cx = '011115869259999818082:st0w7codwga'; // github
    } else {
        var cx = '011115869259999818082:8flzu-eqw5e'; // lusy
    }
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
})();
