(this["webpackJsonpmern-client"]=this["webpackJsonpmern-client"]||[]).push([[0],{124:function(e,t,a){e.exports=a.p+"static/media/spinner.ab497855.gif"},230:function(e,t,a){e.exports=a.p+"static/media/casterplate.51db1e05.png"},231:function(e,t,a){e.exports=a.p+"static/media/e90coilover.414ecc74.png"},232:function(e,t,a){e.exports=a.p+"static/media/hero-logo.da8a2a0a.png"},237:function(e,t,a){e.exports=a.p+"static/media/shoppingcart.1f2514a6.svg"},240:function(e,t,a){e.exports=a.p+"static/media/bws-logo.82be6e02.png"},254:function(e,t,a){e.exports=a(432)},259:function(e,t,a){},264:function(e,t,a){},268:function(e,t,a){},273:function(e,t,a){},425:function(e,t,a){},426:function(e,t,a){},427:function(e,t,a){},428:function(e,t,a){},429:function(e,t,a){},430:function(e,t,a){},431:function(e,t,a){},432:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(86),l=a.n(r),o=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function i(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var s=a(71),m=a(6),u=a(14),d=a(17),p=a(250),E=a(457),f=a(459),b=a(455),h=a(246),v=a(10),g=a(91),y=a(67),O=function(e,t){switch(t.type){case"UPDATE_PRODUCTS":return Object(m.a)(Object(m.a)({},e),{},{products:Object(y.a)(t.products)});case"UPDATE_CATEGORIES":return Object(m.a)(Object(m.a)({},e),{},{categories:Object(y.a)(t.categories)});case"UPDATE_CURRENT_CATEGORY":return console.log("Switch ",t),Object(m.a)(Object(m.a)({},e),{},{currentCategory:t.currentCategory});case"ADD_TO_CART":return Object(m.a)(Object(m.a)({},e),{},{cartOpen:!0,cart:[].concat(Object(y.a)(e.cart),[t.product])});case"ADD_MULTIPLE_TO_CART":return Object(m.a)(Object(m.a)({},e),{},{cart:[].concat(Object(y.a)(e.cart),Object(y.a)(t.products))});case"REMOVE_FROM_CART":var a=e.cart.filter((function(e){return e._id!==t._id}));return Object(m.a)(Object(m.a)({},e),{},{cartOpen:a.length>0,cart:a});case"UPDATE_CART_QUANTITY":return Object(m.a)(Object(m.a)({},e),{},{cartOpen:!0,cart:e.cart.map((function(e){return t._id===e._id&&(e.purchaseQuantity=t.purchaseQuantity),e}))});case"CLEAR_CART":return Object(m.a)(Object(m.a)({},e),{},{cartOpen:!1,cart:[]});case"TOGGLE_CART":return Object(m.a)(Object(m.a)({},e),{},{cartOpen:!e.cartOpen});default:return e}};var N,w,j,_,k,T=["value"],x=Object(n.createContext)(),C=x.Provider,A=function(e){e.value;var t,a=Object(g.a)(e,T),r=(t={products:[],cart:[],cartOpen:!1,categories:[],currentCategory:""},Object(n.useReducer)(O,t)),l=Object(v.a)(r,2),o=l[0],i=l[1];return c.a.createElement(C,Object.assign({value:[o,i]},a))},S=function(){return Object(n.useContext)(x)},R=a(230),P=a.n(R),I=a(231),D=a.n(I),U=a(232),q=a.n(U),L=(a(259),function(){return c.a.createElement("div",{className:"container hero-container pt-3"},c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement(u.b,{to:"/about",className:"col-12 col-md-6 eng-hero-img p-0"},c.a.createElement("img",{src:P.a,alt:"Engineering process"}),c.a.createElement("div",{className:"engineering-text text-center text-white p-4"},c.a.createElement("h6",{className:"desktop-text"},"Learn more about our engineering process..."))),c.a.createElement("div",{className:"hero-logo text-center"},c.a.createElement("img",{src:q.a,alt:"BWS 10 Year Anniversary"})),c.a.createElement(u.b,{to:"/about",className:"col-12 col-md-6 coil-hero-img p-0"},c.a.createElement("img",{src:D.a,alt:"Coilovers"}),c.a.createElement("div",{className:"coilover-text text-white text-center p-4"},c.a.createElement("h6",{className:"desktop-text"},"Learn more about our suspension products...")))))}),Q=(a(264),function(){return c.a.createElement("div",{className:"container p-4"},c.a.createElement("h2",{className:"review-title text-center py-4"},c.a.createElement("span",null,"Where research and precision engineering meet; "),c.a.createElement("br",null),c.a.createElement("span",{className:"font-weight-bold font-italic"},"style is expected.")),c.a.createElement("div",{className:"row justify-content-around review-card-container p-4"},[{title:"Best coilovers ever made.",body:"These are by far the best coilovers I\u2019ve ever seen and ran on my cars. Worth every single penny and will definitely be running broadways on every car I can.",author:"Anonymous Verified Purchaser"},{title:"Worth Every Penny.",body:"Saying these are high quality is an understatement. Blown away at how nice they are and how nice they ride. Shipped them on Friday and I had them Sunday. Best company I\u2019ve ever dealt with. 10/10 recommend.",author:"Tyler H. Verified Purchaser"},{title:"These guys are legitimately the best.",body:"Call them up with any questions, you\u2019ll never be placed on hold... Order some coilovers, and you\u2019ll have one of the best pieces of suspension on the market from the best team available.",author:"Javan H. Verified Purchaser"}].map((function(e,t){return c.a.createElement("div",{key:t,className:"card review-card border-0"},c.a.createElement("div",{className:"card-body"},c.a.createElement("svg",{"aria-hidden":"true",focusable:"false",role:"presentation",className:"icon icon-quote",viewBox:"0 0 41 35"},c.a.createElement("path",{d:"M10.208 17.711h6.124v16.332H0V21.684C0 8.184 5.444.956 16.332 0v6.125c-4.083 1.14-6.124 4.414-6.124 9.82v1.766zm24.498 0h6.124v16.332H24.498V21.684C24.498 8.184 29.942.956 40.83 0v6.125c-4.083 1.14-6.124 4.414-6.124 9.82v1.766z",fill:"#000","fill-rule":"evenodd"})),c.a.createElement("h5",{className:"card-title"},e.title),c.a.createElement("p",{className:"card-text"},e.body)),c.a.createElement("h6",{className:"card-subtitle text-muted m-2"},"- ",e.author))}))))}),M=function(){return c.a.createElement("div",{className:"container"},c.a.createElement(L,null),c.a.createElement(Q,null))},F=a(238),$=a(460),B=a(50),W=a(458),H=Object(W.a)(N||(N=Object(B.a)(["\n  query getProducts($category: ID) {\n    products(category: $category) {\n      _id\n      name\n      description\n      price\n      quantity\n      image\n      category {\n        _id\n      }\n    }\n  }\n"]))),V=(Object(W.a)(w||(w=Object(B.a)(["\n  {\n    products {\n      _id\n      name\n      description\n      price\n      quantity\n      category {\n        name\n      }\n    }\n  }\n"]))),Object(W.a)(j||(j=Object(B.a)(["\n  {\n    categories {\n      _id\n      name\n    }\n  }\n"])))),Y=Object(W.a)(_||(_=Object(B.a)(["\n  {\n    user {\n      firstName\n      lastName\n      orders {\n        _id\n        purchaseDate\n        products {\n          _id\n          name\n          description\n          price\n          quantity\n          image\n        }\n      }\n    }\n  }\n"]))),G=Object(W.a)(k||(k=Object(B.a)(["\n  query getCheckout($products: [ID]!) {\n    checkout(products: $products) {\n      session\n    }\n  }\n"]))),J=a(124),K=a.n(J),z=a(24),X=a.n(z),Z=a(42),ee=a(125),te=a(446);function ae(e,t,a){return new Promise((function(n,c){var r,l,o,i=window.indexedDB.open("shop-shop",1);i.onupgradeneeded=function(e){var t=i.result;t.createObjectStore("products",{keyPath:"_id"}),t.createObjectStore("categories",{keyPath:"_id"}),t.createObjectStore("cart",{keyPath:"_id"})},i.onerror=function(e){console.log("There was an error")},i.onsuccess=function(c){switch(r=i.result,l=r.transaction(e,"readwrite"),o=l.objectStore(e),r.onerror=function(e){console.log("error",e)},t){case"put":o.put(a),n(a);break;case"get":var s=o.getAll();s.onsuccess=function(){n(s.result)};break;case"delete":o.delete(a._id);break;default:console.log("No valid method")}l.oncomplete=function(){r.close()}}}))}var ne=function(e){var t=e.item,a=S(),n=Object(v.a)(a,2),r=(n[0],n[1]);return c.a.createElement("div",{className:"flex-row bg-dark p-2 rounded-bottom"},c.a.createElement("div",null,c.a.createElement("img",{src:"/images/".concat(t.image),alt:""})),c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("p",{className:"font-italic "},c.a.createElement("span",{className:"font-weight-bold"},t.name),": $",t.price)),c.a.createElement("div",null,c.a.createElement("span",null,"Qty:"),c.a.createElement("input",{type:"number",placeholder:"1",value:t.purchaseQuantity,onChange:function(e){var a=e.target.value;"0"===a?(r({type:"REMOVE_FROM_CART",_id:t._id}),ae("cart","delete",Object(m.a)({},t))):(r({type:"UPDATE_CART_QUANTITY",_id:t._id,purchaseQuantity:parseInt(a)}),ae("cart","put",Object(m.a)(Object(m.a)({},t),{},{purchaseQuantity:parseInt(a)})))},style:{color:"black"}}),c.a.createElement("span",{role:"img","aria-label":"trash",onClick:function(){return function(e){r({type:"REMOVE_FROM_CART",_id:e._id}),ae("cart","delete",Object(m.a)({},e))}(t)}},"\ud83d\uddd1\ufe0f"))))},ce=a(235),re=a(236),le=a(168),oe=a.n(le),ie=new(function(){function e(){Object(ce.a)(this,e)}return Object(re.a)(e,[{key:"getProfile",value:function(){return oe()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return oe()(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),se=a(237),me=a.n(se),ue=(a(268),Object(ee.a)("pk_test_TYooMQauvdEDq54NiTphI7jx")),de=function(){var e=S(),t=Object(v.a)(e,2),a=t[0],r=t[1],l=Object(d.f)(),o=Object(te.a)(G),i=Object(v.a)(o,2),s=(i[0],i[1].data);function m(){r({type:"TOGGLE_CART"})}if(Object(n.useEffect)((function(){function e(){return(e=Object(Z.a)(X.a.mark((function e(){var t;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae("cart","get");case 2:t=e.sent,r({type:"ADD_MULTIPLE_TO_CART",products:Object(y.a)(t)});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}a.cart.length||function(){e.apply(this,arguments)}()}),[a.cart.length,r]),Object(n.useEffect)((function(){s&&ue.then((function(e){e.redirectToCheckout({sessionId:s.checkout.session})}))}),[s]),!a.cartOpen)return c.a.createElement("div",{className:"cart-closed",onClick:m},c.a.createElement("span",{role:"img","aria-label":"trash"},c.a.createElement("img",{className:"cart-icon",src:me.a,alt:"shopping cart"})));return c.a.createElement("div",{className:"cart cart-styles text-light"},c.a.createElement("div",{className:"close",onClick:m},c.a.createElement("h8",null,"[close]")),c.a.createElement("div",{className:"cart-header mt-4"},c.a.createElement("h2",{className:"font-italic"},"Shopping Cart")),a.cart.length?c.a.createElement("div",null,a.cart.map((function(e){return c.a.createElement(ne,{key:e._id,item:e})})),c.a.createElement("div",{className:"row space-between justify-content-center text-center"},c.a.createElement("h6",{className:"col-12"},"Total: $",function(){var e=0;return a.cart.forEach((function(t){e+=t.price*t.purchaseQuantity})),e.toFixed(2)}()),ie.loggedIn()?c.a.createElement("button",{onClick:function(){l.push("/checkout")},className:"btn btn-primary m-1 col-10"},"Checkout"):c.a.createElement("span",null,c.a.createElement("h6",null,"(log in to check out)")))):c.a.createElement("h3",null,"You haven't added anything to your cart yet!"))};var pe=function(){var e=S(),t=Object(v.a)(e,2),a=t[0],r=t[1],l=Object(d.g)().id,o=Object(n.useState)({}),i=Object(v.a)(o,2),s=i[0],u=i[1],p=Object(F.b)(H),E=p.loading,f=p.data,b=a.products,h=a.cart,g=Object(d.f)();return Object(n.useEffect)((function(){b.length?u(b.find((function(e){return e._id===l}))):f?(r({type:"UPDATE_PRODUCTS",products:f.products}),f.products.forEach((function(e){ae("products","put",e)}))):E||ae("products","get").then((function(e){r({type:"UPDATE_PRODUCTS",products:e})}))}),[b,f,E,r,l]),c.a.createElement(c.a.Fragment,null,s?c.a.createElement("div",{className:"container"},c.a.createElement($.a,{className:"mt-3",onClick:g.goBack},"\u2190 Back to Products"),c.a.createElement("h2",null,s.name),c.a.createElement("p",null,s.description),c.a.createElement("p",null,c.a.createElement("strong",null,"Price:"),"$",s.price," ",c.a.createElement("button",{className:"btn btn-success",onClick:function(){var e=h.find((function(e){return e._id===l}));e?(r({type:"UPDATE_CART_QUANTITY",_id:l,purchaseQuantity:parseInt(e.purchaseQuantity)+1}),ae("cart","put",Object(m.a)(Object(m.a)({},e),{},{purchaseQuantity:parseInt(e.purchaseQuantity)+1}))):(r({type:"ADD_TO_CART",product:Object(m.a)(Object(m.a)({},s),{},{purchaseQuantity:1})}),ae("cart","put",Object(m.a)(Object(m.a)({},s),{},{purchaseQuantity:1})))}},"Add to cart"),c.a.createElement("button",{className:"btn btn-danger",disabled:!h.find((function(e){return e._id===s._id})),onClick:function(){r({type:"REMOVE_FROM_CART",_id:s._id}),ae("cart","delete",Object(m.a)({},s))}},"Remove from Cart")),c.a.createElement("img",{className:"product-detail mb-5",src:"/images/".concat(s.image),alt:s.name})):null,E?c.a.createElement("img",{src:K.a,alt:"loading"}):null,c.a.createElement(de,null))};var Ee,fe,be,he=function(e){var t=e.children;return c.a.createElement("div",{style:{height:560,clear:"both",paddingTop:120,textAlign:"center"}},t)},ve=function(){return c.a.createElement("div",null,c.a.createElement(he,null,c.a.createElement("h1",null,"404 Page Not Found"),c.a.createElement("h1",null,c.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))},ge=a(87),ye=a(447),Oe=Object(W.a)(Ee||(Ee=Object(B.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))),Ne=Object(W.a)(fe||(fe=Object(B.a)(["\n  mutation addOrder($products: [ID]!) {\n    addOrder(products: $products) {\n      purchaseDate\n      products {\n        _id\n        name\n        description\n        price\n        quantity\n        category {\n          name\n        }\n      }\n    }\n  }\n"]))),we=Object(W.a)(be||(be=Object(B.a)(["\n  mutation addUser(\n    $firstName: String!\n    $lastName: String!\n    $email: String!\n    $password: String!\n  ) {\n    addUser(\n      firstName: $firstName\n      lastName: $lastName\n      email: $email\n      password: $password\n    ) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"])));var je=function(e){var t=Object(n.useState)({email:"",password:""}),a=Object(v.a)(t,2),r=a[0],l=a[1],o=Object(ye.a)(Oe),i=Object(v.a)(o,2),s=i[0],d=i[1].error,p=function(){var e=Object(Z.a)(X.a.mark((function e(t){var a,n;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,s({variables:{email:r.email,password:r.password}});case 4:a=e.sent,n=a.data.login.token,ie.login(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),E=function(e){var t=e.target,a=t.name,n=t.value;l(Object(m.a)(Object(m.a)({},r),{},Object(ge.a)({},a,n)))};return c.a.createElement("div",{className:"container my-1"},c.a.createElement(u.b,{to:"/signup"},"\u2190 Go to Signup"),c.a.createElement("h2",null,"Login"),c.a.createElement("form",{onSubmit:p},c.a.createElement("div",{className:"flex-row space-between my-2"},c.a.createElement("label",{htmlFor:"email"},"Email address:"),c.a.createElement("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:E})),c.a.createElement("div",{className:"flex-row space-between my-2"},c.a.createElement("label",{htmlFor:"pwd"},"Password:"),c.a.createElement("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:E})),d?c.a.createElement("div",null,c.a.createElement("p",{className:"error-text"},"The provided credentials are incorrect")):null,c.a.createElement("div",{className:"flex-row flex-end"},c.a.createElement("button",{type:"submit"},"Submit"))))};var _e=function(e){var t=Object(n.useState)({email:"",password:""}),a=Object(v.a)(t,2),r=a[0],l=a[1],o=Object(ye.a)(we),i=Object(v.a)(o,1)[0],s=function(){var e=Object(Z.a)(X.a.mark((function e(t){var a,n;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,i({variables:{email:r.email,password:r.password,firstName:r.firstName,lastName:r.lastName}});case 3:a=e.sent,n=a.data.addUser.token,ie.login(n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(e){var t=e.target,a=t.name,n=t.value;l(Object(m.a)(Object(m.a)({},r),{},Object(ge.a)({},a,n)))};return c.a.createElement("div",{className:"container my-1"},c.a.createElement(u.b,{to:"/login"},"\u2190 Go to Login"),c.a.createElement("h2",null,"Signup"),c.a.createElement("form",{onSubmit:s},c.a.createElement("div",{className:"flex-row space-between my-2"},c.a.createElement("label",{htmlFor:"firstName"},"First Name:"),c.a.createElement("input",{placeholder:"First",name:"firstName",type:"firstName",id:"firstName",onChange:d})),c.a.createElement("div",{className:"flex-row space-between my-2"},c.a.createElement("label",{htmlFor:"lastName"},"Last Name:"),c.a.createElement("input",{placeholder:"Last",name:"lastName",type:"lastName",id:"lastName",onChange:d})),c.a.createElement("div",{className:"flex-row space-between my-2"},c.a.createElement("label",{htmlFor:"email"},"Email:"),c.a.createElement("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:d})),c.a.createElement("div",{className:"flex-row space-between my-2"},c.a.createElement("label",{htmlFor:"pwd"},"Password:"),c.a.createElement("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:d})),c.a.createElement("div",{className:"flex-row flex-end"},c.a.createElement("button",{type:"submit"},"Submit"))))},ke=a(456),Te=a(227),xe=a(248),Ce=(a(272),a(240)),Ae=a.n(Ce);a(273);var Se=function(){var e,t,a,r,l,o,i=S(),s=Object(v.a)(i,2),m=s[0],d=s[1],p=m.categories,E=Object(F.b)(V),f=E.loading,b=E.data;function h(){return ie.loggedIn()?c.a.createElement(ke.a,{pullRight:!0},c.a.createElement(ke.a.Item,{href:"/orderHistory",className:"nav-item"},"Order History"),c.a.createElement(ke.a.Item,{href:"/",onClick:function(){return ie.logout()},className:"nav-item"},"Logout")):c.a.createElement(ke.a,{pullRight:!0},c.a.createElement(ke.a.Item,{href:"/signup",className:"nav-item"},"Signup"),c.a.createElement(ke.a.Item,{href:"/login",className:"nav-item"},"Login"))}return Object(n.useEffect)((function(){b?(d({type:"UPDATE_CATEGORIES",categories:b.categories}),b.categories.forEach((function(e){ae("categories","put",e)}))):f||ae("categories","get").then((function(e){d({type:"UPDATE_CATEGORIES",categories:e})}))}),[b,f,d]),c.a.createElement("div",{className:"row justify-content-center nav-container"},c.a.createElement(de,null),c.a.createElement("a",{className:"col-12 col-md-2 nav-logo",href:"/"},c.a.createElement("img",{src:Ae.a,className:"nav-logo",alt:"Broadway Logo"})),c.a.createElement("div",{className:"col-12 col-md-6 desktop-nav"},c.a.createElement(Te.a,{className:"navbar",pullRight:!0},c.a.createElement(ke.a,null,c.a.createElement(ke.a.Item,{href:"/",className:"nav-item"},"Home"),c.a.createElement(ke.a.Item,{href:"/about",className:"nav-item"},"About"),c.a.createElement(u.b,{to:"/camber-plates/".concat(null===(e=p[2])||void 0===e?void 0:e._id)},c.a.createElement(ke.a.Item,{href:"/camber-plates",className:"nav-item camb-class"},"Camber Plates & Top Mounts")),c.a.createElement(xe.a,{className:"nav-item",title:"Shop by Make"},c.a.createElement(u.b,{to:"/bmw/".concat(null===(t=p[0])||void 0===t?void 0:t._id)},c.a.createElement(xe.a.Item,{href:"/bmw",className:"nav-item"},"BMW")),c.a.createElement(u.b,{to:"/volkswagen/".concat(null===(a=p[1])||void 0===a?void 0:a._id)},c.a.createElement(xe.a.Item,{href:"/audi",className:"nav-item"},"Volkswagen")))),c.a.createElement(ke.a,{pullRight:!0},h()))),c.a.createElement("div",{className:"col-12 mobile-nav"},c.a.createElement(Te.a,{className:"navbar"},c.a.createElement(ke.a,null,c.a.createElement(xe.a,{pullRight:!0,className:"nav-item",title:"Menu"},c.a.createElement(u.b,{to:"/"},c.a.createElement(xe.a.Item,{href:"/",className:"nav-item"},"Home")),c.a.createElement(u.b,{to:"/about"},c.a.createElement(xe.a.Item,{href:"/about",className:"nav-item"},"About")),c.a.createElement(u.b,{to:"/camber-plates/".concat(null===(r=p[2])||void 0===r?void 0:r._id)},c.a.createElement(xe.a.Item,{href:"/camber-plates",className:"nav-item camb-class"},"Camber Plates & Top Mounts")),c.a.createElement(u.b,{to:"/bmw/".concat(null===(l=p[0])||void 0===l?void 0:l._id)},c.a.createElement(xe.a.Item,{href:"/bmw",className:"nav-item"},"BMW")),c.a.createElement(u.b,{to:"/volkswagen/".concat(null===(o=p[1])||void 0===o?void 0:o._id)},c.a.createElement(xe.a.Item,{href:"/audi",className:"nav-item"},"Volkswagen")))),c.a.createElement(ke.a,{pullLeft:!0},h()))))};var Re=function(){var e=Object(F.b)(Y).data;console.log(e);var t,a=Object(d.f)();return e&&(t=e.user),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"container my-1"},c.a.createElement($.a,{onClick:a.goBack},"\u2190 Back to Products"),t?c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",null,"Order History for ",t.firstName," ",t.lastName),t.orders.map((function(e){return c.a.createElement("div",{key:e._id,className:"my-2"},c.a.createElement("h3",null,new Date(parseInt(e.purchaseDate)).toLocaleDateString()),c.a.createElement("div",{className:"flex-row"},e.products.map((function(e,t){var a=e._id,n=e.image,r=e.name,l=e.price;return c.a.createElement("div",{key:t,className:"card px-1 py-1"},c.a.createElement(u.b,{to:"/products/".concat(a)},c.a.createElement("img",{style:{width:"20%"},alt:r,src:"/images/".concat(n)}),c.a.createElement("p",null,r)),c.a.createElement("div",null,c.a.createElement("span",null,"$",l)))}))))}))):null))},Pe=(a(433),a(425),function(){return c.a.createElement("div",null,c.a.createElement("footer",{className:"site-footer"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-12 col-md-6"},c.a.createElement("h6",null,"About"),c.a.createElement("p",{className:"text-justify"},"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, doloribus nam officia molestias at dolor, quos temporibus eius dolore neque aliquam qui magnam consequuntur, ex non provident ipsam ab voluptates.")),c.a.createElement("div",{className:"col-xs-6 col-md-3"},c.a.createElement("h6",null,"Products"),c.a.createElement("ul",{className:"footer-links"},c.a.createElement("li",null,c.a.createElement("a",{href:"/"},"Merch")),c.a.createElement("li",null,c.a.createElement("a",{href:"/"},"Springs")),c.a.createElement("li",null,c.a.createElement("a",{href:"/"},"Parts and Accessories")),c.a.createElement("li",null,c.a.createElement("a",{href:"/"},"BWS Top Hats")))),c.a.createElement("div",{className:"col-xs-6 col-md-3"},c.a.createElement("h6",null,"Quick Links"),c.a.createElement("ul",{className:"footer-links"},c.a.createElement("li",null,c.a.createElement("a",{href:"/about/"},"About Us")),c.a.createElement("li",null,c.a.createElement("a",{href:"/about"},"Contact Us")),c.a.createElement("li",null,c.a.createElement("a",{href:"/"},"Contribute")),c.a.createElement("li",null,c.a.createElement("a",{href:"http://scanfcode.com/privacy-policy/"},"Privacy Policy")),c.a.createElement("li",null,c.a.createElement("a",{href:"/"},"Sitemap")))))),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-8 col-sm-6 col-xs-12"},c.a.createElement("p",{className:"copyright-text"},"Copyright \xa9 ",(new Date).getFullYear()," All Rights Reserved")),c.a.createElement("div",{className:"col-md-4 col-sm-6 col-xs-12"},c.a.createElement("ul",{className:"social-icons"},c.a.createElement("li",null,c.a.createElement("a",{className:"facebook",href:"/"},c.a.createElement("i",{class:"fa-brands fa-facebook-f"}))),c.a.createElement("li",null,c.a.createElement("a",{className:"twitter",href:"/"},c.a.createElement("i",{class:"fa-brands fa-twitter"}))),c.a.createElement("li",null,c.a.createElement("a",{className:"instagram",href:"/"},c.a.createElement("i",{class:"fa-brands fa-instagram"}))),c.a.createElement("li",null,c.a.createElement("a",{className:"youtube",href:"/"},c.a.createElement("i",{class:"fa-brands fa-youtube"})))))))))});var Ie=function(){var e=Object(ye.a)(Ne),t=Object(v.a)(e,1)[0];return Object(n.useEffect)((function(){function e(){return(e=Object(Z.a)(X.a.mark((function e(){var a,n,c,r;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae("cart","get");case 2:if(a=e.sent,!(n=a.map((function(e){return e._id}))).length){e.next=11;break}return e.next=7,t({variables:{products:n}});case 7:c=e.sent,r=c.data,r.addOrder.products.forEach((function(e){ae("cart","delete",e)}));case 11:setTimeout((function(){window.location.assign("/")}),3e3);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),c.a.createElement("div",null,c.a.createElement(he,null,c.a.createElement("h1",null,"Success!"),c.a.createElement("h2",null,"Thank you for your purchase!"),c.a.createElement("h2",null,"You will now be redirected to the home page")))},De=(a(426),function(){return c.a.createElement("div",{class:"form-style-6"},c.a.createElement("h1",null,"Send Us A Message"),c.a.createElement("form",null,c.a.createElement("input",{required:!0,type:"text",name:"field1",placeholder:"Your Name"}),c.a.createElement("input",{required:!0,type:"email",name:"field2",placeholder:"Email Address"}),c.a.createElement("textarea",{required:!0,name:"field3",placeholder:"Type your Message"}),c.a.createElement("input",{className:"form-input",type:"submit",value:"Send"})))}),Ue=a(453),qe=function(){return c.a.createElement(Ue.a,null,c.a.createElement("div",{className:"pt-4 accordion",id:"accordionExample"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-header",id:"headingOne"},c.a.createElement("h2",{className:"mb-0"},c.a.createElement("button",{className:"btn btn-link",type:"button","data-toggle":"collapse","data-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"},"About Us"))),c.a.createElement("div",{id:"collapseOne",className:"collapse show","aria-labelledby":"headingOne","data-parent":"#accordionExample"},c.a.createElement("div",{className:"card-body"},"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."))),c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-header",id:"headingTwo"},c.a.createElement("h2",{className:"mb-0"},c.a.createElement("button",{className:"btn btn-link collapsed",type:"button","data-toggle":"collapse","data-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo"},"Engineering Process"))),c.a.createElement("div",{id:"collapseTwo",className:"collapse","aria-labelledby":"headingTwo","data-parent":"#accordionExample"},c.a.createElement("div",{className:"card-body"},"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.")))))},Le=function(){return c.a.createElement("div",null,c.a.createElement(qe,null),c.a.createElement("br",null),c.a.createElement(De,null))},Qe=(a(427),function(e){e.cartItems;var t,a=e.cartTotal,r=Object(s.useStripe)(),l=Object(s.useElements)(),o=Object(F.b)(Y).data,i=Object(ye.a)(Ne),m=Object(v.a)(i,1)[0];o&&(t=o.user);var u=Object(n.useState)(!1),d=Object(v.a)(u,2),p=(d[0],d[1]),E=function(){var e=Object(Z.a)(X.a.mark((function e(n){var c,o,i,u;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r&&l){e.next=3;break}return e.abrupt("return");case 3:return p(!0),e.next=6,fetch("/api/create-payment-intent",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({amount:100*a})}).then((function(e){return e.json()}));case 6:return c=e.sent,o=c.client_secret,e.next=10,r.confirmCardPayment(o,{payment_method:{card:l.getElement(s.CardElement),billing_details:{name:ie.loggedIn()?t.firstName:"Guest"}}});case 10:i=e.sent,p(!1),i.error?alert(i.error.message):"succeeded"===i.paymentIntent.status&&(u=function(){var e=Object(Z.a)(X.a.mark((function e(){var t,a,n,c;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae("cart","get");case 2:if(t=e.sent,!(a=t.map((function(e){return e._id}))).length){e.next=11;break}return e.next=7,m({variables:{products:a}});case 7:n=e.sent,c=n.data,c.addOrder.products.forEach((function(e){ae("cart","delete",e)}));case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),alert("Payment Successful!"),setTimeout((function(){window.location.assign("/")}),3e3),u());case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement("div",null,c.a.createElement("form",{onSubmit:E},c.a.createElement("h2",null,"Credit Card Payment:"),c.a.createElement(s.CardElement,null),c.a.createElement("button",null,"Pay Now")))}),Me=(a(428),function(e){var t=e.cartItem,a=S(),n=Object(v.a)(a,2),r=(n[0],n[1]),l=t.name,o=t.image,i=t.price,s=t.purchaseQuantity;return c.a.createElement("div",{className:"checkout-item-container"},c.a.createElement("div",{className:"image-container"},c.a.createElement("img",{className:"checkout-image",src:"../../../images/".concat(o),alt:"".concat(l)})),c.a.createElement("span",{className:"name"}," ",l," "),c.a.createElement("span",{className:"quantity"},c.a.createElement("input",{className:"qty",type:"number",placeholder:"1",value:s,onChange:function(e){var a=e.target.value;"0"===a?(r({type:"REMOVE_FROM_CART",_id:t._id}),ae("cart","delete",Object(m.a)({},t))):(r({type:"UPDATE_CART_QUANTITY",_id:t._id,purchaseQuantity:parseInt(a)}),ae("cart","put",Object(m.a)(Object(m.a)({},t),{},{purchaseQuantity:parseInt(a)})))},style:{color:"black"}})),c.a.createElement("span",{className:"price"}," ",i),c.a.createElement("div",{className:"remove-button",onClick:function(){return r({type:"REMOVE_FROM_CART",_id:(e=t)._id}),void ae("cart","delete",Object(m.a)({},e));var e}},"\u2715"))}),Fe=(a(429),function(){var e=S(),t=Object(v.a)(e,2),a=t[0],r=t[1];a.cart;function l(){var e=0;return a.cart.forEach((function(t){e+=t.price*t.purchaseQuantity})),e.toFixed(2)}return Object(n.useEffect)((function(){r({type:"TOGGLE_CART"})}),[a.cart]),Object(n.useEffect)((function(){l()}),[a.cart]),c.a.createElement("div",{className:"checkout-container"},c.a.createElement("div",{className:"checkout-header"},c.a.createElement("div",{className:"header-block"},c.a.createElement("span",null,"Product")),c.a.createElement("div",{className:"header-block"},c.a.createElement("span",null,"Description")),c.a.createElement("div",{className:"header-block"},c.a.createElement("span",null,"Quantity")),c.a.createElement("div",{className:"header-block"},c.a.createElement("span",null,"Price")),c.a.createElement("div",{className:"header-block"},c.a.createElement("span",null,"Remove"))),a.cart.map((function(e){return c.a.createElement(Me,{key:e._id,cartItem:e})})),c.a.createElement("div",{className:"total"},"TOTAL: $",l()),c.a.createElement(Qe,{cartItems:a.cart,cartTotal:l()}))});a(430);var $e=function(e){var t=e.image,a=e.name,n=e._id,r=e.price,l=e.quantity,o=e.description,i=S(),s=Object(v.a)(i,2),d=s[0],p=s[1],E=d.cart;return c.a.createElement("div",{className:"card mb-5",style:{width:"18rem"}},c.a.createElement(u.b,{className:"text-center",to:"/products/".concat(n)},c.a.createElement("img",{src:"/images/".concat(t),className:"card-img-top",alt:"product card"})),c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title"},a),c.a.createElement("p",{className:"card-text"},o),c.a.createElement("br",null),c.a.createElement("div",null,l," ",function(e,t){return 1===t?e:e+"s"}("item",l)," in stock"),c.a.createElement("div",null,c.a.createElement("span",null,"$",r)),c.a.createElement("br",null),c.a.createElement("button",{className:"btn btn-success",variant:"primary",onClick:function(){var t=E.find((function(e){return e._id===n}));t?(p({type:"UPDATE_CART_QUANTITY",_id:n,purchaseQuantity:parseInt(t.purchaseQuantity)+1}),ae("cart","put",Object(m.a)(Object(m.a)({},t),{},{purchaseQuantity:parseInt(t.purchaseQuantity)+1}))):(p({type:"ADD_TO_CART",product:Object(m.a)(Object(m.a)({},e),{},{purchaseQuantity:1})}),ae("cart","put",Object(m.a)(Object(m.a)({},e),{},{purchaseQuantity:1})))}},"Add to cart")))};var Be=function(e){var t=e.id,a=S(),r=Object(v.a)(a,2),l=r[0],o=r[1],i=t,s=Object(F.b)(H),m=s.loading,u=s.data;return Object(n.useEffect)((function(){u?(o({type:"UPDATE_PRODUCTS",products:u.products}),u.products.forEach((function(e){ae("products","put",e)}))):m||ae("products","get").then((function(e){o({type:"UPDATE_PRODUCTS",products:e})}))}),[u,m,o]),c.a.createElement("div",{className:"my-2"},c.a.createElement("h2",null,"Our Products:"),l.products.length?c.a.createElement("div",{className:"row justify-content-center"},(i?l.products.filter((function(e){return e.category._id===i})):l.products).map((function(e){return c.a.createElement($e,{key:e._id,_id:e._id,image:e.image,name:e.name,price:e.price,quantity:e.quantity,description:e.description})}))):c.a.createElement("h3",null,"You haven't added any products yet!"),m?c.a.createElement("img",{src:K.a,alt:"loading"}):null)},We=function(){var e=Object(d.g)().id;return c.a.createElement(Ue.a,null,c.a.createElement("div",{className:"row justify-content-around"},c.a.createElement(Be,{id:e})))},He=Object(p.a)({uri:"/graphql"}),Ve=Object(h.a)((function(e,t){var a=t.headers,n=localStorage.getItem("id_token");return{headers:Object(m.a)(Object(m.a)({},a),{},{authorization:n?"Bearer ".concat(n):""})}})),Ye=new E.a({link:Ve.concat(He),cache:new f.a});var Ge=function(){return c.a.createElement(b.a,{client:Ye},c.a.createElement(u.a,null,c.a.createElement("div",{className:"main-body"},c.a.createElement(A,null,c.a.createElement(Se,null),c.a.createElement(d.c,null,c.a.createElement(d.a,{exact:!0,path:"/success",component:Ie}),c.a.createElement(d.a,{exact:!0,path:"/",component:M}),c.a.createElement(d.a,{exact:!0,path:"/login",component:je}),c.a.createElement(d.a,{exact:!0,path:"/signup",component:_e}),c.a.createElement(d.a,{exact:!0,path:"/bmw/:id",component:We}),c.a.createElement(d.a,{exact:!0,path:"/volkswagen/:id",component:We}),c.a.createElement(d.a,{exact:!0,path:"/about",component:Le}),c.a.createElement(d.a,{exact:!0,path:"/checkout",component:Fe}),c.a.createElement(d.a,{exact:!0,path:"/camber-plates/:id",component:We}),c.a.createElement(d.a,{exact:!0,path:"/orderHistory",component:Re}),c.a.createElement(d.a,{exact:!0,path:"/products/:id",component:pe}),c.a.createElement(d.a,{component:ve})),c.a.createElement(Pe,null)))))},Je=Object(ee.a)(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_STRIPE_PUBLISHABLE_KEY);a(431);l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(s.Elements,{stripe:Je},c.a.createElement(Ge,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");o?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):i(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):i(t,e)}))}}()}},[[254,1,2]]]);
//# sourceMappingURL=main.0b1baaef.chunk.js.map