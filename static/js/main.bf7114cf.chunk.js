(this["webpackJsonpreact-2019-11-14"]=this["webpackJsonpreact-2019-11-14"]||[]).push([[0],{124:function(e,t,r){e.exports={list:"restaurants-navigation_list__1uN_p",restaurant:"restaurants-navigation_restaurant__1F4Sj",active:"restaurants-navigation_active__3R6Yd",activeLink:"restaurants-navigation_activeLink__FosrH"}},173:function(e,t,r){e.exports=r.p+"static/media/logo.cffb3093.svg"},174:function(e,t,r){e.exports={header:"header_header__1MqVT"}},192:function(e,t,r){e.exports=r.p+"static/media/hero-banner.f18dca13.jpg"},193:function(e,t,r){e.exports={restaurantContent:"restaurant_restaurantContent__5MWP6"}},194:function(e,t,r){e.exports={cart:"cart_cart__2ULaa",title:"cart_title__3nIse",lastRow:"cart_lastRow__1u8HI",isFlexbox:"cart_isFlexbox__gsNbV"}},195:function(e,t,r){e.exports={cartRow:"cart-row_cartRow__3DstB"}},196:function(e,t,r){e.exports={title:"success-order_title__ci1FB"}},201:function(e,t,r){e.exports=r(380)},206:function(e,t,r){},207:function(e,t,r){},259:function(e,t,r){},370:function(e,t,r){},380:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(9),i=r.n(c),o=(r(206),r(37)),u=r(38),l=r(41),s=r(39),d=r(42),m=r(389),p=r(173),f=r.n(p);var E=function(){return a.a.createElement("a",{href:"/"},a.a.createElement("img",{src:f.a,alt:"logo"}))},b=r(174),v=r.n(b),h=r(391),O=r(95),g=(r(207),r(17)),_=r(62),j=function(e,t){return t.id},y=function(e){return e.cart},w=function(e){return e.restaurants.entities},S=function(e){return e.restaurants.loading},T=function(e){return e.restaurants.loaded},C=function(e){return e.dishes.entities},R=function(e){return e.dishes.loading},D=function(e){return e.dishes.loaded},N=Object(_.a)((function(e){return e.reviews.get("entities")}),(function(e){return e.toJS()})),P=function(e){return e.reviews.get("loading")},I=function(e){return e.reviews.get("loaded")},A=function(e){return e.users.entities},k=function(e){return e.users.loading},x=function(e){return e.users.loaded},F=Object(_.a)(A,(function(e){return Object.values(e)})),L=(Object(_.a)(C,(function(e){return Object.values(e.entities)})),Object(_.a)(w,y,C,(function(e,t,r){return e.reduce((function(e,n){return n.menu.forEach((function(n){var a=t[n],c=r[n];if(a){var i=a*c.price;e.totalPrice+=i,e.dishes.push({dish:c,amount:a,totalDishPrice:i})}})),e}),{dishes:[],totalPrice:0})}))),H=Object(_.a)(A,j,(function(e,t){return e[t]})),U=Object(_.a)(N,w,j,(function(e,t,r){var n=t.find((function(e){return e.id===r}));return n&&Object.values(e).length>0?n.reviews.map((function(t){return e[t]})):[]})),M=Object(_.a)(U,(function(e){var t=e.reduce((function(e,t){return e+t.rating}),0)/e.length;return Math.floor(2*t)/2}));function W(e){return a.a.createElement(h.a,{count:e.totalAmount,className:"cart-button-container"},a.a.createElement(O.a,{icon:"shopping-cart",size:"large",type:"primary",className:"cart-button"}))}W.defaultProps={totalAmount:0};var V=Object(g.b)((function(e){return{totalAmount:Object.values(y(e)).reduce((function(e,t){return e+t}),0)}}))(W);var q=function(){return a.a.createElement("header",{className:v.a.header},a.a.createElement(E,null),a.a.createElement(V,null))},z=(r(259),r(57)),B="_START",G="_SUCCESS",J="_FAIL",K=r(77),$={loading:!1,loaded:!1,error:null,entities:[]},Z=r(25);function X(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?X(Object(r),!0).forEach((function(t){Object(Z.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):X(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var ee=function(e){return e.reduce((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(r),!0).forEach((function(t){Object(Z.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e,Object(Z.a)({},t.id,t))}),{})},te={loading:!1,loaded:!1,error:null,entities:{}};function re(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ne(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?re(Object(r),!0).forEach((function(t){Object(Z.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):re(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ae={loading:!1,loaded:!1,error:null,entities:{}},ce=r(121),ie=Object(ce.a)({loading:!1,loaded:!1,error:null,entities:{}}),oe=Object(z.combineReducers)({count:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCREMENT":return e+1;case"DECREMENT":return e<=0?0:e-1;default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TO_CART":var r=t.payload.id;return Y({},e,Object(Z.a)({},r,e[r]?e[r]+1:1));case"REMOVE_FROM_CART":var n=t.payload.id;return e[n]?Y({},e,Object(Z.a)({},n,e[n]-1)):e;case"RESET_CART":return{};default:return e}},restaurants:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;return Object(K.b)(e,(function(e){switch(t.type){case"ADD_REVIEW":e.entities.find((function(e){return e.id===t.payload.restaurantId})).reviews.push(t.generatedId);break;case"FETCH_RESTAURANTS_START":e.loading=!0;break;case"FETCH_RESTAURANTS_SUCCESS":e.loading=!1,e.loaded=!0,e.error=null,e.entities=t.response;break;case"FETCH_RESTAURANTS_FAIL":e.loading=!1,e.loaded=!1,e.error=t.error;break;default:return}}))},dishes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;return Object(K.a)(e,(function(e){switch(t.type){case"FETCH_DISHES_START":e.loading=!0;break;case"FETCH_DISHES_SUCCESS":e.loading=!1,e.loaded=!0,e.error=null,e.entities=ee(t.response);break;case"FETCH_DISHES_FAIL":e.loading=!1,e.loaded=!1,e.error=t.error;break;default:return}}))},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;return Object(K.a)(e,(function(e){switch(t.type){case"ADD_REVIEW":e.entities[t.userId]||(e.entities[t.userId]={id:t.userId,name:t.payload.userName});break;case"FETCH_USERS_START":e.loading=!0;break;case"FETCH_USERS_SUCCESS":e.loading=!1,e.loaded=!0,e.error=null,e.entities=ne({},e.entities,{},ee(t.response));break;case"FETCH_USERS_FAIL":e.loading=!1,e.loaded=!1,e.error=t.error;break;default:return}}))},reviews:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_REVIEW":return e.setIn(["entities",t.generatedId],Object(ce.a)({id:t.generatedId,userId:t.userId,text:t.payload.text,rating:t.payload.rating}));case"FETCH_REVIEWS_START":return e.set("loading",!0);case"FETCH_REVIEWS_SUCCESS":return e.set("loading",!1).set("loaded",!0).set("error",null).set("entities",Object(ce.a)(ee(t.response)));case"FETCH_REVIEWS_FAIL":return e.set("loading",!1).set("loaded",!1).set("error",t.error);default:return e}}}),ue=r(80),le=r(114),se=r.n(le);function de(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function me(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function pe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function fe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?pe(Object(r),!0).forEach((function(t){Object(Z.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):pe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Ee=r(179),be=r(180),ve=Object(Ee.composeWithDevTools)(Object(z.applyMiddleware)(be.a,(function(e){return function(t){return function(r){var n=r.callAPI,a=Object(ue.a)(r,["callAPI"]);if(!n)return t(a);e.dispatch(fe({},a,{type:r.type+B})),fetch(n).then((function(e){return e.json()})).then((function(e){return t(fe({},a,{type:r.type+G,response:e}))})).catch((function(t){e.dispatch(fe({},a,{type:r.type+J,error:t}))}))}}}),(function(e){return function(e){return function(t){var r=t.generateId,n=Object(ue.a)(t,["generateId"]);e(r?function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?de(Object(r),!0).forEach((function(t){Object(Z.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):de(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},n,{generatedId:se()()}):n)}}}),(function(e){return function(t){return function(r){var n=r.provideUserId,a=Object(ue.a)(r,["provideUserId"]);if(n){var c=F(e.getState()).find((function(e){return e.name===a.payload.userName}));t(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?me(Object(r),!0).forEach((function(t){Object(Z.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):me(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},a,{userId:c?c.id:se()()}))}else t(a)}}}),(function(e){return function(t){return function(r){console.log("BEFORE",e.getState()),console.log("ACTION",r),t(r),console.log("AFTER",e.getState())}}}))),he=Object(z.createStore)(oe,ve);window.store=he;var Oe=r(36),ge=r(60),_e=r(22),je=r.n(_e),ye=r(383),we=r(83),Se=r(46),Te=r(385),Ce=r(52),Re=r.n(Ce),De=function(e){return{type:"ADD_TO_CART",payload:{id:e}}},Ne=function(e){return{type:"REMOVE_FROM_CART",payload:{id:e}}};je.a.string,je.a.shape({id:je.a.string.isRequired,ingredients:je.a.arrayOf(je.a.string).isRequired,name:je.a.string.isRequired,price:je.a.number.isRequired});var Pe={increase:De,decrease:Ne},Ie=Object(g.b)((function(e,t){return{amount:e.cart[t.id]||0,dish:e.dishes[t.id]}}),Pe)((function(e){var t=e.id,r=e.amount,n=e.increase,c=e.decrease,i=Object(g.d)((function(e){return C(e)}))[t];return i?a.a.createElement(ye.a,{"data-automation-id":"DISH",className:Re.a.productDetailedOrderCard},a.a.createElement(we.a,{type:"flex",justify:"space-between"},a.a.createElement(Se.a,{xs:16,md:16,lg:20,align:"left"},a.a.createElement(Te.a.Title,{level:4,className:Re.a.title,"data-automation-id":"DISH_NAME"},i.name),a.a.createElement(Te.a.Paragraph,{className:Re.a.description},i.ingredients.join(", ")),a.a.createElement("div",{className:Re.a.price},i.price," $")),a.a.createElement(Se.a,{xs:8,md:6,lg:4,align:"right"},a.a.createElement("div",{className:Re.a.counter},a.a.createElement("div",{className:Re.a.count,"data-automation-id":"AMOUNT"},r),a.a.createElement(O.a.Group,null,a.a.createElement(O.a,{className:Re.a.button,icon:"minus",onClick:function(){return c(i.id)},"data-automation-id":"DECREASE"}),a.a.createElement(O.a,{className:Re.a.button,icon:"plus",onClick:function(){return n(i.id)},"data-automation-id":"INCREASE"})))))):null})),Ae=r(382);var ke=function(e){return a.a.createElement("div",{style:{textAlign:"center"}},a.a.createElement(Ae.a,{size:"large"}))},xe=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.fetchDishes,r=e.dishesLoading,n=e.dishesLoaded;r||n||t()}},{key:"render",value:function(){var e=this.props,t=e.menu;return e.dishesLoading?a.a.createElement(ke,null):a.a.createElement("div",null,t.map((function(e){return a.a.createElement(Ie,{key:e,id:e})})))}}]),t}(n.Component),Fe=(je.a.arrayOf(je.a.string),Object(g.b)((function(e){return{dishesLoading:R(e),dishesLoaded:D(e)}}),{fetchDishes:function(){return function(e,t){e({type:"FETCH_DISHES_START"}),fetch("/api/dishes").then((function(e){return e.json()})).then((function(t){return e({type:"FETCH_DISHES_SUCCESS",response:t})})).catch((function(t){e({type:"FETCH_DISHES_FAIL",error:t})}))}}})(xe)),Le=r(387);var He=function(e){var t=Object(g.d)(I),r=Object(g.d)((function(t){return M(t,e)}));return t?a.a.createElement("div",null,a.a.createElement(Le.a,{value:r,disabled:!0,allowHalf:!0})):null},Ue=r(96),Me=r.n(Ue),We=(je.a.string.isRequired,je.a.string.isRequired,je.a.number.isRequired,Object(g.b)((function(e,t){return{user:H(e,{id:t.review.userId})}}))((function(e){var t=e.review,r=e.user;return a.a.createElement(ye.a,{className:Me.a.review},a.a.createElement(we.a,{type:"flex",align:"middle"},a.a.createElement(Se.a,{xs:24,md:16,align:"left"},a.a.createElement(Te.a.Title,{className:Me.a.name,level:4},r.name),a.a.createElement(Te.a.Text,{className:Me.a.comment},t.text)),a.a.createElement(Se.a,{xs:8,md:8,align:"right",className:Me.a.rateColumn},a.a.createElement(Le.a,{disabled:!0,value:t.rating}))))}))),Ve=r(82),qe=r(384),ze=r(388),Be=function(e){return!!e},Ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Be,r=Object(n.useState)(e),a=Object(Ve.a)(r,2),c=a[0],i=a[1],o=function(e){return i(e.target.value)};return[c,o,t(c),function(){return i("")}]},Je=r(92),Ke=r.n(Je),$e=r(71),Ze=r.n($e),Xe=function(e){var t=e.id,r=Object(n.useState)(0),c=Object(Ve.a)(r,2),i=c[0],o=c[1],u=Ge(),l=Object(Ve.a)(u,4),s=l[0],d=l[1],m=l[2],p=l[3],f=Ge(),E=Object(Ve.a)(f,4),b=E[0],v=E[1],h=E[2],_=E[3],j=Object(g.c)(),y=d,w=v,S=o;return a.a.createElement(ye.a,{className:Ze.a.reviewForm},a.a.createElement(we.a,{type:"flex",align:"middle"},a.a.createElement(Se.a,{xs:24,md:18,align:"left"},a.a.createElement(Te.a.Title,{className:Ze.a.addReviewTitle,level:4},"Leave your review"),a.a.createElement(qe.a,{onSubmit:function(e){e.preventDefault(),j(function(e,t,r,n){return{type:"ADD_REVIEW",payload:{userName:e,rating:t,text:r,restaurantId:n},generateId:!0,provideUserId:!0}}(s,+i,b,t)),p(),_(),o(null)}},a.a.createElement(ze.a,{value:s,onChange:y,placeholder:"Your name",className:Ke()(Object(Z.a)({},Ze.a.invalid,!m),Ze.a.inputName)}),a.a.createElement(ze.a.TextArea,{value:b,onChange:w,rows:3,size:"large",className:Ke()(Object(Z.a)({},Ze.a.invalid,!h))}),a.a.createElement("div",null,"Rating: ",a.a.createElement(Le.a,{value:i,onChange:S})),a.a.createElement(O.a,{htmlType:"submit",className:Ze.a.submitButton},"PUBLISH REVIEW")))))},Ye=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.reviewLoaded,r=e.reviewLoading,n=e.usersLoaded,a=e.usersLoading,c=e.fetchReviews,i=e.fetchUsers;n||a||i(),t||r||c()}},{key:"render",value:function(){var e=this.props,t=e.reviews,r=e.reviewLoading,n=e.usersLoading,c=e.id;return n||r?a.a.createElement(ke,null):a.a.createElement(we.a,{type:"flex",justify:"center",gutter:{xs:8,sm:16,md:24}},a.a.createElement(Se.a,{xs:24,md:16},t.map((function(e){return a.a.createElement(We,{review:e,key:e.id})})),a.a.createElement(Xe,{id:c})))}}]),t}(n.Component);Ye.defaultProps={reviews:[]};var Qe={id:je.a.string};We.propTypes=Qe;var et={fetchReviews:function(){return{type:"FETCH_REVIEWS",callAPI:"/api/reviews"}},fetchUsers:function(){return{type:"FETCH_USERS",callAPI:"/api/users"}}},tt=Object(g.b)((function(e,t){return{reviews:U(e,t),reviewLoaded:I(e),reviewLoading:P(e),usersLoaded:x(e),usersLoading:k(e)}}),et)(Ye),rt=r(192),nt=r.n(rt),at=r(72),ct=r.n(at);var it=function(e){var t=e.img,r=void 0===t?nt.a:t,n=e.heading,c=e.description,i=e.children;return a.a.createElement("div",{className:ct.a.hero},a.a.createElement("img",{src:r,className:ct.a.heroImg,alt:"hero-banner"}),a.a.createElement("div",{className:ct.a.heroCaption},a.a.createElement(Te.a.Title,{"data-automation-id":"RESTAURANT_NAME",level:2,className:ct.a.heading},n),a.a.createElement(Te.a.Text,{className:ct.a.description},c),a.a.createElement("div",{className:ct.a.colorWhite},i)))},ot=r(193),ut=r.n(ot),lt=r(390),st=r(386),dt=r(194),mt=r.n(dt),pt=r(195),ft=r.n(pt);var Et=function(e){var t=e.align,r=void 0===t?"top":t,n=e.leftContent,c=e.rightContent;return a.a.createElement(we.a,{type:"flex",align:r,className:ft.a.cartRow},a.a.createElement(Se.a,{span:12,align:"left"},a.a.createElement(Te.a.Text,null,n)),a.a.createElement(Se.a,{span:12,align:"right"},a.a.createElement(Te.a.Text,null,c)))},bt=r(84),vt=r.n(bt);var ht=Object(g.b)(null,{increment:De,decrement:Ne})((function(e){var t=e.dish,r=e.amount,n=e.increment,c=e.decrement;return a.a.createElement(we.a,{type:"flex",align:"middle",className:vt.a.cartItem},a.a.createElement(Se.a,{span:12,align:"left"},a.a.createElement(Te.a.Text,null,t.name)),a.a.createElement(Se.a,{span:12,align:"right"},a.a.createElement(Te.a.Text,null,t.price*r," $"),a.a.createElement("div",{className:vt.a.counter},a.a.createElement(O.a,{type:"link",size:"small",className:vt.a.button,icon:"minus",onClick:function(){return c(t.id)}}),a.a.createElement(Te.a.Text,{className:vt.a.count},r),a.a.createElement(O.a,{type:"link",size:"small",className:vt.a.button,icon:"plus",onClick:function(){return n(t.id)}}))))}));r(370);var Ot=Object(g.b)((function(e){return{orderedDishes:L(e)}}))((function(e){var t=e.className,r=e.orderedDishes,n=r.dishes,c=r.totalPrice;return 0===n.length?null:(console.log("Cart render"),a.a.createElement("div",{className:Ke()(mt.a.cart,t)},a.a.createElement(lt.a,null,n.map((function(e){var t=e.dish,r=e.amount,n=e.restaurant;return a.a.createElement(st.a,{timeout:500,classNames:"cart-item-animation",key:t.id},a.a.createElement(ht,{dish:t,amount:r,restaurant:n,key:t.id}))}))),a.a.createElement("hr",null),a.a.createElement(Et,{leftContent:"Sub-total",rightContent:"".concat(c," $")}),a.a.createElement(Et,{leftContent:"Delivery costs",rightContent:"FREE"}),a.a.createElement(Et,{leftContent:"Total",rightContent:"".concat(c," $")}),a.a.createElement(O.a,{type:"primary",size:"large",block:!0},a.a.createElement(Oe.b,{to:"/order"},"Order"))))})),gt=function(e){function t(){var e,r;Object(o.a)(this,t);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(r=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a)))).state={error:null},r}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({error:e})}},{key:"render",value:function(){if(!this.props.restaurant)return null;var e=this.props.restaurant,t=e.id,r=e.name,n=e.menu;return a.a.createElement("div",null,a.a.createElement(it,{heading:r},this.state.error?null:a.a.createElement(He,{id:t})),a.a.createElement(we.a,null,a.a.createElement(Se.a,{span:18,className:ut.a.restaurantContent},a.a.createElement(tt,{id:t}),a.a.createElement(Fe,{menu:n})),a.a.createElement(Se.a,{span:6},a.a.createElement(Ot,null))))}}]),t}(n.Component),_t=r(124),jt=r.n(_t),yt=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.restaurants;return a.a.createElement("div",{className:jt.a.list},e.map((function(e){var t=e.id,r=e.name;return a.a.createElement(Oe.c,{className:jt.a.restaurant,key:t,"data-automation-id":"RESTAURANT_NAVIGATION_".concat(t),to:"/restaurant/".concat(t),activeClassName:jt.a.activeLink},r)})))}}]),t}(n.Component);var wt={fetchRestaurants:function(){return{type:"FETCH_RESTAURANTS",callAPI:"/api/restaurants"}}},St=Object(g.b)((function(e){return{restaurants:w(e),restaurantsLoading:S(e),restaurantsLoaded:T(e)}}),wt)((function(e){var t=e.restaurantId,r=e.restaurants,c=e.restaurantsLoading,i=e.restaurantsLoaded,o=e.fetchRestaurants;if(Object(n.useEffect)((function(){!c&&!i&&o()}),[o,c,i]),c)return a.a.createElement(ke,null);var u=r.find((function(e){return e.id===t}));return a.a.createElement("div",{"data-automation-id":"RESTAURANTS"},a.a.createElement(yt,{restaurants:r}),a.a.createElement(gt,{restaurant:u}))}));var Tt=function(){return a.a.createElement(ge.c,null,a.a.createElement(ge.a,{path:"/restaurant/:id",render:function(e){var t=e.match;return a.a.createElement(St,{restaurantId:t.params.id})}}),a.a.createElement(ge.a,{path:"/restaurant",render:function(){return a.a.createElement(St,{restaurantId:"bb8afbec-2fec-491f-93e9-7f13950dd80b"})}}))},Ct=function(e){function t(){var e,r;Object(o.a)(this,t);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(r=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a)))).decrease=function(){r.props.decrementFromDispatch()},r.increase=function(){r.props.incrementFromDispatch()},r}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return console.log("Counter render"),a.a.createElement("div",null,a.a.createElement("span",{style:{padding:"16px"}},this.props.count),a.a.createElement(O.a.Group,null,a.a.createElement(O.a,{onClick:this.decrease,type:"primary",icon:"minus"}),a.a.createElement(O.a,{onClick:this.increase,type:"primary",icon:"plus"})))}}]),t}(n.Component),Rt={incrementFromDispatch:function(){return{type:"INCREMENT"}},decrementFromDispatch:function(){return{type:"DECREMENT"}}},Dt=Object(g.b)((function(e){return{count:e.count}}),Rt)(Ct);var Nt=function(e){return a.a.createElement("div",null,a.a.createElement(Dt,null))};var Pt=function(e){var t=e.amount,r=e.name,n=e.price,c=e.totalDishPrice;return a.a.createElement(we.a,null,a.a.createElement(Se.a,{span:6},r),a.a.createElement(Se.a,{span:6},n),a.a.createElement(Se.a,{span:6},t),a.a.createElement(Se.a,{span:6},c))};var It={resetCart:function(){return{type:"RESET_CART"}}},At=Object(g.b)((function(e){return{orderedDishes:L(e)}}),It)((function(e){var t=e.orderedDishes,r=t.dishes,n=t.totalPrice,c=e.resetCart;return a.a.createElement("div",null,a.a.createElement(Te.a.Title,null,"\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437"),a.a.createElement(we.a,null,a.a.createElement(Se.a,{span:6},"Name"),a.a.createElement(Se.a,{span:6},"Price"),a.a.createElement(Se.a,{span:6},"Amount"),a.a.createElement(Se.a,{span:6},"TotalPrice")),r.map((function(e){return a.a.createElement(Pt,{key:e.dish.id,amount:e.amount,name:e.dish.name,price:e.dish.price,totalDishPrice:e.totalDishPrice})})),a.a.createElement(we.a,null,a.a.createElement(Se.a,{span:6,offset:18},n)),a.a.createElement(O.a,{type:"primary",onClick:function(){return c()}},a.a.createElement(Oe.b,{to:"/success_order"},"order")))}));var kt=function(){return a.a.createElement(ge.a,{path:"/order",component:At})},xt=r(196),Ft=r.n(xt);var Lt=function(e){return a.a.createElement("div",null,a.a.createElement(Te.a.Title,{className:Ft.a.title},"\u0421\u043f\u0430\u0441\u0438\u0431\u043e \u0437\u0430 \u0432\u0430\u0448 \u0437\u0430\u043a\u0430\u0437!"),a.a.createElement(O.a,{type:"primary"},a.a.createElement(Oe.b,{to:"/restaurant"},"\u0437\u0430\u043a\u0430\u0437\u0430\u0442\u044c \u0435\u0449\u0435")))},Ht=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return a.a.createElement(g.a,{store:he},a.a.createElement(Oe.a,null,a.a.createElement("div",null,a.a.createElement(m.a,null,a.a.createElement(q,null),a.a.createElement(m.a.Content,null,a.a.createElement(ge.c,null,a.a.createElement(ge.a,{path:"/counter",exact:!0,strict:!0,component:Nt}),a.a.createElement(ge.a,{path:"/order",exact:!0,component:kt}),a.a.createElement(ge.a,{path:"/restaurant",component:Tt}),a.a.createElement(ge.a,{path:"/success_order",component:Lt}),a.a.createElement(ge.a,{path:"/",render:function(){return a.a.createElement("h1",null,"Page not found")}})))))))}}]),t}(n.Component);i.a.render(a.a.createElement(Ht,null),document.getElementById("root"))},52:function(e,t,r){e.exports={title:"dish_title__3vxZz",description:"dish_description__2FbPy",price:"dish_price__2WAge",counter:"dish_counter__zjqK6",count:"dish_count__3CKDg",button:"dish_button__1Ejh2",productDetailedOrderCard:"dish_productDetailedOrderCard__3M2Xm"}},71:function(e,t,r){e.exports={reviewForm:"review-form_reviewForm__5GoW3",addReviewTitle:"review-form_addReviewTitle__15p3i",inputName:"review-form_inputName__2cErQ",submitButton:"review-form_submitButton__1paoM",invalid:"review-form_invalid__rmAsE"}},72:function(e,t,r){e.exports={hero:"hero_hero__2Lygh",heroImg:"hero_heroImg__2Ihb8",heroCaption:"hero_heroCaption__bPJ9k",heading:"hero_heading__31H5j",description:"hero_description__ikRDf",colorWhite:"hero_colorWhite__2mo3A"}},84:function(e,t,r){e.exports={cartItem:"cart-item_cartItem__2w43_",counter:"cart-item_counter__1KGn7",count:"cart-item_count__36y9K",button:"cart-item_button__3ED3-"}},96:function(e,t,r){e.exports={review:"review_review__2NyXT",addReviewTitle:"review_addReviewTitle__1c8Nr",name:"review_name__1SNwZ",comment:"review_comment__2OlV0",rateColumn:"review_rateColumn__2Zvjj"}}},[[201,1,2]]]);
//# sourceMappingURL=main.bf7114cf.chunk.js.map