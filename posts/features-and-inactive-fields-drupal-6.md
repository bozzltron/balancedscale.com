{{{"title":"Features and inactive fields in Drupal 6","tags":["Drupal"],"date":"6-3-2011"}}}

Problem:
I have a features install in my development instance and my production instances.  I create new fields in both and then want to merge the features back into one.  I download the feature from production, copy the files to my development instance, and revert the feature.  Now the fields I created in my development instance are now inactive because they are not apart of the feature.

Solution:
Disable and reenable the feature and all the modules that come with CCK.


That's the short answer.  Thanks to this thread <a href="http://drupal.org/node/335597" title="http://drupal.org/node/335597">http://drupal.org/node/335597</a>