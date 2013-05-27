{{{"title":"Comparing Syntax of MooTools 1.1 with MooTools 1.2 and jQuery 1.4","tags":["JavaScript"],"date":"3-12-2010","description":"<p>This is not a comprehensive comparison, but is a comparison of the functions that I used the most.  Readers should note that while syntax appears similar, the philosophies of MooTools and jQuery are very different resulting in a fundamental differences in their implementation.  This data is intended for those that are analyzing cost in switching frameworks and is not intended for someone trying to determine which framework to use.</p>"}}}

<p>This is not a comprehensive comparison, but is a comparison of the functions that I used the most.  Readers should note that while syntax appears similar, the philosophies of MooTools and jQuery are very different resulting in a fundamental differences in their implementation.  This data is intended for those that are analyzing cost in switching frameworks and is not intended for someone trying to determine which framework to use.</p>
<table border="0">
<tbody>
<tr class="rShim">
<td class="rShim" style="width: 0pt;">&#160;</td>
<td class="rShim" style="width: 350px;">&#160;</td>
<td class="rShim" style="width: 350px;">&#160;</td>
<td class="rShim" style="width: 350px;">&#160;</td>
</tr>
<tr>
<td class="hd">
<p style="height: 19px;">.</p>
</td>
<td class="s0">
<h3>Mootools 1.12</h3>
</td>
<td class="s1">
<h3>Mootools 1.2.4</h3>
</td>
<td class="s1">
<h3>jQuery 1.4.2</h3>
</td>
</tr>
<tr>
<td class="hd">
<p style="height: 19px;"><strong>.</strong></p>
</td>
<td class="s2"><strong>Browser Detection</strong></td>
<td>&#160;</td>
<td>&#160;</td>
</tr>
<tr>
<td class="hd">
<p style="height: 19px;">.</p>
</td>
<td class="s3">window.ie6</td>
<td class="s4">Browser.Engine.trident4</td>
<td class="s4">jQuery.browser</td>
</tr>
<tr>
<td class="hd">
<p style="height: 19px;">.</p>
</td>
<td class="s5">&#160;</td>
<td>&#160;</td>
<td>&#160;</td>
</tr>
<tr>
<td class="hd">
<p style="height: 19px;"><strong>.</strong></p>
</td>
<td class="s2"><strong>Element</strong></td>
<td>&#160;</td>
<td>&#160;</td>
</tr>
<tr>
<td class="hd">
<p style="height: 19px;">.</p>
</td>
<td class="s3">el.setHTML(string|array)</td>
<td class="s4">el.set('html', string|array)</td>
<td class="s4">e.html('html')</td>
</tr>
<tr>
<td class="hd">
<p style="height: 19px;">.</p>
</td>
<td class="s3">el.getText()</td>
<td class="s4">el.get('text')</td>
<td class="s4">el.text()</td>
</tr>
<tr>
<td class="hd">
<p style="height: 19px;">.</p>
</td>
<td class="s3">el.setText(string)</td>
<td class="s4">el.set('text', string)</td>
<td class="s4">el.text('text')</td>
</tr>
<tr>
<td class="hd">
<p style="height: 19px;">.</p>
</td>
<td class="s3">el.setStyle(style,value)</td>
<td class="s4">el.setStyle(style,value)</td>
<td class="s4">el.css(style,value)</td>
</tr>
<tr>
<td class="hd">
<p style="height: 19px;">.</p>
</td>
<td class="s3">el.setStyles(object)</td>
<td class="s4">el.setStyles(object)</td>
<td class="s4">el.css(object)</td>
</tr>
<tr>
<td class="hd">
<p style="height: 19px;">.</p>
</td>
<td class="s3">el.addClass(classname)</td>
<td class="s4">el.addClass(classname)</td>
<td class="s4">el.addClass(classname)</td>
</tr>
<tr>
<td class="hd">
<p style="height: 19px;">.</p>
</td>
<td class="s3">el.removeClass(classname)</td>
<td class="s4">el.removeClass(classname)</td>
<td class="s4">el.removeClass(classname)</td>
</tr>
<tr>
<td class="hd">
<p style="height: 19px;">.</p>
</td>
<td class="s3">el.remove()</td>
<td class="s4">el.dispose()</td>
<td class="s4">e.remove()</td>
</tr>
<tr>
<td class="hd">
<p style="height: 19px;">.</p>
</td>
<td class="s3">el.replaceWith(element)</td>
<td class="s4">element.replaces(el)</td>
<td class="s4">el.replaceWith(el)</td>
</tr>
<tr>
<td class="hd">
<p style="height: 19px;">.</p>
</td>
<td class="s3">new Fx(el,obj)</td>
<td class="s4">new Fx.Morph(el, obj)</td>
<td class="s4">el.animate()</td>
</tr>
<tr>
<td class="hd">
<p style="height: 19px;">.</p>
</td>
<td class="s3">new Element(type,params)</td>
<td class="s4">new Element(type,params)</td>
<td class="s4">el.append(html)/el.appendTo(html)</td>
</tr>
<tr>
<td class="hd">
<p style="height: 19px;">.</p>
</td>
<td class="s3">$('selector')</td>
<td class="s4">$('selector')</td>
<td class="s4">$('#selector')</td>
</tr>
<tr>
<td class="hd">
<p style="height: 19px;">.</p>
</td>
<td class="s3">$$('.classname')</td>
<td class="s4">$$('.classname')</td>
<td class="s4">$('.classname')</td>
</tr>
<tr>
<td class="hd">
<p style="height: 19px;">.</p>
</td>
<td class="s3">$E(selector)</td>
<td class="s4">$$('selector').getFirst()</td>
<td class="s4">$(selector).first()</td>
</tr>
<tr>
<td class="hd">
<p style="height: 19px;">.</p>
</td>
<td class="s3">$ES(selector)</td>
<td class="s4">$$('selector')</td>
<td class="s4">$(selector)</td>
</tr>
<tr class="rShim">
<td class="rShim" style="width: 0pt;">&#160;</td>
<td class="rShim" style="width: 350px;">&#160;</td>
<td class="rShim" style="width: 350px;">&#160;</td>
<td class="rShim" style="width: 350px;">&#160;</td>
</tr>
<tr>
<td class="hd">
<p style="height: 19px;">.</p>
</td>
<td class="s3">el.getSize().size.x/ el.getSize().size.y</td>
<td class="s4">el.getSize().x/ el.getSize().y</td>
<td class="s4">el.height() / el.width()</td>
</tr>
<tr>
<td class="hd">
<p style="height: 19px;">.</p>
</td>
<td class="s6">el.getValue()</td>
<td class="s7">el.get('value')</td>
<td class="s7">el.val()</td>
</tr>
<tr>
<td class="hd">
<p style="height: 19px;">.</p>
</td>
<td class="s6">el.setProperty(attribute,value)</td>
<td class="s7">el.setProperty(attribute,value)</td>
<td class="s7">el.attr(attribute,value)</td>
</tr>
<tr>
<td class="hd">
<p style="height: 19px;">.</p>
</td>
<td class="s6">el.getProperty(attribute)</td>
<td class="s7">el.getProperty(attribute)</td>
<td class="s7">el.attr(attribute)</td>
</tr>
<tr>
<td class="hd">
<p style="height: 19px;">.</p>
</td>
<td class="s6">el.injectInside(el)</td>
<td>&#160;</td>
<td class="s7">el.appendTo(el)</td>
</tr>
<tr>
<td class="hd">
<p style="height: 19px;">.</p>
</td>
<td class="s6">el.injectAfter(el)</td>
<td>&#160;</td>
<td class="s7">el.insertAfter(el)</td>
</tr>
<tr>
<td class="hd">
<p style="height: 19px;">.</p>
</td>
<td class="s6">el.getParent()</td>
<td class="s7">el.getParent()</td>
<td class="s7">el.parent()</td>
</tr>
<tr>
<td class="hd">
<p style="height: 19px;">.</p>
</td>
<td class="s6">el.getChildren()</td>
<td class="s7">el.getChildren()</td>
<td class="s7">el.children()</td>
</tr>
<tr>
<td class="hd">
<p style="height: 19px;">.</p>
</td>
<td class="s6">el.getNext()</td>
<td class="s7">el.getNext()</td>
<td class="s7">el.next()</td>
</tr>
<tr>
<td class="hd">
<p style="height: 19px;">.</p>
</td>
<td class="s6">el.getPrevious()</td>
<td class="s7">el.getPrevious()</td>
<td class="s7">el.prev()</td>
</tr>
<tr>
<td class="hd">
<p style="height: 19px;">.</p>
</td>
<td class="s6">el.getLast()</td>
<td class="s7">el.getLast()</td>
<td class="s7">el.first() / $(selector:first-child)</td>
</tr>
<tr>
<td class="hd">
<p style="height: 19px;">.</p>
</td>
<td class="s6">el.getFirst()</td>
<td class="s7">el.getFirst()</td>
<td class="s7">el.last() / $(selector:last-child)</td>
</tr>
<tr>
<td class="hd">
<p style="height: 19px;">.</p>
</td>
<td class="s5">&#160;</td>
<td>&#160;</td>
<td>&#160;</td>
</tr>
<tr>
<td class="hd">
<p style="height: 19px;">.</p>
</td>
<td class="s8"><strong>Event</strong></td>
<td>&#160;</td>
<td>&#160;</td>
</tr>
<tr>
<td class="hd">
<p style="height: 19px;">.</p>
</td>
<td class="s6">window.addEvent("domready",fn)</td>
<td class="s7">window.addEvent("domready",fn)</td>
<td class="s7">$(document).ready(fn)</td>
</tr>
<tr>
<td class="hd">
<p style="height: 19px;">.</p>
</td>
<td class="s6">el.addEvent("click",fn)</td>
<td class="s7">el.addEvent("click",fn)</td>
<td class="s7">el.click()</td>
</tr>
<tr>
<td class="hd">
<p style="height: 19px;">.</p>
</td>
<td class="s6">el.addEvent("focus",fn)</td>
<td class="s7">el.addEvent("focus",fn)</td>
<td class="s7">el.focus()</td>
</tr>
<tr>
<td class="hd">
<p style="height: 19px;">.</p>
</td>
<td class="s6">el.addEvent("blur",fn)</td>
<td class="s7">el.addEvent("blur",fn)</td>
<td class="s7">el.blur()</td>
</tr>
<tr>
<td class="hd">
<p style="height: 19px;">.</p>
</td>
<td class="s6">el.addEvent("mouseenter",fn)</td>
<td class="s7">el.addEvent("mouseenter",fn)</td>
<td class="s7">el.mouseenter()</td>
</tr>
<tr>
<td class="hd">
<p style="height: 19px;">.</p>
</td>
<td class="s6">el.addEvent("mouseleave",fn)</td>
<td class="s7">el.addEvent("mouseleave",fn)</td>
<td class="s7">el.mouseleave()</td>
</tr>
<tr class="rShim">
<td class="rShim" style="width: 0pt;">&#160;</td>
<td class="rShim" style="width: 350px;">&#160;</td>
<td class="rShim" style="width: 350px;">&#160;</td>
<td class="rShim" style="width: 350px;">&#160;</td>
</tr>
<tr>
<td class="hd">
<p style="height: 19px;">.</p>
</td>
<td class="s6">el.addEvent("unload",fn)</td>
<td class="s7">el.addEvent("unload",fn)</td>
<td class="s7">el.unload()</td>
</tr>
<tr>
<td class="hd">
<p style="height: 19px;">.</p>
</td>
<td class="s6">el.addEvent("submit",fn)</td>
<td class="s7">el.addEvent("submit",fn)</td>
<td class="s7">el.submit()</td>
</tr>
<tr>
<td class="hd">
<p style="height: 19px;">.</p>
</td>
<td class="s6">el.removeEvent(event)</td>
<td class="s7">el.removeEvent(event)</td>
<td class="s7">el.unbind(event)</td>
</tr>
<tr>
<td class="hd">
<p style="height: 19px;">.</p>
</td>
<td class="s6">event.stop()</td>
<td class="s7">event.stop()</td>
<td class="s7">event.stopPropagation()</td>
</tr>
<tr>
<td class="hd">
<p style="height: 19px;">.</p>
</td>
<td class="s6">event.preventDefault()</td>
<td class="s7">event.preventDefault()</td>
<td class="s7">event.preventDefault()</td>
</tr>
<tr>
<td class="hd">
<p style="height: 19px;">.</p>
</td>
<td class="s5">&#160;</td>
<td>&#160;</td>
<td>&#160;</td>
</tr>
<tr>
<td class="hd">
<p style="height: 19px;"><strong>.</strong></p>
</td>
<td class="s11"><strong>Array</strong></td>
<td>&#160;</td>
<td>&#160;</td>
</tr>
<tr>
<td class="hd">
<p style="height: 19px;">.</p>
</td>
<td class="s6">[].merge([])</td>
<td class="s7">3. [].combine([])</td>
<td class="s4">jQuery.merge([],[])</td>
</tr>
<tr>
<td class="hd">
<p style="height: 19px;">.</p>
</td>
<td class="s5">&#160;</td>
<td>&#160;</td>
<td>&#160;</td>
</tr>
<tr>
<td class="hd">
<p style="height: 19px;"><strong>.</strong></p>
</td>
<td class="s2"><strong>Ajax</strong></td>
<td>&#160;</td>
<td>&#160;</td>
</tr>
<tr>
<td class="hd">
<p style="height: 19px;">.</p>
</td>
<td class="s6">new Ajax</td>
<td class="s7">new Request</td>
<td class="s9">jQuery.ajax()</td>
</tr>
</tbody>
</table>