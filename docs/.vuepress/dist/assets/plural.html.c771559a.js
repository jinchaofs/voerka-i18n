import{_ as n,c as s}from"./app.b0e3c1fe.js";const a={},t=s(`<h1 id="\u590D\u6570" tabindex="-1"><a class="header-anchor" href="#\u590D\u6570" aria-hidden="true">#</a> \u590D\u6570</h1><p>\u5F53\u7FFB\u8BD1\u6587\u672C\u5185\u5BB9\u662F\u4E00\u4E2A<code>\u6570\u7EC4</code>\u65F6\u542F\u7528\u590D\u6570\u5904\u7406\u673A\u5236\u3002\u5373\u5728<code>langauges/tranclates/*.json</code>\u4E2D\u7684\u6587\u672C\u7FFB\u8BD1\u9879\u662F\u4E00\u4E2A\u6570\u7EC4\u3002</p><h2 id="\u542F\u7528\u590D\u6570\u5904\u7406\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#\u542F\u7528\u590D\u6570\u5904\u7406\u673A\u5236" aria-hidden="true">#</a> \u542F\u7528\u590D\u6570\u5904\u7406\u673A\u5236</h2><p>\u5047\u8BBE\u5728<code>index.html</code>\u6587\u4EF6\u4E2D\u5177\u6709\u4E00\u4E2A\u7FFB\u8BD1\u5185\u5BB9</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>    <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&quot;\u6211{}\u4E00\u8F86\u8F66&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u7ECF\u8FC7<code>extract</code>\u547D\u4EE4\u63D0\u53D6\u4E3A\u7FFB\u8BD1\u6587\u4EF6\u540E\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token comment">// languages/translates/default.json</span>
<span class="token punctuation">{</span>
    <span class="token property">&quot;\u6211\u6709{}\u8F86\u8F66&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;en&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;de&quot;</span><span class="token operator">:</span><span class="token string">&quot;....&quot;</span> 
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u73B0\u5728\u6211\u4EEC\u8981\u6C42\u5F15\u5165\u590D\u6570\u5904\u7406\u673A\u5236\uFF0C\u4E3A\u4E0D\u540C\u6570\u91CF\u91C7\u7528\u4E0D\u540C\u7684\u7FFB\u8BD1\uFF0C\u53EA\u9700\u8981\u5C06\u4E0A\u8FF0\u7FFB\u8BD1\u6587\u672C\u66F4\u6539\u4E3A\u6570\u7EC4\u5F62\u5F0F\u3002</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;\u6211\u6709{}\u8F86\u8F66&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;en&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&quot;I don&#39;t have car&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;I have a car&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;I have two cars&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;I have {} cars&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;en&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&quot;I don&#39;t have car&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;I have a car&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;I have {} cars&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;en&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&quot;I don&#39;t have car&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;I have {} cars&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;de&quot;</span><span class="token operator">:</span><span class="token string">&quot;....&quot;</span> 
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u4E0A\u4F8B\u4E2D\uFF0C\u53EA\u9700\u8981\u5728\u7FFB\u8BD1\u6587\u4EF6\u4E2D\u5C06\u4E0A\u8FF0\u7684<code>en:&quot;&quot;</code>\u66F4\u6539\u4E3A<code>[&lt;0\u5BF9\u5E94\u7684\u590D\u6570\u6587\u672C&gt;,&lt;1\u5BF9\u5E94\u7684\u590D\u6570\u6587\u672C&gt;,...,&lt;n\u5BF9\u5E94\u7684\u590D\u6570\u6587\u672C&gt;]</code>\u5F62\u5F0F\u4EE3\u8868\u542F\u52A8\u590D\u6570\u673A\u5236.</p><ul><li>\u53EF\u4EE5\u7075\u6D3B\u5730\u4E3A\u6BCF\u4E00\u4E2A\u6570\u5B57(<code>0\u30011\u30012\u3001...\u3001n</code>)\u5BF9\u5E94\u7684\u590D\u6570\u5F62\u5F0F\u8FDB\u884C\u7FFB\u8BD1</li><li>\u6570\u91CF\u6570\u5B57\u5927\u4E8E\u6570\u7EC4\u957F\u5EA6\uFF0C\u5219\u603B\u662F\u53D6\u6700\u540E\u4E00\u4E2A\u590D\u6570\u5F62\u5F0F</li><li>\u590D\u6570\u5F62\u5F0F\u7684\u6587\u672C\u540C\u6837\u652F\u6301\u4F4D\u7F6E\u63D2\u503C\u548C\u53D8\u91CF\u63D2\u503C\u3002</li></ul><h2 id="\u5BF9\u5E94\u7684\u7FFB\u8BD1\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u5E94\u7684\u7FFB\u8BD1\u51FD\u6570" aria-hidden="true">#</a> \u5BF9\u5E94\u7684\u7FFB\u8BD1\u51FD\u6570</h2><p>\u542F\u7528\u590D\u6570\u5904\u7406\u673A\u5236\u540E\uFF0C\u5728<code>t</code>\u51FD\u6570\u6839\u636E\u53D8\u91CF\u503C\u6765\u51B3\u5B9A\u91C7\u7528\u5355\u6570\u8FD8\u662F\u590D\u6570\uFF0C\u6309\u5982\u4E0B\u89C4\u5219\u8FDB\u884C\u5904\u7406\u3002</p><ul><li><strong>\u4E0D\u5B58\u5728\u63D2\u503C\u53D8\u91CF\u4E14t\u51FD\u6570\u7684\u7B2C2\u4E2A\u53C2\u6570\u662F\u6570\u5B57</strong></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>
<span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&quot;\u6211\u6709\u4E00\u8F86\u8F66&quot;</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span>  <span class="token comment">// ==   &quot;I don&#39;t have a car&quot;</span>
<span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&quot;\u6211\u6709\u4E00\u8F86\u8F66&quot;</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span>  <span class="token comment">// ==   &quot;I have a car&quot;</span>
<span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&quot;\u6211\u6709\u4E00\u8F86\u8F66&quot;</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span>  <span class="token comment">// ==   &quot;I have two cars&quot;</span>
<span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&quot;\u6211\u6709\u4E00\u8F86\u8F66&quot;</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">)</span>  <span class="token comment">// == &quot;I have 100 cars&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li><strong>\u5B58\u5728\u63D2\u503C\u53D8\u91CF\u4E14t\u51FD\u6570\u7684\u7B2C2\u4E2A\u53C2\u6570\u662F\u6570\u5B57</strong></li></ul><p>\u5C31\u4E2D\u6587\u800C\u8A00\uFF0C\u4E0A\u8FF0\u6CA1\u6709\u6307\u5B9A\u63D2\u503C\u53D8\u91CF\u662F\u6BD4\u8F83\u522B\u626D\u7684\uFF0C\u4E00\u822C\u53EF\u4EE5\u5F15\u5165\u4E00\u4E2A\u4F4D\u7F6E\u63D2\u503C\u53D8\u91CF\u66F4\u52A0\u53CB\u597D\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>
<span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&quot;\u6211\u6709{}\u8F86\u8F66&quot;</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span>  		<span class="token comment">// ==   &quot;I don&#39;t have a car&quot;</span>
<span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&quot;\u6211\u6709{}\u8F86\u8F66&quot;</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span>  		<span class="token comment">// ==   &quot;I have a car&quot;</span>
<span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&quot;\u6211\u6709{}\u8F86\u8F66&quot;</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span>  		<span class="token comment">// ==   &quot;I have two cars&quot;</span>
<span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&quot;\u6211\u6709{}\u8F86\u8F66&quot;</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">)</span>  	<span class="token comment">// == &quot;I have 100 cars&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li><strong>\u590D\u6570\u547D\u540D\u63D2\u503C\u53D8\u91CF</strong></li></ul><p>\u5F53\u542F\u7528\u590D\u6570\u529F\u80FD\u65F6\uFF0C<code>t</code>\u51FD\u6570\u9700\u8981\u77E5\u9053\u6839\u636E\u54EA\u4E2A\u53D8\u91CF\u6765\u51B3\u5B9A\u91C7\u7528\u4F55\u79CD\u590D\u6570\u5F62\u5F0F\u3002</p><p><strong>\u5F53\u91C7\u7528\u4F4D\u7F6E\u53D8\u91CF\u63D2\u503C\u65F6\uFF0C<code>t</code>\u51FD\u6570\u53D6\u7B2C\u4E00\u4E2A\u6570\u5B57\u7C7B\u578B\u53C2\u6570\u4F5C\u4E3A\u4F4D\u7F6E\u63D2\u503C\u590D\u6570\u3002</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&quot;{}\u6709{}\u8F86\u8F66&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;\u5F20\u4E09&quot;</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>\u5F53\u91C7\u7528\u547D\u540D\u53D8\u91CF\u63D2\u503C\u65F6\uFF0C<code>t</code>\u51FD\u6570\u7EA6\u5B9A\u5F53\u63D2\u503C\u5B57\u5178\u4E2D\u5B58\u5728\u4EE5<code>$\u5B57\u7B26\u5F00\u5934</code>\u7684\u53D8\u91CF\u65F6\uFF0C\u5E76\u4E14\u503C\u662F<code>\u6570\u5B57</code>\u65F6\uFF0C\u6839\u636E\u8BE5\u53D8\u91CF\u6765\u5F15\u7528\u590D\u6570\u3002</strong></p><p>\u4E0B\u4F8B\u4E2D\uFF0C<code>t</code>\u51FD\u6570\u6839\u636E<code>$count</code>\u503C\u6765\u5904\u7406\u590D\u6570\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&quot;{name}\u6709{$count}\u8F86\u8F66&quot;</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&quot;\u5F20\u4E09&quot;</span><span class="token punctuation">,</span><span class="token literal-property property">$count</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> <strong>\u793A\u4F8B</strong></h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// languages/translates/default.json</span>
<span class="token punctuation">{</span>
    <span class="token string-property property">&quot;\u7B2C{}\u7AE0&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">en</span><span class="token operator">:</span><span class="token punctuation">[</span>
            <span class="token string">&quot;Chapter Zero&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Chapter One&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Chapter Two&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Chapter Three&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Chapter Four&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Chapter Five&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Chapter Six&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Chapter Seven&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Chapter Eight&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Chapter Nine&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Chapter {}&quot;</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">zh</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&quot;\u8D77\u59CB&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;\u7B2C\u4E00\u7AE0&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\u7B2C\u4E8C\u7AE0&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\u7B2C\u4E09\u7AE0&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;\u7B2C\u56DB\u7AE0&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;\u7B2C\u4E94\u7AE0&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;\u7B2C\u516D\u7AE0&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;\u7B2C\u4E03\u7AE0&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;\u7B2C\u516B\u7AE0&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;\u7B2C\u4E5D\u7AE0&quot;</span><span class="token punctuation">,</span>\u201C\u7B2C<span class="token punctuation">{</span><span class="token punctuation">}</span>\u7AE0\u201D<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u7FFB\u8BD1\u51FD\u6570</span>
<span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&quot;\u7B2C{}\u7AE0&quot;</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span>  <span class="token comment">// == Chapter Zero</span>
<span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&quot;\u7B2C{}\u7AE0&quot;</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span>  <span class="token comment">// == Chapter One</span>
<span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&quot;\u7B2C{}\u7AE0&quot;</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span>  <span class="token comment">// == Chapter Two</span>
<span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&quot;\u7B2C{}\u7AE0&quot;</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span>  <span class="token comment">// == Chapter Three</span>
<span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&quot;\u7B2C{}\u7AE0&quot;</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span>  <span class="token comment">// == Chapter Four</span>
<span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&quot;\u7B2C{}\u7AE0&quot;</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span>  <span class="token comment">// == Chapter Five</span>
<span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&quot;\u7B2C{}\u7AE0&quot;</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">)</span>  <span class="token comment">// == Chapter Six</span>
<span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&quot;\u7B2C{}\u7AE0&quot;</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">)</span>  <span class="token comment">// == Chapter Seven</span>
<span class="token operator">...</span>
<span class="token comment">// \u8D85\u8FC7\u53D6\u6700\u540E\u4E00\u9879</span>
<span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&quot;\u7B2C{}\u7AE0&quot;</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">)</span>  <span class="token comment">// == Chapter 100</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div>`,27);function p(o,e){return t}var u=n(a,[["render",p],["__file","plural.html.vue"]]);export{u as default};
