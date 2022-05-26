


          
           function myfunc(){
        var x=document.getElementById("info").value;
        var f="";
        for(i=0;i<x;i++){
          f=f+'Name: <input type="text"> Age: <input type="number"> Gender: <input type="text"><br><br>'
        }
        document.getElementById("div1").innerHTML=f;
      }
          
