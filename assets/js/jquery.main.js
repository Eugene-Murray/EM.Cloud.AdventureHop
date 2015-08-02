/* ============================ TOC ==============================
1. Underscore for Debounce and Throttle  
2. IOS 8 Bug Fix  
3. BigText Used on Home Page  
4. jQuery Cookie  
5. Hover Intent   
6. Detects whether the device is a touch device for IOS, Android, and Windows Mobile  
7. Responsive Equal Heights  
8. FitVideos (responsive iframe)  
9. Placeholder Support
10. Menu Script
11. Initialize Menu
12. SoundCloud Non-blocking Load
13. BigText (window load gets correct size on load, doc ready does not)  --
14. Shift Correct : prevent shifting of the page due to the scrollbar when a slide is active  
15. Data Slide  
16. Don't Cover Anchor Targets
17. Sticky Header  
18. Match Height of the Slider next to this column  
19. Misc. Initializations and Custom Scripts  BEGIN 
  19. - 1 :: Equal Height Initialize  
  19. - 2 :: .title inner wrapper  
  19. - 3 :: Inner Wrappers for .info-text-box and .widget-title  
  19. - 4 :: icon-click functions :: you can remove this on live sites  
  19. - 5 :: Scroll to Top  
  19. - 6 :: Video Non-Blocking Load  
  19. - 7 :: pricing plan  
  19. - 8 :: click slide (mouseover on no-touch)  
20. - AddThis and SidePage Follow  
21. - Summary Side Page Follow for blog  
22. Sticky Sidebar for Scrollspy Content (is not part of Scrollspy)  
23. Bottom Footer  
================================================================ */

// --------------- 1. Underscore for Debounce and Throttle --------------- //
//     Underscore.js 1.8.2
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){function n(n){function t(t,r,e,u,i,o){for(;i>=0&&o>i;i+=n){var a=u?u[i]:i;e=r(e,t[a],a,t)}return e}return function(r,e,u,i){e=d(e,i,4);var o=!w(r)&&m.keys(r),a=(o||r).length,c=n>0?0:a-1;return arguments.length<3&&(u=r[o?o[c]:c],c+=n),t(r,e,u,o,c,a)}}function t(n){return function(t,r,e){r=b(r,e);for(var u=null!=t&&t.length,i=n>0?0:u-1;i>=0&&u>i;i+=n)if(r(t[i],i,t))return i;return-1}}function r(n,t){var r=S.length,e=n.constructor,u=m.isFunction(e)&&e.prototype||o,i="constructor";for(m.has(n,i)&&!m.contains(t,i)&&t.push(i);r--;)i=S[r],i in n&&n[i]!==u[i]&&!m.contains(t,i)&&t.push(i)}var e=this,u=e._,i=Array.prototype,o=Object.prototype,a=Function.prototype,c=i.push,l=i.slice,f=o.toString,s=o.hasOwnProperty,p=Array.isArray,h=Object.keys,v=a.bind,g=Object.create,y=function(){},m=function(n){return n instanceof m?n:this instanceof m?void(this._wrapped=n):new m(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=m),exports._=m):e._=m,m.VERSION="1.8.2";var d=function(n,t,r){if(t===void 0)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}},b=function(n,t,r){return null==n?m.identity:m.isFunction(n)?d(n,t,r):m.isObject(n)?m.matcher(n):m.property(n)};m.iteratee=function(n,t){return b(n,t,1/0)};var x=function(n,t){return function(r){var e=arguments.length;if(2>e||null==r)return r;for(var u=1;e>u;u++)for(var i=arguments[u],o=n(i),a=o.length,c=0;a>c;c++){var l=o[c];t&&r[l]!==void 0||(r[l]=i[l])}return r}},_=function(n){if(!m.isObject(n))return{};if(g)return g(n);y.prototype=n;var t=new y;return y.prototype=null,t},j=Math.pow(2,53)-1,w=function(n){var t=n&&n.length;return"number"==typeof t&&t>=0&&j>=t};m.each=m.forEach=function(n,t,r){t=d(t,r);var e,u;if(w(n))for(e=0,u=n.length;u>e;e++)t(n[e],e,n);else{var i=m.keys(n);for(e=0,u=i.length;u>e;e++)t(n[i[e]],i[e],n)}return n},m.map=m.collect=function(n,t,r){t=b(t,r);for(var e=!w(n)&&m.keys(n),u=(e||n).length,i=Array(u),o=0;u>o;o++){var a=e?e[o]:o;i[o]=t(n[a],a,n)}return i},m.reduce=m.foldl=m.inject=n(1),m.reduceRight=m.foldr=n(-1),m.find=m.detect=function(n,t,r){var e;return e=w(n)?m.findIndex(n,t,r):m.findKey(n,t,r),e!==void 0&&e!==-1?n[e]:void 0},m.filter=m.select=function(n,t,r){var e=[];return t=b(t,r),m.each(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e},m.reject=function(n,t,r){return m.filter(n,m.negate(b(t)),r)},m.every=m.all=function(n,t,r){t=b(t,r);for(var e=!w(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(!t(n[o],o,n))return!1}return!0},m.some=m.any=function(n,t,r){t=b(t,r);for(var e=!w(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(t(n[o],o,n))return!0}return!1},m.contains=m.includes=m.include=function(n,t,r){return w(n)||(n=m.values(n)),m.indexOf(n,t,"number"==typeof r&&r)>=0},m.invoke=function(n,t){var r=l.call(arguments,2),e=m.isFunction(t);return m.map(n,function(n){var u=e?t:n[t];return null==u?u:u.apply(n,r)})},m.pluck=function(n,t){return m.map(n,m.property(t))},m.where=function(n,t){return m.filter(n,m.matcher(t))},m.findWhere=function(n,t){return m.find(n,m.matcher(t))},m.max=function(n,t,r){var e,u,i=-1/0,o=-1/0;if(null==t&&null!=n){n=w(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],e>i&&(i=e)}else t=b(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(u>o||u===-1/0&&i===-1/0)&&(i=n,o=u)});return i},m.min=function(n,t,r){var e,u,i=1/0,o=1/0;if(null==t&&null!=n){n=w(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],i>e&&(i=e)}else t=b(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(o>u||1/0===u&&1/0===i)&&(i=n,o=u)});return i},m.shuffle=function(n){for(var t,r=w(n)?n:m.values(n),e=r.length,u=Array(e),i=0;e>i;i++)t=m.random(0,i),t!==i&&(u[i]=u[t]),u[t]=r[i];return u},m.sample=function(n,t,r){return null==t||r?(w(n)||(n=m.values(n)),n[m.random(n.length-1)]):m.shuffle(n).slice(0,Math.max(0,t))},m.sortBy=function(n,t,r){return t=b(t,r),m.pluck(m.map(n,function(n,r,e){return{value:n,index:r,criteria:t(n,r,e)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var A=function(n){return function(t,r,e){var u={};return r=b(r,e),m.each(t,function(e,i){var o=r(e,i,t);n(u,e,o)}),u}};m.groupBy=A(function(n,t,r){m.has(n,r)?n[r].push(t):n[r]=[t]}),m.indexBy=A(function(n,t,r){n[r]=t}),m.countBy=A(function(n,t,r){m.has(n,r)?n[r]++:n[r]=1}),m.toArray=function(n){return n?m.isArray(n)?l.call(n):w(n)?m.map(n,m.identity):m.values(n):[]},m.size=function(n){return null==n?0:w(n)?n.length:m.keys(n).length},m.partition=function(n,t,r){t=b(t,r);var e=[],u=[];return m.each(n,function(n,r,i){(t(n,r,i)?e:u).push(n)}),[e,u]},m.first=m.head=m.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:m.initial(n,n.length-t)},m.initial=function(n,t,r){return l.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},m.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:m.rest(n,Math.max(0,n.length-t))},m.rest=m.tail=m.drop=function(n,t,r){return l.call(n,null==t||r?1:t)},m.compact=function(n){return m.filter(n,m.identity)};var k=function(n,t,r,e){for(var u=[],i=0,o=e||0,a=n&&n.length;a>o;o++){var c=n[o];if(w(c)&&(m.isArray(c)||m.isArguments(c))){t||(c=k(c,t,r));var l=0,f=c.length;for(u.length+=f;f>l;)u[i++]=c[l++]}else r||(u[i++]=c)}return u};m.flatten=function(n,t){return k(n,t,!1)},m.without=function(n){return m.difference(n,l.call(arguments,1))},m.uniq=m.unique=function(n,t,r,e){if(null==n)return[];m.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=b(r,e));for(var u=[],i=[],o=0,a=n.length;a>o;o++){var c=n[o],l=r?r(c,o,n):c;t?(o&&i===l||u.push(c),i=l):r?m.contains(i,l)||(i.push(l),u.push(c)):m.contains(u,c)||u.push(c)}return u},m.union=function(){return m.uniq(k(arguments,!0,!0))},m.intersection=function(n){if(null==n)return[];for(var t=[],r=arguments.length,e=0,u=n.length;u>e;e++){var i=n[e];if(!m.contains(t,i)){for(var o=1;r>o&&m.contains(arguments[o],i);o++);o===r&&t.push(i)}}return t},m.difference=function(n){var t=k(arguments,!0,!0,1);return m.filter(n,function(n){return!m.contains(t,n)})},m.zip=function(){return m.unzip(arguments)},m.unzip=function(n){for(var t=n&&m.max(n,"length").length||0,r=Array(t),e=0;t>e;e++)r[e]=m.pluck(n,e);return r},m.object=function(n,t){for(var r={},e=0,u=n&&n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},m.indexOf=function(n,t,r){var e=0,u=n&&n.length;if("number"==typeof r)e=0>r?Math.max(0,u+r):r;else if(r&&u)return e=m.sortedIndex(n,t),n[e]===t?e:-1;if(t!==t)return m.findIndex(l.call(n,e),m.isNaN);for(;u>e;e++)if(n[e]===t)return e;return-1},m.lastIndexOf=function(n,t,r){var e=n?n.length:0;if("number"==typeof r&&(e=0>r?e+r+1:Math.min(e,r+1)),t!==t)return m.findLastIndex(l.call(n,0,e),m.isNaN);for(;--e>=0;)if(n[e]===t)return e;return-1},m.findIndex=t(1),m.findLastIndex=t(-1),m.sortedIndex=function(n,t,r,e){r=b(r,e,1);for(var u=r(t),i=0,o=n.length;o>i;){var a=Math.floor((i+o)/2);r(n[a])<u?i=a+1:o=a}return i},m.range=function(n,t,r){arguments.length<=1&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;e>i;i++,n+=r)u[i]=n;return u};var O=function(n,t,r,e,u){if(!(e instanceof t))return n.apply(r,u);var i=_(n.prototype),o=n.apply(i,u);return m.isObject(o)?o:i};m.bind=function(n,t){if(v&&n.bind===v)return v.apply(n,l.call(arguments,1));if(!m.isFunction(n))throw new TypeError("Bind must be called on a function");var r=l.call(arguments,2),e=function(){return O(n,e,t,this,r.concat(l.call(arguments)))};return e},m.partial=function(n){var t=l.call(arguments,1),r=function(){for(var e=0,u=t.length,i=Array(u),o=0;u>o;o++)i[o]=t[o]===m?arguments[e++]:t[o];for(;e<arguments.length;)i.push(arguments[e++]);return O(n,r,this,this,i)};return r},m.bindAll=function(n){var t,r,e=arguments.length;if(1>=e)throw new Error("bindAll must be passed function names");for(t=1;e>t;t++)r=arguments[t],n[r]=m.bind(n[r],n);return n},m.memoize=function(n,t){var r=function(e){var u=r.cache,i=""+(t?t.apply(this,arguments):e);return m.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},m.delay=function(n,t){var r=l.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},m.defer=m.partial(m.delay,m,1),m.throttle=function(n,t,r){var e,u,i,o=null,a=0;r||(r={});var c=function(){a=r.leading===!1?0:m.now(),o=null,i=n.apply(e,u),o||(e=u=null)};return function(){var l=m.now();a||r.leading!==!1||(a=l);var f=t-(l-a);return e=this,u=arguments,0>=f||f>t?(o&&(clearTimeout(o),o=null),a=l,i=n.apply(e,u),o||(e=u=null)):o||r.trailing===!1||(o=setTimeout(c,f)),i}},m.debounce=function(n,t,r){var e,u,i,o,a,c=function(){var l=m.now()-o;t>l&&l>=0?e=setTimeout(c,t-l):(e=null,r||(a=n.apply(i,u),e||(i=u=null)))};return function(){i=this,u=arguments,o=m.now();var l=r&&!e;return e||(e=setTimeout(c,t)),l&&(a=n.apply(i,u),i=u=null),a}},m.wrap=function(n,t){return m.partial(t,n)},m.negate=function(n){return function(){return!n.apply(this,arguments)}},m.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},m.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},m.before=function(n,t){var r;return function(){return--n>0&&(r=t.apply(this,arguments)),1>=n&&(t=null),r}},m.once=m.partial(m.before,2);var F=!{toString:null}.propertyIsEnumerable("toString"),S=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];m.keys=function(n){if(!m.isObject(n))return[];if(h)return h(n);var t=[];for(var e in n)m.has(n,e)&&t.push(e);return F&&r(n,t),t},m.allKeys=function(n){if(!m.isObject(n))return[];var t=[];for(var e in n)t.push(e);return F&&r(n,t),t},m.values=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},m.mapObject=function(n,t,r){t=b(t,r);for(var e,u=m.keys(n),i=u.length,o={},a=0;i>a;a++)e=u[a],o[e]=t(n[e],e,n);return o},m.pairs=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},m.invert=function(n){for(var t={},r=m.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},m.functions=m.methods=function(n){var t=[];for(var r in n)m.isFunction(n[r])&&t.push(r);return t.sort()},m.extend=x(m.allKeys),m.extendOwn=m.assign=x(m.keys),m.findKey=function(n,t,r){t=b(t,r);for(var e,u=m.keys(n),i=0,o=u.length;o>i;i++)if(e=u[i],t(n[e],e,n))return e},m.pick=function(n,t,r){var e,u,i={},o=n;if(null==o)return i;m.isFunction(t)?(u=m.allKeys(o),e=d(t,r)):(u=k(arguments,!1,!1,1),e=function(n,t,r){return t in r},o=Object(o));for(var a=0,c=u.length;c>a;a++){var l=u[a],f=o[l];e(f,l,o)&&(i[l]=f)}return i},m.omit=function(n,t,r){if(m.isFunction(t))t=m.negate(t);else{var e=m.map(k(arguments,!1,!1,1),String);t=function(n,t){return!m.contains(e,t)}}return m.pick(n,t,r)},m.defaults=x(m.allKeys,!0),m.clone=function(n){return m.isObject(n)?m.isArray(n)?n.slice():m.extend({},n):n},m.tap=function(n,t){return t(n),n},m.isMatch=function(n,t){var r=m.keys(t),e=r.length;if(null==n)return!e;for(var u=Object(n),i=0;e>i;i++){var o=r[i];if(t[o]!==u[o]||!(o in u))return!1}return!0};var E=function(n,t,r,e){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof m&&(n=n._wrapped),t instanceof m&&(t=t._wrapped);var u=f.call(n);if(u!==f.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}var i="[object Array]"===u;if(!i){if("object"!=typeof n||"object"!=typeof t)return!1;var o=n.constructor,a=t.constructor;if(o!==a&&!(m.isFunction(o)&&o instanceof o&&m.isFunction(a)&&a instanceof a)&&"constructor"in n&&"constructor"in t)return!1}r=r||[],e=e||[];for(var c=r.length;c--;)if(r[c]===n)return e[c]===t;if(r.push(n),e.push(t),i){if(c=n.length,c!==t.length)return!1;for(;c--;)if(!E(n[c],t[c],r,e))return!1}else{var l,s=m.keys(n);if(c=s.length,m.keys(t).length!==c)return!1;for(;c--;)if(l=s[c],!m.has(t,l)||!E(n[l],t[l],r,e))return!1}return r.pop(),e.pop(),!0};m.isEqual=function(n,t){return E(n,t)},m.isEmpty=function(n){return null==n?!0:w(n)&&(m.isArray(n)||m.isString(n)||m.isArguments(n))?0===n.length:0===m.keys(n).length},m.isElement=function(n){return!(!n||1!==n.nodeType)},m.isArray=p||function(n){return"[object Array]"===f.call(n)},m.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},m.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(n){m["is"+n]=function(t){return f.call(t)==="[object "+n+"]"}}),m.isArguments(arguments)||(m.isArguments=function(n){return m.has(n,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(m.isFunction=function(n){return"function"==typeof n||!1}),m.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},m.isNaN=function(n){return m.isNumber(n)&&n!==+n},m.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===f.call(n)},m.isNull=function(n){return null===n},m.isUndefined=function(n){return n===void 0},m.has=function(n,t){return null!=n&&s.call(n,t)},m.noConflict=function(){return e._=u,this},m.identity=function(n){return n},m.constant=function(n){return function(){return n}},m.noop=function(){},m.property=function(n){return function(t){return null==t?void 0:t[n]}},m.propertyOf=function(n){return null==n?function(){}:function(t){return n[t]}},m.matcher=m.matches=function(n){return n=m.extendOwn({},n),function(t){return m.isMatch(t,n)}},m.times=function(n,t,r){var e=Array(Math.max(0,n));t=d(t,r,1);for(var u=0;n>u;u++)e[u]=t(u);return e},m.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},m.now=Date.now||function(){return(new Date).getTime()};var M={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},N=m.invert(M),I=function(n){var t=function(t){return n[t]},r="(?:"+m.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};m.escape=I(M),m.unescape=I(N),m.result=function(n,t,r){var e=null==n?void 0:n[t];return e===void 0&&(e=r),m.isFunction(e)?e.call(n):e};var B=0;m.uniqueId=function(n){var t=++B+"";return n?n+t:t},m.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var T=/(.)^/,R={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},q=/\\|'|\r|\n|\u2028|\u2029/g,K=function(n){return"\\"+R[n]};m.template=function(n,t,r){!t&&r&&(t=r),t=m.defaults({},t,m.templateSettings);var e=RegExp([(t.escape||T).source,(t.interpolate||T).source,(t.evaluate||T).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,o,a){return i+=n.slice(u,a).replace(q,K),u=a+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":o&&(i+="';\n"+o+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var o=new Function(t.variable||"obj","_",i)}catch(a){throw a.source=i,a}var c=function(n){return o.call(this,n,m)},l=t.variable||"obj";return c.source="function("+l+"){\n"+i+"}",c},m.chain=function(n){var t=m(n);return t._chain=!0,t};var z=function(n,t){return n._chain?m(t).chain():t};m.mixin=function(n){m.each(m.functions(n),function(t){var r=m[t]=n[t];m.prototype[t]=function(){var n=[this._wrapped];return c.apply(n,arguments),z(this,r.apply(m,n))}})},m.mixin(m),m.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=i[n];m.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],z(this,r)}}),m.each(["concat","join","slice"],function(n){var t=i[n];m.prototype[n]=function(){return z(this,t.apply(this._wrapped,arguments))}}),m.prototype.value=function(){return this._wrapped},m.prototype.valueOf=m.prototype.toJSON=m.prototype.value,m.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return m})}).call(this);
//# sourceMappingURL=underscore-min.map


// --------------- 2. IOS 8 Bug Fix --------------- //
$(window).load(function() {
    var deviceAgent = navigator.userAgent.toLowerCase();
    var agentID = deviceAgent.match(/(iphone|ipod|ipad)/);
    if (agentID) {
    setTimeout(function(){
        window.scrollTo(1, 1);
    }, 100);
}
}); 

/* --------------- 3. BigText Used on Home Page --------------- */
/*! BigText - v0.1.7a - 2014-07-18
 * https://github.com/zachleat/bigtext
 * Copyright (c) 2014 Zach Leatherman (@zachleat)
 * MIT License */

(function(g,e){var a=0,i=e("head"),h=g.BigText,f=e.fn.bigtext,d={DEBUG_MODE:false,DEFAULT_MIN_FONT_SIZE_PX:null,DEFAULT_MAX_FONT_SIZE_PX:528,GLOBAL_STYLE_ID:"bigtext-style",STYLE_ID:"bigtext-id",LINE_CLASS_PREFIX:"bigtext-line",EXEMPT_CLASS:"bigtext-exempt",noConflict:function(j){if(j){e.fn.bigtext=f;g.BigText=h}return d},test:{wholeNumberFontSizeOnly:function(){if(!("getComputedStyle" in g)||document.body==null){return true}var k=e("<div/>").css({position:"absolute","font-size":"14.1px"}).appendTo(document.body).get(0),j=g.getComputedStyle(k,null);if(j){return j.getPropertyValue("font-size")==="14px"}return true}},supports:{wholeNumberFontSizeOnly:undefined},init:function(){if(d.supports.wholeNumberFontSizeOnly===undefined){d.supports.wholeNumberFontSizeOnly=d.test.wholeNumberFontSizeOnly()}if(!e("#"+d.GLOBAL_STYLE_ID).length){i.append(d.generateStyleTag(d.GLOBAL_STYLE_ID,[".bigtext * { white-space: nowrap; } .bigtext > * { display: block; }",".bigtext ."+d.EXEMPT_CLASS+", .bigtext ."+d.EXEMPT_CLASS+" * { white-space: normal; }"]))}},bindResize:function(j,k){if(e.throttle){e(g).unbind(j).bind(j,e.throttle(100,k))}else{if(e.fn.smartresize){j="smartresize."+j}e(g).unbind(j).bind(j,k)}},getStyleId:function(j){return d.STYLE_ID+"-"+j},generateStyleTag:function(k,j){return e("<style>"+j.join("\n")+"</style>").attr("id",k)},clearCss:function(k){var j=d.getStyleId(k);e("#"+j).remove()},generateCss:function(r,q,p,o){var n=[];d.clearCss(r);for(var m=0,l=q.length;m<l;m++){n.push("#"+r+" ."+d.LINE_CLASS_PREFIX+m+" {"+(o[m]?" white-space: normal;":"")+(q[m]?" font-size: "+q[m]+"px;":"")+(p[m]?" word-spacing: "+p[m]+"px;":"")+"}")}return d.generateStyleTag(d.getStyleId(r),n)},jQueryMethod:function(j){d.init();j=e.extend({minfontsize:d.DEFAULT_MIN_FONT_SIZE_PX,maxfontsize:d.DEFAULT_MAX_FONT_SIZE_PX,childSelector:"",resize:true},j||{});this.each(function(){var o=e(this).addClass("bigtext"),m=o.width(),n=o.attr("id"),k=j.childSelector?o.find(j.childSelector):o.children();if(!n){n="bigtext-id"+(a++);o.attr("id",n)}if(j.resize){d.bindResize("resize.bigtext-event-"+n,function(){d.jQueryMethod.call(e("#"+n),j)})}d.clearCss(n);k.addClass(function(p,q){return[q.replace(new RegExp("\\b"+d.LINE_CLASS_PREFIX+"\\d+\\b"),""),d.LINE_CLASS_PREFIX+p].join(" ")});var l=b(o,k,m,j.maxfontsize,j.minfontsize);i.append(d.generateCss(n,l.fontSizes,l.wordSpacings,l.minFontSizes))});return this.trigger("bigtext:complete")}};function c(p,r,q,s,k,n,m){var j;m=typeof m==="number"?m:0;p.css(q,s+n);j=p.width();if(j>=r){p.css(q,"");if(j===r){return{match:"exact",size:parseFloat((parseFloat(s)-0.1).toFixed(3))}}var o=r-m,l=j-r;return{match:"estimate",size:parseFloat((parseFloat(s)-(q==="word-spacing"&&m&&(l<o)?0:k)).toFixed(3))}}return j}function b(m,q,r,s,p){var k=m.clone(true).addClass("bigtext-cloned").css({fontFamily:m.css("font-family"),textTransform:m.css("text-transform"),wordSpacing:m.css("word-spacing"),letterSpacing:m.css("letter-spacing"),position:"absolute",left:d.DEBUG_MODE?0:-9999,top:d.DEBUG_MODE?0:-9999}).appendTo(document.body);var l=[],j=[],o=[],n=[];q.css("float","left").each(function(){var C=e(this),x=d.supports.wholeNumberFontSizeOnly?[8,4,1]:[8,4,1,0.1],z,B;if(C.hasClass(d.EXEMPT_CLASS)){l.push(null);n.push(null);o.push(false);return}var D=32,A=parseFloat(C.css("font-size")),y=(C.width()/A).toFixed(6);B=parseInt(r/y,10)-D;outer:for(var u=0,t=x.length;u<t;u++){inner:for(var w=1,v=10;w<=v;w++){if(B+w*x[u]>s){B=s;break outer}z=c(C,r,"font-size",B+w*x[u],x[u],"px",z);if(typeof z!=="number"){B=z.size;if(z.match==="exact"){break outer}break inner}}}n.push(r/B);if(B>s){l.push(s);o.push(false)}else{if(!!p&&B<p){l.push(p);o.push(true)}else{l.push(B);o.push(false)}}}).each(function(u){var y=e(this),x=0,v=1,w;if(y.hasClass(d.EXEMPT_CLASS)){j.push(null);return}y.css("font-size",l[u]+"px");for(var t=1,z=3;t<z;t+=v){w=c(y,r,"word-spacing",t,v,"px",w);if(typeof w!=="number"){x=w.size;break}}y.css("font-size","");j.push(x)}).removeAttr("style");if(!d.DEBUG_MODE){k.remove()}else{k.css({"background-color":"rgba(255,255,255,.4)"})}return{fontSizes:l,wordSpacings:j,ratios:n,minFontSizes:o}}e.fn.bigtext=d.jQueryMethod;g.BigText=d})(this,jQuery);

/* --------------- 4. jQuery Cookie --------------- */
/*!jQuery Cookie Plugin v1.4.1 :  https://github.com/carhartl/jquery-cookie
 * Copyright 2006, 2014 Klaus Hartl : Released under the MIT license */
(function(a){if(typeof define==="function"&&define.amd){define(["jquery"],a)}else{if(typeof exports==="object"){a(require("jquery"))}else{a(jQuery)}}}(function(f){var a=/\+/g;function d(i){return b.raw?i:encodeURIComponent(i)}function g(i){return b.raw?i:decodeURIComponent(i)}function h(i){return d(b.json?JSON.stringify(i):String(i))}function c(i){if(i.indexOf('"')===0){i=i.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\")}try{i=decodeURIComponent(i.replace(a," "));return b.json?JSON.parse(i):i}catch(j){}}function e(j,i){var k=b.raw?j:c(j);return f.isFunction(i)?i(k):k}var b=f.cookie=function(q,p,v){if(arguments.length>1&&!f.isFunction(p)){v=f.extend({},b.defaults,v);if(typeof v.expires==="number"){var r=v.expires,u=v.expires=new Date();u.setTime(+u+r*86400000)}return(document.cookie=[d(q),"=",h(p),v.expires?"; expires="+v.expires.toUTCString():"",v.path?"; path="+v.path:"",v.domain?"; domain="+v.domain:"",v.secure?"; secure":""].join(""))}var w=q?undefined:{};var s=document.cookie?document.cookie.split("; "):[];for(var o=0,m=s.length;o<m;o++){var n=s[o].split("=");var j=g(n.shift());var k=n.join("=");if(q&&q===j){w=e(k,p);break}if(!q&&(k=e(k))!==undefined){w[j]=k}}return w};b.defaults={};f.removeCookie=function(j,i){if(f.cookie(j)===undefined){return false}f.cookie(j,"",f.extend({},i,{expires:-1}));return !f.cookie(j)}}));

/* --------------- 5. Hover Intent  ---------------*/
/*! hoverIntent v1.8.0 // 2014.06.29 // jQuery v1.9.1+
 * http://cherne.net/brian/resources/jquery.hoverIntent.html
 * You may use hoverIntent under the terms of the MIT license. Basically that
 * means you are free to use hoverIntent as long as this header is left intact.
 * Copyright 2007, 2014 Brian Cherne */
(function($){$.fn.hoverIntent=function(handlerIn,handlerOut,selector){var cfg={interval:100,sensitivity:6,timeout:3};if(typeof handlerIn==="object"){cfg=$.extend(cfg,handlerIn)}else{if($.isFunction(handlerOut)){cfg=$.extend(cfg,{over:handlerIn,out:handlerOut,selector:selector})}else{cfg=$.extend(cfg,{over:handlerIn,out:handlerIn,selector:handlerOut})}}var cX,cY,pX,pY;var track=function(ev){cX=ev.pageX;cY=ev.pageY};var compare=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);if(Math.sqrt((pX-cX)*(pX-cX)+(pY-cY)*(pY-cY))<cfg.sensitivity){$(ob).off("mousemove.hoverIntent",track);ob.hoverIntent_s=true;return cfg.over.apply(ob,[ev])}else{pX=cX;pY=cY;ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval)}};var delay=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);ob.hoverIntent_s=false;return cfg.out.apply(ob,[ev])};var handleHover=function(e){var ev=$.extend({},e);var ob=this;if(ob.hoverIntent_t){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t)}if(e.type==="mouseenter"){pX=ev.pageX;pY=ev.pageY;$(ob).on("mousemove.hoverIntent",track);if(!ob.hoverIntent_s){ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval)}}else{$(ob).off("mousemove.hoverIntent",track);if(ob.hoverIntent_s){ob.hoverIntent_t=setTimeout(function(){delay(ev,ob)},cfg.timeout)}}};return this.on({"mouseenter.hoverIntent":handleHover,"mouseleave.hoverIntent":handleHover},cfg.selector)}})(jQuery);

/* --------------- 6. Detects whether the device is a touch device for IOS, Android, and Windows Mobile --------------- */
/*! Detects touch support and adds appropriate classes to html and returns a JS object  |  Copyright (c) 2013 Izilla Partners Pty Ltd  | http://www.izilla.com.au / Licensed under the MIT license  |  https://coderwall.com/p/egbgdw */
var supports=(function(){var d=document.documentElement,c="ontouchstart" in window||navigator.msMaxTouchPoints;if(c){d.className+=" touch";return{touch:true}}else{d.className+=" no-touch";return{touch:false}}})();

/* --------------- 7. Responsive Equal Heights --------------- */
/* Javascript-Equal-Height-Responsive-Rows https://github.com/Sam152/Javascript-Equal-Height-Responsive-Rows */
(function($){$.fn.equalHeight=function(){var heights=[];$.each(this,function(i,element){$element=$(element);var element_height;var includePadding=($element.css('box-sizing')=='border-box')||($element.css('-moz-box-sizing')=='border-box');if(includePadding){element_height=$element.innerHeight();}else{element_height=$element.height();}
heights.push(element_height);});this.css('height',Math.max.apply(window,heights)+'px');return this;};$.fn.equalHeightGrid=function(columns){var $tiles=this;$tiles.css('height','auto');for(var i=0;i<$tiles.length;i++){if(i%columns===0){var row=$($tiles[i]);for(var n=1;n<columns;n++){row=row.add($tiles[i+n]);}
row.equalHeight();}}
return this;};$.fn.detectGridColumns=function(){var offset=0,cols=0;this.each(function(i,elem){var elem_offset=$(elem).offset().top;if(offset===0||elem_offset==offset){cols++;offset=elem_offset;}else{return false;}});return cols;};$.fn.responsiveEqualHeightGrid=function(){var _this=this;function syncHeights(){var cols=_this.detectGridColumns();_this.equalHeightGrid(cols);}
$(window).bind('resize load',syncHeights);syncHeights();return this;};})(jQuery);

/* --------------- 8. Responsive iframe --------------- */
/*! FitVids 1.1 : Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/ */
(function(a){a.fn.fitVids=function(b){var e={customSelector:null,ignore:null};if(!document.getElementById("fit-vids-style")){var d=document.head||document.getElementsByTagName("head")[0];var c=".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}";var f=document.createElement("div");f.innerHTML='<p>x</p><style id="fit-vids-style">'+c+"</style>";d.appendChild(f.childNodes[1])}if(b){a.extend(e,b)}return this.each(function(){var g=["iframe[src*='player.vimeo.com']","iframe[src*='youtube.com']","iframe[src*='youtube-nocookie.com']","iframe[src*='kickstarter.com'][src*='video.html']","object","embed"];if(e.customSelector){g.push(e.customSelector)}var h=".fitvidsignore";if(e.ignore){h=h+", "+e.ignore}var i=a(this).find(g.join(","));i=i.not("object object");i=i.not(h);i.each(function(){var n=a(this);if(n.parents(h).length>0){return}if(this.tagName.toLowerCase()==="embed"&&n.parent("object").length||n.parent(".fluid-width-video-wrapper").length){return}if((!n.css("height")&&!n.css("width"))&&(isNaN(n.attr("height"))||isNaN(n.attr("width")))){n.attr("height",9);n.attr("width",16)}var j=(this.tagName.toLowerCase()==="object"||(n.attr("height")&&!isNaN(parseInt(n.attr("height"),10))))?parseInt(n.attr("height"),10):n.height(),k=!isNaN(parseInt(n.attr("width"),10))?parseInt(n.attr("width"),10):n.width(),l=j/k;if(!n.attr("id")){var m="fitvid"+Math.floor(Math.random()*999999);n.attr("id",m)}n.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",(l*100)+"%");n.removeAttr("height").removeAttr("width")})})}})(window.jQuery||window.Zepto);

/* ------------------------- 9. Placeholder  -------------------------*/
/* Placeholders.js v3.0.2 */
(function(t){"use strict";function e(t,e,r){return t.addEventListener?t.addEventListener(e,r,!1):t.attachEvent?t.attachEvent("on"+e,r):void 0}function r(t,e){var r,n;for(r=0,n=t.length;n>r;r++)if(t[r]===e)return!0;return!1}function n(t,e){var r;t.createTextRange?(r=t.createTextRange(),r.move("character",e),r.select()):t.selectionStart&&(t.focus(),t.setSelectionRange(e,e))}function a(t,e){try{return t.type=e,!0}catch(r){return!1}}t.Placeholders={Utils:{addEventListener:e,inArray:r,moveCaret:n,changeType:a}}})(this),function(t){"use strict";function e(){}function r(){try{return document.activeElement}catch(t){}}function n(t,e){var r,n,a=!!e&&t.value!==e,u=t.value===t.getAttribute(V);return(a||u)&&"true"===t.getAttribute(D)?(t.removeAttribute(D),t.value=t.value.replace(t.getAttribute(V),""),t.className=t.className.replace(R,""),n=t.getAttribute(F),parseInt(n,10)>=0&&(t.setAttribute("maxLength",n),t.removeAttribute(F)),r=t.getAttribute(P),r&&(t.type=r),!0):!1}function a(t){var e,r,n=t.getAttribute(V);return""===t.value&&n?(t.setAttribute(D,"true"),t.value=n,t.className+=" "+I,r=t.getAttribute(F),r||(t.setAttribute(F,t.maxLength),t.removeAttribute("maxLength")),e=t.getAttribute(P),e?t.type="text":"password"===t.type&&M.changeType(t,"text")&&t.setAttribute(P,"password"),!0):!1}function u(t,e){var r,n,a,u,i,l,o;if(t&&t.getAttribute(V))e(t);else for(a=t?t.getElementsByTagName("input"):b,u=t?t.getElementsByTagName("textarea"):f,r=a?a.length:0,n=u?u.length:0,o=0,l=r+n;l>o;o++)i=r>o?a[o]:u[o-r],e(i)}function i(t){u(t,n)}function l(t){u(t,a)}function o(t){return function(){m&&t.value===t.getAttribute(V)&&"true"===t.getAttribute(D)?M.moveCaret(t,0):n(t)}}function c(t){return function(){a(t)}}function s(t){return function(e){return A=t.value,"true"===t.getAttribute(D)&&A===t.getAttribute(V)&&M.inArray(C,e.keyCode)?(e.preventDefault&&e.preventDefault(),!1):void 0}}function d(t){return function(){n(t,A),""===t.value&&(t.blur(),M.moveCaret(t,0))}}function g(t){return function(){t===r()&&t.value===t.getAttribute(V)&&"true"===t.getAttribute(D)&&M.moveCaret(t,0)}}function v(t){return function(){i(t)}}function p(t){t.form&&(T=t.form,"string"==typeof T&&(T=document.getElementById(T)),T.getAttribute(U)||(M.addEventListener(T,"submit",v(T)),T.setAttribute(U,"true"))),M.addEventListener(t,"focus",o(t)),M.addEventListener(t,"blur",c(t)),m&&(M.addEventListener(t,"keydown",s(t)),M.addEventListener(t,"keyup",d(t)),M.addEventListener(t,"click",g(t))),t.setAttribute(j,"true"),t.setAttribute(V,x),(m||t!==r())&&a(t)}var b,f,m,h,A,y,E,x,L,T,N,S,w,B=["text","search","url","tel","email","password","number","textarea"],C=[27,33,34,35,36,37,38,39,40,8,46],k="#ccc",I="placeholdersjs",R=RegExp("(?:^|\\s)"+I+"(?!\\S)"),V="data-placeholder-value",D="data-placeholder-active",P="data-placeholder-type",U="data-placeholder-submit",j="data-placeholder-bound",q="data-placeholder-focus",z="data-placeholder-live",F="data-placeholder-maxlength",G=document.createElement("input"),H=document.getElementsByTagName("head")[0],J=document.documentElement,K=t.Placeholders,M=K.Utils;if(K.nativeSupport=void 0!==G.placeholder,!K.nativeSupport){for(b=document.getElementsByTagName("input"),f=document.getElementsByTagName("textarea"),m="false"===J.getAttribute(q),h="false"!==J.getAttribute(z),y=document.createElement("style"),y.type="text/css",E=document.createTextNode("."+I+" { color:"+k+"; }"),y.styleSheet?y.styleSheet.cssText=E.nodeValue:y.appendChild(E),H.insertBefore(y,H.firstChild),w=0,S=b.length+f.length;S>w;w++)N=b.length>w?b[w]:f[w-b.length],x=N.attributes.placeholder,x&&(x=x.nodeValue,x&&M.inArray(B,N.type)&&p(N));L=setInterval(function(){for(w=0,S=b.length+f.length;S>w;w++)N=b.length>w?b[w]:f[w-b.length],x=N.attributes.placeholder,x?(x=x.nodeValue,x&&M.inArray(B,N.type)&&(N.getAttribute(j)||p(N),(x!==N.getAttribute(V)||"password"===N.type&&!N.getAttribute(P))&&("password"===N.type&&!N.getAttribute(P)&&M.changeType(N,"text")&&N.setAttribute(P,"password"),N.value===N.getAttribute(V)&&(N.value=x),N.setAttribute(V,x)))):N.getAttribute(D)&&(n(N),N.removeAttribute(V));h||clearInterval(L)},100)}M.addEventListener(t,"beforeunload",function(){K.disable()}),K.disable=K.nativeSupport?e:i,K.enable=K.nativeSupport?e:l}(this);      

/*! ------------------------- 10. Menu Script -------------------------*/
/*!* DC jQuery Vertical Accordion Menu - jQuery vertical accordion menu plugin
/*! Copyright (c) 2011 Design Chemical * Dual licensed under the MIT and GPL licenses: * http://www.opensource.org/licenses/mit-license.php * http://www.gnu.org/licenses/gpl.html */
(function(b){b.fn.dcAccordion=function(h){var f={classParent:"parent",classActive:"current",classArrow:"dcjq-icon",classCount:"dcjq-count",classExpand:"current-parent",eventType:"click",hoverDelay:300,menuClose:true,autoClose:true,autoExpand:false,speed:"slow",saveState:true,disableLink:true,showCount:false,cookie:"dcjq-accordion"};var h=b.extend(f,h);this.each(function(c){var v=this;r();if(f.saveState==true){g(f.cookie,v)}if(f.autoExpand==true){b("li."+f.classExpand+" > a").addClass(f.classActive)}t();if(f.eventType=="hover"){var w={sensitivity:2,interval:f.hoverDelay,over:d,timeout:f.hoverDelay,out:e};b("li a",v).hoverIntent(w);var x={sensitivity:2,interval:1000,over:q,timeout:1000,out:u};b(v).hoverIntent(x);if(f.disableLink==true){b("li a",v).click(function(i){if(b(this).siblings("ul").length>0){i.preventDefault()}})}}else{b("li a",v).click(function(i){$activeLi=b(this).parent("li");$parentsLi=$activeLi.parents("li");$parentsUl=$activeLi.parents("ul");if(f.disableLink==true){if(b(this).siblings("ul").length>0){i.preventDefault()}}if(f.autoClose==true){s($parentsLi,$parentsUl)}if(b("> ul",$activeLi).is(":visible")){b("ul",$activeLi).slideUp(f.speed);b("a",$activeLi).removeClass(f.classActive)}else{b(this).siblings("ul").slideToggle(f.speed);b("> a",$activeLi).addClass(f.classActive)}if(f.saveState==true){a(f.cookie,v)}})}function r(){$arrow='<span class="'+f.classArrow+'"></span>';var i=f.classParent+"-li";b("> ul",v).show();b("li",v).each(function(){if(b("> ul",this).length>0){b(this).addClass(i);b("> a",this).addClass(f.classParent).append($arrow)}});b("> ul",v).hide();if(f.showCount==true){b("li."+i,v).each(function(){if(f.disableLink==true){var j=parseInt(b("ul a:not(."+f.classParent+")",this).length)}else{var j=parseInt(b("ul a",this).length)}b("> a",this).append(' <span class="'+f.classCount+'">('+j+")</span>")})}}function d(){$activeLi=b(this).parent("li");$parentsLi=$activeLi.parents("li");$parentsUl=$activeLi.parents("ul");if(f.autoClose==true){s($parentsLi,$parentsUl)}if(b("> ul",$activeLi).is(":visible")){b("ul",$activeLi).slideUp(f.speed);b("a",$activeLi).removeClass(f.classActive)}else{b(this).siblings("ul").slideToggle(f.speed);b("> a",$activeLi).addClass(f.classActive)}if(f.saveState==true){a(f.cookie,v)}}function e(){}function q(){}function u(){if(f.menuClose==true){b("ul",v).slideUp(f.speed);b("a",v).removeClass(f.classActive);a(f.cookie,v)}}function s(j,i){b("ul",v).not(i).slideUp(f.speed);b("a",v).removeClass(f.classActive);b("> a",j).addClass(f.classActive)}function t(){b("ul",v).hide();$allActiveLi=b("a."+f.classActive,v);$allActiveLi.siblings("ul").show()}});function g(e,c){var j=b.cookie(e);if(j!=null){var d=j.split(",");b.each(d,function(o,i){var p=b("li:eq("+i+")",c);b("> a",p).addClass(f.classActive);var n=p.parents("li");b("> a",n).addClass(f.classActive)})}}function a(d,c){var e=[];b("li a."+f.classActive,c).each(function(n){var i=b(this).parent("li");var m=b("li",c).index(i);e.push(m)});b.cookie(d,e,{path:"/"})}}})(jQuery);

/*! ------------ 11. Initialize Menu ------------------------- */
$(function() {
    $("#nav > ul").dcAccordion({
        saveState: false,
        autoClose: true,
        disableLink: true,
        speed: "fast",
        showCount: false,
        autoExpand: false
    });
});

$(window).load(function() {
    // ------------------ 12. SoundCloud Non-blocking Load -------------------- //
    $(".soundcloud-wrapper").each(function() {
        var URL = $(this).attr('id');
        var htm = '<iframe width="100%" height="200px" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/' + URL + '&amp;auto_play=false&amp;hide_related=false&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false&amp;visual=true" frameborder="0"></iframe>';
        $(this).html(htm).fitVids().removeClass('.loading');
    });

    // ------------------ 13. BigText (window load gets correct size on load, doc ready does not) --------------------
    $('.big-text-banner').bigtext({
        minfontsize: 20 // default is null
    }).css('visibility', 'visible');
});


$(function() {

    /* --------------- 14. Shift Correct : prevent shifting of the page due to the scrollbar when a slide is active --------------- */
    if ($(document).height() > $(window).height()) {
       $('body').addClass('body-scroll-fix');      
    }


    /* --------------- 15. Data Slide --------------- */
    $('[data-slide="slide"]').click(function(e) {
    
        //DEMO ONLY
        if ($('html').is('.open-switcher')) {
           $("html").removeClass("open-switcher");
           $(".theme-switcher-toggle i").addClass("fa-spin");
           $(".theme-switcher-toggle").removeClass('active-slide-btn');
        }    
        
        var $this = $(this);
        var target = $this.attr('data-target');
        var $target = $(target);
        if ($('.slide-panel-parent').children().is('.open')) {
            $('.open').not(target).removeClass('open');
            $('.active-slide-btn').not(this).removeClass('active-slide-btn');
            $(this).toggleClass('active-slide-btn');
            $(target).toggleClass('open');
            $('html').removeClass('slide-active');
        } else {
            $(target).toggleClass('open');
            $(this).toggleClass('active-slide-btn');
            $('#page').toggleClass('page-off');
        }

        if ($('.slide-panel-parent').children().is('.open')) {
            $('html').addClass('slide-active'); //was addClass

        } else {
            $('html').removeClass('slide-active');

        }

        e.preventDefault();
    });

    $('.slide-panel .close').click(function(e) {
        $('.active-slide-btn').removeClass('active-slide-btn');
        $(this).parent().removeClass('open');
        $('html').removeClass('slide-active');
        $('#page').removeClass('page-off');
        e.preventDefault();
    });
 

    // indicate what panel you're on when you've clicked inside a panel to another panel
    $('.slide-panel .signin-toggle').click(function(e) {
         $('.header-btn.signin-toggle').toggleClass('active-slide-btn');
        e.preventDefault();
    });
    
    $('.slide-panel .login-toggle').click(function(e) {
         $('.header-btn.login-toggle').toggleClass('active-slide-btn');
        e.preventDefault();
    });
    

});


// ------------------ 16. Don't Cover Anchor Targets --------------------

$(function() {

    var navbarHeight = $(".header").height() + 10;

    // SLIDE TO ANCHOR and DON'T COVER ANCHORS WITH .has-anchor on the trigger :: http://stackoverflow.com/a/20320919/1004312
    $('.has-anchor').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - navbarHeight //offset
                }, 1500);
            }
        }
    });
    // Executed on page load with URL containing an anchor tag.
    if ($(location.href.split("#")[1])) {
        var target = $('#' + location.href.split("#")[1]);
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top - navbarHeight //offset height of header here if the header is fixed and it is not!
            }, 1500);
            return false;
        }
    }
});


// --------------- 17. STICKY HEADER --------------- 
function stickyHeader() {

    var $windowHeight = $(window).height(),
        $buttonWrapper = $('.header-btn-wrapper').outerHeight(),
        $headerHeight = $('.header').outerHeight(),
        $goToTopHeight = $('#go-to-top').height();

    if ($windowHeight >= $buttonWrapper + $headerHeight) {
        $('.header').addClass('sticky-header');
    } else {
        $('.header').removeClass('sticky-header');
    }

    if ($windowHeight >= $buttonWrapper + $headerHeight + $goToTopHeight) {
        $('#go-to-top').addClass('position-1');
    } else {
        $('#go-to-top').removeClass('position-1');
    }
}

$(document).ready(stickyHeader);
$(window).resize(_.debounce(stickyHeader, 500));


// --------------- 18. Match Height of the Slider next to this column --------------- 
function FeaturedColumn() {
    var $containerWidth = $('.container').width(),
        $colHeight = $('.featured-carousel img').innerHeight();
    if ($containerWidth >= 767) {
        $('.column-inner > .column-bg-fake').height($colHeight);
    } 
}
$(window).load(FeaturedColumn);
$(window).resize(_.debounce(FeaturedColumn,500));


/* --------------- 19. Misc. Initializations and Custom Scripts --------------- */
$(function() {

    /* --------------- 19. - 1 :: Equal Height Initialize --------------- */
    $('.equal-height-content-box .equal-height-content').responsiveEqualHeightGrid();
    $('.equal-height-col [class*="col-"]').responsiveEqualHeightGrid();

    /* --------------- 19. - 2 :: .title inner wrapper --------------- */
    $('.title').wrapInner("<span></span>");

    /* --------------- 19. - 3 :: Inner Wrappers for .info-text-box and .widget-title --------------- */
    $('.info-text-box').wrapInner("<span></span>");
    $('.widget-title').wrapInner("<span></span>");

    /* --------------- 19. - 4 :: icon-click functions :: you can remove this on live sites ---------------*/
    $('.icon-demo span.glyphicon, .icon-demo span.ti').each(function() {
        var className = $(this).attr('class');
        $(this).attr('title', className).css({
            'cursor': 'pointer'
        });
        $(this).tooltip({
            trigger: 'click',
            container: 'body'
        }).toggleClass('active');
        $(this).after("<p>" + className + "</p>");
    });
    $('body').on('mouseup', function(e) {
        $('.icon-demo span.glyphicon, .icon-demo span.ti').each(function() {
            if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.tooltip').has(e.target).length === 0) {
                $(this).tooltip('hide');
            }
        });
    });

    /* --------------- 19. - 5 :: Scroll to Top ---------------*/
    $('#go-to-top').hide();
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('#go-to-top').fadeIn();
        } else {
            $('#go-to-top').fadeOut();
        }
    });
    $('#go-to-top').click(function(e) {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
    });


    /* --------------- 19. - 6 :: Video Non-Blocking Load ---------------*/
    $('.video-holder.youtube .video-trigger').click(function(e) {
        e.preventDefault();
        var URL = $(this).attr('href');
        var htm = '<iframe width="560" height="315" src="http://www.youtube.com/embed/' + URL + '?rel=0?wmode=transparent" frameborder="0"></iframe>';
        $(this).parent().html(htm);
        $('.video-holder').fitVids();
        return false;
    });
    $('.video-holder.vimeo .video-trigger').click(function(e) {
        e.preventDefault();
        var URL = $(this).attr('href');
        var htm = '<iframe width="500" height="281" src="http://player.vimeo.com/video/' + URL + '?title=0&amp;byline=0&amp;portrait=0?wmode=transparent" frameborder="0"></iframe>';
        $(this).parent().html(htm);
        $('.video-holder').fitVids();
        return false;
    });

    //STOP VIDEO inside slider on click inside the slider 
    $('.content-slider, .blog-slider, .featured-slider').click(function() {
        var element = $(this).find('.video-holder iframe');
        if (element.is(':visible')) {
            $.fn.videoStopFunction();
        }
    });

    $('.content-slider, .blog-slider, .featured-slider').on('touchstart', function() {
        var element = $(this).find('.video-holder iframe');
        if (element.is(':visible')) {
            $.fn.videoStopFunction();
        }
    });

    $.fn.videoStopFunction = function() {
        var video = $(".video-holder iframe").attr("src");
        $(".video-holder iframe").attr("src", "");
        $(".video-holder iframe").attr("src", video);
    }


    /* --------------- 19. - 7 :: pricing plan ---------------*/
    $('.the-details').hide();
    $('.has-details').click(function() {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).children('.the-details').slideUp();
        } else {
            $('.has-details').removeClass('active');
            $(this).addClass('active');
            $('.the-details').slideUp();
            $(this).children('.the-details').slideDown();
        }
        return false;
    });
    $(document).bind("mouseup touchend", function(a) {
        if ($(a.target).parents().index($(".price-row")) == -1) {
            $('.has-details').removeClass('active');
            $('.the-details').slideUp();
        }
    });

    /* --------------- 19. - 8 :: click slide (mouseover on no-touch) ---------------*/
    var delay = (function() {
        var timer = 0;
        return function(callback, ms) {
            clearTimeout(timer);
            timer = setTimeout(callback, ms);
        };
    })();
    $('.click-slide').show();
    if ($('html').hasClass('touch')) {
        $('.click-slide').click(function() {
            if ($(this).hasClass('open')) {
                $(this).removeClass('open');
            } else {
                $('.click-slide').removeClass('open');
                $(this).addClass('open');
            }
        });
    } else {
        $('.click-slide').hover(function() { // Hover Intent is being used here
            if ($(this).hasClass('open')) {
                $(this).removeClass('open');
            } else {
                $('.click-slide').removeClass('open');
                $(this).addClass('open');
            }
        });
    }

    $(document).bind("mouseup touchend", function(e) {
        if ($(e.target).parents(".click-slide").length === 0) {
            $('.click-slide').removeClass('open');
        }
    });

}); // end doc ready


/* --------------- 20. - AddThis and SidePage Follow ---------------*/
if ($(".addthis_inner").length > 0) {
    function stickyAddThis() {

        var $entry = $(".entry-post"),
            $addthis = $(".addthis_inner"),
            $window = $(window),
            $document = $(document),
            $position = $('.primary-column').position().left + 15,
            $headerHeight = $('.header').outerHeight() + 30,
            $colwidth = $('.addthis_inner').outerWidth(true),
            $fixedBottom = $document.height() - ($entry.offset().top + $entry.height()),
            $topOffset = $entry.offset().top,
            $stopPoint = $document.height() - ($fixedBottom + $addthis.height() + 40);


        $('.addthis_inner').css('width', ($colwidth) + 'px');
        $('.addthis_inner').css('top', ($headerHeight) + 'px');
        $addthis.css('left', ($position) + 'px');

        if ($entry.height() > $addthis.height() + 0) {
            if ($window.scrollTop() > $topOffset) {
                $addthis.addClass("sticky-addthis");
                if ($window.scrollTop() > $stopPoint) {
                    $addthis.css("top", ($stopPoint - $window.scrollTop() + 40));
                }
            } else {
                $addthis.removeClass("sticky-addthis");
                $addthis.removeAttr('style');
            }
        }
    }

}
if ($(".blog-single-sidebar").length > 0) {

    function stickySidebar() {

        var $content = $(".primary-column"),
            $sidebar = $(".blog-single-sidebar"),
            $window = $(window),
            $document = $(document),
            $position = $('#sidebar').position().left + 15,
            $headerHeight = $('.header').outerHeight(),
            $colwidth = $("#sidebar").width(),
            $fixedBottom = $document.height() - ($content.offset().top + $content.height()),
            $topOffset = $content.offset().top,
            $stopPoint = $document.height() - ($fixedBottom + $sidebar.height() + 40);

        $sidebar.css('width', ($colwidth) + 'px');
        $sidebar.css('top', ($headerHeight) + 'px');
        $sidebar.css('left', ($position) + 'px');

        if ($content.height() > $sidebar.height() + 0) {
            if ($window.scrollTop() > $topOffset) {
                $sidebar.addClass("sticky-sidebar");
                if ($window.scrollTop() > $stopPoint) {
                    $sidebar.css("top", ($stopPoint - $window.scrollTop() + 40));
                }
            } else {
                $sidebar.removeClass("sticky-sidebar");
                $sidebar.removeAttr('style');
            }
        }
    }
    stickySidebar();
    stickyAddThis();
    $(window).scroll(_.throttle(stickyAddThis, 200));
    $(window).scroll(_.throttle(stickySidebar, 200));
    $(window).resize(_.debounce(stickyAddThis, 500));
    $(window).resize(_.debounce(stickySidebar, 500));
}

/* --------------- 21. - Summary Side Page Follow for blog ---------------*/
if ($(".blog-summary-sidebar").length > 0) {
    function stickySidebarSummary() {
        var $content = $(".primary-column"),
            $sidebar = $(".blog-summary-sidebar"),
            $window = $(window),
            $document = $(document),
            $position = $('#sidebar').position().left + 15,
            $headerHeight = $('.header').outerHeight(),
            $colwidth = $sidebar.outerWidth(true),
            $fixedBottom = $document.height() - ($content.offset().top + $content.height()),
            $topOffset = $content.offset().top,
            $stopPoint = $document.height() - ($fixedBottom + $sidebar.height() + 40);

        $sidebar.css('width', ($colwidth) + 'px');
        $sidebar.css('top', ($headerHeight) + 'px');
        $sidebar.css('left', ($position) + 'px');

        if ($content.height() > $sidebar.height() + 0) {
            if ($window.scrollTop() > $topOffset) {
                $sidebar.addClass("sticky-sidebar");
                if ($window.scrollTop() > $stopPoint) {
                    $sidebar.css("top", ($stopPoint - $window.scrollTop() + 40));
                }
            } else {
                $sidebar.removeClass("sticky-sidebar");
                $sidebar.removeAttr('style');
            }
        }
    }
    stickySidebarSummary();
    $(window).scroll(_.throttle(stickySidebarSummary, 200));
    $(window).resize(_.debounce(stickySidebarSummary, 500));
}


// --------------- 22. Sticky Sidebar for Scrollspy Content (is not part of Scrollspy) --------------- //
if ($(".spying-sidebar").length > 0) {

    function stickyScrollSpySideBar() {

        var $content = $(".primary-column"),
            $sidebar = $(".spying-sidebar"),
            $window = $(window),
            $document = $(document),
            $position = $('#sidebar').position().left + 15,
            $headerHeight = $('.header').outerHeight(),
            $colwidth = $sidebar.outerWidth(true),
            $fixedBottom = $document.height() - ($content.offset().top + $content.height()),
            $topOffset = $content.offset().top,
            $stopPoint = $document.height() - ($fixedBottom + $sidebar.height() + 40);

        $sidebar.css('width', ($colwidth) + 'px');
        $sidebar.css('top', ($headerHeight) + 'px');
        $sidebar.css('left', ($position) + 'px');

        if ($content.height() > $sidebar.height() + 0) {
            if ($window.scrollTop() > $topOffset) {
                $sidebar.addClass("sticky-spy-bar");
                if ($window.scrollTop() > $stopPoint) {
                    $sidebar.css("top", ($stopPoint - $window.scrollTop() + 40));
                }
            } else {
                $sidebar.removeClass("sticky-spy-bar");
                $sidebar.removeAttr('style');
            }
        }
    }
    stickyScrollSpySideBar();
    $(window).scroll(_.throttle(stickyScrollSpySideBar, 200));
    $(window).resize(_.debounce(stickyScrollSpySideBar, 500));
}

// -------------- 23. Bottom Footer ------------------
function fullHeight() {

if ( $(window).height() >= $(document).height() ){

    var $page = $('#page'),
        $window = $('html').height(),
        $footer = $('.footer').height(),
        $header = $('.header').height() + 3; // 3 is the height of the border
        
    $page.css("min-height", $window - $header - $footer + 'px');
}


}
$(document).ready(fullHeight);
$(window).resize(_.debounce(fullHeight, 500));









