
var define,require,esl;!function(n){function e(n,e){function r(n){0===n.indexOf(".")&&i.push(n)}var i=[];if("string"==typeof n?r(n):$(n,function(n){r(n)}),i.length>0)throw new Error("[REQUIRE_FATAL]Relative ID is not allowed in global require: "+i.join(", "));var o=C.waitSeconds;return o&&n instanceof Array&&(D&&clearTimeout(D),D=setTimeout(t,1e3*o)),_(n,e)}function t(){function n(a,u){if(!o[a]&&!l(a,N)){o[a]=1,l(a,L)||r[a]||(r[a]=1,e.push(a));var f=T[a];f?u&&(r[a]||(r[a]=1,e.push(a)),$(f.depMs,function(e){n(e.absId,e.hard)})):i[a]||(i[a]=1,t.push(a))}}var e=[],t=[],r={},i={},o={};for(var a in F)n(a,1);if(e.length||t.length)throw new Error("[MODULE_TIMEOUT]Hang( "+(e.join(", ")||"none")+" ) Miss( "+(t.join(", ")||"none")+" )")}function r(n){$(H,function(e){a(n,e.deps,e.factory)}),H.length=0,u(n)}function i(n,e,t){if(null==t&&(null==e?(t=n,n=null):(t=e,e=null,n instanceof Array&&(e=n,n=null))),null!=t){var r=window.opera;if(!n&&document.attachEvent&&(!r||"[object Opera]"!==r.toString())){var i=S();n=i&&i.getAttribute("data-require-id")}n?a(n,e,t):H[0]={deps:e,factory:t}}}function o(){var n=C.config[this.id];return n&&"object"==typeof n?n:{}}function a(n,e,t){T[n]||(T[n]={id:n,depsDec:e,deps:e||["require","exports","module"],factoryDeps:[],factory:t,exports:{},config:o,state:z,require:w(n),depMs:[],depMkv:{},depRs:[],depPMs:[]})}function u(n){var e=T[n];if(e&&!l(n,B)){var t=e.deps,r=e.factory,i=0;"function"==typeof r&&(i=Math.min(r.length,t.length),!e.depsDec&&r.toString().replace(/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,"").replace(/require\(\s*(['"'])([^'"]+)\1\s*\)/g,function(n,e,r){t.push(r)}));var o=[];$(t,function(t,r){var a,u,f=I(t),c=q(f.mod,n);c&&!P[c]?(f.res&&(u={id:t,mod:c,res:f.res},F[c]=1,e.depPMs.push(c),e.depRs.push(u)),a=e.depMkv[c],a||(a={id:f.mod,absId:c,hard:i>r},e.depMs.push(a),e.depMkv[c]=a,o.push(c))):a={absId:c},i>r&&e.factoryDeps.push(u||a)}),e.state=B,s(n),m(o)}}function f(){for(var n in F)c(n),d(n)}function c(n){function e(n){if(!l(n,B))return!1;if(l(n,L)||t[n])return!0;t[n]=1;var r=T[n],i=!0;return $(r.depMs,function(n){return i=e(n.absId)}),i&&$(r.depRs,function(n){return i=!(!n.absId||!l(n.absId,N))}),i&&(r.state=L),i}var t={};e(n)}function s(e){function t(){if(!r&&i.state===L){r=1;var t=1,o=[];if($(i.factoryDeps,function(n){var e=n.absId;return P[e]||(d(e),l(e,N))?void o.push(e):(t=0,!1)}),t){try{var a=p(o,{require:i.require,exports:i.exports,module:i}),u=i.factory,f="function"==typeof u?u.apply(n,a):u;null!=f&&(i.exports=f),i.invokeFactory=null,delete F[e]}catch(c){if(r=0,/^\[MODULE_MISS\]"([^"]+)/.test(c.message)){var s=i.depMkv[RegExp.$1];return void(s&&(s.hard=1))}throw c}g(e)}}}var r,i=T[e];i.invokeFactory=t,$(i.depPMs,function(n){v(n,function(){$(i.depRs,function(t){t.absId||t.mod!==n||(t.absId=q(t.id,e),m([t.absId],f))})})})}function l(n,e){return T[n]&&T[n].state>=e}function d(n){var e=T[n];e&&e.invokeFactory&&e.invokeFactory()}function p(n,e){var t=[];return $(n,function(n,r){t[r]=e[n]||h(n)}),t}function v(n,e){if(l(n,N))return void e();var t=Q[n];t||(t=Q[n]=[]),t.push(e)}function g(n){var e=Q[n]||[],t=T[n];t.state=N;for(var r=e.length;r--;)e[r]();e.length=0,delete Q[n]}function h(n){return l(n,N)?T[n].exports:null}function m(e,t,r,i){function o(){if(!a){var r=1;$(e,function(n){return P[n]?void 0:r=!!l(n,N)}),r&&(a=1,"function"==typeof t&&t.apply(n,p(e,P)))}}if("string"==typeof e){if(d(e),!l(e,N))throw new Error('[MODULE_MISS]"'+e+'" is not exists!');return h(e)}i=i||{};var a=0;e instanceof Array&&(o(),a||($(e,function(n){P[n]||l(n,N)||(v(n,o),i[n]||(n.indexOf("!")>0?b:y)(n,r),u(n))}),f()))}function y(n){function e(){var e=t.readyState;if("undefined"==typeof e||/^(loaded|complete)$/.test(e)){t.onload=t.onreadystatechange=null,t=null,r(n);for(var i in F)u(i);f()}}if(!G[n]&&!T[n]){G[n]=1;var t=document.createElement("script");t.setAttribute("data-require-id",n),t.src=E(n+".js"),t.async=!0,t.readyState?t.onreadystatechange=e:t.onload=e,U(t)}}function b(n,e){function t(e){u.exports=e||!0,g(n)}function i(r){var i=e?T[e].require:_;r.load(a.res,i,t,o.call({id:n}))}if(!T[n]){var a=I(n),u={id:n,state:B};T[n]=u,t.fromText=function(n,e){F[n]=1,new Function(e)(),r(n)},i(h(a.mod))}}function M(n,e){var t=R(n,1,e);return t.sort(j),t}function k(){C.baseUrl=C.baseUrl.replace(/\/$/,"")+"/",J=M(C.paths),V=M(C.map,1),$(V,function(n){n.v=M(n.v)}),K=[],$(C.packages,function(n){var e=n;"string"==typeof n&&(e={name:n.split("/")[0],location:n,main:"main"}),e.location=e.location||e.name,e.main=(e.main||"main").replace(/\.js$/i,""),e.reg=O(e.name),K.push(e)}),K.sort(j),W=M(C.urlArgs,1),X=M(C.noRequests),$(X,function(n){var e=n.v,t={};n.v=t,e instanceof Array||(e=[e]),$(e,function(n){t[n]=1})})}function x(n,e,t){$(e,function(e){return e.reg.test(n)?(t(e.v,e.k,e),!1):void 0})}function E(n){var e=/(\.[a-z0-9]+)$/i,t=/(\?[^#]*)$/,r="",i=n,o="";t.test(n)&&(o=RegExp.$1,n=n.replace(t,"")),e.test(n)&&(r=RegExp.$1,i=n.replace(e,""));var a,u=i;return x(i,J,function(n,e){u=u.replace(e,n),a=1}),a||x(i,K,function(n,e,t){u=u.replace(t.name,t.location)}),/^([a-z]{2,10}:\/)?\//i.test(u)||(u=C.baseUrl+u),u+=r+o,x(i,W,function(n){u+=(u.indexOf("?")>0?"&":"?")+n}),u}function w(n){function e(e,r){if("string"==typeof e)return t[e]||(t[e]=m(q(e,n))),t[e];if(e instanceof Array){var i=[],o=[],a=[];$(e,function(e,t){var r=I(e),u=q(r.mod,n);o.push(u),F[u]=1,r.res?(i.push(u),a[t]=null):a[t]=u});var u={};$(o,function(n){var e;x(n,X,function(n){e=n}),e&&(e["*"]?u[n]=1:$(o,function(t){return e[t]?(u[n]=1,!1):void 0}))}),m(o,function(){$(a,function(t,r){null==t&&(a[r]=q(e[r],n))}),m(a,r,n)},n,u)}}var t={};return e.toUrl=function(e){return E(q(e,n))},e}function q(n,e){if(!n)return"";e=e||"";var t=I(n);if(!t)return n;var r=t.res,i=A(t.mod,e);if($(K,function(n){var e=n.name;return e===i?(i=e+"/"+n.main,!1):void 0}),x(e,V,function(n){x(i,n,function(n,e){i=i.replace(e,n)})}),r){var o=h(i);r=o.normalize?o.normalize(r,function(n){return q(n,e)}):q(r,e),i+="!"+r}return i}function A(n,e){if(0===n.indexOf(".")){var t=e.split("/"),r=n.split("/"),i=t.length-1,o=r.length,a=0,u=0;n:for(var f=0;o>f;f++)switch(r[f]){case"..":if(!(i>a))break n;a++,u++;break;case".":u++;break;default:break n}return t.length=i-a,r=r.slice(u),t.concat(r).join("/")}return n}function I(n){var e=n.split("!");return e[0]?{mod:e[0],res:e[1]}:null}function R(n,e,t){var r=[];for(var i in n)if(n.hasOwnProperty(i)){var o={k:i,v:n[i]};r.push(o),e&&(o.reg="*"===i&&t?/^/:O(i))}return r}function S(){if(Y)return Y;if(Z&&"interactive"===Z.readyState)return Z;for(var n=document.getElementsByTagName("script"),e=n.length;e--;){var t=n[e];if("interactive"===t.readyState)return Z=t,t}}function U(n){Y=n,ee?ne.insertBefore(n,ee):ne.appendChild(n),Y=null}function O(n){return new RegExp("^"+n+"(/|$)")}function $(n,e){if(n instanceof Array)for(var t=0,r=n.length;r>t&&e(n[t],t)!==!1;t++);}function j(n,e){var t=n.k||n.name,r=e.k||e.name;return"*"===r?-1:"*"===t?1:r.length-t.length}var D,T={},F={},z=1,B=2,L=3,N=4,P={require:e,exports:1,module:1},_=w(),C={baseUrl:"./",paths:{},config:{},map:{},packages:[],waitSeconds:0,noRequests:{},urlArgs:{}};e.version="1.8.8",e.loader="esl",e.toUrl=_.toUrl;var H=[];i.amd={};var Q={},G={};e.config=function(n){if(n){for(var e in C){var t=n[e],r=C[e];if(t)if("urlArgs"===e&&"string"==typeof t)C.urlArgs["*"]=t;else if(r instanceof Array)r.push.apply(r,t);else if("object"==typeof r)for(var i in t)r[i]=t[i];else C[e]=t}k()}},k();var J,K,V,W,X,Y,Z,ne=document.getElementsByTagName("head")[0],ee=document.getElementsByTagName("base")[0];ee&&(ne=ee.parentNode),define||(define=i,require||(require=e),esl=e)}(this);




<!DOCTYPE html>
<html lang="en" class=" is-copy-enabled emoji-size-boost is-u2f-enabled">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>

    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/frameworks-95a7419d75e4fd635d5fa583327026e2c08998262eb90c89fe7a179a4f2ca9c3.css" integrity="sha256-ladBnXXk/WNdX6WDMnAm4sCJmCYuuQyJ/noXmk8sqcM=" media="all" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-f7965775b16f3c6a45072b607dfa94bd230331f2d60e53f4f364e4fb31c782b1.css" integrity="sha256-95ZXdbFvPGpFBytgffqUvSMDMfLWDlP082Tk+zHHgrE=" media="all" rel="stylesheet" />
    
    
    
    

    <link as="script" href="https://assets-cdn.github.com/assets/frameworks-e76ce42ce77c934586f7cacbe24d556dbe6fefdbe8b53a393644b18199f7c291.js" rel="preload" />
    
    <link as="script" href="https://assets-cdn.github.com/assets/github-20fd24c5b8d40eb91ebe26faa3854b27a2cca41d68da854b5de0262eb1fdb9f7.js" rel="preload" />

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=device-width">
    
    
    <title>echarts/esl.js at master · echarts/echarts</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="https://avatars2.githubusercontent.com/u/9925923?v=3&amp;s=400" name="twitter:image:src" /><meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="echarts/echarts" name="twitter:title" /><meta content="https:// github.com/ecomfe/echarts"
																																																																						// name="twitter:description"
																																																																						// />
      <meta content="https://avatars2.githubusercontent.com/u/9925923?v=3&amp;s=400" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="echarts/echarts" property="og:title" /><meta content="https:// github.com/echarts/echarts"
																																																																					// property="og:url"
																																																																					// /><meta
																																																																					// content="https://github.com/ecomfe/echarts"
																																																																					// property="og:description"
																																																																					// />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="web-socket" href="wss://live.github.com/_sockets/MTE3MDUzMjU6ZGI3YzNlOTVjZGZiYTMyNGRjNTU4YjU5MjJkOWUyMTU6NmFiYjViMjY4ODI2ZjE5NThhM2RkNDc3OTExNjY1YWMyYjJjMGM3MDgzY2EwODdjNmJjNjM2YzZiNGIyZDM1MQ==--520e635d935900a410d6f94503630fce9a2ce4fe">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
<meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="72D42BCD:7A82:F19686F:574805CE" name="octolytics-dimension-request_id" /><meta content="11705325" name="octolytics-actor-id" /><meta content="Nickeilf" name="octolytics-actor-login" /><meta content="da4eba3c245dd282f10bb34923200168d333186a23bf50a8a52fdb950679ec5b" name="octolytics-actor-hash" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />



  <meta class="js-ga-set" name="dimension1" content="Logged In">



        <meta name="hostname" content="github.com">
    <meta name="user-login" content="Nickeilf">

        <meta name="expected-hostname" content="github.com">
      <meta name="js-proxy-site-detection-payload" content="NDMzMzI1ZGI4M2ZmOGNkNjYzMzNlYjk4ZTBjMWZmYjliOTIxZWQxMDgzYmYzMzU0NzkwZjM4NTZlMDBmNGM4Mnx7InJlbW90ZV9hZGRyZXNzIjoiMTE0LjIxMi40My4yMDUiLCJyZXF1ZXN0X2lkIjoiNzJENDJCQ0Q6N0E4MjpGMTk2ODZGOjU3NDgwNUNFIiwidGltZXN0YW1wIjoxNDY0MzM3ODc3fQ==">


      <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#4078c0">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <meta name="html-safe-nonce" content="b77031c22c01bb95ff3c41fce1485b8a90a9d5c1">
    <meta content="6c298f28fe8578e841a1ec3248bb2165764821ce" name="form-nonce" />

    <meta http-equiv="x-pjax-version" content="8e14783ccc52a0cc0185b34c9589f96c">
    

      
  <meta name="description" content="https://github.com/ecomfe/echarts">
  <meta name="go-import" content="github.com/echarts/echarts git https://github.com/echarts/echarts.git">

  <meta content="9925923" name="octolytics-dimension-user_id" /><meta content="echarts" name="octolytics-dimension-user_login" /><meta content="33192001" name="octolytics-dimension-repository_id" /><meta content="echarts/echarts" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="33192001" name="octolytics-dimension-repository_network_root_id" /><meta content="echarts/echarts" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/echarts/echarts/commits/master.atom" rel="alternate" title="Recent Commits to echarts:master" type="application/atom+xml">


      <link rel="canonical" href="https://github.com/echarts/echarts/blob/master/doc/asset/js/esl/esl.js" data-pjax-transient>
  </head>


  <body class="logged-in   env-production macintosh vis-public page-blob">
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"></div>
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>

    
    
    



        <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <svg aria-hidden="true" class="octicon octicon-mark-github" height="28" version="1.1" viewBox="0 0 16 16" width="28"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59 0.4 0.07 0.55-0.17 0.55-0.38 0-0.19-0.01-0.82-0.01-1.49-2.01 0.37-2.53-0.49-2.69-0.94-0.09-0.23-0.48-0.94-0.82-1.13-0.28-0.15-0.68-0.52-0.01-0.53 0.63-0.01 1.08 0.58 1.23 0.82 0.72 1.21 1.87 0.87 2.33 0.66 0.07-0.52 0.28-0.87 0.51-1.07-1.78-0.2-3.64-0.89-3.64-3.95 0-0.87 0.31-1.59 0.82-2.15-0.08-0.2-0.36-1.02 0.08-2.12 0 0 0.67-0.21 2.2 0.82 0.64-0.18 1.32-0.27 2-0.27 0.68 0 1.36 0.09 2 0.27 1.53-1.04 2.2-0.82 2.2-0.82 0.44 1.1 0.16 1.92 0.08 2.12 0.51 0.56 0.82 1.27 0.82 2.15 0 3.07-1.87 3.75-3.65 3.95 0.29 0.25 0.54 0.73 0.54 1.48 0 1.07-0.01 1.93-0.01 2.2 0 0.21 0.15 0.46 0.55 0.38C13.71 14.53 16 11.53 16 8 16 3.58 12.42 0 8 0z"></path></svg>
</a>


        <div class="header-search scoped-search site-scoped-search js-site-search" role="search">
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/echarts/echarts/search" class="js-site-search-form" data-scoped-search-url="/echarts/echarts/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
      <div class="header-search-scope">This repository</div>
      <input type="text"
        class="form-control header-search-input js-site-search-focus js-site-search-field is-clearable"
        data-hotkey="s"
        name="q"
        placeholder="Search"
        aria-label="Search this repository"
        data-unscoped-placeholder="Search GitHub"
        data-scoped-placeholder="Search"
        tabindex="1"
        autocapitalize="off">
    </label>
</form></div>


      <ul class="header-nav left" role="navigation">
        <li class="header-nav-item">
          <a href="/pulls" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:pulls context:user" data-hotkey="g p" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls">
            Pull requests
</a>        </li>
        <li class="header-nav-item">
          <a href="/issues" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:issues context:user" data-hotkey="g i" data-selected-links="/issues /issues/assigned /issues/mentioned /issues">
            Issues
</a>        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com/" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
      </ul>

    
<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item">
    
    <a href="/notifications" aria-label="You have no unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s js-socket-channel js-notification-indicator" data-channel="notification-changed-v2:11705325" data-ga-click="Header, go to notifications, icon:read" data-hotkey="g n">
        <span class="mail-status "></span>
        <svg aria-hidden="true" class="octicon octicon-bell" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M14 12v1H0v-1l0.73-0.58c0.77-0.77 0.81-2.55 1.19-4.42 0.77-3.77 4.08-5 4.08-5 0-0.55 0.45-1 1-1s1 0.45 1 1c0 0 3.39 1.23 4.16 5 0.38 1.88 0.42 3.66 1.19 4.42l0.66 0.58z m-7 4c1.11 0 2-0.89 2-2H5c0 1.11 0.89 2 2 2z"></path></svg>
</a>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link tooltipped tooltipped-s js-menu-target" href="/new"
       aria-label="Create new…"
       data-ga-click="Header, create new, icon:add">
      <svg aria-hidden="true" class="octicon octicon-plus left" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 9H7v5H5V9H0V7h5V2h2v5h5v2z"></path></svg>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <ul class="dropdown-menu dropdown-menu-sw">
        
<a class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>

  <a class="dropdown-item" href="/new/import" data-ga-click="Header, import a repository">
    Import repository
  </a>


  <a class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>



  <div class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="echarts/echarts">This repository</span>
  </div>
    <a class="dropdown-item" href="/echarts/echarts/issues/new" data-ga-click="Header, create new issue">
      New issue
    </a>

      </ul>
    </div>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name tooltipped tooltipped-sw js-menu-target" href="/Nickeilf"
       aria-label="View profile and more"
       data-ga-click="Header, show menu, icon:avatar">
      <img alt="@Nickeilf" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/11705325?v=3&amp;s=40" width="20" />
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <div class="dropdown-menu  dropdown-menu-sw">
        <div class=" dropdown-header header-nav-current-user css-truncate">
            Signed in as <strong class="css-truncate-target">Nickeilf</strong>

        </div>


        <div class="dropdown-divider"></div>

          <a class="dropdown-item" href="/Nickeilf" data-ga-click="Header, go to profile, text:your profile">
            Your profile
          </a>
        <a class="dropdown-item" href="/stars" data-ga-click="Header, go to starred repos, text:your stars">
          Your stars
        </a>
          <a class="dropdown-item" href="/explore" data-ga-click="Header, go to explore, text:explore">
            Explore
          </a>
          <a class="dropdown-item" href="/integrations" data-ga-click="Header, go to integrations, text:integrations">
            Integrations
          </a>
        <a class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">
          Help
        </a>


          <div class="dropdown-divider"></div>

          <a class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">
            Settings
          </a>

          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/logout" class="logout-form" data-form-nonce="6c298f28fe8578e841a1ec3248bb2165764821ce" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="R5LVROeVgJ3o3CnX3nN37EjdlI1t0fEYhbNNPVM09EYrl9cAFkLkXxH8EVN+1ccMfiZmsv+G1hOZTvZrY+vAbA==" /></div>
            <button class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
              Sign out
            </button>
</form>
      </div>
    </div>
  </li>
</ul>


    
  </div>
</div>


      


    <div id="start-of-content" class="accessibility-aid"></div>

      <div id="js-flash-container">
</div>


    <div role="main" class="main-content">
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode">
    <div id="js-repo-pjax-container" data-pjax-container>
      
<div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
  <div class="container repohead-details-container">

    

<ul class="pagehead-actions">

  <li>
        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-form-nonce="6c298f28fe8578e841a1ec3248bb2165764821ce" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="mig1Q4ApZcBHTPfSvBnIsmzymhr65ZDH3Tccs2dpDJHHIq+L/lukio3qRKg5dBOFXsHBPBVQa2IBZPeO/HORhA==" /></div>      <input class="form-control" id="repository_id" name="repository_id" type="hidden" value="33192001" />

        <div class="select-menu js-menu-container js-select-menu">
          <a href="/echarts/echarts/subscription"
            class="btn btn-sm btn-with-count select-menu-button js-menu-target" role="button" tabindex="0" aria-haspopup="true"
            data-ga-click="Repository, click Watch settings, action:blob#show">
            <span class="js-select-button">
              <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6c4.94 0 7.94-6 7.94-6S13 2 8.06 2z m-0.06 10c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4z m2-4c0 1.11-0.89 2-2 2s-2-0.89-2-2 0.89-2 2-2 2 0.89 2 2z"></path></svg>
              Watch
            </span>
          </a>
          <a class="social-count js-social-count" href="/echarts/echarts/watchers">
            5
          </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
            <div class="select-menu-header js-navigation-enable" tabindex="-1">
              <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75-1.48-1.48 3.75-3.75L0.77 4.25l1.48-1.48 3.75 3.75 3.75-3.75 1.48 1.48-3.75 3.75z"></path></svg>
              <span class="select-menu-title">Notifications</span>
            </div>

              <div class="select-menu-list js-navigation-container" role="menu">

                <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
                  <div class="select-menu-item-text">
                    <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                    <span class="select-menu-item-heading">Not watching</span>
                    <span class="description">Be notified when participating or @mentioned.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6c4.94 0 7.94-6 7.94-6S13 2 8.06 2z m-0.06 10c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4z m2-4c0 1.11-0.89 2-2 2s-2-0.89-2-2 0.89-2 2-2 2 0.89 2 2z"></path></svg>
                      Watch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
                  <div class="select-menu-item-text">
                    <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                    <span class="select-menu-item-heading">Watching</span>
                    <span class="description">Be notified of all conversations.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6c4.94 0 7.94-6 7.94-6S13 2 8.06 2z m-0.06 10c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4z m2-4c0 1.11-0.89 2-2 2s-2-0.89-2-2 0.89-2 2-2 2 0.89 2 2z"></path></svg>
                      Unwatch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
                  <div class="select-menu-item-text">
                    <input id="do_ignore" name="do" type="radio" value="ignore" />
                    <span class="select-menu-item-heading">Ignoring</span>
                    <span class="description">Never be notified.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-mute" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8 2.81v10.38c0 0.67-0.81 1-1.28 0.53L3 10H1c-0.55 0-1-0.45-1-1V7c0-0.55 0.45-1 1-1h2l3.72-3.72c0.47-0.47 1.28-0.14 1.28 0.53z m7.53 3.22l-1.06-1.06-1.97 1.97-1.97-1.97-1.06 1.06 1.97 1.97-1.97 1.97 1.06 1.06 1.97-1.97 1.97 1.97 1.06-1.06-1.97-1.97 1.97-1.97z"></path></svg>
                      Stop ignoring
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
</form>
  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/echarts/echarts/unstar" class="starred" data-form-nonce="6c298f28fe8578e841a1ec3248bb2165764821ce" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="YxkS9cfm4qbcfk2CHiJ4Fs2AWdRBn9q+RTndZs3Ou9dLa2V5JddDwi5CXkfajEm+gaVKBWD0PMa09E34Oj7/kg==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar echarts/echarts"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M14 6l-4.9-0.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14l4.33-2.33 4.33 2.33L10.4 9.26 14 6z"></path></svg>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/echarts/echarts/stargazers">
          36
        </a>
</form>
    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/echarts/echarts/star" class="unstarred" data-form-nonce="6c298f28fe8578e841a1ec3248bb2165764821ce" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="PNJsXy7gS2zyAplU+noXmURKiQGDs/nJYWa0dXWyBuDKpyiAClk6JB9OkNToKoU2/Ea92j8l7zB/HdMQvJtMXQ==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star echarts/echarts"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M14 6l-4.9-0.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14l4.33-2.33 4.33 2.33L10.4 9.26 14 6z"></path></svg>
        Star
      </button>
        <a class="social-count js-social-count" href="/echarts/echarts/stargazers">
          36
        </a>
</form>  </div>

  </li>

  <li>
          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/echarts/echarts/fork" class="btn-with-count" data-form-nonce="6c298f28fe8578e841a1ec3248bb2165764821ce" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="aR+HRzCLH9mqJQEHpxq/r9EnpDe5d1YdMh8/g9sXLscRpkdUergTdVxF6OtbDTy1d/cYZQVWHnEu1BUti4XRHw==" /></div>
            <button
                type="submit"
                class="btn btn-sm btn-with-count"
                data-ga-click="Repository, show fork modal, action:blob#show; text:Fork"
                title="Fork your own copy of echarts/echarts to your account"
                aria-label="Fork your own copy of echarts/echarts to your account">
              <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path d="M8 1c-1.11 0-2 0.89-2 2 0 0.73 0.41 1.38 1 1.72v1.28L5 8 3 6v-1.28c0.59-0.34 1-0.98 1-1.72 0-1.11-0.89-2-2-2S0 1.89 0 3c0 0.73 0.41 1.38 1 1.72v1.78l3 3v1.78c-0.59 0.34-1 0.98-1 1.72 0 1.11 0.89 2 2 2s2-0.89 2-2c0-0.73-0.41-1.38-1-1.72V9.5l3-3V4.72c0.59-0.34 1-0.98 1-1.72 0-1.11-0.89-2-2-2zM2 4.2c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2z m3 10c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2z m3-10c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2z"></path></svg>
              Fork
            </button>
</form>
    <a href="/echarts/echarts/network" class="social-count">
      15
    </a>
  </li>
</ul>

    <h1 class="entry-title public ">
  <svg aria-hidden="true" class="octicon octicon-repo" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M4 9h-1v-1h1v1z m0-3h-1v1h1v-1z m0-2h-1v1h1v-1z m0-2h-1v1h1v-1z m8-1v12c0 0.55-0.45 1-1 1H6v2l-1.5-1.5-1.5 1.5V14H1c-0.55 0-1-0.45-1-1V1C0 0.45 0.45 0 1 0h10c0.55 0 1 0.45 1 1z m-1 10H1v2h2v-1h3v1h5V11z m0-10H2v9h9V1z"></path></svg>
  <span class="author" itemprop="author"><a href="/echarts" class="url fn" rel="author">echarts</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/echarts/echarts" data-pjax="#js-repo-pjax-container">echarts</a></strong>

</h1>

  </div>
  <div class="container">
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/echarts/echarts" aria-selected="true" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /echarts/echarts" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M9.5 3l-1.5 1.5 3.5 3.5L8 11.5l1.5 1.5 4.5-5L9.5 3zM4.5 3L0 8l4.5 5 1.5-1.5L2.5 8l3.5-3.5L4.5 3z"></path></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a href="/echarts/echarts/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /echarts/echarts/issues" itemprop="url">
        <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7S10.14 13.7 7 13.7 1.3 11.14 1.3 8s2.56-5.7 5.7-5.7m0-1.3C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7S10.86 1 7 1z m1 3H6v5h2V4z m0 6H6v2h2V10z"></path></svg>
        <span itemprop="name">Issues</span>
        <span class="counter">1</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/echarts/echarts/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /echarts/echarts/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M11 11.28c0-1.73 0-6.28 0-6.28-0.03-0.78-0.34-1.47-0.94-2.06s-1.28-0.91-2.06-0.94c0 0-1.02 0-1 0V0L4 3l3 3V4h1c0.27 0.02 0.48 0.11 0.69 0.31s0.3 0.42 0.31 0.69v6.28c-0.59 0.34-1 0.98-1 1.72 0 1.11 0.89 2 2 2s2-0.89 2-2c0-0.73-0.41-1.38-1-1.72z m-1 2.92c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2zM4 3c0-1.11-0.89-2-2-2S0 1.89 0 3c0 0.73 0.41 1.38 1 1.72 0 1.55 0 5.56 0 6.56-0.59 0.34-1 0.98-1 1.72 0 1.11 0.89 2 2 2s2-0.89 2-2c0-0.73-0.41-1.38-1-1.72V4.72c0.59-0.34 1-0.98 1-1.72z m-0.8 10c0 0.66-0.55 1.2-1.2 1.2s-1.2-0.55-1.2-1.2 0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2z m-1.2-8.8c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2z"></path></svg>
      <span itemprop="name">Pull requests</span>
      <span class="counter">0</span>
      <meta itemprop="position" content="3">
</a>  </span>

    <a href="/echarts/echarts/wiki" class="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /echarts/echarts/wiki">
      <svg aria-hidden="true" class="octicon octicon-book" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M2 5h4v1H2v-1z m0 3h4v-1H2v1z m0 2h4v-1H2v1z m11-5H9v1h4v-1z m0 2H9v1h4v-1z m0 2H9v1h4v-1z m2-6v9c0 0.55-0.45 1-1 1H8.5l-1 1-1-1H1c-0.55 0-1-0.45-1-1V3c0-0.55 0.45-1 1-1h5.5l1 1 1-1h5.5c0.55 0 1 0.45 1 1z m-8 0.5l-0.5-0.5H1v9h6V3.5z m7-0.5H8.5l-0.5 0.5v8.5h6V3z"></path></svg>
      Wiki
</a>

  <a href="/echarts/echarts/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="pulse /echarts/echarts/pulse">
    <svg aria-hidden="true" class="octicon octicon-pulse" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 8L8.8 5.4 6.6 8.5 5.5 1.6 2.38 8H0V10h3.6L4.5 8.2l0.9 5.4L9 8.5l1.6 1.5H14V8H11.5z"></path></svg>
    Pulse
</a>
  <a href="/echarts/echarts/graphs" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors /echarts/echarts/graphs">
    <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M16 14v1H0V0h1v14h15z m-11-1H3V8h2v5z m4 0H7V3h2v10z m4 0H11V6h2v7z"></path></svg>
    Graphs
</a>

</nav>

  </div>
</div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    

<a href="/echarts/echarts/blob/e669a174a70ebc044ec46f43ab44a2f08432c704/doc/asset/js/esl/esl.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:7ea47c26e7fc7dfae6c72c0c5237ad19 -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu branch-select-menu js-menu-container js-select-menu left">
  <button class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    title="master"
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75-1.48-1.48 3.75-3.75L0.77 4.25l1.48-1.48 3.75 3.75 3.75-3.75 1.48 1.48-3.75 3.75z"></path></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/echarts/echarts/blob/gh-pages/doc/asset/js/esl/esl.js"
               data-name="gh-pages"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="gh-pages">
                gh-pages
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/echarts/echarts/blob/master/doc/asset/js/esl/esl.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="master">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/echarts/echarts/tree/2.2.1/doc/asset/js/esl/esl.js"
              data-name="2.2.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.2.1">
                2.2.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/echarts/echarts/tree/2.2.0/doc/asset/js/esl/esl.js"
              data-name="2.2.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.2.0">
                2.2.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/echarts/echarts/tree/2.1.10/doc/asset/js/esl/esl.js"
              data-name="2.1.10"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.1.10">
                2.1.10
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/echarts/echarts/tree/2.1.9/doc/asset/js/esl/esl.js"
              data-name="2.1.9"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.1.9">
                2.1.9
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/echarts/echarts/tree/2.1.8/doc/asset/js/esl/esl.js"
              data-name="2.1.8"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.1.8">
                2.1.8
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/echarts/echarts/tree/2.0.4/doc/asset/js/esl/esl.js"
              data-name="2.0.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.0.4">
                2.0.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/echarts/echarts/tree/2.0.3/doc/asset/js/esl/esl.js"
              data-name="2.0.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.0.3">
                2.0.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/echarts/echarts/tree/2.0.2/doc/asset/js/esl/esl.js"
              data-name="2.0.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.0.2">
                2.0.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/echarts/echarts/tree/2.0.1/doc/asset/js/esl/esl.js"
              data-name="2.0.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.0.1">
                2.0.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/echarts/echarts/tree/2.0.0/doc/asset/js/esl/esl.js"
              data-name="2.0.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.0.0">
                2.0.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/echarts/echarts/tree/1.4.1/doc/asset/js/esl/esl.js"
              data-name="1.4.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.4.1">
                1.4.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/echarts/echarts/tree/1.4.0/doc/asset/js/esl/esl.js"
              data-name="1.4.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.4.0">
                1.4.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/echarts/echarts/tree/1.3.8/doc/asset/js/esl/esl.js"
              data-name="1.3.8"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.3.8">
                1.3.8
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/echarts/echarts/tree/1.3.7/doc/asset/js/esl/esl.js"
              data-name="1.3.7"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.3.7">
                1.3.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/echarts/echarts/tree/1.3.6/doc/asset/js/esl/esl.js"
              data-name="1.3.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.3.6">
                1.3.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/echarts/echarts/tree/1.3.5/doc/asset/js/esl/esl.js"
              data-name="1.3.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.3.5">
                1.3.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/echarts/echarts/tree/1.3.1/doc/asset/js/esl/esl.js"
              data-name="1.3.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.3.1">
                1.3.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/echarts/echarts/tree/1.3.0/doc/asset/js/esl/esl.js"
              data-name="1.3.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.3.0">
                1.3.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/echarts/echarts/tree/1.2.1/doc/asset/js/esl/esl.js"
              data-name="1.2.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.2.1">
                1.2.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/echarts/echarts/tree/1.2.0/doc/asset/js/esl/esl.js"
              data-name="1.2.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.2.0">
                1.2.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/echarts/echarts/tree/1.1.2/doc/asset/js/esl/esl.js"
              data-name="1.1.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.1.2">
                1.1.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/echarts/echarts/tree/1.1.1/doc/asset/js/esl/esl.js"
              data-name="1.1.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.1.1">
                1.1.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/echarts/echarts/tree/1.1.0/doc/asset/js/esl/esl.js"
              data-name="1.1.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.1.0">
                1.1.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/echarts/echarts/tree/1.0.0/doc/asset/js/esl/esl.js"
              data-name="1.0.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.0.0">
                1.0.0
              </span>
            </a>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="btn-group right">
    <a href="/echarts/echarts/find/master"
          class="js-pjax-capture-input btn btn-sm"
          data-pjax
          data-hotkey="t">
      Find file
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
  </div>
  <div class="breadcrumb js-zeroclipboard-target">
    <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/echarts/echarts"><span>echarts</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a href="/echarts/echarts/tree/master/doc"><span>doc</span></a></span><span class="separator">/</span><span class="js-path-segment"><a href="/echarts/echarts/tree/master/doc/asset"><span>asset</span></a></span><span class="separator">/</span><span class="js-path-segment"><a href="/echarts/echarts/tree/master/doc/asset/js"><span>js</span></a></span><span class="separator">/</span><span class="js-path-segment"><a href="/echarts/echarts/tree/master/doc/asset/js/esl"><span>esl</span></a></span><span class="separator">/</span><strong class="final-path">esl.js</strong>
  </div>
</div>


  <div class="commit-tease">
      <span class="right">
        <a class="commit-tease-sha" href="/echarts/echarts/commit/7519d29fc629a2f020efc637e6e096238ed53663" data-pjax>
          7519d29
        </a>
        <relative-time datetime="2014-12-03T07:13:04Z">Dec 3, 2014</relative-time>
      </span>
      <div>
        <img alt="@erik168" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/696441?v=3&amp;s=40" width="20" />
        <a href="/erik168" class="user-mention" rel="contributor">erik168</a>
          <a href="/echarts/echarts/commit/7519d29fc629a2f020efc637e6e096238ed53663" class="message" data-pjax="true" title="use latest esl">use latest esl</a>
      </div>

    <div class="commit-tease-contributors">
      <button type="button" class="btn-link muted-link contributors-toggle" data-facebox="#blob_contributors_box">
        <strong>2</strong>
         contributors
      </button>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="kener" href="/echarts/echarts/commits/master/doc/asset/js/esl/esl.js?author=kener"><img alt="@kener" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/1711855?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="erik168" href="/echarts/echarts/commits/master/doc/asset/js/esl/esl.js?author=erik168"><img alt="@erik168" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/696441?v=3&amp;s=40" width="20" /> </a>


    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@kener" height="24" src="https://avatars1.githubusercontent.com/u/1711855?v=3&amp;s=48" width="24" />
            <a href="/kener">kener</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@erik168" height="24" src="https://avatars2.githubusercontent.com/u/696441?v=3&amp;s=48" width="24" />
            <a href="/erik168">erik168</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="btn-group">
      <a href="/echarts/echarts/raw/master/doc/asset/js/esl/esl.js" class="btn btn-sm " id="raw-url">Raw</a>
        <a href="/echarts/echarts/blame/master/doc/asset/js/esl/esl.js" class="btn btn-sm js-update-url-with-hash">Blame</a>
      <a href="/echarts/echarts/commits/master/doc/asset/js/esl/esl.js" class="btn btn-sm " rel="nofollow">History</a>
    </div>

        <a class="btn-octicon tooltipped tooltipped-nw"
           href="github-mac://openRepo/https://github.com/echarts/echarts?branch=master&amp;filepath=doc%2Fasset%2Fjs%2Fesl%2Fesl.js"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:mac">
            <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M15 2H1c-0.55 0-1 0.45-1 1v9c0 0.55 0.45 1 1 1h5.34c-0.25 0.61-0.86 1.39-2.34 2h8c-1.48-0.61-2.09-1.39-2.34-2h5.34c0.55 0 1-0.45 1-1V3c0-0.55-0.45-1-1-1z m0 9H1V3h14v8z"></path></svg>
        </a>

        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/echarts/echarts/edit/master/doc/asset/js/esl/esl.js" class="inline-form js-update-url-with-hash" data-form-nonce="6c298f28fe8578e841a1ec3248bb2165764821ce" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="nQIEv29NBGm7xjZUXr55bEQmgJBIVHjodIHhkZBnt54zWo7BimMcrikmsZRW7ggWJwG+xQZCXKh5y5DvjMGXqg==" /></div>
          <button class="btn-octicon tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-pencil" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M0 12v3h3l8-8-3-3L0 12z m3 2H1V12h1v1h1v1z m10.3-9.3l-1.3 1.3-3-3 1.3-1.3c0.39-0.39 1.02-0.39 1.41 0l1.59 1.59c0.39 0.39 0.39 1.02 0 1.41z"></path></svg>
          </button>
</form>        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/echarts/echarts/delete/master/doc/asset/js/esl/esl.js" class="inline-form" data-form-nonce="6c298f28fe8578e841a1ec3248bb2165764821ce" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="EMtpfBrxvmA6/U56TuIR9bZQT/yac8MnVMhQJm+U+9VlTk5m2f9r+ohkUanggNEkFiCVdOv92QsA0DNWUtQc6g==" /></div>
          <button class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and delete the file" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M10 2H8c0-0.55-0.45-1-1-1H4c-0.55 0-1 0.45-1 1H1c-0.55 0-1 0.45-1 1v1c0 0.55 0.45 1 1 1v9c0 0.55 0.45 1 1 1h7c0.55 0 1-0.45 1-1V5c0.55 0 1-0.45 1-1v-1c0-0.55-0.45-1-1-1z m-1 12H2V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9z m1-10H1v-1h9v1z"></path></svg>
          </button>
</form>  </div>

  <div class="file-info">
      1654 lines (1463 sloc)
      <span class="file-info-divider"></span>
    46.2 KB
  </div>
</div>

  

  <div itemprop="text" class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="4">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/**
																						 * </span></td>
																						 * </tr>
																						 * <tr>
																						 * <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
																						 * <td id="LC2" class="blob-code blob-code-inner js-file-line"><span
																						 * class="pl-c"> *
																						 * ESL
																						 * (Enterprise
																						 * Standard
																						 * Loader)</span></td>
																						 * </tr>
																						 * <tr>
																						 * <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
																						 * <td id="LC3" class="blob-code blob-code-inner js-file-line"><span
																						 * class="pl-c"> *
																						 * Copyright
																						 * 2013
																						 * Baidu
																						 * Inc.
																						 * All
																						 * rights
																						 * reserved.</span></td>
																						 * </tr>
																						 * <tr>
																						 * <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
																						 * <td id="LC4" class="blob-code blob-code-inner js-file-line"><span
																						 * class="pl-c"> *</span></td>
																						 * </tr>
																						 * <tr>
																						 * <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
																						 * <td id="LC5" class="blob-code blob-code-inner js-file-line"><span
																						 * class="pl-c"> *
																						 * <span
																						 * class="pl-k">@file</span>
																						 * Browser端标准加载器，符合AMD规范</span></td>
																						 * </tr>
																						 * <tr>
																						 * <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
																						 * <td id="LC6" class="blob-code blob-code-inner js-file-line"><span
																						 * class="pl-c"> *
																						 * <span
																						 * class="pl-k">@author</span>
																						 * errorrik(errorrik@gmail.com)</span></td>
																						 * </tr>
																						 * <tr>
																						 * <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
																						 * <td id="LC7" class="blob-code blob-code-inner js-file-line"><span
																						 * class="pl-c"> *
																						 * Firede(firede@firede.us)</span></td>
																						 * </tr>
																						 * <tr>
																						 * <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
																						 * <td id="LC8" class="blob-code blob-code-inner js-file-line"><span
																						 * class="pl-c">
																						 */</span></td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/*
																						 * jshint
																						 * ignore:start
																						 */</span></td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> define;</td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> require;</td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> esl;</td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/*
																						 * jshint
																						 * ignore:end
																						 */</span></td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line">(<span class="pl-k">function</span> (<span class="pl-c1">global</span>) {</td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">// &quot;mod&quot;开头的变量或函数为内部模块管理函数</span></td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">// 为提高压缩率，不使用function或object包装</span></td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">/**
																							 * </span></td>
																							 * </tr>
																							 * <tr>
																							 * <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
																							 * <td id="LC21" class="blob-code blob-code-inner js-file-line"><span
																							 * class="pl-c"> *
																							 * 模块容器</span></td>
																							 * </tr>
																							 * <tr>
																							 * <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
																							 * <td id="LC22" class="blob-code blob-code-inner js-file-line"><span
																							 * class="pl-c"> *</span></td>
																							 * </tr>
																							 * <tr>
																							 * <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
																							 * <td id="LC23" class="blob-code blob-code-inner js-file-line"><span
																							 * class="pl-c"> *
																							 * <span
																							 * class="pl-k">@inner</span></span></td>
																							 * </tr>
																							 * <tr>
																							 * <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
																							 * <td id="LC24" class="blob-code blob-code-inner js-file-line"><span
																							 * class="pl-c"> *
																							 * <span
																							 * class="pl-k">@type</span>
																							 * {Object}</span></td>
																							 * </tr>
																							 * <tr>
																							 * <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
																							 * <td id="LC25" class="blob-code blob-code-inner js-file-line"><span
																							 * class="pl-c">
																							 */</span></td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> modModules <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">/**
																							 * </span></td>
																							 * </tr>
																							 * <tr>
																							 * <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
																							 * <td id="LC29" class="blob-code blob-code-inner js-file-line"><span
																							 * class="pl-c"> *
																							 * 自动定义的模块表</span></td>
																							 * </tr>
																							 * <tr>
																							 * <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
																							 * <td id="LC30" class="blob-code blob-code-inner js-file-line"><span
																							 * class="pl-c"> *</span></td>
																							 * </tr>
																							 * <tr>
																							 * <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
																							 * <td id="LC31" class="blob-code blob-code-inner js-file-line"><span
																							 * class="pl-c"> *
																							 * 模块define
																							 * factory是用到时才执行，但是以下几种情况需要自动马上执行：</span></td>
																							 * </tr>
																							 * <tr>
																							 * <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
																							 * <td id="LC32" class="blob-code blob-code-inner js-file-line"><span
																							 * class="pl-c"> *
																							 * 1.
																							 * require(
																							 * [moduleId],
																							 * callback )</span></td>
																							 * </tr>
																							 * <tr>
																							 * <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
																							 * <td id="LC33" class="blob-code blob-code-inner js-file-line"><span
																							 * class="pl-c"> *
																							 * 2.
																							 * plugin
																							 * module:
																							 * require(
																							 * &#39;plugin!resource&#39; )</span></td>
																							 * </tr>
																							 * <tr>
																							 * <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
																							 * <td id="LC34" class="blob-code blob-code-inner js-file-line"><span
																							 * class="pl-c"> *</span></td>
																							 * </tr>
																							 * <tr>
																							 * <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
																							 * <td id="LC35" class="blob-code blob-code-inner js-file-line"><span
																							 * class="pl-c"> *
																							 * <span
																							 * class="pl-k">@inner</span></span></td>
																							 * </tr>
																							 * <tr>
																							 * <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
																							 * <td id="LC36" class="blob-code blob-code-inner js-file-line"><span
																							 * class="pl-c"> *
																							 * <span
																							 * class="pl-k">@type</span>
																							 * {Object}</span></td>
																							 * </tr>
																							 * <tr>
																							 * <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
																							 * <td id="LC37" class="blob-code blob-code-inner js-file-line"><span
																							 * class="pl-c">
																							 */</span></td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> autoDefineModules <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">// 模块状态枚举量</span></td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> <span class="pl-c1">MODULE_PRE_DEFINED</span> <span class="pl-k">=</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> <span class="pl-c1">MODULE_ANALYZED</span> <span class="pl-k">=</span> <span class="pl-c1">2</span>;</td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> <span class="pl-c1">MODULE_PREPARED</span> <span class="pl-k">=</span> <span class="pl-c1">3</span>;</td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> <span class="pl-c1">MODULE_DEFINED</span> <span class="pl-k">=</span> <span class="pl-c1">4</span>;</td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">/**
																							 * </span></td>
																							 * </tr>
																							 * <tr>
																							 * <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
																							 * <td id="LC48" class="blob-code blob-code-inner js-file-line"><span
																							 * class="pl-c"> *
																							 * 内建module名称集合</span></td>
																							 * </tr>
																							 * <tr>
																							 * <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
																							 * <td id="LC49" class="blob-code blob-code-inner js-file-line"><span
																							 * class="pl-c"> *</span></td>
																							 * </tr>
																							 * <tr>
																							 * <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
																							 * <td id="LC50" class="blob-code blob-code-inner js-file-line"><span
																							 * class="pl-c"> *
																							 * <span
																							 * class="pl-k">@inner</span></span></td>
																							 * </tr>
																							 * <tr>
																							 * <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
																							 * <td id="LC51" class="blob-code blob-code-inner js-file-line"><span
																							 * class="pl-c"> *
																							 * <span
																							 * class="pl-k">@type</span>
																							 * {Object}</span></td>
																							 * </tr>
																							 * <tr>
																							 * <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
																							 * <td id="LC52" class="blob-code blob-code-inner js-file-line"><span
																							 * class="pl-c">
																							 */</span></td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> <span class="pl-c1">BUILDIN_MODULE</span> <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code blob-code-inner js-file-line">        require<span class="pl-k">:</span> globalRequire,</td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code blob-code-inner js-file-line">        exports<span class="pl-k">:</span> <span class="pl-c1">1</span>,</td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code blob-code-inner js-file-line">        module<span class="pl-k">:</span> <span class="pl-c1">1</span></td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">/**
																							 * </span></td>
																							 * </tr>
																							 * <tr>
																							 * <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
																							 * <td id="LC60" class="blob-code blob-code-inner js-file-line"><span
																							 * class="pl-c"> *
																							 * 全局require函数</span></td>
																							 * </tr>
																							 * <tr>
																							 * <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
																							 * <td id="LC61" class="blob-code blob-code-inner js-file-line"><span
																							 * class="pl-c"> *</span></td>
																							 * </tr>
																							 * <tr>
																							 * <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
																							 * <td id="LC62" class="blob-code blob-code-inner js-file-line"><span
																							 * class="pl-c"> *
																							 * <span
																							 * class="pl-k">@inner</span></span></td>
																							 * </tr>
																							 * <tr>
																							 * <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
																							 * <td id="LC63" class="blob-code blob-code-inner js-file-line"><span
																							 * class="pl-c"> *
																							 * <span
																							 * class="pl-k">@type</span>
																							 * {Function}</span></td>
																							 * </tr>
																							 * <tr>
																							 * <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
																							 * <td id="LC64" class="blob-code blob-code-inner js-file-line"><span
																							 * class="pl-c">
																							 */</span></td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> actualGlobalRequire <span class="pl-k">=</span> <span class="pl-en">createLocalRequire</span>();</td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">// #begin-ignore</span></td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">/**
																							 * </span></td>
																							 * </tr>
																							 * <tr>
																							 * <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
																							 * <td id="LC69" class="blob-code blob-code-inner js-file-line"><span
																							 * class="pl-c"> *
																							 * 超时提醒定时器</span></td>
																							 * </tr>
																							 * <tr>
																							 * <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
																							 * <td id="LC70" class="blob-code blob-code-inner js-file-line"><span
																							 * class="pl-c"> *</span></td>
																							 * </tr>
																							 * <tr>
																							 * <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
																							 * <td id="LC71" class="blob-code blob-code-inner js-file-line"><span
																							 * class="pl-c"> *
																							 * <span
																							 * class="pl-k">@inner</span></span></td>
																							 * </tr>
																							 * <tr>
																							 * <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
																							 * <td id="LC72" class="blob-code blob-code-inner js-file-line"><span
																							 * class="pl-c"> *
																							 * <span
																							 * class="pl-k">@type</span>
																							 * {number}</span></td>
																							 * </tr>
																							 * <tr>
																							 * <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
																							 * <td id="LC73" class="blob-code blob-code-inner js-file-line"><span
																							 * class="pl-c">
																							 */</span></td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> waitTimeout;</td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">// #end-ignore</span></td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">/*
																							 * eslint-disable
																							 * fecs-key-spacing
																							 */</span></td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">/*
																							 * eslint-disable
																							 * key-spacing
																							 */</span></td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">/**
																							 * </span></td>
																							 * </tr>
																							 * <tr>
																							 * <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
																							 * <td id="LC80" class="blob-code blob-code-inner js-file-line"><span
																							 * class="pl-c"> *
																							 * require配置</span></td>
																							 * </tr>
																							 * <tr>
																							 * <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
																							 * <td id="LC81" class="blob-code blob-code-inner js-file-line"><span
																							 * class="pl-c"> *</span></td>
																							 * </tr>
																							 * <tr>
																							 * <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
																							 * <td id="LC82" class="blob-code blob-code-inner js-file-line"><span
																							 * class="pl-c"> *
																							 * <span
																							 * class="pl-k">@inner</span></span></td>
																							 * </tr>
																							 * <tr>
																							 * <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
																							 * <td id="LC83" class="blob-code blob-code-inner js-file-line"><span
																							 * class="pl-c"> *
																							 * <span
																							 * class="pl-k">@type</span>
																							 * {Object}</span></td>
																							 * </tr>
																							 * <tr>
																							 * <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
																							 * <td id="LC84" class="blob-code blob-code-inner js-file-line"><span
																							 * class="pl-c">
																							 */</span></td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> requireConf <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code blob-code-inner js-file-line">        baseUrl    <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>./<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code blob-code-inner js-file-line">        paths      <span class="pl-k">:</span> {},</td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code blob-code-inner js-file-line">        config     <span class="pl-k">:</span> {},</td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code blob-code-inner js-file-line">        map        <span class="pl-k">:</span> {},</td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code blob-code-inner js-file-line">        packages   <span class="pl-k">:</span> [],</td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// #begin-ignore</span></td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code blob-code-inner js-file-line">        waitSeconds<span class="pl-k">:</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// #end-ignore</span></td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code blob-code-inner js-file-line">        noRequests <span class="pl-k">:</span> {},</td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code blob-code-inner js-file-line">        urlArgs    <span class="pl-k">:</span> {}</td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">/*
																							 * eslint-enable
																							 * key-spacing
																							 */</span></td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">/**
																							 * </span></td>
																							 * </tr>
																							 * <tr>
																							 * <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
																							 * <td id="LC100" class="blob-code blob-code-inner js-file-line"><span
																							 * class="pl-c"> *
																							 * 加载模块</span></td>
																							 * </tr>
																							 * <tr>
																							 * <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
																							 * <td id="LC101" class="blob-code blob-code-inner js-file-line"><span
																							 * class="pl-c"> *</span></td>
																							 * </tr>
																							 * <tr>
																							 * <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
																							 * <td id="LC102" class="blob-code blob-code-inner js-file-line"><span
																							 * class="pl-c"> *
																							 * <span
																							 * class="pl-k">@param</span>
																							 * {string|Array}
																							 * requireId
																							 * 模块id或模块id数组，</span></td>
																							 * </tr>
																							 * <tr>
																							 * <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
																							 * <td id="LC103" class="blob-code blob-code-inner js-file-line"><span
																							 * class="pl-c"> *
																							 * <span
																							 * class="pl-k">@param</span>
																							 * {Function=}
																							 * callback
																							 * 加载完成的回调函数</span></td>
																							 * </tr>
																							 * <tr>
																							 * <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
																							 * <td id="LC104" class="blob-code blob-code-inner js-file-line"><span
																							 * class="pl-c"> *
																							 * <span
																							 * class="pl-k">@return</span>
																							 * {*}
																							 * requireId为string时返回模块暴露对象</span></td>
																							 * </tr>
																							 * <tr>
																							 * <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
																							 * <td id="LC105" class="blob-code blob-code-inner js-file-line"><span
																							 * class="pl-c">
																							 */</span></td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">globalRequire</span>(<span class="pl-smi">requireId</span>, <span class="pl-smi">callback</span>) {</td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// #begin-ignore</span></td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// #begin
																									// assertNotContainRelativeId</span></td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// 确定require的模块id不包含相对id。用于global
																									// require，提前预防难以跟踪的错误出现</span></td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> invalidIds <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">/**
																									 * </span></td>
																									 * </tr>
																									 * <tr>
																									 * <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
																									 * <td id="LC113" class="blob-code blob-code-inner js-file-line"><span
																									 * class="pl-c"> *
																									 * 监测模块id是否relative
																									 * id</span></td>
																									 * </tr>
																									 * <tr>
																									 * <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
																									 * <td id="LC114" class="blob-code blob-code-inner js-file-line"><span
																									 * class="pl-c"> *</span></td>
																									 * </tr>
																									 * <tr>
																									 * <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
																									 * <td id="LC115" class="blob-code blob-code-inner js-file-line"><span
																									 * class="pl-c"> *
																									 * <span
																									 * class="pl-k">@inner</span></span></td>
																									 * </tr>
																									 * <tr>
																									 * <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
																									 * <td id="LC116" class="blob-code blob-code-inner js-file-line"><span
																									 * class="pl-c"> *
																									 * <span
																									 * class="pl-k">@param</span>
																									 * <span
																									 * class="pl-en">{string}</span>
																									 * <span
																									 * class="pl-smi">id</span>
																									 * 模块id</span></td>
																									 * </tr>
																									 * <tr>
																									 * <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
																									 * <td id="LC117" class="blob-code blob-code-inner js-file-line"><span
																									 * class="pl-c">
																									 */</span></td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">function</span> <span class="pl-en">monitor</span>(<span class="pl-smi">id</span>) {</td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-smi">id</span>.<span class="pl-c1">indexOf</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.<span class="pl-pds">&#39;</span></span>) <span class="pl-k">===</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">invalidIds</span>.<span class="pl-c1">push</span>(id);</td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-k">typeof</span> requireId <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>string<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">monitor</span>(requireId);</td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">each</span>(</td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code blob-code-inner js-file-line">                requireId,</td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">function</span> (<span class="pl-smi">id</span>) {</td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code blob-code-inner js-file-line">                    <span class="pl-en">monitor</span>(id);</td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code blob-code-inner js-file-line">            );</td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// 包含相对id时，直接抛出错误</span></td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-smi">invalidIds</span>.<span class="pl-c1">length</span> <span class="pl-k">&gt;</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">Error</span>(</td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>[REQUIRE_FATAL]Relative ID is not allowed in global require: <span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">+</span> <span class="pl-smi">invalidIds</span>.<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>, <span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code blob-code-inner js-file-line">            );</td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// #end
																									// assertNotContainRelativeId</span></td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// 超时提醒</span></td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> timeout <span class="pl-k">=</span> <span class="pl-smi">requireConf</span>.<span class="pl-smi">waitSeconds</span>;</td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (timeout <span class="pl-k">&amp;&amp;</span> (requireId <span class="pl-k">instanceof</span> <span class="pl-c1">Array</span>)) {</td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (waitTimeout) {</td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">clearTimeout</span>(waitTimeout);</td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code blob-code-inner js-file-line">            waitTimeout <span class="pl-k">=</span> <span class="pl-c1">setTimeout</span>(waitTimeoutNotice, timeout <span class="pl-k">*</span> <span class="pl-c1">1000</span>);</td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// #end-ignore</span></td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-en">actualGlobalRequire</span>(requireId, callback);</td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">/**
																								 * </span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
																								 * <td id="LC159" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * 版本号</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
																								 * <td id="LC160" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
																								 * <td id="LC161" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@type</span>
																								 * {string}</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
																								 * <td id="LC162" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c">
																								 */</span></td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">globalRequire</span>.<span class="pl-c1">version</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>1.8.8<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">/**
																								 * </span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
																								 * <td id="LC166" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * loader名称</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
																								 * <td id="LC167" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
																								 * <td id="LC168" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@type</span>
																								 * {string}</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
																								 * <td id="LC169" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c">
																								 */</span></td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">globalRequire</span>.<span class="pl-smi">loader</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>esl<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">/**
																								 * </span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
																								 * <td id="LC173" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * 将模块标识转换成相对的url</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
																								 * <td id="LC174" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
																								 * <td id="LC175" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@param</span>
																								 * <span
																								 * class="pl-en">{string}</span>
																								 * <span
																								 * class="pl-smi">id</span>
																								 * 模块标识</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
																								 * <td id="LC176" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@return</span>
																								 * {string}</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
																								 * <td id="LC177" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c">
																								 */</span></td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">globalRequire</span>.<span class="pl-smi">toUrl</span> <span class="pl-k">=</span> <span class="pl-smi">actualGlobalRequire</span>.<span class="pl-smi">toUrl</span>;</td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">// #begin-ignore</span></td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">/**
																								 * </span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
																								 * <td id="LC182" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * 超时提醒函数</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
																								 * <td id="LC183" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
																								 * <td id="LC184" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@inner</span></span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
																								 * <td id="LC185" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c">
																								 */</span></td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">waitTimeoutNotice</span>() {</td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> hangModules <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> missModules <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> hangModulesMap <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> missModulesMap <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> visited <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">/**
																									 * </span></td>
																									 * </tr>
																									 * <tr>
																									 * <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
																									 * <td id="LC194" class="blob-code blob-code-inner js-file-line"><span
																									 * class="pl-c"> *
																									 * 检查模块的加载错误</span></td>
																									 * </tr>
																									 * <tr>
																									 * <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
																									 * <td id="LC195" class="blob-code blob-code-inner js-file-line"><span
																									 * class="pl-c"> *</span></td>
																									 * </tr>
																									 * <tr>
																									 * <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
																									 * <td id="LC196" class="blob-code blob-code-inner js-file-line"><span
																									 * class="pl-c"> *
																									 * <span
																									 * class="pl-k">@inner</span></span></td>
																									 * </tr>
																									 * <tr>
																									 * <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
																									 * <td id="LC197" class="blob-code blob-code-inner js-file-line"><span
																									 * class="pl-c"> *
																									 * <span
																									 * class="pl-k">@param</span>
																									 * <span
																									 * class="pl-en">{string}</span>
																									 * <span
																									 * class="pl-smi">id</span>
																									 * 模块id</span></td>
																									 * </tr>
																									 * <tr>
																									 * <td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
																									 * <td id="LC198" class="blob-code blob-code-inner js-file-line"><span
																									 * class="pl-c"> *
																									 * <span
																									 * class="pl-k">@param</span>
																									 * <span
																									 * class="pl-en">{boolean}</span>
																									 * <span
																									 * class="pl-smi">hard</span>
																									 * 是否装载时依赖</span></td>
																									 * </tr>
																									 * <tr>
																									 * <td id="L199" class="blob-num js-line-number" data-line-number="199"></td>
																									 * <td id="LC199" class="blob-code blob-code-inner js-file-line"><span
																									 * class="pl-c">
																									 */</span></td>
      </tr>
      <tr>
        <td id="L200" class="blob-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">function</span> <span class="pl-en">checkError</span>(<span class="pl-smi">id</span>, <span class="pl-smi">hard</span>) {</td>
      </tr>
      <tr>
        <td id="L201" class="blob-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (visited[id] <span class="pl-k">||</span> <span class="pl-en">modIs</span>(id, <span class="pl-c1">MODULE_DEFINED</span>)) {</td>
      </tr>
      <tr>
        <td id="L202" class="blob-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L203" class="blob-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L204" class="blob-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L205" class="blob-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-code blob-code-inner js-file-line">            visited[id] <span class="pl-k">=</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L206" class="blob-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L207" class="blob-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-en">modIs</span>(id, <span class="pl-c1">MODULE_PREPARED</span>)) {</td>
      </tr>
      <tr>
        <td id="L208" class="blob-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-code blob-code-inner js-file-line">                <span class="pl-c">// HACK:
																											// 为gzip后体积优化，不做抽取</span></td>
      </tr>
      <tr>
        <td id="L209" class="blob-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> (<span class="pl-k">!</span>hangModulesMap[id]) {</td>
      </tr>
      <tr>
        <td id="L210" class="blob-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-code blob-code-inner js-file-line">                    hangModulesMap[id] <span class="pl-k">=</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L211" class="blob-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-code blob-code-inner js-file-line">                    <span class="pl-smi">hangModules</span>.<span class="pl-c1">push</span>(id);</td>
      </tr>
      <tr>
        <td id="L212" class="blob-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L213" class="blob-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L214" class="blob-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L215" class="blob-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> mod <span class="pl-k">=</span> modModules[id];</td>
      </tr>
      <tr>
        <td id="L216" class="blob-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-k">!</span>mod) {</td>
      </tr>
      <tr>
        <td id="L217" class="blob-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> (<span class="pl-k">!</span>missModulesMap[id]) {</td>
      </tr>
      <tr>
        <td id="L218" class="blob-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-code blob-code-inner js-file-line">                    missModulesMap[id] <span class="pl-k">=</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L219" class="blob-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-code blob-code-inner js-file-line">                    <span class="pl-smi">missModules</span>.<span class="pl-c1">push</span>(id);</td>
      </tr>
      <tr>
        <td id="L220" class="blob-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L221" class="blob-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L222" class="blob-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">else</span> <span class="pl-k">if</span> (hard) {</td>
      </tr>
      <tr>
        <td id="L223" class="blob-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> (<span class="pl-k">!</span>hangModulesMap[id]) {</td>
      </tr>
      <tr>
        <td id="L224" class="blob-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-code blob-code-inner js-file-line">                    hangModulesMap[id] <span class="pl-k">=</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L225" class="blob-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-code blob-code-inner js-file-line">                    <span class="pl-smi">hangModules</span>.<span class="pl-c1">push</span>(id);</td>
      </tr>
      <tr>
        <td id="L226" class="blob-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L227" class="blob-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L228" class="blob-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-code blob-code-inner js-file-line">                <span class="pl-en">each</span>(</td>
      </tr>
      <tr>
        <td id="L229" class="blob-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-code blob-code-inner js-file-line">                    <span class="pl-smi">mod</span>.<span class="pl-smi">depMs</span>,</td>
      </tr>
      <tr>
        <td id="L230" class="blob-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">function</span> (<span class="pl-smi">dep</span>) {</td>
      </tr>
      <tr>
        <td id="L231" class="blob-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-code blob-code-inner js-file-line">                        <span class="pl-en">checkError</span>(<span class="pl-smi">dep</span>.<span class="pl-smi">absId</span>, <span class="pl-smi">dep</span>.<span class="pl-smi">hard</span>);</td>
      </tr>
      <tr>
        <td id="L232" class="blob-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-code blob-code-inner js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L233" class="blob-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-code blob-code-inner js-file-line">                );</td>
      </tr>
      <tr>
        <td id="L234" class="blob-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L235" class="blob-num js-line-number" data-line-number="235"></td>
        <td id="LC235" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L236" class="blob-num js-line-number" data-line-number="236"></td>
        <td id="LC236" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L237" class="blob-num js-line-number" data-line-number="237"></td>
        <td id="LC237" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">/*
																									 * eslint-disable
																									 * guard-for-in
																									 */</span></td>
      </tr>
      <tr>
        <td id="L238" class="blob-num js-line-number" data-line-number="238"></td>
        <td id="LC238" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">for</span> (<span class="pl-k">var</span> id <span class="pl-k">in</span> autoDefineModules) {</td>
      </tr>
      <tr>
        <td id="L239" class="blob-num js-line-number" data-line-number="239"></td>
        <td id="LC239" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">checkError</span>(id, <span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L240" class="blob-num js-line-number" data-line-number="240"></td>
        <td id="LC240" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L241" class="blob-num js-line-number" data-line-number="241"></td>
        <td id="LC241" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">/*
																									 * eslint-enable
																									 * guard-for-in
																									 */</span></td>
      </tr>
      <tr>
        <td id="L242" class="blob-num js-line-number" data-line-number="242"></td>
        <td id="LC242" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L243" class="blob-num js-line-number" data-line-number="243"></td>
        <td id="LC243" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-smi">hangModules</span>.<span class="pl-c1">length</span> <span class="pl-k">||</span> <span class="pl-smi">missModules</span>.<span class="pl-c1">length</span>) {</td>
      </tr>
      <tr>
        <td id="L244" class="blob-num js-line-number" data-line-number="244"></td>
        <td id="LC244" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">Error</span>(</td>
      </tr>
      <tr>
        <td id="L245" class="blob-num js-line-number" data-line-number="245"></td>
        <td id="LC245" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>[MODULE_TIMEOUT]Hang( <span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L246" class="blob-num js-line-number" data-line-number="246"></td>
        <td id="LC246" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">+</span> (<span class="pl-smi">hangModules</span>.<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>, <span class="pl-pds">&#39;</span></span>) <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&#39;</span>none<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L247" class="blob-num js-line-number" data-line-number="247"></td>
        <td id="LC247" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span> ) Miss( <span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L248" class="blob-num js-line-number" data-line-number="248"></td>
        <td id="LC248" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">+</span> (<span class="pl-smi">missModules</span>.<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>, <span class="pl-pds">&#39;</span></span>) <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&#39;</span>none<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L249" class="blob-num js-line-number" data-line-number="249"></td>
        <td id="LC249" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span> )<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L250" class="blob-num js-line-number" data-line-number="250"></td>
        <td id="LC250" class="blob-code blob-code-inner js-file-line">            );</td>
      </tr>
      <tr>
        <td id="L251" class="blob-num js-line-number" data-line-number="251"></td>
        <td id="LC251" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L252" class="blob-num js-line-number" data-line-number="252"></td>
        <td id="LC252" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L253" class="blob-num js-line-number" data-line-number="253"></td>
        <td id="LC253" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">// #end-ignore</span></td>
      </tr>
      <tr>
        <td id="L254" class="blob-num js-line-number" data-line-number="254"></td>
        <td id="LC254" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L255" class="blob-num js-line-number" data-line-number="255"></td>
        <td id="LC255" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">/**
																								 * </span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L256" class="blob-num js-line-number" data-line-number="256"></td>
																								 * <td id="LC256" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * 未预定义的模块集合</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L257" class="blob-num js-line-number" data-line-number="257"></td>
																								 * <td id="LC257" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * 主要存储匿名方式define的模块</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L258" class="blob-num js-line-number" data-line-number="258"></td>
																								 * <td id="LC258" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L259" class="blob-num js-line-number" data-line-number="259"></td>
																								 * <td id="LC259" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@inner</span></span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L260" class="blob-num js-line-number" data-line-number="260"></td>
																								 * <td id="LC260" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@type</span>
																								 * {Array}</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L261" class="blob-num js-line-number" data-line-number="261"></td>
																								 * <td id="LC261" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c">
																								 */</span></td>
      </tr>
      <tr>
        <td id="L262" class="blob-num js-line-number" data-line-number="262"></td>
        <td id="LC262" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> wait4PreDefine <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L263" class="blob-num js-line-number" data-line-number="263"></td>
        <td id="LC263" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L264" class="blob-num js-line-number" data-line-number="264"></td>
        <td id="LC264" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">/**
																								 * </span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L265" class="blob-num js-line-number" data-line-number="265"></td>
																								 * <td id="LC265" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * 完成模块预定义，此时处理的模块是匿名define的模块</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L266" class="blob-num js-line-number" data-line-number="266"></td>
																								 * <td id="LC266" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L267" class="blob-num js-line-number" data-line-number="267"></td>
																								 * <td id="LC267" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@inner</span></span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L268" class="blob-num js-line-number" data-line-number="268"></td>
																								 * <td id="LC268" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@param</span>
																								 * <span
																								 * class="pl-en">{string}</span>
																								 * <span
																								 * class="pl-smi">currentId</span>
																								 * 匿名define的模块的id</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L269" class="blob-num js-line-number" data-line-number="269"></td>
																								 * <td id="LC269" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c">
																								 */</span></td>
      </tr>
      <tr>
        <td id="L270" class="blob-num js-line-number" data-line-number="270"></td>
        <td id="LC270" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">completePreDefine</span>(<span class="pl-smi">currentId</span>) {</td>
      </tr>
      <tr>
        <td id="L271" class="blob-num js-line-number" data-line-number="271"></td>
        <td id="LC271" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// HACK:
																									// 这里在IE下有个性能陷阱，不能使用任何变量。</span></td>
      </tr>
      <tr>
        <td id="L272" class="blob-num js-line-number" data-line-number="272"></td>
        <td id="LC272" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// 否则貌似会形成变量引用和修改的读写锁，导致wait4PreDefine释放困难</span></td>
      </tr>
      <tr>
        <td id="L273" class="blob-num js-line-number" data-line-number="273"></td>
        <td id="LC273" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">each</span>(wait4PreDefine, <span class="pl-k">function</span> (<span class="pl-smi">mod</span>) {</td>
      </tr>
      <tr>
        <td id="L274" class="blob-num js-line-number" data-line-number="274"></td>
        <td id="LC274" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">modPreDefine</span>(</td>
      </tr>
      <tr>
        <td id="L275" class="blob-num js-line-number" data-line-number="275"></td>
        <td id="LC275" class="blob-code blob-code-inner js-file-line">                currentId,</td>
      </tr>
      <tr>
        <td id="L276" class="blob-num js-line-number" data-line-number="276"></td>
        <td id="LC276" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">mod</span>.<span class="pl-smi">deps</span>,</td>
      </tr>
      <tr>
        <td id="L277" class="blob-num js-line-number" data-line-number="277"></td>
        <td id="LC277" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">mod</span>.<span class="pl-smi">factory</span></td>
      </tr>
      <tr>
        <td id="L278" class="blob-num js-line-number" data-line-number="278"></td>
        <td id="LC278" class="blob-code blob-code-inner js-file-line">            );</td>
      </tr>
      <tr>
        <td id="L279" class="blob-num js-line-number" data-line-number="279"></td>
        <td id="LC279" class="blob-code blob-code-inner js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L280" class="blob-num js-line-number" data-line-number="280"></td>
        <td id="LC280" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L281" class="blob-num js-line-number" data-line-number="281"></td>
        <td id="LC281" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">wait4PreDefine</span>.<span class="pl-c1">length</span> <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L282" class="blob-num js-line-number" data-line-number="282"></td>
        <td id="LC282" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">modAnalyse</span>(currentId);</td>
      </tr>
      <tr>
        <td id="L283" class="blob-num js-line-number" data-line-number="283"></td>
        <td id="LC283" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L284" class="blob-num js-line-number" data-line-number="284"></td>
        <td id="LC284" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L285" class="blob-num js-line-number" data-line-number="285"></td>
        <td id="LC285" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">/**
																								 * </span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L286" class="blob-num js-line-number" data-line-number="286"></td>
																								 * <td id="LC286" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * 定义模块</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L287" class="blob-num js-line-number" data-line-number="287"></td>
																								 * <td id="LC287" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L288" class="blob-num js-line-number" data-line-number="288"></td>
																								 * <td id="LC288" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@param</span>
																								 * {string=}
																								 * id
																								 * 模块标识</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L289" class="blob-num js-line-number" data-line-number="289"></td>
																								 * <td id="LC289" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@param</span>
																								 * {Array=}
																								 * dependencies
																								 * 依赖模块列表</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L290" class="blob-num js-line-number" data-line-number="290"></td>
																								 * <td id="LC290" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@param</span>
																								 * {Function=}
																								 * factory
																								 * 创建模块的工厂方法</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L291" class="blob-num js-line-number" data-line-number="291"></td>
																								 * <td id="LC291" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c">
																								 */</span></td>
      </tr>
      <tr>
        <td id="L292" class="blob-num js-line-number" data-line-number="292"></td>
        <td id="LC292" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">globalDefine</span>(<span class="pl-smi">id</span>, <span class="pl-smi">dependencies</span>, <span class="pl-smi">factory</span>) {</td>
      </tr>
      <tr>
        <td id="L293" class="blob-num js-line-number" data-line-number="293"></td>
        <td id="LC293" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// define(factory)</span></td>
      </tr>
      <tr>
        <td id="L294" class="blob-num js-line-number" data-line-number="294"></td>
        <td id="LC294" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// define(dependencies,
																									// factory)</span></td>
      </tr>
      <tr>
        <td id="L295" class="blob-num js-line-number" data-line-number="295"></td>
        <td id="LC295" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// define(id,
																									// factory)</span></td>
      </tr>
      <tr>
        <td id="L296" class="blob-num js-line-number" data-line-number="296"></td>
        <td id="LC296" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// define(id,
																									// dependencies,
																									// factory)</span></td>
      </tr>
      <tr>
        <td id="L297" class="blob-num js-line-number" data-line-number="297"></td>
        <td id="LC297" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (factory <span class="pl-k">==</span> <span class="pl-c1">null</span>) {</td>
      </tr>
      <tr>
        <td id="L298" class="blob-num js-line-number" data-line-number="298"></td>
        <td id="LC298" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (dependencies <span class="pl-k">==</span> <span class="pl-c1">null</span>) {</td>
      </tr>
      <tr>
        <td id="L299" class="blob-num js-line-number" data-line-number="299"></td>
        <td id="LC299" class="blob-code blob-code-inner js-file-line">                factory <span class="pl-k">=</span> id;</td>
      </tr>
      <tr>
        <td id="L300" class="blob-num js-line-number" data-line-number="300"></td>
        <td id="LC300" class="blob-code blob-code-inner js-file-line">                id <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L301" class="blob-num js-line-number" data-line-number="301"></td>
        <td id="LC301" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L302" class="blob-num js-line-number" data-line-number="302"></td>
        <td id="LC302" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L303" class="blob-num js-line-number" data-line-number="303"></td>
        <td id="LC303" class="blob-code blob-code-inner js-file-line">                factory <span class="pl-k">=</span> dependencies;</td>
      </tr>
      <tr>
        <td id="L304" class="blob-num js-line-number" data-line-number="304"></td>
        <td id="LC304" class="blob-code blob-code-inner js-file-line">                dependencies <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L305" class="blob-num js-line-number" data-line-number="305"></td>
        <td id="LC305" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> (id <span class="pl-k">instanceof</span> <span class="pl-c1">Array</span>) {</td>
      </tr>
      <tr>
        <td id="L306" class="blob-num js-line-number" data-line-number="306"></td>
        <td id="LC306" class="blob-code blob-code-inner js-file-line">                    dependencies <span class="pl-k">=</span> id;</td>
      </tr>
      <tr>
        <td id="L307" class="blob-num js-line-number" data-line-number="307"></td>
        <td id="LC307" class="blob-code blob-code-inner js-file-line">                    id <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L308" class="blob-num js-line-number" data-line-number="308"></td>
        <td id="LC308" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L309" class="blob-num js-line-number" data-line-number="309"></td>
        <td id="LC309" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L310" class="blob-num js-line-number" data-line-number="310"></td>
        <td id="LC310" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L311" class="blob-num js-line-number" data-line-number="311"></td>
        <td id="LC311" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L312" class="blob-num js-line-number" data-line-number="312"></td>
        <td id="LC312" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (factory <span class="pl-k">==</span> <span class="pl-c1">null</span>) {</td>
      </tr>
      <tr>
        <td id="L313" class="blob-num js-line-number" data-line-number="313"></td>
        <td id="LC313" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L314" class="blob-num js-line-number" data-line-number="314"></td>
        <td id="LC314" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L315" class="blob-num js-line-number" data-line-number="315"></td>
        <td id="LC315" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L316" class="blob-num js-line-number" data-line-number="316"></td>
        <td id="LC316" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> opera <span class="pl-k">=</span> <span class="pl-c1">window</span>.<span class="pl-smi">opera</span>;</td>
      </tr>
      <tr>
        <td id="L317" class="blob-num js-line-number" data-line-number="317"></td>
        <td id="LC317" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L318" class="blob-num js-line-number" data-line-number="318"></td>
        <td id="LC318" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// IE下通过current
																									// script的data-require-id获取当前id</span></td>
      </tr>
      <tr>
        <td id="L319" class="blob-num js-line-number" data-line-number="319"></td>
        <td id="LC319" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (</td>
      </tr>
      <tr>
        <td id="L320" class="blob-num js-line-number" data-line-number="320"></td>
        <td id="LC320" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">!</span>id</td>
      </tr>
      <tr>
        <td id="L321" class="blob-num js-line-number" data-line-number="321"></td>
        <td id="LC321" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">document</span>.<span class="pl-smi">attachEvent</span></td>
      </tr>
      <tr>
        <td id="L322" class="blob-num js-line-number" data-line-number="322"></td>
        <td id="LC322" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">&amp;&amp;</span> (<span class="pl-k">!</span>(opera <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">opera</span>.<span class="pl-c1">toString</span>() <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>[object Opera]<span class="pl-pds">&#39;</span></span>))</td>
      </tr>
      <tr>
        <td id="L323" class="blob-num js-line-number" data-line-number="323"></td>
        <td id="LC323" class="blob-code blob-code-inner js-file-line">        ) {</td>
      </tr>
      <tr>
        <td id="L324" class="blob-num js-line-number" data-line-number="324"></td>
        <td id="LC324" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> currentScript <span class="pl-k">=</span> <span class="pl-en">getCurrentScript</span>();</td>
      </tr>
      <tr>
        <td id="L325" class="blob-num js-line-number" data-line-number="325"></td>
        <td id="LC325" class="blob-code blob-code-inner js-file-line">            id <span class="pl-k">=</span> currentScript <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">currentScript</span>.<span class="pl-c1">getAttribute</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>data-require-id<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L326" class="blob-num js-line-number" data-line-number="326"></td>
        <td id="LC326" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L327" class="blob-num js-line-number" data-line-number="327"></td>
        <td id="LC327" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L328" class="blob-num js-line-number" data-line-number="328"></td>
        <td id="LC328" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (id) {</td>
      </tr>
      <tr>
        <td id="L329" class="blob-num js-line-number" data-line-number="329"></td>
        <td id="LC329" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">modPreDefine</span>(id, dependencies, factory);</td>
      </tr>
      <tr>
        <td id="L330" class="blob-num js-line-number" data-line-number="330"></td>
        <td id="LC330" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L331" class="blob-num js-line-number" data-line-number="331"></td>
        <td id="LC331" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L332" class="blob-num js-line-number" data-line-number="332"></td>
        <td id="LC332" class="blob-code blob-code-inner js-file-line">            <span class="pl-c">// 纪录到共享变量中，在load或readystatechange中处理</span></td>
      </tr>
      <tr>
        <td id="L333" class="blob-num js-line-number" data-line-number="333"></td>
        <td id="LC333" class="blob-code blob-code-inner js-file-line">            <span class="pl-c">// 标准浏览器下，使用匿名define时，将进入这个分支</span></td>
      </tr>
      <tr>
        <td id="L334" class="blob-num js-line-number" data-line-number="334"></td>
        <td id="LC334" class="blob-code blob-code-inner js-file-line">            wait4PreDefine[<span class="pl-c1">0</span>] <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L335" class="blob-num js-line-number" data-line-number="335"></td>
        <td id="LC335" class="blob-code blob-code-inner js-file-line">                deps<span class="pl-k">:</span> dependencies,</td>
      </tr>
      <tr>
        <td id="L336" class="blob-num js-line-number" data-line-number="336"></td>
        <td id="LC336" class="blob-code blob-code-inner js-file-line">                factory<span class="pl-k">:</span> factory</td>
      </tr>
      <tr>
        <td id="L337" class="blob-num js-line-number" data-line-number="337"></td>
        <td id="LC337" class="blob-code blob-code-inner js-file-line">            };</td>
      </tr>
      <tr>
        <td id="L338" class="blob-num js-line-number" data-line-number="338"></td>
        <td id="LC338" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L339" class="blob-num js-line-number" data-line-number="339"></td>
        <td id="LC339" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L340" class="blob-num js-line-number" data-line-number="340"></td>
        <td id="LC340" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L341" class="blob-num js-line-number" data-line-number="341"></td>
        <td id="LC341" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">globalDefine</span>.<span class="pl-smi">amd</span> <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L342" class="blob-num js-line-number" data-line-number="342"></td>
        <td id="LC342" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L343" class="blob-num js-line-number" data-line-number="343"></td>
        <td id="LC343" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">/**
																								 * </span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L344" class="blob-num js-line-number" data-line-number="344"></td>
																								 * <td id="LC344" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * 模块配置获取函数</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L345" class="blob-num js-line-number" data-line-number="345"></td>
																								 * <td id="LC345" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L346" class="blob-num js-line-number" data-line-number="346"></td>
																								 * <td id="LC346" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@inner</span></span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L347" class="blob-num js-line-number" data-line-number="347"></td>
																								 * <td id="LC347" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@return</span>
																								 * {Object}
																								 * 模块配置对象</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L348" class="blob-num js-line-number" data-line-number="348"></td>
																								 * <td id="LC348" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c">
																								 */</span></td>
      </tr>
      <tr>
        <td id="L349" class="blob-num js-line-number" data-line-number="349"></td>
        <td id="LC349" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">moduleConfigGetter</span>() {</td>
      </tr>
      <tr>
        <td id="L350" class="blob-num js-line-number" data-line-number="350"></td>
        <td id="LC350" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> conf <span class="pl-k">=</span> <span class="pl-smi">requireConf</span>.<span class="pl-smi">config</span>[<span class="pl-v">this</span>.<span class="pl-c1">id</span>];</td>
      </tr>
      <tr>
        <td id="L351" class="blob-num js-line-number" data-line-number="351"></td>
        <td id="LC351" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (conf <span class="pl-k">&amp;&amp;</span> <span class="pl-k">typeof</span> conf <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>object<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L352" class="blob-num js-line-number" data-line-number="352"></td>
        <td id="LC352" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> conf;</td>
      </tr>
      <tr>
        <td id="L353" class="blob-num js-line-number" data-line-number="353"></td>
        <td id="LC353" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L354" class="blob-num js-line-number" data-line-number="354"></td>
        <td id="LC354" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L355" class="blob-num js-line-number" data-line-number="355"></td>
        <td id="LC355" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> {};</td>
      </tr>
      <tr>
        <td id="L356" class="blob-num js-line-number" data-line-number="356"></td>
        <td id="LC356" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L357" class="blob-num js-line-number" data-line-number="357"></td>
        <td id="LC357" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L358" class="blob-num js-line-number" data-line-number="358"></td>
        <td id="LC358" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">/**
																								 * </span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L359" class="blob-num js-line-number" data-line-number="359"></td>
																								 * <td id="LC359" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * 预定义模块</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L360" class="blob-num js-line-number" data-line-number="360"></td>
																								 * <td id="LC360" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L361" class="blob-num js-line-number" data-line-number="361"></td>
																								 * <td id="LC361" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@inner</span></span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L362" class="blob-num js-line-number" data-line-number="362"></td>
																								 * <td id="LC362" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@param</span>
																								 * <span
																								 * class="pl-en">{string}</span>
																								 * <span
																								 * class="pl-smi">id</span>
																								 * 模块标识</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L363" class="blob-num js-line-number" data-line-number="363"></td>
																								 * <td id="LC363" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@param</span>
																								 * {Array.&lt;string&gt;}
																								 * dependencies
																								 * 显式声明的依赖模块列表</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L364" class="blob-num js-line-number" data-line-number="364"></td>
																								 * <td id="LC364" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@param</span>
																								 * {*}
																								 * factory
																								 * 模块定义函数或模块对象</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L365" class="blob-num js-line-number" data-line-number="365"></td>
																								 * <td id="LC365" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c">
																								 */</span></td>
      </tr>
      <tr>
        <td id="L366" class="blob-num js-line-number" data-line-number="366"></td>
        <td id="LC366" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">modPreDefine</span>(<span class="pl-smi">id</span>, <span class="pl-smi">dependencies</span>, <span class="pl-smi">factory</span>) {</td>
      </tr>
      <tr>
        <td id="L367" class="blob-num js-line-number" data-line-number="367"></td>
        <td id="LC367" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// 将模块存入容器</span></td>
      </tr>
      <tr>
        <td id="L368" class="blob-num js-line-number" data-line-number="368"></td>
        <td id="LC368" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// </span></td>
      </tr>
      <tr>
        <td id="L369" class="blob-num js-line-number" data-line-number="369"></td>
        <td id="LC369" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// 模块内部信息包括</span></td>
      </tr>
      <tr>
        <td id="L370" class="blob-num js-line-number" data-line-number="370"></td>
        <td id="LC370" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// -----------------------------------</span></td>
      </tr>
      <tr>
        <td id="L371" class="blob-num js-line-number" data-line-number="371"></td>
        <td id="LC371" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// id:
																									// module
																									// id</span></td>
      </tr>
      <tr>
        <td id="L372" class="blob-num js-line-number" data-line-number="372"></td>
        <td id="LC372" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// depsDec:
																									// 模块定义时声明的依赖</span></td>
      </tr>
      <tr>
        <td id="L373" class="blob-num js-line-number" data-line-number="373"></td>
        <td id="LC373" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// deps:
																									// 模块依赖，默认为[&#39;require&#39;,
																									// &#39;exports&#39;,
																									// &#39;module&#39;]</span></td>
      </tr>
      <tr>
        <td id="L374" class="blob-num js-line-number" data-line-number="374"></td>
        <td id="LC374" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// factory:
																									// 初始化函数或对象</span></td>
      </tr>
      <tr>
        <td id="L375" class="blob-num js-line-number" data-line-number="375"></td>
        <td id="LC375" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// factoryDeps:
																									// 初始化函数的参数依赖</span></td>
      </tr>
      <tr>
        <td id="L376" class="blob-num js-line-number" data-line-number="376"></td>
        <td id="LC376" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// exports:
																									// 模块的实际暴露对象（AMD定义）</span></td>
      </tr>
      <tr>
        <td id="L377" class="blob-num js-line-number" data-line-number="377"></td>
        <td id="LC377" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// config:
																									// 用于获取模块配置信息的函数（AMD定义）</span></td>
      </tr>
      <tr>
        <td id="L378" class="blob-num js-line-number" data-line-number="378"></td>
        <td id="LC378" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// state:
																									// 模块当前状态</span></td>
      </tr>
      <tr>
        <td id="L379" class="blob-num js-line-number" data-line-number="379"></td>
        <td id="LC379" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// require:
																									// local
																									// require函数</span></td>
      </tr>
      <tr>
        <td id="L380" class="blob-num js-line-number" data-line-number="380"></td>
        <td id="LC380" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// depMs:
																									// 实际依赖的模块集合，数组形式</span></td>
      </tr>
      <tr>
        <td id="L381" class="blob-num js-line-number" data-line-number="381"></td>
        <td id="LC381" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// depMkv:
																									// 实际依赖的模块集合，表形式，便于查找</span></td>
      </tr>
      <tr>
        <td id="L382" class="blob-num js-line-number" data-line-number="382"></td>
        <td id="LC382" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// depRs:
																									// 实际依赖的资源集合</span></td>
      </tr>
      <tr>
        <td id="L383" class="blob-num js-line-number" data-line-number="383"></td>
        <td id="LC383" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// depPMs:
																									// 用于加载资源的模块集合，key是模块名，value是1，仅用于快捷查找</span></td>
      </tr>
      <tr>
        <td id="L384" class="blob-num js-line-number" data-line-number="384"></td>
        <td id="LC384" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// ------------------------------------</span></td>
      </tr>
      <tr>
        <td id="L385" class="blob-num js-line-number" data-line-number="385"></td>
        <td id="LC385" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-k">!</span>modModules[id]) {</td>
      </tr>
      <tr>
        <td id="L386" class="blob-num js-line-number" data-line-number="386"></td>
        <td id="LC386" class="blob-code blob-code-inner js-file-line">            <span class="pl-c">/*
																										 * eslint-disable
																										 * key-spacing
																										 */</span></td>
      </tr>
      <tr>
        <td id="L387" class="blob-num js-line-number" data-line-number="387"></td>
        <td id="LC387" class="blob-code blob-code-inner js-file-line">            modModules[id] <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L388" class="blob-num js-line-number" data-line-number="388"></td>
        <td id="LC388" class="blob-code blob-code-inner js-file-line">                id          <span class="pl-k">:</span> id,</td>
      </tr>
      <tr>
        <td id="L389" class="blob-num js-line-number" data-line-number="389"></td>
        <td id="LC389" class="blob-code blob-code-inner js-file-line">                depsDec     <span class="pl-k">:</span> dependencies,</td>
      </tr>
      <tr>
        <td id="L390" class="blob-num js-line-number" data-line-number="390"></td>
        <td id="LC390" class="blob-code blob-code-inner js-file-line">                deps        <span class="pl-k">:</span> dependencies <span class="pl-k">||</span> [<span class="pl-s"><span class="pl-pds">&#39;</span>require<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>exports<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>module<span class="pl-pds">&#39;</span></span>],</td>
      </tr>
      <tr>
        <td id="L391" class="blob-num js-line-number" data-line-number="391"></td>
        <td id="LC391" class="blob-code blob-code-inner js-file-line">                factoryDeps <span class="pl-k">:</span> [],</td>
      </tr>
      <tr>
        <td id="L392" class="blob-num js-line-number" data-line-number="392"></td>
        <td id="LC392" class="blob-code blob-code-inner js-file-line">                factory     <span class="pl-k">:</span> factory,</td>
      </tr>
      <tr>
        <td id="L393" class="blob-num js-line-number" data-line-number="393"></td>
        <td id="LC393" class="blob-code blob-code-inner js-file-line">                exports     <span class="pl-k">:</span> {},</td>
      </tr>
      <tr>
        <td id="L394" class="blob-num js-line-number" data-line-number="394"></td>
        <td id="LC394" class="blob-code blob-code-inner js-file-line">                config      <span class="pl-k">:</span> moduleConfigGetter,</td>
      </tr>
      <tr>
        <td id="L395" class="blob-num js-line-number" data-line-number="395"></td>
        <td id="LC395" class="blob-code blob-code-inner js-file-line">                state       <span class="pl-k">:</span> <span class="pl-c1">MODULE_PRE_DEFINED</span>,</td>
      </tr>
      <tr>
        <td id="L396" class="blob-num js-line-number" data-line-number="396"></td>
        <td id="LC396" class="blob-code blob-code-inner js-file-line">                require     <span class="pl-k">:</span> <span class="pl-en">createLocalRequire</span>(id),</td>
      </tr>
      <tr>
        <td id="L397" class="blob-num js-line-number" data-line-number="397"></td>
        <td id="LC397" class="blob-code blob-code-inner js-file-line">                depMs       <span class="pl-k">:</span> [],</td>
      </tr>
      <tr>
        <td id="L398" class="blob-num js-line-number" data-line-number="398"></td>
        <td id="LC398" class="blob-code blob-code-inner js-file-line">                depMkv      <span class="pl-k">:</span> {},</td>
      </tr>
      <tr>
        <td id="L399" class="blob-num js-line-number" data-line-number="399"></td>
        <td id="LC399" class="blob-code blob-code-inner js-file-line">                depRs       <span class="pl-k">:</span> [],</td>
      </tr>
      <tr>
        <td id="L400" class="blob-num js-line-number" data-line-number="400"></td>
        <td id="LC400" class="blob-code blob-code-inner js-file-line">                depPMs      <span class="pl-k">:</span> []</td>
      </tr>
      <tr>
        <td id="L401" class="blob-num js-line-number" data-line-number="401"></td>
        <td id="LC401" class="blob-code blob-code-inner js-file-line">            };</td>
      </tr>
      <tr>
        <td id="L402" class="blob-num js-line-number" data-line-number="402"></td>
        <td id="LC402" class="blob-code blob-code-inner js-file-line">            <span class="pl-c">/*
																										 * eslint-enable
																										 * key-spacing
																										 */</span></td>
      </tr>
      <tr>
        <td id="L403" class="blob-num js-line-number" data-line-number="403"></td>
        <td id="LC403" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L404" class="blob-num js-line-number" data-line-number="404"></td>
        <td id="LC404" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L405" class="blob-num js-line-number" data-line-number="405"></td>
        <td id="LC405" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L406" class="blob-num js-line-number" data-line-number="406"></td>
        <td id="LC406" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">/**
																								 * </span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L407" class="blob-num js-line-number" data-line-number="407"></td>
																								 * <td id="LC407" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * 预分析模块</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L408" class="blob-num js-line-number" data-line-number="408"></td>
																								 * <td id="LC408" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L409" class="blob-num js-line-number" data-line-number="409"></td>
																								 * <td id="LC409" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * 首先，完成对factory中声明依赖的分析提取</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L410" class="blob-num js-line-number" data-line-number="410"></td>
																								 * <td id="LC410" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * 然后，尝试加载&quot;资源加载所需模块&quot;</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L411" class="blob-num js-line-number" data-line-number="411"></td>
																								 * <td id="LC411" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L412" class="blob-num js-line-number" data-line-number="412"></td>
																								 * <td id="LC412" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * 需要先加载模块的原因是：如果模块不存在，无法进行resourceId
																								 * normalize化</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L413" class="blob-num js-line-number" data-line-number="413"></td>
																								 * <td id="LC413" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * modAnalyse完成后续的依赖分析处理，并进行依赖模块的加载</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L414" class="blob-num js-line-number" data-line-number="414"></td>
																								 * <td id="LC414" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L415" class="blob-num js-line-number" data-line-number="415"></td>
																								 * <td id="LC415" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@inner</span></span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L416" class="blob-num js-line-number" data-line-number="416"></td>
																								 * <td id="LC416" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@param</span>
																								 * <span
																								 * class="pl-en">{string}</span>
																								 * <span
																								 * class="pl-smi">id</span>
																								 * 模块id</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L417" class="blob-num js-line-number" data-line-number="417"></td>
																								 * <td id="LC417" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c">
																								 */</span></td>
      </tr>
      <tr>
        <td id="L418" class="blob-num js-line-number" data-line-number="418"></td>
        <td id="LC418" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">modAnalyse</span>(<span class="pl-smi">id</span>) {</td>
      </tr>
      <tr>
        <td id="L419" class="blob-num js-line-number" data-line-number="419"></td>
        <td id="LC419" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> mod <span class="pl-k">=</span> modModules[id];</td>
      </tr>
      <tr>
        <td id="L420" class="blob-num js-line-number" data-line-number="420"></td>
        <td id="LC420" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-k">!</span>mod <span class="pl-k">||</span> <span class="pl-en">modIs</span>(id, <span class="pl-c1">MODULE_ANALYZED</span>)) {</td>
      </tr>
      <tr>
        <td id="L421" class="blob-num js-line-number" data-line-number="421"></td>
        <td id="LC421" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L422" class="blob-num js-line-number" data-line-number="422"></td>
        <td id="LC422" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L423" class="blob-num js-line-number" data-line-number="423"></td>
        <td id="LC423" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L424" class="blob-num js-line-number" data-line-number="424"></td>
        <td id="LC424" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> deps <span class="pl-k">=</span> <span class="pl-smi">mod</span>.<span class="pl-smi">deps</span>;</td>
      </tr>
      <tr>
        <td id="L425" class="blob-num js-line-number" data-line-number="425"></td>
        <td id="LC425" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> factory <span class="pl-k">=</span> <span class="pl-smi">mod</span>.<span class="pl-smi">factory</span>;</td>
      </tr>
      <tr>
        <td id="L426" class="blob-num js-line-number" data-line-number="426"></td>
        <td id="LC426" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> hardDependsCount <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L427" class="blob-num js-line-number" data-line-number="427"></td>
        <td id="LC427" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L428" class="blob-num js-line-number" data-line-number="428"></td>
        <td id="LC428" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// 分析function
																									// body中的require</span></td>
      </tr>
      <tr>
        <td id="L429" class="blob-num js-line-number" data-line-number="429"></td>
        <td id="LC429" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// 如果包含显式依赖声明，根据AMD规定和性能考虑，可以不分析factoryBody</span></td>
      </tr>
      <tr>
        <td id="L430" class="blob-num js-line-number" data-line-number="430"></td>
        <td id="LC430" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-k">typeof</span> factory <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>function<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L431" class="blob-num js-line-number" data-line-number="431"></td>
        <td id="LC431" class="blob-code blob-code-inner js-file-line">            hardDependsCount <span class="pl-k">=</span> <span class="pl-c1">Math</span>.<span class="pl-c1">min</span>(<span class="pl-smi">factory</span>.<span class="pl-c1">length</span>, <span class="pl-smi">deps</span>.<span class="pl-c1">length</span>);</td>
      </tr>
      <tr>
        <td id="L432" class="blob-num js-line-number" data-line-number="432"></td>
        <td id="LC432" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L433" class="blob-num js-line-number" data-line-number="433"></td>
        <td id="LC433" class="blob-code blob-code-inner js-file-line">            <span class="pl-c">// If
																										// the
																										// dependencies
																										// argument
																										// is
																										// present,
																										// the
																										// module
																										// loader</span></td>
      </tr>
      <tr>
        <td id="L434" class="blob-num js-line-number" data-line-number="434"></td>
        <td id="LC434" class="blob-code blob-code-inner js-file-line">            <span class="pl-c">// SHOULD
																										// NOT
																										// scan
																										// for
																										// dependencies
																										// within
																										// the
																										// factory
																										// function.</span></td>
      </tr>
      <tr>
        <td id="L435" class="blob-num js-line-number" data-line-number="435"></td>
        <td id="LC435" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">!</span><span class="pl-smi">mod</span>.<span class="pl-smi">depsDec</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">factory</span>.<span class="pl-c1">toString</span>()</td>
      </tr>
      <tr>
        <td id="L436" class="blob-num js-line-number" data-line-number="436"></td>
        <td id="LC436" class="blob-code blob-code-inner js-file-line">                .<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>(<span class="pl-cce">\/\*</span>(<span class="pl-c1">[<span class="pl-c1">\s\S</span>]</span><span class="pl-k">*?</span>)<span class="pl-cce">\*\/</span><span class="pl-k">|</span>(<span class="pl-c1">[<span class="pl-k">^</span>:]</span><span class="pl-k">|</span><span class="pl-k">^</span>)<span class="pl-cce">\/\/</span>(<span class="pl-c1">.</span><span class="pl-k">*</span>)<span class="pl-k">$</span>)<span class="pl-pds">/</span>mg</span>, <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L437" class="blob-num js-line-number" data-line-number="437"></td>
        <td id="LC437" class="blob-code blob-code-inner js-file-line">                .<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>require<span class="pl-cce">\(</span><span class="pl-c1">\s</span><span class="pl-k">*</span>(<span class="pl-c1">[&#39;&quot;&#39;]</span>)(<span class="pl-c1">[<span class="pl-k">^</span>&#39;&quot;]</span><span class="pl-k">+</span>)<span class="pl-k">\1</span><span class="pl-c1">\s</span><span class="pl-k">*</span><span class="pl-cce">\)</span><span class="pl-pds">/</span>g</span>,</td>
      </tr>
      <tr>
        <td id="L438" class="blob-num js-line-number" data-line-number="438"></td>
        <td id="LC438" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">function</span> (<span class="pl-smi">$0</span>, <span class="pl-smi">$1</span>, <span class="pl-smi">depId</span>) {</td>
      </tr>
      <tr>
        <td id="L439" class="blob-num js-line-number" data-line-number="439"></td>
        <td id="LC439" class="blob-code blob-code-inner js-file-line">                        <span class="pl-smi">deps</span>.<span class="pl-c1">push</span>(depId);</td>
      </tr>
      <tr>
        <td id="L440" class="blob-num js-line-number" data-line-number="440"></td>
        <td id="LC440" class="blob-code blob-code-inner js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L441" class="blob-num js-line-number" data-line-number="441"></td>
        <td id="LC441" class="blob-code blob-code-inner js-file-line">                );</td>
      </tr>
      <tr>
        <td id="L442" class="blob-num js-line-number" data-line-number="442"></td>
        <td id="LC442" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L443" class="blob-num js-line-number" data-line-number="443"></td>
        <td id="LC443" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L444" class="blob-num js-line-number" data-line-number="444"></td>
        <td id="LC444" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> requireModules <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L445" class="blob-num js-line-number" data-line-number="445"></td>
        <td id="LC445" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">each</span>(deps, <span class="pl-k">function</span> (<span class="pl-smi">depId</span>, <span class="pl-smi">index</span>) {</td>
      </tr>
      <tr>
        <td id="L446" class="blob-num js-line-number" data-line-number="446"></td>
        <td id="LC446" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> idInfo <span class="pl-k">=</span> <span class="pl-en">parseId</span>(depId);</td>
      </tr>
      <tr>
        <td id="L447" class="blob-num js-line-number" data-line-number="447"></td>
        <td id="LC447" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> absId <span class="pl-k">=</span> <span class="pl-en">normalize</span>(<span class="pl-smi">idInfo</span>.<span class="pl-smi">mod</span>, id);</td>
      </tr>
      <tr>
        <td id="L448" class="blob-num js-line-number" data-line-number="448"></td>
        <td id="LC448" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> moduleInfo;</td>
      </tr>
      <tr>
        <td id="L449" class="blob-num js-line-number" data-line-number="449"></td>
        <td id="LC449" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> resInfo;</td>
      </tr>
      <tr>
        <td id="L450" class="blob-num js-line-number" data-line-number="450"></td>
        <td id="LC450" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L451" class="blob-num js-line-number" data-line-number="451"></td>
        <td id="LC451" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (absId <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span><span class="pl-c1">BUILDIN_MODULE</span>[absId]) {</td>
      </tr>
      <tr>
        <td id="L452" class="blob-num js-line-number" data-line-number="452"></td>
        <td id="LC452" class="blob-code blob-code-inner js-file-line">                <span class="pl-c">// 如果依赖是一个资源，将其信息添加到module.depRs</span></td>
      </tr>
      <tr>
        <td id="L453" class="blob-num js-line-number" data-line-number="453"></td>
        <td id="LC453" class="blob-code blob-code-inner js-file-line">                <span class="pl-c">// </span></td>
      </tr>
      <tr>
        <td id="L454" class="blob-num js-line-number" data-line-number="454"></td>
        <td id="LC454" class="blob-code blob-code-inner js-file-line">                <span class="pl-c">// module.depRs中的项有可能是重复的。</span></td>
      </tr>
      <tr>
        <td id="L455" class="blob-num js-line-number" data-line-number="455"></td>
        <td id="LC455" class="blob-code blob-code-inner js-file-line">                <span class="pl-c">// 在这个阶段，加载resource的module可能还未defined，</span></td>
      </tr>
      <tr>
        <td id="L456" class="blob-num js-line-number" data-line-number="456"></td>
        <td id="LC456" class="blob-code blob-code-inner js-file-line">                <span class="pl-c">// 导致此时resource
																											// id无法被normalize。</span></td>
      </tr>
      <tr>
        <td id="L457" class="blob-num js-line-number" data-line-number="457"></td>
        <td id="LC457" class="blob-code blob-code-inner js-file-line">                <span class="pl-c">// </span></td>
      </tr>
      <tr>
        <td id="L458" class="blob-num js-line-number" data-line-number="458"></td>
        <td id="LC458" class="blob-code blob-code-inner js-file-line">                <span class="pl-c">// 比如对a/b/c而言，下面几个resource可能指的是同一个资源：</span></td>
      </tr>
      <tr>
        <td id="L459" class="blob-num js-line-number" data-line-number="459"></td>
        <td id="LC459" class="blob-code blob-code-inner js-file-line">                <span class="pl-c">// -
																											// js!../name.js</span></td>
      </tr>
      <tr>
        <td id="L460" class="blob-num js-line-number" data-line-number="460"></td>
        <td id="LC460" class="blob-code blob-code-inner js-file-line">                <span class="pl-c">// -
																											// js!a/name.js</span></td>
      </tr>
      <tr>
        <td id="L461" class="blob-num js-line-number" data-line-number="461"></td>
        <td id="LC461" class="blob-code blob-code-inner js-file-line">                <span class="pl-c">// -
																											// ../../js!../name.js</span></td>
      </tr>
      <tr>
        <td id="L462" class="blob-num js-line-number" data-line-number="462"></td>
        <td id="LC462" class="blob-code blob-code-inner js-file-line">                <span class="pl-c">// </span></td>
      </tr>
      <tr>
        <td id="L463" class="blob-num js-line-number" data-line-number="463"></td>
        <td id="LC463" class="blob-code blob-code-inner js-file-line">                <span class="pl-c">// 所以加载资源的module
																											// ready时，需要遍历module.depRs进行处理</span></td>
      </tr>
      <tr>
        <td id="L464" class="blob-num js-line-number" data-line-number="464"></td>
        <td id="LC464" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> (<span class="pl-smi">idInfo</span>.<span class="pl-smi">res</span>) {</td>
      </tr>
      <tr>
        <td id="L465" class="blob-num js-line-number" data-line-number="465"></td>
        <td id="LC465" class="blob-code blob-code-inner js-file-line">                    resInfo <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L466" class="blob-num js-line-number" data-line-number="466"></td>
        <td id="LC466" class="blob-code blob-code-inner js-file-line">                        id<span class="pl-k">:</span> depId,</td>
      </tr>
      <tr>
        <td id="L467" class="blob-num js-line-number" data-line-number="467"></td>
        <td id="LC467" class="blob-code blob-code-inner js-file-line">                        mod<span class="pl-k">:</span> absId,</td>
      </tr>
      <tr>
        <td id="L468" class="blob-num js-line-number" data-line-number="468"></td>
        <td id="LC468" class="blob-code blob-code-inner js-file-line">                        res<span class="pl-k">:</span> <span class="pl-smi">idInfo</span>.<span class="pl-smi">res</span></td>
      </tr>
      <tr>
        <td id="L469" class="blob-num js-line-number" data-line-number="469"></td>
        <td id="LC469" class="blob-code blob-code-inner js-file-line">                    };</td>
      </tr>
      <tr>
        <td id="L470" class="blob-num js-line-number" data-line-number="470"></td>
        <td id="LC470" class="blob-code blob-code-inner js-file-line">                    autoDefineModules[absId] <span class="pl-k">=</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L471" class="blob-num js-line-number" data-line-number="471"></td>
        <td id="LC471" class="blob-code blob-code-inner js-file-line">                    <span class="pl-smi">mod</span>.<span class="pl-smi">depPMs</span>.<span class="pl-c1">push</span>(absId);</td>
      </tr>
      <tr>
        <td id="L472" class="blob-num js-line-number" data-line-number="472"></td>
        <td id="LC472" class="blob-code blob-code-inner js-file-line">                    <span class="pl-smi">mod</span>.<span class="pl-smi">depRs</span>.<span class="pl-c1">push</span>(resInfo);</td>
      </tr>
      <tr>
        <td id="L473" class="blob-num js-line-number" data-line-number="473"></td>
        <td id="LC473" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L474" class="blob-num js-line-number" data-line-number="474"></td>
        <td id="LC474" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L475" class="blob-num js-line-number" data-line-number="475"></td>
        <td id="LC475" class="blob-code blob-code-inner js-file-line">                <span class="pl-c">// 对依赖模块的id
																											// normalize能保证正确性，在此处进行去重</span></td>
      </tr>
      <tr>
        <td id="L476" class="blob-num js-line-number" data-line-number="476"></td>
        <td id="LC476" class="blob-code blob-code-inner js-file-line">                moduleInfo <span class="pl-k">=</span> <span class="pl-smi">mod</span>.<span class="pl-smi">depMkv</span>[absId];</td>
      </tr>
      <tr>
        <td id="L477" class="blob-num js-line-number" data-line-number="477"></td>
        <td id="LC477" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> (<span class="pl-k">!</span>moduleInfo) {</td>
      </tr>
      <tr>
        <td id="L478" class="blob-num js-line-number" data-line-number="478"></td>
        <td id="LC478" class="blob-code blob-code-inner js-file-line">                    moduleInfo <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L479" class="blob-num js-line-number" data-line-number="479"></td>
        <td id="LC479" class="blob-code blob-code-inner js-file-line">                        id<span class="pl-k">:</span> <span class="pl-smi">idInfo</span>.<span class="pl-smi">mod</span>,</td>
      </tr>
      <tr>
        <td id="L480" class="blob-num js-line-number" data-line-number="480"></td>
        <td id="LC480" class="blob-code blob-code-inner js-file-line">                        absId<span class="pl-k">:</span> absId,</td>
      </tr>
      <tr>
        <td id="L481" class="blob-num js-line-number" data-line-number="481"></td>
        <td id="LC481" class="blob-code blob-code-inner js-file-line">                        hard<span class="pl-k">:</span> index <span class="pl-k">&lt;</span> hardDependsCount</td>
      </tr>
      <tr>
        <td id="L482" class="blob-num js-line-number" data-line-number="482"></td>
        <td id="LC482" class="blob-code blob-code-inner js-file-line">                    };</td>
      </tr>
      <tr>
        <td id="L483" class="blob-num js-line-number" data-line-number="483"></td>
        <td id="LC483" class="blob-code blob-code-inner js-file-line">                    <span class="pl-smi">mod</span>.<span class="pl-smi">depMs</span>.<span class="pl-c1">push</span>(moduleInfo);</td>
      </tr>
      <tr>
        <td id="L484" class="blob-num js-line-number" data-line-number="484"></td>
        <td id="LC484" class="blob-code blob-code-inner js-file-line">                    <span class="pl-smi">mod</span>.<span class="pl-smi">depMkv</span>[absId] <span class="pl-k">=</span> moduleInfo;</td>
      </tr>
      <tr>
        <td id="L485" class="blob-num js-line-number" data-line-number="485"></td>
        <td id="LC485" class="blob-code blob-code-inner js-file-line">                    <span class="pl-smi">requireModules</span>.<span class="pl-c1">push</span>(absId);</td>
      </tr>
      <tr>
        <td id="L486" class="blob-num js-line-number" data-line-number="486"></td>
        <td id="LC486" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L487" class="blob-num js-line-number" data-line-number="487"></td>
        <td id="LC487" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L488" class="blob-num js-line-number" data-line-number="488"></td>
        <td id="LC488" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L489" class="blob-num js-line-number" data-line-number="489"></td>
        <td id="LC489" class="blob-code blob-code-inner js-file-line">                moduleInfo <span class="pl-k">=</span> {absId<span class="pl-k">:</span> absId};</td>
      </tr>
      <tr>
        <td id="L490" class="blob-num js-line-number" data-line-number="490"></td>
        <td id="LC490" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L491" class="blob-num js-line-number" data-line-number="491"></td>
        <td id="LC491" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L492" class="blob-num js-line-number" data-line-number="492"></td>
        <td id="LC492" class="blob-code blob-code-inner js-file-line">            <span class="pl-c">// 如果当前正在分析的依赖项是define中声明的，</span></td>
      </tr>
      <tr>
        <td id="L493" class="blob-num js-line-number" data-line-number="493"></td>
        <td id="LC493" class="blob-code blob-code-inner js-file-line">            <span class="pl-c">// 则记录到module.factoryDeps中</span></td>
      </tr>
      <tr>
        <td id="L494" class="blob-num js-line-number" data-line-number="494"></td>
        <td id="LC494" class="blob-code blob-code-inner js-file-line">            <span class="pl-c">// 在factory
																										// invoke前将用于生成invoke
																										// arguments</span></td>
      </tr>
      <tr>
        <td id="L495" class="blob-num js-line-number" data-line-number="495"></td>
        <td id="LC495" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (index <span class="pl-k">&lt;</span> hardDependsCount) {</td>
      </tr>
      <tr>
        <td id="L496" class="blob-num js-line-number" data-line-number="496"></td>
        <td id="LC496" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">mod</span>.<span class="pl-smi">factoryDeps</span>.<span class="pl-c1">push</span>(resInfo <span class="pl-k">||</span> moduleInfo);</td>
      </tr>
      <tr>
        <td id="L497" class="blob-num js-line-number" data-line-number="497"></td>
        <td id="LC497" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L498" class="blob-num js-line-number" data-line-number="498"></td>
        <td id="LC498" class="blob-code blob-code-inner js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L499" class="blob-num js-line-number" data-line-number="499"></td>
        <td id="LC499" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L500" class="blob-num js-line-number" data-line-number="500"></td>
        <td id="LC500" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">mod</span>.<span class="pl-smi">state</span> <span class="pl-k">=</span> <span class="pl-c1">MODULE_ANALYZED</span>;</td>
      </tr>
      <tr>
        <td id="L501" class="blob-num js-line-number" data-line-number="501"></td>
        <td id="LC501" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">modInitFactoryInvoker</span>(id);</td>
      </tr>
      <tr>
        <td id="L502" class="blob-num js-line-number" data-line-number="502"></td>
        <td id="LC502" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">nativeRequire</span>(requireModules);</td>
      </tr>
      <tr>
        <td id="L503" class="blob-num js-line-number" data-line-number="503"></td>
        <td id="LC503" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L504" class="blob-num js-line-number" data-line-number="504"></td>
        <td id="LC504" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L505" class="blob-num js-line-number" data-line-number="505"></td>
        <td id="LC505" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">/**
																								 * </span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L506" class="blob-num js-line-number" data-line-number="506"></td>
																								 * <td id="LC506" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * 对一些需要自动定义的模块进行自动定义</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L507" class="blob-num js-line-number" data-line-number="507"></td>
																								 * <td id="LC507" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L508" class="blob-num js-line-number" data-line-number="508"></td>
																								 * <td id="LC508" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@inner</span></span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L509" class="blob-num js-line-number" data-line-number="509"></td>
																								 * <td id="LC509" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c">
																								 */</span></td>
      </tr>
      <tr>
        <td id="L510" class="blob-num js-line-number" data-line-number="510"></td>
        <td id="LC510" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">modAutoInvoke</span>() {</td>
      </tr>
      <tr>
        <td id="L511" class="blob-num js-line-number" data-line-number="511"></td>
        <td id="LC511" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">/*
																									 * eslint-disable
																									 * guard-for-in
																									 */</span></td>
      </tr>
      <tr>
        <td id="L512" class="blob-num js-line-number" data-line-number="512"></td>
        <td id="LC512" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">for</span> (<span class="pl-k">var</span> id <span class="pl-k">in</span> autoDefineModules) {</td>
      </tr>
      <tr>
        <td id="L513" class="blob-num js-line-number" data-line-number="513"></td>
        <td id="LC513" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">modUpdatePreparedState</span>(id);</td>
      </tr>
      <tr>
        <td id="L514" class="blob-num js-line-number" data-line-number="514"></td>
        <td id="LC514" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">modTryInvokeFactory</span>(id);</td>
      </tr>
      <tr>
        <td id="L515" class="blob-num js-line-number" data-line-number="515"></td>
        <td id="LC515" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L516" class="blob-num js-line-number" data-line-number="516"></td>
        <td id="LC516" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">/*
																									 * eslint-enable
																									 * guard-for-in
																									 */</span></td>
      </tr>
      <tr>
        <td id="L517" class="blob-num js-line-number" data-line-number="517"></td>
        <td id="LC517" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L518" class="blob-num js-line-number" data-line-number="518"></td>
        <td id="LC518" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L519" class="blob-num js-line-number" data-line-number="519"></td>
        <td id="LC519" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">/**
																								 * </span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L520" class="blob-num js-line-number" data-line-number="520"></td>
																								 * <td id="LC520" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * 更新模块的准备状态</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L521" class="blob-num js-line-number" data-line-number="521"></td>
																								 * <td id="LC521" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L522" class="blob-num js-line-number" data-line-number="522"></td>
																								 * <td id="LC522" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@inner</span></span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L523" class="blob-num js-line-number" data-line-number="523"></td>
																								 * <td id="LC523" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@param</span>
																								 * <span
																								 * class="pl-en">{string}</span>
																								 * <span
																								 * class="pl-smi">id</span>
																								 * 模块id</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L524" class="blob-num js-line-number" data-line-number="524"></td>
																								 * <td id="LC524" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c">
																								 */</span></td>
      </tr>
      <tr>
        <td id="L525" class="blob-num js-line-number" data-line-number="525"></td>
        <td id="LC525" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">modUpdatePreparedState</span>(<span class="pl-smi">id</span>) {</td>
      </tr>
      <tr>
        <td id="L526" class="blob-num js-line-number" data-line-number="526"></td>
        <td id="LC526" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> visited <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L527" class="blob-num js-line-number" data-line-number="527"></td>
        <td id="LC527" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">update</span>(id);</td>
      </tr>
      <tr>
        <td id="L528" class="blob-num js-line-number" data-line-number="528"></td>
        <td id="LC528" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L529" class="blob-num js-line-number" data-line-number="529"></td>
        <td id="LC529" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">function</span> <span class="pl-en">update</span>(<span class="pl-smi">id</span>) {</td>
      </tr>
      <tr>
        <td id="L530" class="blob-num js-line-number" data-line-number="530"></td>
        <td id="LC530" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-en">modIs</span>(id, <span class="pl-c1">MODULE_ANALYZED</span>)) {</td>
      </tr>
      <tr>
        <td id="L531" class="blob-num js-line-number" data-line-number="531"></td>
        <td id="LC531" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L532" class="blob-num js-line-number" data-line-number="532"></td>
        <td id="LC532" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L533" class="blob-num js-line-number" data-line-number="533"></td>
        <td id="LC533" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-en">modIs</span>(id, <span class="pl-c1">MODULE_PREPARED</span>) <span class="pl-k">||</span> visited[id]) {</td>
      </tr>
      <tr>
        <td id="L534" class="blob-num js-line-number" data-line-number="534"></td>
        <td id="LC534" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">return</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L535" class="blob-num js-line-number" data-line-number="535"></td>
        <td id="LC535" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L536" class="blob-num js-line-number" data-line-number="536"></td>
        <td id="LC536" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L537" class="blob-num js-line-number" data-line-number="537"></td>
        <td id="LC537" class="blob-code blob-code-inner js-file-line">            visited[id] <span class="pl-k">=</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L538" class="blob-num js-line-number" data-line-number="538"></td>
        <td id="LC538" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> mod <span class="pl-k">=</span> modModules[id];</td>
      </tr>
      <tr>
        <td id="L539" class="blob-num js-line-number" data-line-number="539"></td>
        <td id="LC539" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> prepared <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L540" class="blob-num js-line-number" data-line-number="540"></td>
        <td id="LC540" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L541" class="blob-num js-line-number" data-line-number="541"></td>
        <td id="LC541" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">each</span>(</td>
      </tr>
      <tr>
        <td id="L542" class="blob-num js-line-number" data-line-number="542"></td>
        <td id="LC542" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">mod</span>.<span class="pl-smi">depMs</span>,</td>
      </tr>
      <tr>
        <td id="L543" class="blob-num js-line-number" data-line-number="543"></td>
        <td id="LC543" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">function</span> (<span class="pl-smi">dep</span>) {</td>
      </tr>
      <tr>
        <td id="L544" class="blob-num js-line-number" data-line-number="544"></td>
        <td id="LC544" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">return</span> (prepared <span class="pl-k">=</span> <span class="pl-en">update</span>(<span class="pl-smi">dep</span>.<span class="pl-smi">absId</span>));</td>
      </tr>
      <tr>
        <td id="L545" class="blob-num js-line-number" data-line-number="545"></td>
        <td id="LC545" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L546" class="blob-num js-line-number" data-line-number="546"></td>
        <td id="LC546" class="blob-code blob-code-inner js-file-line">            );</td>
      </tr>
      <tr>
        <td id="L547" class="blob-num js-line-number" data-line-number="547"></td>
        <td id="LC547" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L548" class="blob-num js-line-number" data-line-number="548"></td>
        <td id="LC548" class="blob-code blob-code-inner js-file-line">            <span class="pl-c">// 判断resource是否加载完成。如果resource未加载完成，则认为未准备好</span></td>
      </tr>
      <tr>
        <td id="L549" class="blob-num js-line-number" data-line-number="549"></td>
        <td id="LC549" class="blob-code blob-code-inner js-file-line">            <span class="pl-c">/*
																										 * jshint
																										 * ignore:start
																										 */</span></td>
      </tr>
      <tr>
        <td id="L550" class="blob-num js-line-number" data-line-number="550"></td>
        <td id="LC550" class="blob-code blob-code-inner js-file-line">            prepared <span class="pl-k">&amp;&amp;</span> <span class="pl-en">each</span>(</td>
      </tr>
      <tr>
        <td id="L551" class="blob-num js-line-number" data-line-number="551"></td>
        <td id="LC551" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">mod</span>.<span class="pl-smi">depRs</span>,</td>
      </tr>
      <tr>
        <td id="L552" class="blob-num js-line-number" data-line-number="552"></td>
        <td id="LC552" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">function</span> (<span class="pl-smi">dep</span>) {</td>
      </tr>
      <tr>
        <td id="L553" class="blob-num js-line-number" data-line-number="553"></td>
        <td id="LC553" class="blob-code blob-code-inner js-file-line">                    prepared <span class="pl-k">=</span> <span class="pl-k">!!</span>(<span class="pl-smi">dep</span>.<span class="pl-smi">absId</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-en">modIs</span>(<span class="pl-smi">dep</span>.<span class="pl-smi">absId</span>, <span class="pl-c1">MODULE_DEFINED</span>));</td>
      </tr>
      <tr>
        <td id="L554" class="blob-num js-line-number" data-line-number="554"></td>
        <td id="LC554" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">return</span> prepared;</td>
      </tr>
      <tr>
        <td id="L555" class="blob-num js-line-number" data-line-number="555"></td>
        <td id="LC555" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L556" class="blob-num js-line-number" data-line-number="556"></td>
        <td id="LC556" class="blob-code blob-code-inner js-file-line">            );</td>
      </tr>
      <tr>
        <td id="L557" class="blob-num js-line-number" data-line-number="557"></td>
        <td id="LC557" class="blob-code blob-code-inner js-file-line">            <span class="pl-c">/*
																										 * jshint
																										 * ignore:end
																										 */</span></td>
      </tr>
      <tr>
        <td id="L558" class="blob-num js-line-number" data-line-number="558"></td>
        <td id="LC558" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L559" class="blob-num js-line-number" data-line-number="559"></td>
        <td id="LC559" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (prepared) {</td>
      </tr>
      <tr>
        <td id="L560" class="blob-num js-line-number" data-line-number="560"></td>
        <td id="LC560" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">mod</span>.<span class="pl-smi">state</span> <span class="pl-k">=</span> <span class="pl-c1">MODULE_PREPARED</span>;</td>
      </tr>
      <tr>
        <td id="L561" class="blob-num js-line-number" data-line-number="561"></td>
        <td id="LC561" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L562" class="blob-num js-line-number" data-line-number="562"></td>
        <td id="LC562" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L563" class="blob-num js-line-number" data-line-number="563"></td>
        <td id="LC563" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> prepared;</td>
      </tr>
      <tr>
        <td id="L564" class="blob-num js-line-number" data-line-number="564"></td>
        <td id="LC564" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L565" class="blob-num js-line-number" data-line-number="565"></td>
        <td id="LC565" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L566" class="blob-num js-line-number" data-line-number="566"></td>
        <td id="LC566" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L567" class="blob-num js-line-number" data-line-number="567"></td>
        <td id="LC567" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">/**
																								 * </span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L568" class="blob-num js-line-number" data-line-number="568"></td>
																								 * <td id="LC568" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * 初始化模块定义时所需的factory执行器</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L569" class="blob-num js-line-number" data-line-number="569"></td>
																								 * <td id="LC569" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L570" class="blob-num js-line-number" data-line-number="570"></td>
																								 * <td id="LC570" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@inner</span></span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L571" class="blob-num js-line-number" data-line-number="571"></td>
																								 * <td id="LC571" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@param</span>
																								 * <span
																								 * class="pl-en">{string}</span>
																								 * <span
																								 * class="pl-smi">id</span>
																								 * 模块id</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L572" class="blob-num js-line-number" data-line-number="572"></td>
																								 * <td id="LC572" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c">
																								 */</span></td>
      </tr>
      <tr>
        <td id="L573" class="blob-num js-line-number" data-line-number="573"></td>
        <td id="LC573" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">modInitFactoryInvoker</span>(<span class="pl-smi">id</span>) {</td>
      </tr>
      <tr>
        <td id="L574" class="blob-num js-line-number" data-line-number="574"></td>
        <td id="LC574" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> mod <span class="pl-k">=</span> modModules[id];</td>
      </tr>
      <tr>
        <td id="L575" class="blob-num js-line-number" data-line-number="575"></td>
        <td id="LC575" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> invoking;</td>
      </tr>
      <tr>
        <td id="L576" class="blob-num js-line-number" data-line-number="576"></td>
        <td id="LC576" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L577" class="blob-num js-line-number" data-line-number="577"></td>
        <td id="LC577" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">mod</span>.<span class="pl-smi">invokeFactory</span> <span class="pl-k">=</span> invokeFactory;</td>
      </tr>
      <tr>
        <td id="L578" class="blob-num js-line-number" data-line-number="578"></td>
        <td id="LC578" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">/*
																									 * eslint-disable
																									 * max-nested-callbacks
																									 */</span></td>
      </tr>
      <tr>
        <td id="L579" class="blob-num js-line-number" data-line-number="579"></td>
        <td id="LC579" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">each</span>(</td>
      </tr>
      <tr>
        <td id="L580" class="blob-num js-line-number" data-line-number="580"></td>
        <td id="LC580" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">mod</span>.<span class="pl-smi">depPMs</span>,</td>
      </tr>
      <tr>
        <td id="L581" class="blob-num js-line-number" data-line-number="581"></td>
        <td id="LC581" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">function</span> (<span class="pl-smi">pluginModuleId</span>) {</td>
      </tr>
      <tr>
        <td id="L582" class="blob-num js-line-number" data-line-number="582"></td>
        <td id="LC582" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L583" class="blob-num js-line-number" data-line-number="583"></td>
        <td id="LC583" class="blob-code blob-code-inner js-file-line">                <span class="pl-en">modAddDefinedListener</span>(</td>
      </tr>
      <tr>
        <td id="L584" class="blob-num js-line-number" data-line-number="584"></td>
        <td id="LC584" class="blob-code blob-code-inner js-file-line">                    pluginModuleId,</td>
      </tr>
      <tr>
        <td id="L585" class="blob-num js-line-number" data-line-number="585"></td>
        <td id="LC585" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L586" class="blob-num js-line-number" data-line-number="586"></td>
        <td id="LC586" class="blob-code blob-code-inner js-file-line">                        <span class="pl-en">each</span>(<span class="pl-smi">mod</span>.<span class="pl-smi">depRs</span>, <span class="pl-k">function</span> (<span class="pl-smi">res</span>) {</td>
      </tr>
      <tr>
        <td id="L587" class="blob-num js-line-number" data-line-number="587"></td>
        <td id="LC587" class="blob-code blob-code-inner js-file-line">                            <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-smi">res</span>.<span class="pl-smi">absId</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">res</span>.<span class="pl-smi">mod</span> <span class="pl-k">===</span> pluginModuleId) {</td>
      </tr>
      <tr>
        <td id="L588" class="blob-num js-line-number" data-line-number="588"></td>
        <td id="LC588" class="blob-code blob-code-inner js-file-line">                                <span class="pl-smi">res</span>.<span class="pl-smi">absId</span> <span class="pl-k">=</span> <span class="pl-en">normalize</span>(<span class="pl-smi">res</span>.<span class="pl-c1">id</span>, id);</td>
      </tr>
      <tr>
        <td id="L589" class="blob-num js-line-number" data-line-number="589"></td>
        <td id="LC589" class="blob-code blob-code-inner js-file-line">                                <span class="pl-en">nativeRequire</span>([<span class="pl-smi">res</span>.<span class="pl-smi">absId</span>], modAutoInvoke);</td>
      </tr>
      <tr>
        <td id="L590" class="blob-num js-line-number" data-line-number="590"></td>
        <td id="LC590" class="blob-code blob-code-inner js-file-line">                            }</td>
      </tr>
      <tr>
        <td id="L591" class="blob-num js-line-number" data-line-number="591"></td>
        <td id="LC591" class="blob-code blob-code-inner js-file-line">                        });</td>
      </tr>
      <tr>
        <td id="L592" class="blob-num js-line-number" data-line-number="592"></td>
        <td id="LC592" class="blob-code blob-code-inner js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L593" class="blob-num js-line-number" data-line-number="593"></td>
        <td id="LC593" class="blob-code blob-code-inner js-file-line">                );</td>
      </tr>
      <tr>
        <td id="L594" class="blob-num js-line-number" data-line-number="594"></td>
        <td id="LC594" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L595" class="blob-num js-line-number" data-line-number="595"></td>
        <td id="LC595" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L596" class="blob-num js-line-number" data-line-number="596"></td>
        <td id="LC596" class="blob-code blob-code-inner js-file-line">        );</td>
      </tr>
      <tr>
        <td id="L597" class="blob-num js-line-number" data-line-number="597"></td>
        <td id="LC597" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">/*
																									 * eslint-enable
																									 * max-nested-callbacks
																									 */</span></td>
      </tr>
      <tr>
        <td id="L598" class="blob-num js-line-number" data-line-number="598"></td>
        <td id="LC598" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L599" class="blob-num js-line-number" data-line-number="599"></td>
        <td id="LC599" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">/**
																									 * </span></td>
																									 * </tr>
																									 * <tr>
																									 * <td id="L600" class="blob-num js-line-number" data-line-number="600"></td>
																									 * <td id="LC600" class="blob-code blob-code-inner js-file-line"><span
																									 * class="pl-c"> *
																									 * 初始化模块</span></td>
																									 * </tr>
																									 * <tr>
																									 * <td id="L601" class="blob-num js-line-number" data-line-number="601"></td>
																									 * <td id="LC601" class="blob-code blob-code-inner js-file-line"><span
																									 * class="pl-c"> *</span></td>
																									 * </tr>
																									 * <tr>
																									 * <td id="L602" class="blob-num js-line-number" data-line-number="602"></td>
																									 * <td id="LC602" class="blob-code blob-code-inner js-file-line"><span
																									 * class="pl-c"> *
																									 * <span
																									 * class="pl-k">@inner</span></span></td>
																									 * </tr>
																									 * <tr>
																									 * <td id="L603" class="blob-num js-line-number" data-line-number="603"></td>
																									 * <td id="LC603" class="blob-code blob-code-inner js-file-line"><span
																									 * class="pl-c">
																									 */</span></td>
      </tr>
      <tr>
        <td id="L604" class="blob-num js-line-number" data-line-number="604"></td>
        <td id="LC604" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">function</span> <span class="pl-en">invokeFactory</span>() {</td>
      </tr>
      <tr>
        <td id="L605" class="blob-num js-line-number" data-line-number="605"></td>
        <td id="LC605" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (invoking <span class="pl-k">||</span> <span class="pl-smi">mod</span>.<span class="pl-smi">state</span> <span class="pl-k">!==</span> <span class="pl-c1">MODULE_PREPARED</span>) {</td>
      </tr>
      <tr>
        <td id="L606" class="blob-num js-line-number" data-line-number="606"></td>
        <td id="LC606" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L607" class="blob-num js-line-number" data-line-number="607"></td>
        <td id="LC607" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L608" class="blob-num js-line-number" data-line-number="608"></td>
        <td id="LC608" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L609" class="blob-num js-line-number" data-line-number="609"></td>
        <td id="LC609" class="blob-code blob-code-inner js-file-line">            invoking <span class="pl-k">=</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L610" class="blob-num js-line-number" data-line-number="610"></td>
        <td id="LC610" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L611" class="blob-num js-line-number" data-line-number="611"></td>
        <td id="LC611" class="blob-code blob-code-inner js-file-line">            <span class="pl-c">// 拼接factory
																										// invoke所需的arguments</span></td>
      </tr>
      <tr>
        <td id="L612" class="blob-num js-line-number" data-line-number="612"></td>
        <td id="LC612" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> factoryReady <span class="pl-k">=</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L613" class="blob-num js-line-number" data-line-number="613"></td>
        <td id="LC613" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> factoryDeps <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L614" class="blob-num js-line-number" data-line-number="614"></td>
        <td id="LC614" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">each</span>(</td>
      </tr>
      <tr>
        <td id="L615" class="blob-num js-line-number" data-line-number="615"></td>
        <td id="LC615" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">mod</span>.<span class="pl-smi">factoryDeps</span>,</td>
      </tr>
      <tr>
        <td id="L616" class="blob-num js-line-number" data-line-number="616"></td>
        <td id="LC616" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">function</span> (<span class="pl-smi">dep</span>) {</td>
      </tr>
      <tr>
        <td id="L617" class="blob-num js-line-number" data-line-number="617"></td>
        <td id="LC617" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">var</span> depId <span class="pl-k">=</span> <span class="pl-smi">dep</span>.<span class="pl-smi">absId</span>;</td>
      </tr>
      <tr>
        <td id="L618" class="blob-num js-line-number" data-line-number="618"></td>
        <td id="LC618" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L619" class="blob-num js-line-number" data-line-number="619"></td>
        <td id="LC619" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-c1">BUILDIN_MODULE</span>[depId]) {</td>
      </tr>
      <tr>
        <td id="L620" class="blob-num js-line-number" data-line-number="620"></td>
        <td id="LC620" class="blob-code blob-code-inner js-file-line">                        <span class="pl-en">modTryInvokeFactory</span>(depId);</td>
      </tr>
      <tr>
        <td id="L621" class="blob-num js-line-number" data-line-number="621"></td>
        <td id="LC621" class="blob-code blob-code-inner js-file-line">                        <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-en">modIs</span>(depId, <span class="pl-c1">MODULE_DEFINED</span>)) {</td>
      </tr>
      <tr>
        <td id="L622" class="blob-num js-line-number" data-line-number="622"></td>
        <td id="LC622" class="blob-code blob-code-inner js-file-line">                            factoryReady <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L623" class="blob-num js-line-number" data-line-number="623"></td>
        <td id="LC623" class="blob-code blob-code-inner js-file-line">                            <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L624" class="blob-num js-line-number" data-line-number="624"></td>
        <td id="LC624" class="blob-code blob-code-inner js-file-line">                        }</td>
      </tr>
      <tr>
        <td id="L625" class="blob-num js-line-number" data-line-number="625"></td>
        <td id="LC625" class="blob-code blob-code-inner js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L626" class="blob-num js-line-number" data-line-number="626"></td>
        <td id="LC626" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L627" class="blob-num js-line-number" data-line-number="627"></td>
        <td id="LC627" class="blob-code blob-code-inner js-file-line">                    <span class="pl-smi">factoryDeps</span>.<span class="pl-c1">push</span>(depId);</td>
      </tr>
      <tr>
        <td id="L628" class="blob-num js-line-number" data-line-number="628"></td>
        <td id="LC628" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L629" class="blob-num js-line-number" data-line-number="629"></td>
        <td id="LC629" class="blob-code blob-code-inner js-file-line">            );</td>
      </tr>
      <tr>
        <td id="L630" class="blob-num js-line-number" data-line-number="630"></td>
        <td id="LC630" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L631" class="blob-num js-line-number" data-line-number="631"></td>
        <td id="LC631" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (factoryReady) {</td>
      </tr>
      <tr>
        <td id="L632" class="blob-num js-line-number" data-line-number="632"></td>
        <td id="LC632" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">try</span> {</td>
      </tr>
      <tr>
        <td id="L633" class="blob-num js-line-number" data-line-number="633"></td>
        <td id="LC633" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">var</span> args <span class="pl-k">=</span> <span class="pl-en">modGetModulesExports</span>(</td>
      </tr>
      <tr>
        <td id="L634" class="blob-num js-line-number" data-line-number="634"></td>
        <td id="LC634" class="blob-code blob-code-inner js-file-line">                        factoryDeps,</td>
      </tr>
      <tr>
        <td id="L635" class="blob-num js-line-number" data-line-number="635"></td>
        <td id="LC635" class="blob-code blob-code-inner js-file-line">                        {</td>
      </tr>
      <tr>
        <td id="L636" class="blob-num js-line-number" data-line-number="636"></td>
        <td id="LC636" class="blob-code blob-code-inner js-file-line">                            require<span class="pl-k">:</span> <span class="pl-smi">mod</span>.<span class="pl-smi">require</span>,</td>
      </tr>
      <tr>
        <td id="L637" class="blob-num js-line-number" data-line-number="637"></td>
        <td id="LC637" class="blob-code blob-code-inner js-file-line">                            exports<span class="pl-k">:</span> <span class="pl-smi">mod</span>.<span class="pl-smi">exports</span>,</td>
      </tr>
      <tr>
        <td id="L638" class="blob-num js-line-number" data-line-number="638"></td>
        <td id="LC638" class="blob-code blob-code-inner js-file-line">                            module<span class="pl-k">:</span> mod</td>
      </tr>
      <tr>
        <td id="L639" class="blob-num js-line-number" data-line-number="639"></td>
        <td id="LC639" class="blob-code blob-code-inner js-file-line">                        }</td>
      </tr>
      <tr>
        <td id="L640" class="blob-num js-line-number" data-line-number="640"></td>
        <td id="LC640" class="blob-code blob-code-inner js-file-line">                    );</td>
      </tr>
      <tr>
        <td id="L641" class="blob-num js-line-number" data-line-number="641"></td>
        <td id="LC641" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L642" class="blob-num js-line-number" data-line-number="642"></td>
        <td id="LC642" class="blob-code blob-code-inner js-file-line">                    <span class="pl-c">// 调用factory函数初始化module</span></td>
      </tr>
      <tr>
        <td id="L643" class="blob-num js-line-number" data-line-number="643"></td>
        <td id="LC643" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">var</span> factory <span class="pl-k">=</span> <span class="pl-smi">mod</span>.<span class="pl-smi">factory</span>;</td>
      </tr>
      <tr>
        <td id="L644" class="blob-num js-line-number" data-line-number="644"></td>
        <td id="LC644" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">var</span> <span class="pl-c1">exports</span> <span class="pl-k">=</span> <span class="pl-k">typeof</span> factory <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>function<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L645" class="blob-num js-line-number" data-line-number="645"></td>
        <td id="LC645" class="blob-code blob-code-inner js-file-line">                        <span class="pl-k">?</span> <span class="pl-smi">factory</span>.<span class="pl-c1">apply</span>(<span class="pl-c1">global</span>, args)</td>
      </tr>
      <tr>
        <td id="L646" class="blob-num js-line-number" data-line-number="646"></td>
        <td id="LC646" class="blob-code blob-code-inner js-file-line">                        <span class="pl-k">:</span> factory;</td>
      </tr>
      <tr>
        <td id="L647" class="blob-num js-line-number" data-line-number="647"></td>
        <td id="LC647" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L648" class="blob-num js-line-number" data-line-number="648"></td>
        <td id="LC648" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">if</span> (<span class="pl-c1">exports</span> <span class="pl-k">!=</span> <span class="pl-c1">null</span>) {</td>
      </tr>
      <tr>
        <td id="L649" class="blob-num js-line-number" data-line-number="649"></td>
        <td id="LC649" class="blob-code blob-code-inner js-file-line">                        <span class="pl-smi">mod</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> <span class="pl-c1">exports</span>;</td>
      </tr>
      <tr>
        <td id="L650" class="blob-num js-line-number" data-line-number="650"></td>
        <td id="LC650" class="blob-code blob-code-inner js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L651" class="blob-num js-line-number" data-line-number="651"></td>
        <td id="LC651" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L652" class="blob-num js-line-number" data-line-number="652"></td>
        <td id="LC652" class="blob-code blob-code-inner js-file-line">                    <span class="pl-smi">mod</span>.<span class="pl-smi">invokeFactory</span> <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L653" class="blob-num js-line-number" data-line-number="653"></td>
        <td id="LC653" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">delete</span> autoDefineModules[id];</td>
      </tr>
      <tr>
        <td id="L654" class="blob-num js-line-number" data-line-number="654"></td>
        <td id="LC654" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L655" class="blob-num js-line-number" data-line-number="655"></td>
        <td id="LC655" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">catch</span> (ex) {</td>
      </tr>
      <tr>
        <td id="L656" class="blob-num js-line-number" data-line-number="656"></td>
        <td id="LC656" class="blob-code blob-code-inner js-file-line">                    invoking <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L657" class="blob-num js-line-number" data-line-number="657"></td>
        <td id="LC657" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">if</span> (<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-cce">\[</span>MODULE_MISS<span class="pl-cce">\]</span>&quot;(<span class="pl-c1">[<span class="pl-k">^</span>&quot;]</span><span class="pl-k">+</span>)<span class="pl-pds">/</span></span>.<span class="pl-c1">test</span>(<span class="pl-smi">ex</span>.<span class="pl-smi">message</span>)) {</td>
      </tr>
      <tr>
        <td id="L658" class="blob-num js-line-number" data-line-number="658"></td>
        <td id="LC658" class="blob-code blob-code-inner js-file-line">                        <span class="pl-c">// 出错，则说明在factory的运行中，该require的模块是需要的</span></td>
      </tr>
      <tr>
        <td id="L659" class="blob-num js-line-number" data-line-number="659"></td>
        <td id="LC659" class="blob-code blob-code-inner js-file-line">                        <span class="pl-c">// 所以把它加入强依赖中</span></td>
      </tr>
      <tr>
        <td id="L660" class="blob-num js-line-number" data-line-number="660"></td>
        <td id="LC660" class="blob-code blob-code-inner js-file-line">                        <span class="pl-k">var</span> hardCirclurDep <span class="pl-k">=</span> <span class="pl-smi">mod</span>.<span class="pl-smi">depMkv</span>[<span class="pl-c1">RegExp</span>.<span class="pl-smi">$1</span>];</td>
      </tr>
      <tr>
        <td id="L661" class="blob-num js-line-number" data-line-number="661"></td>
        <td id="LC661" class="blob-code blob-code-inner js-file-line">                        hardCirclurDep <span class="pl-k">&amp;&amp;</span> (<span class="pl-smi">hardCirclurDep</span>.<span class="pl-smi">hard</span> <span class="pl-k">=</span> <span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L662" class="blob-num js-line-number" data-line-number="662"></td>
        <td id="LC662" class="blob-code blob-code-inner js-file-line">                        <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L663" class="blob-num js-line-number" data-line-number="663"></td>
        <td id="LC663" class="blob-code blob-code-inner js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L664" class="blob-num js-line-number" data-line-number="664"></td>
        <td id="LC664" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L665" class="blob-num js-line-number" data-line-number="665"></td>
        <td id="LC665" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">throw</span> ex;</td>
      </tr>
      <tr>
        <td id="L666" class="blob-num js-line-number" data-line-number="666"></td>
        <td id="LC666" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L667" class="blob-num js-line-number" data-line-number="667"></td>
        <td id="LC667" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L668" class="blob-num js-line-number" data-line-number="668"></td>
        <td id="LC668" class="blob-code blob-code-inner js-file-line">                <span class="pl-c">// 完成define</span></td>
      </tr>
      <tr>
        <td id="L669" class="blob-num js-line-number" data-line-number="669"></td>
        <td id="LC669" class="blob-code blob-code-inner js-file-line">                <span class="pl-c">// 不放在try里，避免后续的运行错误被这里吞掉</span></td>
      </tr>
      <tr>
        <td id="L670" class="blob-num js-line-number" data-line-number="670"></td>
        <td id="LC670" class="blob-code blob-code-inner js-file-line">                <span class="pl-en">modDefined</span>(id);</td>
      </tr>
      <tr>
        <td id="L671" class="blob-num js-line-number" data-line-number="671"></td>
        <td id="LC671" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L672" class="blob-num js-line-number" data-line-number="672"></td>
        <td id="LC672" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L673" class="blob-num js-line-number" data-line-number="673"></td>
        <td id="LC673" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L674" class="blob-num js-line-number" data-line-number="674"></td>
        <td id="LC674" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L675" class="blob-num js-line-number" data-line-number="675"></td>
        <td id="LC675" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">/**
																								 * </span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L676" class="blob-num js-line-number" data-line-number="676"></td>
																								 * <td id="LC676" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * 判断模块是否完成相应的状态</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L677" class="blob-num js-line-number" data-line-number="677"></td>
																								 * <td id="LC677" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L678" class="blob-num js-line-number" data-line-number="678"></td>
																								 * <td id="LC678" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@inner</span></span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L679" class="blob-num js-line-number" data-line-number="679"></td>
																								 * <td id="LC679" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@param</span>
																								 * <span
																								 * class="pl-en">{string}</span>
																								 * <span
																								 * class="pl-smi">id</span>
																								 * 模块标识</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L680" class="blob-num js-line-number" data-line-number="680"></td>
																								 * <td id="LC680" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@param</span>
																								 * <span
																								 * class="pl-en">{number}</span>
																								 * <span
																								 * class="pl-smi">state</span>
																								 * 状态码，使用时传入相应的枚举变量，比如`MODULE_DEFINED`</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L681" class="blob-num js-line-number" data-line-number="681"></td>
																								 * <td id="LC681" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@return</span>
																								 * {boolean}
																								 * 是否完成相应的状态</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L682" class="blob-num js-line-number" data-line-number="682"></td>
																								 * <td id="LC682" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c">
																								 */</span></td>
      </tr>
      <tr>
        <td id="L683" class="blob-num js-line-number" data-line-number="683"></td>
        <td id="LC683" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">modIs</span>(<span class="pl-smi">id</span>, <span class="pl-smi">state</span>) {</td>
      </tr>
      <tr>
        <td id="L684" class="blob-num js-line-number" data-line-number="684"></td>
        <td id="LC684" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> modModules[id] <span class="pl-k">&amp;&amp;</span> modModules[id].<span class="pl-smi">state</span> <span class="pl-k">&gt;=</span> state;</td>
      </tr>
      <tr>
        <td id="L685" class="blob-num js-line-number" data-line-number="685"></td>
        <td id="LC685" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L686" class="blob-num js-line-number" data-line-number="686"></td>
        <td id="LC686" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L687" class="blob-num js-line-number" data-line-number="687"></td>
        <td id="LC687" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">/**
																								 * </span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L688" class="blob-num js-line-number" data-line-number="688"></td>
																								 * <td id="LC688" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * 尝试执行模块factory函数，进行模块初始化</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L689" class="blob-num js-line-number" data-line-number="689"></td>
																								 * <td id="LC689" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L690" class="blob-num js-line-number" data-line-number="690"></td>
																								 * <td id="LC690" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@inner</span></span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L691" class="blob-num js-line-number" data-line-number="691"></td>
																								 * <td id="LC691" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@param</span>
																								 * <span
																								 * class="pl-en">{string}</span>
																								 * <span
																								 * class="pl-smi">id</span>
																								 * 模块id</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L692" class="blob-num js-line-number" data-line-number="692"></td>
																								 * <td id="LC692" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c">
																								 */</span></td>
      </tr>
      <tr>
        <td id="L693" class="blob-num js-line-number" data-line-number="693"></td>
        <td id="LC693" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">modTryInvokeFactory</span>(<span class="pl-smi">id</span>) {</td>
      </tr>
      <tr>
        <td id="L694" class="blob-num js-line-number" data-line-number="694"></td>
        <td id="LC694" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> mod <span class="pl-k">=</span> modModules[id];</td>
      </tr>
      <tr>
        <td id="L695" class="blob-num js-line-number" data-line-number="695"></td>
        <td id="LC695" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L696" class="blob-num js-line-number" data-line-number="696"></td>
        <td id="LC696" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (mod <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">mod</span>.<span class="pl-smi">invokeFactory</span>) {</td>
      </tr>
      <tr>
        <td id="L697" class="blob-num js-line-number" data-line-number="697"></td>
        <td id="LC697" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">mod</span>.<span class="pl-en">invokeFactory</span>();</td>
      </tr>
      <tr>
        <td id="L698" class="blob-num js-line-number" data-line-number="698"></td>
        <td id="LC698" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L699" class="blob-num js-line-number" data-line-number="699"></td>
        <td id="LC699" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L700" class="blob-num js-line-number" data-line-number="700"></td>
        <td id="LC700" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L701" class="blob-num js-line-number" data-line-number="701"></td>
        <td id="LC701" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">/**
																								 * </span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L702" class="blob-num js-line-number" data-line-number="702"></td>
																								 * <td id="LC702" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * 根据模块id数组，获取其的exports数组</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L703" class="blob-num js-line-number" data-line-number="703"></td>
																								 * <td id="LC703" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * 用于模块初始化的factory参数或require的callback参数生成</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L704" class="blob-num js-line-number" data-line-number="704"></td>
																								 * <td id="LC704" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L705" class="blob-num js-line-number" data-line-number="705"></td>
																								 * <td id="LC705" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@inner</span></span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L706" class="blob-num js-line-number" data-line-number="706"></td>
																								 * <td id="LC706" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@param</span>
																								 * <span
																								 * class="pl-en">{Array}</span>
																								 * <span
																								 * class="pl-smi">modules</span>
																								 * 模块id数组</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L707" class="blob-num js-line-number" data-line-number="707"></td>
																								 * <td id="LC707" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@param</span>
																								 * <span
																								 * class="pl-en">{Object}</span>
																								 * <span
																								 * class="pl-smi">buildinModules</span>
																								 * 内建模块对象</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L708" class="blob-num js-line-number" data-line-number="708"></td>
																								 * <td id="LC708" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@return</span>
																								 * {Array}
																								 * 模块exports数组</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L709" class="blob-num js-line-number" data-line-number="709"></td>
																								 * <td id="LC709" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c">
																								 */</span></td>
      </tr>
      <tr>
        <td id="L710" class="blob-num js-line-number" data-line-number="710"></td>
        <td id="LC710" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">modGetModulesExports</span>(<span class="pl-smi">modules</span>, <span class="pl-smi">buildinModules</span>) {</td>
      </tr>
      <tr>
        <td id="L711" class="blob-num js-line-number" data-line-number="711"></td>
        <td id="LC711" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> args <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L712" class="blob-num js-line-number" data-line-number="712"></td>
        <td id="LC712" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">each</span>(</td>
      </tr>
      <tr>
        <td id="L713" class="blob-num js-line-number" data-line-number="713"></td>
        <td id="LC713" class="blob-code blob-code-inner js-file-line">            modules,</td>
      </tr>
      <tr>
        <td id="L714" class="blob-num js-line-number" data-line-number="714"></td>
        <td id="LC714" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">function</span> (<span class="pl-smi">id</span>, <span class="pl-smi">index</span>) {</td>
      </tr>
      <tr>
        <td id="L715" class="blob-num js-line-number" data-line-number="715"></td>
        <td id="LC715" class="blob-code blob-code-inner js-file-line">                args[index] <span class="pl-k">=</span> buildinModules[id] <span class="pl-k">||</span> <span class="pl-en">modGetModuleExports</span>(id);</td>
      </tr>
      <tr>
        <td id="L716" class="blob-num js-line-number" data-line-number="716"></td>
        <td id="LC716" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L717" class="blob-num js-line-number" data-line-number="717"></td>
        <td id="LC717" class="blob-code blob-code-inner js-file-line">        );</td>
      </tr>
      <tr>
        <td id="L718" class="blob-num js-line-number" data-line-number="718"></td>
        <td id="LC718" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L719" class="blob-num js-line-number" data-line-number="719"></td>
        <td id="LC719" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> args;</td>
      </tr>
      <tr>
        <td id="L720" class="blob-num js-line-number" data-line-number="720"></td>
        <td id="LC720" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L721" class="blob-num js-line-number" data-line-number="721"></td>
        <td id="LC721" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L722" class="blob-num js-line-number" data-line-number="722"></td>
        <td id="LC722" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">/**
																								 * </span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L723" class="blob-num js-line-number" data-line-number="723"></td>
																								 * <td id="LC723" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * 模块定义完成事件监听器容器</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L724" class="blob-num js-line-number" data-line-number="724"></td>
																								 * <td id="LC724" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L725" class="blob-num js-line-number" data-line-number="725"></td>
																								 * <td id="LC725" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@inner</span></span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L726" class="blob-num js-line-number" data-line-number="726"></td>
																								 * <td id="LC726" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@type</span>
																								 * {Object}</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L727" class="blob-num js-line-number" data-line-number="727"></td>
																								 * <td id="LC727" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c">
																								 */</span></td>
      </tr>
      <tr>
        <td id="L728" class="blob-num js-line-number" data-line-number="728"></td>
        <td id="LC728" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> modDefinedListeners <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L729" class="blob-num js-line-number" data-line-number="729"></td>
        <td id="LC729" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L730" class="blob-num js-line-number" data-line-number="730"></td>
        <td id="LC730" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">/**
																								 * </span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L731" class="blob-num js-line-number" data-line-number="731"></td>
																								 * <td id="LC731" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * 添加模块定义完成时间的监听器</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L732" class="blob-num js-line-number" data-line-number="732"></td>
																								 * <td id="LC732" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L733" class="blob-num js-line-number" data-line-number="733"></td>
																								 * <td id="LC733" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@inner</span></span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L734" class="blob-num js-line-number" data-line-number="734"></td>
																								 * <td id="LC734" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@param</span>
																								 * <span
																								 * class="pl-en">{string}</span>
																								 * <span
																								 * class="pl-smi">id</span>
																								 * 模块标识</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L735" class="blob-num js-line-number" data-line-number="735"></td>
																								 * <td id="LC735" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@param</span>
																								 * <span
																								 * class="pl-en">{Function}</span>
																								 * <span
																								 * class="pl-smi">listener</span>
																								 * 监听函数</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L736" class="blob-num js-line-number" data-line-number="736"></td>
																								 * <td id="LC736" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c">
																								 */</span></td>
      </tr>
      <tr>
        <td id="L737" class="blob-num js-line-number" data-line-number="737"></td>
        <td id="LC737" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">modAddDefinedListener</span>(<span class="pl-smi">id</span>, <span class="pl-smi">listener</span>) {</td>
      </tr>
      <tr>
        <td id="L738" class="blob-num js-line-number" data-line-number="738"></td>
        <td id="LC738" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-en">modIs</span>(id, <span class="pl-c1">MODULE_DEFINED</span>)) {</td>
      </tr>
      <tr>
        <td id="L739" class="blob-num js-line-number" data-line-number="739"></td>
        <td id="LC739" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">listener</span>();</td>
      </tr>
      <tr>
        <td id="L740" class="blob-num js-line-number" data-line-number="740"></td>
        <td id="LC740" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L741" class="blob-num js-line-number" data-line-number="741"></td>
        <td id="LC741" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L742" class="blob-num js-line-number" data-line-number="742"></td>
        <td id="LC742" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L743" class="blob-num js-line-number" data-line-number="743"></td>
        <td id="LC743" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> listeners <span class="pl-k">=</span> modDefinedListeners[id];</td>
      </tr>
      <tr>
        <td id="L744" class="blob-num js-line-number" data-line-number="744"></td>
        <td id="LC744" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-k">!</span>listeners) {</td>
      </tr>
      <tr>
        <td id="L745" class="blob-num js-line-number" data-line-number="745"></td>
        <td id="LC745" class="blob-code blob-code-inner js-file-line">            listeners <span class="pl-k">=</span> modDefinedListeners[id] <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L746" class="blob-num js-line-number" data-line-number="746"></td>
        <td id="LC746" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L747" class="blob-num js-line-number" data-line-number="747"></td>
        <td id="LC747" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L748" class="blob-num js-line-number" data-line-number="748"></td>
        <td id="LC748" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">listeners</span>.<span class="pl-c1">push</span>(listener);</td>
      </tr>
      <tr>
        <td id="L749" class="blob-num js-line-number" data-line-number="749"></td>
        <td id="LC749" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L750" class="blob-num js-line-number" data-line-number="750"></td>
        <td id="LC750" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L751" class="blob-num js-line-number" data-line-number="751"></td>
        <td id="LC751" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">/**
																								 * </span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L752" class="blob-num js-line-number" data-line-number="752"></td>
																								 * <td id="LC752" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * 模块状态切换为定义完成</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L753" class="blob-num js-line-number" data-line-number="753"></td>
																								 * <td id="LC753" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * 因为需要触发事件，MODULE_DEFINED状态切换通过该函数</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L754" class="blob-num js-line-number" data-line-number="754"></td>
																								 * <td id="LC754" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L755" class="blob-num js-line-number" data-line-number="755"></td>
																								 * <td id="LC755" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@inner</span></span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L756" class="blob-num js-line-number" data-line-number="756"></td>
																								 * <td id="LC756" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@param</span>
																								 * <span
																								 * class="pl-en">{string}</span>
																								 * <span
																								 * class="pl-smi">id</span>
																								 * 模块标识</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L757" class="blob-num js-line-number" data-line-number="757"></td>
																								 * <td id="LC757" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c">
																								 */</span></td>
      </tr>
      <tr>
        <td id="L758" class="blob-num js-line-number" data-line-number="758"></td>
        <td id="LC758" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">modDefined</span>(<span class="pl-smi">id</span>) {</td>
      </tr>
      <tr>
        <td id="L759" class="blob-num js-line-number" data-line-number="759"></td>
        <td id="LC759" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> listeners <span class="pl-k">=</span> modDefinedListeners[id] <span class="pl-k">||</span> [];</td>
      </tr>
      <tr>
        <td id="L760" class="blob-num js-line-number" data-line-number="760"></td>
        <td id="LC760" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> mod <span class="pl-k">=</span> modModules[id];</td>
      </tr>
      <tr>
        <td id="L761" class="blob-num js-line-number" data-line-number="761"></td>
        <td id="LC761" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">mod</span>.<span class="pl-smi">state</span> <span class="pl-k">=</span> <span class="pl-c1">MODULE_DEFINED</span>;</td>
      </tr>
      <tr>
        <td id="L762" class="blob-num js-line-number" data-line-number="762"></td>
        <td id="LC762" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L763" class="blob-num js-line-number" data-line-number="763"></td>
        <td id="LC763" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> len <span class="pl-k">=</span> <span class="pl-smi">listeners</span>.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L764" class="blob-num js-line-number" data-line-number="764"></td>
        <td id="LC764" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">while</span> (len<span class="pl-k">--</span>) {</td>
      </tr>
      <tr>
        <td id="L765" class="blob-num js-line-number" data-line-number="765"></td>
        <td id="LC765" class="blob-code blob-code-inner js-file-line">            <span class="pl-c">// 这里不做function类型的检测</span></td>
      </tr>
      <tr>
        <td id="L766" class="blob-num js-line-number" data-line-number="766"></td>
        <td id="LC766" class="blob-code blob-code-inner js-file-line">            <span class="pl-c">// 因为listener都是通过modOn传入的，modOn为内部调用</span></td>
      </tr>
      <tr>
        <td id="L767" class="blob-num js-line-number" data-line-number="767"></td>
        <td id="LC767" class="blob-code blob-code-inner js-file-line">            listeners[len]();</td>
      </tr>
      <tr>
        <td id="L768" class="blob-num js-line-number" data-line-number="768"></td>
        <td id="LC768" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L769" class="blob-num js-line-number" data-line-number="769"></td>
        <td id="LC769" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L770" class="blob-num js-line-number" data-line-number="770"></td>
        <td id="LC770" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// 清理listeners</span></td>
      </tr>
      <tr>
        <td id="L771" class="blob-num js-line-number" data-line-number="771"></td>
        <td id="LC771" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">listeners</span>.<span class="pl-c1">length</span> <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L772" class="blob-num js-line-number" data-line-number="772"></td>
        <td id="LC772" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">delete</span> modDefinedListeners[id];</td>
      </tr>
      <tr>
        <td id="L773" class="blob-num js-line-number" data-line-number="773"></td>
        <td id="LC773" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L774" class="blob-num js-line-number" data-line-number="774"></td>
        <td id="LC774" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L775" class="blob-num js-line-number" data-line-number="775"></td>
        <td id="LC775" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">/**
																								 * </span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L776" class="blob-num js-line-number" data-line-number="776"></td>
																								 * <td id="LC776" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * 获取模块的exports</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L777" class="blob-num js-line-number" data-line-number="777"></td>
																								 * <td id="LC777" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L778" class="blob-num js-line-number" data-line-number="778"></td>
																								 * <td id="LC778" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@inner</span></span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L779" class="blob-num js-line-number" data-line-number="779"></td>
																								 * <td id="LC779" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@param</span>
																								 * <span
																								 * class="pl-en">{string}</span>
																								 * <span
																								 * class="pl-smi">id</span>
																								 * 模块标识</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L780" class="blob-num js-line-number" data-line-number="780"></td>
																								 * <td id="LC780" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@return</span>
																								 * {*}
																								 * 模块的exports</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L781" class="blob-num js-line-number" data-line-number="781"></td>
																								 * <td id="LC781" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c">
																								 */</span></td>
      </tr>
      <tr>
        <td id="L782" class="blob-num js-line-number" data-line-number="782"></td>
        <td id="LC782" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">modGetModuleExports</span>(<span class="pl-smi">id</span>) {</td>
      </tr>
      <tr>
        <td id="L783" class="blob-num js-line-number" data-line-number="783"></td>
        <td id="LC783" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-en">modIs</span>(id, <span class="pl-c1">MODULE_DEFINED</span>)) {</td>
      </tr>
      <tr>
        <td id="L784" class="blob-num js-line-number" data-line-number="784"></td>
        <td id="LC784" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> modModules[id].<span class="pl-smi">exports</span>;</td>
      </tr>
      <tr>
        <td id="L785" class="blob-num js-line-number" data-line-number="785"></td>
        <td id="LC785" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L786" class="blob-num js-line-number" data-line-number="786"></td>
        <td id="LC786" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L787" class="blob-num js-line-number" data-line-number="787"></td>
        <td id="LC787" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L788" class="blob-num js-line-number" data-line-number="788"></td>
        <td id="LC788" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L789" class="blob-num js-line-number" data-line-number="789"></td>
        <td id="LC789" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L790" class="blob-num js-line-number" data-line-number="790"></td>
        <td id="LC790" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">/**
																								 * </span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L791" class="blob-num js-line-number" data-line-number="791"></td>
																								 * <td id="LC791" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * 获取模块</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L792" class="blob-num js-line-number" data-line-number="792"></td>
																								 * <td id="LC792" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L793" class="blob-num js-line-number" data-line-number="793"></td>
																								 * <td id="LC793" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@param</span>
																								 * {string|Array}
																								 * ids
																								 * 模块名称或模块名称列表</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L794" class="blob-num js-line-number" data-line-number="794"></td>
																								 * <td id="LC794" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@param</span>
																								 * {Function=}
																								 * callback
																								 * 获取模块完成时的回调函数</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L795" class="blob-num js-line-number" data-line-number="795"></td>
																								 * <td id="LC795" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@param</span>
																								 * <span
																								 * class="pl-en">{string}</span>
																								 * <span
																								 * class="pl-smi">baseId</span>
																								 * 基础id，用于当ids是relative
																								 * id时的normalize</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L796" class="blob-num js-line-number" data-line-number="796"></td>
																								 * <td id="LC796" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@param</span>
																								 * <span
																								 * class="pl-en">{Object}</span>
																								 * <span
																								 * class="pl-smi">noRequests</span>
																								 * 无需发起请求的模块集合</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L797" class="blob-num js-line-number" data-line-number="797"></td>
																								 * <td id="LC797" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@return</span>
																								 * {Object}
																								 * 模块对象</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L798" class="blob-num js-line-number" data-line-number="798"></td>
																								 * <td id="LC798" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c">
																								 */</span></td>
      </tr>
      <tr>
        <td id="L799" class="blob-num js-line-number" data-line-number="799"></td>
        <td id="LC799" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">nativeRequire</span>(<span class="pl-smi">ids</span>, <span class="pl-smi">callback</span>, <span class="pl-smi">baseId</span>, <span class="pl-smi">noRequests</span>) {</td>
      </tr>
      <tr>
        <td id="L800" class="blob-num js-line-number" data-line-number="800"></td>
        <td id="LC800" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// 根据
																									// https://github.com/amdjs/amdjs-api/wiki/require</span></td>
      </tr>
      <tr>
        <td id="L801" class="blob-num js-line-number" data-line-number="801"></td>
        <td id="LC801" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// It
																									// MUST
																									// throw
																									// an
																									// error
																									// if
																									// the
																									// module
																									// has
																									// not</span></td>
      </tr>
      <tr>
        <td id="L802" class="blob-num js-line-number" data-line-number="802"></td>
        <td id="LC802" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// already
																									// been
																									// loaded
																									// and
																									// evaluated.</span></td>
      </tr>
      <tr>
        <td id="L803" class="blob-num js-line-number" data-line-number="803"></td>
        <td id="LC803" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-k">typeof</span> ids <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>string<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L804" class="blob-num js-line-number" data-line-number="804"></td>
        <td id="LC804" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">modTryInvokeFactory</span>(ids);</td>
      </tr>
      <tr>
        <td id="L805" class="blob-num js-line-number" data-line-number="805"></td>
        <td id="LC805" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-en">modIs</span>(ids, <span class="pl-c1">MODULE_DEFINED</span>)) {</td>
      </tr>
      <tr>
        <td id="L806" class="blob-num js-line-number" data-line-number="806"></td>
        <td id="LC806" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">Error</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>[MODULE_MISS]&quot;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> ids <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&quot; is not exists!<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L807" class="blob-num js-line-number" data-line-number="807"></td>
        <td id="LC807" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L808" class="blob-num js-line-number" data-line-number="808"></td>
        <td id="LC808" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L809" class="blob-num js-line-number" data-line-number="809"></td>
        <td id="LC809" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-en">modGetModuleExports</span>(ids);</td>
      </tr>
      <tr>
        <td id="L810" class="blob-num js-line-number" data-line-number="810"></td>
        <td id="LC810" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L811" class="blob-num js-line-number" data-line-number="811"></td>
        <td id="LC811" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L812" class="blob-num js-line-number" data-line-number="812"></td>
        <td id="LC812" class="blob-code blob-code-inner js-file-line">        noRequests <span class="pl-k">=</span> noRequests <span class="pl-k">||</span> {};</td>
      </tr>
      <tr>
        <td id="L813" class="blob-num js-line-number" data-line-number="813"></td>
        <td id="LC813" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> isCallbackCalled <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L814" class="blob-num js-line-number" data-line-number="814"></td>
        <td id="LC814" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (ids <span class="pl-k">instanceof</span> <span class="pl-c1">Array</span>) {</td>
      </tr>
      <tr>
        <td id="L815" class="blob-num js-line-number" data-line-number="815"></td>
        <td id="LC815" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">tryFinishRequire</span>();</td>
      </tr>
      <tr>
        <td id="L816" class="blob-num js-line-number" data-line-number="816"></td>
        <td id="LC816" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L817" class="blob-num js-line-number" data-line-number="817"></td>
        <td id="LC817" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-k">!</span>isCallbackCalled) {</td>
      </tr>
      <tr>
        <td id="L818" class="blob-num js-line-number" data-line-number="818"></td>
        <td id="LC818" class="blob-code blob-code-inner js-file-line">                <span class="pl-en">each</span>(ids, <span class="pl-k">function</span> (<span class="pl-smi">id</span>) {</td>
      </tr>
      <tr>
        <td id="L819" class="blob-num js-line-number" data-line-number="819"></td>
        <td id="LC819" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">if</span> (<span class="pl-k">!</span>(<span class="pl-c1">BUILDIN_MODULE</span>[id] <span class="pl-k">||</span> <span class="pl-en">modIs</span>(id, <span class="pl-c1">MODULE_DEFINED</span>))) {</td>
      </tr>
      <tr>
        <td id="L820" class="blob-num js-line-number" data-line-number="820"></td>
        <td id="LC820" class="blob-code blob-code-inner js-file-line">                        <span class="pl-en">modAddDefinedListener</span>(id, tryFinishRequire);</td>
      </tr>
      <tr>
        <td id="L821" class="blob-num js-line-number" data-line-number="821"></td>
        <td id="LC821" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L822" class="blob-num js-line-number" data-line-number="822"></td>
        <td id="LC822" class="blob-code blob-code-inner js-file-line">                        <span class="pl-k">if</span> (<span class="pl-k">!</span>noRequests[id]) {</td>
      </tr>
      <tr>
        <td id="L823" class="blob-num js-line-number" data-line-number="823"></td>
        <td id="LC823" class="blob-code blob-code-inner js-file-line">                            (<span class="pl-smi">id</span>.<span class="pl-c1">indexOf</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>!<span class="pl-pds">&#39;</span></span>) <span class="pl-k">&gt;</span> <span class="pl-c1">0</span></td>
      </tr>
      <tr>
        <td id="L824" class="blob-num js-line-number" data-line-number="824"></td>
        <td id="LC824" class="blob-code blob-code-inner js-file-line">                                <span class="pl-k">?</span> loadResource</td>
      </tr>
      <tr>
        <td id="L825" class="blob-num js-line-number" data-line-number="825"></td>
        <td id="LC825" class="blob-code blob-code-inner js-file-line">                                <span class="pl-k">:</span> loadModule</td>
      </tr>
      <tr>
        <td id="L826" class="blob-num js-line-number" data-line-number="826"></td>
        <td id="LC826" class="blob-code blob-code-inner js-file-line">                            )(id, baseId);</td>
      </tr>
      <tr>
        <td id="L827" class="blob-num js-line-number" data-line-number="827"></td>
        <td id="LC827" class="blob-code blob-code-inner js-file-line">                        }</td>
      </tr>
      <tr>
        <td id="L828" class="blob-num js-line-number" data-line-number="828"></td>
        <td id="LC828" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L829" class="blob-num js-line-number" data-line-number="829"></td>
        <td id="LC829" class="blob-code blob-code-inner js-file-line">                        <span class="pl-en">modAnalyse</span>(id);</td>
      </tr>
      <tr>
        <td id="L830" class="blob-num js-line-number" data-line-number="830"></td>
        <td id="LC830" class="blob-code blob-code-inner js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L831" class="blob-num js-line-number" data-line-number="831"></td>
        <td id="LC831" class="blob-code blob-code-inner js-file-line">                });</td>
      </tr>
      <tr>
        <td id="L832" class="blob-num js-line-number" data-line-number="832"></td>
        <td id="LC832" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L833" class="blob-num js-line-number" data-line-number="833"></td>
        <td id="LC833" class="blob-code blob-code-inner js-file-line">                <span class="pl-en">modAutoInvoke</span>();</td>
      </tr>
      <tr>
        <td id="L834" class="blob-num js-line-number" data-line-number="834"></td>
        <td id="LC834" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L835" class="blob-num js-line-number" data-line-number="835"></td>
        <td id="LC835" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L836" class="blob-num js-line-number" data-line-number="836"></td>
        <td id="LC836" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L837" class="blob-num js-line-number" data-line-number="837"></td>
        <td id="LC837" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">/**
																									 * </span></td>
																									 * </tr>
																									 * <tr>
																									 * <td id="L838" class="blob-num js-line-number" data-line-number="838"></td>
																									 * <td id="LC838" class="blob-code blob-code-inner js-file-line"><span
																									 * class="pl-c"> *
																									 * 尝试完成require，调用callback</span></td>
																									 * </tr>
																									 * <tr>
																									 * <td id="L839" class="blob-num js-line-number" data-line-number="839"></td>
																									 * <td id="LC839" class="blob-code blob-code-inner js-file-line"><span
																									 * class="pl-c"> *
																									 * 在模块与其依赖模块都加载完时调用</span></td>
																									 * </tr>
																									 * <tr>
																									 * <td id="L840" class="blob-num js-line-number" data-line-number="840"></td>
																									 * <td id="LC840" class="blob-code blob-code-inner js-file-line"><span
																									 * class="pl-c"> *</span></td>
																									 * </tr>
																									 * <tr>
																									 * <td id="L841" class="blob-num js-line-number" data-line-number="841"></td>
																									 * <td id="LC841" class="blob-code blob-code-inner js-file-line"><span
																									 * class="pl-c"> *
																									 * <span
																									 * class="pl-k">@inner</span></span></td>
																									 * </tr>
																									 * <tr>
																									 * <td id="L842" class="blob-num js-line-number" data-line-number="842"></td>
																									 * <td id="LC842" class="blob-code blob-code-inner js-file-line"><span
																									 * class="pl-c">
																									 */</span></td>
      </tr>
      <tr>
        <td id="L843" class="blob-num js-line-number" data-line-number="843"></td>
        <td id="LC843" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">function</span> <span class="pl-en">tryFinishRequire</span>() {</td>
      </tr>
      <tr>
        <td id="L844" class="blob-num js-line-number" data-line-number="844"></td>
        <td id="LC844" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-k">!</span>isCallbackCalled) {</td>
      </tr>
      <tr>
        <td id="L845" class="blob-num js-line-number" data-line-number="845"></td>
        <td id="LC845" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> isAllCompleted <span class="pl-k">=</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L846" class="blob-num js-line-number" data-line-number="846"></td>
        <td id="LC846" class="blob-code blob-code-inner js-file-line">                <span class="pl-en">each</span>(ids, <span class="pl-k">function</span> (<span class="pl-smi">id</span>) {</td>
      </tr>
      <tr>
        <td id="L847" class="blob-num js-line-number" data-line-number="847"></td>
        <td id="LC847" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-c1">BUILDIN_MODULE</span>[id]) {</td>
      </tr>
      <tr>
        <td id="L848" class="blob-num js-line-number" data-line-number="848"></td>
        <td id="LC848" class="blob-code blob-code-inner js-file-line">                        <span class="pl-k">return</span> (isAllCompleted <span class="pl-k">=</span> <span class="pl-k">!!</span><span class="pl-en">modIs</span>(id, <span class="pl-c1">MODULE_DEFINED</span>));</td>
      </tr>
      <tr>
        <td id="L849" class="blob-num js-line-number" data-line-number="849"></td>
        <td id="LC849" class="blob-code blob-code-inner js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L850" class="blob-num js-line-number" data-line-number="850"></td>
        <td id="LC850" class="blob-code blob-code-inner js-file-line">                });</td>
      </tr>
      <tr>
        <td id="L851" class="blob-num js-line-number" data-line-number="851"></td>
        <td id="LC851" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L852" class="blob-num js-line-number" data-line-number="852"></td>
        <td id="LC852" class="blob-code blob-code-inner js-file-line">                <span class="pl-c">// 检测并调用callback</span></td>
      </tr>
      <tr>
        <td id="L853" class="blob-num js-line-number" data-line-number="853"></td>
        <td id="LC853" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> (isAllCompleted) {</td>
      </tr>
      <tr>
        <td id="L854" class="blob-num js-line-number" data-line-number="854"></td>
        <td id="LC854" class="blob-code blob-code-inner js-file-line">                    isCallbackCalled <span class="pl-k">=</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L855" class="blob-num js-line-number" data-line-number="855"></td>
        <td id="LC855" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L856" class="blob-num js-line-number" data-line-number="856"></td>
        <td id="LC856" class="blob-code blob-code-inner js-file-line">                    (<span class="pl-k">typeof</span> callback <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>function<span class="pl-pds">&#39;</span></span>) <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">callback</span>.<span class="pl-c1">apply</span>(</td>
      </tr>
      <tr>
        <td id="L857" class="blob-num js-line-number" data-line-number="857"></td>
        <td id="LC857" class="blob-code blob-code-inner js-file-line">                        <span class="pl-c1">global</span>,</td>
      </tr>
      <tr>
        <td id="L858" class="blob-num js-line-number" data-line-number="858"></td>
        <td id="LC858" class="blob-code blob-code-inner js-file-line">                        <span class="pl-en">modGetModulesExports</span>(ids, <span class="pl-c1">BUILDIN_MODULE</span>)</td>
      </tr>
      <tr>
        <td id="L859" class="blob-num js-line-number" data-line-number="859"></td>
        <td id="LC859" class="blob-code blob-code-inner js-file-line">                    );</td>
      </tr>
      <tr>
        <td id="L860" class="blob-num js-line-number" data-line-number="860"></td>
        <td id="LC860" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L861" class="blob-num js-line-number" data-line-number="861"></td>
        <td id="LC861" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L862" class="blob-num js-line-number" data-line-number="862"></td>
        <td id="LC862" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L863" class="blob-num js-line-number" data-line-number="863"></td>
        <td id="LC863" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L864" class="blob-num js-line-number" data-line-number="864"></td>
        <td id="LC864" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L865" class="blob-num js-line-number" data-line-number="865"></td>
        <td id="LC865" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">/**
																								 * </span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L866" class="blob-num js-line-number" data-line-number="866"></td>
																								 * <td id="LC866" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * 正在加载的模块列表</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L867" class="blob-num js-line-number" data-line-number="867"></td>
																								 * <td id="LC867" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L868" class="blob-num js-line-number" data-line-number="868"></td>
																								 * <td id="LC868" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@inner</span></span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L869" class="blob-num js-line-number" data-line-number="869"></td>
																								 * <td id="LC869" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@type</span>
																								 * {Object}</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L870" class="blob-num js-line-number" data-line-number="870"></td>
																								 * <td id="LC870" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c">
																								 */</span></td>
      </tr>
      <tr>
        <td id="L871" class="blob-num js-line-number" data-line-number="871"></td>
        <td id="LC871" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> loadingModules <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L872" class="blob-num js-line-number" data-line-number="872"></td>
        <td id="LC872" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L873" class="blob-num js-line-number" data-line-number="873"></td>
        <td id="LC873" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">/**
																								 * </span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L874" class="blob-num js-line-number" data-line-number="874"></td>
																								 * <td id="LC874" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * 加载模块</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L875" class="blob-num js-line-number" data-line-number="875"></td>
																								 * <td id="LC875" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L876" class="blob-num js-line-number" data-line-number="876"></td>
																								 * <td id="LC876" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@inner</span></span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L877" class="blob-num js-line-number" data-line-number="877"></td>
																								 * <td id="LC877" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@param</span>
																								 * <span
																								 * class="pl-en">{string}</span>
																								 * <span
																								 * class="pl-smi">moduleId</span>
																								 * 模块标识</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L878" class="blob-num js-line-number" data-line-number="878"></td>
																								 * <td id="LC878" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c">
																								 */</span></td>
      </tr>
      <tr>
        <td id="L879" class="blob-num js-line-number" data-line-number="879"></td>
        <td id="LC879" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">loadModule</span>(<span class="pl-smi">moduleId</span>) {</td>
      </tr>
      <tr>
        <td id="L880" class="blob-num js-line-number" data-line-number="880"></td>
        <td id="LC880" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (loadingModules[moduleId] <span class="pl-k">||</span> modModules[moduleId]) {</td>
      </tr>
      <tr>
        <td id="L881" class="blob-num js-line-number" data-line-number="881"></td>
        <td id="LC881" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L882" class="blob-num js-line-number" data-line-number="882"></td>
        <td id="LC882" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L883" class="blob-num js-line-number" data-line-number="883"></td>
        <td id="LC883" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L884" class="blob-num js-line-number" data-line-number="884"></td>
        <td id="LC884" class="blob-code blob-code-inner js-file-line">        loadingModules[moduleId] <span class="pl-k">=</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L885" class="blob-num js-line-number" data-line-number="885"></td>
        <td id="LC885" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L886" class="blob-num js-line-number" data-line-number="886"></td>
        <td id="LC886" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// 创建script标签</span></td>
      </tr>
      <tr>
        <td id="L887" class="blob-num js-line-number" data-line-number="887"></td>
        <td id="LC887" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// </span></td>
      </tr>
      <tr>
        <td id="L888" class="blob-num js-line-number" data-line-number="888"></td>
        <td id="LC888" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// 这里不挂接onerror的错误处理</span></td>
      </tr>
      <tr>
        <td id="L889" class="blob-num js-line-number" data-line-number="889"></td>
        <td id="LC889" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// 因为高级浏览器在devtool的console面板会报错</span></td>
      </tr>
      <tr>
        <td id="L890" class="blob-num js-line-number" data-line-number="890"></td>
        <td id="LC890" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// 再throw一个Error多此一举了</span></td>
      </tr>
      <tr>
        <td id="L891" class="blob-num js-line-number" data-line-number="891"></td>
        <td id="LC891" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> script <span class="pl-k">=</span> <span class="pl-c1">document</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>script<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L892" class="blob-num js-line-number" data-line-number="892"></td>
        <td id="LC892" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">script</span>.<span class="pl-c1">setAttribute</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>data-require-id<span class="pl-pds">&#39;</span></span>, moduleId);</td>
      </tr>
      <tr>
        <td id="L893" class="blob-num js-line-number" data-line-number="893"></td>
        <td id="LC893" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">script</span>.<span class="pl-smi">src</span> <span class="pl-k">=</span> <span class="pl-en">toUrl</span>(moduleId <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>.js<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L894" class="blob-num js-line-number" data-line-number="894"></td>
        <td id="LC894" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">script</span>.<span class="pl-smi">async</span> <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L895" class="blob-num js-line-number" data-line-number="895"></td>
        <td id="LC895" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-smi">script</span>.<span class="pl-c1">readyState</span>) {</td>
      </tr>
      <tr>
        <td id="L896" class="blob-num js-line-number" data-line-number="896"></td>
        <td id="LC896" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">script</span>.<span class="pl-c1">onreadystatechange</span> <span class="pl-k">=</span> loadedListener;</td>
      </tr>
      <tr>
        <td id="L897" class="blob-num js-line-number" data-line-number="897"></td>
        <td id="LC897" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L898" class="blob-num js-line-number" data-line-number="898"></td>
        <td id="LC898" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L899" class="blob-num js-line-number" data-line-number="899"></td>
        <td id="LC899" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">script</span>.<span class="pl-smi">onload</span> <span class="pl-k">=</span> loadedListener;</td>
      </tr>
      <tr>
        <td id="L900" class="blob-num js-line-number" data-line-number="900"></td>
        <td id="LC900" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L901" class="blob-num js-line-number" data-line-number="901"></td>
        <td id="LC901" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">appendScript</span>(script);</td>
      </tr>
      <tr>
        <td id="L902" class="blob-num js-line-number" data-line-number="902"></td>
        <td id="LC902" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L903" class="blob-num js-line-number" data-line-number="903"></td>
        <td id="LC903" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">/**
																									 * </span></td>
																									 * </tr>
																									 * <tr>
																									 * <td id="L904" class="blob-num js-line-number" data-line-number="904"></td>
																									 * <td id="LC904" class="blob-code blob-code-inner js-file-line"><span
																									 * class="pl-c"> *
																									 * script标签加载完成的事件处理函数</span></td>
																									 * </tr>
																									 * <tr>
																									 * <td id="L905" class="blob-num js-line-number" data-line-number="905"></td>
																									 * <td id="LC905" class="blob-code blob-code-inner js-file-line"><span
																									 * class="pl-c"> *</span></td>
																									 * </tr>
																									 * <tr>
																									 * <td id="L906" class="blob-num js-line-number" data-line-number="906"></td>
																									 * <td id="LC906" class="blob-code blob-code-inner js-file-line"><span
																									 * class="pl-c"> *
																									 * <span
																									 * class="pl-k">@inner</span></span></td>
																									 * </tr>
																									 * <tr>
																									 * <td id="L907" class="blob-num js-line-number" data-line-number="907"></td>
																									 * <td id="LC907" class="blob-code blob-code-inner js-file-line"><span
																									 * class="pl-c">
																									 */</span></td>
      </tr>
      <tr>
        <td id="L908" class="blob-num js-line-number" data-line-number="908"></td>
        <td id="LC908" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">function</span> <span class="pl-en">loadedListener</span>() {</td>
      </tr>
      <tr>
        <td id="L909" class="blob-num js-line-number" data-line-number="909"></td>
        <td id="LC909" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> readyState <span class="pl-k">=</span> <span class="pl-smi">script</span>.<span class="pl-c1">readyState</span>;</td>
      </tr>
      <tr>
        <td id="L910" class="blob-num js-line-number" data-line-number="910"></td>
        <td id="LC910" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (</td>
      </tr>
      <tr>
        <td id="L911" class="blob-num js-line-number" data-line-number="911"></td>
        <td id="LC911" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">typeof</span> readyState <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L912" class="blob-num js-line-number" data-line-number="912"></td>
        <td id="LC912" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">||</span><span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-k">^</span>(loaded<span class="pl-k">|</span>complete)<span class="pl-k">$</span><span class="pl-pds">/</span></span>.<span class="pl-c1">test</span>(readyState)</td>
      </tr>
      <tr>
        <td id="L913" class="blob-num js-line-number" data-line-number="913"></td>
        <td id="LC913" class="blob-code blob-code-inner js-file-line">            ) {</td>
      </tr>
      <tr>
        <td id="L914" class="blob-num js-line-number" data-line-number="914"></td>
        <td id="LC914" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">script</span>.<span class="pl-smi">onload</span> <span class="pl-k">=</span> <span class="pl-smi">script</span>.<span class="pl-c1">onreadystatechange</span> <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L915" class="blob-num js-line-number" data-line-number="915"></td>
        <td id="LC915" class="blob-code blob-code-inner js-file-line">                script <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L916" class="blob-num js-line-number" data-line-number="916"></td>
        <td id="LC916" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L917" class="blob-num js-line-number" data-line-number="917"></td>
        <td id="LC917" class="blob-code blob-code-inner js-file-line">                <span class="pl-en">completePreDefine</span>(moduleId);</td>
      </tr>
      <tr>
        <td id="L918" class="blob-num js-line-number" data-line-number="918"></td>
        <td id="LC918" class="blob-code blob-code-inner js-file-line">                <span class="pl-c">/*
																											 * eslint-disable
																											 * guard-for-in
																											 */</span></td>
      </tr>
      <tr>
        <td id="L919" class="blob-num js-line-number" data-line-number="919"></td>
        <td id="LC919" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">for</span> (<span class="pl-k">var</span> key <span class="pl-k">in</span> autoDefineModules) {</td>
      </tr>
      <tr>
        <td id="L920" class="blob-num js-line-number" data-line-number="920"></td>
        <td id="LC920" class="blob-code blob-code-inner js-file-line">                    <span class="pl-en">modAnalyse</span>(key);</td>
      </tr>
      <tr>
        <td id="L921" class="blob-num js-line-number" data-line-number="921"></td>
        <td id="LC921" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L922" class="blob-num js-line-number" data-line-number="922"></td>
        <td id="LC922" class="blob-code blob-code-inner js-file-line">                <span class="pl-c">/*
																											 * eslint-enable
																											 * guard-for-in
																											 */</span></td>
      </tr>
      <tr>
        <td id="L923" class="blob-num js-line-number" data-line-number="923"></td>
        <td id="LC923" class="blob-code blob-code-inner js-file-line">                <span class="pl-en">modAutoInvoke</span>();</td>
      </tr>
      <tr>
        <td id="L924" class="blob-num js-line-number" data-line-number="924"></td>
        <td id="LC924" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L925" class="blob-num js-line-number" data-line-number="925"></td>
        <td id="LC925" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L926" class="blob-num js-line-number" data-line-number="926"></td>
        <td id="LC926" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L927" class="blob-num js-line-number" data-line-number="927"></td>
        <td id="LC927" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L928" class="blob-num js-line-number" data-line-number="928"></td>
        <td id="LC928" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">/**
																								 * </span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L929" class="blob-num js-line-number" data-line-number="929"></td>
																								 * <td id="LC929" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * 加载资源</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L930" class="blob-num js-line-number" data-line-number="930"></td>
																								 * <td id="LC930" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L931" class="blob-num js-line-number" data-line-number="931"></td>
																								 * <td id="LC931" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@inner</span></span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L932" class="blob-num js-line-number" data-line-number="932"></td>
																								 * <td id="LC932" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@param</span>
																								 * <span
																								 * class="pl-en">{string}</span>
																								 * <span
																								 * class="pl-smi">pluginAndResource</span>
																								 * 插件与资源标识</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L933" class="blob-num js-line-number" data-line-number="933"></td>
																								 * <td id="LC933" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@param</span>
																								 * <span
																								 * class="pl-en">{string}</span>
																								 * <span
																								 * class="pl-smi">baseId</span>
																								 * 当前环境的模块标识</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L934" class="blob-num js-line-number" data-line-number="934"></td>
																								 * <td id="LC934" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c">
																								 */</span></td>
      </tr>
      <tr>
        <td id="L935" class="blob-num js-line-number" data-line-number="935"></td>
        <td id="LC935" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">loadResource</span>(<span class="pl-smi">pluginAndResource</span>, <span class="pl-smi">baseId</span>) {</td>
      </tr>
      <tr>
        <td id="L936" class="blob-num js-line-number" data-line-number="936"></td>
        <td id="LC936" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (modModules[pluginAndResource]) {</td>
      </tr>
      <tr>
        <td id="L937" class="blob-num js-line-number" data-line-number="937"></td>
        <td id="LC937" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L938" class="blob-num js-line-number" data-line-number="938"></td>
        <td id="LC938" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L939" class="blob-num js-line-number" data-line-number="939"></td>
        <td id="LC939" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L940" class="blob-num js-line-number" data-line-number="940"></td>
        <td id="LC940" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> idInfo <span class="pl-k">=</span> <span class="pl-en">parseId</span>(pluginAndResource);</td>
      </tr>
      <tr>
        <td id="L941" class="blob-num js-line-number" data-line-number="941"></td>
        <td id="LC941" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> resource <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L942" class="blob-num js-line-number" data-line-number="942"></td>
        <td id="LC942" class="blob-code blob-code-inner js-file-line">            id<span class="pl-k">:</span> pluginAndResource,</td>
      </tr>
      <tr>
        <td id="L943" class="blob-num js-line-number" data-line-number="943"></td>
        <td id="LC943" class="blob-code blob-code-inner js-file-line">            state<span class="pl-k">:</span> <span class="pl-c1">MODULE_ANALYZED</span></td>
      </tr>
      <tr>
        <td id="L944" class="blob-num js-line-number" data-line-number="944"></td>
        <td id="LC944" class="blob-code blob-code-inner js-file-line">        };</td>
      </tr>
      <tr>
        <td id="L945" class="blob-num js-line-number" data-line-number="945"></td>
        <td id="LC945" class="blob-code blob-code-inner js-file-line">        modModules[pluginAndResource] <span class="pl-k">=</span> resource;</td>
      </tr>
      <tr>
        <td id="L946" class="blob-num js-line-number" data-line-number="946"></td>
        <td id="LC946" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L947" class="blob-num js-line-number" data-line-number="947"></td>
        <td id="LC947" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">/**
																									 * </span></td>
																									 * </tr>
																									 * <tr>
																									 * <td id="L948" class="blob-num js-line-number" data-line-number="948"></td>
																									 * <td id="LC948" class="blob-code blob-code-inner js-file-line"><span
																									 * class="pl-c"> *
																									 * plugin加载完成的回调函数</span></td>
																									 * </tr>
																									 * <tr>
																									 * <td id="L949" class="blob-num js-line-number" data-line-number="949"></td>
																									 * <td id="LC949" class="blob-code blob-code-inner js-file-line"><span
																									 * class="pl-c"> *</span></td>
																									 * </tr>
																									 * <tr>
																									 * <td id="L950" class="blob-num js-line-number" data-line-number="950"></td>
																									 * <td id="LC950" class="blob-code blob-code-inner js-file-line"><span
																									 * class="pl-c"> *
																									 * <span
																									 * class="pl-k">@inner</span></span></td>
																									 * </tr>
																									 * <tr>
																									 * <td id="L951" class="blob-num js-line-number" data-line-number="951"></td>
																									 * <td id="LC951" class="blob-code blob-code-inner js-file-line"><span
																									 * class="pl-c"> *
																									 * <span
																									 * class="pl-k">@param</span>
																									 * {*}
																									 * value
																									 * resource的值</span></td>
																									 * </tr>
																									 * <tr>
																									 * <td id="L952" class="blob-num js-line-number" data-line-number="952"></td>
																									 * <td id="LC952" class="blob-code blob-code-inner js-file-line"><span
																									 * class="pl-c">
																									 */</span></td>
      </tr>
      <tr>
        <td id="L953" class="blob-num js-line-number" data-line-number="953"></td>
        <td id="LC953" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">function</span> <span class="pl-en">pluginOnload</span>(<span class="pl-smi">value</span>) {</td>
      </tr>
      <tr>
        <td id="L954" class="blob-num js-line-number" data-line-number="954"></td>
        <td id="LC954" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">resource</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> value <span class="pl-k">||</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L955" class="blob-num js-line-number" data-line-number="955"></td>
        <td id="LC955" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">modDefined</span>(pluginAndResource);</td>
      </tr>
      <tr>
        <td id="L956" class="blob-num js-line-number" data-line-number="956"></td>
        <td id="LC956" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L957" class="blob-num js-line-number" data-line-number="957"></td>
        <td id="LC957" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L958" class="blob-num js-line-number" data-line-number="958"></td>
        <td id="LC958" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">/*
																									 * jshint
																									 * ignore:start
																									 */</span></td>
      </tr>
      <tr>
        <td id="L959" class="blob-num js-line-number" data-line-number="959"></td>
        <td id="LC959" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">/**
																									 * </span></td>
																									 * </tr>
																									 * <tr>
																									 * <td id="L960" class="blob-num js-line-number" data-line-number="960"></td>
																									 * <td id="LC960" class="blob-code blob-code-inner js-file-line"><span
																									 * class="pl-c"> *
																									 * 该方法允许plugin使用加载的资源声明模块</span></td>
																									 * </tr>
																									 * <tr>
																									 * <td id="L961" class="blob-num js-line-number" data-line-number="961"></td>
																									 * <td id="LC961" class="blob-code blob-code-inner js-file-line"><span
																									 * class="pl-c"> *</span></td>
																									 * </tr>
																									 * <tr>
																									 * <td id="L962" class="blob-num js-line-number" data-line-number="962"></td>
																									 * <td id="LC962" class="blob-code blob-code-inner js-file-line"><span
																									 * class="pl-c"> *
																									 * <span
																									 * class="pl-k">@param</span>
																									 * <span
																									 * class="pl-en">{string}</span>
																									 * <span
																									 * class="pl-smi">id</span>
																									 * 模块id</span></td>
																									 * </tr>
																									 * <tr>
																									 * <td id="L963" class="blob-num js-line-number" data-line-number="963"></td>
																									 * <td id="LC963" class="blob-code blob-code-inner js-file-line"><span
																									 * class="pl-c"> *
																									 * <span
																									 * class="pl-k">@param</span>
																									 * <span
																									 * class="pl-en">{string}</span>
																									 * <span
																									 * class="pl-smi">text</span>
																									 * 模块声明字符串</span></td>
																									 * </tr>
																									 * <tr>
																									 * <td id="L964" class="blob-num js-line-number" data-line-number="964"></td>
																									 * <td id="LC964" class="blob-code blob-code-inner js-file-line"><span
																									 * class="pl-c">
																									 */</span></td>
      </tr>
      <tr>
        <td id="L965" class="blob-num js-line-number" data-line-number="965"></td>
        <td id="LC965" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">pluginOnload</span>.<span class="pl-en">fromText</span> <span class="pl-k">=</span> <span class="pl-k">function</span> (<span class="pl-smi">id</span>, <span class="pl-smi">text</span>) {</td>
      </tr>
      <tr>
        <td id="L966" class="blob-num js-line-number" data-line-number="966"></td>
        <td id="LC966" class="blob-code blob-code-inner js-file-line">            autoDefineModules[id] <span class="pl-k">=</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L967" class="blob-num js-line-number" data-line-number="967"></td>
        <td id="LC967" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">new</span> <span class="pl-en">Function</span>(text)();</td>
      </tr>
      <tr>
        <td id="L968" class="blob-num js-line-number" data-line-number="968"></td>
        <td id="LC968" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">completePreDefine</span>(id);</td>
      </tr>
      <tr>
        <td id="L969" class="blob-num js-line-number" data-line-number="969"></td>
        <td id="LC969" class="blob-code blob-code-inner js-file-line">        };</td>
      </tr>
      <tr>
        <td id="L970" class="blob-num js-line-number" data-line-number="970"></td>
        <td id="LC970" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">/*
																									 * jshint
																									 * ignore:end
																									 */</span></td>
      </tr>
      <tr>
        <td id="L971" class="blob-num js-line-number" data-line-number="971"></td>
        <td id="LC971" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L972" class="blob-num js-line-number" data-line-number="972"></td>
        <td id="LC972" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">/**
																									 * </span></td>
																									 * </tr>
																									 * <tr>
																									 * <td id="L973" class="blob-num js-line-number" data-line-number="973"></td>
																									 * <td id="LC973" class="blob-code blob-code-inner js-file-line"><span
																									 * class="pl-c"> *
																									 * 加载资源</span></td>
																									 * </tr>
																									 * <tr>
																									 * <td id="L974" class="blob-num js-line-number" data-line-number="974"></td>
																									 * <td id="LC974" class="blob-code blob-code-inner js-file-line"><span
																									 * class="pl-c"> *</span></td>
																									 * </tr>
																									 * <tr>
																									 * <td id="L975" class="blob-num js-line-number" data-line-number="975"></td>
																									 * <td id="LC975" class="blob-code blob-code-inner js-file-line"><span
																									 * class="pl-c"> *
																									 * <span
																									 * class="pl-k">@inner</span></span></td>
																									 * </tr>
																									 * <tr>
																									 * <td id="L976" class="blob-num js-line-number" data-line-number="976"></td>
																									 * <td id="LC976" class="blob-code blob-code-inner js-file-line"><span
																									 * class="pl-c"> *
																									 * <span
																									 * class="pl-k">@param</span>
																									 * <span
																									 * class="pl-en">{Object}</span>
																									 * <span
																									 * class="pl-smi">plugin</span>
																									 * 用于加载资源的插件模块</span></td>
																									 * </tr>
																									 * <tr>
																									 * <td id="L977" class="blob-num js-line-number" data-line-number="977"></td>
																									 * <td id="LC977" class="blob-code blob-code-inner js-file-line"><span
																									 * class="pl-c">
																									 */</span></td>
      </tr>
      <tr>
        <td id="L978" class="blob-num js-line-number" data-line-number="978"></td>
        <td id="LC978" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">function</span> <span class="pl-en">load</span>(<span class="pl-smi">plugin</span>) {</td>
      </tr>
      <tr>
        <td id="L979" class="blob-num js-line-number" data-line-number="979"></td>
        <td id="LC979" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> pluginRequire <span class="pl-k">=</span> baseId</td>
      </tr>
      <tr>
        <td id="L980" class="blob-num js-line-number" data-line-number="980"></td>
        <td id="LC980" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">?</span> modModules[baseId].<span class="pl-smi">require</span></td>
      </tr>
      <tr>
        <td id="L981" class="blob-num js-line-number" data-line-number="981"></td>
        <td id="LC981" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">:</span> actualGlobalRequire;</td>
      </tr>
      <tr>
        <td id="L982" class="blob-num js-line-number" data-line-number="982"></td>
        <td id="LC982" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L983" class="blob-num js-line-number" data-line-number="983"></td>
        <td id="LC983" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">plugin</span>.<span class="pl-c1">load</span>(</td>
      </tr>
      <tr>
        <td id="L984" class="blob-num js-line-number" data-line-number="984"></td>
        <td id="LC984" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">idInfo</span>.<span class="pl-smi">res</span>,</td>
      </tr>
      <tr>
        <td id="L985" class="blob-num js-line-number" data-line-number="985"></td>
        <td id="LC985" class="blob-code blob-code-inner js-file-line">                pluginRequire,</td>
      </tr>
      <tr>
        <td id="L986" class="blob-num js-line-number" data-line-number="986"></td>
        <td id="LC986" class="blob-code blob-code-inner js-file-line">                pluginOnload,</td>
      </tr>
      <tr>
        <td id="L987" class="blob-num js-line-number" data-line-number="987"></td>
        <td id="LC987" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">moduleConfigGetter</span>.<span class="pl-c1">call</span>({id<span class="pl-k">:</span> pluginAndResource})</td>
      </tr>
      <tr>
        <td id="L988" class="blob-num js-line-number" data-line-number="988"></td>
        <td id="LC988" class="blob-code blob-code-inner js-file-line">            );</td>
      </tr>
      <tr>
        <td id="L989" class="blob-num js-line-number" data-line-number="989"></td>
        <td id="LC989" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L990" class="blob-num js-line-number" data-line-number="990"></td>
        <td id="LC990" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L991" class="blob-num js-line-number" data-line-number="991"></td>
        <td id="LC991" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">load</span>(<span class="pl-en">modGetModuleExports</span>(<span class="pl-smi">idInfo</span>.<span class="pl-smi">mod</span>));</td>
      </tr>
      <tr>
        <td id="L992" class="blob-num js-line-number" data-line-number="992"></td>
        <td id="LC992" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L993" class="blob-num js-line-number" data-line-number="993"></td>
        <td id="LC993" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L994" class="blob-num js-line-number" data-line-number="994"></td>
        <td id="LC994" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">/**
																								 * </span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L995" class="blob-num js-line-number" data-line-number="995"></td>
																								 * <td id="LC995" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * 配置require</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L996" class="blob-num js-line-number" data-line-number="996"></td>
																								 * <td id="LC996" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L997" class="blob-num js-line-number" data-line-number="997"></td>
																								 * <td id="LC997" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@param</span>
																								 * <span
																								 * class="pl-en">{Object}</span>
																								 * <span
																								 * class="pl-smi">conf</span>
																								 * 配置对象</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L998" class="blob-num js-line-number" data-line-number="998"></td>
																								 * <td id="LC998" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c">
																								 */</span></td>
      </tr>
      <tr>
        <td id="L999" class="blob-num js-line-number" data-line-number="999"></td>
        <td id="LC999" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">globalRequire</span>.<span class="pl-en">config</span> <span class="pl-k">=</span> <span class="pl-k">function</span> (<span class="pl-smi">conf</span>) {</td>
      </tr>
      <tr>
        <td id="L1000" class="blob-num js-line-number" data-line-number="1000"></td>
        <td id="LC1000" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (conf) {</td>
      </tr>
      <tr>
        <td id="L1001" class="blob-num js-line-number" data-line-number="1001"></td>
        <td id="LC1001" class="blob-code blob-code-inner js-file-line">            <span class="pl-c">/*
																										 * eslint-disable
																										 * guard-for-in
																										 */</span></td>
      </tr>
      <tr>
        <td id="L1002" class="blob-num js-line-number" data-line-number="1002"></td>
        <td id="LC1002" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">for</span> (<span class="pl-k">var</span> key <span class="pl-k">in</span> requireConf) {</td>
      </tr>
      <tr>
        <td id="L1003" class="blob-num js-line-number" data-line-number="1003"></td>
        <td id="LC1003" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> newValue <span class="pl-k">=</span> conf[key];</td>
      </tr>
      <tr>
        <td id="L1004" class="blob-num js-line-number" data-line-number="1004"></td>
        <td id="LC1004" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> oldValue <span class="pl-k">=</span> requireConf[key];</td>
      </tr>
      <tr>
        <td id="L1005" class="blob-num js-line-number" data-line-number="1005"></td>
        <td id="LC1005" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1006" class="blob-num js-line-number" data-line-number="1006"></td>
        <td id="LC1006" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> (<span class="pl-k">!</span>newValue) {</td>
      </tr>
      <tr>
        <td id="L1007" class="blob-num js-line-number" data-line-number="1007"></td>
        <td id="LC1007" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">continue</span>;</td>
      </tr>
      <tr>
        <td id="L1008" class="blob-num js-line-number" data-line-number="1008"></td>
        <td id="LC1008" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L1009" class="blob-num js-line-number" data-line-number="1009"></td>
        <td id="LC1009" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1010" class="blob-num js-line-number" data-line-number="1010"></td>
        <td id="LC1010" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> (key <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>urlArgs<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">typeof</span> newValue <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>string<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L1011" class="blob-num js-line-number" data-line-number="1011"></td>
        <td id="LC1011" class="blob-code blob-code-inner js-file-line">                    <span class="pl-smi">requireConf</span>.<span class="pl-smi">urlArgs</span>[<span class="pl-s"><span class="pl-pds">&#39;</span>*<span class="pl-pds">&#39;</span></span>] <span class="pl-k">=</span> newValue;</td>
      </tr>
      <tr>
        <td id="L1012" class="blob-num js-line-number" data-line-number="1012"></td>
        <td id="LC1012" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L1013" class="blob-num js-line-number" data-line-number="1013"></td>
        <td id="LC1013" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1014" class="blob-num js-line-number" data-line-number="1014"></td>
        <td id="LC1014" class="blob-code blob-code-inner js-file-line">                    <span class="pl-c">// 简单的多处配置还是需要支持，所以配置实现为支持二级mix</span></td>
      </tr>
      <tr>
        <td id="L1015" class="blob-num js-line-number" data-line-number="1015"></td>
        <td id="LC1015" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">if</span> (oldValue <span class="pl-k">instanceof</span> <span class="pl-c1">Array</span>) {</td>
      </tr>
      <tr>
        <td id="L1016" class="blob-num js-line-number" data-line-number="1016"></td>
        <td id="LC1016" class="blob-code blob-code-inner js-file-line">                        <span class="pl-smi">oldValue</span>.<span class="pl-smi">push</span>.<span class="pl-c1">apply</span>(oldValue, newValue);</td>
      </tr>
      <tr>
        <td id="L1017" class="blob-num js-line-number" data-line-number="1017"></td>
        <td id="LC1017" class="blob-code blob-code-inner js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L1018" class="blob-num js-line-number" data-line-number="1018"></td>
        <td id="LC1018" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-k">typeof</span> oldValue <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>object<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L1019" class="blob-num js-line-number" data-line-number="1019"></td>
        <td id="LC1019" class="blob-code blob-code-inner js-file-line">                        <span class="pl-k">for</span> (<span class="pl-k">var</span> k <span class="pl-k">in</span> newValue) {</td>
      </tr>
      <tr>
        <td id="L1020" class="blob-num js-line-number" data-line-number="1020"></td>
        <td id="LC1020" class="blob-code blob-code-inner js-file-line">                            oldValue[k] <span class="pl-k">=</span> newValue[k];</td>
      </tr>
      <tr>
        <td id="L1021" class="blob-num js-line-number" data-line-number="1021"></td>
        <td id="LC1021" class="blob-code blob-code-inner js-file-line">                        }</td>
      </tr>
      <tr>
        <td id="L1022" class="blob-num js-line-number" data-line-number="1022"></td>
        <td id="LC1022" class="blob-code blob-code-inner js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L1023" class="blob-num js-line-number" data-line-number="1023"></td>
        <td id="LC1023" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1024" class="blob-num js-line-number" data-line-number="1024"></td>
        <td id="LC1024" class="blob-code blob-code-inner js-file-line">                        requireConf[key] <span class="pl-k">=</span> newValue;</td>
      </tr>
      <tr>
        <td id="L1025" class="blob-num js-line-number" data-line-number="1025"></td>
        <td id="LC1025" class="blob-code blob-code-inner js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L1026" class="blob-num js-line-number" data-line-number="1026"></td>
        <td id="LC1026" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L1027" class="blob-num js-line-number" data-line-number="1027"></td>
        <td id="LC1027" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L1028" class="blob-num js-line-number" data-line-number="1028"></td>
        <td id="LC1028" class="blob-code blob-code-inner js-file-line">            <span class="pl-c">/*
																										 * eslint-enable
																										 * guard-for-in
																										 */</span></td>
      </tr>
      <tr>
        <td id="L1029" class="blob-num js-line-number" data-line-number="1029"></td>
        <td id="LC1029" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1030" class="blob-num js-line-number" data-line-number="1030"></td>
        <td id="LC1030" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">createConfIndex</span>();</td>
      </tr>
      <tr>
        <td id="L1031" class="blob-num js-line-number" data-line-number="1031"></td>
        <td id="LC1031" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1032" class="blob-num js-line-number" data-line-number="1032"></td>
        <td id="LC1032" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1033" class="blob-num js-line-number" data-line-number="1033"></td>
        <td id="LC1033" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// 配置信息对象clone返回，避免返回结果对象被用户程序修改可能导致的问题</span></td>
      </tr>
      <tr>
        <td id="L1034" class="blob-num js-line-number" data-line-number="1034"></td>
        <td id="LC1034" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// return
																									// clone(requireConf);</span></td>
      </tr>
      <tr>
        <td id="L1035" class="blob-num js-line-number" data-line-number="1035"></td>
        <td id="LC1035" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L1036" class="blob-num js-line-number" data-line-number="1036"></td>
        <td id="LC1036" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1037" class="blob-num js-line-number" data-line-number="1037"></td>
        <td id="LC1037" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">/**
																								 * </span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1038" class="blob-num js-line-number" data-line-number="1038"></td>
																								 * <td id="LC1038" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * 对象克隆，支持raw
																								 * type,
																								 * Array,
																								 * raw
																								 * Object</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1039" class="blob-num js-line-number" data-line-number="1039"></td>
																								 * <td id="LC1039" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1040" class="blob-num js-line-number" data-line-number="1040"></td>
																								 * <td id="LC1040" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@inner</span></span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1041" class="blob-num js-line-number" data-line-number="1041"></td>
																								 * <td id="LC1041" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@param</span>
																								 * {*}
																								 * source
																								 * 要克隆的对象</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1042" class="blob-num js-line-number" data-line-number="1042"></td>
																								 * <td id="LC1042" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@return</span>
																								 * {*}</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1043" class="blob-num js-line-number" data-line-number="1043"></td>
																								 * <td id="LC1043" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c">
																								 */</span></td>
      </tr>
      <tr>
        <td id="L1044" class="blob-num js-line-number" data-line-number="1044"></td>
        <td id="LC1044" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">// function
																								// clone(source)
																								// {</span></td>
      </tr>
      <tr>
        <td id="L1045" class="blob-num js-line-number" data-line-number="1045"></td>
        <td id="LC1045" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">// var
																								// result
																								// =
																								// source;</span></td>
      </tr>
      <tr>
        <td id="L1046" class="blob-num js-line-number" data-line-number="1046"></td>
        <td id="LC1046" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1047" class="blob-num js-line-number" data-line-number="1047"></td>
        <td id="LC1047" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">// if
																								// (source
																								// instanceof
																								// Array)
																								// {</span></td>
      </tr>
      <tr>
        <td id="L1048" class="blob-num js-line-number" data-line-number="1048"></td>
        <td id="LC1048" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">// result
																								// =
																								// [];</span></td>
      </tr>
      <tr>
        <td id="L1049" class="blob-num js-line-number" data-line-number="1049"></td>
        <td id="LC1049" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">// each(source,
																								// function
																								// (item,
																								// i)
																								// {</span></td>
      </tr>
      <tr>
        <td id="L1050" class="blob-num js-line-number" data-line-number="1050"></td>
        <td id="LC1050" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">// result[i]
																								// =
																								// clone(item);</span></td>
      </tr>
      <tr>
        <td id="L1051" class="blob-num js-line-number" data-line-number="1051"></td>
        <td id="LC1051" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">// });</span></td>
      </tr>
      <tr>
        <td id="L1052" class="blob-num js-line-number" data-line-number="1052"></td>
        <td id="LC1052" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">// }</span></td>
      </tr>
      <tr>
        <td id="L1053" class="blob-num js-line-number" data-line-number="1053"></td>
        <td id="LC1053" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">// else
																								// if
																								// (typeof
																								// source
																								// ===
																								// &#39;object&#39;)
																								// {</span></td>
      </tr>
      <tr>
        <td id="L1054" class="blob-num js-line-number" data-line-number="1054"></td>
        <td id="LC1054" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">// result
																								// =
																								// {};</span></td>
      </tr>
      <tr>
        <td id="L1055" class="blob-num js-line-number" data-line-number="1055"></td>
        <td id="LC1055" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">// for
																								// (var
																								// key
																								// in
																								// source)
																								// {</span></td>
      </tr>
      <tr>
        <td id="L1056" class="blob-num js-line-number" data-line-number="1056"></td>
        <td id="LC1056" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">// if
																								// (source.hasOwnProperty(key))
																								// {</span></td>
      </tr>
      <tr>
        <td id="L1057" class="blob-num js-line-number" data-line-number="1057"></td>
        <td id="LC1057" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">// result[key]
																								// =
																								// clone(source[key]);</span></td>
      </tr>
      <tr>
        <td id="L1058" class="blob-num js-line-number" data-line-number="1058"></td>
        <td id="LC1058" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">// }</span></td>
      </tr>
      <tr>
        <td id="L1059" class="blob-num js-line-number" data-line-number="1059"></td>
        <td id="LC1059" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">// }</span></td>
      </tr>
      <tr>
        <td id="L1060" class="blob-num js-line-number" data-line-number="1060"></td>
        <td id="LC1060" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">// }</span></td>
      </tr>
      <tr>
        <td id="L1061" class="blob-num js-line-number" data-line-number="1061"></td>
        <td id="LC1061" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1062" class="blob-num js-line-number" data-line-number="1062"></td>
        <td id="LC1062" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">// return
																								// result;</span></td>
      </tr>
      <tr>
        <td id="L1063" class="blob-num js-line-number" data-line-number="1063"></td>
        <td id="LC1063" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">// }</span></td>
      </tr>
      <tr>
        <td id="L1064" class="blob-num js-line-number" data-line-number="1064"></td>
        <td id="LC1064" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1065" class="blob-num js-line-number" data-line-number="1065"></td>
        <td id="LC1065" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">// 初始化时需要创建配置索引</span></td>
      </tr>
      <tr>
        <td id="L1066" class="blob-num js-line-number" data-line-number="1066"></td>
        <td id="LC1066" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">createConfIndex</span>();</td>
      </tr>
      <tr>
        <td id="L1067" class="blob-num js-line-number" data-line-number="1067"></td>
        <td id="LC1067" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1068" class="blob-num js-line-number" data-line-number="1068"></td>
        <td id="LC1068" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">/**
																								 * </span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1069" class="blob-num js-line-number" data-line-number="1069"></td>
																								 * <td id="LC1069" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * paths内部索引</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1070" class="blob-num js-line-number" data-line-number="1070"></td>
																								 * <td id="LC1070" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1071" class="blob-num js-line-number" data-line-number="1071"></td>
																								 * <td id="LC1071" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@inner</span></span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1072" class="blob-num js-line-number" data-line-number="1072"></td>
																								 * <td id="LC1072" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@type</span>
																								 * {Array}</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1073" class="blob-num js-line-number" data-line-number="1073"></td>
																								 * <td id="LC1073" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c">
																								 */</span></td>
      </tr>
      <tr>
        <td id="L1074" class="blob-num js-line-number" data-line-number="1074"></td>
        <td id="LC1074" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> pathsIndex;</td>
      </tr>
      <tr>
        <td id="L1075" class="blob-num js-line-number" data-line-number="1075"></td>
        <td id="LC1075" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1076" class="blob-num js-line-number" data-line-number="1076"></td>
        <td id="LC1076" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">/**
																								 * </span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1077" class="blob-num js-line-number" data-line-number="1077"></td>
																								 * <td id="LC1077" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * packages内部索引</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1078" class="blob-num js-line-number" data-line-number="1078"></td>
																								 * <td id="LC1078" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1079" class="blob-num js-line-number" data-line-number="1079"></td>
																								 * <td id="LC1079" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@inner</span></span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1080" class="blob-num js-line-number" data-line-number="1080"></td>
																								 * <td id="LC1080" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@type</span>
																								 * {Array}</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1081" class="blob-num js-line-number" data-line-number="1081"></td>
																								 * <td id="LC1081" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c">
																								 */</span></td>
      </tr>
      <tr>
        <td id="L1082" class="blob-num js-line-number" data-line-number="1082"></td>
        <td id="LC1082" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> packagesIndex;</td>
      </tr>
      <tr>
        <td id="L1083" class="blob-num js-line-number" data-line-number="1083"></td>
        <td id="LC1083" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1084" class="blob-num js-line-number" data-line-number="1084"></td>
        <td id="LC1084" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">/**
																								 * </span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1085" class="blob-num js-line-number" data-line-number="1085"></td>
																								 * <td id="LC1085" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * mapping内部索引</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1086" class="blob-num js-line-number" data-line-number="1086"></td>
																								 * <td id="LC1086" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1087" class="blob-num js-line-number" data-line-number="1087"></td>
																								 * <td id="LC1087" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@inner</span></span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1088" class="blob-num js-line-number" data-line-number="1088"></td>
																								 * <td id="LC1088" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@type</span>
																								 * {Array}</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1089" class="blob-num js-line-number" data-line-number="1089"></td>
																								 * <td id="LC1089" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c">
																								 */</span></td>
      </tr>
      <tr>
        <td id="L1090" class="blob-num js-line-number" data-line-number="1090"></td>
        <td id="LC1090" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> mappingIdIndex;</td>
      </tr>
      <tr>
        <td id="L1091" class="blob-num js-line-number" data-line-number="1091"></td>
        <td id="LC1091" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1092" class="blob-num js-line-number" data-line-number="1092"></td>
        <td id="LC1092" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">/**
																								 * </span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1093" class="blob-num js-line-number" data-line-number="1093"></td>
																								 * <td id="LC1093" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * urlArgs内部索引</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1094" class="blob-num js-line-number" data-line-number="1094"></td>
																								 * <td id="LC1094" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1095" class="blob-num js-line-number" data-line-number="1095"></td>
																								 * <td id="LC1095" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@inner</span></span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1096" class="blob-num js-line-number" data-line-number="1096"></td>
																								 * <td id="LC1096" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@type</span>
																								 * {Array}</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1097" class="blob-num js-line-number" data-line-number="1097"></td>
																								 * <td id="LC1097" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c">
																								 */</span></td>
      </tr>
      <tr>
        <td id="L1098" class="blob-num js-line-number" data-line-number="1098"></td>
        <td id="LC1098" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> urlArgsIndex;</td>
      </tr>
      <tr>
        <td id="L1099" class="blob-num js-line-number" data-line-number="1099"></td>
        <td id="LC1099" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1100" class="blob-num js-line-number" data-line-number="1100"></td>
        <td id="LC1100" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">/**
																								 * </span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1101" class="blob-num js-line-number" data-line-number="1101"></td>
																								 * <td id="LC1101" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * noRequests内部索引</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1102" class="blob-num js-line-number" data-line-number="1102"></td>
																								 * <td id="LC1102" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1103" class="blob-num js-line-number" data-line-number="1103"></td>
																								 * <td id="LC1103" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@inner</span></span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1104" class="blob-num js-line-number" data-line-number="1104"></td>
																								 * <td id="LC1104" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@type</span>
																								 * {Array}</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1105" class="blob-num js-line-number" data-line-number="1105"></td>
																								 * <td id="LC1105" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c">
																								 */</span></td>
      </tr>
      <tr>
        <td id="L1106" class="blob-num js-line-number" data-line-number="1106"></td>
        <td id="LC1106" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> noRequestsIndex;</td>
      </tr>
      <tr>
        <td id="L1107" class="blob-num js-line-number" data-line-number="1107"></td>
        <td id="LC1107" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1108" class="blob-num js-line-number" data-line-number="1108"></td>
        <td id="LC1108" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">/**
																								 * </span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1109" class="blob-num js-line-number" data-line-number="1109"></td>
																								 * <td id="LC1109" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * 将key为module
																								 * id
																								 * prefix的Object，生成数组形式的索引，并按照长度和字面排序</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1110" class="blob-num js-line-number" data-line-number="1110"></td>
																								 * <td id="LC1110" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1111" class="blob-num js-line-number" data-line-number="1111"></td>
																								 * <td id="LC1111" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@inner</span></span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1112" class="blob-num js-line-number" data-line-number="1112"></td>
																								 * <td id="LC1112" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@param</span>
																								 * <span
																								 * class="pl-en">{Object}</span>
																								 * <span
																								 * class="pl-smi">value</span>
																								 * 源值</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1113" class="blob-num js-line-number" data-line-number="1113"></td>
																								 * <td id="LC1113" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@param</span>
																								 * <span
																								 * class="pl-en">{boolean}</span>
																								 * <span
																								 * class="pl-smi">allowAsterisk</span>
																								 * 是否允许*号表示匹配所有</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1114" class="blob-num js-line-number" data-line-number="1114"></td>
																								 * <td id="LC1114" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@return</span>
																								 * {Array}
																								 * 索引对象</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1115" class="blob-num js-line-number" data-line-number="1115"></td>
																								 * <td id="LC1115" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c">
																								 */</span></td>
      </tr>
      <tr>
        <td id="L1116" class="blob-num js-line-number" data-line-number="1116"></td>
        <td id="LC1116" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">createKVSortedIndex</span>(<span class="pl-smi">value</span>, <span class="pl-smi">allowAsterisk</span>) {</td>
      </tr>
      <tr>
        <td id="L1117" class="blob-num js-line-number" data-line-number="1117"></td>
        <td id="LC1117" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> index <span class="pl-k">=</span> <span class="pl-en">kv2List</span>(value, <span class="pl-c1">1</span>, allowAsterisk);</td>
      </tr>
      <tr>
        <td id="L1118" class="blob-num js-line-number" data-line-number="1118"></td>
        <td id="LC1118" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">index</span>.<span class="pl-c1">sort</span>(descSorterByKOrName);</td>
      </tr>
      <tr>
        <td id="L1119" class="blob-num js-line-number" data-line-number="1119"></td>
        <td id="LC1119" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> index;</td>
      </tr>
      <tr>
        <td id="L1120" class="blob-num js-line-number" data-line-number="1120"></td>
        <td id="LC1120" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1121" class="blob-num js-line-number" data-line-number="1121"></td>
        <td id="LC1121" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1122" class="blob-num js-line-number" data-line-number="1122"></td>
        <td id="LC1122" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">/**
																								 * </span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1123" class="blob-num js-line-number" data-line-number="1123"></td>
																								 * <td id="LC1123" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * 创建配置信息内部索引</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1124" class="blob-num js-line-number" data-line-number="1124"></td>
																								 * <td id="LC1124" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1125" class="blob-num js-line-number" data-line-number="1125"></td>
																								 * <td id="LC1125" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@inner</span></span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1126" class="blob-num js-line-number" data-line-number="1126"></td>
																								 * <td id="LC1126" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c">
																								 */</span></td>
      </tr>
      <tr>
        <td id="L1127" class="blob-num js-line-number" data-line-number="1127"></td>
        <td id="LC1127" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">createConfIndex</span>() {</td>
      </tr>
      <tr>
        <td id="L1128" class="blob-num js-line-number" data-line-number="1128"></td>
        <td id="LC1128" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">requireConf</span>.<span class="pl-smi">baseUrl</span> <span class="pl-k">=</span> <span class="pl-smi">requireConf</span>.<span class="pl-smi">baseUrl</span>.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-cce">\/</span><span class="pl-k">$</span><span class="pl-pds">/</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>/<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1129" class="blob-num js-line-number" data-line-number="1129"></td>
        <td id="LC1129" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1130" class="blob-num js-line-number" data-line-number="1130"></td>
        <td id="LC1130" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// create
																									// paths
																									// index</span></td>
      </tr>
      <tr>
        <td id="L1131" class="blob-num js-line-number" data-line-number="1131"></td>
        <td id="LC1131" class="blob-code blob-code-inner js-file-line">        pathsIndex <span class="pl-k">=</span> <span class="pl-en">createKVSortedIndex</span>(<span class="pl-smi">requireConf</span>.<span class="pl-smi">paths</span>);</td>
      </tr>
      <tr>
        <td id="L1132" class="blob-num js-line-number" data-line-number="1132"></td>
        <td id="LC1132" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1133" class="blob-num js-line-number" data-line-number="1133"></td>
        <td id="LC1133" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// create
																									// mappingId
																									// index</span></td>
      </tr>
      <tr>
        <td id="L1134" class="blob-num js-line-number" data-line-number="1134"></td>
        <td id="LC1134" class="blob-code blob-code-inner js-file-line">        mappingIdIndex <span class="pl-k">=</span> <span class="pl-en">createKVSortedIndex</span>(<span class="pl-smi">requireConf</span>.<span class="pl-smi">map</span>, <span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L1135" class="blob-num js-line-number" data-line-number="1135"></td>
        <td id="LC1135" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">each</span>(</td>
      </tr>
      <tr>
        <td id="L1136" class="blob-num js-line-number" data-line-number="1136"></td>
        <td id="LC1136" class="blob-code blob-code-inner js-file-line">            mappingIdIndex,</td>
      </tr>
      <tr>
        <td id="L1137" class="blob-num js-line-number" data-line-number="1137"></td>
        <td id="LC1137" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">function</span> (<span class="pl-smi">item</span>) {</td>
      </tr>
      <tr>
        <td id="L1138" class="blob-num js-line-number" data-line-number="1138"></td>
        <td id="LC1138" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">item</span>.<span class="pl-smi">v</span> <span class="pl-k">=</span> <span class="pl-en">createKVSortedIndex</span>(<span class="pl-smi">item</span>.<span class="pl-smi">v</span>);</td>
      </tr>
      <tr>
        <td id="L1139" class="blob-num js-line-number" data-line-number="1139"></td>
        <td id="LC1139" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L1140" class="blob-num js-line-number" data-line-number="1140"></td>
        <td id="LC1140" class="blob-code blob-code-inner js-file-line">        );</td>
      </tr>
      <tr>
        <td id="L1141" class="blob-num js-line-number" data-line-number="1141"></td>
        <td id="LC1141" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1142" class="blob-num js-line-number" data-line-number="1142"></td>
        <td id="LC1142" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// create
																									// packages
																									// index</span></td>
      </tr>
      <tr>
        <td id="L1143" class="blob-num js-line-number" data-line-number="1143"></td>
        <td id="LC1143" class="blob-code blob-code-inner js-file-line">        packagesIndex <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L1144" class="blob-num js-line-number" data-line-number="1144"></td>
        <td id="LC1144" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">each</span>(</td>
      </tr>
      <tr>
        <td id="L1145" class="blob-num js-line-number" data-line-number="1145"></td>
        <td id="LC1145" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">requireConf</span>.<span class="pl-smi">packages</span>,</td>
      </tr>
      <tr>
        <td id="L1146" class="blob-num js-line-number" data-line-number="1146"></td>
        <td id="LC1146" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">function</span> (<span class="pl-smi">packageConf</span>) {</td>
      </tr>
      <tr>
        <td id="L1147" class="blob-num js-line-number" data-line-number="1147"></td>
        <td id="LC1147" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> pkg <span class="pl-k">=</span> packageConf;</td>
      </tr>
      <tr>
        <td id="L1148" class="blob-num js-line-number" data-line-number="1148"></td>
        <td id="LC1148" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> (<span class="pl-k">typeof</span> packageConf <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>string<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L1149" class="blob-num js-line-number" data-line-number="1149"></td>
        <td id="LC1149" class="blob-code blob-code-inner js-file-line">                    pkg <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L1150" class="blob-num js-line-number" data-line-number="1150"></td>
        <td id="LC1150" class="blob-code blob-code-inner js-file-line">                        name<span class="pl-k">:</span> <span class="pl-smi">packageConf</span>.<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>/<span class="pl-pds">&#39;</span></span>)[<span class="pl-c1">0</span>],</td>
      </tr>
      <tr>
        <td id="L1151" class="blob-num js-line-number" data-line-number="1151"></td>
        <td id="LC1151" class="blob-code blob-code-inner js-file-line">                        location<span class="pl-k">:</span> packageConf,</td>
      </tr>
      <tr>
        <td id="L1152" class="blob-num js-line-number" data-line-number="1152"></td>
        <td id="LC1152" class="blob-code blob-code-inner js-file-line">                        main<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>main<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L1153" class="blob-num js-line-number" data-line-number="1153"></td>
        <td id="LC1153" class="blob-code blob-code-inner js-file-line">                    };</td>
      </tr>
      <tr>
        <td id="L1154" class="blob-num js-line-number" data-line-number="1154"></td>
        <td id="LC1154" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L1155" class="blob-num js-line-number" data-line-number="1155"></td>
        <td id="LC1155" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1156" class="blob-num js-line-number" data-line-number="1156"></td>
        <td id="LC1156" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">pkg</span>.<span class="pl-c1">location</span> <span class="pl-k">=</span> <span class="pl-smi">pkg</span>.<span class="pl-c1">location</span> <span class="pl-k">||</span> <span class="pl-smi">pkg</span>.<span class="pl-c1">name</span>;</td>
      </tr>
      <tr>
        <td id="L1157" class="blob-num js-line-number" data-line-number="1157"></td>
        <td id="LC1157" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">pkg</span>.<span class="pl-smi">main</span> <span class="pl-k">=</span> (<span class="pl-smi">pkg</span>.<span class="pl-smi">main</span> <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&#39;</span>main<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-cce">\.</span>js<span class="pl-k">$</span><span class="pl-pds">/</span>i</span>, <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1158" class="blob-num js-line-number" data-line-number="1158"></td>
        <td id="LC1158" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">pkg</span>.<span class="pl-smi">reg</span> <span class="pl-k">=</span> <span class="pl-en">createPrefixRegexp</span>(<span class="pl-smi">pkg</span>.<span class="pl-c1">name</span>);</td>
      </tr>
      <tr>
        <td id="L1159" class="blob-num js-line-number" data-line-number="1159"></td>
        <td id="LC1159" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">packagesIndex</span>.<span class="pl-c1">push</span>(pkg);</td>
      </tr>
      <tr>
        <td id="L1160" class="blob-num js-line-number" data-line-number="1160"></td>
        <td id="LC1160" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L1161" class="blob-num js-line-number" data-line-number="1161"></td>
        <td id="LC1161" class="blob-code blob-code-inner js-file-line">        );</td>
      </tr>
      <tr>
        <td id="L1162" class="blob-num js-line-number" data-line-number="1162"></td>
        <td id="LC1162" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">packagesIndex</span>.<span class="pl-c1">sort</span>(descSorterByKOrName);</td>
      </tr>
      <tr>
        <td id="L1163" class="blob-num js-line-number" data-line-number="1163"></td>
        <td id="LC1163" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1164" class="blob-num js-line-number" data-line-number="1164"></td>
        <td id="LC1164" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// create
																									// urlArgs
																									// index</span></td>
      </tr>
      <tr>
        <td id="L1165" class="blob-num js-line-number" data-line-number="1165"></td>
        <td id="LC1165" class="blob-code blob-code-inner js-file-line">        urlArgsIndex <span class="pl-k">=</span> <span class="pl-en">createKVSortedIndex</span>(<span class="pl-smi">requireConf</span>.<span class="pl-smi">urlArgs</span>, <span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L1166" class="blob-num js-line-number" data-line-number="1166"></td>
        <td id="LC1166" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1167" class="blob-num js-line-number" data-line-number="1167"></td>
        <td id="LC1167" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// create
																									// noRequests
																									// index</span></td>
      </tr>
      <tr>
        <td id="L1168" class="blob-num js-line-number" data-line-number="1168"></td>
        <td id="LC1168" class="blob-code blob-code-inner js-file-line">        noRequestsIndex <span class="pl-k">=</span> <span class="pl-en">createKVSortedIndex</span>(<span class="pl-smi">requireConf</span>.<span class="pl-smi">noRequests</span>);</td>
      </tr>
      <tr>
        <td id="L1169" class="blob-num js-line-number" data-line-number="1169"></td>
        <td id="LC1169" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">each</span>(noRequestsIndex, <span class="pl-k">function</span> (<span class="pl-smi">item</span>) {</td>
      </tr>
      <tr>
        <td id="L1170" class="blob-num js-line-number" data-line-number="1170"></td>
        <td id="LC1170" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> value <span class="pl-k">=</span> <span class="pl-smi">item</span>.<span class="pl-smi">v</span>;</td>
      </tr>
      <tr>
        <td id="L1171" class="blob-num js-line-number" data-line-number="1171"></td>
        <td id="LC1171" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> mapIndex <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L1172" class="blob-num js-line-number" data-line-number="1172"></td>
        <td id="LC1172" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">item</span>.<span class="pl-smi">v</span> <span class="pl-k">=</span> mapIndex;</td>
      </tr>
      <tr>
        <td id="L1173" class="blob-num js-line-number" data-line-number="1173"></td>
        <td id="LC1173" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1174" class="blob-num js-line-number" data-line-number="1174"></td>
        <td id="LC1174" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-k">!</span>(value <span class="pl-k">instanceof</span> <span class="pl-c1">Array</span>)) {</td>
      </tr>
      <tr>
        <td id="L1175" class="blob-num js-line-number" data-line-number="1175"></td>
        <td id="LC1175" class="blob-code blob-code-inner js-file-line">                value <span class="pl-k">=</span> [value];</td>
      </tr>
      <tr>
        <td id="L1176" class="blob-num js-line-number" data-line-number="1176"></td>
        <td id="LC1176" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L1177" class="blob-num js-line-number" data-line-number="1177"></td>
        <td id="LC1177" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1178" class="blob-num js-line-number" data-line-number="1178"></td>
        <td id="LC1178" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">each</span>(value, <span class="pl-k">function</span> (<span class="pl-smi">meetId</span>) {</td>
      </tr>
      <tr>
        <td id="L1179" class="blob-num js-line-number" data-line-number="1179"></td>
        <td id="LC1179" class="blob-code blob-code-inner js-file-line">                mapIndex[meetId] <span class="pl-k">=</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L1180" class="blob-num js-line-number" data-line-number="1180"></td>
        <td id="LC1180" class="blob-code blob-code-inner js-file-line">            });</td>
      </tr>
      <tr>
        <td id="L1181" class="blob-num js-line-number" data-line-number="1181"></td>
        <td id="LC1181" class="blob-code blob-code-inner js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L1182" class="blob-num js-line-number" data-line-number="1182"></td>
        <td id="LC1182" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1183" class="blob-num js-line-number" data-line-number="1183"></td>
        <td id="LC1183" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1184" class="blob-num js-line-number" data-line-number="1184"></td>
        <td id="LC1184" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">/**
																								 * </span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1185" class="blob-num js-line-number" data-line-number="1185"></td>
																								 * <td id="LC1185" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * 对配置信息的索引进行检索</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1186" class="blob-num js-line-number" data-line-number="1186"></td>
																								 * <td id="LC1186" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1187" class="blob-num js-line-number" data-line-number="1187"></td>
																								 * <td id="LC1187" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@inner</span></span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1188" class="blob-num js-line-number" data-line-number="1188"></td>
																								 * <td id="LC1188" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@param</span>
																								 * <span
																								 * class="pl-en">{string}</span>
																								 * <span
																								 * class="pl-smi">value</span>
																								 * 要检索的值</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1189" class="blob-num js-line-number" data-line-number="1189"></td>
																								 * <td id="LC1189" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@param</span>
																								 * <span
																								 * class="pl-en">{Array}</span>
																								 * <span
																								 * class="pl-smi">index</span>
																								 * 索引对象</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1190" class="blob-num js-line-number" data-line-number="1190"></td>
																								 * <td id="LC1190" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@param</span>
																								 * <span
																								 * class="pl-en">{Function}</span>
																								 * <span
																								 * class="pl-smi">hitBehavior</span>
																								 * 索引命中的行为函数</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1191" class="blob-num js-line-number" data-line-number="1191"></td>
																								 * <td id="LC1191" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c">
																								 */</span></td>
      </tr>
      <tr>
        <td id="L1192" class="blob-num js-line-number" data-line-number="1192"></td>
        <td id="LC1192" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">indexRetrieve</span>(<span class="pl-smi">value</span>, <span class="pl-smi">index</span>, <span class="pl-smi">hitBehavior</span>) {</td>
      </tr>
      <tr>
        <td id="L1193" class="blob-num js-line-number" data-line-number="1193"></td>
        <td id="LC1193" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">each</span>(index, <span class="pl-k">function</span> (<span class="pl-smi">item</span>) {</td>
      </tr>
      <tr>
        <td id="L1194" class="blob-num js-line-number" data-line-number="1194"></td>
        <td id="LC1194" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-smi">item</span>.<span class="pl-smi">reg</span>.<span class="pl-c1">test</span>(value)) {</td>
      </tr>
      <tr>
        <td id="L1195" class="blob-num js-line-number" data-line-number="1195"></td>
        <td id="LC1195" class="blob-code blob-code-inner js-file-line">                <span class="pl-en">hitBehavior</span>(<span class="pl-smi">item</span>.<span class="pl-smi">v</span>, <span class="pl-smi">item</span>.<span class="pl-smi">k</span>, item);</td>
      </tr>
      <tr>
        <td id="L1196" class="blob-num js-line-number" data-line-number="1196"></td>
        <td id="LC1196" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L1197" class="blob-num js-line-number" data-line-number="1197"></td>
        <td id="LC1197" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L1198" class="blob-num js-line-number" data-line-number="1198"></td>
        <td id="LC1198" class="blob-code blob-code-inner js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L1199" class="blob-num js-line-number" data-line-number="1199"></td>
        <td id="LC1199" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1200" class="blob-num js-line-number" data-line-number="1200"></td>
        <td id="LC1200" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1201" class="blob-num js-line-number" data-line-number="1201"></td>
        <td id="LC1201" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">/**
																								 * </span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1202" class="blob-num js-line-number" data-line-number="1202"></td>
																								 * <td id="LC1202" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * 将`模块标识+&#39;.extension&#39;`形式的字符串转换成相对的url</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1203" class="blob-num js-line-number" data-line-number="1203"></td>
																								 * <td id="LC1203" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1204" class="blob-num js-line-number" data-line-number="1204"></td>
																								 * <td id="LC1204" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@inner</span></span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1205" class="blob-num js-line-number" data-line-number="1205"></td>
																								 * <td id="LC1205" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@param</span>
																								 * <span
																								 * class="pl-en">{string}</span>
																								 * <span
																								 * class="pl-smi">source</span>
																								 * 源字符串</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1206" class="blob-num js-line-number" data-line-number="1206"></td>
																								 * <td id="LC1206" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@return</span>
																								 * <span
																								 * class="pl-en">{string}</span>
																								 * <span
																								 * class="pl-smi">url</span></span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1207" class="blob-num js-line-number" data-line-number="1207"></td>
																								 * <td id="LC1207" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c">
																								 */</span></td>
      </tr>
      <tr>
        <td id="L1208" class="blob-num js-line-number" data-line-number="1208"></td>
        <td id="LC1208" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">toUrl</span>(<span class="pl-smi">source</span>) {</td>
      </tr>
      <tr>
        <td id="L1209" class="blob-num js-line-number" data-line-number="1209"></td>
        <td id="LC1209" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// 分离
																									// 模块标识
																									// 和
																									// .extension</span></td>
      </tr>
      <tr>
        <td id="L1210" class="blob-num js-line-number" data-line-number="1210"></td>
        <td id="LC1210" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> extReg <span class="pl-k">=</span><span class="pl-sr"> <span class="pl-pds">/</span>(<span class="pl-cce">\.</span><span class="pl-c1">[<span class="pl-c1">a-z0-9</span>]</span><span class="pl-k">+</span>)<span class="pl-k">$</span><span class="pl-pds">/</span>i</span>;</td>
      </tr>
      <tr>
        <td id="L1211" class="blob-num js-line-number" data-line-number="1211"></td>
        <td id="LC1211" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> queryReg <span class="pl-k">=</span><span class="pl-sr"> <span class="pl-pds">/</span>(<span class="pl-cce">\?</span><span class="pl-c1">[<span class="pl-k">^</span>#]</span><span class="pl-k">*</span>)<span class="pl-k">$</span><span class="pl-pds">/</span></span>;</td>
      </tr>
      <tr>
        <td id="L1212" class="blob-num js-line-number" data-line-number="1212"></td>
        <td id="LC1212" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> extname <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1213" class="blob-num js-line-number" data-line-number="1213"></td>
        <td id="LC1213" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> id <span class="pl-k">=</span> source;</td>
      </tr>
      <tr>
        <td id="L1214" class="blob-num js-line-number" data-line-number="1214"></td>
        <td id="LC1214" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> query <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1215" class="blob-num js-line-number" data-line-number="1215"></td>
        <td id="LC1215" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1216" class="blob-num js-line-number" data-line-number="1216"></td>
        <td id="LC1216" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-smi">queryReg</span>.<span class="pl-c1">test</span>(source)) {</td>
      </tr>
      <tr>
        <td id="L1217" class="blob-num js-line-number" data-line-number="1217"></td>
        <td id="LC1217" class="blob-code blob-code-inner js-file-line">            query <span class="pl-k">=</span> <span class="pl-c1">RegExp</span>.<span class="pl-smi">$1</span>;</td>
      </tr>
      <tr>
        <td id="L1218" class="blob-num js-line-number" data-line-number="1218"></td>
        <td id="LC1218" class="blob-code blob-code-inner js-file-line">            source <span class="pl-k">=</span> <span class="pl-smi">source</span>.<span class="pl-c1">replace</span>(queryReg, <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1219" class="blob-num js-line-number" data-line-number="1219"></td>
        <td id="LC1219" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1220" class="blob-num js-line-number" data-line-number="1220"></td>
        <td id="LC1220" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1221" class="blob-num js-line-number" data-line-number="1221"></td>
        <td id="LC1221" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-smi">extReg</span>.<span class="pl-c1">test</span>(source)) {</td>
      </tr>
      <tr>
        <td id="L1222" class="blob-num js-line-number" data-line-number="1222"></td>
        <td id="LC1222" class="blob-code blob-code-inner js-file-line">            extname <span class="pl-k">=</span> <span class="pl-c1">RegExp</span>.<span class="pl-smi">$1</span>;</td>
      </tr>
      <tr>
        <td id="L1223" class="blob-num js-line-number" data-line-number="1223"></td>
        <td id="LC1223" class="blob-code blob-code-inner js-file-line">            id <span class="pl-k">=</span> <span class="pl-smi">source</span>.<span class="pl-c1">replace</span>(extReg, <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1224" class="blob-num js-line-number" data-line-number="1224"></td>
        <td id="LC1224" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1225" class="blob-num js-line-number" data-line-number="1225"></td>
        <td id="LC1225" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1226" class="blob-num js-line-number" data-line-number="1226"></td>
        <td id="LC1226" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> url <span class="pl-k">=</span> id;</td>
      </tr>
      <tr>
        <td id="L1227" class="blob-num js-line-number" data-line-number="1227"></td>
        <td id="LC1227" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1228" class="blob-num js-line-number" data-line-number="1228"></td>
        <td id="LC1228" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// paths处理和匹配</span></td>
      </tr>
      <tr>
        <td id="L1229" class="blob-num js-line-number" data-line-number="1229"></td>
        <td id="LC1229" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> isPathMap;</td>
      </tr>
      <tr>
        <td id="L1230" class="blob-num js-line-number" data-line-number="1230"></td>
        <td id="LC1230" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">indexRetrieve</span>(id, pathsIndex, <span class="pl-k">function</span> (<span class="pl-smi">value</span>, <span class="pl-smi">key</span>) {</td>
      </tr>
      <tr>
        <td id="L1231" class="blob-num js-line-number" data-line-number="1231"></td>
        <td id="LC1231" class="blob-code blob-code-inner js-file-line">            url <span class="pl-k">=</span> <span class="pl-smi">url</span>.<span class="pl-c1">replace</span>(key, value);</td>
      </tr>
      <tr>
        <td id="L1232" class="blob-num js-line-number" data-line-number="1232"></td>
        <td id="LC1232" class="blob-code blob-code-inner js-file-line">            isPathMap <span class="pl-k">=</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L1233" class="blob-num js-line-number" data-line-number="1233"></td>
        <td id="LC1233" class="blob-code blob-code-inner js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L1234" class="blob-num js-line-number" data-line-number="1234"></td>
        <td id="LC1234" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1235" class="blob-num js-line-number" data-line-number="1235"></td>
        <td id="LC1235" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// packages处理和匹配</span></td>
      </tr>
      <tr>
        <td id="L1236" class="blob-num js-line-number" data-line-number="1236"></td>
        <td id="LC1236" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-k">!</span>isPathMap) {</td>
      </tr>
      <tr>
        <td id="L1237" class="blob-num js-line-number" data-line-number="1237"></td>
        <td id="LC1237" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">indexRetrieve</span>(id, packagesIndex, <span class="pl-k">function</span> (<span class="pl-smi">value</span>, <span class="pl-smi">key</span>, <span class="pl-smi">item</span>) {</td>
      </tr>
      <tr>
        <td id="L1238" class="blob-num js-line-number" data-line-number="1238"></td>
        <td id="LC1238" class="blob-code blob-code-inner js-file-line">                url <span class="pl-k">=</span> <span class="pl-smi">url</span>.<span class="pl-c1">replace</span>(<span class="pl-smi">item</span>.<span class="pl-c1">name</span>, <span class="pl-smi">item</span>.<span class="pl-c1">location</span>);</td>
      </tr>
      <tr>
        <td id="L1239" class="blob-num js-line-number" data-line-number="1239"></td>
        <td id="LC1239" class="blob-code blob-code-inner js-file-line">            });</td>
      </tr>
      <tr>
        <td id="L1240" class="blob-num js-line-number" data-line-number="1240"></td>
        <td id="LC1240" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1241" class="blob-num js-line-number" data-line-number="1241"></td>
        <td id="LC1241" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1242" class="blob-num js-line-number" data-line-number="1242"></td>
        <td id="LC1242" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// 相对路径时，附加baseUrl</span></td>
      </tr>
      <tr>
        <td id="L1243" class="blob-num js-line-number" data-line-number="1243"></td>
        <td id="LC1243" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(<span class="pl-c1">[<span class="pl-c1">a-z</span>]</span><span class="pl-k">{2,10}</span>:<span class="pl-cce">\/</span>)<span class="pl-k">?</span><span class="pl-cce">\/</span><span class="pl-pds">/</span>i</span>.<span class="pl-c1">test</span>(url)) {</td>
      </tr>
      <tr>
        <td id="L1244" class="blob-num js-line-number" data-line-number="1244"></td>
        <td id="LC1244" class="blob-code blob-code-inner js-file-line">            url <span class="pl-k">=</span> <span class="pl-smi">requireConf</span>.<span class="pl-smi">baseUrl</span> <span class="pl-k">+</span> url;</td>
      </tr>
      <tr>
        <td id="L1245" class="blob-num js-line-number" data-line-number="1245"></td>
        <td id="LC1245" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1246" class="blob-num js-line-number" data-line-number="1246"></td>
        <td id="LC1246" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1247" class="blob-num js-line-number" data-line-number="1247"></td>
        <td id="LC1247" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// 附加
																									// .extension
																									// 和
																									// query</span></td>
      </tr>
      <tr>
        <td id="L1248" class="blob-num js-line-number" data-line-number="1248"></td>
        <td id="LC1248" class="blob-code blob-code-inner js-file-line">        url <span class="pl-k">+=</span> extname <span class="pl-k">+</span> query;</td>
      </tr>
      <tr>
        <td id="L1249" class="blob-num js-line-number" data-line-number="1249"></td>
        <td id="LC1249" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1250" class="blob-num js-line-number" data-line-number="1250"></td>
        <td id="LC1250" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// urlArgs处理和匹配</span></td>
      </tr>
      <tr>
        <td id="L1251" class="blob-num js-line-number" data-line-number="1251"></td>
        <td id="LC1251" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">indexRetrieve</span>(id, urlArgsIndex, <span class="pl-k">function</span> (<span class="pl-smi">value</span>) {</td>
      </tr>
      <tr>
        <td id="L1252" class="blob-num js-line-number" data-line-number="1252"></td>
        <td id="LC1252" class="blob-code blob-code-inner js-file-line">            url <span class="pl-k">+=</span> (<span class="pl-smi">url</span>.<span class="pl-c1">indexOf</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>?<span class="pl-pds">&#39;</span></span>) <span class="pl-k">&gt;</span> <span class="pl-c1">0</span> <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&amp;<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>?<span class="pl-pds">&#39;</span></span>) <span class="pl-k">+</span> value;</td>
      </tr>
      <tr>
        <td id="L1253" class="blob-num js-line-number" data-line-number="1253"></td>
        <td id="LC1253" class="blob-code blob-code-inner js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L1254" class="blob-num js-line-number" data-line-number="1254"></td>
        <td id="LC1254" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1255" class="blob-num js-line-number" data-line-number="1255"></td>
        <td id="LC1255" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> url;</td>
      </tr>
      <tr>
        <td id="L1256" class="blob-num js-line-number" data-line-number="1256"></td>
        <td id="LC1256" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1257" class="blob-num js-line-number" data-line-number="1257"></td>
        <td id="LC1257" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1258" class="blob-num js-line-number" data-line-number="1258"></td>
        <td id="LC1258" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">/**
																								 * </span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1259" class="blob-num js-line-number" data-line-number="1259"></td>
																								 * <td id="LC1259" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * 创建local
																								 * require函数</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1260" class="blob-num js-line-number" data-line-number="1260"></td>
																								 * <td id="LC1260" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1261" class="blob-num js-line-number" data-line-number="1261"></td>
																								 * <td id="LC1261" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@inner</span></span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1262" class="blob-num js-line-number" data-line-number="1262"></td>
																								 * <td id="LC1262" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@param</span>
																								 * <span
																								 * class="pl-en">{number}</span>
																								 * <span
																								 * class="pl-smi">baseId</span>
																								 * 当前module
																								 * id</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1263" class="blob-num js-line-number" data-line-number="1263"></td>
																								 * <td id="LC1263" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@return</span>
																								 * <span
																								 * class="pl-en">{Function}</span>
																								 * <span
																								 * class="pl-smi">local</span>
																								 * require函数</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1264" class="blob-num js-line-number" data-line-number="1264"></td>
																								 * <td id="LC1264" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c">
																								 */</span></td>
      </tr>
      <tr>
        <td id="L1265" class="blob-num js-line-number" data-line-number="1265"></td>
        <td id="LC1265" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">createLocalRequire</span>(<span class="pl-smi">baseId</span>) {</td>
      </tr>
      <tr>
        <td id="L1266" class="blob-num js-line-number" data-line-number="1266"></td>
        <td id="LC1266" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> requiredCache <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L1267" class="blob-num js-line-number" data-line-number="1267"></td>
        <td id="LC1267" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">function</span> <span class="pl-en">req</span>(<span class="pl-smi">requireId</span>, <span class="pl-smi">callback</span>) {</td>
      </tr>
      <tr>
        <td id="L1268" class="blob-num js-line-number" data-line-number="1268"></td>
        <td id="LC1268" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-k">typeof</span> requireId <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>string<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L1269" class="blob-num js-line-number" data-line-number="1269"></td>
        <td id="LC1269" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> (<span class="pl-k">!</span>requiredCache[requireId]) {</td>
      </tr>
      <tr>
        <td id="L1270" class="blob-num js-line-number" data-line-number="1270"></td>
        <td id="LC1270" class="blob-code blob-code-inner js-file-line">                    requiredCache[requireId] <span class="pl-k">=</span></td>
      </tr>
      <tr>
        <td id="L1271" class="blob-num js-line-number" data-line-number="1271"></td>
        <td id="LC1271" class="blob-code blob-code-inner js-file-line">                        <span class="pl-en">nativeRequire</span>(<span class="pl-en">normalize</span>(requireId, baseId));</td>
      </tr>
      <tr>
        <td id="L1272" class="blob-num js-line-number" data-line-number="1272"></td>
        <td id="LC1272" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L1273" class="blob-num js-line-number" data-line-number="1273"></td>
        <td id="LC1273" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1274" class="blob-num js-line-number" data-line-number="1274"></td>
        <td id="LC1274" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">return</span> requiredCache[requireId];</td>
      </tr>
      <tr>
        <td id="L1275" class="blob-num js-line-number" data-line-number="1275"></td>
        <td id="LC1275" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L1276" class="blob-num js-line-number" data-line-number="1276"></td>
        <td id="LC1276" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">else</span> <span class="pl-k">if</span> (requireId <span class="pl-k">instanceof</span> <span class="pl-c1">Array</span>) {</td>
      </tr>
      <tr>
        <td id="L1277" class="blob-num js-line-number" data-line-number="1277"></td>
        <td id="LC1277" class="blob-code blob-code-inner js-file-line">                <span class="pl-c">// 分析是否有resource，取出pluginModule先</span></td>
      </tr>
      <tr>
        <td id="L1278" class="blob-num js-line-number" data-line-number="1278"></td>
        <td id="LC1278" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> pluginModules <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L1279" class="blob-num js-line-number" data-line-number="1279"></td>
        <td id="LC1279" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> pureModules <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L1280" class="blob-num js-line-number" data-line-number="1280"></td>
        <td id="LC1280" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> normalizedIds <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L1281" class="blob-num js-line-number" data-line-number="1281"></td>
        <td id="LC1281" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1282" class="blob-num js-line-number" data-line-number="1282"></td>
        <td id="LC1282" class="blob-code blob-code-inner js-file-line">                <span class="pl-en">each</span>(</td>
      </tr>
      <tr>
        <td id="L1283" class="blob-num js-line-number" data-line-number="1283"></td>
        <td id="LC1283" class="blob-code blob-code-inner js-file-line">                    requireId,</td>
      </tr>
      <tr>
        <td id="L1284" class="blob-num js-line-number" data-line-number="1284"></td>
        <td id="LC1284" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">function</span> (<span class="pl-smi">id</span>, <span class="pl-smi">i</span>) {</td>
      </tr>
      <tr>
        <td id="L1285" class="blob-num js-line-number" data-line-number="1285"></td>
        <td id="LC1285" class="blob-code blob-code-inner js-file-line">                        <span class="pl-k">var</span> idInfo <span class="pl-k">=</span> <span class="pl-en">parseId</span>(id);</td>
      </tr>
      <tr>
        <td id="L1286" class="blob-num js-line-number" data-line-number="1286"></td>
        <td id="LC1286" class="blob-code blob-code-inner js-file-line">                        <span class="pl-k">var</span> absId <span class="pl-k">=</span> <span class="pl-en">normalize</span>(<span class="pl-smi">idInfo</span>.<span class="pl-smi">mod</span>, baseId);</td>
      </tr>
      <tr>
        <td id="L1287" class="blob-num js-line-number" data-line-number="1287"></td>
        <td id="LC1287" class="blob-code blob-code-inner js-file-line">                        <span class="pl-smi">pureModules</span>.<span class="pl-c1">push</span>(absId);</td>
      </tr>
      <tr>
        <td id="L1288" class="blob-num js-line-number" data-line-number="1288"></td>
        <td id="LC1288" class="blob-code blob-code-inner js-file-line">                        autoDefineModules[absId] <span class="pl-k">=</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L1289" class="blob-num js-line-number" data-line-number="1289"></td>
        <td id="LC1289" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1290" class="blob-num js-line-number" data-line-number="1290"></td>
        <td id="LC1290" class="blob-code blob-code-inner js-file-line">                        <span class="pl-k">if</span> (<span class="pl-smi">idInfo</span>.<span class="pl-smi">res</span>) {</td>
      </tr>
      <tr>
        <td id="L1291" class="blob-num js-line-number" data-line-number="1291"></td>
        <td id="LC1291" class="blob-code blob-code-inner js-file-line">                            <span class="pl-smi">pluginModules</span>.<span class="pl-c1">push</span>(absId);</td>
      </tr>
      <tr>
        <td id="L1292" class="blob-num js-line-number" data-line-number="1292"></td>
        <td id="LC1292" class="blob-code blob-code-inner js-file-line">                            normalizedIds[i] <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L1293" class="blob-num js-line-number" data-line-number="1293"></td>
        <td id="LC1293" class="blob-code blob-code-inner js-file-line">                        }</td>
      </tr>
      <tr>
        <td id="L1294" class="blob-num js-line-number" data-line-number="1294"></td>
        <td id="LC1294" class="blob-code blob-code-inner js-file-line">                        <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1295" class="blob-num js-line-number" data-line-number="1295"></td>
        <td id="LC1295" class="blob-code blob-code-inner js-file-line">                            normalizedIds[i] <span class="pl-k">=</span> absId;</td>
      </tr>
      <tr>
        <td id="L1296" class="blob-num js-line-number" data-line-number="1296"></td>
        <td id="LC1296" class="blob-code blob-code-inner js-file-line">                        }</td>
      </tr>
      <tr>
        <td id="L1297" class="blob-num js-line-number" data-line-number="1297"></td>
        <td id="LC1297" class="blob-code blob-code-inner js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L1298" class="blob-num js-line-number" data-line-number="1298"></td>
        <td id="LC1298" class="blob-code blob-code-inner js-file-line">                );</td>
      </tr>
      <tr>
        <td id="L1299" class="blob-num js-line-number" data-line-number="1299"></td>
        <td id="LC1299" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1300" class="blob-num js-line-number" data-line-number="1300"></td>
        <td id="LC1300" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> noRequestModules <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L1301" class="blob-num js-line-number" data-line-number="1301"></td>
        <td id="LC1301" class="blob-code blob-code-inner js-file-line">                <span class="pl-en">each</span>(</td>
      </tr>
      <tr>
        <td id="L1302" class="blob-num js-line-number" data-line-number="1302"></td>
        <td id="LC1302" class="blob-code blob-code-inner js-file-line">                    pureModules,</td>
      </tr>
      <tr>
        <td id="L1303" class="blob-num js-line-number" data-line-number="1303"></td>
        <td id="LC1303" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">function</span> (<span class="pl-smi">id</span>) {</td>
      </tr>
      <tr>
        <td id="L1304" class="blob-num js-line-number" data-line-number="1304"></td>
        <td id="LC1304" class="blob-code blob-code-inner js-file-line">                        <span class="pl-k">var</span> meet;</td>
      </tr>
      <tr>
        <td id="L1305" class="blob-num js-line-number" data-line-number="1305"></td>
        <td id="LC1305" class="blob-code blob-code-inner js-file-line">                        <span class="pl-en">indexRetrieve</span>(</td>
      </tr>
      <tr>
        <td id="L1306" class="blob-num js-line-number" data-line-number="1306"></td>
        <td id="LC1306" class="blob-code blob-code-inner js-file-line">                            id,</td>
      </tr>
      <tr>
        <td id="L1307" class="blob-num js-line-number" data-line-number="1307"></td>
        <td id="LC1307" class="blob-code blob-code-inner js-file-line">                            noRequestsIndex,</td>
      </tr>
      <tr>
        <td id="L1308" class="blob-num js-line-number" data-line-number="1308"></td>
        <td id="LC1308" class="blob-code blob-code-inner js-file-line">                            <span class="pl-k">function</span> (<span class="pl-smi">value</span>) {</td>
      </tr>
      <tr>
        <td id="L1309" class="blob-num js-line-number" data-line-number="1309"></td>
        <td id="LC1309" class="blob-code blob-code-inner js-file-line">                                meet <span class="pl-k">=</span> value;</td>
      </tr>
      <tr>
        <td id="L1310" class="blob-num js-line-number" data-line-number="1310"></td>
        <td id="LC1310" class="blob-code blob-code-inner js-file-line">                            }</td>
      </tr>
      <tr>
        <td id="L1311" class="blob-num js-line-number" data-line-number="1311"></td>
        <td id="LC1311" class="blob-code blob-code-inner js-file-line">                        );</td>
      </tr>
      <tr>
        <td id="L1312" class="blob-num js-line-number" data-line-number="1312"></td>
        <td id="LC1312" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1313" class="blob-num js-line-number" data-line-number="1313"></td>
        <td id="LC1313" class="blob-code blob-code-inner js-file-line">                        <span class="pl-k">if</span> (meet) {</td>
      </tr>
      <tr>
        <td id="L1314" class="blob-num js-line-number" data-line-number="1314"></td>
        <td id="LC1314" class="blob-code blob-code-inner js-file-line">                            <span class="pl-k">if</span> (meet[<span class="pl-s"><span class="pl-pds">&#39;</span>*<span class="pl-pds">&#39;</span></span>]) {</td>
      </tr>
      <tr>
        <td id="L1315" class="blob-num js-line-number" data-line-number="1315"></td>
        <td id="LC1315" class="blob-code blob-code-inner js-file-line">                                noRequestModules[id] <span class="pl-k">=</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L1316" class="blob-num js-line-number" data-line-number="1316"></td>
        <td id="LC1316" class="blob-code blob-code-inner js-file-line">                            }</td>
      </tr>
      <tr>
        <td id="L1317" class="blob-num js-line-number" data-line-number="1317"></td>
        <td id="LC1317" class="blob-code blob-code-inner js-file-line">                            <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1318" class="blob-num js-line-number" data-line-number="1318"></td>
        <td id="LC1318" class="blob-code blob-code-inner js-file-line">                                <span class="pl-en">each</span>(pureModules, <span class="pl-k">function</span> (<span class="pl-smi">meetId</span>) {</td>
      </tr>
      <tr>
        <td id="L1319" class="blob-num js-line-number" data-line-number="1319"></td>
        <td id="LC1319" class="blob-code blob-code-inner js-file-line">                                    <span class="pl-k">if</span> (meet[meetId]) {</td>
      </tr>
      <tr>
        <td id="L1320" class="blob-num js-line-number" data-line-number="1320"></td>
        <td id="LC1320" class="blob-code blob-code-inner js-file-line">                                        noRequestModules[id] <span class="pl-k">=</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L1321" class="blob-num js-line-number" data-line-number="1321"></td>
        <td id="LC1321" class="blob-code blob-code-inner js-file-line">                                        <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L1322" class="blob-num js-line-number" data-line-number="1322"></td>
        <td id="LC1322" class="blob-code blob-code-inner js-file-line">                                    }</td>
      </tr>
      <tr>
        <td id="L1323" class="blob-num js-line-number" data-line-number="1323"></td>
        <td id="LC1323" class="blob-code blob-code-inner js-file-line">                                });</td>
      </tr>
      <tr>
        <td id="L1324" class="blob-num js-line-number" data-line-number="1324"></td>
        <td id="LC1324" class="blob-code blob-code-inner js-file-line">                            }</td>
      </tr>
      <tr>
        <td id="L1325" class="blob-num js-line-number" data-line-number="1325"></td>
        <td id="LC1325" class="blob-code blob-code-inner js-file-line">                        }</td>
      </tr>
      <tr>
        <td id="L1326" class="blob-num js-line-number" data-line-number="1326"></td>
        <td id="LC1326" class="blob-code blob-code-inner js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L1327" class="blob-num js-line-number" data-line-number="1327"></td>
        <td id="LC1327" class="blob-code blob-code-inner js-file-line">                );</td>
      </tr>
      <tr>
        <td id="L1328" class="blob-num js-line-number" data-line-number="1328"></td>
        <td id="LC1328" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1329" class="blob-num js-line-number" data-line-number="1329"></td>
        <td id="LC1329" class="blob-code blob-code-inner js-file-line">                <span class="pl-c">// 加载模块</span></td>
      </tr>
      <tr>
        <td id="L1330" class="blob-num js-line-number" data-line-number="1330"></td>
        <td id="LC1330" class="blob-code blob-code-inner js-file-line">                <span class="pl-en">nativeRequire</span>(</td>
      </tr>
      <tr>
        <td id="L1331" class="blob-num js-line-number" data-line-number="1331"></td>
        <td id="LC1331" class="blob-code blob-code-inner js-file-line">                    pureModules,</td>
      </tr>
      <tr>
        <td id="L1332" class="blob-num js-line-number" data-line-number="1332"></td>
        <td id="LC1332" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L1333" class="blob-num js-line-number" data-line-number="1333"></td>
        <td id="LC1333" class="blob-code blob-code-inner js-file-line">                        <span class="pl-c">/*
																													 * jshint
																													 * ignore:start
																													 */</span></td>
      </tr>
      <tr>
        <td id="L1334" class="blob-num js-line-number" data-line-number="1334"></td>
        <td id="LC1334" class="blob-code blob-code-inner js-file-line">                        <span class="pl-en">each</span>(normalizedIds, <span class="pl-k">function</span> (<span class="pl-smi">id</span>, <span class="pl-smi">i</span>) {</td>
      </tr>
      <tr>
        <td id="L1335" class="blob-num js-line-number" data-line-number="1335"></td>
        <td id="LC1335" class="blob-code blob-code-inner js-file-line">                            <span class="pl-k">if</span> (id <span class="pl-k">==</span> <span class="pl-c1">null</span>) {</td>
      </tr>
      <tr>
        <td id="L1336" class="blob-num js-line-number" data-line-number="1336"></td>
        <td id="LC1336" class="blob-code blob-code-inner js-file-line">                                normalizedIds[i] <span class="pl-k">=</span> <span class="pl-en">normalize</span>(requireId[i], baseId);</td>
      </tr>
      <tr>
        <td id="L1337" class="blob-num js-line-number" data-line-number="1337"></td>
        <td id="LC1337" class="blob-code blob-code-inner js-file-line">                            }</td>
      </tr>
      <tr>
        <td id="L1338" class="blob-num js-line-number" data-line-number="1338"></td>
        <td id="LC1338" class="blob-code blob-code-inner js-file-line">                        });</td>
      </tr>
      <tr>
        <td id="L1339" class="blob-num js-line-number" data-line-number="1339"></td>
        <td id="LC1339" class="blob-code blob-code-inner js-file-line">                        <span class="pl-c">/*
																													 * jshint
																													 * ignore:end
																													 */</span></td>
      </tr>
      <tr>
        <td id="L1340" class="blob-num js-line-number" data-line-number="1340"></td>
        <td id="LC1340" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1341" class="blob-num js-line-number" data-line-number="1341"></td>
        <td id="LC1341" class="blob-code blob-code-inner js-file-line">                        <span class="pl-en">nativeRequire</span>(normalizedIds, callback, baseId);</td>
      </tr>
      <tr>
        <td id="L1342" class="blob-num js-line-number" data-line-number="1342"></td>
        <td id="LC1342" class="blob-code blob-code-inner js-file-line">                    },</td>
      </tr>
      <tr>
        <td id="L1343" class="blob-num js-line-number" data-line-number="1343"></td>
        <td id="LC1343" class="blob-code blob-code-inner js-file-line">                    baseId,</td>
      </tr>
      <tr>
        <td id="L1344" class="blob-num js-line-number" data-line-number="1344"></td>
        <td id="LC1344" class="blob-code blob-code-inner js-file-line">                    noRequestModules</td>
      </tr>
      <tr>
        <td id="L1345" class="blob-num js-line-number" data-line-number="1345"></td>
        <td id="LC1345" class="blob-code blob-code-inner js-file-line">                );</td>
      </tr>
      <tr>
        <td id="L1346" class="blob-num js-line-number" data-line-number="1346"></td>
        <td id="LC1346" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L1347" class="blob-num js-line-number" data-line-number="1347"></td>
        <td id="LC1347" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1348" class="blob-num js-line-number" data-line-number="1348"></td>
        <td id="LC1348" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1349" class="blob-num js-line-number" data-line-number="1349"></td>
        <td id="LC1349" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">/**
																									 * </span></td>
																									 * </tr>
																									 * <tr>
																									 * <td id="L1350" class="blob-num js-line-number" data-line-number="1350"></td>
																									 * <td id="LC1350" class="blob-code blob-code-inner js-file-line"><span
																									 * class="pl-c"> *
																									 * 将[module
																									 * ID] +
																									 * &#39;.extension&#39;格式的字符串转换成url</span></td>
																									 * </tr>
																									 * <tr>
																									 * <td id="L1351" class="blob-num js-line-number" data-line-number="1351"></td>
																									 * <td id="LC1351" class="blob-code blob-code-inner js-file-line"><span
																									 * class="pl-c"> *</span></td>
																									 * </tr>
																									 * <tr>
																									 * <td id="L1352" class="blob-num js-line-number" data-line-number="1352"></td>
																									 * <td id="LC1352" class="blob-code blob-code-inner js-file-line"><span
																									 * class="pl-c"> *
																									 * <span
																									 * class="pl-k">@inner</span></span></td>
																									 * </tr>
																									 * <tr>
																									 * <td id="L1353" class="blob-num js-line-number" data-line-number="1353"></td>
																									 * <td id="LC1353" class="blob-code blob-code-inner js-file-line"><span
																									 * class="pl-c"> *
																									 * <span
																									 * class="pl-k">@param</span>
																									 * <span
																									 * class="pl-en">{string}</span>
																									 * <span
																									 * class="pl-smi">id</span>
																									 * 符合描述格式的源字符串</span></td>
																									 * </tr>
																									 * <tr>
																									 * <td id="L1354" class="blob-num js-line-number" data-line-number="1354"></td>
																									 * <td id="LC1354" class="blob-code blob-code-inner js-file-line"><span
																									 * class="pl-c"> *
																									 * <span
																									 * class="pl-k">@return</span>
																									 * <span
																									 * class="pl-en">{string}</span>
																									 * <span
																									 * class="pl-smi">url</span></span></td>
																									 * </tr>
																									 * <tr>
																									 * <td id="L1355" class="blob-num js-line-number" data-line-number="1355"></td>
																									 * <td id="LC1355" class="blob-code blob-code-inner js-file-line"><span
																									 * class="pl-c">
																									 */</span></td>
      </tr>
      <tr>
        <td id="L1356" class="blob-num js-line-number" data-line-number="1356"></td>
        <td id="LC1356" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">req</span>.<span class="pl-en">toUrl</span> <span class="pl-k">=</span> <span class="pl-k">function</span> (<span class="pl-smi">id</span>) {</td>
      </tr>
      <tr>
        <td id="L1357" class="blob-num js-line-number" data-line-number="1357"></td>
        <td id="LC1357" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-en">toUrl</span>(<span class="pl-en">normalize</span>(id, baseId));</td>
      </tr>
      <tr>
        <td id="L1358" class="blob-num js-line-number" data-line-number="1358"></td>
        <td id="LC1358" class="blob-code blob-code-inner js-file-line">        };</td>
      </tr>
      <tr>
        <td id="L1359" class="blob-num js-line-number" data-line-number="1359"></td>
        <td id="LC1359" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1360" class="blob-num js-line-number" data-line-number="1360"></td>
        <td id="LC1360" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> req;</td>
      </tr>
      <tr>
        <td id="L1361" class="blob-num js-line-number" data-line-number="1361"></td>
        <td id="LC1361" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1362" class="blob-num js-line-number" data-line-number="1362"></td>
        <td id="LC1362" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1363" class="blob-num js-line-number" data-line-number="1363"></td>
        <td id="LC1363" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">/**
																								 * </span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1364" class="blob-num js-line-number" data-line-number="1364"></td>
																								 * <td id="LC1364" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * id
																								 * normalize化</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1365" class="blob-num js-line-number" data-line-number="1365"></td>
																								 * <td id="LC1365" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1366" class="blob-num js-line-number" data-line-number="1366"></td>
																								 * <td id="LC1366" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@inner</span></span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1367" class="blob-num js-line-number" data-line-number="1367"></td>
																								 * <td id="LC1367" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@param</span>
																								 * <span
																								 * class="pl-en">{string}</span>
																								 * <span
																								 * class="pl-smi">id</span>
																								 * 需要normalize的模块标识</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1368" class="blob-num js-line-number" data-line-number="1368"></td>
																								 * <td id="LC1368" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@param</span>
																								 * <span
																								 * class="pl-en">{string}</span>
																								 * <span
																								 * class="pl-smi">baseId</span>
																								 * 当前环境的模块标识</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1369" class="blob-num js-line-number" data-line-number="1369"></td>
																								 * <td id="LC1369" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@return</span>
																								 * <span
																								 * class="pl-en">{string}</span>
																								 * <span
																								 * class="pl-smi">normalize</span>结果</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1370" class="blob-num js-line-number" data-line-number="1370"></td>
																								 * <td id="LC1370" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c">
																								 */</span></td>
      </tr>
      <tr>
        <td id="L1371" class="blob-num js-line-number" data-line-number="1371"></td>
        <td id="LC1371" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">normalize</span>(<span class="pl-smi">id</span>, <span class="pl-smi">baseId</span>) {</td>
      </tr>
      <tr>
        <td id="L1372" class="blob-num js-line-number" data-line-number="1372"></td>
        <td id="LC1372" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-k">!</span>id) {</td>
      </tr>
      <tr>
        <td id="L1373" class="blob-num js-line-number" data-line-number="1373"></td>
        <td id="LC1373" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1374" class="blob-num js-line-number" data-line-number="1374"></td>
        <td id="LC1374" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1375" class="blob-num js-line-number" data-line-number="1375"></td>
        <td id="LC1375" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1376" class="blob-num js-line-number" data-line-number="1376"></td>
        <td id="LC1376" class="blob-code blob-code-inner js-file-line">        baseId <span class="pl-k">=</span> baseId <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1377" class="blob-num js-line-number" data-line-number="1377"></td>
        <td id="LC1377" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> idInfo <span class="pl-k">=</span> <span class="pl-en">parseId</span>(id);</td>
      </tr>
      <tr>
        <td id="L1378" class="blob-num js-line-number" data-line-number="1378"></td>
        <td id="LC1378" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-k">!</span>idInfo) {</td>
      </tr>
      <tr>
        <td id="L1379" class="blob-num js-line-number" data-line-number="1379"></td>
        <td id="LC1379" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> id;</td>
      </tr>
      <tr>
        <td id="L1380" class="blob-num js-line-number" data-line-number="1380"></td>
        <td id="LC1380" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1381" class="blob-num js-line-number" data-line-number="1381"></td>
        <td id="LC1381" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1382" class="blob-num js-line-number" data-line-number="1382"></td>
        <td id="LC1382" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> resourceId <span class="pl-k">=</span> <span class="pl-smi">idInfo</span>.<span class="pl-smi">res</span>;</td>
      </tr>
      <tr>
        <td id="L1383" class="blob-num js-line-number" data-line-number="1383"></td>
        <td id="LC1383" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> moduleId <span class="pl-k">=</span> <span class="pl-en">relative2absolute</span>(<span class="pl-smi">idInfo</span>.<span class="pl-smi">mod</span>, baseId);</td>
      </tr>
      <tr>
        <td id="L1384" class="blob-num js-line-number" data-line-number="1384"></td>
        <td id="LC1384" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1385" class="blob-num js-line-number" data-line-number="1385"></td>
        <td id="LC1385" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">each</span>(</td>
      </tr>
      <tr>
        <td id="L1386" class="blob-num js-line-number" data-line-number="1386"></td>
        <td id="LC1386" class="blob-code blob-code-inner js-file-line">            packagesIndex,</td>
      </tr>
      <tr>
        <td id="L1387" class="blob-num js-line-number" data-line-number="1387"></td>
        <td id="LC1387" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">function</span> (<span class="pl-smi">packageConf</span>) {</td>
      </tr>
      <tr>
        <td id="L1388" class="blob-num js-line-number" data-line-number="1388"></td>
        <td id="LC1388" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> name <span class="pl-k">=</span> <span class="pl-smi">packageConf</span>.<span class="pl-c1">name</span>;</td>
      </tr>
      <tr>
        <td id="L1389" class="blob-num js-line-number" data-line-number="1389"></td>
        <td id="LC1389" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> (name <span class="pl-k">===</span> moduleId) {</td>
      </tr>
      <tr>
        <td id="L1390" class="blob-num js-line-number" data-line-number="1390"></td>
        <td id="LC1390" class="blob-code blob-code-inner js-file-line">                    moduleId <span class="pl-k">=</span> name <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>/<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">packageConf</span>.<span class="pl-smi">main</span>;</td>
      </tr>
      <tr>
        <td id="L1391" class="blob-num js-line-number" data-line-number="1391"></td>
        <td id="LC1391" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L1392" class="blob-num js-line-number" data-line-number="1392"></td>
        <td id="LC1392" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L1393" class="blob-num js-line-number" data-line-number="1393"></td>
        <td id="LC1393" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L1394" class="blob-num js-line-number" data-line-number="1394"></td>
        <td id="LC1394" class="blob-code blob-code-inner js-file-line">        );</td>
      </tr>
      <tr>
        <td id="L1395" class="blob-num js-line-number" data-line-number="1395"></td>
        <td id="LC1395" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1396" class="blob-num js-line-number" data-line-number="1396"></td>
        <td id="LC1396" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// 根据config中的map配置进行module
																									// id
																									// mapping</span></td>
      </tr>
      <tr>
        <td id="L1397" class="blob-num js-line-number" data-line-number="1397"></td>
        <td id="LC1397" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">indexRetrieve</span>(</td>
      </tr>
      <tr>
        <td id="L1398" class="blob-num js-line-number" data-line-number="1398"></td>
        <td id="LC1398" class="blob-code blob-code-inner js-file-line">            baseId,</td>
      </tr>
      <tr>
        <td id="L1399" class="blob-num js-line-number" data-line-number="1399"></td>
        <td id="LC1399" class="blob-code blob-code-inner js-file-line">            mappingIdIndex,</td>
      </tr>
      <tr>
        <td id="L1400" class="blob-num js-line-number" data-line-number="1400"></td>
        <td id="LC1400" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">function</span> (<span class="pl-smi">value</span>) {</td>
      </tr>
      <tr>
        <td id="L1401" class="blob-num js-line-number" data-line-number="1401"></td>
        <td id="LC1401" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1402" class="blob-num js-line-number" data-line-number="1402"></td>
        <td id="LC1402" class="blob-code blob-code-inner js-file-line">                <span class="pl-en">indexRetrieve</span>(</td>
      </tr>
      <tr>
        <td id="L1403" class="blob-num js-line-number" data-line-number="1403"></td>
        <td id="LC1403" class="blob-code blob-code-inner js-file-line">                    moduleId,</td>
      </tr>
      <tr>
        <td id="L1404" class="blob-num js-line-number" data-line-number="1404"></td>
        <td id="LC1404" class="blob-code blob-code-inner js-file-line">                    value,</td>
      </tr>
      <tr>
        <td id="L1405" class="blob-num js-line-number" data-line-number="1405"></td>
        <td id="LC1405" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">function</span> (<span class="pl-smi">mdValue</span>, <span class="pl-smi">mdKey</span>) {</td>
      </tr>
      <tr>
        <td id="L1406" class="blob-num js-line-number" data-line-number="1406"></td>
        <td id="LC1406" class="blob-code blob-code-inner js-file-line">                        moduleId <span class="pl-k">=</span> <span class="pl-smi">moduleId</span>.<span class="pl-c1">replace</span>(mdKey, mdValue);</td>
      </tr>
      <tr>
        <td id="L1407" class="blob-num js-line-number" data-line-number="1407"></td>
        <td id="LC1407" class="blob-code blob-code-inner js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L1408" class="blob-num js-line-number" data-line-number="1408"></td>
        <td id="LC1408" class="blob-code blob-code-inner js-file-line">                );</td>
      </tr>
      <tr>
        <td id="L1409" class="blob-num js-line-number" data-line-number="1409"></td>
        <td id="LC1409" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1410" class="blob-num js-line-number" data-line-number="1410"></td>
        <td id="LC1410" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L1411" class="blob-num js-line-number" data-line-number="1411"></td>
        <td id="LC1411" class="blob-code blob-code-inner js-file-line">        );</td>
      </tr>
      <tr>
        <td id="L1412" class="blob-num js-line-number" data-line-number="1412"></td>
        <td id="LC1412" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1413" class="blob-num js-line-number" data-line-number="1413"></td>
        <td id="LC1413" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (resourceId) {</td>
      </tr>
      <tr>
        <td id="L1414" class="blob-num js-line-number" data-line-number="1414"></td>
        <td id="LC1414" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> mod <span class="pl-k">=</span> <span class="pl-en">modGetModuleExports</span>(moduleId);</td>
      </tr>
      <tr>
        <td id="L1415" class="blob-num js-line-number" data-line-number="1415"></td>
        <td id="LC1415" class="blob-code blob-code-inner js-file-line">            resourceId <span class="pl-k">=</span> <span class="pl-smi">mod</span>.<span class="pl-smi">normalize</span></td>
      </tr>
      <tr>
        <td id="L1416" class="blob-num js-line-number" data-line-number="1416"></td>
        <td id="LC1416" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">?</span> <span class="pl-smi">mod</span>.<span class="pl-en">normalize</span>(</td>
      </tr>
      <tr>
        <td id="L1417" class="blob-num js-line-number" data-line-number="1417"></td>
        <td id="LC1417" class="blob-code blob-code-inner js-file-line">                    resourceId,</td>
      </tr>
      <tr>
        <td id="L1418" class="blob-num js-line-number" data-line-number="1418"></td>
        <td id="LC1418" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">function</span> (<span class="pl-smi">resId</span>) {</td>
      </tr>
      <tr>
        <td id="L1419" class="blob-num js-line-number" data-line-number="1419"></td>
        <td id="LC1419" class="blob-code blob-code-inner js-file-line">                        <span class="pl-k">return</span> <span class="pl-en">normalize</span>(resId, baseId);</td>
      </tr>
      <tr>
        <td id="L1420" class="blob-num js-line-number" data-line-number="1420"></td>
        <td id="LC1420" class="blob-code blob-code-inner js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L1421" class="blob-num js-line-number" data-line-number="1421"></td>
        <td id="LC1421" class="blob-code blob-code-inner js-file-line">                  )</td>
      </tr>
      <tr>
        <td id="L1422" class="blob-num js-line-number" data-line-number="1422"></td>
        <td id="LC1422" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">:</span> <span class="pl-en">normalize</span>(resourceId, baseId);</td>
      </tr>
      <tr>
        <td id="L1423" class="blob-num js-line-number" data-line-number="1423"></td>
        <td id="LC1423" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1424" class="blob-num js-line-number" data-line-number="1424"></td>
        <td id="LC1424" class="blob-code blob-code-inner js-file-line">            moduleId <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>!<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> resourceId;</td>
      </tr>
      <tr>
        <td id="L1425" class="blob-num js-line-number" data-line-number="1425"></td>
        <td id="LC1425" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1426" class="blob-num js-line-number" data-line-number="1426"></td>
        <td id="LC1426" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1427" class="blob-num js-line-number" data-line-number="1427"></td>
        <td id="LC1427" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> moduleId;</td>
      </tr>
      <tr>
        <td id="L1428" class="blob-num js-line-number" data-line-number="1428"></td>
        <td id="LC1428" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1429" class="blob-num js-line-number" data-line-number="1429"></td>
        <td id="LC1429" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1430" class="blob-num js-line-number" data-line-number="1430"></td>
        <td id="LC1430" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">/**
																								 * </span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1431" class="blob-num js-line-number" data-line-number="1431"></td>
																								 * <td id="LC1431" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * 相对id转换成绝对id</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1432" class="blob-num js-line-number" data-line-number="1432"></td>
																								 * <td id="LC1432" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1433" class="blob-num js-line-number" data-line-number="1433"></td>
																								 * <td id="LC1433" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@inner</span></span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1434" class="blob-num js-line-number" data-line-number="1434"></td>
																								 * <td id="LC1434" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@param</span>
																								 * <span
																								 * class="pl-en">{string}</span>
																								 * <span
																								 * class="pl-smi">id</span>
																								 * 要转换的相对id</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1435" class="blob-num js-line-number" data-line-number="1435"></td>
																								 * <td id="LC1435" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@param</span>
																								 * <span
																								 * class="pl-en">{string}</span>
																								 * <span
																								 * class="pl-smi">baseId</span>
																								 * 当前所在环境id</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1436" class="blob-num js-line-number" data-line-number="1436"></td>
																								 * <td id="LC1436" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@return</span>
																								 * {string}
																								 * 绝对id</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1437" class="blob-num js-line-number" data-line-number="1437"></td>
																								 * <td id="LC1437" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c">
																								 */</span></td>
      </tr>
      <tr>
        <td id="L1438" class="blob-num js-line-number" data-line-number="1438"></td>
        <td id="LC1438" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">relative2absolute</span>(<span class="pl-smi">id</span>, <span class="pl-smi">baseId</span>) {</td>
      </tr>
      <tr>
        <td id="L1439" class="blob-num js-line-number" data-line-number="1439"></td>
        <td id="LC1439" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-smi">id</span>.<span class="pl-c1">indexOf</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.<span class="pl-pds">&#39;</span></span>) <span class="pl-k">===</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L1440" class="blob-num js-line-number" data-line-number="1440"></td>
        <td id="LC1440" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> basePath <span class="pl-k">=</span> <span class="pl-smi">baseId</span>.<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>/<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1441" class="blob-num js-line-number" data-line-number="1441"></td>
        <td id="LC1441" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> namePath <span class="pl-k">=</span> <span class="pl-smi">id</span>.<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>/<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1442" class="blob-num js-line-number" data-line-number="1442"></td>
        <td id="LC1442" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> baseLen <span class="pl-k">=</span> <span class="pl-smi">basePath</span>.<span class="pl-c1">length</span> <span class="pl-k">-</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L1443" class="blob-num js-line-number" data-line-number="1443"></td>
        <td id="LC1443" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> nameLen <span class="pl-k">=</span> <span class="pl-smi">namePath</span>.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L1444" class="blob-num js-line-number" data-line-number="1444"></td>
        <td id="LC1444" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> cutBaseTerms <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L1445" class="blob-num js-line-number" data-line-number="1445"></td>
        <td id="LC1445" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> cutNameTerms <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L1446" class="blob-num js-line-number" data-line-number="1446"></td>
        <td id="LC1446" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1447" class="blob-num js-line-number" data-line-number="1447"></td>
        <td id="LC1447" class="blob-code blob-code-inner js-file-line">            <span class="pl-c">/*
																										 * eslint-disable
																										 * block-scoped-var
																										 */</span></td>
      </tr>
      <tr>
        <td id="L1448" class="blob-num js-line-number" data-line-number="1448"></td>
        <td id="LC1448" class="blob-code blob-code-inner js-file-line">            pathLoop<span class="pl-k">:</span> <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> nameLen; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L1449" class="blob-num js-line-number" data-line-number="1449"></td>
        <td id="LC1449" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">switch</span> (namePath[i]) {</td>
      </tr>
      <tr>
        <td id="L1450" class="blob-num js-line-number" data-line-number="1450"></td>
        <td id="LC1450" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&#39;</span>..<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L1451" class="blob-num js-line-number" data-line-number="1451"></td>
        <td id="LC1451" class="blob-code blob-code-inner js-file-line">                        <span class="pl-k">if</span> (cutBaseTerms <span class="pl-k">&lt;</span> baseLen) {</td>
      </tr>
      <tr>
        <td id="L1452" class="blob-num js-line-number" data-line-number="1452"></td>
        <td id="LC1452" class="blob-code blob-code-inner js-file-line">                            cutBaseTerms<span class="pl-k">++</span>;</td>
      </tr>
      <tr>
        <td id="L1453" class="blob-num js-line-number" data-line-number="1453"></td>
        <td id="LC1453" class="blob-code blob-code-inner js-file-line">                            cutNameTerms<span class="pl-k">++</span>;</td>
      </tr>
      <tr>
        <td id="L1454" class="blob-num js-line-number" data-line-number="1454"></td>
        <td id="LC1454" class="blob-code blob-code-inner js-file-line">                        }</td>
      </tr>
      <tr>
        <td id="L1455" class="blob-num js-line-number" data-line-number="1455"></td>
        <td id="LC1455" class="blob-code blob-code-inner js-file-line">                        <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1456" class="blob-num js-line-number" data-line-number="1456"></td>
        <td id="LC1456" class="blob-code blob-code-inner js-file-line">                            <span class="pl-k">break</span> pathLoop;</td>
      </tr>
      <tr>
        <td id="L1457" class="blob-num js-line-number" data-line-number="1457"></td>
        <td id="LC1457" class="blob-code blob-code-inner js-file-line">                        }</td>
      </tr>
      <tr>
        <td id="L1458" class="blob-num js-line-number" data-line-number="1458"></td>
        <td id="LC1458" class="blob-code blob-code-inner js-file-line">                        <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L1459" class="blob-num js-line-number" data-line-number="1459"></td>
        <td id="LC1459" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&#39;</span>.<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L1460" class="blob-num js-line-number" data-line-number="1460"></td>
        <td id="LC1460" class="blob-code blob-code-inner js-file-line">                        cutNameTerms<span class="pl-k">++</span>;</td>
      </tr>
      <tr>
        <td id="L1461" class="blob-num js-line-number" data-line-number="1461"></td>
        <td id="LC1461" class="blob-code blob-code-inner js-file-line">                        <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L1462" class="blob-num js-line-number" data-line-number="1462"></td>
        <td id="LC1462" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">default</span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L1463" class="blob-num js-line-number" data-line-number="1463"></td>
        <td id="LC1463" class="blob-code blob-code-inner js-file-line">                        <span class="pl-k">break</span> pathLoop;</td>
      </tr>
      <tr>
        <td id="L1464" class="blob-num js-line-number" data-line-number="1464"></td>
        <td id="LC1464" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L1465" class="blob-num js-line-number" data-line-number="1465"></td>
        <td id="LC1465" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L1466" class="blob-num js-line-number" data-line-number="1466"></td>
        <td id="LC1466" class="blob-code blob-code-inner js-file-line">            <span class="pl-c">/*
																										 * eslint-enable
																										 * block-scoped-var
																										 */</span></td>
      </tr>
      <tr>
        <td id="L1467" class="blob-num js-line-number" data-line-number="1467"></td>
        <td id="LC1467" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1468" class="blob-num js-line-number" data-line-number="1468"></td>
        <td id="LC1468" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">basePath</span>.<span class="pl-c1">length</span> <span class="pl-k">=</span> baseLen <span class="pl-k">-</span> cutBaseTerms;</td>
      </tr>
      <tr>
        <td id="L1469" class="blob-num js-line-number" data-line-number="1469"></td>
        <td id="LC1469" class="blob-code blob-code-inner js-file-line">            namePath <span class="pl-k">=</span> <span class="pl-smi">namePath</span>.<span class="pl-c1">slice</span>(cutNameTerms);</td>
      </tr>
      <tr>
        <td id="L1470" class="blob-num js-line-number" data-line-number="1470"></td>
        <td id="LC1470" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1471" class="blob-num js-line-number" data-line-number="1471"></td>
        <td id="LC1471" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-smi">basePath</span>.<span class="pl-c1">concat</span>(namePath).<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>/<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1472" class="blob-num js-line-number" data-line-number="1472"></td>
        <td id="LC1472" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1473" class="blob-num js-line-number" data-line-number="1473"></td>
        <td id="LC1473" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1474" class="blob-num js-line-number" data-line-number="1474"></td>
        <td id="LC1474" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> id;</td>
      </tr>
      <tr>
        <td id="L1475" class="blob-num js-line-number" data-line-number="1475"></td>
        <td id="LC1475" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1476" class="blob-num js-line-number" data-line-number="1476"></td>
        <td id="LC1476" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1477" class="blob-num js-line-number" data-line-number="1477"></td>
        <td id="LC1477" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">/**
																								 * </span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1478" class="blob-num js-line-number" data-line-number="1478"></td>
																								 * <td id="LC1478" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * 解析id，返回带有module和resource属性的Object</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1479" class="blob-num js-line-number" data-line-number="1479"></td>
																								 * <td id="LC1479" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1480" class="blob-num js-line-number" data-line-number="1480"></td>
																								 * <td id="LC1480" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@inner</span></span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1481" class="blob-num js-line-number" data-line-number="1481"></td>
																								 * <td id="LC1481" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@param</span>
																								 * <span
																								 * class="pl-en">{string}</span>
																								 * <span
																								 * class="pl-smi">id</span>
																								 * 标识</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1482" class="blob-num js-line-number" data-line-number="1482"></td>
																								 * <td id="LC1482" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@return</span>
																								 * <span
																								 * class="pl-en">{Object}</span>
																								 * <span
																								 * class="pl-smi">id</span>解析结果对象</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1483" class="blob-num js-line-number" data-line-number="1483"></td>
																								 * <td id="LC1483" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c">
																								 */</span></td>
      </tr>
      <tr>
        <td id="L1484" class="blob-num js-line-number" data-line-number="1484"></td>
        <td id="LC1484" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">parseId</span>(<span class="pl-smi">id</span>) {</td>
      </tr>
      <tr>
        <td id="L1485" class="blob-num js-line-number" data-line-number="1485"></td>
        <td id="LC1485" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> segs <span class="pl-k">=</span> <span class="pl-smi">id</span>.<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>!<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1486" class="blob-num js-line-number" data-line-number="1486"></td>
        <td id="LC1486" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1487" class="blob-num js-line-number" data-line-number="1487"></td>
        <td id="LC1487" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (segs[<span class="pl-c1">0</span>]) {</td>
      </tr>
      <tr>
        <td id="L1488" class="blob-num js-line-number" data-line-number="1488"></td>
        <td id="LC1488" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> {</td>
      </tr>
      <tr>
        <td id="L1489" class="blob-num js-line-number" data-line-number="1489"></td>
        <td id="LC1489" class="blob-code blob-code-inner js-file-line">                mod<span class="pl-k">:</span> segs[<span class="pl-c1">0</span>],</td>
      </tr>
      <tr>
        <td id="L1490" class="blob-num js-line-number" data-line-number="1490"></td>
        <td id="LC1490" class="blob-code blob-code-inner js-file-line">                res<span class="pl-k">:</span> segs[<span class="pl-c1">1</span>]</td>
      </tr>
      <tr>
        <td id="L1491" class="blob-num js-line-number" data-line-number="1491"></td>
        <td id="LC1491" class="blob-code blob-code-inner js-file-line">            };</td>
      </tr>
      <tr>
        <td id="L1492" class="blob-num js-line-number" data-line-number="1492"></td>
        <td id="LC1492" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1493" class="blob-num js-line-number" data-line-number="1493"></td>
        <td id="LC1493" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1494" class="blob-num js-line-number" data-line-number="1494"></td>
        <td id="LC1494" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L1495" class="blob-num js-line-number" data-line-number="1495"></td>
        <td id="LC1495" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1496" class="blob-num js-line-number" data-line-number="1496"></td>
        <td id="LC1496" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1497" class="blob-num js-line-number" data-line-number="1497"></td>
        <td id="LC1497" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">/**
																								 * </span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1498" class="blob-num js-line-number" data-line-number="1498"></td>
																								 * <td id="LC1498" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * 将对象数据转换成数组，数组每项是带有k和v的Object</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1499" class="blob-num js-line-number" data-line-number="1499"></td>
																								 * <td id="LC1499" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1500" class="blob-num js-line-number" data-line-number="1500"></td>
																								 * <td id="LC1500" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@inner</span></span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1501" class="blob-num js-line-number" data-line-number="1501"></td>
																								 * <td id="LC1501" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@param</span>
																								 * <span
																								 * class="pl-en">{Object}</span>
																								 * <span
																								 * class="pl-smi">source</span>
																								 * 对象数据</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1502" class="blob-num js-line-number" data-line-number="1502"></td>
																								 * <td id="LC1502" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@param</span>
																								 * <span
																								 * class="pl-en">{boolean}</span>
																								 * <span
																								 * class="pl-smi">keyMatchable</span>
																								 * key是否允许被前缀匹配</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1503" class="blob-num js-line-number" data-line-number="1503"></td>
																								 * <td id="LC1503" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@param</span>
																								 * <span
																								 * class="pl-en">{boolean}</span>
																								 * <span
																								 * class="pl-smi">allowAsterisk</span>
																								 * 是否支持*匹配所有</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1504" class="blob-num js-line-number" data-line-number="1504"></td>
																								 * <td id="LC1504" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@return</span>
																								 * {Array.&lt;Object&gt;}
																								 * 对象转换数组</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1505" class="blob-num js-line-number" data-line-number="1505"></td>
																								 * <td id="LC1505" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c">
																								 */</span></td>
      </tr>
      <tr>
        <td id="L1506" class="blob-num js-line-number" data-line-number="1506"></td>
        <td id="LC1506" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">kv2List</span>(<span class="pl-smi">source</span>, <span class="pl-smi">keyMatchable</span>, <span class="pl-smi">allowAsterisk</span>) {</td>
      </tr>
      <tr>
        <td id="L1507" class="blob-num js-line-number" data-line-number="1507"></td>
        <td id="LC1507" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> list <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L1508" class="blob-num js-line-number" data-line-number="1508"></td>
        <td id="LC1508" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">for</span> (<span class="pl-k">var</span> key <span class="pl-k">in</span> source) {</td>
      </tr>
      <tr>
        <td id="L1509" class="blob-num js-line-number" data-line-number="1509"></td>
        <td id="LC1509" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-smi">source</span>.<span class="pl-en">hasOwnProperty</span>(key)) {</td>
      </tr>
      <tr>
        <td id="L1510" class="blob-num js-line-number" data-line-number="1510"></td>
        <td id="LC1510" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> item <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L1511" class="blob-num js-line-number" data-line-number="1511"></td>
        <td id="LC1511" class="blob-code blob-code-inner js-file-line">                    k<span class="pl-k">:</span> key,</td>
      </tr>
      <tr>
        <td id="L1512" class="blob-num js-line-number" data-line-number="1512"></td>
        <td id="LC1512" class="blob-code blob-code-inner js-file-line">                    v<span class="pl-k">:</span> source[key]</td>
      </tr>
      <tr>
        <td id="L1513" class="blob-num js-line-number" data-line-number="1513"></td>
        <td id="LC1513" class="blob-code blob-code-inner js-file-line">                };</td>
      </tr>
      <tr>
        <td id="L1514" class="blob-num js-line-number" data-line-number="1514"></td>
        <td id="LC1514" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">list</span>.<span class="pl-c1">push</span>(item);</td>
      </tr>
      <tr>
        <td id="L1515" class="blob-num js-line-number" data-line-number="1515"></td>
        <td id="LC1515" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1516" class="blob-num js-line-number" data-line-number="1516"></td>
        <td id="LC1516" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> (keyMatchable) {</td>
      </tr>
      <tr>
        <td id="L1517" class="blob-num js-line-number" data-line-number="1517"></td>
        <td id="LC1517" class="blob-code blob-code-inner js-file-line">                    <span class="pl-smi">item</span>.<span class="pl-smi">reg</span> <span class="pl-k">=</span> key <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>*<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> allowAsterisk</td>
      </tr>
      <tr>
        <td id="L1518" class="blob-num js-line-number" data-line-number="1518"></td>
        <td id="LC1518" class="blob-code blob-code-inner js-file-line">                        <span class="pl-k">?</span><span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-pds">/</span></span></td>
      </tr>
      <tr>
        <td id="L1519" class="blob-num js-line-number" data-line-number="1519"></td>
        <td id="LC1519" class="blob-code blob-code-inner js-file-line">                        <span class="pl-k">:</span> <span class="pl-en">createPrefixRegexp</span>(key);</td>
      </tr>
      <tr>
        <td id="L1520" class="blob-num js-line-number" data-line-number="1520"></td>
        <td id="LC1520" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L1521" class="blob-num js-line-number" data-line-number="1521"></td>
        <td id="LC1521" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L1522" class="blob-num js-line-number" data-line-number="1522"></td>
        <td id="LC1522" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1523" class="blob-num js-line-number" data-line-number="1523"></td>
        <td id="LC1523" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1524" class="blob-num js-line-number" data-line-number="1524"></td>
        <td id="LC1524" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> list;</td>
      </tr>
      <tr>
        <td id="L1525" class="blob-num js-line-number" data-line-number="1525"></td>
        <td id="LC1525" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1526" class="blob-num js-line-number" data-line-number="1526"></td>
        <td id="LC1526" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1527" class="blob-num js-line-number" data-line-number="1527"></td>
        <td id="LC1527" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">// 感谢requirejs，通过currentlyAddingScript兼容老旧ie</span></td>
      </tr>
      <tr>
        <td id="L1528" class="blob-num js-line-number" data-line-number="1528"></td>
        <td id="LC1528" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">// </span></td>
      </tr>
      <tr>
        <td id="L1529" class="blob-num js-line-number" data-line-number="1529"></td>
        <td id="LC1529" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">// For
																								// some
																								// cache
																								// cases
																								// in
																								// IE
																								// 6-8,
																								// the
																								// script
																								// executes
																								// before
																								// the
																								// end</span></td>
      </tr>
      <tr>
        <td id="L1530" class="blob-num js-line-number" data-line-number="1530"></td>
        <td id="LC1530" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">// of
																								// the
																								// appendChild
																								// execution,
																								// so
																								// to
																								// tie
																								// an
																								// anonymous
																								// define</span></td>
      </tr>
      <tr>
        <td id="L1531" class="blob-num js-line-number" data-line-number="1531"></td>
        <td id="LC1531" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">// call
																								// to
																								// the
																								// module
																								// name
																								// (which
																								// is
																								// stored
																								// on
																								// the
																								// node),
																								// hold
																								// on</span></td>
      </tr>
      <tr>
        <td id="L1532" class="blob-num js-line-number" data-line-number="1532"></td>
        <td id="LC1532" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">// to a
																								// reference
																								// to
																								// this
																								// node,
																								// but
																								// clear
																								// after
																								// the
																								// DOM
																								// insertion.</span></td>
      </tr>
      <tr>
        <td id="L1533" class="blob-num js-line-number" data-line-number="1533"></td>
        <td id="LC1533" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> currentlyAddingScript;</td>
      </tr>
      <tr>
        <td id="L1534" class="blob-num js-line-number" data-line-number="1534"></td>
        <td id="LC1534" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> interactiveScript;</td>
      </tr>
      <tr>
        <td id="L1535" class="blob-num js-line-number" data-line-number="1535"></td>
        <td id="LC1535" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1536" class="blob-num js-line-number" data-line-number="1536"></td>
        <td id="LC1536" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">/**
																								 * </span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1537" class="blob-num js-line-number" data-line-number="1537"></td>
																								 * <td id="LC1537" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * 获取当前script标签</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1538" class="blob-num js-line-number" data-line-number="1538"></td>
																								 * <td id="LC1538" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * 用于ie下define未指定module
																								 * id时获取id</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1539" class="blob-num js-line-number" data-line-number="1539"></td>
																								 * <td id="LC1539" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1540" class="blob-num js-line-number" data-line-number="1540"></td>
																								 * <td id="LC1540" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@inner</span></span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1541" class="blob-num js-line-number" data-line-number="1541"></td>
																								 * <td id="LC1541" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@return</span>
																								 * {HTMLScriptElement}
																								 * 当前script标签</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1542" class="blob-num js-line-number" data-line-number="1542"></td>
																								 * <td id="LC1542" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c">
																								 */</span></td>
      </tr>
      <tr>
        <td id="L1543" class="blob-num js-line-number" data-line-number="1543"></td>
        <td id="LC1543" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">getCurrentScript</span>() {</td>
      </tr>
      <tr>
        <td id="L1544" class="blob-num js-line-number" data-line-number="1544"></td>
        <td id="LC1544" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (currentlyAddingScript) {</td>
      </tr>
      <tr>
        <td id="L1545" class="blob-num js-line-number" data-line-number="1545"></td>
        <td id="LC1545" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> currentlyAddingScript;</td>
      </tr>
      <tr>
        <td id="L1546" class="blob-num js-line-number" data-line-number="1546"></td>
        <td id="LC1546" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1547" class="blob-num js-line-number" data-line-number="1547"></td>
        <td id="LC1547" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">else</span> <span class="pl-k">if</span> (</td>
      </tr>
      <tr>
        <td id="L1548" class="blob-num js-line-number" data-line-number="1548"></td>
        <td id="LC1548" class="blob-code blob-code-inner js-file-line">            interactiveScript</td>
      </tr>
      <tr>
        <td id="L1549" class="blob-num js-line-number" data-line-number="1549"></td>
        <td id="LC1549" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">interactiveScript</span>.<span class="pl-c1">readyState</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>interactive<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L1550" class="blob-num js-line-number" data-line-number="1550"></td>
        <td id="LC1550" class="blob-code blob-code-inner js-file-line">        ) {</td>
      </tr>
      <tr>
        <td id="L1551" class="blob-num js-line-number" data-line-number="1551"></td>
        <td id="LC1551" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> interactiveScript;</td>
      </tr>
      <tr>
        <td id="L1552" class="blob-num js-line-number" data-line-number="1552"></td>
        <td id="LC1552" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1553" class="blob-num js-line-number" data-line-number="1553"></td>
        <td id="LC1553" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1554" class="blob-num js-line-number" data-line-number="1554"></td>
        <td id="LC1554" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> scripts <span class="pl-k">=</span> <span class="pl-c1">document</span>.<span class="pl-c1">getElementsByTagName</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>script<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1555" class="blob-num js-line-number" data-line-number="1555"></td>
        <td id="LC1555" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> scriptLen <span class="pl-k">=</span> <span class="pl-smi">scripts</span>.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L1556" class="blob-num js-line-number" data-line-number="1556"></td>
        <td id="LC1556" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">while</span> (scriptLen<span class="pl-k">--</span>) {</td>
      </tr>
      <tr>
        <td id="L1557" class="blob-num js-line-number" data-line-number="1557"></td>
        <td id="LC1557" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> script <span class="pl-k">=</span> scripts[scriptLen];</td>
      </tr>
      <tr>
        <td id="L1558" class="blob-num js-line-number" data-line-number="1558"></td>
        <td id="LC1558" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-smi">script</span>.<span class="pl-c1">readyState</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>interactive<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L1559" class="blob-num js-line-number" data-line-number="1559"></td>
        <td id="LC1559" class="blob-code blob-code-inner js-file-line">                interactiveScript <span class="pl-k">=</span> script;</td>
      </tr>
      <tr>
        <td id="L1560" class="blob-num js-line-number" data-line-number="1560"></td>
        <td id="LC1560" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">return</span> script;</td>
      </tr>
      <tr>
        <td id="L1561" class="blob-num js-line-number" data-line-number="1561"></td>
        <td id="LC1561" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L1562" class="blob-num js-line-number" data-line-number="1562"></td>
        <td id="LC1562" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1563" class="blob-num js-line-number" data-line-number="1563"></td>
        <td id="LC1563" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1564" class="blob-num js-line-number" data-line-number="1564"></td>
        <td id="LC1564" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1565" class="blob-num js-line-number" data-line-number="1565"></td>
        <td id="LC1565" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> headElement <span class="pl-k">=</span> <span class="pl-c1">document</span>.<span class="pl-c1">getElementsByTagName</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>head<span class="pl-pds">&#39;</span></span>)[<span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L1566" class="blob-num js-line-number" data-line-number="1566"></td>
        <td id="LC1566" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> baseElement <span class="pl-k">=</span> <span class="pl-c1">document</span>.<span class="pl-c1">getElementsByTagName</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>base<span class="pl-pds">&#39;</span></span>)[<span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L1567" class="blob-num js-line-number" data-line-number="1567"></td>
        <td id="LC1567" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (baseElement) {</td>
      </tr>
      <tr>
        <td id="L1568" class="blob-num js-line-number" data-line-number="1568"></td>
        <td id="LC1568" class="blob-code blob-code-inner js-file-line">        headElement <span class="pl-k">=</span> <span class="pl-smi">baseElement</span>.<span class="pl-c1">parentNode</span>;</td>
      </tr>
      <tr>
        <td id="L1569" class="blob-num js-line-number" data-line-number="1569"></td>
        <td id="LC1569" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1570" class="blob-num js-line-number" data-line-number="1570"></td>
        <td id="LC1570" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1571" class="blob-num js-line-number" data-line-number="1571"></td>
        <td id="LC1571" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">/**
																								 * </span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1572" class="blob-num js-line-number" data-line-number="1572"></td>
																								 * <td id="LC1572" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * 向页面中插入script标签</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1573" class="blob-num js-line-number" data-line-number="1573"></td>
																								 * <td id="LC1573" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1574" class="blob-num js-line-number" data-line-number="1574"></td>
																								 * <td id="LC1574" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@inner</span></span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1575" class="blob-num js-line-number" data-line-number="1575"></td>
																								 * <td id="LC1575" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@param</span>
																								 * <span
																								 * class="pl-en">{HTMLScriptElement}</span>
																								 * <span
																								 * class="pl-smi">script</span>
																								 * script标签</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1576" class="blob-num js-line-number" data-line-number="1576"></td>
																								 * <td id="LC1576" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c">
																								 */</span></td>
      </tr>
      <tr>
        <td id="L1577" class="blob-num js-line-number" data-line-number="1577"></td>
        <td id="LC1577" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">appendScript</span>(<span class="pl-smi">script</span>) {</td>
      </tr>
      <tr>
        <td id="L1578" class="blob-num js-line-number" data-line-number="1578"></td>
        <td id="LC1578" class="blob-code blob-code-inner js-file-line">        currentlyAddingScript <span class="pl-k">=</span> script;</td>
      </tr>
      <tr>
        <td id="L1579" class="blob-num js-line-number" data-line-number="1579"></td>
        <td id="LC1579" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1580" class="blob-num js-line-number" data-line-number="1580"></td>
        <td id="LC1580" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// If
																									// BASE
																									// tag
																									// is
																									// in
																									// play,
																									// using
																									// appendChild
																									// is a
																									// problem
																									// for
																									// IE6.</span></td>
      </tr>
      <tr>
        <td id="L1581" class="blob-num js-line-number" data-line-number="1581"></td>
        <td id="LC1581" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// See:
																									// http://dev.jquery.com/ticket/2709</span></td>
      </tr>
      <tr>
        <td id="L1582" class="blob-num js-line-number" data-line-number="1582"></td>
        <td id="LC1582" class="blob-code blob-code-inner js-file-line">        baseElement</td>
      </tr>
      <tr>
        <td id="L1583" class="blob-num js-line-number" data-line-number="1583"></td>
        <td id="LC1583" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">?</span> <span class="pl-smi">headElement</span>.<span class="pl-c1">insertBefore</span>(script, baseElement)</td>
      </tr>
      <tr>
        <td id="L1584" class="blob-num js-line-number" data-line-number="1584"></td>
        <td id="LC1584" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">:</span> <span class="pl-smi">headElement</span>.<span class="pl-c1">appendChild</span>(script);</td>
      </tr>
      <tr>
        <td id="L1585" class="blob-num js-line-number" data-line-number="1585"></td>
        <td id="LC1585" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1586" class="blob-num js-line-number" data-line-number="1586"></td>
        <td id="LC1586" class="blob-code blob-code-inner js-file-line">        currentlyAddingScript <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L1587" class="blob-num js-line-number" data-line-number="1587"></td>
        <td id="LC1587" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1588" class="blob-num js-line-number" data-line-number="1588"></td>
        <td id="LC1588" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1589" class="blob-num js-line-number" data-line-number="1589"></td>
        <td id="LC1589" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">/**
																								 * </span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1590" class="blob-num js-line-number" data-line-number="1590"></td>
																								 * <td id="LC1590" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * 创建id前缀匹配的正则对象</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1591" class="blob-num js-line-number" data-line-number="1591"></td>
																								 * <td id="LC1591" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1592" class="blob-num js-line-number" data-line-number="1592"></td>
																								 * <td id="LC1592" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@inner</span></span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1593" class="blob-num js-line-number" data-line-number="1593"></td>
																								 * <td id="LC1593" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@param</span>
																								 * <span
																								 * class="pl-en">{string}</span>
																								 * <span
																								 * class="pl-smi">prefix</span>
																								 * id前缀</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1594" class="blob-num js-line-number" data-line-number="1594"></td>
																								 * <td id="LC1594" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@return</span>
																								 * {RegExp}
																								 * 前缀匹配的正则对象</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1595" class="blob-num js-line-number" data-line-number="1595"></td>
																								 * <td id="LC1595" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c">
																								 */</span></td>
      </tr>
      <tr>
        <td id="L1596" class="blob-num js-line-number" data-line-number="1596"></td>
        <td id="LC1596" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">createPrefixRegexp</span>(<span class="pl-smi">prefix</span>) {</td>
      </tr>
      <tr>
        <td id="L1597" class="blob-num js-line-number" data-line-number="1597"></td>
        <td id="LC1597" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-k">new</span> <span class="pl-en">RegExp</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>^<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> prefix <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>(/|$)<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1598" class="blob-num js-line-number" data-line-number="1598"></td>
        <td id="LC1598" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1599" class="blob-num js-line-number" data-line-number="1599"></td>
        <td id="LC1599" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1600" class="blob-num js-line-number" data-line-number="1600"></td>
        <td id="LC1600" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">/**
																								 * </span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1601" class="blob-num js-line-number" data-line-number="1601"></td>
																								 * <td id="LC1601" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * 循环遍历数组集合</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1602" class="blob-num js-line-number" data-line-number="1602"></td>
																								 * <td id="LC1602" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1603" class="blob-num js-line-number" data-line-number="1603"></td>
																								 * <td id="LC1603" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@inner</span></span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1604" class="blob-num js-line-number" data-line-number="1604"></td>
																								 * <td id="LC1604" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@param</span>
																								 * <span
																								 * class="pl-en">{Array}</span>
																								 * <span
																								 * class="pl-smi">source</span>
																								 * 数组源</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1605" class="blob-num js-line-number" data-line-number="1605"></td>
																								 * <td id="LC1605" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@param</span>
																								 * {function(Array,Number):boolean}
																								 * iterator
																								 * 遍历函数</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1606" class="blob-num js-line-number" data-line-number="1606"></td>
																								 * <td id="LC1606" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c">
																								 */</span></td>
      </tr>
      <tr>
        <td id="L1607" class="blob-num js-line-number" data-line-number="1607"></td>
        <td id="LC1607" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">each</span>(<span class="pl-smi">source</span>, <span class="pl-smi">iterator</span>) {</td>
      </tr>
      <tr>
        <td id="L1608" class="blob-num js-line-number" data-line-number="1608"></td>
        <td id="LC1608" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (source <span class="pl-k">instanceof</span> <span class="pl-c1">Array</span>) {</td>
      </tr>
      <tr>
        <td id="L1609" class="blob-num js-line-number" data-line-number="1609"></td>
        <td id="LC1609" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>, len <span class="pl-k">=</span> <span class="pl-smi">source</span>.<span class="pl-c1">length</span>; i <span class="pl-k">&lt;</span> len; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L1610" class="blob-num js-line-number" data-line-number="1610"></td>
        <td id="LC1610" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> (<span class="pl-en">iterator</span>(source[i], i) <span class="pl-k">===</span> <span class="pl-c1">false</span>) {</td>
      </tr>
      <tr>
        <td id="L1611" class="blob-num js-line-number" data-line-number="1611"></td>
        <td id="LC1611" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L1612" class="blob-num js-line-number" data-line-number="1612"></td>
        <td id="LC1612" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L1613" class="blob-num js-line-number" data-line-number="1613"></td>
        <td id="LC1613" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L1614" class="blob-num js-line-number" data-line-number="1614"></td>
        <td id="LC1614" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1615" class="blob-num js-line-number" data-line-number="1615"></td>
        <td id="LC1615" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1616" class="blob-num js-line-number" data-line-number="1616"></td>
        <td id="LC1616" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1617" class="blob-num js-line-number" data-line-number="1617"></td>
        <td id="LC1617" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">/**
																								 * </span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1618" class="blob-num js-line-number" data-line-number="1618"></td>
																								 * <td id="LC1618" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * 根据元素的k或name项进行数组字符数逆序的排序函数</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1619" class="blob-num js-line-number" data-line-number="1619"></td>
																								 * <td id="LC1619" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1620" class="blob-num js-line-number" data-line-number="1620"></td>
																								 * <td id="LC1620" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@inner</span></span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1621" class="blob-num js-line-number" data-line-number="1621"></td>
																								 * <td id="LC1621" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@param</span>
																								 * <span
																								 * class="pl-en">{Object}</span>
																								 * <span
																								 * class="pl-smi">a</span>
																								 * 要比较的对象a</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1622" class="blob-num js-line-number" data-line-number="1622"></td>
																								 * <td id="LC1622" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@param</span>
																								 * <span
																								 * class="pl-en">{Object}</span>
																								 * <span
																								 * class="pl-smi">b</span>
																								 * 要比较的对象b</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1623" class="blob-num js-line-number" data-line-number="1623"></td>
																								 * <td id="LC1623" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c"> *
																								 * <span
																								 * class="pl-k">@return</span>
																								 * {number}
																								 * 比较结果</span></td>
																								 * </tr>
																								 * <tr>
																								 * <td id="L1624" class="blob-num js-line-number" data-line-number="1624"></td>
																								 * <td id="LC1624" class="blob-code blob-code-inner js-file-line"><span
																								 * class="pl-c">
																								 */</span></td>
      </tr>
      <tr>
        <td id="L1625" class="blob-num js-line-number" data-line-number="1625"></td>
        <td id="LC1625" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">descSorterByKOrName</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>) {</td>
      </tr>
      <tr>
        <td id="L1626" class="blob-num js-line-number" data-line-number="1626"></td>
        <td id="LC1626" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> aValue <span class="pl-k">=</span> <span class="pl-smi">a</span>.<span class="pl-smi">k</span> <span class="pl-k">||</span> <span class="pl-smi">a</span>.<span class="pl-c1">name</span>;</td>
      </tr>
      <tr>
        <td id="L1627" class="blob-num js-line-number" data-line-number="1627"></td>
        <td id="LC1627" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> bValue <span class="pl-k">=</span> <span class="pl-smi">b</span>.<span class="pl-smi">k</span> <span class="pl-k">||</span> <span class="pl-smi">b</span>.<span class="pl-c1">name</span>;</td>
      </tr>
      <tr>
        <td id="L1628" class="blob-num js-line-number" data-line-number="1628"></td>
        <td id="LC1628" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1629" class="blob-num js-line-number" data-line-number="1629"></td>
        <td id="LC1629" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (bValue <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>*<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L1630" class="blob-num js-line-number" data-line-number="1630"></td>
        <td id="LC1630" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-k">-</span><span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L1631" class="blob-num js-line-number" data-line-number="1631"></td>
        <td id="LC1631" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1632" class="blob-num js-line-number" data-line-number="1632"></td>
        <td id="LC1632" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1633" class="blob-num js-line-number" data-line-number="1633"></td>
        <td id="LC1633" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (aValue <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>*<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L1634" class="blob-num js-line-number" data-line-number="1634"></td>
        <td id="LC1634" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L1635" class="blob-num js-line-number" data-line-number="1635"></td>
        <td id="LC1635" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1636" class="blob-num js-line-number" data-line-number="1636"></td>
        <td id="LC1636" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1637" class="blob-num js-line-number" data-line-number="1637"></td>
        <td id="LC1637" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-smi">bValue</span>.<span class="pl-c1">length</span> <span class="pl-k">-</span> <span class="pl-smi">aValue</span>.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L1638" class="blob-num js-line-number" data-line-number="1638"></td>
        <td id="LC1638" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1639" class="blob-num js-line-number" data-line-number="1639"></td>
        <td id="LC1639" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1640" class="blob-num js-line-number" data-line-number="1640"></td>
        <td id="LC1640" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">// 暴露全局对象</span></td>
      </tr>
      <tr>
        <td id="L1641" class="blob-num js-line-number" data-line-number="1641"></td>
        <td id="LC1641" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">!</span>define) {</td>
      </tr>
      <tr>
        <td id="L1642" class="blob-num js-line-number" data-line-number="1642"></td>
        <td id="LC1642" class="blob-code blob-code-inner js-file-line">        define <span class="pl-k">=</span> globalDefine;</td>
      </tr>
      <tr>
        <td id="L1643" class="blob-num js-line-number" data-line-number="1643"></td>
        <td id="LC1643" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1644" class="blob-num js-line-number" data-line-number="1644"></td>
        <td id="LC1644" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// 可能碰到其他形式的loader，所以，不要覆盖人家</span></td>
      </tr>
      <tr>
        <td id="L1645" class="blob-num js-line-number" data-line-number="1645"></td>
        <td id="LC1645" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-k">!</span>require) {</td>
      </tr>
      <tr>
        <td id="L1646" class="blob-num js-line-number" data-line-number="1646"></td>
        <td id="LC1646" class="blob-code blob-code-inner js-file-line">            require <span class="pl-k">=</span> globalRequire;</td>
      </tr>
      <tr>
        <td id="L1647" class="blob-num js-line-number" data-line-number="1647"></td>
        <td id="LC1647" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1648" class="blob-num js-line-number" data-line-number="1648"></td>
        <td id="LC1648" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1649" class="blob-num js-line-number" data-line-number="1649"></td>
        <td id="LC1649" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// 如果存在其他版本的esl，在define那里就判断过了，不会进入这个分支</span></td>
      </tr>
      <tr>
        <td id="L1650" class="blob-num js-line-number" data-line-number="1650"></td>
        <td id="LC1650" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// 所以这里就不判断了，直接写</span></td>
      </tr>
      <tr>
        <td id="L1651" class="blob-num js-line-number" data-line-number="1651"></td>
        <td id="LC1651" class="blob-code blob-code-inner js-file-line">        esl <span class="pl-k">=</span> globalRequire;</td>
      </tr>
      <tr>
        <td id="L1652" class="blob-num js-line-number" data-line-number="1652"></td>
        <td id="LC1652" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1653" class="blob-num js-line-number" data-line-number="1653"></td>
        <td id="LC1653" class="blob-code blob-code-inner js-file-line">})(<span class="pl-v">this</span>);</td>
      </tr>
</table>

  </div>

</div>

<button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="hidden">Jump to Line</button>
<div id="jump-to-line" style="display:none">
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="form-control linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

  </div>
  <div class="modal-backdrop"></div>
</div>


    </div>
  </div>

    </div>

        <div class="container site-footer-container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage" class="site-footer-mark" title="GitHub">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59 0.4 0.07 0.55-0.17 0.55-0.38 0-0.19-0.01-0.82-0.01-1.49-2.01 0.37-2.53-0.49-2.69-0.94-0.09-0.23-0.48-0.94-0.82-1.13-0.28-0.15-0.68-0.52-0.01-0.53 0.63-0.01 1.08 0.58 1.23 0.82 0.72 1.21 1.87 0.87 2.33 0.66 0.07-0.52 0.28-0.87 0.51-1.07-1.78-0.2-3.64-0.89-3.64-3.95 0-0.87 0.31-1.59 0.82-2.15-0.08-0.2-0.36-1.02 0.08-2.12 0 0 0.67-0.21 2.2 0.82 0.64-0.18 1.32-0.27 2-0.27 0.68 0 1.36 0.09 2 0.27 1.53-1.04 2.2-0.82 2.2-0.82 0.44 1.1 0.16 1.92 0.08 2.12 0.51 0.56 0.82 1.27 0.82 2.15 0 3.07-1.87 3.75-3.65 3.95 0.29 0.25 0.54 0.73 0.54 1.48 0 1.07-0.01 1.93-0.01 2.2 0 0.21 0.15 0.46 0.55 0.38C13.71 14.53 16 11.53 16 8 16 3.58 12.42 0 8 0z"></path></svg>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2016 <span title="0.12915s from github-fe133-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



    

    <div id="ajax-error-message" class="ajax-error-message flash flash-error">
      <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M15.72 12.5l-6.85-11.98C8.69 0.21 8.36 0.02 8 0.02s-0.69 0.19-0.87 0.5l-6.85 11.98c-0.18 0.31-0.18 0.69 0 1C0.47 13.81 0.8 14 1.15 14h13.7c0.36 0 0.69-0.19 0.86-0.5S15.89 12.81 15.72 12.5zM9 12H7V10h2V12zM9 9H7V5h2V9z"></path></svg>
      <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
        <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75-1.48-1.48 3.75-3.75L0.77 4.25l1.48-1.48 3.75 3.75 3.75-3.75 1.48 1.48-3.75 3.75z"></path></svg>
      </button>
      Something went wrong with that request. Please try again.
    </div>


      
      <script crossorigin="anonymous" integrity="sha256-52zkLOd8k0WG98rL4k1Vbb5v79votTo5NkSxgZn3wpE=" src="https://assets-cdn.github.com/assets/frameworks-e76ce42ce77c934586f7cacbe24d556dbe6fefdbe8b53a393644b18199f7c291.js"></script>
      <script async="async" crossorigin="anonymous" integrity="sha256-IP0kxbjUDrkevib6o4VLJ6LMpB1o2oVLXeAmLrH9ufc=" src="https://assets-cdn.github.com/assets/github-20fd24c5b8d40eb91ebe26faa3854b27a2cca41d68da854b5de0262eb1fdb9f7.js"></script>
      
      
      
      
      
      
    <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner hidden">
      <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M15.72 12.5l-6.85-11.98C8.69 0.21 8.36 0.02 8 0.02s-0.69 0.19-0.87 0.5l-6.85 11.98c-0.18 0.31-0.18 0.69 0 1C0.47 13.81 0.8 14 1.15 14h13.7c0.36 0 0.69-0.19 0.86-0.5S15.89 12.81 15.72 12.5zM9 12H7V10h2V12zM9 9H7V5h2V9z"></path></svg>
      <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
      <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
    </div>
    <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75-1.48-1.48 3.75-3.75L0.77 4.25l1.48-1.48 3.75 3.75 3.75-3.75 1.48 1.48-3.75 3.75z"></path></svg>
    </button>
  </div>
</div>

  </body>
</html>

>>>>>>> e5af5d78a5a448ebe0d4b0956e5c6478937b2a1e
