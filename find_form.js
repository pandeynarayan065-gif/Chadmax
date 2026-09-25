const fs = require('fs'); const html = fs.readFileSync('index.html', 'utf8'); const idx = html.indexOf('Contact us'); console.log(html.substring(idx - 1500, idx));
