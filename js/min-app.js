!function(){const e=document.querySelector(".burger"),t=document.querySelector(".aside-close");let r=document.querySelector(".aside");const n=document.getElementById("employees-form"),s=document.querySelector("input[name='name']"),o=document.querySelector("input[name='years']"),a=document.querySelector(".table__input--textarea"),l=document.querySelector(".table__content"),c=document.querySelector(".btn__send"),i=document.querySelector(".btn__add");function d(){/^[А-Я][а-яА-Я\-]{0,}\s[А-Я][а-яА-Я\-]{1,}(\s[А-Я][а-яА-Я\-]{1,})?$/.test(s.value)?(s.classList.remove("error"),s.parentNode.classList.remove("error--name")):(s.classList.add("error"),s.parentNode.classList.add("error--name")),""===s.value&&(s.classList.remove("error"),s.parentNode.classList.remove("error--name"))}function u(){!/^\d{2,2}$/.test(o.value)||o.value<18||o.value>65?(o.classList.add("error"),o.parentNode.classList.add("error--number")):(o.classList.remove("error"),o.parentNode.classList.remove("error--number")),""===o.value&&(o.classList.remove("error"),o.parentNode.classList.remove("error--number"))}function m(){/^[а-яА-Я\-]{4,30}$/.test(a.value)?(a.classList.remove("error"),a.parentNode.classList.remove("error--competence")):(a.classList.add("error"),a.parentNode.classList.add("error--competence")),""===a.value&&(a.classList.remove("error"),a.parentNode.classList.remove("error--competence"))}function v(e){e.preventDefault();let t=function(e){const{elements:t}=e;return Array.from(t).filter(e=>!!e.name).map(e=>{const{name:t,value:r}=e;return{name:t,value:r}})}(n),r=0;t.forEach(e=>{""===e.value&&r++}),0===r?(i.classList.remove("error--filling"),null===document.querySelector(".error")?(i.classList.remove("error--send"),l.innerHTML+=`\n                <ul class="table__row data">\n                    <li class="table__col">${t[0].value}</li>\n                    <li class="table__col">${t[1].value}</li>\n                    <li class="table__col">${t[2].value}</li>\n                    <li class="table__col">${t[3].value}</li>\n                    <li class="table__del">\n                        <button class="btn btn__delete" type="button">\n                            <i class="btn__icon icon-cancel-1"></i>\n                        </button>\n                    </li>\n                </ul>\n                `,n.reset()):i.classList.add("error--send")):i.classList.add("error--filling"),document.querySelectorAll(".btn__delete").forEach(e=>{e.addEventListener("click",function(){e.parentNode.parentNode.remove()})})}function L(){const e=document.querySelectorAll(".data");let t=[];if(e.forEach(e=>{let r={};r.name=e.children[0].textContent,r.position=e.children[1].textContent,r.years=e.children[2].textContent,r.competence=e.children[3].textContent,t.push(r)}),0!==t.length)return c.classList.remove("error--main-send"),console.log(JSON.stringify(t));c.classList.add("error--main-send")}document.addEventListener("DOMContentLoaded",function(){e.addEventListener("click",function(){r.classList.add("aside--on")}),t.addEventListener("click",function(){r.classList.remove("aside--on")}),s.addEventListener("input",d),o.addEventListener("input",u),a.addEventListener("input",m),n.addEventListener("submit",v),c.addEventListener("click",L)})}();