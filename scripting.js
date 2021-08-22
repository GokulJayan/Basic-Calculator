function btnclick(num)
{
    document.getElementById("screen").value+=num
}

function clearscreen()
{
    document.getElementById("screen").value=""
}

function clickEqual()
{
    var inputText=document.getElementById("screen").value
    var result=eval(inputText)
    document.getElementById('screen').value=result
}

function delchar() 
{
    var inputText= document.getElementById("screen").value;
    document.getElementById("screen").value = inputText.substr(0, inputText.length - 1);
}