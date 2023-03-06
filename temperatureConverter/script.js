const calculateTemp=()=>{
    const inputTemp=document.getElementById('tempInput').value;
    //console.log(temperature);
    const tempTypeSelected=document.getElementById('tempType');
    //console.log(tempTypeSelected);
    const tempTypeSelectedValue=tempType.options[tempTypeSelected.selectedIndex].value;
    //console.log(tempTypeSelectedValue);

    const cToF=(celc)=>{
        let fahrenheit=Math.round((celc * 9/5) + 32);
        return fahrenheit;
    }
    const fToC=(fahr)=>{
        let celcius=Math.round((fahr - 32) * 5/9);
        return celcius;
    }

    let result;
    if (tempTypeSelectedValue=='celc') {
        result=cToF(inputTemp);
        document.getElementById('resultContainer').innerHTML=`${inputTemp}°Celcius = ${result}°Fahrenheit`
    } else {
        result=fToC(inputTemp);
        document.getElementById('resultContainer').innerHTML=`${inputTemp}°Fahrenheit = ${result}°Celcius`
    }
}