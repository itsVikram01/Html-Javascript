const counters=document.querySelectorAll('.counter');
counters.forEach((counter)=>{
    console.log(counter);
    counter.innerHTML=0;

    const updateCounter=()=>{
        // const targetCount=counter.getAttribute('data-target');
        // console.log(targetCount);
        // console.log(typeof targetCount);//string
        //There are 3 methods to conver string into number
        //1.Using the unary plus operator
            //var n=+str;
        //2.The Number constructor
            //var n=Number(str);
        //3.The parseFloat Function
            //var n=parseFloat(str);


        const targetCount=+counter.getAttribute('data-target');
        //console.log(targetCount);
        // console.log(typeof targetCount);
        const startingCount=+counter.innerHTML;
        //console.log(typeof startingCount);
        const increment=targetCount/100;
        //console.log(increment);
        if (startingCount<targetCount) {
            counter.innerHTML=`${Math.round(startingCount + increment)}`;
            setTimeout(updateCounter,10);
        }
    }

    updateCounter();
})