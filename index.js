const Parser = require('rss-parser');
const parser = new Parser();

const colors = require('colors/safe');

(async () => {
	const feed = await parser.parseURL('https://blog.replit.com/feed.xml');

	feed.items.reverse();
	
	feed.items.forEach(item => {
		console.log(colors.blue(item.title));
		console.log(colors.gray(item.pubDate))
		console.log(item.contentSnippet);
		console.log('\n================================\n')
	});
	
	console.log('~~~' + colors.bold('Data from') + colors.bold.blue(` ${feed.title}`) + '~~~');
	console.log(colors.italic(feed.description))
})();