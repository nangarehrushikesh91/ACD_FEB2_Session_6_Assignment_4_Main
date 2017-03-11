var emplObj1 = {name:"Hrushikesh",age:25,salary:50000,city:"Pune",state:"Maharashtra",pincode:123451}
var emplObj2 = {name:"Dipam",age:24,salary:40000,city:"Mumbai",state:"Maharashtra",pincode:123452}
var emplObj3 = {name:"Deb",age:23,salary:30000,city:"Nashik",state:"Maharashtra",pincode:123453}
var emplObj4 = {name:"Ravi",age:22,salary:20000,city:"Aurangabad",state:"Maharashtra",pincode:123454}
var emplObj5 = {name:"Vasant",age:21,salary:10000,city:"Nagpur",state:"Maharashtra",pincode:123455}
var Employee = [emplObj1,emplObj2,emplObj3,emplObj4,emplObj5]

Employee.forEach(myFunction);

function myFunction (item, index) {
  for( var key in item ) {
    console.log(item[key])
  }
}