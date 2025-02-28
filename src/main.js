const converter = addEventListener("submit",(e)=>{
    e.preventDefault();
    const value = document.getElementById("inputVal").value;
const displayVal = document.getElementById("display");
const selectVal = document.getElementById("selected").value;
console.log(`${value} ${selectVal}`)


if(value && selectVal !== null){
    switch(selectVal){
        case "Millimeters":
            var abb ="mm";
           var mm = 1 * value;
          var  cm = value* 0.1;
          var  dm = value *0.01;
          var  m = value* 0.001;
          var  Dm = value* 0.0001;
         var   Hm = value* 0.00001;
        var    Km = value* 0.000001;
            break;

            default:
                console.log("please select a unit")




    }
displayVal.innerHTML = `
<p> ${value} ${abb} is Equal To ${mm} millimeters</p>`
}
else{
    console.log("please input a value")
}



}) 


