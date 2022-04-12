import{_ as n,c as s}from"./app.b0e3c1fe.js";const a={},t=s(`<h1 id="vue\u5E94\u7528" tabindex="-1"><a class="header-anchor" href="#vue\u5E94\u7528" aria-hidden="true">#</a> Vue\u5E94\u7528</h1><p>\u5728<code>Vue3</code>\u5E94\u7528\u4E2D\u5F15\u5165<code>voerkai18n</code>\u6765\u6DFB\u52A0\u56FD\u9645\u5316\u5E94\u7528\u9700\u8981\u7531\u4E24\u4E2A\u63D2\u4EF6\u6765\u7B80\u5316\u5E94\u7528\u3002</p><ul><li><p><strong>@voerkai18n/vue</strong></p><p><strong>Vue\u63D2\u4EF6</strong>\uFF0C\u5728\u521D\u59CB\u5316<code>Vue</code>\u5E94\u7528\u65F6\u5F15\u5165\uFF0C\u63D0\u4F9B\u8BBF\u95EE<code>\u5F53\u524D\u8BED\u8A00</code>\u3001<code>\u5207\u6362\u8BED\u8A00</code>\u3001<code>\u81EA\u52A8\u66F4\u65B0</code>\u7B49\u529F\u80FD\u3002</p></li><li><p><strong>@voerkai18n/vite</strong></p><p><strong>Vite\u63D2\u4EF6</strong>\uFF0C\u5728<code>vite.config.js</code>\u4E2D\u914D\u7F6E\uFF0C\u7528\u6765\u5B9E\u73B0<code>\u81EA\u52A8\u6587\u672C\u6620\u5C04</code>\u3001<code>\u81EA\u52A8\u5BFC\u5165t\u51FD\u6570</code>\u7B49\u529F\u80FD\u3002</p></li></ul><p><code>@voerkai18n/vue</code>\u548C<code>@voerkai18n/vite</code>\u4E24\u4EF6\u63D2\u4EF6\u76F8\u4E92\u914D\u5408\uFF0C\u5B89\u88C5\u914D\u7F6E\u597D\u8FD9\u4E24\u4E2A\u63D2\u4EF6\u540E\uFF0C\u5C31\u53EF\u4EE5\u5728<code>Vue</code>\u6587\u4EF6\u4F7F\u7528\u591A\u8BED\u8A00<code>t</code>\u51FD\u6570\u3002</p><p><strong>\u91CD\u70B9\uFF1A<code>t</code>\u51FD\u6570\u4F1A\u5728\u4F7F\u7528<code>@voerkai18n/vite</code>\u63D2\u4EF6\u540E\u81EA\u52A8\u6CE8\u5165\uFF0C\u56E0\u6B64\u5728<code>Vue</code>\u6587\u4EF6\u4E2D\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u3002</strong></p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">// \u5982\u679C\u6CA1\u6709\u5728vite.config.js\u4E2D\u914D\u7F6E\`@voerkai18n/vite\`\u63D2\u4EF6\uFF0C\u5219\u9700\u8981\u624B\u5DE5\u5BFC\u5165t\u51FD\u6570</span>
<span class="token comment">// import { t } from &quot;./languages&quot;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">username</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">password</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span><span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BA4\u8BC1&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token function">alert</span><span class="token punctuation">(</span><span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&quot;\u767B\u5F55&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>{{ t(&quot;\u8BF7\u8F93\u5165\u7528\u6237\u540D\u79F0&quot;) }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>{{t(&quot;\u7528\u6237\u540D:&quot;)}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>t(<span class="token punctuation">&#39;</span>\u90AE\u4EF6/\u624B\u673A\u53F7\u7801/\u5E10\u53F7<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>{{t(&quot;\u5BC6\u7801:&quot;)}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>password<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>t(<span class="token punctuation">&#39;</span>\u81F3\u5C116\u4F4D\u7684\u5BC6\u7801<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>            
    	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>            
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>login<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{t(&quot;\u767B\u5F55&quot;)}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><p><strong>\u8BF4\u660E\uFF1A</strong></p><ul><li>\u4E8B\u5B9E\u4E0A\uFF0C\u5C31\u7B97\u6CA1\u6709<code>@voerkai18n/vue</code>\u548C<code>@voerkai18n/vite</code>\u4E24\u4EF6\u63D2\u4EF6\u76F8\u4E92\u914D\u5408\uFF0C\u53EA\u9700\u8981\u5BFC\u5165<code>t</code>\u51FD\u6570\u4E5F\u5C31\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u3002\u8FD9\u4E24\u4E2A\u63D2\u4EF6\u53EA\u662F\u5F88\u7B80\u5355\u7684\u5C01\u88C5\u800C\u5DF2\u3002</li><li>\u5982\u679C\u8981\u5728\u5E94\u7528\u4E2D\u8FDB\u884C<code>\u8BED\u8A00\u52A8\u6001\u5207\u6362</code>\uFF0C\u5219\u9700\u8981\u5728\u5E94\u7528\u4E2D\u5F15\u5165<code>@voerkai18n/vue</code>\uFF0C\u8BF7\u53C2\u9605<code>@voerkai18n/vue</code>\u63D2\u4EF6\u4F7F\u7528\u8BF4\u660E\u3002</li><li><code>@voerkai18n/vite</code>\u7684\u4F7F\u7528\u8BF7\u53C2\u9605\u540E\u7EED\u8BF4\u660E\u3002</li></ul>`,8);function p(e,o){return t}var l=n(a,[["render",p],["__file","vue.html.vue"]]);export{l as default};