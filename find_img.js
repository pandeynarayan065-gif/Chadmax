const fs = require('fs'); const html = fs.readFileSync('index.html', 'utf8'); const idx = html.indexOf('THE BLACK PILL'); console.log(html.substring(idx - 2000, idx + 2000).match(/src="[^"]+"/g));
