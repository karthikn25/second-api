var container=document.createElement("div");
container.setAttribute("class","container");
var row=document.createElement("div");
row.classList.add("row","m-3");
container.append(row);
async function foo(){
    var res = await fetch("https://animechan.vercel.app/api/random")
    var res1 = await res.json();
    console.log(res1);
    
    var div = document.createElement("div")
    row.innerHTML =`
    <div class ="col-md-4">
    <div class="card border-dark mb-3" style="max-width: 18rem; margin:50px 10px;">
    <div class="card-header">Animechan</div>
    <div class="card-body text-success">
     <h5 class="card-title"><b style="color: orange;">Anime :</b>${res1.anime}</h5>
     <h5 class="card-title"><b style="color: orange;">Character :</b>${res1.character}</h5>
     <h5 class="card-title"><b style="color: orange;">Quote :</b>${res1.quote}</h5>
</div>
  </div>
  </div>
  `;

    document.body.append(container);
}
foo();

