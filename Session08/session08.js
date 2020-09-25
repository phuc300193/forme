// console.log("hello")
// function getting(){
//     console.log("hello") 
// }

// getting()

// let input = prompt("Xin hay nhap ten")

// function xinchao(name){
//     console.log("Hello" + name)
// }

// xinchao(input)


// let a = Number(prompt("Nhap 1 so a"))
// let b = Number(prompt( "Nhap 1 so b"))

// function tinhtong(num1, num2){
//     console.log(num1+num2)
// }
// tinhtong(a, b)

// Funtion

// let movie = {
//     title: "Pokemon",
//     Year: "1998",
//     Rate: 9.2
//     }
// function read(){
// for(let property in movie){
//     console.log(`${movie[property]}`)
// }
// }
// read()

// let a = prompt("Nhap vi tri can creat")
// let b = prompt("Nhap noi dung can creat")
// let movies ={}

// function update(vitri, noidung){
//   movie[vitri] = noidung
// }
// update(a,b)
// read()

// function creat(vitri, noidung){
//     movie[vitri] = noidung
// }
// creat(a, b)
// read()

// 8. You are a shepherd who owns a flock of sheep
// Each of your sheep of your flock has varied sizes: 5 7 300 90 24 50 75
// Create an array to represent the sizes of your flock, and log all of your flock size, expected screen output:
// 5 7 300 90 24 50 75
// At the end of each month, you have to choose one and only one sheep to shear and thus you want to choose the biggest one to maximize your profit. Add scripts to search for the biggest sheep in your list:
// Hint: Google ‘JS Array find max’
// When your biggest sheer, its size will return to the default size, which is 8.
// Hint: Google ‘JS Array indexOf
// In the following month, EVERY sheep in your flock grow, they have their size increased by 50. Log them out
// Let’s do this for 4 months (or as long as you want)
// After day by day shearing sheep, you became bored. You want to sell your flock to travel the world. In order to have fair trade, you must now calculate the total size of your sheep and then the expected money you can get from selling your flock, before going to the market. Write a program to calculate the total size of your sheep as well as the money you would have. Expected console output:

// let my_flock = [5,7,300,90,24,50,75]
// let result = ""
// let max_size = 0
// for (let i = 0; i<my_flock.length; i++){
//     result = result + my_flock[i] + " "
//     if (max_size<my_flock[i]) max_size = my_flock[i]
// }
// alert ("Hello, my name is Hieu and here is my sheep size: \n" + result)
// alert ("Now my biggest sheep has size " + max_size + ", let's shave it")

// my_flock[my_flock.indexOf(max_size)] = 8
// result = 0
// for (let i = 0; i<my_flock.length; i++){
//     result = result + my_flock[i] + " "
// }
// alert ("After shearing, here is my flock \n" + result)

// result = 0
// for (let i = 0; i<my_flock.length; i++){
//     my_flock[i] += 50
//     result = result + my_flock[i] + " "
// }
// alert ("After shearing, here is my flock \n" + result)

// for (let month=1;month<=4; month++){
    //coding here
// }





let my_flock = [5,7,300,90,24,50,75]

function read(callback, flock){
    setTimeout(function(){
    let res = " "
    for (i = 0; i< flock.length; i++){
        res = res + flock[i] + " "
    }
    console.log("Dan cuu cua toi" + res)
    },5000)
    callback()
}
function catlong(flock){
    let max = 0
    for (i=0; i<flock.length; i++){
        if(max < flock[i])
        max = flock[i]
    }
        flock[flock.indexOf(max)] = 8
    }
read(catlong(my_flock),my_flock)


//Homework

// let nhap = prompt("nhập 1 chuỗi vào")
// function chuoidainhat(str){
//     let nhapsplit = str.split(" ")
//     let dodaikitu = 0
//     let word = null
//     for(i=0; i< nhapsplit.length;i++)
//     {
//         if(dodaikitu < nhapsplit[i].length){
//            dodaikitu = nhapsplit[i].length
//            word = nhapsplit[i]  
//         }    
//     }
//     console.log(word)
// }
// chuoidainhat(nhap)
