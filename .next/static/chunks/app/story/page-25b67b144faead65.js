(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[240],{8308:()=>{},938:(e,t,s)=>{Promise.resolve().then(s.bind(s,8996)),Promise.resolve().then(s.bind(s,4268))},8996:(e,t,s)=>{"use strict";s.d(t,{StoryComposePanel:()=>i});var n=s(5432),a=s(789),o=s(4436),r=s(3463),l=s.n(r);async function c(e){let{url:t,message:s}=e;try{console.log("calling send message: ".concat(s)),console.log(t);let e=await fetch(t+"/story",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({subject:"",name:"".concat(s)})});console.log(e)}catch(e){console.error("Error sending message:",e)}}function i(e){let{url:t}=e,[s,r]=(0,o.useState)("");return(0,n.jsxs)(a.default,{className:l().form,action:"/",onSubmit:e=>{e.preventDefault(),c({url:t,message:s})},children:[(0,n.jsx)("textarea",{name:"message",className:l().textarea,onChange:e=>{r(e.target.value)}}),(0,n.jsx)("button",{type:"submit",className:l().button,children:"Submit"})]})}},4268:(e,t,s)=>{"use strict";s.d(t,{StoryReadPanel:()=>l});var n=s(5432),a=s(5617),o=s(4436);function r(e){let{txt:t}=e,s=t.replace(/\n/g,"<br>");return(0,n.jsx)("li",{dangerouslySetInnerHTML:{__html:s}})}function l(e){let{subject:t}=e;t="story";let[s,l]=(0,o.useState)([]);async function c(){(await (0,a.hd)({servers:"ws://localhost:8080"})).subscribe(t,{callback:(e,t)=>{e?console.error(e):l(e=>[...e,new TextDecoder().decode(t.data)])}})}return(0,o.useEffect)(()=>{c()},[]),(0,n.jsx)("div",{className:"message-panel",children:(0,n.jsx)("ul",{children:s.map((e,t)=>(0,n.jsx)(r,{txt:e},t))})})}},3463:e=>{e.exports={form:"StoryComposePanel_form__vCdCs",textarea:"StoryComposePanel_textarea__SAfAY",button:"StoryComposePanel_button__C3k52"}}},e=>{var t=t=>e(e.s=t);e.O(0,[584,653,921,871,358],()=>t(938)),_N_E=e.O()}]);