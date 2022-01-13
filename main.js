var global = ""
function clr()
{
    document.getElementById("result").value = 0
    document.getElementById('ddlTrigonometry').value = "Trigonometry";
    document.getElementById('ddlFunctions').value = "Functions";
}
function clr_MC()
{
    document.getElementById("result").value = 0
    global = ""
    M_Plus_Value = ""
    document.getElementById('ddlTrigonometry').value = "Trigonometry";
    document.getElementById('ddlFunctions').value = "Functions";
}
function display(val)
{
    if(document.getElementById("result").value == 0)
    {
        document.getElementById("result").value = ""
        document.getElementById("result").value+=val
    }
    else
        document.getElementById("result").value+=val
}
function solve()
{
    let x = document.getElementById("result").value
    let y = eval(x)
    document.getElementById("result").value = y
    document.getElementById('ddlTrigonometry').value = "Trigonometry";
    document.getElementById('ddlFunctions').value = "Functions";
}
function backclear()
{
    let str =  document.getElementById("result").value
    str = str.substring(0, str.length - 1);
    document.getElementById("result").value = str
}
function factorial()
{
    var num = parseInt(document.getElementById("result").value);
    document.getElementById("result").value = FindFactorial(num);
}
function FindFactorial(num) {
    if (num < 0) 
          return -1;
    else if (num == 0) 
        return 1;
    else {
        return (num * FindFactorial(num - 1));
    }
}
function sqrt()
{
    var num = parseFloat(document.getElementById("result").value);
    document.getElementById("result").value = Math.sqrt(num);
}
function x_square()
{
    var num = parseFloat(document.getElementById("result").value);
    document.getElementById("result").value = Math.pow(num,2);
}
function onebyX()
{
    var num = parseFloat(document.getElementById("result").value);
    document.getElementById("result").value = 1/num;
}
function mod_x()
{
    var num = parseFloat(document.getElementById("result").value);
    if(num < 0)
    {
        document.getElementById("result").value = num*(-1);
    }
    else
    {
        document.getElementById("result").value = num;
    }
}
function PI_Value()
{
    if(document.getElementById("result").value == 0)
    {
        document.getElementById("result").value = ""
        document.getElementById("result").value += Math.PI;
    }
    else
        document.getElementById("result").value += Math.PI;
    
}
function Euler_Value()
{
    if(document.getElementById("result").value == 0)
    {
        document.getElementById("result").value = ""
        document.getElementById("result").value += Math.E;
    }
    else
        document.getElementById("result").value += Math.E;
}
function round_2decimal()
{
    var num = parseFloat(document.getElementById("result").value);
    document.getElementById("result").value = num.toFixed(2);
}
function DEG_To_FE()
{
    document.getElementById("changeLabel").innerHTML = "DEG";
    var num = document.getElementById("result").value
    document.getElementById("result").value = Number(num)

}
function FE_To_DEG()
{
    document.getElementById("changeLabel").innerHTML = "F-E";
    var num = parseFloat(document.getElementById("result").value);
    document.getElementById("result").value = num.toExponential();
}
function MS_Click()
{
    global = document.getElementById("result").value;
    document.getElementById("result").value = 0
}
function MR_Click()
{
    document.getElementById("result").value = global
}
function M_Plus()
{
    global =  parseFloat(document.getElementById("result").value) +  parseFloat(global)
    document.getElementById("result").value = 0 
}
function M_Minus()
{
    global =  parseFloat(document.getElementById("result").value) -  parseFloat(global)
    document.getElementById("result").value = 0 
}
function ddlTrigonometry_Change()
{
    var select = document.getElementById('ddlTrigonometry');
    if(select.selectedIndex > 0)
    {
        var value = select.options[select.selectedIndex].value;
        document.getElementById("result").value ="Math."+value+"("
    }
    else
    {
        document.getElementById("result").value = ""
    }
}
function ddlFunctions_Change()
{
    var select = document.getElementById('ddlFunctions');
    if(select.selectedIndex > 0)
    {
        var value = select.options[select.selectedIndex].value;
        document.getElementById("result").value ="Math."+value+"("
    }
    else
    {
        document.getElementById("result").value = ""
    }
}


