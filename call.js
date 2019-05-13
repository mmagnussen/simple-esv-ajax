$.ajax({ 
   type : "GET", 
   url : "https://api.esv.org/v3/passage/text/?q=John+11:35", 
   beforeSend: function(xhr){xhr.setRequestHeader('Authorization', '[ENTER YOUR TOKEN]');},
   success : function(result) { 
      console.log(result); 
   }, 
   error : function(result) { 
     //handle the error 
   } 
 }); 
