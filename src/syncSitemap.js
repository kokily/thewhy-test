const axios = require('axios');
const fs = require('fs');
const prettier = require('prettier');

const SitemapGeneratedDate = new Date().toISOString();

const API_DOMAIN = 'https://thewhy.kr/api';
const FRONT_DOMAIN = 'https://thewhy.kr';

const routes = [
  '/',
  '/about',
  '/about/locate',
  '/about/contact',
  '/education',
  '/education/business',
  '/education/leader',
  '/education/extended',
  '/education/ability',
  '/education/online',
  '/faq',
  '/term',
  '/privacy',
];

const formatting = (target) =>
  prettier.format(target, {
    parser: 'html',
  });

function makeSiteMapItem(url) {
  return `
    <url>
      <loc>${url}</loc>
      <lastmod>${SitemapGeneratedDate}</lastmod>
    </url>
  `;
}

async function makeSitemap() {
  try {
    const pages = routes.map((page) => `${FRONT_DOMAIN}${page}`);
    const pageSitemap = pages.map((page) => makeSiteMapItem(page)).join('');

    // Generate Index Sitemap
    const generateIndexSitemap = `
      <?xml version="1.0" encoding="UTF-8"?>
      <urlset
        xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http:www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
        ${pageSitemap}
      </urlset>
   `;

    const formattedIndexSitemap = formatting(generateIndexSitemap);

    fs.writeFileSync('./public/sitemap.xml', formattedIndexSitemap, 'utf8');

    // Story Sitemap
    let storiesSitemap = '';
    let storiesCount = 0;

    const stories = await axios.get(`${API_DOMAIN}/stories/sitemap`);

    if (!stories) {
      console.log('작성된 Story 가 없습니다.');
    }

    storiesSitemap = stories.data
      .map((story) => {
        storiesCount += 1;
        return makeSiteMapItem(`${FRONT_DOMAIN}/stories/${story.id}`);
      })
      .join('');

    const generateStoriesSitemap = `
      <?xml version="1.0" encoding="UTF-8"?>
      <urlset
        xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http:www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
        ${storiesSitemap}
      </urlset>
    `;

    const formattedStorySitemap = formatting(generateStoriesSitemap);

    fs.writeFileSync(
      './public/story-sitemap.xml',
      formattedStorySitemap,
      'utf8'
    );

    console.log(`${storiesCount} 개 스토리 사이트 맵 생성!`);

    // Notice Sitemap
    let noticesSitemap = '';
    let noticesCount = 0;

    const notices = await axios.get(`${API_DOMAIN}/notices/sitemap`);

    if (!notices) {
      console.log('작성된 Notice 가 없습니다.');
    }

    noticesSitemap = notices.data
      .map((notice) => {
        noticesCount += 1;
        return makeSiteMapItem(`${FRONT_DOMAIN}/notices/${notice.id}`);
      })
      .join('');

    const generateNoticesSitemap = `
      <?xml version="1.0" encoding="UTF-8"?>
      <urlset
        xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http:www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
        ${noticesSitemap}
      </urlset>
    `;

    const formattedNoticeSitemap = formatting(generateNoticesSitemap);

    fs.writeFileSync(
      './public/notice-sitemap.xml',
      formattedNoticeSitemap,
      'utf8'
    );

    console.log(`${noticesCount} 개 공지사항 사이트 맵 생성!`);

    // Question Sitemap
    let questionsSitemap = '';
    let questionsCount = 0;

    const questions = await axios.get(`${API_DOMAIN}/questions/sitemap`);

    if (!questions) {
      console.log('작성된 Questions 가 없습니다.');
    }

    questionsSitemap = questions.data
      .map((question) => {
        questionsCount += 1;
        return makeSiteMapItem(`${FRONT_DOMAIN}/questions/${question.id}`);
      })
      .join('');

    const generateQuestionsSitemap = `
      <?xml version="1.0" encoding="UTF-8"?>
      <urlset
        xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http:www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
        ${questionsSitemap}
      </urlset>
    `;

    const formattedQuestionSitemap = formatting(generateQuestionsSitemap);

    fs.writeFileSync(
      './public/question-sitemap.xml',
      formattedQuestionSitemap,
      'utf8'
    );

    console.log(`${questionsCount} 개 문의사항 사이트 맵 생성!`);
  } catch (err) {
    console.log(err);
  }
}

makeSitemap();
