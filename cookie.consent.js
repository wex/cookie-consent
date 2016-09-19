(function(document, undefined) {
    
    if (document.cookie.indexOf('cookie_consent=1') >= 0) return;
    
    var t = {
        'en': {
            'title': 'This website uses cookies to ensure you get the best experience on our website. ',
            'link': 'More info',
            'ok': 'Got it!'
        },
        'fi': {
            'title': 'Tämä sivusto käyttää evästeitä tarjotakseen parhaimman mahdollisen käyttäjäkokemuksen. ',
            'link': 'Lue lisää',
            'ok': 'Ymmärrän'
        }
    };
    var $html   = document.getElementsByTagName('html')[0];
    var $body   = document.getElementsByTagName('body')[0];
    var $modal  = document.createElement('div');
    var $text   = document.createElement('p');
    var $ok     = document.createElement('a');
    var $link   = document.createElement('a');
    var locale  = $html.getAttribute('lang') || 'en';
    var locale  = (typeof t[locale] === 'undefined') ? 'en' : locale;
    
    
    $modal.id = 'cookie-consent';
    $text.id = 'cookie-consent-text';
    $text.innerHTML = t[locale].title;
    $ok.id = 'cookie-consent-ok';
    $ok.innerHTML = t[locale].ok;
    $ok.addEventListener('click', function() {
        document.cookie = 'cookie_consent=1; expires=Sun, 16 Jul 3567 06:23:41 GMT; path=/';
    });
    
    $modal.style.background = '#000';
    $modal.style.color = '#FFF';
    $modal.style.padding = '0px';
    $modal.style.margin = '0px';
    $modal.style.fontFamily = 'Arial, sans-serif';
    $modal.style.fontSize = '12px';
    $modal.style.lineHeight = '1';
    $modal.style.textAlign = 'left';
    $modal.style.overflow = 'hidden';
    $modal.style.display = 'block';
    $modal.style.float = 'none';
    $modal.style.clear = 'both';
    $link.style.color = '#0FF';
    $text.style.padding = '1em';
    $text.style.margin = '1em';
    $text.style.float = 'left';
    $text.style.clear = 'none';
    $text.style.textDecoration = 'none';
    $text.style.textIndent = '0';
    $text.style.fontWeight = 'normal';
    $text.style.fontFamily = 'Arial, sans-serif';
    $text.style.fontSize = '12px';
    $text.style.lineHeight = '1';
    $ok.style.float = 'right';
    $ok.style.clear = 'none';
    $ok.style.padding = '1em';
    $ok.style.margin = '1em';
    $ok.style.background = '#558abb';
    $ok.style.color = '#FFF';
    $ok.style.fontWeight = 'normal';
    $ok.style.fontFamily = 'Arial, sans-serif';
    $ok.style.fontSize = '12px';
    $ok.style.cursor = 'pointer';
    $ok.style.textDecoration = 'none';
    $ok.style.textIndent = '0';
    $ok.style.borderRadius = '5px';
    $ok.style.lineHeight = '1';
    
    if (window.cookie_consent_link) {
        $link.id = 'cookie-consent-link';
        $link.innerHTML = t[locale].link;
        $link.setAttribute('href', window.cookie_consent_link);
        $text.appendChild($link);
    }
    
    $modal.appendChild( $text );
    $modal.appendChild( $ok );
    $body.insertBefore($modal, $body.firstChild);
    
})(document);