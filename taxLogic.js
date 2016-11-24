function calcAdjustedIncome() {
    var x = parseFloat(document.getElementById("wage").value) ;
    console.log(x);
    var y  =     parseFloat(document.getElementById("interest").value) ;
    console.log(y);
    
    var z = parseFloat(document.getElementById("unemployment").value);
    
    console.log(z);
    
    if(isNaN(x))
    {
        x = 0;
    }
    console.log(x);
    
    if(isNaN(y))
    {
        y = 0;
    }
    console.log(x);

    
    if(isNaN(z))
    {
        z = 0;
    }
    console.log(x);


    console.log(x + y + z);
    
    var adjustedGrossIncome = x+y+z;
    
    if(y > 1500)    
    {
        alert("Your interest is too high!  Please look at your interest rate.");
    } 
    else
    {
        document.getElementById("adjustedIncome").innerHTML = adjustedGrossIncome;
    }
   
    console.log(adjustedGrossIncome);
}

function errorMessage()
{
    var y  = parseFloat(document.getElementById("interest").value);
    console.log(y);
    if(y > 1500)
    {
        alert("Your interest is greater than $1,500. You cannot file taxes using form 1040EZ.  Please use either form 1040A or 1040")
    }
}

function calcExmeptions(){
    console.log( "married is " + document.getElementById("married").checked);
    console.log("single is " + document.getElementById("single").checked);
    
    if( document.getElementById("taxPayer").checked && document.getElementById("spouse").checked == true)
    {
        alert("You and your spouse are claimed on someone's else return!")
        document.getElementById("single").checked = false;
        document.getElementById("married").checked = false;
    }
    else if (document.getElementById("taxPayer").checked || document.getElementById("spouse").checked == true)
    {
        alert("You need to update your exmpetions!");
    }
    else if(document.getElementById("married").checked == true)  
    {
        document.getElementById("exemptions").innerHTML = 20600;
    } 
    else
    {
     document.getElementById("exemptions").innerHTML = 10300;
    }
    
    var x = parseFloat(document.getElementById("wage").value) ;
    console.log(x);
    var y  =     parseFloat(document.getElementById("interest").value) ;
    console.log(y);
    
    var z = parseFloat(document.getElementById("unemployment").value);
    
    console.log(parseFloat(document.getElementById("adjustedIncome").innerHTML)) ;
    console.log(parseFloat(document.getElementById("exemptions").innerHTML));
    
    console.log("the exemption here is: " +    
    parseFloat(document.getElementById("exemptions").innerHTML));
    
    calcTaxableIncome();
}

function calcTaxableIncome(){
    var m = parseFloat(document.getElementById("adjustedIncome").innerHTML) ;
    var n = parseFloat(document.getElementById("exemptions").innerHTML);
    
    var taxableIncome = m - n;
    console.log("taxable income " +  taxableIncome);
    if(taxableIncome < 0)
    {
        taxableIncome = 0;
    }
    document.getElementById("taxableIncome").innerHTML = taxableIncome;
}

