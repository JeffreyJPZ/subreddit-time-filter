(()=>{const e="siteTable",t="main-content",a="oldRedditMain",r="newRedditMain",s="newRedditSubreddit";chrome.runtime.onMessage.addListener(((e,t,a)=>{const r=JSON.parse(e);if("filter"===r.key){f(r.data);try{d()}catch(e){console.log(e)}a("")}return!0}));const d=()=>{const e=i(),t=n(e),a=JSON.parse(window.localStorage.getItem("subredditFilterOptions"))||null;c(t,a)&&l(t,a,e)},i=()=>{if(null===document.getElementById(t))return a;switch(document.getElementsByTagName("shreddit-app")[0].getAttribute("pagetype")){case"home":case"popular":case"all":return r;case"community":return s}},n=a=>{switch(a){case"oldReddit":return document.getElementById(e);case"newRedditMain":return document.getElementById(t).getElementsByTagName("shreddit-feed")[0];case"newRedditSubreddit":return document.getElementById(t).children[2];default:return null}},c=(e,t)=>null!==t&&null!==e,l=(e,t,r)=>{for(let d of e.children)o(d,r)&&!h(d,r)&&u(d,t,r)?b(d,r):r===s&&"FACEPLATE-BATCH"===d.tagName||r===a&&"sitetable linklisting"===d.getAttribute("class")?l(d,t,r):o(d,r)&&!u(d,t,r)&&y(d,r)},o=(e,t)=>{switch(t){case a:return 0!==e.getAttribute("data-subreddit");case s:case r:return"ARTICLE"===e.tagName;default:return!1}},u=(e,t,d)=>{let i,n;switch(d){case a:i=g(e,d),n=parseFloat(m(e,d));break;case r:case s:i=g(e,d),n=m(e,d);break;default:i=null,n=null}const c=t[i];if(!(i in t))return!1;const l=c.filterCategory,o=new Date(c.filterDateTime+"Z"),u=new Date(n);return"before"===l&&u<=o||"after"===l&&u>=o},g=(e,t)=>t===a?e.getAttribute("data-subreddit"):e.getElementsByTagName("shreddit-post")[0].getAttribute("subreddit-prefixed-name").substring(2),m=(e,t)=>t===a?e.getAttribute("data-timestamp"):e.getElementsByTagName("shreddit-post")[0].getAttribute("created-timestamp"),b=(e,t)=>{switch(t){case a:case s:case r:e.style.opacity=0;break;default:return}},y=(e,t)=>{switch(t){case a:case s:case r:e.style.opacity=1;break;default:return}},h=(e,t)=>{switch(t){case a:case s:case r:return 0===e.style.opacity;default:return!1}},f=e=>{window.localStorage.setItem("subredditFilterOptions",JSON.stringify(e))},p=t=>{switch(i()){case"oldReddit":if(t.parentNode.id===e&&"DIV"===t.tagName)try{d()}catch(e){console.log(e)}break;case"newRedditMain":if("SHREDDIT-FEED"===t.parentNode.tagName&&"FACEPLATE-BATCH"===t.tagName)try{d()}catch(e){console.log(e)}break;case"newRedditSubreddit":if("DIV"===t.parentNode.tagName&&"FACEPLATE-BATCH"===t.tagName)try{d()}catch(e){console.log(e)}}};try{chrome.runtime.sendMessage(JSON.stringify({key:"requestFilters"})).then(),(()=>{let t;switch(i()){case"oldReddit":t=document.getElementById(e);break;case"newRedditMain":case"newRedditSubreddit":t=document.getElementsByTagName("shreddit-app")[0];break;default:t=null}new MutationObserver(((e,t)=>{for(const t of e)switch(t.type){case"attributes":"pagetype"===t.attributeName&&chrome.runtime.sendMessage(JSON.stringify({key:"requestFilters"})).then();break;case"childList":case"subtree":for(let e=0;e<t.addedNodes.length;e++)p(t.addedNodes[e])}})).observe(t,{attributes:!0,childList:!0,subtree:!0})})()}catch(e){console.log(e)}})();