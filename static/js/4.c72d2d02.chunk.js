(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[4],{53:function(e,t,a){"use strict";var n=a(55),c=a.n(n),r=a(56),i=a(57),o=a.n(i);o.a.defaults.baseURL="https://api.themoviedb.org/3/";var s="ccedf80b94e5f7dfe88940fbe0231014",u=function(){var e=Object(r.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("trending/all/day?api_key=".concat(s)).then((function(e){return e.data.results}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();t.a={fetchTrendMovies:u,fetchSearchMovies:function(e){return o.a.get("search/movie?api_key=".concat(s,"&language=en-US&query=").concat(e,"&page=1&include_adult=false")).then((function(e){return e.data.results}))},fetcMovieInfo:function(e){return o.a.get("movie/".concat(e,"?api_key=").concat(s,"&language=en-US")).then((function(e){return e.data}))},fetchMovieActors:function(e){return o.a.get("movie/".concat(e,"/credits?api_key=").concat(s,"&language=en-US")).then((function(e){return e.data}))},fetchMovieReviews:function(e){return o.a.get("movie/".concat(e,"/reviews?api_key=").concat(s,"&language=en-US&page=1")).then((function(e){return e.data}))}}},89:function(e,t,a){e.exports={Searchbar:"SearchBar_Searchbar__hXY3J",header:"SearchBar_header__aj65p",searchInput:"SearchBar_searchInput__3qcjS",searchBtn:"SearchBar_searchBtn__3T-Xa"}},90:function(e,t,a){e.exports={moviList:"MoviesView_moviList__1tfKC"}},98:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return p}));var n=a(95),c=a(54),r=a(3),i=a(7),o=a(0),s=a(53),u=a(89),h=a.n(u),f=a(2);function b(e){var t=e.onSubmit,a=Object(o.useState)(""),n=Object(c.a)(a,2),r=n[0],i=n[1];return Object(f.jsx)("div",{children:Object(f.jsx)("header",{className:h.a.header,children:Object(f.jsxs)("form",{className:h.a.Searchbar,onSubmit:function(e){e.preventDefault(),t(r),i("")},children:[Object(f.jsx)("input",{className:h.a.searchInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",value:r,onChange:function(e){i(e.target.value.toLowerCase())}}),Object(f.jsx)("button",{className:h.a.searchBtn,type:"submit",children:Object(f.jsx)("span",{children:"Search"})})]})})})}var l=a(90),v=a.n(l),j=(a(91),a(13));function p(){var e=Object(r.f)(),t=Object(r.g)(),a=Object(o.useState)(""),u=Object(c.a)(a,2),h=u[0],l=u[1],p=Object(o.useState)(null),d=Object(c.a)(p,2),m=d[0],O=d[1];Object(o.useEffect)((function(){if(""!==t.search){var e=new URLSearchParams(t.search).get("movie");l(e)}}),[t.search]),Object(o.useEffect)((function(){""!==h&&s.a.fetchSearchMovies(h).then((function(e){return O(e)}))}),[h]);var g=function(){O(null)};return Object(f.jsxs)("div",{children:[Object(f.jsx)(b,{onSubmit:function(a){l(a),""!==a.trim()?(g(),e.push(Object(n.a)(Object(n.a)({},t),{},{search:"movie=".concat(a)}))):j.b.error("Input correct movie name")}}),Object(f.jsx)("ul",{children:m&&m.map((function(e){return Object(f.jsx)("li",{children:Object(f.jsxs)(i.b,{className:v.a.moviList,to:{pathname:"/movies/".concat(e.id),state:{from:t}},children:[e.title,e.name]})},e.id)}))})]})}}}]);
//# sourceMappingURL=4.c72d2d02.chunk.js.map