(this["webpackJsonpamazon-clone"]=this["webpackJsonpamazon-clone"]||[]).push([[0],{100:function(e,t,c){},101:function(e,t,c){},104:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c(3),s=c.n(a),i=c(46),r=c.n(i),o=(c(60),c(47)),l=c(8),j=(c(61),c(62),c(48)),d=c.n(j),u=c(49),b=c.n(u),h=c(14),m=Object(a.createContext)();function O(e){var t=e.reducer,c=e.initialState,s=e.children;return Object(n.jsx)(m.Provider,{value:Object(a.useReducer)(t,c),children:s})}var p=function(){return Object(a.useContext)(m)},x=c(35),g=x.a.initializeApp({apiKey:"AIzaSyCNSQXe0WyqxWzbzfq7x6iPr0BOzR5EwuQ",authDomain:"clone-d2f64.firebaseapp.com",databaseURL:"https://clone-d2f64.firebaseio.com",projectId:"clone-d2f64",storageBucket:"clone-d2f64.appspot.com",messagingSenderId:"496971803197",appId:"1:496971803197:web:00519366dc36eb7d36d854"}).firestore(),_=x.a.auth();var v=function(){var e,t=p(),c=Object(l.a)(t,2),a=c[0];return c[1],Object(n.jsxs)("div",{className:"header",children:[Object(n.jsx)(h.b,{to:"/",children:Object(n.jsx)("img",{className:"header__logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG11.png",alt:""})}),Object(n.jsxs)("div",{className:"header__search",children:[Object(n.jsx)("input",{className:"header__searchInput",type:"text"}),Object(n.jsx)(d.a,{className:"header__searchIcon"})]}),Object(n.jsxs)("div",{className:"header__nav",children:[Object(n.jsx)(h.b,{to:!a.user&&"/login",style:{textDecoration:"none"},children:Object(n.jsxs)("div",{onClick:function(){a.user&&_.signOut()},className:"header__option",children:[Object(n.jsx)("span",{className:"header__optionLineOne",children:a.user?a.user.email:"Hello Guest"}),Object(n.jsx)("span",{className:"header__optionLineTwo",children:a.user?"Sign Out":"Sign In"})]})}),Object(n.jsxs)("div",{className:"header__option",children:[Object(n.jsx)("span",{className:"header__optionLineOne",children:"Returns"}),Object(n.jsx)("span",{className:"header__optionLineTwo",children:"& Orders"})]}),Object(n.jsxs)("div",{className:"header__option",children:[Object(n.jsx)("span",{className:"header__optionLineOne",children:"Your"}),Object(n.jsx)("span",{className:"header__optionLineTwo",children:"Prime"})]}),Object(n.jsx)(h.b,{to:"/checkout",children:Object(n.jsxs)("div",{className:"header__optionBasket",children:[Object(n.jsx)(b.a,{}),Object(n.jsx)("span",{className:"header__optionLineTwo header__basketCount",children:null===(e=a.basket)||void 0===e?void 0:e.length})]})})]})]})},f=c(36),N=c(16),y="add-to-basket",k="remove-from-basket",S="set-user",C="empty-basket",w=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)},E=function(e,t){switch(t.type){case y:return Object(N.a)(Object(N.a)({},e),{},{basket:[].concat(Object(f.a)(e.basket),[t.item])});case k:var c=e.basket.findIndex((function(e){return e.id===t.id})),n=Object(f.a)(e.basket);return c>=0?n.splice(c,1):console.warn("Can't remove product (id: ".concat(t.id,") as its not in the basket")),Object(N.a)(Object(N.a)({},e),{},{basket:n});case S:return Object(N.a)(Object(N.a)({},e),{},{user:t.user});case C:return Object(N.a)(Object(N.a)({},e),{},{basket:[]});default:return e}};c(75);var I=function(e){var t=e.id,c=e.title,a=e.image,s=e.price,i=e.rating,r=p(),o=Object(l.a)(r,2),j=(o[0],o[1]);return Object(n.jsxs)("div",{className:"product",children:[Object(n.jsxs)("div",{className:"product__info",children:[Object(n.jsx)("p",{children:c}),Object(n.jsxs)("p",{className:"product__price",children:[Object(n.jsx)("small",{children:"$"})," ",Object(n.jsx)("strong",{children:s})]}),Object(n.jsx)("div",{className:"product__rating",children:Array(i).fill().map((function(e,t){return Object(n.jsx)("span",{role:"img",children:"\u2b50"})}))})]}),Object(n.jsx)("img",{src:a,alt:""}),Object(n.jsx)("button",{onClick:function(){j({type:y,item:{id:t,title:c,image:a,price:s,rating:i}})},children:"Add to Basket"})]})};c(76);var A=function(){return Object(n.jsx)("div",{className:"home",children:Object(n.jsxs)("div",{className:"home__container",children:[Object(n.jsx)("img",{className:"home__image",src:"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_TallHero_NonPrime_v2_en_US_1x._CB403670067_.jpg",alt:""}),Object(n.jsxs)("div",{className:"home__row",children:[Object(n.jsx)(I,{title:"The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses",price:29.99,image:"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg",rating:5}),Object(n.jsx)(I,{title:"The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses",price:239,image:"https://images-na.ssl-images-amazon.com/images/I/41dIhGZ8qWL.jpg",rating:4})]}),Object(n.jsxs)("div",{className:"home__row",children:[Object(n.jsx)(I,{id:"4903850",title:"Samsung LC49G90SSUXEN 49' Curved LED Gaming Monitor",price:199.99,rating:3,image:"https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"}),Object(n.jsx)(I,{id:"23445930",title:"Echo Dot (3rd Gen) \u2013 Smart speaker with Alexa (Black)",price:98.99,rating:5,image:"https://images-na.ssl-images-amazon.com/images/I/61EXU8BuGZL._SL1100_.jpg"}),Object(n.jsx)(I,{id:"3254354345",title:"New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Space Grey (4th Generation)",price:598.99,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/811aBwuSuIL._SL1500_.jpg"})]}),Object(n.jsx)("div",{className:"home__row",children:Object(n.jsx)(I,{id:"3254354345",title:"SAMSUNG 49-inch Odyssey G9 - QHD, 240hz, 1000R Curved Gaming Monitor, 1ms, NVIDIA G-SYNC & FreeSync, QLED (LC49G95TSSNXZA)",price:1098.99,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/81r8JazRcoL._AC_SL1500_.jpg"})})]})})},L=c(9);c(77);var P=function(e){var t=e.id,c=e.image,a=e.title,s=e.price,i=e.rating,r=e.hideButton,o=p(),j=Object(l.a)(o,2),d=(j[0].basket,j[1]);return Object(n.jsxs)("div",{className:"checkoutProduct",children:[Object(n.jsx)("img",{className:"checkoutProduct__image",src:c,alt:""}),Object(n.jsxs)("div",{className:"checkoutProduct__info",children:[Object(n.jsx)("p",{className:"checkoutProduct__title",children:a}),Object(n.jsxs)("p",{className:"checkoutProduct__price",children:[Object(n.jsx)("small",{children:"$"}),Object(n.jsx)("strong",{children:s})]}),Object(n.jsx)("div",{className:"checkoutProduct__rating",children:Array(i).fill().map((function(e,t){return Object(n.jsx)("p",{children:"\u2b50"})}))}),!r&&Object(n.jsx)("button",{onClick:function(){d({type:k,id:t})},children:"Remove from Basket"})]})]})},T=(c(78),c(23)),z=c.n(T);var B=function(){var e=Object(L.f)(),t=p(),c=Object(l.a)(t,2),a=c[0].basket;return c[1],Object(n.jsxs)("div",{className:"subtotal",children:[Object(n.jsx)(z.a,{renderText:function(e){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("p",{children:["Subtotal (",null===a||void 0===a?void 0:a.length," items): ",Object(n.jsx)("strong",{children:e})]}),Object(n.jsxs)("small",{className:"subtotal__gift",children:[Object(n.jsx)("input",{type:"checkbox"})," This order contains gift"]})]})},decimalScale:2,value:w(a),displayType:"text",thousandSeparator:!0,prefix:"$"}),Object(n.jsx)("button",{onClick:function(t){0!==a.length?e.push("/payment"):alert("No item in Basket")},children:"Proceed to checkout"})]})};c(80);var D=function(){var e=p(),t=Object(l.a)(e,2),c=t[0],a=c.basket,s=c.user;return t[1],Object(n.jsxs)("div",{className:"checkout",children:[Object(n.jsxs)("div",{className:"checkout__left",children:[Object(n.jsx)("img",{className:"checkout__ad",src:"https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg",alt:""}),Object(n.jsxs)("div",{children:[Object(n.jsxs)("h5",{children:["Hello, ",s?s.email:"Guest"]}),Object(n.jsx)("h1",{className:"checkout__title",children:"Your Shopping Basket"}),a.map((function(e){return Object(n.jsx)(P,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))]})]}),Object(n.jsx)("div",{className:"checkout__right",children:Object(n.jsx)(B,{})})]})};c(81);var G=function(){var e=Object(L.f)(),t=Object(a.useState)(""),c=Object(l.a)(t,2),s=c[0],i=c[1],r=Object(a.useState)(""),o=Object(l.a)(r,2),j=o[0],d=o[1];return Object(n.jsxs)("div",{className:"login",children:[Object(n.jsx)(h.b,{to:"/",children:Object(n.jsx)("img",{className:"login__logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png",alt:""})}),Object(n.jsxs)("div",{className:"login__container",children:[Object(n.jsx)("h1",{children:"Sign-in"}),Object(n.jsxs)("form",{children:[Object(n.jsx)("h5",{children:"Email"}),Object(n.jsx)("input",{type:"text",value:s,onChange:function(e){return i(e.target.value)}}),Object(n.jsx)("h5",{children:"Password"}),Object(n.jsx)("input",{type:"password",value:j,onChange:function(e){return d(e.target.value)}}),Object(n.jsx)("button",{type:"submit",className:"login__signInButton",onClick:function(t){t.preventDefault(),_.signInWithEmailAndPassword(s,j).then((function(t){e.push("/")})).catch((function(e){return alert(e.message)}))},children:"Sign In"})]}),Object(n.jsx)("p",{children:"By signing-in you agree to AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads"}),Object(n.jsx)("button",{type:"submit",className:"login__registerButton",onClick:function(t){t.preventDefault(),_.createUserWithEmailAndPassword(s,j).then((function(t){t&&e.push("/")})).catch((function(e){return alert(e.message)}))},children:"Create your Amazon Account"})]})]})},M=c(53),R=c(25),U=c.n(R),H=c(34),Y=c(22),F=c(50),q=c.n(F).a.create({baseURL:"http://localhost:5001/clone-40add/us-central1/api"});c(99);var W=function(){var e=p(),t=Object(l.a)(e,2),c=t[0],s=c.basket,i=c.user,r=t[1],o=Object(L.f)(),j=Object(Y.useStripe)(),d=Object(Y.useElements)(),u=Object(a.useState)(null),b=Object(l.a)(u,2),m=b[0],O=b[1],x=Object(a.useState)(!0),_=Object(l.a)(x,2),v=_[0],f=_[1],y=Object(a.useState)(!1),k=Object(l.a)(y,2),S=k[0],E=k[1],I=Object(a.useState)(!1),A=Object(l.a)(I,2),T=A[0],B=A[1],D=Object(a.useState)(!0),G=Object(l.a)(D,2),R=G[0],F=G[1];Object(a.useEffect)((function(){(function(){var e=Object(H.a)(U.a.mark((function e(){var t;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q({method:"post",url:"/payments/create?total=".concat(100*w(s))});case 2:t=e.sent,F(t.data.clientSecret);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[s]),console.log("THE SECRET IS >>>",R),console.log("THE USER >> ",i);var W=function(){var e=Object(H.a)(U.a.mark((function e(t){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),E(!0),e.next=4,j.confirmCardPayment(R,{payment_method:{card:d.getElement(Y.CardElement)}}).then((function(e){var t=e.paymentIntent;g.collection("users").doc(null===i||void 0===i?void 0:i.uid).collection("orders").doc(t.id).set({basket:s,amount:t.amount,created:t.created},{merge:!0}),B(!0),O(null),E(!1),r({type:C}),o.replace("/orders")}));case 4:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsx)("div",{className:"payment",children:Object(n.jsxs)("div",{className:"payment__container",children:[Object(n.jsxs)("h1",{children:["Checkout (",Object(n.jsxs)(h.b,{to:"/checkout",children:[null===s||void 0===s?void 0:s.length," items"]}),")"]}),Object(n.jsxs)("div",{className:"payment__section",children:[Object(n.jsx)("div",{className:"payment__title",children:Object(n.jsx)("h3",{children:"Delivery Address"})}),Object(n.jsxs)("div",{className:"payment__address",children:[Object(n.jsx)("p",{children:null===i||void 0===i?void 0:i.email}),Object(n.jsx)("p",{children:"123 React Lane"}),Object(n.jsx)("p",{children:"Delhi, India"})]})]}),Object(n.jsxs)("div",{className:"payment__section",children:[Object(n.jsx)("div",{className:"payment__title",children:Object(n.jsx)("h3",{children:"Review items and delivery"})}),Object(n.jsx)("div",{className:"payment__items",children:s.map((function(e){var t=e.id,c=Object(M.a)(e,["id"]);return Object(n.jsx)(P,Object(N.a)({id:t},c))}))})]}),Object(n.jsxs)("div",{className:"payment__section",children:[Object(n.jsx)("div",{className:"payment__title",children:Object(n.jsx)("h3",{children:"Payment Method"})}),Object(n.jsx)("div",{className:"payment__details",children:Object(n.jsxs)("form",{onSubmit:W,children:[Object(n.jsx)(Y.CardElement,{onChange:function(e){f(e.empty),O(e.error?e.error.message:"")}}),Object(n.jsxs)("div",{className:"payment__priceContainer",children:[Object(n.jsx)(z.a,{renderText:function(e){return Object(n.jsxs)("h3",{children:["Order Total: ",e]})},decimalScale:2,value:w(s),displayType:"text",thousandSeparator:!0,prefix:"$"}),Object(n.jsx)("button",{disabled:S||v||T,children:Object(n.jsx)("span",{children:S?Object(n.jsx)("p",{children:"Processing"}):"Buy Now"})})]}),m&&Object(n.jsx)("div",{children:m})]})})]})]})})},X=c(51),Z=(c(100),c(101),c(52)),Q=c.n(Z);var $=function(e){var t,c=e.order;return Object(n.jsxs)("div",{className:"order",children:[Object(n.jsx)("h2",{children:"Order"}),Object(n.jsx)("p",{children:Q.a.unix(c.data.created).format("MMMM Do YYYY, h:mma")}),Object(n.jsx)("p",{className:"order__id",children:Object(n.jsx)("small",{children:c.id})}),null===(t=c.data.basket)||void 0===t?void 0:t.map((function(e){return Object(n.jsx)(P,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating,hideButton:!0})})),Object(n.jsx)(z.a,{renderText:function(e){return Object(n.jsxs)("h3",{className:"order__total",children:["Order Total: ",e]})},decimalScale:2,value:c.data.amount/100,displayType:"text",thousandSeparator:!0,prefix:"$"})]})};var J=function(){var e=p(),t=Object(l.a)(e,2),c=t[0],s=(c.basket,c.user),i=(t[1],Object(a.useState)([])),r=Object(l.a)(i,2),o=r[0],j=r[1];return Object(a.useEffect)((function(){s?g.collection("users").doc(null===s||void 0===s?void 0:s.uid).collection("orders").orderBy("created","desc").onSnapshot((function(e){return j(e.docs.map((function(e){return{id:e.id,data:e.data()}})))})):j([])}),[s]),Object(n.jsxs)("div",{className:"orders",children:[Object(n.jsx)("h1",{children:"Your Orders"}),Object(n.jsx)("div",{className:"orders__order",children:null===o||void 0===o?void 0:o.map((function(e){return Object(n.jsx)($,{order:e})}))})]})},K=Object(X.a)("pk_test_51Hk4Y1IQ8MiZInN8D5Vpmcg6ldlMctjhF6zDH3t6wc1amkEaSj3GjpYZTQn8pWE6D3s1Tehq8k0cgxDHSvufEPcX00ulsb1V5J");var V=function(){var e=p(),t=Object(l.a)(e,2);Object(o.a)(t[0]);var c=t[1];return Object(a.useEffect)((function(){_.onAuthStateChanged((function(e){c(e?{type:S,user:e}:{type:S,user:null})}))}),[]),Object(n.jsx)(h.a,{children:Object(n.jsx)("div",{className:"app",children:Object(n.jsxs)(L.c,{children:[Object(n.jsx)(L.a,{path:"/orders",children:Object(n.jsx)(J,{})}),Object(n.jsx)(L.a,{path:"/login",children:Object(n.jsx)(G,{})}),Object(n.jsxs)(L.a,{path:"/checkout",children:[Object(n.jsx)(v,{}),Object(n.jsx)(D,{})]}),Object(n.jsxs)(L.a,{path:"/payment",children:[Object(n.jsx)(v,{}),Object(n.jsx)(Y.Elements,{stripe:K,children:Object(n.jsx)(W,{})})]}),Object(n.jsxs)(L.a,{path:"/",children:[Object(n.jsx)(v,{}),Object(n.jsx)(A,{})]})]})})})},ee=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,115)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};r.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(O,{initialState:{basket:[],user:null},reducer:E,children:Object(n.jsx)(V,{})})}),document.getElementById("root")),ee()},60:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){},75:function(e,t,c){},76:function(e,t,c){},77:function(e,t,c){},78:function(e,t,c){},80:function(e,t,c){},81:function(e,t,c){},99:function(e,t,c){}},[[104,1,2]]]);
//# sourceMappingURL=main.aceb0126.chunk.js.map