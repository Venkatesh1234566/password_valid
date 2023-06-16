document.getElementById("but").onclick=function()
{
    var a =document.getElementById("pass1").value;
    var b =document.getElementById("pass2").value;
    var s=0;
    var u=0;
    var sm=0;
    for(var i=0;i<a.length;i++)
    {
        if(a.charAt(i)==' ')
        {
            s++;
        }
    }
    for(var i=0;i<a.length;i++)
    {
        if(a.charAt(i)>= 'A' && a.charAt(i)<= 'Z')
        {
            u++;
        }
    }
    for(var i=0;i<a.length;i++)
    {
        if ((a.charAt(i)>= '0' && a.charAt(i)<= '9') )
        {
            sm++;
        }

    }
    var specialChars = "!@#$%^&*(),.?\":{}|<>"; 

    var count = 0;
  
    for (var i = 0; i < a.length; i++) {
      var char = a.charAt(i);
      if (specialChars.indexOf(char) !== -1) {
        count++;
      }
    }
    if(a.length<8)
    {
        document.getElementById("message").innerHTML="    Password should be 8 characters"
    }
    else if(s==1){
        document.getElementById("message").innerHTML="    Password should not contain space"
    }
    else if(u==0)
    {
        document.getElementById("message").innerHTML="    Atleat contain 1 Upper case"
    }
    else if(sm==0)
    {
        document.getElementById("message").innerHTML="    Atleat contain 1 Number "
    }
    else if (count==0)
    {
        document.getElementById("message").innerHTML="    Atleat contain 1 Special Character "
    }
    else if(a!=b)
    {
        document.getElementById("message").innerHTML="    Password Doesn't Match"
    }
    else{
        window.location.href="sucreg.html";
    }

}