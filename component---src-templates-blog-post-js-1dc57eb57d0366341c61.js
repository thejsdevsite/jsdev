(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{M7K5:function(e,t,a){"use strict";var r=a("q1tI"),l=a.n(r);t.a=function(e){var t=e.name,a=e.src,r=e.className,n=void 0===r?"":r,s=n?"jsd-avatar "+n:"jsd-avatar";return a?l.a.createElement("span",{className:s},l.a.createElement("img",{className:"jsd-avatar-image jsd-article-cover-image",src:a,alt:t,title:t,loading:"lazy"})):l.a.createElement("span",{className:s},l.a.createElement("span",{className:"jsd-avatar-image",alt:t,title:t}))}},NlEj:function(e,t,a){"use strict";var r=a("Wbzz"),l=a("q1tI"),n=a.n(l),s=a("M7K5"),c=function(e){var t,a,r,l,s,c,i,m,o=e.author,d=[];(null===(t=o.employment)||void 0===t?void 0:t.position)&&(null===(a=o.employment)||void 0===a?void 0:a.company)&&d.push({id:"work",title:"Work",value:n.a.createElement(n.a.Fragment,null,null===(r=o.employment)||void 0===r?void 0:r.position,n.a.createElement("span",null,"at"),(null===(l=o.employment)||void 0===l?void 0:l.url)?n.a.createElement("a",{className:"jsd-link",href:null===(s=o.employment)||void 0===s?void 0:s.url,target:"_blank",title:null===(c=o.employment)||void 0===c?void 0:c.company,rel:"noreferrer"},null===(i=o.employment)||void 0===i?void 0:i.company):null===(m=o.employment)||void 0===m?void 0:m.company)});return o.location&&d.push({id:"location",title:"Location",value:o.location}),n.a.createElement("div",{className:"jsd-author-details"},n.a.createElement("ul",{className:"jsd-author-details-inner"},d.map((function(e){return n.a.createElement("li",{key:e.id},n.a.createElement("div",{className:"key"},e.title),n.a.createElement("div",{className:"value"},e.value))}))))};t.a=function(e){var t=e.author;return n.a.createElement("section",{className:"jsd-card jsd-card-secondary branded p-4 pt-0 hidden l:grid gap-4"},n.a.createElement("div",{className:"-mt-4"},n.a.createElement(r.Link,{to:t.slug,className:"flex jsd-link",title:t.name,"aria-label":t.name},n.a.createElement(s.a,{name:t.name,src:t.profilePicture.src,className:"jsd-avatar-xl mr-2 shrink-0"}),n.a.createElement("span",{className:"fs-m fw-med mt-5"},t.name))),n.a.createElement("div",{className:"jsd-author-bio"},t.bio),n.a.createElement(c,{author:t}))}},gVSO:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var r=function(e){var t=[];return Object(e)===e&&Object.keys(e).forEach((function(a){e[a]&&t.push(a)})),t.join(" ")}},lBDk:function(e,t,a){"use strict";var r=a("q1tI"),l=a.n(r),n=a("nPH8"),s=a("NlEj");t.a=function(e){var t=e.post,a=Object(n.a)(t.frontmatter.authors).all().map((function(e){return l.a.createElement(s.a,{key:"sidebar-author-"+e.id,author:e})}));return l.a.createElement("aside",{className:"side-bar sidebar-additional grid gap-4","aria-label":"Secondary sidebar"},a)}},yZlL:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return S}));var r=a("q1tI"),l=a.n(r),n=a("vrFN"),s=a("8Svw"),c=a("lBDk"),i=a("+etW"),m=function(e){var t=e.post,a=e.children;return l.a.createElement("div",{className:"site-container"},l.a.createElement("header",null,l.a.createElement(s.a,null)),l.a.createElement("div",{id:"page-content",className:"universal-page-content-wrapper"},l.a.createElement("div",{id:"page-content-inner"},l.a.createElement("div",{className:"jsd-layout jsd-layout-2-cols jsd-layout-article",id:"article-container"},a,l.a.createElement("div",{id:"sidebar-wrapper-right",className:"sidebar-wrapper sidebar-wrapper-right jsd-layout-sidebar-right"},l.a.createElement(c.a,{post:t}))))),l.a.createElement(i.a,null))},o=a("Wbzz"),d=a("gVSO"),u=function(e){var t=e.nextPost,a=e.prevPost;return l.a.createElement("nav",{className:Object(d.a)({"jsd-layout-postroll-rooter":!0,"item-prev":!!a,"item-next":!!t})},l.a.createElement("ul",null,a&&l.a.createElement("li",{className:"jsd-postroll-footer-link jsd-postroll-previous jsd-card"},l.a.createElement(o.Link,{className:"jsd-link",to:a.fields.slug,rel:"prev"},l.a.createElement("span",{className:"mr-2"},"←"),l.a.createElement("span",{className:"jsd-postroll-footer-details"},l.a.createElement("span",null,a.frontmatter.title),l.a.createElement("span",null,a.frontmatter.publishedDate)))),t&&l.a.createElement("li",{className:"jsd-postroll-footer-link jsd-postroll-next jsd-card"},l.a.createElement(o.Link,{className:"jsd-link",to:t.fields.slug,rel:"next"},l.a.createElement("span",{className:"mr-2 jsd-postroll-footer-details"},l.a.createElement("span",null,t.frontmatter.title),l.a.createElement("span",null,t.frontmatter.publishedDate)),l.a.createElement("span",null,"→")))))},p=a("nPH8"),f=a("vzeB"),E=a("Wbzz").Link,v=function(e){var t=e.tags;return l.a.createElement("div",{className:"mb-4 jsd-spec-tags"},t.map((function(e){return l.a.createElement(E,{key:e.id,to:e.slug,className:"jsd-tag mr-1",style:{color:e.foreground,background:e.background}},l.a.createElement("span",{className:"tag-prefix"},"#"),e.tag)})))},h=function(e){var t=e.post.frontmatter,a=t.title,r=t.hero;return r?l.a.createElement("div",{className:"jsd-article-cover"},l.a.createElement("img",{src:r.childImageSharp.fluid.src,title:a,alt:a,"aria-label":a,width:"1000",height:"420",className:"jsd-article-cover-image",style:{backgroundColor:"#ddd"}})):l.a.createElement(l.a.Fragment,null)},b=a("M7K5"),N=function(e){var t=e.post,a=e.authors;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"jsd-article-subheader mb-2"},a.map((function(e){return l.a.createElement("div",{key:"article-author-"+e.id},l.a.createElement(o.Link,{to:e.slug,className:"flex items-centre mb-2 s:mb-0 fw-med jsd-link l:fs-s fs-xs"},l.a.createElement(b.a,{name:e.name,src:e.profilePicture.src,className:"mr-4"}),l.a.createElement("span",{className:"pt-1"},e.name)))}))),l.a.createElement("div",{className:"fs-base"},l.a.createElement("span",{className:"mr-2 l:fs-base fs-xs"},t.frontmatter.publishedDate),t.frontmatter.updatedDate?l.a.createElement("span",{style:{fontStyle:"italic"},className:"mr-2 l:fs-base fs-xs fw-med"},"(updated ",t.frontmatter.updatedDate,")"):null,l.a.createElement("span",{className:"mr-2 fw-bold"},"→"),l.a.createElement("span",{className:"l:fs-s fs-xs"},t.timeToRead," min read")))},j=function(e){var t=e.post,a=t.frontmatter,r=a.title,n=a.authors,s=a.posttags,c=a.published,i=Object(f.a)(s),m=Object(p.a)(n),o=c?r:"[Draft] "+r;return l.a.createElement("header",{className:"jsd-article-header",id:"main-title"},l.a.createElement(h,{post:t}),l.a.createElement("div",{className:"jsd-article-header-meta"},l.a.createElement("h1",{className:"ff-monospace fs-3xl s:fs-4xl l:fs-4xl s:fw-heavy fw-heavy lh-tighter mb-4 l:ls-n3 ls-n1"},o),l.a.createElement(v,{tags:i.all()}),l.a.createElement(N,{post:t,authors:m.all()})))},g=function(e){var t=e.post;return l.a.createElement("section",{className:"jsd-article-main"},l.a.createElement("div",{className:"jsd-article-body text-styles spec-body",dangerouslySetInnerHTML:{__html:t.html},itemProp:"articleBody"}))},y=function(e){Object(r.useEffect)((function(){var t=document.createElement("script");t.async=!0,t.src="https://utteranc.es/client.js",t.setAttribute("repo","thejsdevsite/jsdev-discussion"),t.setAttribute("issue-term","title"),t.setAttribute("id","utterances"),t.setAttribute("theme","github-light"),t.setAttribute("crossorigin","anonymous"),t.setAttribute("label","discussion"),e&&e.current?e.current.appendChild(t):console.log("Error adding utterances comments on: "+e)}),[])},k=function(){return l.a.createElement("section",{className:"mt-6"},l.a.createElement("div",{className:"jsd-card jsd-card-article-comments"},l.a.createElement(w,null)))},w=function(){var e=l.a.createRef();return y(e),l.a.createElement("div",{ref:e,className:"jsd-comments","aria-live":"polite"})},x=a("2wp8"),L=a.n(x),D=a("5EFu"),P=a.n(D),O=a("JNLV"),z=a.n(O),F=function(e){var t=e.post,a=e.authors;return l.a.createElement(l.a.Fragment,null,a.map((function(e){return l.a.createElement(I,{key:"author-"+e.id,post:t,author:e})})))},I=function(e){var t=e.post,a=e.author,r=[];if(a.social){var n=a.social,s=n.github,c=n.twitter,i=n.facebook;s&&r.push({id:"github",src:L.a,href:"https://github.com/"+s,title:"Follow "+a.name+" on GitHub"}),i&&r.push({id:"facebook",src:z.a,href:"https://facebook.com/"+i,title:"Follow "+a.name+" on GitHub"}),c&&r.push({id:"twitter",src:P.a,href:"https://twitter.com/"+c,title:"Follow "+a.name+" on Twitter"})}return l.a.createElement("section",{className:"mt-6"},l.a.createElement("div",{className:"jsd-card jsd-card-article-authors"},l.a.createElement("div",{className:"fs-xs mb-2 "},"Posted on ",t.frontmatter.updatedDate||t.frontmatter.publishedDate),l.a.createElement("div",{className:"jsd-card-article-authors-details"},l.a.createElement(o.Link,{to:a.slug,className:"shrink-0 mr-4",title:a.name},l.a.createElement(b.a,{name:a.name,src:a.profilePicture.src,className:"jsd-avatar-2xl"})),l.a.createElement("div",null,l.a.createElement("h3",{className:"fs-l s:fs-xl m:fs-2xl l:fs-3xl fw-medium m-0"},l.a.createElement(o.Link,{className:"jsd-link",to:a.slug,title:a.name},a.name)),l.a.createElement("div",{className:"mb-2"},l.a.createElement(o.Link,{className:"jsd-link fs-s l:fs-base fw-medium",to:a.slug,title:a.name},"@",a.id)),l.a.createElement("div",{className:"mb-2 fs-base"},a.bio),l.a.createElement("ul",null,r.map((function(e){return l.a.createElement("li",{className:"mr-4 "+e.id},l.a.createElement("a",{href:e.href,target:"_blank",rel:"noreferrer",title:e.title},l.a.createElement("img",{src:e.src,alt:e.title,loading:"lazy",className:"jsd-article-cover-image"})))})))))))},S=(t.default=function(e){var t,a,r,s,c,i=e.data,o=e.pageContext,d=e.location,f=i.allMarkdownRemark.nodes[0],E=(null===(t=i.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",v=o.previous,h=o.next,b={title:f.frontmatter.title,description:f.frontmatter.description||f.excerpt,twitterCreator:(null==o?void 0:o.authors[0])||void 0,location:d,heroImage:null===(a=f.frontmatter)||void 0===a||null===(r=a.hero)||void 0===r||null===(s=r.childImageSharp)||void 0===s||null===(c=s.fluid)||void 0===c?void 0:c.src,twitterDescription:f.excerpt},N=Object(p.a)(f.frontmatter.authors);return l.a.createElement(m,{location:d,title:E,post:f},l.a.createElement(n.a,b),l.a.createElement("main",{className:"jsd-layout-content grid gap-4"},l.a.createElement("div",{className:"jsd-article-wrapper"},l.a.createElement("article",{className:"jsd-card jsd-article mb-4",id:"article-show-container","data-author":f.frontmatter.authors.join(","),"data-path":f.slug,"data-published":"true"},l.a.createElement(j,{post:f}),l.a.createElement(g,{post:f})),l.a.createElement(F,{post:f,authors:N.all()}),l.a.createElement(k,null)),l.a.createElement(u,{nextPost:h,prevPost:v})))},"2580409317")}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-1dc57eb57d0366341c61.js.map