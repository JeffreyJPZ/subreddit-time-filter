(()=>{const e="siteTable",t="main-content",a="oldRedditMain",r="newRedditMain",s="newRedditSubreddit",c="newRedditSearch",n="newRedditComments";chrome.runtime.onMessage.addListener(((e,t,a)=>{const r=JSON.parse(e);if("filter"===r.key){N(r.data);try{i()}catch(e){console.log(e)}a("")}return!0}));const i=()=>{const e=d(),t=u(e),a=JSON.parse(window.localStorage.getItem("subredditFilterOptions"))||null;l(t,a)&&o(t,a,e)},d=()=>{if(null===document.getElementById(t))return a;switch(document.getElementsByTagName("shreddit-app")[0].getAttribute("pagetype")){case"home":case"popular":case"all":return r;case"community":return s;case"post_detail":return n;case"search_results":return c}},u=i=>{switch(i){case a:return document.getElementById(e);case r:return document.getElementById(t).getElementsByTagName("shreddit-feed")[0];case s:return document.getElementById(t).children[2];case n:return document.getElementById("comment-tree");case c:return document.getElementsByTagName("reddit-feed")[0];default:return null}},l=(e,t)=>null!==t&&null!==e,o=(e,t,r)=>{for(let c of e.children)g(c,r)&&!p(c,r)&&m(c,t,r)?y(c,r):r===s&&"FACEPLATE-BATCH"===c.tagName||r===a&&"sitetable linklisting"===c.getAttribute("class")?o(c,t,r):g(c,r)&&!m(c,t,r)&&f(c,r)},g=(e,t)=>{switch(t){case a:return 0!==e.getAttribute("data-subreddit");case s:case r:return"ARTICLE"===e.tagName;case n:return"SHREDDIT-COMMENT"===e.tagName;case c:return"FACEPLATE-TRACKER"===e.tagName;default:return!1}},m=(e,t,i)=>{let d,u;switch(i){case a:d=b(e,i),u=parseFloat(h(e,i));break;case r:case s:case n:case c:d=b(e,i),u=h(e,i);break;default:d=null,u=null}const l=t[d];if(!(d in t))return!1;const o=l.filterCategory,g=new Date(l.filterDateTime+"Z"),m=new Date(u);return"before"===o&&m<=g||"after"===o&&m>=g},b=(e,t)=>{switch(t){case a:return e.getAttribute("data-subreddit");case r:case s:return e.getElementsByTagName("shreddit-post")[0].getAttribute("subreddit-prefixed-name").substring(2);case n:return document.getElementsByTagName("shreddit-post")[0].getAttribute("subreddit-prefixed-name").substring(2);case c:return JSON.parse(e.getAttribute("data-faceplate-tracking-context")).subreddit.name;default:return""}},h=(e,t)=>{switch(t){case a:return e.getAttribute("data-timestamp");case r:case s:return e.getElementsByTagName("shreddit-post")[0].getAttribute("created-timestamp");case n:case c:return e.getElementsByTagName("faceplate-timeago")[0].getAttribute("ts");default:return 0}},y=(e,t)=>{switch(t){case a:case s:case r:case n:case c:e.style.opacity=0;break;default:return}},f=(e,t)=>{switch(t){case a:case s:case r:case n:case c:e.style.opacity=1;break;default:return}},p=(e,t)=>{switch(t){case a:case s:case r:case n:case c:return 0===e.style.opacity;default:return!1}},N=e=>{window.localStorage.setItem("subredditFilterOptions",JSON.stringify(e))},E=t=>{switch(d()){case a:if(t.parentNode.id===e&&"DIV"===t.tagName)try{i()}catch(e){console.log(e)}break;case r:if("SHREDDIT-FEED"===t.parentNode.tagName&&"FACEPLATE-BATCH"===t.tagName)try{i()}catch(e){console.log(e)}break;case s:if("DIV"===t.parentNode.tagName&&"FACEPLATE-BATCH"===t.tagName)try{i()}catch(e){console.log(e)}break;case n:if(t.parentNode.id===n)try{i()}catch(e){console.log(e)}break;case c:if("REDDIT-FEED"===t.parentNode.tagName)try{i()}catch(e){console.log(e)}}};try{chrome.runtime.sendMessage(JSON.stringify({key:"requestFilters"})).then(),(()=>{let e;switch(d()){case a:e=document;break;case r:case s:case n:case c:e=document.getElementsByTagName("shreddit-app")[0];break;default:e=null}new MutationObserver(((e,t)=>{for(const t of e)switch(t.type){case"attributes":"pagetype"===t.attributeName&&chrome.runtime.sendMessage(JSON.stringify({key:"requestFilters"})).then();break;case"childList":case"subtree":for(let e=0;e<t.addedNodes.length;e++)try{E(t.addedNodes[e])}catch(e){console.log(e)}}})).observe(e,{attributes:!0,childList:!0,subtree:!0})})()}catch(e){console.log(e)}})();