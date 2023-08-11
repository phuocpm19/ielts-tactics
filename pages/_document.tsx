import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
          <meta property="fb:app_id" content="1229988791141046" />
          <meta property="og:type" content="website" />
          <meta name="facebook-domain-verification" content="c5krj9nmye40er5x6tww7q6k6cpvdd" />
          <meta name="facebook-domain-verification" content="qdqdraspgkeijioo7p04t47rs6jhsj" />
          <meta name="p:domain_verify" content="628f4e4bbe359888ca8a44e7aecc4057" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="preconnect" href="https://www.googletagmanager.com" />
          <link rel="preconnect" href="https://www.facebook.com" />
          <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
          <link rel="dns-prefetch" href="https://www.facebook.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Lexend:wght@400;500&family=Roboto:wght@400;500&display=swap"
            rel="stylesheet"
          />

          {/* Global site tag (gtag.js) - Google Analytics */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-9EH3WGTC5G" />

          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-9EH3WGTC5G');
              `,
            }}
          />

          {/* Google Tag Manager  */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
            (function (w, d, s, l, i) {
      w[l] = w[l] || []; w[l].push({
        'gtm.start':
          new Date().getTime(), event: 'gtm.js'
      }); var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
          'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', 'GTM-K2FX2WK')
          `,
            }}
          />
          {/* < End Google Tag Manager  */}

          {/* Meta Pixel Code  */}
         {/* <script
            dangerouslySetInnerHTML={{
              __html: `!function (f, b, e, v, n, t, s) {
      if (f.fbq) return; n = f.fbq = function () {
        n.callMethod ?
          n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
      n.queue = []; t = b.createElement(e); t.async = !0;
      t.src = v; s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    }(window, document, 'script',
      'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '517405106543108');
    fbq('track', 'PageView');`,
            }}
          />

          <noscript>
            <img
              src="https://www.facebook.com/tr?id=517405106543108&ev=PageView&noscript=1"
              height="1"
              width="1"
              style={{ display: 'none' }}
            />
          </noscript> */}
          {/* End Meta Pixel Code  */}
        </Head>

        <body id="ielts_tactics">
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-K2FX2WK"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        </body>

        <Main />
        <NextScript />
      </Html>
    );
  }
}

export default MyDocument;
