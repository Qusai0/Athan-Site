
let countryDroplist = document.getElementById("country")


setTimeout(function() {
    countryDroplist.addEventListener("change", updateTime);
}, 100);


function updateTime(){
    let city = prompt("(بالانجيليزي)ما اسم المدينة ؟")
    
    let url = "https://api.aladhan.com/v1/calendarByCity?city="+city+"&country="+country+"&method=4";
    console.log(url);
    let timeData
    
        fetch(url)
        .then(function(res){
            return res.json();
        })
        .then(function(data){
             timeData = data.data[0].timings;
             document.getElementById("fajr").innerHTML =  timeData.Fajr+ ":الفجر";
             document.getElementById("dhur").innerHTML =  timeData.Dhuhr+ ":الظهر";
             document.getElementById("asr").innerHTML =  timeData.Asr+ ":العصر";
             document.getElementById("mag").innerHTML =  timeData.Maghrib+ ":المغرب";
             document.getElementById("isha").innerHTML =  timeData.Isha+ ":العشاء";
             
             console.log(timeData)
        })
        .catch(function(error){
            console.log("error"+error);
        });
    
}

function swtF() {
   var element = document.body;
   var elementT = document.getElementsByClassName("text")[0];
   
   console.log(elementT)
   $("body").toggleClass("Tdarkmode");
     $("p").toggleClass("Tdarkmode");
     $(".btn").toggleClass("Tdarkmode");
     $("select").toggleClass("Tdarkmode");
     $(".bg").toggleClass("dark-modebg");
    
    }    



 let swtChange = document.getElementById("swt")

swtChange.addEventListener("change",swtF);


