{{{"title":"Delete Nodes From A Certain Date in Drupal","tags":["Drupal"],"date":"11-24-2011"}}}

<p>I wrote this snippet to clear out some nodes that I had imported that ended up being duplicates.  I thought I would share.</p>
<pre>
$time = mktime(0,0,0,11,23,2011);

$result = db_query('SELECT * FROM node WHERE created > %d', $time);
while ($item = db_fetch_object($result)) {
  node_delete($item->nid);
}
</pre>