let bar=document.getElementById("bar");
let nav=document.getElementById("navbar");
let close=document.getElementById("close");
let bag=document.getElementById("bag");
bar.onclick=function(){
nav.style.right='0px';
};
close.onclick=function()
{
nav.style.right="-300px";
}
let mainimg=document.getElementById("maining");
let smallimg=document.getElementsByClassName("small-img");
smallimg[0].onclick=function()
{

mainimg.src=smallimg[0].src;

}
smallimg[1].onclick=function()
{

mainimg.src=smallimg[1].src;

}
smallimg[2].onclick=function()
{

mainimg.src=smallimg[2].src;

}
smallimg[3].onclick=function()
{

mainimg.src=smallimg[3].src;

}