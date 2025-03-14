import{a as g,i as n,S as m}from"./assets/vendor-DU6yh4ar.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const y="49327575-d50cf96af4b1ede3148c0e758",v="https://pixabay.com/api/",b=s=>g.get(v,{params:{key:y,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data.hits).catch(t=>{n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),console.error(t)}),d=document.querySelector(".gallery"),x=()=>{d.innerHTML=""},L=s=>{const t=s.map(({webformatURL:a,largeImageURL:e,tags:r,likes:i,views:p,comments:f,downloads:h})=>`<a class="gallery-item" href="${e}">
          <div class="photo-wrapper">
            <img src="${a}" alt="${r}" />
            <div class="info-wrapper">
              <div class="info-box">
                <h3 class="gallery-title">Likes</h3>
                <p class="gallery-text">${i}</p>
              </div>
              <div class="info-box">
                <h3 class="gallery-title">Views</h3>
                <p class="gallery-text">${p}</p>
              </div>
              <div class="info-box">
                <h3 class="gallery-title">Comments</h3>
                <p class="gallery-text">${f}</p>
              </div>
              <div class="info-box">
                <h3 class="gallery-title">Downloads</h3>
                <p class="gallery-text">${h}</p>
              </div>
            </div>
          </div>
        </a>`).join("");d.insertAdjacentHTML("beforeend",t),new m(".gallery a").refresh()},l=document.querySelector(".form"),q=document.querySelector(".form-input"),u=document.querySelector(".loader");function w(){u.classList.add("active")}function c(){u.classList.remove("active")}l.addEventListener("submit",s=>{s.preventDefault();const t=q.value.trim();if(!t){n.warning({message:"Please enter a valid search query!",position:"topRight"});return}x(),w(),b(t).then(o=>{if(c(),o.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),l.reset();return}L(o),l.reset()}).catch(o=>{c(),n.error({message:"An error occurred while fetching images. Please try again later.",position:"topRight"}),console.error(o)})});
//# sourceMappingURL=index.js.map
