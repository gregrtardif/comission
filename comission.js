var quota =document.querySelector("#quota");
var saleCount =document.querySelector("#saleCount");
var percentage =document.querySelector("#percentage");
var comission=document.querySelector("#comission");
var calc =document.querySelector("#calc");
var reset=document.querySelector("#reset");
var goalcomiss=document.querySelector("#hundredcomission");
var multiplier =0;
var comiss=1500;
var percent= 100;
var goal=15;
var count=10;

quota.addEventListener("change", function(){
	goal.textContent =quota.value;
	goal=Number(quota.value);

});
saleCount.addEventListener("change", function(){
	count.textContent =saleCount.value;
	count=Number(saleCount.value);

});
goalcomiss.addEventListener("change", function(){
	comiss.textContent =goalcomiss.value;
	comiss=Number(goalcomiss.value);

});

calc.addEventListener("click", function(){
    percent=count/goal;
    multiplier=percent-1;
    
    if(multiplier>=0){
        comiss=((multiplier*2+1)*comiss).toFixed(2);   
        comission.textContent=comiss;
        percentage.textContent=(percent*100).toFixed(0); 
     }
    else{
        comiss=((multiplier+1)*comiss).toFixed(2);
        
        comission.textContent=comiss;
        percentage.textContent=(percent*100).toFixed(0);
    }
  

});

reset.addEventListener("click",function(){
    window.location.reload();

})





