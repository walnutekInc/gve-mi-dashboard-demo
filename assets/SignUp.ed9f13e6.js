var x=Object.defineProperty;var E=(c,e,s)=>e in c?x(c,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):c[e]=s;var i=(c,e,s)=>(E(c,typeof e!="symbol"?e+"":e,s),s);import{g as S}from"./assets.32d46bfb.js";import{D as v,i as q,ac as A,at as L,ad as C,Q,I as B,C as N,G as F,R as U,_ as D,l as I,x as a,w as k,y as b,o as O,m as t,O as f}from"./index.ddcf840a.js";import{c as $,a as g,b as R}from"./object.c8d1640d.js";import{S as y}from"./sweetalert2.6dde243e.js";const _={minLength:8,checkUppercase:!0,checkLowercase:!0,checkDigit:!0,checkChar:!0,scoreHighlightClass:"active"},p={componentName:"password-meter",instanseQuery:"[data-kt-password-meter]",inputQuery:"input[type]",visibilityQuery:'[data-kt-password-meter-control="visibility"]',highlightQuery:'[data-kt-password-meter-control="highlight"]'},d=class{constructor(e,s,o){i(this,"element");i(this,"inputElement");i(this,"visibilityElement");i(this,"highlightElement");i(this,"options");i(this,"queries");i(this,"score");i(this,"checkSteps");i(this,"reset",()=>{this.score=0,this.highlight()});this.element=e,this.options=Object.assign(_,s),this.queries=o,this.score=0,this.checkSteps=5,this.inputElement=this.element.querySelector(this.queries.inputQuery),this.visibilityElement=this.element.querySelector(this.queries.visibilityQuery),this.highlightElement=this.element.querySelector(this.queries.highlightQuery),this.handlers(),v.set(this.element,this.queries.componentName,this)}handlers(){this.inputElement&&this.inputElement.addEventListener("input",()=>{this.check()}),this.visibilityElement&&this.visibilityElement.addEventListener("click",()=>{this.visitbility()})}visitbility(){if(this.visibilityElement&&this.inputElement){const e=this.visibilityElement.querySelector("i:not(.d-none), .svg-icon:not(.d-none)"),s=this.visibilityElement.querySelector("i.d-none, .svg-icon.d-none");(this.inputElement.getAttribute("type")||"")==="password"?this.inputElement.setAttribute("type","text"):this.inputElement.setAttribute("type","password"),e==null||e.classList.add("d-none"),s==null||s.classList.remove("d-none"),this.inputElement.focus()}}checkScore(){return 0}checkLength(){return this.inputElement?this.inputElement.value.length>=this.options.minLength:!1}checkLowerCase(){const e=this.inputElement?this.inputElement.value:"";return/[a-z]/.test(e)}checkUppercase(){const e=this.inputElement?this.inputElement.value:"";return/[A-Z]/.test(e)}checkDigit(){const e=this.inputElement?this.inputElement.value:"";return/[0-9]/.test(e)}checkChar(){const e=this.inputElement?this.inputElement.value:"";return/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(e)}getCheckScore(){let e=1;return this.options.checkUppercase&&e++,this.options.checkLowercase&&e++,this.options.checkDigit&&e++,this.options.checkChar&&e++,this.checkSteps=e,100/this.checkSteps}highlight(){const e=this.highlightElement?[].slice.call(this.highlightElement.querySelectorAll("div")):[],s=e.length;let o=0;const u=this.getCheckScore(),l=this.getScore();e.map(n=>{o++,u*o*(this.checkSteps/s)<=l?n.classList.add("active"):n.classList.remove("active")})}getScore(){return this.score}check(){let e=0;const s=this.getCheckScore();this.checkLength()&&(e=e+s),this.options.checkUppercase&&this.checkLowerCase()&&(e=e+s),this.options.checkLowercase&&this.checkUppercase()&&(e=e+s),this.options.checkDigit&&this.checkDigit()&&(e=e+s),this.options.checkChar&&this.checkChar()&&(e=e+s),this.score=e,this.highlight()}};let m=d;i(m,"getInstance",(e,s=p.componentName)=>{const o=v.get(e,s);if(o)return o}),i(m,"createInstances",(e=p.instanseQuery,s=_,o=p)=>{document.body.querySelectorAll(e).forEach(l=>{const n=l;let r=d.getInstance(n);r||(r=new d(n,s,o))})}),i(m,"createInsance",(e=p.instanseQuery,s=_,o=p)=>{const u=document.body.querySelector(e);if(!u)return;const l=u;let n=d.getInstance(l);return n||(n=new d(l,s,o)),n}),i(m,"bootstrap",(e=p.instanseQuery)=>{d.createInstances(e)}),i(m,"reinitialization",(e=p.instanseQuery)=>{d.createInstances(e)});const T=q({name:"sign-up",components:{Field:A,VForm:L,ErrorMessage:C},setup(){const c=Q(),e=U(),s=B(null),o=$().shape({first_name:g().required().label("Name"),last_name:g().required().label("Surname"),email:g().min(4).required().email().label("Email"),password:g().required().label("Password"),password_confirmation:g().required().oneOf([R("password"),null],"Passwords must match").label("Password Confirmation")});return N(()=>{F(()=>{m.bootstrap()})}),{registration:o,onSubmitRegister:async l=>{var r,h;l=l,c.logout(),s.value.disabled=!0,(r=s.value)==null||r.setAttribute("data-kt-indicator","on"),await c.register(l);const n=Object.values(c.errors);n?y.fire({text:n[0],icon:"error",buttonsStyling:!1,confirmButtonText:"Try again!",heightAuto:!1,customClass:{confirmButton:"btn fw-semobold btn-light-danger"}}):y.fire({text:"You have successfully logged in!",icon:"success",buttonsStyling:!1,confirmButtonText:"Ok, got it!",heightAuto:!1,customClass:{confirmButton:"btn fw-semobold btn-light-primary"}}).then(function(){e.push({name:"dashboard"})}),(h=s.value)==null||h.removeAttribute("data-kt-indicator"),s.value.disabled=!1},submitButton:s,getAssetPath:S}}}),V={class:"w-lg-500px p-10"},P={class:"mb-10 text-center"},M=t("h1",{class:"text-dark mb-3"},"Create an Account",-1),j={class:"text-gray-400 fw-semobold fs-4"},z={type:"button",class:"btn btn-light-primary fw-bold w-100 mb-10"},G=["src"],H=t("div",{class:"d-flex align-items-center mb-10"},[t("div",{class:"border-bottom border-gray-300 mw-50 w-100"}),t("span",{class:"fw-semobold text-gray-400 fs-7 mx-2"},"OR"),t("div",{class:"border-bottom border-gray-300 mw-50 w-100"})],-1),Y={class:"row fv-row mb-7"},Z={class:"col-xl-6"},J=t("label",{class:"form-label fw-bold text-dark fs-6"},"First Name",-1),K={class:"fv-plugins-message-container"},W={class:"fv-help-block"},X={class:"col-xl-6"},ee=t("label",{class:"form-label fw-bold text-dark fs-6"},"Last Name",-1),te={class:"fv-plugins-message-container"},se={class:"fv-help-block"},oe={class:"fv-row mb-7"},ie=t("label",{class:"form-label fw-bold text-dark fs-6"},"Email",-1),ne={class:"fv-plugins-message-container"},ce={class:"fv-help-block"},ae={class:"mb-10 fv-row","data-kt-password-meter":"true"},re={class:"mb-1"},le=t("label",{class:"form-label fw-bold text-dark fs-6"}," Password ",-1),he={class:"position-relative mb-3"},me={class:"fv-plugins-message-container"},de={class:"fv-help-block"},ue=t("div",{class:"d-flex align-items-center mb-3","data-kt-password-meter-control":"highlight"},[t("div",{class:"flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"}),t("div",{class:"flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"}),t("div",{class:"flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"}),t("div",{class:"flex-grow-1 bg-secondary bg-active-success rounded h-5px"})],-1),pe=t("div",{class:"text-muted"}," Use 8 or more characters with a mix of letters, numbers & symbols. ",-1),fe={class:"fv-row mb-5"},ge=t("label",{class:"form-label fw-bold text-dark fs-6"},"Confirm Password",-1),be={class:"fv-plugins-message-container"},_e={class:"fv-help-block"},ve={class:"fv-row mb-10"},ke={class:"form-check form-check-custom form-check-solid"},ye=t("span",{class:"form-check-label fw-semobold text-gray-700 fs-6"},[f(" I Agree & "),t("a",{href:"#",class:"ms-1 link-primary"},"Terms and conditions"),f(". ")],-1),we={class:"text-center"},xe={id:"kt_sign_up_submit",ref:"submitButton",type:"submit",class:"btn btn-lg btn-primary"},Ee=t("span",{class:"indicator-label"}," Submit ",-1),Se=t("span",{class:"indicator-progress"},[f(" Please wait... "),t("span",{class:"spinner-border spinner-border-sm align-middle ms-2"})],-1),qe=[Ee,Se];function Ae(c,e,s,o,u,l){const n=b("router-link"),r=b("Field"),h=b("ErrorMessage"),w=b("VForm");return O(),I("div",V,[a(w,{class:"form w-100 fv-plugins-bootstrap5 fv-plugins-framework",novalidate:"",onSubmit:c.onSubmitRegister,id:"kt_login_signup_form","validation-schema":c.registration},{default:k(()=>[t("div",P,[M,t("div",j,[f(" Already have an account? "),a(n,{to:"/sign-in",class:"link-primary fw-bold"},{default:k(()=>[f(" Sign in here ")]),_:1})])]),t("button",z,[t("img",{alt:"Logo",src:c.getAssetPath("media/svg/brand-logos/google-icon.svg"),class:"h-20px me-3"},null,8,G),f(" Sign in with Google ")]),H,t("div",Y,[t("div",Z,[J,a(r,{class:"form-control form-control-lg form-control-solid",type:"text",placeholder:"",name:"first_name",autocomplete:"off"}),t("div",K,[t("div",W,[a(h,{name:"first_name"})])])]),t("div",X,[ee,a(r,{class:"form-control form-control-lg form-control-solid",type:"text",placeholder:"",name:"last_name",autocomplete:"off"}),t("div",te,[t("div",se,[a(h,{name:"last_name"})])])])]),t("div",oe,[ie,a(r,{class:"form-control form-control-lg form-control-solid",type:"email",placeholder:"",name:"email",autocomplete:"off"}),t("div",ne,[t("div",ce,[a(h,{name:"email"})])])]),t("div",ae,[t("div",re,[le,t("div",he,[a(r,{class:"form-control form-control-lg form-control-solid",type:"password",placeholder:"",name:"password",autocomplete:"off"}),t("div",me,[t("div",de,[a(h,{name:"password"})])])]),ue]),pe]),t("div",fe,[ge,a(r,{class:"form-control form-control-lg form-control-solid",type:"password",placeholder:"",name:"password_confirmation",autocomplete:"off"}),t("div",be,[t("div",_e,[a(h,{name:"password_confirmation"})])])]),t("div",ve,[t("label",ke,[a(r,{class:"form-check-input",type:"checkbox",name:"toc",value:"1"}),ye])]),t("div",we,[t("button",xe,qe,512)])]),_:1},8,["onSubmit","validation-schema"])])}const Fe=D(T,[["render",Ae]]);export{Fe as default};
