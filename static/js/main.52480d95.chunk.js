(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{55:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var s=n(0),c=n.n(s),a=n(28),i=n.n(a),r=n(15),o=n.n(r),j=n(16),l=n.n(j),u=n(29),m=n(18),d=(n(55),n(1));var b=function(e){e.id;var t=e.year,n=e.title,s=e.summary,c=e.poster,a=e.genres;return Object(d.jsxs)("div",{className:"movie",children:[Object(d.jsx)("img",{src:c,alt:n,title:n}),Object(d.jsxs)("div",{className:"movie__data",children:[Object(d.jsx)("h3",{className:"movie__title",children:n}),Object(d.jsx)("h5",{className:"movie__year",children:t}),Object(d.jsx)("ul",{className:"movie__genres",children:a.map((function(e,t){return Object(d.jsx)("li",{className:"movie__genres__li",children:e},t)}))}),Object(d.jsxs)("p",{className:"movie__summary",children:[s.slice(0,200),"..."]})]})]})};n(57);var h=function(){var e=Object(s.useState)(!0),t=Object(m.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)([]),i=Object(m.a)(a,2),r=i[0],j=i[1],h=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");case 2:t=e.sent,r=t.data.data.movies,j(r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){h(),setTimeout((function(){c(!1)}),1800)}),[]),Object(d.jsx)("div",{className:"App",children:Object(d.jsx)("section",{className:"container",children:!0===n?Object(d.jsx)("div",{className:"loder",children:Object(d.jsx)("span",{className:"loder__text",children:"Loding..."})}):Object(d.jsx)("div",{className:"movies",children:r.map((function(e){return Object(d.jsx)(b,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})})};n(58);var v=function(){return Object(d.jsxs)("div",{className:"about__container",children:[Object(d.jsx)("span",{children:"\u201cFreedom is the freedom to say that two plus two make four. If that is granted, all else follows.\u201d"}),Object(d.jsx)("span",{children:"\u2212 George Orwell, 1984"})]})},O=n(10);n(59);var p=function(){return Object(d.jsxs)("div",{className:"nav",children:[Object(d.jsx)(O.b,{to:"/",children:" Home "}),Object(d.jsx)(O.b,{to:"/About",children:" About "})]})},x=n(2);var f=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(O.a,{children:[Object(d.jsx)(p,{}),Object(d.jsx)(x.a,{path:"/",exact:!0,component:h}),Object(d.jsx)(x.a,{path:"/about",exact:!0,component:v})]})})},_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,66)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),s(e),c(e),a(e),i(e)}))};i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root")),_()}},[[65,1,2]]]);
//# sourceMappingURL=main.52480d95.chunk.js.map