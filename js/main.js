var siteNameInput=document.getElementById('siteName');
var siteUrlInput=document.getElementById('siteUrl');
var addBtn=document.getElementById('addSiteBtn');
var sites=[];
var inputs=document.getElementsByClassName('form-control');
var currentIndex=0;
var searchInput=document.getElementById('searchBtn')


if(JSON.parse(localStorage.getItem('sitesNameList'))!=null){
    sites=JSON.parse(localStorage.getItem('sitesNameList'));
    displaySite();
}
addBtn.onclick= function(){
    if (addBtn.innerHTML=='Add Site Name'){
        addSite();
    }
   else{
      upadteProduct();
   }
    displaySite();
    resetForm()

}

function addSite(){
    var site={
        name:siteNameInput.value,
        url:siteUrlInput.value
    };
    sites.push(site);
    localStorage.setItem('sitesNameList',JSON.stringify(sites));
    displaySite();
   
}
function displaySite(){
    var cartona='';
    for(var i=0;i<sites.length;i++){
      cartona+=`
      <tr>
      <td>${sites[i].name}</td>
      <td><a href='${sites[i].url}' class="btn btn-outline-success" target="_blank"  >  Visit  </a></td>
      <td><button class="btn btn-outline-primary" onclick='getSiteInfo(${i})' > Update </button></td>
      <td><button class="btn btn-outline-danger" onclick="deleteSite(${i})"> Delete </button></td>
      </tr>
      `
    }
    document.getElementById('tableBody').innerHTML=cartona;

}
function resetForm(){
    for(var i=0;i<inputs.length;i++){
        inputs[i].value=""
    }
}
function deleteSite(delIndex){
    sites.splice(delIndex,1);
    displaySite();
    localStorage.setItem('sitesNameList',JSON.stringify(sites));
     

}

function getSiteInfo(index){
    currentIndex=index;
 var currentSiteInfo=sites[index]
 siteNameInput.value=currentSiteInfo.name;
 siteUrlInput.value=currentSiteInfo.url;
 addBtn.innerHTML="Update Site Name "
 

}
function upadteProduct(index){
    var site={
        name:siteNameInput.value,
        url:siteUrlInput.value
    };
     sites[currentIndex]=site;
     localStorage.setItem('sitesNameList',JSON.stringify(sites));
     addBtn.innerHTML='Add Site Name'
}
function search(searchTerm){
    var cartona='';
    for(var i=0;i<sites.length;i++){
        if(sites[i].name.toUpperCase().includes(searchTerm.toUpperCase())){
            cartona+=`
            <tr>
            <td>${sites[i].name}</td>
            <td><a href='${sites[i].url}' class="btn btn-outline-success" >  Visit  </a></td>
            <td><button class="btn btn-outline-primary" onclick='getSiteInfo(${i})' > Update </button></td>
            <td><button class="btn btn-outline-danger" onclick="deleteSite(${i})"> Delete </button></td>
            </tr>
            `
          }
        }
    
    document.getElementById('tableBody').innerHTML=cartona;

}
