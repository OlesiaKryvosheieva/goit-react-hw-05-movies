"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[135],{830:function(e,n,t){t.d(n,{Ry:function(){return l},X6:function(){return s},XT:function(){return r},Y1:function(){return o},ik:function(){return a}});var c="https://api.themoviedb.org/3",i="bfdc528b073fc191dd19703e3d01019a",r=function(){return fetch("".concat(c,"/trending/movie/day?api_key=").concat(i))},s=function(e){return fetch("".concat(c,"/movie/").concat(e,"?api_key=").concat(i))},o=function(e){return fetch("".concat(c,"/movie/").concat(e,"/credits?api_key=").concat(i))},a=function(e){return fetch("".concat(c,"/movie/").concat(e,"/reviews?api_key=").concat(i))},l=function(e){return fetch("".concat(c,"/search/movie?api_key=").concat(i,"&query=").concat(e))}},135:function(e,n,t){t.r(n),t.d(n,{default:function(){return _}});var c=t(439),i=t(791),r=t(87),s=t(689),o=t(830),a="MovieDetails_container__Ys+c9",l="MovieDetails_filmInfo__uxvgh",d="MovieDetails_link__U+v+7",u="MovieDetails_text__RHcc4",h="MovieDetails_listOfAddInfo__ob6vt",v="MovieDetails_addInfo__lKFr+",f=t(184),_=function(){var e,n,t,_=(0,i.useState)({}),m=(0,c.Z)(_,2),j=m[0],x=m[1],p=(0,s.UO)().movieId,k=(0,s.TH)();return(0,i.useEffect)((function(){(0,o.X6)(p).then((function(e){return e.json()})).then((function(e){return x(e)}))}),[p]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(r.rU,{to:null!==(e=null===(n=k.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/",className:d,children:"Go back"}),(0,f.jsxs)("div",{className:a,children:[(0,f.jsxs)("div",{className:l,children:[(0,f.jsx)("div",{children:(0,f.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(j.poster_path),alt:j.title,width:"250px"})}),(0,f.jsxs)("div",{children:[(0,f.jsx)("h1",{children:j.title}),(0,f.jsxs)("p",{children:["User score: ",Math.round(10*j.vote_average),"%"]}),(0,f.jsx)("p",{className:u,children:"Overview"}),(0,f.jsx)("p",{children:j.overview}),(0,f.jsx)("p",{className:u,children:"Genres"}),(0,f.jsx)("p",{children:null===(t=j.genres)||void 0===t?void 0:t.map((function(e){return e.name})).join(", ")})]})]}),(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{children:"Additional information"}),(0,f.jsxs)("ul",{className:h,children:[(0,f.jsx)("li",{children:(0,f.jsx)(r.rU,{to:"cast",className:v,children:"Cast"})}),(0,f.jsx)("li",{children:(0,f.jsx)(r.rU,{to:"reviews",className:v,children:"Reviews"})})]}),(0,f.jsx)(i.Suspense,{fallback:(0,f.jsx)("div",{children:"Loading..."}),children:(0,f.jsx)(s.j3,{})})]})]})]})}}}]);
//# sourceMappingURL=135.bbe8ed09.chunk.js.map