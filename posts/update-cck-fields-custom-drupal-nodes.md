{{{"title":"Update CCK Fields In Custom Drupal Nodes","tags":["Drupal"],"date":"6-22-2010","description":"<p><strong>This Post Has Been Updated From The Original : See Bottom</strong></p>\n<p>This was a major hang up on my recent project.  I thought I would share in hopes of saving someone else sometime.  The explanation for the code being this tedious has to do with CCK's database structure.  Each field is given its own table, so to avoid costly queries CCK has a database cache.  Here is the code.  I had to read through several other posts to find this.  I'll try to link to those when I get time.</p>"}}}

<p><strong>This Post Has Been Updated From The Original : See Bottom</strong></p>
<p>This was a major hang up on my recent project.  I thought I would share in hopes of saving someone else sometime.  The explanation for the code being this tedious has to do with CCK's database structure.  Each field is given its own table, so to avoid costly queries CCK has a database cache.  Here is the code.  I had to read through several other posts to find this.  I'll try to link to those when I get time.</p>
<pre>// Load node to edit
$node = node_load($your_node_id);

// Index value of the cck field
$index = 0;
 
// value that you want to insert
$new_value = 3;
  
// Set value
$node-&#62;field_your_field[$index] = array('value' =&#62; $new_value);

// Save Node
node_save($node);

// Update content if node exists, otherwise use content_insert()
content_update($node);

// Clear CCK data cache so the new value will be loaded for dispaly purposes
db_query("DELETE FROM {cache_content} WHERE cid = '%s'", 'content:' . $node-&#62;nid . ':' . $node-&#62;vid);
</pre><p><strong>Update:</strong></p>
<p>Since writing this new things have come to light.  While the code above works.  It is overkill simply saving a CCK field.  Also, there are more than one scenario for updating.</p>
<p>Scenario 1:  node_save</p>
<pre>// Load node to edit
$node = node_load($your_node_id);

// Index value of the cck field (Depends on the number of values your field accepts)
$index = 0;
  
// Set value
$node-&#62;field_your_field[$index] = array('value' =&#62; $new_value);

// Save Node
node_save($node);
</pre><p>node_save runs cache_clear_all() so you don't need to delete a row from CCK cache.</p>
<p>Scenario 2: db_query</p>
<pre>// Load node to edit
$node = node_load($your_node_id);

// Index value of the cck field (Depends on the number of values your field accepts)
$index = 0;

// Save Node
db_query('UPDATE {content_type_x} SET field_y="%s" WHERE vid="%s" AND nid="%s"', $new_value, $node-&#62;vid, $node-&#62;nid);

// Clear CCK data cache so the new value will be loaded for dispaly purposes
db_query("DELETE FROM {cache_content} WHERE cid = '%s'", 'content:' . $node-&#62;nid . ':' . $node-&#62;vid);
</pre>