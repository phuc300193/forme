// let person = ['Nam', 19, 'Hà Nội', 25, false];
// console.log(person)
// let person = {

//     name: 'Nam',
//     age: 18,


// };

// console.log(person)
// console.log(person.age);
// console.log(person['name']);

// Declare a variable named movie with an object value, containing the following properties:
// let movie = {
// title: "Pokemon",
// Year: "1998",
// Rate: 9.2
// };
// let nhap = prompt('Do you want know')
// let i = movie.title
// let o = movie['Year']
// let u = movie.Rate
// console.log(movie.title);
// console.log(movie['Rate'])
// let ktra = true
// if(nhap == i){
// ktra = true
// alert(i)
// }
// else if(nhap == o){
//     ktra = true
//     alert(0)
// }
// else if(nhap == u){
//     ktra = true
//     alert(u)
// }
// else{
//     ktra =false
//   alert("'" + nhap + "'" + "does not exits out data")
// }


// Homework Session04
// const product = {
//     name: 'Xiaomi rice cooker',
//     price: 1700,
//     brand: 'Xiaomi',
//     color: 'white'
// };
// 1.1. What does x receives from product, property or value?
// Product

// 1.2. Use the for loop to print/log out the following output
// for( let x in product){
    // console.log(x);
    // console.log( x + ": " + product[x])  
    // (product[x.length])
// }

// Bài 2:Then use one line of code to destructure to obtain subject, dueDate and assignTo from this object:

// let task = {
//     subject: 'Implement login feature',
//     createdby: 'Hoang Ngoc Duc',
//     assignTo: 'Nguyen Phuong Nam',
//     expectedHours: 0.5,
// };
// let { subject, createdby, assignTo } = task
// console.log(subject, createdby, assignTo)


// Bài 3:
// let hits = [
//     {
//         benefits = [
//             {
//                 benefiticonname:'fa-dollar',
//                 benefitname: 'Bonus',
//                 benefitvalue: '14 tháng lương, đánh giá tăng lương 2 lần/ năm',
//                 benefitid: 1,
//             },
//         {
//                 benefiticonname: 'fa-user-md',
//                 benefitname: 'Healthcare Plan',
//                 benefitvalue: 'Hưởng đầy đủ các loại bảo hiểm theo quy định của nhà nước, các trợ cấp theo quy định của công ty',
//                 benefitid: 2,
//         },
//         {
//                 benefiticonname:'fa-file-image-o',
//                 benefitname: 'Paid Leave',
//                 benefitvalue: 'Có cơ hội học hỏi nâng cao kiến thức chuyên môn và cơ hội thăng tiến',
//                 benefitid: 3,
//         },
//         ],
//         expiredDate: 1572713999,
//         classifiedConfidenceRoles: [
//             0.478965416077008,
//             0.461663685615174
//         ],
//         visibilityDisplay: 1,
//         jobTitle: '02 JAVA Web Developer (Hà Nội)',
//         categoryVIs: [
//                 'Công nghệ cao',
//                 'IT-Phần mềm',
//                 'Internet/Online Media'
//         ],
//         priorityOrder: 1570593423,
//         SalaryMax: 1000,
//         skills: [
//             'Hibernate',
//             'Spring MVC',
//             'JavaScript',
//             'Struts',
//             'Spring Boots'
//         ],
//         isSalaryVisible: true,
//         isShowlogoinSearchResult: true,
//         jobLevelVI: 'Nhân Viên',
//         isshowlogo: true,
//         isPriorityJob: false,
//         isShowLogoInSearchResult66: true,
//         alias:'02-java-web-developer-ha-noi-1-1-1-1',
//         company: 'Yumeshin Vietnam',
//         categories: [
//             'Internet/Online Media',

//         ]  


//     }
// ]

// Bài 4:Initialize an object to represent a dictionary, with properties as keyword and values as explanation, the initial values are from this table

// let dictionary = {
//     debug: 'The process of figuring out why your program has a certain error and how to fix it',
//     done: 'When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)',
//     defect: 'The formal word for ‘error’',
//     pm: 'The short version of Project Manager, the person in charge of the final result of a project',
//     uiux: 'UI means User Interface, UX mean User Experience, are the process  to define how your products looks and feels',
// }
// // alert("Hi there, this is ad dev dictionary ")
// let nhap;
// nhap = prompt("Enter a keyword")
// let i = dictionary.debug
// let o = dictionary.done
// // for (let x in dictionary){
// if(nhap == 'debug'){
//    alert(i)
// }
//  else if(nhap == 'done'){
//    alert(o)
// }
// else if (nhap == 'defect'){

//     alert(dictionary['defect'])  

// }

// else if (nhap == 'pm'){
//     alert( dictionary['pm'])
// }
// else if (nhap == 'uiux'){
//     alert (dictionary['uiux'])
// }
// // Bài 4.2:Update your script so that it can let users contribute the explanation to the dictionary
// else
// {
//     let them = prompt('We could not find your word:' + nhap +  ',leave your explanation')
//     // alert("We could not find your word: " + nhap)
   
//     alert('Done')
//     nhap = prompt('Enter keyword')
//     dictionary.nhap = 'them'
//     alert(dictionary['them'])
// }

// Bài 5:5. Initialize a variable named products, containing an array of products, each product has a name, price, brand, category, and color

let mobie = [
    
        Xiaomi ={
            stt: 1,
            name: 'Xiaomi portable charger 20000mah',
            brand: 'Xiaomi',
            price: 428,
            color : "White",
            Category: 'Charger'
        },
        vs = {
            stt: 2,
            name: 'VSmart Active 1',
            brand: 'VSmart',
            price: 5487,
            color: 'Black',
            Category: 'Phone',
        },
        ip = {
            stt: 3,
            name: 'Iphone X',
            brand: 'Apple',
            price: 21490,
            color: 'gray',
            Category: 'phone'
        },
        ss = { 
            stt: 4,
            name: 'Samsung Galaxy A9',
            brand: 'Samsung',
            price: 8490,
            color: 'Blue',
            Category: 'Phone',
        },
]
// 5.1:Print/log name and price of all the products out

let n = mobie.length
let i = 0
for(i; i<n; i++ ){
console.log(mobie[i])
// console.log('Name: ' +  mobie[i].name)
// console.log('Price: ' + mobie[i].price)
}
// // Write a script printing/logging out the products with their number, then print/logging out the details of a product with its position entered by users

for( let x in mobie){
    let nhap = Number(prompt('Enter product'))
    nhap == mobie[i]
    console.log(x + mobie[x])
}