function Tags(e){
    var t,n,i,r,a,c,l=e;function u(){
        t.innerHTML="",r.forEach(function(e,n){
            var i=document.createElement("li");
            i.innerHTML="".concat(e," <a>&times;</a>"),i.querySelector("a").addEventListener("click",function(){
                var e;return (e=n,r=r.filter(function(t,n){return n!=e&&t
                }),u()),!1
            }),t.appendChild(i),l.setAttribute("data-simple-tags",r.toString())
        })
    }                
        i=(i=l.getAttribute("data-simple-tags")).split(","),r=i.map(function(e){return e.trim()
        }),a=document.createElement("ul"),document.createElement("li"),c=document.createElement("input"),l.appendChild(a),l.appendChild(c),t=l.firstElementChild,n=l.lastElementChild,u(),n.addEventListener("keyup",function(e){
                var t=this.value.trim();(t.includes(",")||13==e.keyCode)&&(""!=t.replace(",","")&&r.push(t.replace(",","")),this.value=""),u()
        })
        }!function(){
            var e=document.querySelectorAll(".simple-tags");(e=Array.from(e)).forEach(function(e,t){new Tags(e)
            })
        }();

