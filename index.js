function Emailcheck()
{
    var email= document.myform.div.email.value;
    atpos = email.indexOf("@");
    dotpos = email.lastIndexOf(".");
    if(atpos<1 || (dotpos=atpos<2))
    {
        document.myform.div.email.focus();
        alert("Incorrect Email");
        return false
    }
    alert("Correct Email")
    return true
}

function Validation()
{
    if(document.myform.nam.name.value="")
    {
        alert("Please fill your name!");
        document.myform.nam.name.focus();
        return false
    }
    Emailcheck()
    return true
}
