(this["webpackJsonpcursor-redux"]=this["webpackJsonpcursor-redux"]||[]).push([[0],{25:function(e,a,t){},44:function(e,a,t){"use strict";t.r(a);var s=t(0),c=t.n(s),n=t(6),o=t.n(n),i=(t(25),t(3)),r=t(8),l=t(20),d=t.p+"static/media/verified.23524915.svg",j=t(2);function h(){return Math.floor(100*Math.random())}var m=function(e){return Object(j.jsxs)("div",{className:"post_hw22",children:[Object(j.jsxs)("header",{className:"header_hw22",children:[Object(j.jsx)("div",{className:"header_icon_hw22",children:Object(j.jsx)("img",{src:e.authorIcon,alt:"authorIcon"})}),Object(j.jsxs)("div",{className:"header_content_hw22",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{className:"name_hw22",children:e.authorName}),Object(j.jsx)("span",{className:"verified",children:Object(j.jsx)("img",{src:d,alt:"verified"})}),Object(j.jsxs)("span",{className:"header_additional",children:[e.authorNickname," - ",e.date]})]}),Object(j.jsx)("div",{className:"content_hw22",children:e.content})]})]}),Object(j.jsx)("main",{className:"body_hw22",children:Object(j.jsx)("div",{className:"image_hw22",children:Object(j.jsx)("img",{src:e.image,alt:"post_image"})})}),Object(j.jsx)("footer",{className:"footer_hw22",children:Object(j.jsxs)("div",{className:"icons_hw22",children:[Object(j.jsx)("div",{className:"footer_icon_hw22",children:Object(j.jsxs)("span",{className:"footer_value",children:[" ",Object(j.jsx)("img",{src:"https://image.flaticon.com/icons/png/512/134/134783.png",alt:"comment"})," ",h()]})}),Object(j.jsx)("div",{className:"footer_icon_hw22",children:Object(j.jsxs)("span",{className:"footer_value",children:[" ",Object(j.jsx)("img",{src:"https://image.flaticon.com/icons/png/512/4140/4140694.png",alt:"reply"})," ",h()]})}),Object(j.jsx)("div",{className:"footer_icon_hw22",children:Object(j.jsxs)("span",{className:"footer_value",children:[" ",Object(j.jsx)("img",{src:"https://image.flaticon.com/icons/png/512/1077/1077035.png",alt:"like"})," ",h()]})}),Object(j.jsx)("div",{className:"footer_icon_hw22",children:Object(j.jsx)(l.a,{})})]})})]})},b=t(12),u={"@dart_vader":{authorName:"Anakin Skywalker",authorIcon:"https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg",authorNickname:"@dart_vader"},"@Yoda":{authorName:"Yoda",authorIcon:"https://www.liveabout.com/thmb/OHyay7RPSFHxasgJ9_Okz1Jhu-Q=/1167x1167/smart/filters:no_upscale()/yoda-56a8f97a3df78cf772a263b4.jpg",authorNickname:"@Yoda"},"@Han_Solo":{authorName:"Han Solo",authorIcon:"https://compote.slate.com/images/2b6fb34a-8047-4e17-b3d5-64987519657d.jpg",authorNickname:"@Han_Solo"}},p=t(19);var O=function(){var e=u["@Yoda"],a=Object(s.useState)("May the force be with you!"),t=Object(b.a)(a,2),c=t[0],n=t[1],o=Object(s.useState)("https://source.unsplash.com/600x400/?star-wars"),l=Object(b.a)(o,2),d=l[0],h=l[1],m=Object(s.useState)(e),O=Object(b.a)(m,2),_=O[0],x=O[1],v=Object(r.b)(),g=function(e){var a=e.target,t=a.name,s=a.value;switch(t){case"CONTENT":n(s);break;case"POST_IMAGE":h(s);break;case"POST_AUTHOR":x(u[s])}},w={type:"add-new-post",payload:Object(i.a)({content:c,image:d},_)},f=[{value:"@Yoda",label:"@Yoda"},{value:"@Han_Solo",label:"@Han_Solo"},{value:"@dart_vader",label:"@dart_vader"}];return Object(j.jsx)("div",{className:"new_post_container",children:Object(j.jsxs)("div",{className:"new_post",children:[Object(j.jsx)("h1",{children:"Create new post"}),Object(j.jsxs)("form",{children:[Object(j.jsxs)("label",{className:"new_post_input",children:["Your name",Object(j.jsxs)("select",{name:"POST_AUTHOR",onInput:g,value:_,className:"select_name",children:[Object(j.jsx)("option",{value:"@Yoda",className:"name_option",children:"@Yoda"}),Object(j.jsx)("option",{value:"@dart_vader",className:"name_option",children:"@dart_vader"}),Object(j.jsx)("option",{value:"@Han_Solo",className:"name_option",children:"@Han_Solo"})]}),Object(j.jsx)(p.a,{className:"select_name",options:f,value:f.value})]}),Object(j.jsxs)("label",{className:"new_post_input",children:["Type your text",Object(j.jsx)("textarea",{name:"CONTENT",onInput:g,value:c,placeholder:"What is new?"})]}),Object(j.jsxs)("label",{className:"new_post_input",children:["Link to your image",Object(j.jsx)("input",{type:"text",name:"POST_IMAGE",onInput:g,value:d,placeholder:"https://image.com"})]}),Object(j.jsx)("button",{className:"new_post_button",onClick:function(e){e.preventDefault(),v(w)},children:"Publish"})]})]})})};var _=function(){var e=Object(r.c)((function(e){return e.posts}));return Object(j.jsxs)("div",{children:[Object(j.jsx)(O,{}),Object(j.jsx)("div",{className:"container_hw22",children:e.map((function(e){return Object(s.createElement)(m,Object(i.a)(Object(i.a)({},e),{},{key:e.id}))}))})]})},x=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,45)).then((function(a){var t=a.getCLS,s=a.getFID,c=a.getFCP,n=a.getLCP,o=a.getTTFB;t(e),s(e),c(e),n(e),o(e)}))},v=t(18),g=t(10),w={posts:[{id:Math.floor(Math.random()*Date.now()),authorName:"Anakin Skywalker",authorIcon:"https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg",authorNickname:"@dart_vader",content:"WTF? Who is Ray? Why she is Skywalker? Luke...?",image:"https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale",date:"26 Feb"},{id:Math.floor(Math.random()*Date.now()),authorName:"Yoda",authorIcon:"https://www.liveabout.com/thmb/OHyay7RPSFHxasgJ9_Okz1Jhu-Q=/1167x1167/smart/filters:no_upscale()/yoda-56a8f97a3df78cf772a263b4.jpg",authorNickname:"@yoda",content:"Have you seen my little one's movie debut?",image:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bbyoda-1575303784.jpeg?resize=980:*",date:"01 May"}]};var f=Object(v.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"add-new-post":return Object(i.a)(Object(i.a)({},e),{},{posts:[Object(i.a)(Object(i.a)({},a.payload),{},{id:Date.now(),date:"".concat(Date().toString().slice(4,10)),comments:0,retweets:0,likes:0})].concat(Object(g.a)(e.posts))});default:return e}}));o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(r.a,{store:f,children:Object(j.jsx)(_,{})})}),document.getElementById("root")),x()}},[[44,1,2]]]);
//# sourceMappingURL=main.99e49232.chunk.js.map