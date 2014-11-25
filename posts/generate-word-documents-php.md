{{{"title":"Generate Word Documents With PHP","tags":["PHP"],"date":"1-29-2012","description":"It turns out you have to do a lot of digging online to find some quality solutions for generating Microsoft Word documents in PHP.  Both of these products have their quirks, but its usually all in how you setup your template.\n\n<strong>PHP Word\n<a href=\"http://phpword.codeplex.com/\" title=\"http://phpword.codeplex.com/\">http://phpword.codeplex.com/</a>\n\nThis is a nice PHP library for updating doc and docx documents.</strong>"}}}

It turns out you have to do a lot of digging online to find some quality solutions for generating Microsoft Word documents in PHP.  Both of these products have their quirks, but its usually all in how you setup your template.

<strong>PHP Word
<a href="http://phpword.codeplex.com/" title="http://phpword.codeplex.com/">http://phpword.codeplex.com/</a>

This is a nice PHP library for updating doc and docx documents.  It uses a simple curly brace syntax, for example {name}, for replacing variables with real data.

<strong>LiveDocX</strong>
<a href="http://www.livedocx.com/" title="http://www.livedocx.com/">http://www.livedocx.com/</a>

A sweet web service that allows you to call their api, pass and array of data, and get a document back in a number of different formats include pdf, rtf, and doc.  Beware of the volume of documents that you need to generate.  The have a 1000 document limit a month on the free service.  If don't have the money and need to generate more, use PHP Word.</strong>