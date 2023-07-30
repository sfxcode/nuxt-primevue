import{_ as s,v as a,b as n,R as e}from"./chunks/framework.6ce4caf7.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"guide/getting-started.md","filePath":"guide/getting-started.md"}'),o={name:"guide/getting-started.md"},l=e(`<p>Getting Started</p><h2 id="installation-steps" tabindex="-1">Installation steps <a class="header-anchor" href="#installation-steps" aria-label="Permalink to &quot;Installation steps&quot;">​</a></h2><h3 id="step-1-install-depenendencies" tabindex="-1">Step. 1: Install depenendencies <a class="header-anchor" href="#step-1-install-depenendencies" aria-label="Permalink to &quot;Step. 1: Install depenendencies&quot;">​</a></h3><p>Create and change into a new directory.</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-D</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@sfxcode/nuxt-primevue</span></span></code></pre></div><h3 id="step-2-define-nuxt-modules-nuxt-config-ts" tabindex="-1">Step. 2: Define nuxt modules (nuxt.config.ts) <a class="header-anchor" href="#step-2-define-nuxt-modules-nuxt-config-ts" aria-label="Permalink to &quot;Step. 2: Define nuxt modules (nuxt.config.ts)&quot;">​</a></h3><p>Add nuxt-formkit (optional) and nuxt-primevue to your modules</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">modules</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@formkit/nuxt</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@sfxcode/nuxt-primevue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span></span></code></pre></div><h3 id="step-3-configure-nuxt-primevue-nuxt-config-ts-optional" tabindex="-1">Step. 3: Configure nuxt-primevue (nuxt.config.ts, optional) <a class="header-anchor" href="#step-3-configure-nuxt-primevue-nuxt-config-ts-optional" aria-label="Permalink to &quot;Step. 3: Configure nuxt-primevue (nuxt.config.ts, optional)&quot;">​</a></h3><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">primevue</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">config</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#FFCB6B;">ripple</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span></code></pre></div><h3 id="step-4-add-primevue-specific-css" tabindex="-1">Step. 4: Add PrimeVue specific CSS <a class="header-anchor" href="#step-4-add-primevue-specific-css" aria-label="Permalink to &quot;Step. 4: Add PrimeVue specific CSS&quot;">​</a></h3><p>Example below add required primevue css, primeicons and one of the primevue themes (here: saga-blue).</p><p>Base scss files for formkit can be imported from formkit-primevue.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">css</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">primevue/resources/primevue.css</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">primevue/resources/themes/saga-blue/theme.css</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">primeicons/primeicons.css</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@sfxcode/formkit-primevue/dist/sass/formkit-prime-inputs.scss</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@sfxcode/formkit-primevue/dist/sass/formkit-primevue.scss</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span></span></code></pre></div><h3 id="step-5-add-primevue-to-build-transpile-nuxt-config-ts" tabindex="-1">Step. 5: Add primevue to build / transpile (nuxt.config.ts) <a class="header-anchor" href="#step-5-add-primevue-to-build-transpile-nuxt-config-ts" aria-label="Permalink to &quot;Step. 5: Add primevue to build / transpile (nuxt.config.ts)&quot;">​</a></h3><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">build</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">transpile</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">primevue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">]</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span></code></pre></div><h3 id="step-6-only-for-usage-of-formkit-with-primevue" tabindex="-1">Step 6 (only for usage of Formkit with PrimeVue) <a class="header-anchor" href="#step-6-only-for-usage-of-formkit-with-primevue" aria-label="Permalink to &quot;Step 6 (only for usage of Formkit with PrimeVue)&quot;">​</a></h3><p>Add formkit.config.ts to your root dir and register primeInputs.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// formkit.config.ts</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">DefaultConfigOptions</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@formkit/vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">primeInputs</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@sfxcode/formkit-primevue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> config</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">DefaultConfigOptions</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">inputs</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> primeInputs</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> config</span></span></code></pre></div><h2 id="test-installation" tabindex="-1">Test Installation <a class="header-anchor" href="#test-installation" aria-label="Permalink to &quot;Test Installation&quot;">​</a></h2><p>This module contains some demo components to make sure everything work as expected.</p><h3 id="primedemotoast" tabindex="-1">PrimeDemoToast <a class="header-anchor" href="#primedemotoast" aria-label="Permalink to &quot;PrimeDemoToast&quot;">​</a></h3><p>Makes sure PrimeVue Services and Components are available.</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">PrimeDemoToas</span><span style="color:#C792EA;">t</span><span style="color:#89DDFF;">/&gt;</span></span></code></pre></div><h3 id="primedemoform" tabindex="-1">PrimeDemoForm <a class="header-anchor" href="#primedemoform" aria-label="Permalink to &quot;PrimeDemoForm&quot;">​</a></h3><p>Makes sure Formkit by PrimeVue Input components and validation are available.</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">PrimeDemoFor</span><span style="color:#C792EA;">m</span><span style="color:#89DDFF;">/&gt;</span></span></code></pre></div>`,27),p=[l];function t(r,i,c,D,y,d){return a(),n("div",null,p)}const m=s(o,[["render",t]]);export{u as __pageData,m as default};
