(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,a,t){e.exports={header:"header_header__9MZ3t",link:"header_link__1lo86"}},22:function(e,a,t){e.exports={app:"app_app__2Ih0e",wrapper:"app_wrapper__199fD"}},23:function(e,a,t){e.exports=t(51)},29:function(e,a,t){},51:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(19),o=t.n(c),s=(t(29),t(11)),l=t.n(s),i=t(20),m=t(2),p=t(3),u=t(5),h=t(4),d=t(6),f=t(21),_=t.n(f),g=t(12),b=t.n(g),v=function(){return n.a.createElement("header",{className:b.a.header},n.a.createElement("h1",null,n.a.createElement("a",{href:"/"},"Flickr Photo Stream")),n.a.createElement("a",{className:b.a.link,href:"https://github.com/ajpwilson/volleyball",target:"_blank",rel:"noopener noreferrer"},"Repo"))},E=t(8),w=t.n(E),j=function(e){function a(){var e,t;Object(m.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(t=Object(u.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(n)))).handleSubmit=function(e){e.preventDefault(),t.props.fetchPhotos()},t}return Object(d.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){var e=this.props,a=e.searchTerm,t=e.updateSearchTerm,r=e.perPage,c=e.updatePerPage;return n.a.createElement("div",{className:w.a.wrapper},n.a.createElement("form",{onSubmit:this.handleSubmit},n.a.createElement("input",{className:w.a.search,type:"text",value:a,onChange:t,placeholder:"Search..."}),n.a.createElement("select",{value:r,onChange:c},n.a.createElement("option",null,"20"),n.a.createElement("option",null,"50"),n.a.createElement("option",null,"100")),n.a.createElement("button",{className:w.a.btn,type:"submit",disabled:!a},"Search")))}}]),a}(r.Component),k=t(7),P=t.n(k),O=function(e){function a(){return Object(m.a)(this,a),Object(u.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){var e=this.props.items;return console.log({items:e}),n.a.createElement("div",{className:P.a.container},e.map(function(e,a){return n.a.createElement("div",{key:"card-".concat(a),className:P.a.card},n.a.createElement("div",{className:P.a.image},n.a.createElement("img",{alt:e.id,src:e.url_z})),n.a.createElement("div",{className:P.a.name},n.a.createElement("h3",null,n.a.createElement("a",{href:"https://www.flickr.com/photos/".concat(e.owner,"/").concat(e.id),rel:"noopener noreferrer",target:"_blank"},e.title)," ",n.a.createElement("br",null),n.a.createElement("span",null,"by ",n.a.createElement("a",{href:"https://www.flickr.com/photos/".concat(e.owner),rel:"noopener noreferrer",target:"_blank"},e.ownername)))),n.a.createElement("div",{className:P.a.content},n.a.createElement("p",null,e.description._content?e.description._content.substr(0,100):"No description")),n.a.createElement("div",{className:P.a.tags},(e.tags.split(" ")||[]).map(function(e,a){return n.a.createElement("span",{key:"tag-".concat(a),className:P.a.tag},e||"No tags")})))}))}}]),a}(r.Component),y=t(9),N=t.n(y),S=function(e){function a(){return Object(m.a)(this,a),Object(u.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){var e=this.props.items;return n.a.createElement("div",{className:N.a.wrapper},n.a.createElement("div",{className:N.a.count},0===e.length?n.a.createElement("div",null,n.a.createElement("p",null,"Search for something above.")):n.a.createElement("div",null,n.a.createElement("p",null,"Photos: ",e.length))),e?n.a.createElement(O,{items:e}):n.a.createElement("p",{className:N.a.loading},"Loading..."))}}]),a}(r.Component),x=t(22),T=t.n(x),C=_.a.create({baseURL:"https://api.flickr.com/services/rest/",params:{api_key:"5e263bab53c7c3bfc9350ef4256a1ae7",method:"flickr.photos.search",safe_search:1,format:"json",nojsoncallback:1,extras:"description,owner_name,tags,url_o,url_z"}}),z=function(e){function a(){var e,t;Object(m.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(t=Object(u.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(n)))).state={searchTerm:"",perPage:20,items:[]},t.updateSearchTerm=function(e){var a=e.target.value;return t.setState({searchTerm:a})},t.updatePerPage=function(e){var a=e.target.value;return t.setState({perPage:a})},t.fetchPhotos=Object(i.a)(l.a.mark(function e(){var a,r,n,c,o,s;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.state,r=a.searchTerm,n=a.perPage,c={text:r,per_page:n},e.next=4,C({params:c});case 4:o=e.sent,s=o.data,t.setState({items:s.photos.photo});case 7:case"end":return e.stop()}},e,this)})),t}return Object(d.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){var e=this.updateSearchTerm,a=this.updatePerPage,t=this.fetchPhotos,r=this.state,c=r.items,o=r.searchTerm,s=r.perPage;return n.a.createElement("div",{className:T.a.app},n.a.createElement(v,null),n.a.createElement(j,{searchTerm:o,updateSearchTerm:e,perPage:s,updatePerPage:a,fetchPhotos:t}),n.a.createElement(S,{items:c}))}}]),a}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e,a,t){e.exports={container:"image-card_container__CEDSL",card:"image-card_card__3miak",content:"image-card_content__2Pf2U",tags:"image-card_tags__3c94z",tag:"image-card_tag__1isgI"}},8:function(e,a,t){e.exports={wrapper:"search-bar_wrapper__3Fw_z",search:"search-bar_search__jDNYJ",btn:"search-bar_btn__2gwfu"}},9:function(e,a,t){e.exports={count:"image-list_count__13w2P",loading:"image-list_loading__1tQHU"}}},[[23,1,2]]]);
//# sourceMappingURL=main.3ef650e4.chunk.js.map