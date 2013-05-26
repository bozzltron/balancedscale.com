{{{"title":"Introducing AJAX Get API","tags":["Drupal"],"date":"4-29-2011"}}}

<p>I've been itching to contribute back to the Drupal community for some time now.  Recently, I committed two sandbox projects, one of which is the <a href="http://drupal.org/sandbox/mtbosworth/1135792">AJAX Get API module</a>. &#160;The idea is to create a simple way to request Drupal objects like Nodes, Forms, Views, and Users via AJAX and return HTML or JSON formats. &#160;I haven't been able to find a tool like this so I developed it with some help of my coworkers. &#160;We've incorporated this module into our latest project, which boasts a pretty slick application-like AJAX interface. &#160;We get forms, submit data, and refresh views thanks to this module and the exist Ajax module, which we use for submiting the data via ajax. &#160;Here's an example.</p>
<p>&#160;</p>
<p>&#160;</p>
<pre> // Code from mymodule.js                  

// Attach click event to button to dynamcally load form into a jQueryUI Dialog    
$(".my-button").unbind('click').click(function(){       
  $.ajax({url:'/ajax-get/form/mycontenttype_node_form',success:function(html){                
    // build the dialog         
    $("#mydialog").remove();        
    var dialog = $('&#60;div&#62;').attr({"title":"Create MyContentType",id:"dialog"}).append(html); 

    // show the dialog        
    $(dialog).dialog({width:600,modal:true,closeOnEscape:true,open:function(){                    
      // reload behaviors for new form          
      Drupal.attachBehaviors(dialog);                   
    }});              
  }})           
});  

// Wait for DOM 
$(document).ready(function() {    
  // JavaScript hook for Ajax module  
  Drupal.Ajax.plugins.mymodule = function(hooks,args){        
    switch(hooks){      
      case 'complete':        
        // The AJAX form has submitted successfully so lets  update the view      
        if(args.form_id == "mycontenttype_node_form"){            
          // close dialog         
          $("#mydialog").fadeOut('fast').remove();  
              
          // update my_view (This function is provided by AJAX Get API as a helper)   
    Drupal.AjaxGetAPI.updateView('my_view');  
        }             
      return false;       
      break;    
    }   
  };   
}); </pre>