// let a= [1,2,3,4,5,6,7,8,9,10]
// // for(i=0;i<a.length;i++){
// //     console.log(a[i])
// // }
// // a.forEach(function(element){
// //     console.log(element)
// // })
// let j=0;
// while(j<a.length){
//     console.log(a[j])
//     j++;
// }
// document.getElementById('btn').click()
// function clicked(){
//     console.log("The button is clicked")
// }
// window.onload= function(){
//     console.log("The document was loaded")
// }
setInterval(() => {
    let a = new Date();
    a1=(a.getHours())
    console.log(a1)
    let b = new Date()
    b1= b.getMinutes()
    console.log(b1)
    let c = new Date()
    c1= c.getSeconds()
    console.log(c1)
    n= a1+":"+b1+":"+c1
    n1= a.toLocaleDateString()
    document.getElementById('timing').innerHTML= n+" on "+ n1;
}, 1000);
