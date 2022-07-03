
var regusername = document.getElementById("regusername");
var regpassword = document.getElementById("regpassword");
//function of register button
function reg(){
    //saving the user and password but they can automaticly removed when user close the tab of browser
    localStorage.setItem("regusername", regusername.value);
    localStorage.setItem("regpassword", regpassword.value);
    //opening the login page
    window.open("login.html")
}
function login(){
    var username = localStorage.getItem('regusername');
    var password = localStorage.getItem('regpassword');
    var userlogin = document.getElementById("logusername").value;
    var passlogin = document.getElementById("logpassword").value;
    if (userlogin == username && passlogin == password){
        localStorage.setItem("login", 1);
        window.close();
        window.open("/cashiermachine");
    }
    else {
        localStorage.setItem("login", 0);
        alert("The username and password are wrong")
    }
}
function logout(){
    localStorage.setItem("login", 0);
    window.close();
    window.open("login.html");
}
//function for login button
function check(){
    //getting user and password from register value
    var username = localStorage.getItem('regusername');
    var password = localStorage.getItem('regpassword');
    document.getElementById("showuser").innerHTML = username;
    document.getElementById("showpassword").innerHTML = password;
}
//function to open the register page
function regpage(){
    window.open("register page.html");
}
function logpage(){
    window.open("login.html");
}
document.getElementById("greetings").innerHTML= "Welcome " + localStorage.getItem('regusername');
/*function to check user and password when menu page load if not register
the menu page will blank and showing pop up to register*/
function checkingidpass(){
    var login = localStorage.getItem('login');
    if (login == null || login == 0){
        document.getElementById("blockanythingside").style.display="block";
    }
    else{
        document.getElementById("part1").style.display="block";
    }
}
//function for main menu button
function mainmenu(){
    document.getElementById("choose1").style.backgroundColor= "#0a043ce0";
    document.getElementById("choose2").style.backgroundColor= "#03506fc9";
    document.getElementById("choose3").style.backgroundColor= "#03506fc9";
    document.getElementById("choose4").style.backgroundColor= "#03506fc9";
    document.getElementById("choose5").style.backgroundColor= "#03506fc9";
    document.getElementById("part1").style.display="block";
    document.getElementById("part2").style.display="none";
    document.getElementById("part3").style.display="none";
    document.getElementById("part4").style.display="none";
    document.getElementById("part5").style.display="none";
}
//function for list product button to see the code of product because i doesn't have the barcode scanner
function secondpart(){
    document.getElementById("choose1").style.backgroundColor= "#03506fc9";
    document.getElementById("choose2").style.backgroundColor= "#0a043ce0";
    document.getElementById("choose3").style.backgroundColor= "#03506fc9";
    document.getElementById("choose4").style.backgroundColor= "#03506fc9";
    document.getElementById("choose5").style.backgroundColor= "#03506fc9";
    document.getElementById("part1").style.display="none";
    document.getElementById("part2").style.display="block";
    document.getElementById("part3").style.display="none";
    document.getElementById("part4").style.display="none";
    document.getElementById("part5").style.display="none";
}
//function for add product menu button
function thirdpart(){
    document.getElementById("choose1").style.backgroundColor= "#03506fc9";
    document.getElementById("choose2").style.backgroundColor= "#03506fc9";
    document.getElementById("choose3").style.backgroundColor= "#0a043ce0";
    document.getElementById("choose4").style.backgroundColor= "#03506fc9";
    document.getElementById("choose5").style.backgroundColor= "#03506fc9";
    document.getElementById("part1").style.display="none";
    document.getElementById("part2").style.display="none";
    document.getElementById("part3").style.display="block";
    document.getElementById("part4").style.display="none";
    document.getElementById("part5").style.display="none";
}
//function for remove product menu button
function fourthpart(){
    document.getElementById("choose1").style.backgroundColor= "#03506fc9";
    document.getElementById("choose2").style.backgroundColor= "#03506fc9";
    document.getElementById("choose3").style.backgroundColor= "#03506fc9";
    document.getElementById("choose4").style.backgroundColor= "#0a043ce0";
    document.getElementById("choose5").style.backgroundColor= "#03506fc9";
    document.getElementById("part1").style.display="none";
    document.getElementById("part2").style.display="none";
    document.getElementById("part3").style.display="none";
    document.getElementById("part4").style.display="block";
    document.getElementById("part5").style.display="none";
}
//function for My CV button
function fifthpart(){
    document.getElementById("choose1").style.backgroundColor= "#03506fc9";
    document.getElementById("choose2").style.backgroundColor= "#03506fc9";
    document.getElementById("choose3").style.backgroundColor= "#03506fc9";
    document.getElementById("choose4").style.backgroundColor= "#03506fc9";
    document.getElementById("choose5").style.backgroundColor= "#0a043ce0";
    document.getElementById("part1").style.display="none";
    document.getElementById("part2").style.display="none";
    document.getElementById("part3").style.display="none";
    document.getElementById("part4").style.display="none";
    document.getElementById("part5").style.display="block";
}
//array of products including the codes, names, and prices
var codeproduct = ["YxZd8", "mkcPO", "jj6rP", "sM2Tk", "z64uD", "nFyvD", "I8mf2", "lk9CA", "MLQqn", "ksyTu"];
var productname = ["Mr. Noodles Cup Noodles Magic Masala 40gm", "Gillette Mach 3 Turbo Razor", "Fresh milk Full Cream 60ml", "Godiva assorted chocolate milk mix 18pcs 220g", "Coca Cola 1 Ltr", "Masako 250 Gram", "CHITATO BEEF BARBEQUE 68GR", "Coocaa TV 50 inch", "Monster Energy Drink", "Minute Maid Pulpy Orange 1L"]
var pricesproduct = [5000, 105500, 165000, 463126, 11000, 7901, 10500, 4100000, 13910, 70804]
var inpcode;
var sumproduct = 0;
var payback;
var nameclass;
var combined;
var inprmvcode;
//function for input button
function buttoninputpro() {
    var inpdata = document.getElementById("theinput").value;
    inpcode = codeproduct.indexOf(inpdata);
    //creating the element to the html
    var para = document.createElement("h3");
    //setting the class for this element
    para.setAttribute("class","inputwords");
    //including the code, name, price
    para.innerText = "(" + inpdata + ") "+ productname[inpcode]+ " Rp " + pricesproduct[inpcode];
    //adding this element for listorder id
    document.getElementById("listorder").appendChild(para);
    //calculating the prices of input products
    sumproduct += pricesproduct[inpcode];
    document.getElementById("sumofall").innerHTML= "Total Rp "+sumproduct;
  }
//function of remove button
function removed(){
    var inpdata = document.getElementById("theinput").value;
    inpcode = codeproduct.indexOf(inpdata);
    var para = document.createElement("h3");
    para.setAttribute("class","inputwords");
    //setting id of this element
    para.setAttribute("id","removecolor");
    para.innerText = "Removed (" + inpdata + ") "+ productname[inpcode]+ " Rp -" + pricesproduct[inpcode];
    document.getElementById("listorder").appendChild(para);
    //subtract the total price right now
    sumproduct -= pricesproduct[inpcode];
    document.getElementById("sumofall").innerHTML= "Total Rp "+sumproduct;
}
//function of reset button
function resetinp(){
    $(document).ready(function(){
        //removing the element of input product
        $("h3").remove(".inputwords");
        sumproduct = 0;
        document.getElementById("sumofall").innerHTML= "Total Rp "+sumproduct;
    });
}
function pay(){
    var amount = document.getElementById("amount").value;
    payback = amount - sumproduct;
    document.getElementById("detailcek").innerHTML= "Amount of Payment"+ " Rp " + amount+"<br>"+"Amount of Payback"+ " Rp " + payback;
    document.getElementById("cekbutt").innerHTML= '<input type="button" onclick="checkout()" value="CHECK OUT">';
}
function checkout(){
    var doc = new jsPDF();
    doc.fromHTML($('#printed').html(), 15, 15, {
    });
    doc.save('checkout.pdf');
    $(document).ready(function(){
        //removing the element of input product
        $("h3").remove(".inputwords");
        sumproduct = 0;
        payback = 0;
        document.getElementById("detailcek").innerHTML= "";
        document.getElementById("cekbutt").innerHTML= "";
        document.getElementById("sumofall").innerHTML= "Total Rp "+sumproduct;
    });
}
//printing the list product by looping
for (var stepproduct = 0; stepproduct < codeproduct.length; stepproduct++){
    var parapro = document.createElement("p");
    parapro.setAttribute("id","product");
    parapro.innerText = codeproduct[stepproduct]+"\n"+productname[stepproduct]+ " Rp " + pricesproduct[stepproduct];
    var getcode = document.createElement("button");
    var buttonid = "getcode"+stepproduct;
    getcode.setAttribute("id",getcode);
    getcode.innerText = "Get Code";
    document.getElementById("products").appendChild(parapro);
    document.getElementById("products").appendChild(getcode);
}
//function of get random code here button
function coderandom() {
    //Reference of these codes from https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
    var length = 5;
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        //charat function is to get the character from the index
        //Math.floor function is to downwards to nearest integer
        //Math.random function to get random value from 0 to 1
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    document.getElementById("newcode").value= result;
 }
 var newcode;
 var newname;
 var newprice;
//function of add product button
function addproduct(){
    newcode = document.getElementById("newcode").value;
    newname = document.getElementById("newname").value;
    newprice = parseInt(document.getElementById("newprice").value);
    //adding the product code
    codeproduct.push(newcode);
    productname.push(newname);
    pricesproduct.push(newprice);
    $(document).ready(function(){
        //removing the old element
        $("p").remove("#product");
        //reprinting again to replace it
        for (var stepproduct = 0; stepproduct < codeproduct.length; stepproduct++){
            var parapro = document.createElement("p");
            parapro.setAttribute("id","product");
            parapro.innerText = codeproduct[stepproduct]+"\n"+productname[stepproduct]+ " Rp " + pricesproduct[stepproduct];
            document.getElementById("products").appendChild(parapro);
        }
    });
}
//function of remove button
function removeproduct(){
    var inprmvdata = document.getElementById("removepro").value;
    inprmvcode = codeproduct.indexOf(inprmvdata);
    //removing the value from codeproduct array
    codeproduct.splice(inprmvcode,1);
    productname.splice(inprmvcode,1);
    pricesproduct.splice(inprmvcode,1);
    $(document).ready(function(){
        $("p").remove("#product");
        for (var stepproduct = 0; stepproduct < codeproduct.length; stepproduct++){
            var parapro = document.createElement("p");
            parapro.setAttribute("id","product");
            parapro.innerText = codeproduct[stepproduct]+"\n"+productname[stepproduct]+ " Rp " + pricesproduct[stepproduct];
            document.getElementById("products").appendChild(parapro);
        }
    });
}
var mybutton = document.getElementById("myBtn");
            //showing the button if the page is scrolling down
            window.onscroll = function() {scrollFunction()};
            
            function scrollFunction() {
              if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                mybutton.style.display = "block";
              } else {
                mybutton.style.display = "none";
              }
            }
            //function of scroll up button
            function topFunction() {
              document.body.scrollTop = 0;
              document.documentElement.scrollTop = 0;
            }