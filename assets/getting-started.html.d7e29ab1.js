import{r as t,o as r,a as i,b as e,d as s,w as l,F as c,e as n,c as p}from"./app.06e61f7c.js";import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";const u={},h=e("h1",{id:"getting-started",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#getting-started","aria-hidden":"true"},"#"),n(" Getting Started")],-1),_=e("h2",{id:"prerequisites",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#prerequisites","aria-hidden":"true"},"#"),n(" Prerequisites")],-1),b={href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"},m=n("nginx"),g={href:"https://github.com/kaltura/nginx-secure-token-module",target:"_blank",rel:"noopener noreferrer"},f=n("nginx-secure-token-module"),v={href:"https://github.com/kaltura/nginx-vod-module",target:"_blank",rel:"noopener noreferrer"},k=n("nginx-vod-module"),x={href:"https://www.ffmpeg.org/",target:"_blank",rel:"noopener noreferrer"},w=n("FFmpeg"),S={href:"https://mariadb.org/",target:"_blank",rel:"noopener noreferrer"},y=n("MariaDB"),D=n(" or "),I={href:"https://www.mysql.com/",target:"_blank",rel:"noopener noreferrer"},q=n("MySQL"),L={href:"https://www.meilisearch.com/",target:"_blank",rel:"noopener noreferrer"},B=n("MeiliSearch"),P={href:"https://www.php.net/",target:"_blank",rel:"noopener noreferrer"},A=n("PHP 8+"),M={href:"https://github.com/soketi/soketi",target:"_blank",rel:"noopener noreferrer"},C=n("Soketi"),H={href:"http://supervisord.org/",target:"_blank",rel:"noopener noreferrer"},V=n("Supervisor"),E={href:"https://laravel.com/docs/9.x/octane#swoole",target:"_blank",rel:"noopener noreferrer"},N=n("Swoole"),R={class:"custom-container tip"},T=e("p",{class:"custom-container-title"},"TIP",-1),F={href:"https://laravel.com/docs/9.x/sail",target:"_blank",rel:"noopener noreferrer"},U=n("Laravel Sail"),z=n(" is included, providing a Docker compatible development environment."),K=e("h2",{id:"installation",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installation","aria-hidden":"true"},"#"),n(" Installation")],-1),Y=e("p",null,"This section will help you setup a basic MediaDB API from ground up.",-1),j=e("ul",null,[e("li",null,[e("strong",null,"Step 1"),n(": Configure environment")])],-1),G=n("Setup a basic environment using the "),O={href:"https://github.com/francoism90/mediadb/tree/master/doc",target:"_blank",rel:"noopener noreferrer"},Q=n("given examples"),$=n("."),J=p(`<ul><li><strong>Step 2</strong>: Clone the repository</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /var/www/html
<span class="token function">git</span> clone git@github.com:francoism90/mediadb.git api
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li><strong>Step 3</strong>: Initialize Laravel</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> api
<span class="token function">cp</span> .env.example .env
<span class="token function">vi</span> .env
<span class="token function">composer</span> <span class="token function">install</span>
php artisan key:generate
php artisan horizon:install
php artisan telescope:install
php artisan migrate --seed
php artisan storage:link
php artisan scout:create-indexes
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><ul><li>Replace <code>.env.example</code> with <code>.env.sail.example</code> to configure Laravel Sail.</li><li>Replace <code>vi</code> with your favorite editor.</li><li>Check all configuration files and change them when necessary, especially <code>.env</code>, <code>config/api.php</code> and <code>config/filesystems.php</code>.</li></ul></div><ul><li><strong>Step 4</strong>: Configure Laravel &amp; nginx</li></ul><p>Update <code>.env</code>:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">DASH_URL</span><span class="token operator">=</span>https://mediadb.test
<span class="token assign-left variable">DASH_KEY</span><span class="token operator">=</span>d5460ef7a5c2bece2d1b24e0d9959e5ea9beb9dd449080147bdba001e9106793
<span class="token assign-left variable">DASH_IV</span><span class="token operator">=</span>722d4f9191c53d5e934e13719d02cced
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Update <code>/etc/nginx/sites/mediadb-vod.conf</code>:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>vod_base_url <span class="token string">&quot;https://mediadb.test&quot;</span><span class="token punctuation">;</span>
vod_segments_base_url <span class="token string">&quot;https://mediadb.test&quot;</span><span class="token punctuation">;</span>
vod_secret_key <span class="token string">&quot;randomstring-<span class="token variable">$vod_filepath</span>&quot;</span><span class="token punctuation">;</span>

secure_token_encrypt_uri_key d5460ef7a5c2bece2d1b24e0d9959e5ea9beb9dd449080147bdba001e9106793<span class="token punctuation">;</span>
secure_token_encrypt_uri_iv 722d4f9191c53d5e934e13719d02cced<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><ul><li>One may use <code>dd if=/dev/urandom bs=1 count=32 2&gt; /dev/null | xxd -p -c32</code> to generate the <code>DASH_KEY</code>/<code>DASH_IV</code> values.</li></ul></div>`,11),W=n("MediaDB will now listen at "),X={href:"https://localhost:3000",target:"_blank",rel:"noopener noreferrer"},Z=n("https://localhost:3000"),ee=n(" and "),ne={href:"https://mediadb.test/api",target:"_blank",rel:"noopener noreferrer"},se=n("https://mediadb.test/api"),ae=n("."),te=n("By now, you should have a basic but functional MediaDB API. Next, learn about the basics of "),oe=n("configuration and usage"),re=n(" of MediaDB.");function ie(le,ce){const a=t("ExternalLinkIcon"),o=t("RouterLink");return r(),i(c,null,[h,_,e("ul",null,[e("li",null,[e("a",b,[m,s(a)])]),e("li",null,[e("a",g,[f,s(a)])]),e("li",null,[e("a",v,[k,s(a)])]),e("li",null,[e("a",x,[w,s(a)])]),e("li",null,[e("a",S,[y,s(a)]),D,e("a",I,[q,s(a)])]),e("li",null,[e("a",L,[B,s(a)])]),e("li",null,[e("a",P,[A,s(a)])]),e("li",null,[e("a",M,[C,s(a)])]),e("li",null,[e("a",H,[V,s(a)])]),e("li",null,[e("a",E,[N,s(a)])])]),e("div",R,[T,e("ul",null,[e("li",null,[e("a",F,[U,s(a)]),z])])]),K,Y,j,e("p",null,[G,e("a",O,[Q,s(a)]),$]),J,e("p",null,[W,e("a",X,[Z,s(a)]),ee,e("a",ne,[se,s(a)]),ae]),e("p",null,[te,s(o,{to:"/guide/configuration.html"},{default:l(()=>[oe]),_:1}),re])],64)}var ue=d(u,[["render",ie]]);export{ue as default};
