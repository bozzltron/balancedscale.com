{{{"title":"Delete CCK Inactive Fields","tags":["Drupal"],"date":"1-28-2012"}}}

Inactive fields occur when active fields controlled by a feature are deleted from the feature and the feature is reverted on a database where the fields deleted are currently active.   Here's how to delete them.

<pre>
$fieldname = "";
 db_query('DELETE FROM {content_node_field} WHERE field_name = "%s"', $fieldname);
 db_query('DELETE FROM {content_node_field_instance} WHERE field_name = "%s"', $fieldname);
</pre>