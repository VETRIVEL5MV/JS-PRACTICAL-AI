function myFunction() {
    document.getElementById("new").style.backgroundColor = "Green";
  }
  function myCreate() {
    document.getElementById("new").style.backgroundColor = "Blue";
  }
  function myOption() {
    document.getElementById("new").style.backgroundColor = "Orange";
  }
   const btn = document.querySelector('#btr');
   btn.addEventListener('click', function onClick() {
     btn.style.backgroundColor = 'orange';
     btn.style.color = 'white';
   });
   const bts = document.querySelector('#bts');
   bts.addEventListener('click', function onClick() {
     bts.style.backgroundColor = 'blue';
     bts.style.color = 'red';
   });
   /*const buo=document.getElementsByClassName('new');
   buo.addEventListener('click',function onClick(){
    buo.body.backgroundColor="skyblue";
    buo.style.color="green";
   });*/
   






   /*const button=document.getElementById("b1")
const body=document.body;
const colors=["orange","yellow","blue"];

button.addEventListener('click',changecolor);
function changecolor(){
}*/
/*const btn=document.getElementById('btr');
btn.addEventListener('click',function onClick() {
    btn.style.backgroundColor='orange';
    btn.style.color="green";
});
const btns=document.getElementById('b2');
btns.addEventListener('click',()=> {
    btns.style.backgroundColor='yellow';
   })*/