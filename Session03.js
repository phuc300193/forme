// Session 3,
//Bài 1
// let a = 1
// let b = 2

// let c = [a, b]
 
// [a, b] = [b, a]
// console.log(c);

// Bài 2
// Split String into Array
// Using type conversion from String to Array
// let a = 'Hello beaty there'
// let b = a.split(" ")
// console.log(a)
// console.log(b)

// Bài 3.

// let c = ['1', '2', '3', '4']
// console.log(...c)

//Bài 4

// let shop = ['Jean', 'T-Shirt', 'Socks'];
// let n = shop.length
// let j =1
// let i =0
// let chuoi = ['c, r, u, d']
// let a;
// a = prompt("Hi there welcom to shop admin panel, what do you want(c, r, u, d)?")
// if (a == 'r'){
    
//     for(i; i < n; i++){
//         for(j; j<= i+1; j+=1)          
//           console.log( j + "." + shop[i] )
           
//     }
// }
// else if(a == 'c'){
// let nhap = prompt("nhập 1 sản phẩm mới")
//    shop.push(nhap)
//   alert("Done")
//   a = prompt("Hi there welcom to shop admin panel, what do you want(c, r, u, d)?")
//   if (a == 'r'){
//   for(i; i <= n; i++){
//     // console.log(shop)          
//       console.log( i+1  + "." + shop[i] )
// }
// }}  
// else if(a == 'u'){
//   let k = Number(prompt("Nhập vị trí cần update"))
//   let p = prompt("Nhập sản phẩm cần update")
//   shop[k] = p
//   alert("Done")
//   a = prompt("Hi there welcom to shop admin panel, what do you want(c, r, u, d)?")
//   if (a == 'r'){
//     for(i; i < n; i++){
//       // console.log(shop)          
//         console.log( i+1  + "." + shop[i] )
//   }
//   }
// }
// else if( a == 'd'){
//   let q = Number(prompt('Nhập vị trí bạn cần muốn xóa'))
//   let xoa = Number(prompt('Nhập số sản phẩm bạn cần muốn xóa'))
// shop.splice(q, xoa)
// alert("done")
// a = prompt("Hi there welcom to shop admin panel, what do you want(c, r, u, d)?")
// if (a == 'r'){
//   for(i; i < n; i++){
//     console.log(shop)         
//       console.log( i+1  + "." + shop[i-1] )
// }
// }
// }
// else{
  
//   alert("This command is not supported")
//   a = prompt("Hi there welcom to shop admin panel, what do you want(c, r, u, d)?")

// }


// Bài 5.
//Bài 6
// let n = prompt("Nhập số lần cần vào mang")
// n = n.split(',')
// console.log(n)
// let sum = 0
// let nhonhat = Math.min.apply(Math, n)
// // let lonnhat = Math.max.apply(Math, n)
// // for(let i = 0; i < n.length; i++ ){
// //     sum = sum + Number(n[i])  
// // }
// console.log(nhonhat)
// console.log(lonnhat)
// alert("The sum of them is" + sum)
// Bài 7:
// let n = [3, 5, 6, 7, 2, 9, 11]
// let nhap = prompt('Nhập 1 số vào')
// let i= 0
// ktra =true
// for(i; i < n.length; i++)
// {
//     // console.log(n[i])
//     ktra = true
//     if(nhap == n[i]){
//        console.log("OK")
//     }  

// else{
//     ktra = false
//     console.log(nhap[i])
    
// }
// }
