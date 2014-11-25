{{{"title":"Drupal Form Alter on a Node Reference Widget","tags":["Drupal"],"date":"7-18-2011","description":"<p>My latest battle with Drupal was overriding a select box that was a node reference.  Intuitively I tried to simply update $form['#options'] with my array of custom data.  No deal.  After experimenting with about five ways to implement #after_build on both the form and the field, I realized that the type of a widget is something like 'nodereference_select' instead of just select.  Switching the type back to 'select' allowed me to make the change.  Wow.  Lost a day to that one.</p>"}}}

<p>My latest battle with Drupal was overriding a select box that was a node reference.  Intuitively I tried to simply update $form['#options'] with my array of custom data.  No deal.  After experimenting with about five ways to implement #after_build on both the form and the field, I realized that the type of a widget is something like 'nodereference_select' instead of just select.  Switching the type back to 'select' allowed me to make the change.  Wow.  Lost a day to that one.</p>
<pre> function mymodule_form_alter(&#38;$form, $form_state, $form_id) {    &#160;   
   if($form_id == 'mycontenttype_node_form') {         &#160;    
     // setup array      &#160;     
     $data = array();            &#160;     

     // build your custom data     &#160;     
     // i.e. write some code        &#160;     

     // alter form      &#160;    
     $form['field_myfield']['#type'] = 'select';      &#160;    
     $form['field_myfield']['#options'] = $data;       &#160;  
  }
}</pre>