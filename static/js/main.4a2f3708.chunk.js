(this.webpackJsonp2_nomflix=this.webpackJsonp2_nomflix||[]).push([[0],{37:function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/noPosterSmall.ea2ad102.png"},73:function(t,e,n){"use strict";n.r(e);var r,a,i,c,o,s,l,d=n(1),u=n.n(d),p=n(38),j=n.n(p),b=n(19),h=n(5),g=n(3),x=n(2),O=n(0),m=x.c.header(r||(r=Object(g.a)(["\n\tcolor: white;\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 50px;\n\tdisplay: flex;\n\talign-items: center;\n\tbackground-color: rgba(20, 20, 20, 0.8);\n\tz-index: 10;\n\tbox-shadow: 0 1px 5px 2px rgba(0, 0, 0, 0.8);\n"]))),v=x.c.ul(a||(a=Object(g.a)(["\n\tdisplay: flex;\n"]))),f=x.c.li(i||(i=Object(g.a)(["\n\twidth: 70px;\n\theight: 50px;\n\ttext-align: center;\n\tborder-bottom: 3px solid ",";\n\ttransition: border-bottom 0.5s ease-in-out;\n"])),(function(t){return t.current?"pink":"transparent"})),y=Object(x.c)(b.b)(c||(c=Object(g.a)(["\n\theight: 50px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n"]))),_=Object(h.g)((function(t){var e=t.location.pathname;return Object(O.jsx)(m,{children:Object(O.jsxs)(v,{children:[Object(O.jsx)(f,{current:"/"===e,children:Object(O.jsx)(y,{to:"/",children:"Movies"})}),Object(O.jsx)(f,{current:"/tv"===e,children:Object(O.jsx)(y,{to:"/tv",children:"TV"})}),Object(O.jsx)(f,{current:"/search"===e,children:Object(O.jsx)(y,{to:"/search",children:"Search"})})]})})})),w=n(10),k=n.n(w),S=n(13),T=n(14),R=n(15),U=n(17),M=n(16),z=n(42),C=n.n(z).a.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"b1a20724bcc4a14824f59a8a0b78ab0b",language:"en-US"}}),N=function(){return C.get("movie/popular")},I=function(){return C.get("movie/now_playing")},P=function(){return C.get("movie/upcoming")},A=function(t){return C.get("movie/".concat(t),{params:{appent_to_response:"videos"}})},V=function(t){return C.get("search/movie",{params:{query:encodeURIComponent(t)}})},B=function(){return C.get("tv/top_rated")},D=function(){return C.get("tv/popular")},L=function(){return C.get("tv/airing_today")},q=function(t){return C.get("tv/".concat(t),{params:{appent_to_response:"videos"}})},F=function(t){return C.get("search/tv",{params:{query:encodeURIComponent(t)}})},J=n(4),E=n.n(J),H=x.c.div(o||(o=Object(g.a)(["\n\tpadding: 10px;\n\tmargin-top: 30px;\n"]))),G=x.c.span(s||(s=Object(g.a)(["\n\tfont-size: 24px;\n\tfont-weight: 600;\n"]))),K=x.c.div(l||(l=Object(g.a)(["\n\tmargin-top: 25px;\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fill, 125px);\n\tgrid-gap: 25px;\n"]))),Q=function(t){var e=t.title,n=t.children;return Object(O.jsxs)(H,{children:[Object(O.jsx)(G,{children:e}),Object(O.jsx)(K,{children:n})]})};Q.prototypes={title:E.a.string.isRequired,children:E.a.oneOfType([E.a.arrayOf(E.a.node),E.a.node])};var W,X,Y,Z,$,tt,et,nt,rt,at,it,ct,ot,st,lt,dt,ut,pt,jt,bt,ht,gt,xt,Ot,mt,vt,ft=Q,yt=x.c.div(W||(W=Object(g.a)(["\n\tpadding-top: 100px;\n\theight: 100vh;\n\twidth: 100vw;\n\tdisplay: flex;\n\tjustify-content: center;\n"]))),_t=function(){return Object(O.jsx)(yt,{children:Object(O.jsx)("span",{role:"img","aria-label":"Loading",children:"Loading..."})})},wt=x.c.div(X||(X=Object(g.a)(["\n\twidth: 100vw;\n\tdisplay: flex;\n\tjustify-content: center;\n"]))),kt=x.c.span(Y||(Y=Object(g.a)(["\n\tcolor: ",";\n"])),(function(t){return t.color})),St=function(t){var e=t.text,n=t.color;return Object(O.jsx)(wt,{children:Object(O.jsx)(kt,{color:n,children:e})})},Tt=x.c.div(Z||(Z=Object(g.a)(["\n  font-size: 12px;\n  align-content: center;\n"]))),Rt=x.c.div($||($=Object(g.a)(["\n  background-image: url(",");\n  height: 180px;\n  background-size: cover;\n  border-radius: 4px;\n  background-position: center center;\n  transition: opacity 0.1s linear;\n"])),(function(t){return t.bgUrl})),Ut=x.c.span(tt||(tt=Object(g.a)(["\n  display: block;\n  margin-bottom: 5px;\n"]))),Mt=x.c.span(et||(et=Object(g.a)(["\n  display: block;  \n  bottom: 5px;\n  right: 5px;\n  position: absolute;\n  opacity: 0;\n  transition: opacity 0.1s linear;\n"]))),zt=x.c.span(nt||(nt=Object(g.a)(["\n  display: block;\n  margin-bottom: 5px;\n  color: #95a5a6;\n"]))),Ct=x.c.div(rt||(rt=Object(g.a)(["\n  margin-bottom: 5px;\n  position: relative;\n  &:hover {\n    "," {\n      opacity: 0.3;\n    }\n    "," {\n      opacity: 1;\n    }\n  }\n"])),Rt,Mt),Nt=function(t){var e=t.id,r=t.imageUrl,a=t.title,i=t.rating,c=t.year,o=t.isMovie,s=void 0!==o&&o;return Object(O.jsx)(b.b,{to:s?"/movie/".concat(e):"/show/".concat(e),children:Object(O.jsxs)(Tt,{children:[Object(O.jsxs)(Ct,{children:[Object(O.jsx)(Rt,{bgUrl:r?"https://image.tmdb.org/t/p/w300".concat(r):n(37).default}),Object(O.jsxs)(Mt,{children:[Object(O.jsx)("span",{role:"img","aria-label":"rating",children:"\u2b50\ufe0f"})," ",i," / 10"]})]}),Object(O.jsx)(Ut,{children:a.length>16?"".concat(a.substring(0,16),"..."):a}),Object(O.jsx)(zt,{children:c})]})})},It=x.c.div(at||(at=Object(g.a)(["\n\tmargin-top: 50px;\n\tmargin-bottom: 30px;\n\ttext-align: center;\n\thr {\n\t\tmargin: 20px;\n\t\tborder-color: #555555;\n\t}\n\tspan {\n\t\tcolor: #999999;\n\t}\n"]))),Pt=function(){return Object(O.jsxs)(It,{children:[Object(O.jsx)("hr",{}),Object(O.jsx)("span",{children:"@Nomflix"})]})},At=n(12),Vt=x.c.div(it||(it=Object(g.a)(["\n\tpadding: 10px;\n"]))),Bt=function(t){var e=t.nowPlaying,n=t.upcoming,r=t.popular,a=t.loading,i=t.error;return Object(O.jsxs)("div",{children:[Object(O.jsx)(At.a,{children:Object(O.jsx)("title",{children:"Movies | Nomflix"})}),a?Object(O.jsx)(_t,{}):Object(O.jsxs)("div",{children:[Object(O.jsxs)(Vt,{children:[e&&e.length>0&&Object(O.jsx)(ft,{title:"Now Playing",children:e.map((function(t){return Object(O.jsx)(Nt,{id:t.id,imageUrl:t.poster_path,title:t.original_title,rating:t.vote_average,year:t.release_date.substr(0,4),isMovie:!0})}))}),n&&n.length>0&&Object(O.jsx)(ft,{title:"Upcoming",children:n.map((function(t){return Object(O.jsx)(Nt,{id:t.id,imageUrl:t.poster_path,title:t.original_title,rating:t.vote_average,year:t.release_date.substr(0,4),isMovie:!0})}))}),r&&r.length>0&&Object(O.jsx)(ft,{title:"Popular",children:r.map((function(t){return Object(O.jsx)(Nt,{id:t.id,imageUrl:t.poster_path,title:t.original_title,rating:t.vote_average,year:t.release_date.substr(0,4),isMovie:!0})}))}),i&&Object(O.jsx)(St,{text:i,color:"#ed5942"})]}),Object(O.jsx)(Pt,{})]})]})},Dt=function(t){Object(U.a)(n,t);var e=Object(M.a)(n);function n(){var t;Object(T.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={nowPlaying:null,upcoming:null,popular:null,loading:!0,error:null},t}return Object(R.a)(n,[{key:"componentDidMount",value:function(){var t=Object(S.a)(k.a.mark((function t(){var e,n,r,a,i,c;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,I();case 3:return e=t.sent,n=e.data.results,t.next=7,P();case 7:return r=t.sent,a=r.data.results,t.next=11,N();case 11:i=t.sent,c=i.data.results,this.setState({nowPlaying:n,upcoming:a,popular:c}),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(0),this.setState({error:"Can't find movie information."});case 19:return t.prev=19,this.setState({loading:!1}),t.finish(19);case 22:case"end":return t.stop()}}),t,this,[[0,16,19,22]])})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state,e=t.nowPlaying,n=t.upcoming,r=t.popular,a=t.loading,i=t.error;return console.log(this.state),Object(O.jsx)(Bt,{nowPlaying:e,upcoming:n,popular:r,loading:a,error:i})}}]),n}(u.a.Component),Lt=x.c.div(ct||(ct=Object(g.a)(["\n    padding: 10px;\n"]))),qt=function(t){var e=t.topRated,n=t.popular,r=t.airingToday,a=t.loading,i=t.error;return Object(O.jsxs)("div",{children:[Object(O.jsx)(At.a,{children:Object(O.jsx)("title",{children:"TV Shows | Nomflix"})}),a?Object(O.jsx)(_t,{}):Object(O.jsxs)("div",{children:[Object(O.jsxs)(Lt,{children:[e&&e.length>0&&Object(O.jsx)(ft,{title:"Top Rated Shows",children:e.map((function(t){return Object(O.jsx)(Nt,{id:t.id,imageUrl:t.poster_path,title:t.original_name,rating:t.vote_average,year:t.first_air_date.substring(0,4)},t.id)}))}),n&&n.length>0&&Object(O.jsx)(ft,{title:"Popular Shows",children:n.map((function(t){return Object(O.jsx)(Nt,{id:t.id,imageUrl:t.poster_path,title:t.original_name,rating:t.vote_average,year:t.first_air_date.substring(0,4)},t.id)}))}),r&&r.length>0&&Object(O.jsx)(ft,{title:"Airing Today",children:r.map((function(t){return Object(O.jsx)(Nt,{id:t.id,imageUrl:t.poster_path,title:t.original_name,rating:t.vote_average,year:t.first_air_date.substring(0,4)},t.id)}))}),i&&Object(O.jsx)(St,{text:i,color:"#ed5942"})]}),Object(O.jsx)(Pt,{})]})]})},Ft=function(t){Object(U.a)(n,t);var e=Object(M.a)(n);function n(){var t;Object(T.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={topRated:null,popular:null,airingToday:null,loading:!0,error:null},t}return Object(R.a)(n,[{key:"componentDidMount",value:function(){var t=Object(S.a)(k.a.mark((function t(){var e,n,r,a,i,c;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,B();case 3:return e=t.sent,n=e.data.results,t.next=7,D();case 7:return r=t.sent,a=r.data.results,t.next=11,L();case 11:i=t.sent,c=i.data.results,this.setState({topRated:n,popular:a,airingToday:c}),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(0),this.setState({error:"Can't find TV information."});case 19:return t.prev=19,this.setState({loading:!1}),t.finish(19);case 22:case"end":return t.stop()}}),t,this,[[0,16,19,22]])})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state,e=t.topRated,n=t.popular,r=t.airingToday,a=t.loading,i=t.error;return console.log(this.state),Object(O.jsx)(qt,{topRated:e,popular:n,airingToday:r,loading:a,error:i})}}]),n}(u.a.Component),Jt=x.c.div(ot||(ot=Object(g.a)(["\n\tpadding: 10px;\n    min-height: calc(100vh - 160px);\n"]))),Et=x.c.form(st||(st=Object(g.a)(["\n    margin-bottom: 50px;\n    display: block;\n    background-color: #222222;\n"]))),Ht=x.c.input(lt||(lt=Object(g.a)(["\n    all: unset;\n    font-size: 24px;\n    width: 80%;\n    padding: 10px;\n"]))),Gt=function(t){var e=t.movieResults,n=t.tvResults,r=t.searchTerm,a=t.updateTerm,i=t.handleSubmit,c=t.loading,o=t.error;return Object(O.jsxs)("div",{children:[Object(O.jsx)(At.a,{children:Object(O.jsx)("title",{children:"Search | Nomflix"})}),Object(O.jsxs)(Jt,{children:[Object(O.jsx)(Et,{onSubmit:i,children:Object(O.jsx)(Ht,{placeholder:"Search Movies or TV Shows...",value:r,onChange:a})}),c?Object(O.jsx)(_t,{}):Object(O.jsxs)("div",{children:[e&&e.length>0&&Object(O.jsx)(ft,{title:"Movie Results",children:e.map((function(t){return Object(O.jsx)(Nt,{id:t.id,imageUrl:t.poster_path,title:t.original_title,rating:t.vote_average,year:t.release_date&&t.release_date.substring(0,4),isMovie:!0},t.id)}))}),n&&n.length>0&&Object(O.jsx)(ft,{title:"TV Show Results",children:n.map((function(t){return Object(O.jsx)(Nt,{id:t.id,imageUrl:t.poster_path,title:t.original_name,rating:t.vote_average,year:t.first_air_date&&t.first_air_date.substring(0,4)},t.id)}))}),o&&Object(O.jsx)(St,{text:o,color:"#ed5942"}),e&&0===e.length&&n&&0===n.length&&Object(O.jsx)(St,{text:"Nothing Found",color:"#95a5a6"})]})]}),Object(O.jsx)(Pt,{})]})},Kt=function(t){Object(U.a)(n,t);var e=Object(M.a)(n);function n(){var t;Object(T.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={movieResults:null,tvResults:null,searchTerm:"",loading:!1,error:null},t.handleSubmit=function(e){e.preventDefault(),""!==t.state.searchTerm&&t.searchByTerm()},t.updateTerm=function(e){var n=e.target.value;t.setState({searchTerm:n})},t.searchByTerm=Object(S.a)(k.a.mark((function e(){var n,r,a,i,c;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.state.searchTerm,t.setState({loading:!0}),e.prev=2,e.next=5,V(n);case 5:return r=e.sent,a=r.data.results,e.next=9,F(n);case 9:i=e.sent,c=i.data.results,t.setState({movieResults:a,tvResults:c}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),t.setState({error:"Can't find results."});case 17:return e.prev=17,t.setState({loading:!1}),e.finish(17);case 20:case"end":return e.stop()}}),e,null,[[2,14,17,20]])}))),t}return Object(R.a)(n,[{key:"render",value:function(){var t=this.state,e=t.movieResults,n=t.tvResults,r=t.searchTerm,a=(t.handleSubmit,t.loading),i=t.error;return console.log(this.state),Object(O.jsx)(Gt,{movieResults:e,tvResults:n,searchTerm:r,updateTerm:this.updateTerm,handleSubmit:this.handleSubmit,loading:a,error:i})}}]),n}(u.a.Component),Qt=x.c.div(dt||(dt=Object(g.a)(["\n  height: calc(100vh - 50px);\n  width: 100%;\n  position: relative;\n  padding: 50px;\n"]))),Wt=x.c.div(ut||(ut=Object(g.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  filter: blur(3px);\n  opacity: 0.5;\n  z-index: 0;\n"])),(function(t){return t.bgImage})),Xt=x.c.div(pt||(pt=Object(g.a)(["\n  display: flex;\n  width: 100%;\n  position: relative;\n  z-index: 1;\n  height: 100%;\n"]))),Yt=x.c.div(jt||(jt=Object(g.a)(["\n  width: 30%;\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  height: 100%;\n  border-radius: 5px;\n"])),(function(t){return t.bgImage})),Zt=x.c.div(bt||(bt=Object(g.a)(["\n  width: 70%;\n  margin-left: 10px;\n"]))),$t=x.c.h3(ht||(ht=Object(g.a)(["\n  font-size: 32px;\n"]))),te=x.c.div(gt||(gt=Object(g.a)(["\n  margin: 20px 0;\n"]))),ee=x.c.span(xt||(xt=Object(g.a)([""]))),ne=x.c.span(Ot||(Ot=Object(g.a)(["\n  margin: 0 10px;\n"]))),re=x.c.p(mt||(mt=Object(g.a)(["\n  font-size: 12px;\n  opacity: 0.7;\n  line-height: 1.5;\n  width: 50%;\n"]))),ae=function(t){var e=t.result,r=t.loading,a=t.error;return r?Object(O.jsxs)("div",{children:[Object(O.jsx)(At.a,{children:Object(O.jsx)("title",{children:"Loading | Nomflix"})}),Object(O.jsx)(_t,{})]}):Object(O.jsxs)("div",{children:[Object(O.jsx)(At.a,{children:Object(O.jsxs)("title",{children:[e.original_title?e.original_title:e.original_name," "," | Nomflix`"]})}),Object(O.jsxs)(Qt,{children:[Object(O.jsx)(Wt,{bgImage:e.poster_path?"https://image.tmdb.org/t/p/original".concat(e.backdrop_path):null}),Object(O.jsxs)(Xt,{children:[Object(O.jsx)(Yt,{bgImage:e.poster_path?"https://image.tmdb.org/t/p/original".concat(e.poster_path):n(37).default}),Object(O.jsxs)(Zt,{children:[Object(O.jsx)($t,{children:e.original_title?e.original_title:e.original_name}),Object(O.jsxs)(te,{children:[Object(O.jsx)(ee,{children:e.release_date?e.release_date.substring(0,4):e.first_air_date?e.first_air_date.substring(0,4):"unknown"}),Object(O.jsx)(ne,{children:"\u2022"}),Object(O.jsx)(ee,{children:e.runtime?"".concat(e.runtime," min"):e.episode_run_time?"".concat(e.episode_run_time[0]," min"):"unknown"}),Object(O.jsx)(ne,{children:"\u2022"}),Object(O.jsx)(ee,{children:e.genres?e.genres.length>0?e.genres.map((function(t,n){return n===e.genres.length-1?t.name:"".concat(t.name," / ")})):"unknown":null})]}),Object(O.jsx)(re,{children:e.overview})]})]}),a&&Object(O.jsx)(St,{text:a,color:"#ed5942"})]})]})},ie=function(t){Object(U.a)(n,t);var e=Object(M.a)(n);function n(t){var r;Object(T.a)(this,n),r=e.call(this,t);var a=t.location.pathname;return r.state={result:null,loading:!0,error:null,isMovie:a.includes("/movie/")},r}return Object(R.a)(n,[{key:"componentDidMount",value:function(){var t=Object(S.a)(k.a.mark((function t(){var e,n,r,a,i,c,o,s,l;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=this.props,n=e.match.params.id,r=e.history.push,a=this.state,i=a.isMovie,a.isTv,c=parseInt(n),!isNaN(c)){t.next=5;break}return t.abrupt("return",r("/"));case 5:if(t.prev=5,!i){t.next=13;break}return t.next=9,A(c);case 9:s=t.sent,o=s.data,t.next=17;break;case 13:return t.next=15,q(c);case 15:l=t.sent,o=l.data;case 17:t.next=22;break;case 19:t.prev=19,t.t0=t.catch(5),this.setState({error:"Can't find anything."});case 22:return t.prev=22,this.setState({loading:!1,result:o}),t.finish(22);case 25:case"end":return t.stop()}}),t,this,[[5,19,22,25]])})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state,e=t.result,n=t.loading,r=t.error;return console.log(this.state),Object(O.jsx)(ae,{result:e,loading:n,error:r})}}]),n}(u.a.Component),ce=function(){return Object(O.jsxs)(b.a,{children:[Object(O.jsx)(_,{}),Object(O.jsxs)(h.d,{children:[Object(O.jsx)(h.b,{path:"/",exact:!0,component:Dt}),Object(O.jsx)(h.b,{path:"/tv",exact:!0,component:Ft}),Object(O.jsx)(h.b,{path:"/search",component:Kt}),Object(O.jsx)(h.b,{path:"/movie/:id",component:ie}),Object(O.jsx)(h.b,{path:"/show/:id",component:ie}),Object(O.jsx)(h.a,{from:"*",to:"/"})]})]})},oe=n(45),se=Object(x.a)(vt||(vt=Object(g.a)(["\n\t",";\n\ta {\n\t\ttext-decoration: none;\n\t\tcolor: inherit;\n\t}\n\t* {\n\t\tbox-sizing: border-box;\n\t}\n\tbody {\n\t\tfont-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n\t\tfont-size: 12px;\n\t\tbackground-color: rgba(20, 20, 20, 1);\n\t\tcolor: white;\n\t\tmargin-top: 50px; \n\t}\n"])),oe.a);var le=function(){return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(ce,{}),Object(O.jsx)(se,{})]})};j.a.render(Object(O.jsx)(u.a.StrictMode,{children:Object(O.jsx)(le,{})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.4a2f3708.chunk.js.map