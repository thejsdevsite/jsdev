(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{M7K5:function(e,a,t){"use strict";var l=t("q1tI"),r=t.n(l);a.a=function(e){var a=e.name,t=e.src,l=e.className,n=void 0===l?"":l,s=n?"jsd-avatar "+n:"jsd-avatar";return t?r.a.createElement("span",{className:s},r.a.createElement("img",{className:"jsd-avatar-image",src:t,alt:a,title:a,loading:"lazy"})):r.a.createElement("span",{className:s},r.a.createElement("span",{className:"jsd-avatar-image",alt:a,title:a}))}},NlEj:function(e,a,t){"use strict";var l=t("Wbzz"),r=t("q1tI"),n=t.n(r),s=t("M7K5"),c=function(e){var a,t,l,r,s,c,i,o,m=e.author,d=[];(null===(a=m.employment)||void 0===a?void 0:a.position)&&(null===(t=m.employment)||void 0===t?void 0:t.company)&&d.push({id:"work",title:"Work",value:n.a.createElement(n.a.Fragment,null,null===(l=m.employment)||void 0===l?void 0:l.position,n.a.createElement("span",null,"at"),(null===(r=m.employment)||void 0===r?void 0:r.url)?n.a.createElement("a",{className:"jsd-link",href:null===(s=m.employment)||void 0===s?void 0:s.url,target:"_blank",title:null===(c=m.employment)||void 0===c?void 0:c.company,rel:"noreferrer"},null===(i=m.employment)||void 0===i?void 0:i.company):null===(o=m.employment)||void 0===o?void 0:o.company)});return m.location&&d.push({id:"location",title:"Location",value:m.location}),n.a.createElement("div",{className:"jsd-author-details"},n.a.createElement("ul",{className:"jsd-author-details-inner"},d.map((function(e){return n.a.createElement("li",{key:e.id},n.a.createElement("div",{className:"key"},e.title),n.a.createElement("div",{className:"value"},e.value))}))))};a.a=function(e){var a=e.author;return n.a.createElement("section",{className:"jsd-card jsd-card-secondary branded p-4 pt-0 hidden l:grid gap-4"},n.a.createElement("div",{className:"-mt-4"},n.a.createElement(l.Link,{to:a.slug,className:"flex jsd-link",title:a.name,"aria-label":a.name},n.a.createElement(s.a,{name:a.name,src:a.profilePicture.src,className:"jsd-avatar-xl mr-2 shrink-0"}),n.a.createElement("span",{className:"fs-m fw-med mt-5"},a.name))),n.a.createElement("div",{className:"jsd-author-bio"},a.bio),n.a.createElement(c,{author:a}))}},gVSO:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var l=function(e){var a=[];return Object(e)===e&&Object.keys(e).forEach((function(t){e[t]&&a.push(t)})),a.join(" ")}},lBDk:function(e,a,t){"use strict";var l=t("q1tI"),r=t.n(l),n=t("nPH8"),s=t("NlEj");a.a=function(e){var a=e.post,t=Object(n.a)(a.frontmatter.authors).all().map((function(e){return r.a.createElement(s.a,{key:"sidebar-author-"+e.id,author:e})}));return r.a.createElement("aside",{className:"side-bar sidebar-additional grid gap-4","aria-label":"Secondary sidebar"},t)}},yZlL:function(e,a,t){"use strict";t.r(a),t.d(a,"pageQuery",(function(){return b}));var l=t("q1tI"),r=t.n(l),n=t("vrFN"),s=t("8Svw"),c=t("lBDk"),i=function(e){var a=e.post,t=e.children;return r.a.createElement("div",{className:"site-container"},r.a.createElement("header",null,r.a.createElement(s.a,null)),r.a.createElement("div",{id:"page-content",className:"universal-page-content-wrapper"},r.a.createElement("div",{id:"page-content-inner"},r.a.createElement("div",{className:"jsd-layout jsd-layout-2-cols jsd-layout-article",id:"article-container"},t,r.a.createElement("div",{id:"sidebar-wrapper-right",className:"sidebar-wrapper sidebar-wrapper-right jsd-layout-sidebar-right"},r.a.createElement(c.a,{post:a}))))))},o=t("Wbzz"),m=t("gVSO"),d=function(e){var a=e.nextPost,t=e.prevPost;return r.a.createElement("nav",{className:Object(m.a)({"jsd-layout-postroll-rooter":!0,"item-prev":!!t,"item-next":!!a})},r.a.createElement("ul",null,t&&r.a.createElement("li",{className:"jsd-postroll-footer-link jsd-postroll-previous jsd-card"},r.a.createElement(o.Link,{className:"jsd-link",to:t.fields.slug,rel:"prev"},r.a.createElement("span",{className:"mr-2"},"←"),r.a.createElement("span",{className:"jsd-postroll-footer-details"},r.a.createElement("span",null,t.frontmatter.title),r.a.createElement("span",null,t.frontmatter.publishedDate)))),a&&r.a.createElement("li",{className:"jsd-postroll-footer-link jsd-postroll-next jsd-card"},r.a.createElement(o.Link,{className:"jsd-link",to:a.fields.slug,rel:"next"},r.a.createElement("span",{className:"mr-2 jsd-postroll-footer-details"},r.a.createElement("span",null,a.frontmatter.title),r.a.createElement("span",null,a.frontmatter.publishedDate)),r.a.createElement("span",null,"→")))))},u=t("nPH8"),p=t("vzeB"),v=t("Wbzz").Link,E=function(e){var a=e.tags;return r.a.createElement("div",{className:"mb-4 jsd-spec-tags"},a.map((function(e){return r.a.createElement(v,{key:e.id,to:e.slug,className:"jsd-tag mr-1",style:{color:e.foreground,background:e.background}},r.a.createElement("span",{className:"tag-prefix"},"#"),e.tag)})))},f=function(e){var a=e.post.frontmatter,t=a.title,l=a.hero;return l?r.a.createElement("div",{className:"jsd-article-cover"},r.a.createElement("img",{src:l.childImageSharp.fluid.src,title:t,alt:t,"aria-label":t,width:"1000",height:"420",className:"jsd-article-cover-image",style:{backgroundColor:"#ddd"}})):r.a.createElement(r.a.Fragment,null)},h=t("M7K5"),N=function(e){var a=e.post,t=e.authors;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"jsd-article-subheader mb-2"},t.map((function(e){return r.a.createElement("div",{key:"article-author-"+e.id},r.a.createElement(o.Link,{to:e.slug,className:"flex items-centre mb-2 s:mb-0 fw-med jsd-link l:fs-s fs-xs"},r.a.createElement(h.a,{name:e.name,src:e.profilePicture.src,className:"mr-4"}),r.a.createElement("span",{className:"pt-1"},e.name)))}))),r.a.createElement("div",{className:"fs-base"},r.a.createElement("span",{className:"mr-2 l:fs-s fs-xs"},a.frontmatter.publishedDate),r.a.createElement("span",{className:"mr-2 fw-bold"},"→"),r.a.createElement("span",{className:"l:fs-s fs-xs"},a.timeToRead," min read")))},j=function(e){var a=e.post,t=a.frontmatter,l=t.title,n=t.authors,s=t.posttags,c=(t.date,t.hero,Object(p.a)(s)),i=Object(u.a)(n);return r.a.createElement("header",{className:"jsd-article-header",id:"main-title"},r.a.createElement(f,{post:a}),r.a.createElement("div",{className:"jsd-article-header-meta"},r.a.createElement("h1",{className:"ff-monospace fs-3xl s:fs-4xl l:fs-4xl s:fw-heavy fw-heavy lh-tighter mb-4 l:ls-n3 ls-n1"},l),r.a.createElement(E,{tags:c.all()}),r.a.createElement(N,{post:a,authors:i.all()})))},g=function(e){var a=e.post;return r.a.createElement("section",{className:"jsd-article-main"},r.a.createElement("div",{className:"jsd-article-body text-styles spec-body",dangerouslySetInnerHTML:{__html:a.html},itemProp:"articleBody"}))},b=(a.default=function(e){var a,t,l,s,c,o=e.data,m=e.pageContext,u=e.location,p=o.allMarkdownRemark.nodes[0],v=(null===(a=o.site.siteMetadata)||void 0===a?void 0:a.title)||"Title",E=m.previous,f=m.next,h={title:p.frontmatter.title,description:p.frontmatter.description||p.excerpt,twitterCreator:(null==m?void 0:m.authors[0])||void 0,location:u,heroImage:null===(t=p.frontmatter)||void 0===t||null===(l=t.hero)||void 0===l||null===(s=l.childImageSharp)||void 0===s||null===(c=s.fluid)||void 0===c?void 0:c.src,twitterDescription:p.excerpt};return r.a.createElement(i,{location:u,title:v,post:p},r.a.createElement(n.a,h),r.a.createElement("main",{className:"jsd-layout-content grid gap-4"},r.a.createElement("div",{className:"jsd-article-wrapper"},r.a.createElement("article",{className:"jsd-card jsd-article mb-4",id:"article-show-container","data-author":p.frontmatter.authors.join(","),"data-path":p.slug,"data-published":"true"},r.a.createElement(j,{post:p}),r.a.createElement(g,{post:p}))),r.a.createElement(d,{nextPost:f,prevPost:E})))},"3294673917")}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-e4a582afae61b1dec12c.js.map