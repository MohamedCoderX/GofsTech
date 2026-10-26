// Local preview of the prerendered build with Vercel-style clean URLs.
import http from 'node:http'; import fs from 'node:fs'; import path from 'node:path';
const root = process.argv[2] ?? 'dist'; const types={'.html':'text/html; charset=utf-8','.js':'text/javascript','.css':'text/css','.webp':'image/webp','.png':'image/png','.svg':'image/svg+xml','.xml':'application/xml','.txt':'text/plain','.ico':'image/x-icon','.webmanifest':'application/manifest+json'};
http.createServer((req,res)=>{let p=decodeURIComponent(new URL(req.url,'http://x').pathname);
 const tries=[p, p+'.html', path.join(p,'index.html')]; for(const t of tries){const f=path.join(root,t); if(fs.existsSync(f)&&fs.statSync(f).isFile()){res.writeHead(200,{'content-type':types[path.extname(f)]||'application/octet-stream'});return fs.createReadStream(f).pipe(res);}}
 res.writeHead(404,{'content-type':'text/html'}); fs.createReadStream(path.join(root,'404.html')).pipe(res);}).listen(4173);
