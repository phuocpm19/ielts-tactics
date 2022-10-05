import Document, { Head, Html } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta
            name="news_keywords"
            content="ielts tactics, khóa học ielts, khoa hoc ielts, khóa học ielts trực tuyến, ielts online, ielts online test, lộ trình ielts, lo trinh ielts, hoc phi ielts tactics, luyen thi ielts, luyện thi ielts, ielts cấp 2, ielts cấp 3, ielts cho người đi làm, ielts cho sinh viên"
          />
          <meta
            name="keywords"
            content="ielts tactics, khóa học ielts, khoa hoc ielts, khóa học ielts trực tuyến, ielts online, ielts online test, lộ trình ielts, lo trinh ielts, hoc phi ielts tactics, luyen thi ielts, luyện thi ielts, ielts cấp 2, ielts cấp 3, ielts cho người đi làm, ielts cho sinh viên"
          />
          <meta
            name="description"
            content="Tổng hợp Lộ trình các khóa học IELTS từ 0 - 8.5+ tại IELTS Tactics. Trung tâm luyện thi IELTS Tactics cam kết đầu ra bằng văn bản - Học lại miễn phí đến khi đạt mục tiêu."
          />

          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="IELTS Tactics - Luyện thi IELTS Online miễn phí, tự học IELTS từ 0 - 8.5 IELTS"
          />
          <meta property="og:url" content="https://ieltstactics.vn" />
          <meta
            property="og:image"
            content="https://firebasestorage.googleapis.com/v0/b/ielts-tactics-2.appspot.com/o/postImages%2Fthumbnail%20website%20ielts%20tactics%201.jpg?alt=media&token=fc9ecc93-d48b-4642-8441-734ab6871357"
          />
          <meta
            property="og:description"
            content="Tổng hợp Lộ trình các khóa học IELTS từ 0 - 8.5+ tại IELTS Tactics. Trung tâm luyện thi IELTS Tactics cam kết đầu ra bằng văn bản - Học lại miễn phí đến khi đạt mục tiêu"
          />
          <meta property="fb:app_id" content="1229988791141046" />
          <meta
            content="IELTS Tactics - Luyện thi IELTS Online miễn phí, tự học IELTS từ 0 - 8.5 IELTS"
            itemProp="headline"
            property="og:title"
          />
          <meta
            content="IELTS Tactics xây dựng lộ trình tập trung ứng dụng, với hàng loạt kiến thức chi tiết, nâng cao kỹ năng từ Mất gốc đến 8.5+ IELTS"
            itemProp="description"
            property="og:description"
          />

          <meta name="facebook-domain-verification" content="c5krj9nmye40er5x6tww7q6k6cpvdd" />
          <meta name="facebook-domain-verification" content="qdqdraspgkeijioo7p04t47rs6jhsj" />

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
          <script
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

          <noscript
            dangerouslySetInnerHTML={{
              __html: `<img
              height="1"
              width="1"
              style="display:none"
              src="https://www.facebook.com/tr?id=517405106543108&ev=PageView&noscript=1"
            />`,
            }}
          />
          {/* End Meta Pixel Code  */}
        </Head>

        <body id="ielts_tactics">
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K2FX2WK" height="0" width="0"
      style="display:none;visibility:hidden"></iframe>`,
            }}
          />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
