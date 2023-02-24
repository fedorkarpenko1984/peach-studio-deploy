(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();const s={currentArea:"all",newArea:null,currentCity:"moscow",dropdownOpen:!1};function y(o){const t=document.querySelectorAll(".map__city-group");s.currentArea!==o.getAttribute("data-area")&&(s.currentArea==="all"&&t.forEach(r=>{r.id!==o.getAttribute("data-area")&&(r.style.display="none")}),o.getAttribute("data-area")==="all"&&t.forEach(r=>r.style.display="block"),s.currentArea!=="all"&&o.getAttribute("data-area")!=="all"&&(document.getElementById(`${s.currentArea}`).style.display="none",document.getElementById(`${o.getAttribute("data-area")}`).style.display="block"),document.querySelector(`[data-area="${s.currentArea}"]`).classList.remove("map-navigation__areas__area_active"),o.classList.add("map-navigation__areas__area_active"),s.currentArea=o.getAttribute("data-area"))}function u(o,t){const r=document.querySelectorAll(`[data-city="${o}"]`);r[0].style.fill=t,r[1].style.fill=t}function m(){const o=document.querySelector(".map-navigation__open-dropdown__arrow"),t=document.querySelector(".city-lists"),r=document.querySelector(".map-module");document.querySelector(".map"),document.querySelector(".map-navigation__open-dropdown").onclick=()=>{s.dropdownOpen?(o.style.transform="rotate(0deg)",t.style.opacity="0",window.innerWidth<576&&(r.style.overflow="scroll")):(o.style.transform="rotate(-180deg)",t.style.opacity="1",window.innerWidth<576&&(r.style.overflow="hidden")),s.dropdownOpen=!s.dropdownOpen},document.querySelector(".map").onclick=()=>{s.dropdownOpen&&(o.style.transform="rotate(0deg)",t.style.opacity="0")},document.querySelectorAll(".map-navigation__areas__area").forEach(e=>{e.onclick=()=>{e.getAttribute("data-area")!==s.currentArea&&u(s.currentCity,"#444"),y(e),e.getAttribute("data-area")==="moscow"&&(u("moscow","#A30C33"),s.currentCity="moscow")}})}function f(){const o=document.querySelector(".slider__wrapper");o.style.height=Math.round(o.offsetWidth*.751)+"px";const t=document.querySelectorAll(".slider__wrapper__slide");t[0].style.display="block",window.addEventListener("resize",()=>{o.style.height=Math.round(o.offsetWidth*.751)+"px"});const r=[],l=document.querySelector(".slider__indication");l.style.gridTemplateColumns=`repeat(${t.length}, 1fr)`;for(let i=0;i<t.length;i++){const p=document.createElement("div");p.classList.add("slider__indication__indicator"),l.append(p),r.push(p)}r[0].style.background="#A30C33";function e(i,p){p.style.left="100%",p.style.zIndex="100",p.style.display="block",p.style.left="0%",i.style.zIndex="0",i.style.dislay="none"}function n(i,p){r[i].style.background="#A30C33",r[p].style.background="rgba(0, 0, 0, 0.1)"}function d(){return setInterval(()=>{let i=a+1;i>=t.length&&(i=0),e(t[a],t[i]),n(i,a),a=i},3e3)}let a=0,c=d();const h=document.querySelectorAll(".slider__arrows__arrow");h[1].onclick=()=>{clearInterval(c);let i=a+1;i>=t.length&&(i=0),e(t[a],t[i]),n(i,a),a=i,c=d()},h[0].onclick=()=>{clearInterval(c);let i=a-1;i<0&&(i=t.length-1),e(t[a],t[i]),n(i,a),a=i,c=d()}}class g extends HTMLElement{constructor(){super();const t=this.attributes.src.value;this.attachShadow({mode:"open"}).innerHTML=`<style>
                      .container {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                      }
                      .wrapper {
                        display: flex;
                        align-items: center;
                        overflow: hidden;
                        border-radius: 50%;
                        justify-content: center
                      }
                    </style>
                    <div class="container">
                      <div class="wrapper">
                        <img src="${t}" />
                      </div>
                      <p style="text-align: center; margin-top: 4px;margin-bottom: 0;">${this.title}</p>
                    </div>`;const r=this.shadowRoot.querySelector(".wrapper"),l=this.shadowRoot.querySelector(".container"),e=this.shadowRoot.querySelector("img");function n(){window.innerWidth<=576?(r.style.width="80px",r.style.height="80px",l.style.width="125px",e.style.height="36px"):(r.style.width="110px",r.style.height="110px",l.style.width="150px",e.style.height="48px")}n(),window.addEventListener("resize",n),r.style.background=this.attributes.color.value}}const w={воронеж:"voronezh",ярославль:"yaroslavl",белгород:"belgorod","санкт-петербург":"saint-petersburg",калининград:"kaliningrad","ростов-на-дону":"rostov-on-don",краснодар:"krasnodar",волгоград:"volgograd",казань:"kazan",самара:"samara",уфа:"ufa",оренбург:"orenburg","нижний новгород":"novgorod",екатеринбург:"ekaterinburg",челябинск:"chelyabinsk",пермь:"permian",сургут:"surgut",тюмень:"tyumen",ижевск:"izhevsk",новосибирск:"novosibirsk",омск:"omsk",томск:"tomsk",красноярск:"krasnoyarsk",иркутск:"irkutsk",хабаровск:"khabarovsk",владивосток:"vladivostok"},x=o=>`
<style>
  * {
    font-size: 18px;
    line-height: 20px;
  }
  .title {
    font-weight: 900;
    cursor: pointer;
    transition: color 0.5s;
  }
  .arrow {
    display: none;
  }
  .wrapper {
    height: auto;
    transition: height 0.5s;
  }
  @media screen and (max-width: 576px)  {
    * {
      font-size: 14px;
    }
    .arrow {
      display: inline-block;
      margin-left: 3px;
      height: 5px;
    }
    .wrapper {
      height: 0px;
      overflow: hidden;
      margin-bottom: 14px;
      transition: height 0.5s;
    }
  }
</style>
<div>
  <div class="title">
    ${o}
    <img src="./assets/images/city-list-arrow.svg" class="arrow" >
  </div>
  <div class="wrapper"></div>
</div>`;class v extends HTMLElement{constructor(){var d;super(),this.attachShadow({mode:"open"}).innerHTML=x(this.title),this.shadowRoot.children[1].children[0].onclick=()=>{const a=document.querySelector(`[data-area="${this.attributes.area.value}"]`);y(a),this.attributes.area.value==="moscow"&&(u("moscow","#A30C33"),s.currentCity&&u(s.currentCity,"#444"),s.currentCity="moscow")};let t=(d=this.attributes.cities)==null?void 0:d.value;t&&(t=t.split(",").map(a=>a.trim()));const r=this.shadowRoot.querySelector(".wrapper"),l=this.shadowRoot.querySelector(".title"),e=this.shadowRoot.querySelector(".arrow");let n=!1;l.onclick=()=>{window.innerWidth>576||this.title!=="Москва"&&(!n&&l.textContent?(r.style.height="auto",e.style.transform="rotate(-180deg)",l.style.color="#A30C33"):(r.style.height="0px",e.style.transform="rotate(0deg)",l.style.color="#444"),n=!n)},t==null||t.forEach(a=>{const c=document.createElement("div");c.innerHTML=a,window.innerWidth>576?c.style.marginTop="12px":c.style.marginTop="14px",c.style.fontFamily="Proxima",c.style.cursor="pointer",r.append(c),c.onclick=()=>{const h=w[c.textContent.toLowerCase()];u(h,"#A30C33"),s.currentCity&&u(s.currentCity,"#444"),s.currentCity=h;const i=document.querySelector(`[data-area="${this.attributes.area.value}"]`);y(i)}})}}const b=(o,t)=>`
<style>
  .busines-card {
    width: 100%;
    height: 260px;
    position: relative;
    overflow: hidden;
  }
  .image {
    height: 100%;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  .content {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: calc(100% - 80px);
    transition: all 1s;
  }
  .background {
    background: #2D3653;
    opacity: 0.6;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 0;
  }
  .content:hover {
    top: 0;
    transition: all 1s;
  }
  .title-wrapper {
    height: 80px;
    position: relative;
    z-index: 100;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .title {
    font-size: 24px;
    color: white;
    line-height: 24px;

    margin-left: 20px;
  }
  .arrow {
    display: none;
  }
  .text {
    color: white;
    margin-left: 20px;
    width: 80%;
    position: absolute;
    top: 80px;
    font-size: 17px;
    z-index: 100;
  }
  @media screen and (max-width: 576px) {
    .busines-card {
      height: 60px;
      transition: all 1s;
    }
    .image {
      height: 240px;
    }
    .content {
      top: 0;
    }
    .title-wrapper {
      height: 60px;
    }
    .title {
      font-size: 20px;
      z-index: 100;
      margin-left: 10px;
      width: 80%;
    }
    .arrow {
      display: block;
      position: absolute;
      right: 16px;
      transition: all 1s;
    }
    .text {
      color: white;
      margin-left: 10px;
      width: calc(100% - 20px);
      position: absolute;
      top: 200px;
      transition: all 1s;
    }
  }
</style>

<div class="busines-card" >
  <img src="${o}" class="image" >
  <div class="content">
    <div class="background"></div>
    <div class="title-wrapper">
      <div class="title">${t}</div>
      <img src="./assets/images/busines-directions/busines-card-arrow.svg" class="arrow" >
    </div>
    <div class="text">
      <slot></slot>
    </div>
  </div>
</div>`;class _ extends HTMLElement{constructor(){var e;super(),this.isOpen=!1,this.attachShadow({mode:"open"}).innerHTML=b((e=this.attributes.src)==null?void 0:e.value,this.title);const t=this.shadowRoot.querySelector(".busines-card"),r=this.shadowRoot.querySelector(".arrow"),l=this.shadowRoot.querySelector(".text");this.shadowRoot.querySelector(".title-wrapper").onclick=n=>{window.innerWidth>576||(this.open?(t.style.height="60px",r.style.transform="rotate(0deg)",l.style.top="200px"):(t.style.height="240px",r.style.transform="rotate(-180deg)",l.style.top="60px"),this.open=!this.open)}}}document.addEventListener("DOMContentLoaded",()=>{m()});window.onload=()=>f();customElements.define("circle-icon",g);customElements.define("city-list",v);customElements.define("busines-card",_);
