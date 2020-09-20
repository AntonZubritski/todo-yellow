(this.webpackJsonpzsport=this.webpackJsonpzsport||[]).push([[0],{145:function(e,t,a){},146:function(e,t,a){},147:function(e,t,a){},148:function(e,t,a){},149:function(e,t,a){},150:function(e,t,a){},151:function(e,t,a){},152:function(e,t,a){},153:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(29),r=a(37),i=a(5),o={jogs:[],distance:"",time:"",date:"",filterFrom:new Date(0).getTime(),filterTo:(new Date).getTime()},u={filter:!1,modal:!1,modalState:!0,isAuth:!1,menuIcon:!1},m=a(71),s=Object(l.c)({pageStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_JOGS":return Object(i.a)(Object(i.a)({},e),{},{jogs:t.payload,filterTo:Math.max.apply(null,t.payload.map((function(e){return e.date})))});case"ON_CHANGE":return Object(i.a)(Object(i.a)({},e),{},Object(r.a)({},t.name,t.value));case"CHANGE_MODAL_DATE":return Object(i.a)(Object(i.a)({},e),{},{date:t.value});case"DELETE_JOG":return Object(i.a)(Object(i.a)({},e),{},{jogs:e.jogs.filter((function(e){return e.id!==t.id}))});case"MOBILE_CLICK_JOG":return Object(i.a)(Object(i.a)({},e),{},{jogs:e.jogs.map((function(a,n){return a.id===t.id?Object(i.a)(Object(i.a)({},e.jogs[n]),{},{mobile_btn:!0}):Object(i.a)(Object(i.a)({},e.jogs[n]),{},{mobile_btn:!1})}))});case"PUSH_ADD_FORM":return Object(i.a)(Object(i.a)({},e),{},{distance:t.payload.distance,time:t.payload.time,date:t.payload.date,id:t.payload.id,user_id:t.payload.user_id,filter:!1});case"CLEAR_ADD_FORM":return Object(i.a)(Object(i.a)({},e),{},{distance:"",time:"",date:""});case"CHANGE_FILTER_FROM":return Object(i.a)(Object(i.a)({},e),{},{filterFrom:new Date(t.value).getTime()});case"CHANGE_FILTER_TO":return Object(i.a)(Object(i.a)({},e),{},{filterTo:new Date(t.value).getTime()});default:return e}},serviceStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TOKEN":return Object(i.a)(Object(i.a)({},e),{},{isAuth:!0});case"TOGGLE_FILTER":return Object(i.a)(Object(i.a)({},e),{},{filter:!e.filter});case"TOGGLE_MODAL":return Object(i.a)(Object(i.a)({},e),{},{modal:!e.modal,filter:!1,modalState:!0});case"SWITCH_MODAL":return Object(i.a)(Object(i.a)({},e),{},{modalState:!e.modalState});case"SWITCH_MENU_ICON":return Object(i.a)(Object(i.a)({},e),{},{menuIcon:!e.menuIcon,filter:!1});default:return e}}}),d=Object(l.d)(s,Object(l.a)(m.a)),h=a(21),f=a.n(h),p=a(4),E=a(10),g=a(35),v=a.n(g),b=a(54),O=a(73),w=new function e(){var t=this;Object(O.a)(this,e),this._urlBase="https://jogtracker.herokuapp.com/api/v1",this._token=localStorage.getItem("jwt"),this.set_token=function(e){return t._token=e},this.headers=function(e){return{Authorization:e?"Bearer ".concat(e):"","Content-Type":"application/json"}},this.templateFetch=function(){var e=Object(b.a)(v.a.mark((function e(a,n,c){var l;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(a,{method:n,body:JSON.stringify(c),headers:t.headers(t._token)});case 2:if((l=e.sent).ok){e.next=5;break}throw new Error("Could not fetch, received ".concat(l.status));case 5:return e.abrupt("return",l.json());case 6:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),this.templateJogsFetch=function(){var e=Object(b.a)(v.a.mark((function e(a){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.templateFetch(a,"GET");case 2:return n=e.sent,e.abrupt("return",n.response.jogs.map(t._transformJogs));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.fetchApi={logToken:function(){return t.templateFetch("".concat(t._urlBase,"/auth/uuidLogin"),"POST",{uuid:"hello"})},getJogs:function(){return t.templateJogsFetch("".concat(t._urlBase,"/data/sync"),"GET")},postJog:function(e){return t.templateFetch("".concat(t._urlBase,"/data/jog"),"POST",e)},editJog:function(e){return t.templateFetch("".concat(t._urlBase,"/data/jog"),"PUT",e)},deleteJog:function(e){return t.templateFetch("".concat(t._urlBase,"/data/jog"),"DELETE",e)}},this._transformJogs=function(e){return{date:1e3*e.date,distance:e.distance,id:e.id,time:e.time,user_id:e.user_id,mobile_btn:!1}},this._transformDate=function(e){var t=new Date(1e3*e).toLocaleString("en",{day:"2-digit"}),a=new Date(1e3*e).toLocaleString("en",{month:"2-digit"}),n=new Date(1e3*e).getFullYear();return"".concat(t,"-").concat(a,"-").concat(n)}},j=function(){return function(e){w.fetchApi.getJogs().then((function(t){e(L(t))}))}},N=function(){return{type:"SET_TOKEN"}},k=function(){return{type:"TOGGLE_MODAL"}},y=function(e){return{type:"PUSH_ADD_FORM",payload:e}},M=function(){return{type:"SWITCH_MODAL"}},C=function(){return{type:"CLEAR_ADD_FORM"}},_=function(e){return{type:"DELETE_JOG",id:e}},L=function(e){return{type:"SET_JOGS",payload:e}},z=a(9),T=a(22),S=a.n(T),I=(a(60),function(e){var t=e.className,a=e.onClick;return c.a.createElement("svg",{className:t,onClick:a,xmlns:"http://www.w3.org/2000/svg",width:"87",height:"87",viewBox:"0 0 87 87"},c.a.createElement("g",{fill:"none",fillRule:"evenodd"},c.a.createElement("circle",{cx:"43.5",cy:"43.5",r:"43.5",fill:"#E990F9"}),c.a.createElement("g",{fill:"#FFF"},c.a.createElement("path",{d:"M32.932 28.86h16.937a.808.808 0 0 0 .806-.81.807.807 0 0 0-.806-.809H32.932a.807.807 0 0 0-.806.809c0 .447.36.81.806.81zM17.784 36.772h16.937a.807.807 0 0 0 .806-.81c0-.446-.36-.809-.806-.809H17.784a.808.808 0 0 0-.806.81c0 .447.361.809.806.809zM22.331 45.099c0 .446.36.809.805.809h16.938a.807.807 0 0 0 .806-.81c0-.446-.36-.809-.806-.809H23.136a.807.807 0 0 0-.805.81zM32.024 54.504H16.806a.807.807 0 0 0-.806.809c0 .447.36.81.806.81h15.218a.807.807 0 0 0 .806-.81.807.807 0 0 0-.806-.81zM59.407 33.933c2.43 0 4.4-1.979 4.4-4.42s-1.97-4.42-4.4-4.42c-2.432 0-4.402 1.98-4.402 4.42 0 2.441 1.97 4.42 4.402 4.42z"}),c.a.createElement("path",{d:"M66.647 32.66c-2.527 3.556-5.912 3.967-9.554 1.796-.247-.147-1.347-.756-1.59-.901-5.86-3.493-11.71-2.124-15.636 3.396-1.667 2.347 2.19 4.572 3.84 2.252 2.027-2.852 4.605-3.677 7.425-2.773-1.444 2.517-2.706 5.018-4.488 8.572-1.781 3.554-5.715 6.392-9.494 4.172-2.728-1.6-5.187 2.334-2.468 3.93 5.16 3.028 11.21 1.169 14.299-2.768.107.057.22.11.344.153 2.524.883 5.831 3.233 6.84 4.066 1.006.833 2.738 5.077 3.765 7.21 1.248 2.586 5.275.702 4.023-1.896-1.165-2.42-3.121-7.248-4.646-8.47-1.224-.979-3.6-2.802-5.615-3.836a176.456 176.456 0 0 1 4.277-7.854c4.763 1.466 9.29-.26 12.515-4.797 1.67-2.347-2.187-4.572-3.837-2.252z"}))))}),F=function(){var e=Object(p.c)((function(e){return e.serviceStore})).menuIcon,t=S()();return c.a.createElement("svg",{className:"logo",xmlns:"http://www.w3.org/2000/svg",width:t.isMobile()?"98pt":"146",height:t.isMobile()?"37pt":"56",viewBox:"0 0 146 56"},c.a.createElement("g",{fill:e?"#7ed321":"#FFF",fillRule:"evenodd"},c.a.createElement("path",{d:"M34.222 27.214c2.56-2.704 4.12-6.282 4.12-10.206 0-1.957-.388-3.827-1.094-5.546a5.936 5.936 0 0 0 3.627-5.474c0-3.277-2.647-5.933-5.912-5.933a5.911 5.911 0 0 0-5.337 3.377 16.655 16.655 0 0 0-7.333-1.682c-2.641 0-5.135.607-7.333 1.682A5.911 5.911 0 0 0 9.623.055c-3.265 0-5.912 2.656-5.912 5.933a5.935 5.935 0 0 0 3.628 5.474 14.551 14.551 0 0 0-1.094 5.546c0 3.924 1.559 7.502 4.12 10.206-4.49 4.263-11.698 11.12-9.99 17.978.79 3.171 2.851 4.427 5.033 4.54.155-4.058 3.117-7.295 6.75-7.295 3.731 0 6.757 3.416 6.757 7.63 0 2.396-.98 4.534-2.512 5.933h11.78c-1.531-1.399-2.511-3.537-2.511-5.934 0-4.213 3.025-7.629 6.757-7.629 3.633 0 6.594 3.237 6.75 7.295 2.181-.113 4.242-1.369 5.032-4.54 1.709-6.858-5.5-13.715-9.99-17.978zM9.004 8.45A2.54 2.54 0 0 1 7.09 5.988a2.538 2.538 0 0 1 2.534-2.543c1.148 0 2.116.766 2.428 1.816a15.648 15.648 0 0 0-3.047 3.19zm20.046 7.285c.7 0 1.267.57 1.267 1.272a1.27 1.27 0 0 1-1.267 1.271c-.7 0-1.266-.57-1.266-1.271 0-.702.566-1.272 1.266-1.272zm-13.514 0c.7 0 1.267.57 1.267 1.272a1.27 1.27 0 0 1-1.267 1.271c-.7 0-1.267-.57-1.267-1.271 0-.702.567-1.272 1.267-1.272zm6.757 16.53c-5.598 0-10.135-3.036-10.135-6.782 0-3.745 4.537-6.781 10.135-6.781s10.136 3.036 10.136 6.781c0 3.746-4.538 6.782-10.136 6.782zM32.535 5.26a2.535 2.535 0 0 1 2.428-1.816c1.399 0 2.534 1.139 2.534 2.543a2.54 2.54 0 0 1-1.915 2.463 15.646 15.646 0 0 0-3.047-3.19z"}),c.a.createElement("path",{d:"M15.007 50.49a2.961 2.961 0 0 1-2.956 2.967 2.961 2.961 0 0 1-2.956-2.967 2.962 2.962 0 0 1 2.956-2.967 2.962 2.962 0 0 1 2.956 2.967zM35.49 50.49a2.961 2.961 0 0 1-2.956 2.967 2.961 2.961 0 0 1-2.957-2.967 2.962 2.962 0 0 1 2.957-2.967 2.962 2.962 0 0 1 2.956 2.967zM22.293 22.094c-1.866 0-3.378.197-3.378 1.695s1.512 3.39 3.378 3.39 3.379-1.892 3.379-3.39c0-1.498-1.513-1.695-3.379-1.695zM60.12 22.781c.316-.047.602-.083.86-.106.257-.024.484-.036.683-.036.21 0 .447.012.71.036.263.023.547.059.85.106v9.943h4.05a6.912 6.912 0 0 1 0 2.788H60.12v-12.73zm8.275 6.392c0-.947.109-1.826.325-2.637.216-.81.55-1.512 1-2.104a4.697 4.697 0 0 1 1.717-1.393c.696-.338 1.523-.507 2.481-.507.959 0 1.783.17 2.472.507.69.337 1.26.802 1.71 1.393.45.592.783 1.294.999 2.104.216.811.324 1.69.324 2.637 0 .947-.108 1.82-.324 2.62-.216.798-.55 1.49-1 2.077a4.59 4.59 0 0 1-1.709 1.367c-.69.326-1.513.488-2.472.488-.958 0-1.785-.162-2.48-.488a4.573 4.573 0 0 1-1.719-1.367c-.45-.586-.783-1.279-1-2.078a10.005 10.005 0 0 1-.324-2.619zm7.767 0c0-2.58-.742-3.87-2.226-3.87-1.52 0-2.28 1.29-2.28 3.87 0 1.29.185 2.252.553 2.886.368.633.938.95 1.71.95 1.495 0 2.243-1.279 2.243-3.836zm11.589-.568c.315-.047.596-.083.841-.106.246-.024.474-.036.684-.036.199 0 .439.012.719.036.28.023.555.059.824.106v6.463c-.69.26-1.37.432-2.042.515-.673.083-1.248.125-1.727.125-1.029 0-1.929-.163-2.7-.489a5.356 5.356 0 0 1-1.938-1.358 5.635 5.635 0 0 1-1.166-2.078 8.594 8.594 0 0 1-.385-2.627c0-.947.134-1.826.403-2.637a6.165 6.165 0 0 1 1.166-2.104 5.25 5.25 0 0 1 1.885-1.385c.748-.332 1.595-.498 2.542-.498.56 0 1.096.042 1.604.125.508.083 1.066.254 1.674.515a5.346 5.346 0 0 1-.263 1.42 8.28 8.28 0 0 1-.473 1.172 15.856 15.856 0 0 0-.64-.213 5.377 5.377 0 0 0-1.64-.249c-.946 0-1.676.323-2.19.968-.515.645-.772 1.607-.772 2.886 0 1.266.251 2.21.754 2.832.502.621 1.25.932 2.244.932.222 0 .42-.018.596-.053v-4.262zm4.663.568c0-.947.109-1.826.325-2.637.216-.81.55-1.512 1-2.104a4.697 4.697 0 0 1 1.717-1.393c.696-.338 1.523-.507 2.481-.507s1.782.17 2.472.507c.69.337 1.26.802 1.71 1.393.45.592.783 1.294.999 2.104.216.811.324 1.69.324 2.637 0 .947-.108 1.82-.324 2.62-.216.798-.55 1.49-1 2.077a4.59 4.59 0 0 1-1.709 1.367c-.69.326-1.514.488-2.472.488s-1.785-.162-2.48-.488a4.573 4.573 0 0 1-1.719-1.367c-.45-.586-.783-1.279-1-2.078a10.005 10.005 0 0 1-.324-2.619zm7.767 0c0-2.58-.742-3.87-2.226-3.87-1.52 0-2.28 1.29-2.28 3.87 0 1.29.185 2.252.553 2.886.368.633.938.95 1.71.95 1.495 0 2.243-1.279 2.243-3.836zm13.903 2.61c0 .782-.14 1.427-.42 1.936a3.17 3.17 0 0 1-1.158 1.207c-.49.296-1.075.503-1.753.622-.678.118-1.414.177-2.209.177-.631 0-1.198-.023-1.7-.07a61.001 61.001 0 0 1-1.631-.178V22.78c.444-.071.93-.13 1.455-.177.526-.048 1.14-.072 1.84-.072.667 0 1.29.057 1.868.17a4.505 4.505 0 0 1 1.517.567c.432.267.774.622 1.025 1.066.252.444.377 1.003.377 1.678a3.15 3.15 0 0 1-.368 1.518c-.245.456-.555.808-.93 1.056.27.107.53.246.781.418.251.171.473.384.666.639.193.254.348.56.465.914.117.355.175.764.175 1.225zm-5.838-1.633v2.983c.082.012.184.02.307.027.122.005.283.008.482.008.222 0 .447-.023.675-.07.228-.048.435-.128.622-.24.187-.113.336-.267.447-.462.111-.195.167-.44.167-.737 0-.568-.184-.962-.552-1.18-.369-.22-.845-.33-1.43-.33h-.718zm0-2.522h.49c.503 0 .895-.103 1.175-.31.281-.207.421-.565.421-1.074 0-.25-.05-.456-.149-.622a1.143 1.143 0 0 0-.377-.39 1.47 1.47 0 0 0-.508-.196 2.912 2.912 0 0 0-.544-.053h-.254c-.1 0-.184.006-.254.018v2.627zm14.078 1.226a6.9 6.9 0 0 1-.158 1.385h-3.383v2.521h4.4c.105.497.158.947.158 1.35 0 .437-.053.905-.158 1.402h-7.503V22.746h7.398c.047.26.082.503.105.728.024.224.035.438.035.639 0 .39-.046.858-.14 1.403h-4.295v1.953h3.383c.106.52.158.982.158 1.385zm4.664 6.623a11 11 0 0 1-.737.106 6.12 6.12 0 0 1-.648.036c-.21 0-.453-.015-.728-.045-.275-.03-.581-.074-.92-.133l3.927-12.678c.304-.035.587-.065.85-.088a8.158 8.158 0 0 1 1.525 0c.263.023.564.053.903.088l3.875 12.696c-.666.106-1.25.16-1.753.16-.234 0-.468-.012-.701-.036-.234-.023-.486-.059-.754-.106l-.667-2.468c-.327.094-.64.165-.938.213a5.636 5.636 0 0 1-.885.07c-.269 0-.543-.02-.824-.061a7.509 7.509 0 0 1-.877-.187l-.648 2.433zm2.454-9.376l-1.174 4.564c.198.059.385.106.56.142.176.035.357.053.544.053.199 0 .395-.015.587-.044.193-.03.395-.074.605-.133l-1.122-4.582zm6.733-3.32c.572-.06 1.101-.115 1.586-.169.485-.053.997-.08 1.534-.08.643 0 1.286.063 1.929.187a5.12 5.12 0 0 1 1.718.648c.503.308.912.728 1.227 1.26.316.533.474 1.208.474 2.025 0 .438-.05.831-.15 1.18-.099.35-.227.66-.385.933a3.706 3.706 0 0 1-.526.71 4.914 4.914 0 0 1-.57.515l2.735 5.469a9.67 9.67 0 0 1-.92.106c-.333.024-.634.036-.903.036-.234 0-.506-.012-.815-.036a6.74 6.74 0 0 1-.816-.106l-2.49-5.806.159-.09c.14-.07.295-.188.464-.354.17-.166.327-.364.474-.595.146-.23.268-.488.368-.772.099-.285.149-.58.149-.888 0-.592-.164-1.024-.491-1.296-.327-.273-.73-.409-1.21-.409-.117 0-.216.006-.298.018a.635.635 0 0 0-.158.035V35.46c-.62.106-1.128.16-1.525.16a9.25 9.25 0 0 1-1.56-.16V22.78z"})))},A=function(e){var t=e.color,a=e.width,n=e.height;return c.a.createElement("svg",{className:"bear-face",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:a,height:n,viewBox:"0 0 160 150"},c.a.createElement("defs",null,c.a.createElement("path",{fill:t,id:"a",d:"M.196.073H159.84v149.924H.196z"})),c.a.createElement("g",{fill:"none"},c.a.createElement("path",{fill:t,d:"M22.955 53a62.349 62.349 0 0 1 5.207-5.954c-3.813-2.414-6.37-6.657-6.37-11.537 0-7.528 6.065-13.648 13.526-13.648 6.672 0 12.194 4.907 13.31 11.322a70.625 70.625 0 0 1 7.372-2.8C53.708 21.002 45.323 14 35.318 14 23.565 14 14 23.65 14 35.509c0 7.22 3.547 13.595 8.955 17.491z"}),c.a.createElement("g",null,c.a.createElement("mask",{id:"b",fill:t},c.a.createElement("use",{xlinkHref:"#a"})),c.a.createElement("path",{fill:t,d:"M124.454 22.212c7.501 0 13.6 6.091 13.6 13.582 0 4.944-2.689 9.245-6.647 11.621a57.455 57.455 0 0 1 5.233 5.964c5.578-3.864 9.245-10.3 9.245-17.572 0-11.814-9.614-21.404-21.431-21.404-10.1 0-18.57 7.009-20.822 16.403a74.44 74.44 0 0 1 7.423 2.826c1.06-6.462 6.638-11.42 13.399-11.42z",mask:"url(#a)"}),c.a.createElement("path",{fill:t,d:"M4.815 84.265c0 36.242 33.731 65.732 75.208 65.732s75.208-29.49 75.208-65.732c0-8.278-1.73-16.338-5.17-23.969 6.253-6.611 9.78-15.387 9.78-24.502 0-19.698-16.046-35.721-35.769-35.721-13.525 0-25.672 7.49-31.785 19.33a86.495 86.495 0 0 0-24.717.023C61.467 7.576 49.308.073 35.772.073 16.046.073 0 16.096 0 35.793c0 9.194 3.58 18.019 9.92 24.643-3.387 7.592-5.105 15.603-5.105 23.83zm3.002-48.471c0-15.388 12.545-27.915 27.955-27.915 11.397 0 21.558 6.817 25.875 17.37l1.196 2.927 3.12-.56c9.183-1.692 18.784-1.692 27.941-.039l3.107.56 1.197-2.923c4.329-10.531 14.477-17.335 25.864-17.335 15.407 0 27.952 12.527 27.952 27.915 0 7.884-3.4 15.45-9.311 20.752l-2.227 1.996 1.35 2.67c2.318 4.566 3.922 9.322 4.789 14.192.57 2.989.864 6.039.864 9.167 0 15.883-7.602 30.265-19.876 40.666-12.202 10.466-29.037 16.937-47.59 16.937-13.04 0-25.216-3.203-35.54-8.734-19.283-10.11-32.13-28.217-32.13-48.869 0-8.366 2.125-16.302 5.91-23.46l1.232-2.468-2.24-1.996c-5.998-5.303-9.438-12.907-9.438-20.853z",mask:"url(#a)"})),c.a.createElement("path",{fill:t,d:"M32 103.505C32 121.98 53.765 137 80.5 137c26.745 0 48.5-15.02 48.5-33.495C129 85.033 107.245 70 80.5 70 53.765 70 32 85.033 32 103.505zm48.5-3.927c-6.144 0-10.895-2.941-10.895-5.463 0-2.519 4.75-5.463 10.895-5.463 6.144 0 10.895 2.944 10.895 5.463 0 2.522-4.75 5.463-10.895 5.463zm0-21.711c22.416 0 40.642 11.502 40.642 25.638 0 13.307-16.143 24.259-36.721 25.51v-21.862c8.57-1.254 14.829-6.524 14.829-13.038 0-7.47-8.237-13.317-18.75-13.317s-18.753 5.846-18.753 13.317c0 6.514 6.258 11.784 14.83 13.038v21.862c-20.576-1.251-36.723-12.203-36.723-25.51 0-14.136 18.227-25.638 40.646-25.638zM50.999 61c-6.665 0-6.665 10 0 10 6.662 0 6.675-10 0-10zM108.999 71c6.668 0 6.668-10 0-10-6.665 0-6.665 10 0 10z"})))},D=function(e){var t=e.onClick,a=e.className,n=e.width,l=e.height,r=e.color;return c.a.createElement("svg",{className:a,onClick:t,xmlns:"http://www.w3.org/2000/svg",width:n,height:l,viewBox:"0 0 27 25"},c.a.createElement("path",{fill:r,fillRule:"evenodd",d:"M16.922 12.948a.528.528 0 0 1 0-.794l9-8.527c.24-.227.358-.57.358-.793 0-.227-.118-.57-.358-.8L24.24.441a1.322 1.322 0 0 0-.837-.338c-.364 0-.605.111-.845.338l-9 8.527a.6.6 0 0 1-.838 0L3.72.44a1.335 1.335 0 0 0-.837-.338c-.24 0-.603.111-.845.338L.357 2.034c-.24.23-.357.573-.357.8 0 .222.117.566.357.793l9 8.527c.24.228.24.567 0 .794l-9 8.526c-.24.228-.357.572-.357.8 0 .228.117.566.357.793l1.681 1.593c.242.228.605.34.845.34.234 0 .597-.112.837-.34l9-8.526a.6.6 0 0 1 .838 0l9 8.526c.24.228.604.34.845.34.24 0 .597-.112.837-.34l1.682-1.593c.24-.227.358-.565.358-.793a1.2 1.2 0 0 0-.358-.8l-9-8.526z"}))},x=function(e){var t=e.onClick;return c.a.createElement("svg",{className:"menu-icon",onClick:t,xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"28pt",height:"24pt",viewBox:"0 0 28 24"},c.a.createElement("defs",null,c.a.createElement("clipPath",{id:"clip2"},c.a.createElement("path",{d:"M 0 0 L 28 0 L 28 5 L 0 5 Z M 0 0 "})),c.a.createElement("clipPath",{id:"clip3"},c.a.createElement("path",{d:"M 28 1.242188 C 28 0.5 27.535156 0 26.832031 0 L 1.167969 0 C 0.464844 0 0 0.5 0 1.242188 L 0 3.75 C 0 4.5 0.464844 5 1.167969 5 L 26.832031 5 C 27.535156 5 28 4.5 28 3.75 Z M 28 1.242188 "})),c.a.createElement("clipPath",{id:"clip4"},c.a.createElement("path",{d:"M 0 9 L 28 9 L 28 14 L 0 14 Z M 0 9 "})),c.a.createElement("clipPath",{id:"clip5"},c.a.createElement("path",{d:"M 28 10.25 C 28 9.5 27.535156 9 26.832031 9 L 1.167969 9 C 0.464844 9 0 9.5 0 10.25 L 0 12.75 C 0 13.5 0.464844 14 1.167969 14 L 26.832031 14 C 27.535156 14 28 13.5 28 12.75 Z M 28 10.25 "})),c.a.createElement("clipPath",{id:"clip6"},c.a.createElement("path",{d:"M 0 18 L 28 18 L 28 23 L 0 23 Z M 0 18 "})),c.a.createElement("clipPath",{id:"clip7"},c.a.createElement("path",{d:"M 28 19.25 C 28 18.5 27.535156 18 26.832031 18 L 1.167969 18 C 0.464844 18 0 18.5 0 19.25 L 0 21.75 C 0 22.5 0.464844 23 1.167969 23 L 26.832031 23 C 27.535156 23 28 22.5 28 21.75 Z M 28 19.25 "})),c.a.createElement("clipPath",{id:"clip1"},c.a.createElement("rect",{x:"0",y:"0",width:"28",height:"23"})),c.a.createElement("g",{id:"surface5",clipPath:"url(#clip1)"},c.a.createElement("g",{clipPath:"url(#clip2)",clipRule:"nonzero"},c.a.createElement("g",{clipPath:"url(#clip3)",clipRule:"evenodd"},c.a.createElement("path",{stroke:"none",fillRule:"nonzero",fill:"rgb(100%,100%,100%)",fillOpacity:"1",d:"M -5 10 L 33 10 L 33 -5 L -5 -5 Z M -5 10 "}))),c.a.createElement("g",{clipPath:"url(#clip4)",clipRule:"nonzero"},c.a.createElement("g",{clipPath:"url(#clip5)",clipRule:"evenodd"},c.a.createElement("path",{stroke:"none",fillRule:"nonzero",fill:"rgb(100%,100%,100%)",fillOpacity:"1",d:"M -5 19 L 33 19 L 33 4 L -5 4 Z M -5 19 "}))),c.a.createElement("g",{clipPath:"url(#clip6)",clipRule:"nonzero"},c.a.createElement("g",{clipPath:"url(#clip7)",clipRule:"evenodd"},c.a.createElement("path",{stroke:"none",fillRule:"nonzero",fill:"rgb(100%,100%,100%)",fillOpacity:"1",d:"M -5 28 L 33 28 L 33 13 L -5 13 Z M -5 28 "}))))),c.a.createElement("g",{id:"surface1"},c.a.createElement("use",{xlinkHref:"#surface5"})))},H=function(e){var t=e.menuIcon,a=e.onClick;return t?c.a.createElement(D,{onClick:a,className:"menu-icon",width:"21pt",height:"21pt",color:"#b0abab"}):c.a.createElement(x,{onClick:a})},R=function(e){var t=e.width,a=e.height;return c.a.createElement("svg",{className:"btn-add add",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:t,height:a,viewBox:"0 0 60 60"},c.a.createElement("defs",null,c.a.createElement("path",{id:"a",d:"M.039.128h59.883v59.234H.039z"})),c.a.createElement("g",{fill:"none",fillRule:"evenodd"},c.a.createElement("g",null,c.a.createElement("mask",{id:"b",fill:"#fff"},c.a.createElement("use",{xlinkHref:"#a"})),c.a.createElement("path",{fill:"#7ED321",d:"M29.987.128C13.47.128 0 13.405 0 29.743c0 16.342 13.42 29.62 29.987 29.62 16.515 0 29.935-13.278 29.935-29.62 0-16.338-13.42-29.615-29.935-29.615zm0 55.098c-14.193 0-25.755-11.44-25.755-25.483 0-14.042 11.562-25.48 25.755-25.48 14.194 0 25.754 11.438 25.754 25.48 0 14.043-11.56 25.483-25.754 25.483z",mask:"url(#b)"})),c.a.createElement("path",{fill:"#7ED321",d:"M43.768 27.395H32.105V15.804c0-1.175-.93-2.093-2.118-2.093-1.186 0-2.117.918-2.117 2.093v11.541H16.207c-1.187 0-2.117.918-2.117 2.095 0 1.174.93 2.091 2.117 2.091H27.87v11.542c0 1.174.93 2.092 2.117 2.092 1.187 0 2.118-.918 2.118-2.092V31.531h11.663c1.187 0 2.117-.917 2.117-2.091 0-1.177-.93-2.045-2.117-2.045z"})))},G=function(e){var t=e.active,a=S()();return c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:a.isMobile()?"39pt":"39",height:a.isMobile()?"39pt":"39",viewBox:"0 0 39 39"},c.a.createElement("g",{fill:"none",fillRule:"evenodd"},c.a.createElement("path",{fill:t?"#62AA14":"#FFF",d:"M32.814 8.83c-.209-.478-.57-.717-1.086-.717H8.195c-.514 0-.876.24-1.084.717-.209.503-.123.932.257 1.287l9.064 9.064v8.935c0 .32.117.595.35.828l4.706 4.706c.22.233.497.35.827.35.148 0 .3-.03.46-.092.478-.209.717-.57.717-1.085V19.181l9.064-9.064c.38-.355.466-.784.258-1.287z"}),t?c.a.createElement("rect",{width:"37",height:"37",x:"1",y:"1",stroke:"#62AA14",strokeWidth:"2",rx:"6"}):null))},B=function(e){var t=e.className;return c.a.createElement("svg",{className:t,xmlns:"http://www.w3.org/2000/svg",width:"150",height:"149",viewBox:"0 0 150 149"},c.a.createElement("path",{fill:"#B0B0B0",fillRule:"evenodd",d:"M21.9 21.815c-29.201 29.06-29.201 76.337.007 105.396 29.193 29.053 76.717 29.053 105.915-.007 29.208-29.052 29.201-76.329.008-105.382C98.624-7.238 51.1-7.238 21.9 21.815zm97.754 97.261c-24.692 24.576-64.887 24.576-89.579.007-24.705-24.574-24.698-64.566 0-89.14 24.692-24.568 64.88-24.568 89.586.006 24.699 24.568 24.693 64.56-.007 89.127zm-10.926-15.109a4.21 4.21 0 0 1-2.205 5.542 4.237 4.237 0 0 1-5.57-2.195c-4.089-9.395-13.738-15.465-24.596-15.465-11.106 0-20.819 6.07-24.733 15.458a4.252 4.252 0 0 1-3.916 2.6 4.213 4.213 0 0 1-1.62-.323c-2.165-.897-3.185-3.36-2.288-5.506 5.239-12.552 18.019-20.659 32.564-20.659 14.236 0 26.94 8.066 32.364 20.548zM41.835 52.933a3.429 3.429 0 0 1 1.275-4.706l12.774-7.297a3.472 3.472 0 0 1 4.728 1.275 3.43 3.43 0 0 1-1.274 4.705l-12.773 7.298a3.474 3.474 0 0 1-4.73-1.275zm19.811.15a6.044 6.044 0 0 1 0 8.587 6.127 6.127 0 0 1-8.636 0 6.057 6.057 0 0 1 0-8.586 6.127 6.127 0 0 1 8.636 0zm20.757-20.625a3.458 3.458 0 0 1 3.757-3.127l14.67 1.31a3.453 3.453 0 0 1 3.142 3.745 3.46 3.46 0 0 1-3.764 3.127l-14.663-1.317a3.444 3.444 0 0 1-3.142-3.738zM98.064 52.98a6.06 6.06 0 0 1 0 8.588c-2.39 2.372-6.26 2.372-8.636.005a6.053 6.053 0 0 1 0-8.593 6.127 6.127 0 0 1 8.636 0z"}))},J=(a(86),function(){var e=Object(p.c)((function(e){return e.serviceStore})),t=e.filter,a=e.menuIcon,n=Object(p.b)(),l=Object(z.h)();return"/entry"!==l.pathname?c.a.createElement("div",{className:"navBlock"},c.a.createElement("ul",{className:"nav-header"},c.a.createElement("li",{className:"/jogs"===l.pathname?"active":null},c.a.createElement(E.b,{to:"/jogs"},"JOGS")),c.a.createElement("li",{className:"/info"===l.pathname?"active":null},c.a.createElement(E.b,{to:"/info"},"INFO")),c.a.createElement("li",{className:"/conact"===l.pathname?"active":null},c.a.createElement(E.b,{to:"/contact"},"CONTACT US"))),c.a.createElement("div",{className:a||"/jogs"!==l.pathname?"filter-block disabled":"filter-block",onClick:function(){return n({type:"TOGGLE_FILTER"})}},t?c.a.createElement(G,{active:!0}):c.a.createElement(G,null)),c.a.createElement(H,{menuIcon:a,onClick:function(){return n({type:"SWITCH_MENU_ICON"})}})):null}),P=a(34),U=a.n(P),Z=(a(88),a(61),function(e){var t=e.filter,a=e.filterFrom,n=e.filterTo,l=Object(p.b)();return c.a.createElement("div",{className:t?"date-form":"date-form-hide"},c.a.createElement("div",{className:"date-form-input"},c.a.createElement("div",{className:"date-input"},"Date from",c.a.createElement(U.a,{selected:a,className:"date",dateFormat:"dd.MM.yyyy",withPortal:!0,onChange:function(e){return l({type:"CHANGE_FILTER_FROM",value:e})}})),c.a.createElement("div",{className:"date-input"},"Date to",c.a.createElement(U.a,{selected:n,className:"date",dateFormat:"dd.MM.yyyy",withPortal:!0,onChange:function(e){return l({type:"CHANGE_FILTER_TO",value:e})}}))))}),W=(a(145),function(){var e=Object(p.c)((function(e){return e.serviceStore})),t=e.filter,a=e.menuIcon,n=Object(p.c)((function(e){return e.pageStore})),l=n.filterFrom,r=n.filterTo;return c.a.createElement("div",{className:"head"},c.a.createElement("div",{className:a?"header white":"header"},c.a.createElement(F,null),c.a.createElement(J,null)),c.a.createElement(Z,{filter:t,filterFrom:l,filterTo:r}))}),V=function(e){var t=Object(p.c)((function(e){return e.serviceStore})).menuIcon,a=Object(z.h)(),n=Object(p.b)();return c.a.createElement("div",{className:"container"},t?c.a.createElement("ul",{className:"nav-header"},c.a.createElement("li",{className:"/jogs"===a.pathname?"active":null},c.a.createElement(E.b,{to:"/jogs",onClick:function(){return n({type:"SWITCH_MENU_ICON"})}},"JOGS")),c.a.createElement("li",{className:"/info"===a.pathname?"active":null},c.a.createElement(E.b,{to:"/info",onClick:function(){return n({type:"SWITCH_MENU_ICON"})}},"INFO")),c.a.createElement("li",{className:"/conact"===a.pathname?"active":null},c.a.createElement(E.b,{to:"/contact",onClick:function(){return n({type:"SWITCH_MENU_ICON"})}},"CONTACT US"))):c.a.createElement(e,null))},K=(a(146),function(){var e=Object(p.b)(),t=Object(p.c)((function(e){return e.pageStore})).jogs,a=c.a.createElement("div",{className:"sad-block"},c.a.createElement(B,{className:"sad-emoticon"}),c.a.createElement("p",null,"Nothing is there"),c.a.createElement("input",{type:"button",value:"Create your first jog",className:"btn-create",onClick:function(){e(k())}}));return c.a.createElement("div",{className:"container"},0!==t.length?null:a)}),X=(a(147),function(){var e=Object(p.c)((function(e){return e.pageStore})),t=e.jogs,a=e.filterFrom,n=e.filterTo,l=Object(p.b)(),r=function(e,t){if(a<=e.date&&n>=e.date)return c.a.createElement("div",{className:"sport-item",key:"".concat(t).concat(e.id)},c.a.createElement("div",{className:"human-block"},c.a.createElement(I,{className:"human-icon",onClick:function(){return l({type:"MOBILE_CLICK_JOG",id:e.id})}}),c.a.createElement("div",{className:e.mobile_btn?"a a-active":"a",onClick:function(){return l((t=e,function(e){e(y(t)),e(k()),e(M())}));var t}},"Edit"),c.a.createElement("div",{className:e.mobile_btn?"b b-active":"b",onClick:function(){return l(function(e,t){var a={jog_id:e,user_id:t};return function(t){w.fetchApi.deleteJog(a).then((function(){t(_(e))}))}}(e.id,e.user_id))}},"Delete")),c.a.createElement("ul",null,c.a.createElement("li",{className:"date-workout"},function(e){var t=new Date(e).toLocaleString("en",{day:"2-digit"}),a=new Date(e).toLocaleString("en",{month:"2-digit"}),n=new Date(e).getFullYear();return"".concat(t,".").concat(a,".").concat(n)}(e.date)),c.a.createElement("li",null,"Speed: ",c.a.createElement("u",null,function(e,t){var a=e/1e3,n=t/60;return Math.trunc(a/n*100)/100}(e.distance,e.time)," km/h")),c.a.createElement("li",null,"Distance: ",c.a.createElement("u",null,e.distance)),c.a.createElement("li",null,"Time: ",c.a.createElement("u",null,e.time," min"))))};return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"sport-list"},0!==t.length?t.map((function(e,t){return r(e,t)})):c.a.createElement(K,null)))}),q=function(){return V(X)},Y=(a(148),function(){var e=Object(p.c)((function(e){return e.serviceStore.modalState})),t=Object(p.c)((function(e){return e.pageStore})),a=Object(p.b)(),n=function(e){var t=e.target,n=t.name,c=t.value;a(function(e,t){return{type:"ON_CHANGE",name:e,value:t}}(n,c))};return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"block-add"},c.a.createElement(E.b,{to:"/jogs"},c.a.createElement(D,{onClick:function(){return a((function(e){e(k()),e(C()),e(M())}))},className:"cancel-icon",width:"27",height:"27",color:"#ffffff"})),c.a.createElement("form",{className:"form-add",onSubmit:function(n){var c=t.distance,l=t.time,r=t.date;n.preventDefault(),a(e?function(e,t,a){var n={distance:e,time:t,date:a};return function(e){w.fetchApi.postJog(n).then((function(){e(j()),e(k()),e(C())}))}}(c,l,r):function(e){var t={distance:e.distance,time:e.time,date:new Date(e.date).toLocaleDateString(),jog_id:e.id,user_id:e.user_id};return function(e){w.fetchApi.editJog(t).then((function(){e(j()),e(k()),e(C()),e(M())}))}}(t))}},c.a.createElement("label",null,"Distance",c.a.createElement("input",{type:"number",name:"distance",placeholder:"km-m",value:t.distance,onChange:n,pattern:"[0-9]",required:!0})),c.a.createElement("label",null,"Time",c.a.createElement("input",{type:"number",name:"time",placeholder:"min",value:t.time,onChange:n,pattern:"[0-9]",required:!0})),c.a.createElement("label",null,"Date",c.a.createElement("div",null,c.a.createElement(U.a,{selected:t.date,dateFormat:"dd.MM.yyyy",onChange:function(e){return a({type:"CHANGE_MODAL_DATE",value:e})}}))),c.a.createElement("input",{type:"submit",value:e?"Save":"Edit"}))))}),Q=(a(149),function(){var e=S()(),t=Object(p.c)((function(e){return e.serviceStore})),a=t.modal,l=t.isAuth,r=t.menuIcon,i=Object(p.c)((function(e){return e.pageStore})).jogs,o=Object(p.b)();Object(n.useEffect)((function(){o(j())}),[l]);var u=r?null:c.a.createElement("div",{onClick:function(){o(k())}},e.isMobile()?c.a.createElement(R,{width:"47pt",height:"47pt"}):c.a.createElement(R,{width:60,height:60}));return c.a.createElement("div",{className:"grid-container"},c.a.createElement(W,null),a?c.a.createElement(Y,null):c.a.createElement(q,null),a||0===i.length?null:u)}),$=function(){var e=Object(p.b)(),t=S()();return c.a.createElement("div",{className:"grid-container"},c.a.createElement(W,null),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"block-in"},t.isMobile()?c.a.createElement(A,{color:"#e990f9",width:"160pt",height:"150pt"}):c.a.createElement(A,{color:"#ffff",width:160,height:150}),c.a.createElement(E.b,{to:"/jogs",className:"btn-in",onClick:function(){return e((function(e){w.fetchApi.logToken().then((function(t){w.set_token(t.response.access_token),localStorage.setItem("jwt",t.response.access_token),e(N())}))}))}},"Let me in"))))},ee=function(){return c.a.createElement("div",{className:"block-info"},c.a.createElement("div",{className:"info"},"INFO"),c.a.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."),c.a.createElement("p",null,"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."))},te=function(){return V(ee)},ae=(a(150),function(){return c.a.createElement("div",{className:"grid-container"},c.a.createElement(W,null),c.a.createElement("div",{className:"container"},c.a.createElement(te,null)))}),ne=function(){return c.a.createElement("div",{className:"block-in contact"},c.a.createElement("h3",null,"Contact us"),c.a.createElement("ul",{className:"contact-block"},c.a.createElement("li",null,"London Baker street 221b"),c.a.createElement("li",null,"Mr. LogoBear Doyle"),c.a.createElement("li",null,"+44 203 769 18 34")))},ce=function(){return V(ne)},le=(a(151),function(){return c.a.createElement("div",{className:"grid-container"},c.a.createElement(W,null),c.a.createElement(ce,null))}),re=(a(152),function(){var e=Object(p.c)((function(e){return e.serviceStore})).isAuth,t=Object(z.g)(),a=Object(p.b)();return Object(n.useEffect)((function(){var n=localStorage.getItem("jwt");e?t.push("/jogs"):e||null===n?t.push("/entry"):a(N(n))}),[e]),c.a.createElement(z.d,null,c.a.createElement(z.b,{exact:!0,path:"/entry",component:$}),c.a.createElement(z.b,{exact:!0,path:"/jogs",component:Q}),c.a.createElement(z.b,{path:"/info",component:ae}),c.a.createElement(z.b,{path:"/contact",component:le}),c.a.createElement(z.a,{to:"/entry"}))});f.a.render(c.a.createElement(p.a,{store:d},c.a.createElement(E.a,null,c.a.createElement(re,{dispatch:d.dispatch.bind(d)}))),document.getElementById("root"))},60:function(e,t,a){},76:function(e,t,a){e.exports=a(153)},86:function(e,t,a){},88:function(e,t,a){}},[[76,1,2]]]);
//# sourceMappingURL=main.77e66ad3.chunk.js.map