/**
 * Script to submit sitemap to Google Search Console
 * This helps Google discover and index your pages faster
 */

// Sitemap URL
const sitemapUrl = 'https://globalkenyacontainers.com/sitemap.xml';

console.log('Sitemap submission information:');
console.log('1. Visit Google Search Console: https://search.google.com/search-console');
console.log('2. Select your property (https://globalkenyacontainers.com/)');
console.log('3. Navigate to "Sitemaps" in the left sidebar');
console.log('4. Enter the following sitemap URL and click "Submit":');
console.log('');
console.log('   ' + sitemapUrl);
console.log('');
console.log('Additionally, you can ping Google directly using this cURL command:');
console.log('');
console.log('curl -A "Mozilla/5.0 (compatible; Googlebot/2.1)" "https://www.google.com/ping?sitemap=' + encodeURIComponent(sitemapUrl) + '"');
console.log('');
console.log('After submitting, monitor the indexing status in Google Search Console under:');
console.log('- Coverage report');
console.log('- Sitemaps report');
console.log('- Individual URL inspection');
console.log('');
console.log('Tips to improve indexing:');
console.log('- Ensure all pages have unique, valuable content');
console.log('- Check for canonical tag issues');
console.log('- Verify robots.txt allows crawling of important pages');
console.log('- Monitor for server errors (5xx, 4xx) that prevent crawling');
console.log('- Improve page load speed');
console.log('- Ensure mobile responsiveness');