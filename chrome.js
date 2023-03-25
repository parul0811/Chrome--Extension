let myLeads=[];
const inputEl=document.getElementById("text-el");
const buttonClk= document.getElementById("input-btn");
const ulEl= document.getElementById("ul-el");
const delButton= document.getElementById("del-btn");
const myLeadsFromLocalStorage=JSON.parse(localStorage.getItem("myLeads"));
let saveBtn= document.getElementById("save-btn");
/*localStorage.clear();
console.log(myLeadsFromLocalStorage);*/

if(myLeadsFromLocalStorage){
    myLeads=myLeadsFromLocalStorage;
    render(myLeads);
}

saveBtn.addEventListener("click",function(){
         chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
         myLeads.push(tabs[0].url);
         localStorage.setItem("myLeads",JSON.stringify(myLeads));
         render(myLeads);   
       
    })
    
})

function render(leads){
    let listItems="";
for(let i=0;i<leads.length;i++){
    listItems+=`<li>
    <a href='${leads[i]}'  target='_blank'>
        ${leads[i]}
    </a>
    </li>`
 }
 ulEl.innerHTML=listItems;
 }

delButton.addEventListener("dblclick",function(){
    
    localStorage.clear();
    myLeads=[];
    render(myLeads);
})

buttonClk.addEventListener("click",function(){
    
    myLeads.push(inputEl.value);
    inputEl.value=" ";
    localStorage.setItem("myLeads",JSON.stringify(myLeads));
     render(myLeads);
      })


   
