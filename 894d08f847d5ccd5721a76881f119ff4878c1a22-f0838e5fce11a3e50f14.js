(self.webpackChunkgatsby_starter_gcn=self.webpackChunkgatsby_starter_gcn||[]).push([[661],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,u,s,l;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(!i(e[u],a[u]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!a.has(u.value[0]))return!1;for(l=e.entries();!(u=l.next()).done;)if(!i(u.value[1],a.get(u.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!a.has(u.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(e[u]!==a[u])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(a,s[u]))return!1;if(t&&e instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==s[u]&&"__v"!==s[u]&&"__o"!==s[u]||!e.$$typeof)&&!i(e[s[u]],a[s[u]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,o=n(7294),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function l(){u=e(s.map((function(e){return e.props}))),f.canUseDOM?t(u):n&&(u=n(u))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,s=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),l()},a.componentDidUpdate=function(){l()},a.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),l()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(f,"canUseDOM",c),f}}},6810:function(e,t,n){"use strict";var r=n(6771),o=(n(7294),n(3431)),i=(0,r.Z)("section",{target:"e1v0oy570"})("margin:0 auto auto;width:100%;max-width:",(function(e){return e.theme.sizes.maxWidth}),";padding:3em 1.5em 2em;flex-grow:1;");t.Z=function(e){return(0,o.tZ)(i,null,e.children)}},1683:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(6771),o=n(7294),i=n(3431),a=n(5444),c=n(5078),u=function(){var e=(0,c.If)(),t=e[0],n=e[1],r={light:"dark",dark:"maroon",maroon:"light"}[t];return(0,i.tZ)("button",{onClick:function(){return n(r)}},(0,i.tZ)("span",{style:{color:"#e29623",fontSize:22}},"☪"))},s=(0,r.Z)("header",{target:"e1h6nnwi1"})("background:",(function(e){return e.theme.colors.primary}),";width:100%;padding:1em 0;"),l=(0,r.Z)("nav",{target:"e1h6nnwi0"})("width:100%;max-width:",(function(e){return e.theme.sizes.maxWidth}),";margin:0 auto;padding:0 1.5em;ul{display:flex;justify-content:space-between;align-items:center;}li{display:inline-block;margin-right:1em;&:first-of-type{position:relative;flex-basis:100%;}}a{text-decoration:none;color:#ffffff;font-weight:600;transition:all 0.2s;border-bottom:2px solid ",(function(e){return e.theme.colors.primary}),";&:hover{color:",(function(e){return e.theme.colors.secondary}),";}}"),f={color:"white"},d=function(){var e=(0,a.useStaticQuery)("3732430097").site.siteMetadata.menuLinks;return(0,i.tZ)(s,null,(0,i.tZ)(l,null,(0,i.tZ)("ul",null,e.map((function(e){return(0,i.tZ)("li",{key:e.name},(0,i.tZ)(a.Link,{to:e.slug,activeStyle:f},e.name))})),(0,i.tZ)(u,null))))},p=(0,r.Z)("footer",{target:"e12hzzzc2"})("display:flex;flex-flow:row wrap;justify-content:space-between;align-items:flex-start;margin:0 auto;max-width:",(function(e){return e.theme.sizes.maxWidth}),";"),h=(0,r.Z)("ul",{target:"e12hzzzc1"})("display:flex;flex-flow:row wrap;justify-content:space-between;align-items:flex-start;width:100%;border-top:1px solid ",(function(e){return e.theme.colors.bordercol}),";padding:1em 0 2em;margin:0 1.5em;"),m=(0,r.Z)("li",{target:"e12hzzzc0"})("display:inline-block;padding:0.25em 0;width:auto;a{font-weight:600;transition:all 0.2s;color:",(function(e){return e.theme.colors.text}),";&:hover{color:",(function(e){return e.theme.colors.highlight}),";}&:visited{color:",(function(e){return e.theme.colors.text}),";}}"),b=function(){return(0,i.tZ)(p,null,(0,i.tZ)(h,null,(0,i.tZ)(m,null,(0,i.tZ)("a",{href:"https://github.com/dokaka-web-late-r3/Shinya-GitHub-Center",rel:"nofollow noopener noreferrer",target:"_blank"},(0,i.tZ)("img",{src:"/dokaka-web-late-r3/images/github_blackwhite_logo.png",style:{width:"40px"},alt:"GitHub"}))),(0,i.tZ)(m,null,(0,i.tZ)("a",{href:"https://www.facebook.com/post.pandemic.dkk/",rel:"nofollow noopener noreferrer",target:"_blank"},(0,i.tZ)("img",{src:"/dokaka-web-late-r3/images/facebook_logo.svg",style:{width:"40px"},alt:"Facebook"}))),(0,i.tZ)(m,null,(0,i.tZ)("a",{href:"https://www.youtube.com/c/DKKFUNVIDEO",rel:"nofollow noopener noreferrer",target:"_blank"},(0,i.tZ)("img",{src:"/dokaka-web-late-r3/images/youtube_logo.svg",style:{width:"40px"},alt:"YouTube"}))),(0,i.tZ)(m,null,(0,i.tZ)("a",{href:"https://music.apple.com/us/album/the-dokaka-discography/392217854",rel:"nofollow noopener noreferrer",target:"_blank"},(0,i.tZ)("img",{src:"/dokaka-web-late-r3/images/tddiscog_logo.png",style:{width:"40px",borderRadius:"5px"},alt:"The Dokaka Discography"}))),(0,i.tZ)(m,null,(0,i.tZ)("a",{href:"https://music.apple.com/jp/album/human-interface/295543709",rel:"nofollow noopener noreferrer",target:"_blank"},(0,i.tZ)("img",{src:"/dokaka-web-late-r3/images/hiface_logo.png",style:{width:"40px",borderRadius:"5px"},alt:"Human Interface"})))))};var y={name:"1mqxynv",styles:"html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;max-width:100%;font-size:100%;font:inherit;vertical-align:baseline;}html,body{height:100%;}.siteRoot{height:100vh;display:flex;flex-direction:column;}.siteContent{display:flex;flex-direction:column;flex:1 0 auto;}footer{width:100%;}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block;}@media screen and (min-width: 35em){html{margin-right:calc(-100vw + 100%);overflow-x:hidden;}}ol,ul,li{list-style:none;}blockquote,q{quotes:none;}blockquote::before,blockquote::after,q::before,q::after{content:'';content:none;}table{border-collapse:collapse;border-spacing:0;}*{box-sizing:border-box;}body{line-height:1;font-size:100%;font-variant-ligatures:none;text-rendering:optimizeLegibility;text-shadow:rgba(0, 0, 0, 0.01) 0 0 1px;font-weight:400;}img{display:block;width:100%;height:auto;}button,input,textarea,select{font-family:inherit;font-size:inherit;background:none;border:none;appearance:none;border-radius:0;resize:none;&:invalid{box-shadow:none;}&:focus{outline:5px auto #5e9ed6;outline:5px auto -webkit-focus-ring-color;}}body:not(.user-is-tabbing) button:focus,body:not(.user-is-tabbing) input:focus,body:not(.user-is-tabbing) select:focus,body:not(.user-is-tabbing) textarea:focus,body:not(.user-is-tabbing) a:focus{outline:none;}"},g=(0,r.Z)("div",{target:"e16mhi8c1"})("font-family:",(function(e){return e.theme.fonts.body}),";"),w=(0,r.Z)("a",{target:"e16mhi8c0"})("font-family:",(function(e){return e.theme.fonts.body}),";padding:0 1rem;line-height:60px;background:#2867cf;color:white;z-index:101;position:fixed;top:-100%;&:hover{text-decoration:underline;}&:focus,&:active,&:hover{top:0;}"),v=function(e){function t(e){9===e.keyCode&&document.body.classList.add("user-is-tabbing")}return(0,o.useEffect)((function(){return window.addEventListener("keydown",t)}),[]),(0,i.tZ)(g,{className:"siteRoot"},(0,i.tZ)("div",{className:"siteContent"},(0,i.tZ)(w,{href:"#main",id:"skip-navigation"},"Skip to content"),(0,i.tZ)(d,null),(0,i.tZ)("div",{id:"main"},e.children)),(0,i.tZ)(b,null),(0,i.tZ)(i.xB,{styles:y}))}},2335:function(e,t,n){"use strict";n.d(t,{Z:function(){return we}});var r,o,i,a,c=n(7294),u=n(5697),s=n.n(u),l=n(4839),f=n.n(l),d=n(2993),p=n.n(d),h=n(6494),m=n.n(h),b="bodyAttributes",y="htmlAttributes",g="titleAttributes",w={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},v=(Object.keys(w).map((function(e){return w[e]})),"charset"),T="cssText",k="href",x="http-equiv",A="innerHTML",C="itemprop",O="name",S="property",E="rel",Z="src",j="target",P={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},L="defaultTitle",I="defer",_="encodeSpecialCharacters",M="onChangeClientState",z="titleTemplate",N=Object.keys(P).reduce((function(e,t){return e[P[t]]=t,e}),{}),R=[w.NOSCRIPT,w.SCRIPT,w.STYLE],q="data-react-helmet",D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},B=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Y=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},U=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},K=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},W=function(e){var t=J(e,w.TITLE),n=J(e,z);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=J(e,L);return t||r||void 0},V=function(e){return J(e,M)||function(){}},G=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return F({},e,t)}),{})},Q=function(e,t){return t.filter((function(e){return void 0!==e[w.BASE]})).map((function(e){return e[w.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},$=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+D(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],u=c.toLowerCase();-1===t.indexOf(u)||n===E&&"canonical"===e[n].toLowerCase()||u===E&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==A&&c!==T&&c!==C||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][s]&&(o[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],u=m()({},r[c],o[c]);r[c]=u}return e}),[]).reverse()},J=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},X=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:n.g.requestAnimationFrame||X,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ie=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,l=e.styleTags,f=e.title,d=e.titleAttributes;ue(w.BODY,r),ue(w.HTML,o),ce(f,d);var p={baseTag:se(w.BASE,n),linkTags:se(w.LINK,i),metaTags:se(w.META,a),noscriptTags:se(w.NOSCRIPT,c),scriptTags:se(w.SCRIPT,s),styleTags:se(w.STYLE,l)},h={},m={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(h[e]=n),r.length&&(m[e]=p[e].oldTags)})),t&&t(),u(e,h,m)},ae=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ae(e)),ue(w.TITLE,t)},ue=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(q),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var u=a[c],s=t[u]||"";n.getAttribute(u)!==s&&n.setAttribute(u,s),-1===o.indexOf(u)&&o.push(u);var l=i.indexOf(u);-1!==l&&i.splice(l,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute(q):n.getAttribute(q)!==a.join(",")&&n.setAttribute(q,a.join(","))}},se=function(e,t){var n=document.head||document.querySelector(w.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===A)n.innerHTML=t.innerHTML;else if(r===T)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(q,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},le=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[P[n]||n]=e[n],t}),t)},de=function(e,t,n){switch(e){case w.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[q]=!0,o=fe(n,r),[c.createElement(w.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=le(n),i=ae(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+K(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+K(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case b:case y:return{toComponent:function(){return fe(t)},toString:function(){return le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[q]=!0,r);return Object.keys(t).forEach((function(e){var n=P[e]||e;if(n===A||n===T){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),c.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===A||e===T)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+K(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===R.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},pe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.scriptTags,s=e.styleTags,l=e.title,f=void 0===l?"":l,d=e.titleAttributes;return{base:de(w.BASE,t,r),bodyAttributes:de(b,n,r),htmlAttributes:de(y,o,r),link:de(w.LINK,i,r),meta:de(w.META,a,r),noscript:de(w.NOSCRIPT,c,r),script:de(w.SCRIPT,u,r),style:de(w.STYLE,s,r),title:de(w.TITLE,{title:f,titleAttributes:d},r)}},he=f()((function(e){return{baseTag:Q([k,j],e),bodyAttributes:G(b,e),defer:J(e,I),encode:J(e,_),htmlAttributes:G(y,e),linkTags:$(w.LINK,[E,k],e),metaTags:$(w.META,[O,v,x,S,C],e),noscriptTags:$(w.NOSCRIPT,[A],e),onChangeClientState:V(e),scriptTags:$(w.SCRIPT,[Z,A],e),styleTags:$(w.STYLE,[T],e),title:W(e),titleAttributes:G(g,e)}}),(function(e){oe&&ne(oe),e.defer?oe=te((function(){ie(e,(function(){oe=null}))})):(ie(e),oe=null)}),pe)((function(){return null})),me=(o=he,a=i=function(e){function t(){return H(this,t),U(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case w.SCRIPT:case w.NOSCRIPT:return{innerHTML:t};case w.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return F({},r,((t={})[n.type]=[].concat(r[n.type]||[],[F({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case w.TITLE:return F({},o,((t={})[r.type]=a,t.titleAttributes=F({},i),t));case w.BODY:return F({},o,{bodyAttributes:F({},i)});case w.HTML:return F({},o,{htmlAttributes:F({},i)})}return F({},o,((n={})[r.type]=F({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=F({},t);return Object.keys(e).forEach((function(t){var r;n=F({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return c.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[N[n]||n]=e[n],t}),t)}(Y(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case w.LINK:case w.META:case w.NOSCRIPT:case w.SCRIPT:case w.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=Y(e,["children"]),r=F({},n);return t&&(r=this.mapChildrenToProps(t,r)),c.createElement(o,r)},B(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(c.Component),i.propTypes={base:s().object,bodyAttributes:s().object,children:s().oneOfType([s().arrayOf(s().node),s().node]),defaultTitle:s().string,defer:s().bool,encodeSpecialCharacters:s().bool,htmlAttributes:s().object,link:s().arrayOf(s().object),meta:s().arrayOf(s().object),noscript:s().arrayOf(s().object),onChangeClientState:s().func,script:s().arrayOf(s().object),style:s().arrayOf(s().object),title:s().string,titleAttributes:s().object,titleTemplate:s().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);me.renderStatic=me.rewind;var be=me,ye=n(5444),ge=n(3431),we=function(e){var t=e.title,n=e.description,r=e.image,o=(0,ye.useStaticQuery)("1946181227").site,i=o.siteMetadata.siteUrl+o.siteMetadata.image,a=n||o.siteMetadata.description,c=r||i;return(0,ge.tZ)(be,{htmlAttributes:{lang:"en"},title:t,defaultTitle:o.siteMetadata.title,titleTemplate:"%s | "+o.siteMetadata.title},(0,ge.tZ)("meta",{charSet:"utf-8"}),(0,ge.tZ)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,ge.tZ)("meta",{name:"image",content:r}),(0,ge.tZ)("meta",{name:"description",content:a}),(0,ge.tZ)("meta",{property:"og:title",content:t}),(0,ge.tZ)("meta",{property:"og:image",content:c}),(0,ge.tZ)("meta",{property:"og:description",content:a}),(0,ge.tZ)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,ge.tZ)("meta",{name:"twitter:title",content:t}),(0,ge.tZ)("meta",{name:"twitter:image",content:c}),(0,ge.tZ)("meta",{name:"twitter:description",content:a}))}}}]);
//# sourceMappingURL=894d08f847d5ccd5721a76881f119ff4878c1a22-f0838e5fce11a3e50f14.js.map