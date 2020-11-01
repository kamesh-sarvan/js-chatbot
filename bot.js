function take(){ 
        var a=document.createElement("p");
        var x=document.getElementById("vinput").value;  
        var b=document.createTextNode(x);
        a.appendChild(b); 
        var c=document.getElementById("output");  
        c.appendChild(a);   
        
        var q=document.createElement("br");
        var r=document.getElementById("output");   
        r.appendChild(q);  

        if(x.length!=1){ 
                var q=document.createElement("br");
                var r=document.getElementById("output");   
                r.appendChild(q);  

                var q=document.createElement("br");
                var r=document.getElementById("output");   
                r.appendChild(q);  

                var q=document.createElement("br");
                var r=document.getElementById("output");   
                r.appendChild(q);  
  

        }
        if(x=="hi"){  

              var q=document.createElement("br");
               var r=document.getElementById("receive");   
               r.appendChild(q);   

               var i=document.createElement("p");   
               var m="hello welcome to our tourism bot, enter choices to know about our services";
               var z=document.createTextNode(m);
               i.appendChild(z);  
               var n=document.getElementById("receive"); 
               n.appendChild(i);
        } 
        else if(x=="choices"){   
               var q=document.createElement("br");
               var r=document.getElementById("receive");   
               r.appendChild(q); 

               var i=document.createElement("p");    
               var m="1.Devotional places ,  2.Hill stations ,  3.Historical Places , 4.water bodies";
               var z=document.createTextNode(m);   
               i.appendChild(z);  
               var n=document.getElementById("receive"); 
               n.appendChild(i);
        }
        else if(x=="1"){
               var q=document.createElement("br");
               var r=document.getElementById("receive");   
               r.appendChild(q); 
              
                var q=document.createElement("br");
                var r=document.getElementById("receive");   
               r.appendChild(q); 

    
                var k=document.createElement("a");  
                k.setAttribute("href","file:///C:/Users/hp/Desktop/projectnew/devotional.html"); 
                k.innerText="visit devotional places page"; 
                var j=document.getElementById("receive");   
                j.appendChild(k);
        }   
        else if(x=="2"){ 
                var q=document.createElement("br");
                var r=document.getElementById("receive");   
                r.appendChild(q);   

                var q=document.createElement("br");
                var r=document.getElementById("receive");   
                r.appendChild(q);  


                var k=document.createElement("a");  
                k.setAttribute("href","file:///C:/Users/hp/Desktop/projectnew/hill.html"); 
                k.innerText="visit hill stations page";  
                var j=document.getElementById("receive");   
              j.appendChild(k);
        }  
        else if(x=="3"){ 
                var q=document.createElement("br");
                var r=document.getElementById("receive");   
                r.appendChild(q);   

                var q=document.createElement("br");
                var r=document.getElementById("receive");   
                r.appendChild(q);  

                var k=document.createElement("a");  
                k.setAttribute("href","file:///C:/Users/hp/Desktop/projectnew/historical.html"); 
                k.innerText="visit historical places page";  
                var j=document.getElementById("receive");   
                j.appendChild(k);
        }   
        else if(x=="4"){ 
                var q=document.createElement("br");
                var r=document.getElementById("receive");   
                r.appendChild(q);   

                var q=document.createElement("br");
                var r=document.getElementById("receive");   
                r.appendChild(q);  

                var k=document.createElement("a");  
                k.setAttribute("href","file:///C:/Users/hp/Desktop/projectnew/waterbodies.html"); 
                k.innerText="visit water bodies page";  
                var j=document.getElementById("receive");   
                j.appendChild(k);
        }   
        else if(x=="bye"){ 
              var q=document.createElement("br");
               var r=document.getElementById("receive");   
               r.appendChild(q);   

               var q=document.createElement("br");
               var r=document.getElementById("receive");   
               r.appendChild(q);  

               var i=document.createElement("p");   
               var m="Bye,Thanks for using our service";
               var z=document.createTextNode(m);   
               i.appendChild(z);  
               var n=document.getElementById("receive"); 
               n.appendChild(i);
        } 
        
        else{ 
              var q=document.createElement("br");
               var r=document.getElementById("receive");   
               r.appendChild(q);   

               var q=document.createElement("br");
               var r=document.getElementById("receive");   
               r.appendChild(q);  

               var i=document.createElement("p");   
               var m="Sorry,request not found";
               var z=document.createTextNode(m);   
               i.appendChild(z);  
               var n=document.getElementById("receive"); 
               n.appendChild(i);
        } 
        
}