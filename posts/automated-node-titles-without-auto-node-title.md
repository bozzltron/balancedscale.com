{{{"title":"Automated Node Titles Without Auto Node Title","tags":["Drupal"],"date":"10-6-2011"}}}

<p>I am a features user and if you are too then you will share my frustration when you find aspects of other modules that are not exportable, i.e. not capable of being packaged in your feature.  Such is the case with the Auto Node Title module.  However, this is to be expected right?  Ctools module provides the api for making things exportable and we should know not every developer will go ahead and implement this in their module.  So back to our discovery of the non-exportable.  When we get to this point there are several options.  One being "don't use the module" and another being "write an exportable".  Now auto node title is a common enough module that it might benefit from writing an exportable, but in my opinion that is code bloat where it is not needed.  You can accomplish the same thing as auto node title with two Drupal hooks which you can include in the .module file of your feature.  Problem solved.  
<pre>function quick_note_form_alter(&#38;$form, &#38;$form_state, $form_id){      
  if($form_id == 'note_node_form') {        
    // Hide title input box     
    $form['title']['#type'] = 'hidden';       
    // Set a generic value to pass validation     
    $form['title']['#value'] = 'Quick Note ';   
  } 
}  

function quick_note_nodeapi(&#38;$node, $op, $a3 = NULL, $a4 = NULL) {   
  if($node-&#62;type == "note") {     
    switch($op) {       
      case "presave":         
        // Add timestamp to node title for uniqueness         
        $node-&#62;title .= date();        
      break;     
      }   
  } 
}</pre></p>