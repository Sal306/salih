// let clone = (obj) => {
//     let copy = {};

//     for(let key in obj) {
//       copy[key] = typeof obj[key] == "object" ? clone(obj[key]) : obj[key];
//       console.log("copying...");
//       console.log(obj[key]===copy[key]);
//     }
//     console.log(copy  + "   \n  " + obj)
//     return copy;
//   }


//   clone({age: 15, name: "salih"});


// function one(){
//     console.log("A");
//     two();
//     console.log("C")
// }
// function two(){
//     setTimeout(function () {
//         console.log("B");
//     } , 
//     1);

// }

// one();

// function greet(name){
//     return new Promise((resolve) => {
//         setTimeout ( () => {
//             let response = "hello " + name;
//             resolve(response);

//         }, 1000)
//     })
// }
// console.log("B G");
// greet("salih").then((x) => console.log(x));
// console.log("after g");


function greet(name) {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (name != "") {
                let response = "hello " + name;
                resolve(response);
            } else {
                let response = " You must provide a name";
                resolve(response);
            }
        }, 1000);
    })
}

(async ()=> {
    console.log("1");
    console.log(await greet(""));
    console.log("2");
})();


server {
    listen       80;
    server_name  salih.fikracamp.com;
     location / {
        root   /home/salih/www;
        index  index.html index.htm;
    }
  }