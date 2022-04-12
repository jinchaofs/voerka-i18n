import{_ as n,c as s}from"./app.b0e3c1fe.js";const a={},p=s(`<h1 id="\u7FFB\u8BD1\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u7FFB\u8BD1\u51FD\u6570" aria-hidden="true">#</a> \u7FFB\u8BD1\u51FD\u6570</h1><p>\u9ED8\u8BA4\u63D0\u4F9B\u7FFB\u8BD1\u51FD\u6570<code>t</code>\u7528\u6765\u8FDB\u884C\u7FFB\u8BD1\u3002\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0C<code>t</code>\u51FD\u6570\u58F0\u660E\u5728\u6267\u884C<code>voerkai18n compile</code>\u547D\u4EE4\u751F\u6210\u5728\u5DE5\u7A0B\u76EE\u5F55\u4E0B\u7684<code>languages/index.js</code>\u6587\u4EF6\u4E2D\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>
<span class="token comment">// \u4ECE\u5F53\u524D\u8BED\u8A00\u5305\u6587\u4EF6\u5939index.js\u4E2D\u5BFC\u5165\u7FFB\u8BD1\u51FD\u6570</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> t <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;&lt;myapp&gt;/languages&quot;</span>

<span class="token comment">// \u4E0D\u542B\u63D2\u503C\u53D8\u91CF</span>
<span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&quot;\u4E2D\u534E\u4EBA\u6C11\u5171\u548C\u56FD&quot;</span><span class="token punctuation">)</span>

<span class="token comment">// \u4F4D\u7F6E\u63D2\u503C\u53D8\u91CF</span>
<span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&quot;\u4E2D\u534E\u4EBA\u6C11\u5171\u548C\u56FD{}&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;\u4E07\u5C81&quot;</span><span class="token punctuation">)</span>
<span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&quot;\u4E2D\u534E\u4EBA\u6C11\u5171\u548C\u56FD\u6210\u7ACB\u4E8E{}\u5E74\uFF0C\u9996\u90FD{}&quot;</span><span class="token punctuation">,</span><span class="token number">1949</span><span class="token punctuation">,</span><span class="token string">&quot;\u5317\u4EAC&quot;</span><span class="token punctuation">)</span>

<span class="token comment">// \u5F53\u4EC5\u6709\u4E24\u4E2A\u53C2\u6570\u4E14\u7B2C2\u4E2A\u53C2\u6570\u662F[]\u7C7B\u578B\u65F6\uFF0C\u81EA\u52A8\u5C55\u5F00\u7B2C\u4E00\u4E2A\u53C2\u6570\u8FDB\u884C\u4F4D\u7F6E\u63D2\u503C</span>
<span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&quot;\u4E2D\u534E\u4EBA\u6C11\u5171\u548C\u56FD\u6210\u7ACB\u4E8E{year}\u5E74\uFF0C\u9996\u90FD{capital}&quot;</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">1949</span><span class="token punctuation">,</span><span class="token string">&quot;\u5317\u4EAC&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> 
 
<span class="token comment">// \u5F53\u4EC5\u6709\u4E24\u4E2A\u53C2\u6570\u4E14\u7B2C2\u4E2A\u53C2\u6570\u662F{}\u7C7B\u578B\u65F6\uFF0C\u542F\u7528\u5B57\u5178\u63D2\u503C\u53D8\u91CF</span>
<span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&quot;\u4E2D\u534E\u4EBA\u6C11\u5171\u548C\u56FD\u6210\u7ACB\u4E8E{year}\u5E74\uFF0C\u9996\u90FD{capital}&quot;</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">year</span><span class="token operator">:</span><span class="token number">1949</span><span class="token punctuation">,</span><span class="token literal-property property">capital</span><span class="token operator">:</span><span class="token string">&quot;\u5317\u4EAC&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u63D2\u503C\u53D8\u91CF\u53EF\u4EE5\u662F\u540C\u6B65\u51FD\u6570\uFF0C\u5728\u8FDB\u884C\u63D2\u503C\u65F6\u81EA\u52A8\u8C03\u7528\u3002</span>
<span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&quot;\u4E2D\u534E\u4EBA\u6C11\u5171\u548C\u56FD\u6210\u7ACB\u4E8E{year}\u5E74\uFF0C\u9996\u90FD{capital}&quot;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token number">1949</span><span class="token punctuation">,</span><span class="token string">&quot;\u5317\u4EAC&quot;</span><span class="token punctuation">)</span>

<span class="token comment">// \u5BF9\u63D2\u503C\u53D8\u91CF\u542F\u7528\u683C\u5F0F\u5316\u5668</span>
<span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&quot;\u4E2D\u534E\u4EBA\u6C11\u5171\u548C\u56FD\u6210\u7ACB\u4E8E{birthday | year}\u5E74&quot;</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">birthday</span><span class="token operator">:</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p><strong>\u6CE8\u610F\uFF1A</strong></p><ul><li><code>voerkai18n</code>\u4F7F\u7528\u6B63\u5219\u8868\u8FBE\u5F0F\u6765\u63D0\u53D6\u8981\u7FFB\u8BD1\u7684\u5185\u5BB9\uFF0C\u56E0\u6B64<code>t(&quot;&quot;)</code>\u53EF\u4EE5\u4F7F\u7528\u5728\u4EFB\u610F\u5730\u65B9\u3002</li><li></li></ul>`,5);function t(e,o){return p}var l=n(a,[["render",t],["__file","t.html.vue"]]);export{l as default};
