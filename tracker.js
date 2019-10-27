function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

function init()
{
    var pixel = getUrlParameter('p');
    if (pixel) {
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');

        fbq('init', pixel);
        fbq('track', 'PageView');
    }

}

function initEvents()
{
    var pixel = getUrlParameter('p');
    if (pixel) {
        document.addEventListener('click', function (ev) {
            console.log(ev.target);
            if (ev.target.tagName.toUpperCase() === 'A') {
                fbq('track', 'Lead');
            }
        });
    }
}

(function () {
    init();
    initEvents();
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.open("GET", trackerHost + "/track/" + campaignId + "?referrer=" + escape(document.referrer) + "&uri=" + escape(window.location.href), true);
    xhr.onload = function() {
        if (xhr.status !== 200)
            return;

        if (xhr.getResponseHeader("Struct-Response") !== "true") {
            document.open();
            document.write(xhr.responseText);
            document.close();
            initEvents();
        }
    };
    xhr.send();
})();