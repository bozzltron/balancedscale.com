{{{"title":"Comparing Syntax of MooTools 1.1 with MooTools 1.2 and jQuery 1.4","tags":["JavaScript"],"date":"3-12-2010","description":"<p>This is not a comprehensive comparison, but is a comparison of the functions that I used the most.  Readers should note that while syntax appears similar, the philosophies of MooTools and jQuery are very different resulting in a fundamental differences in their implementation.  This data is intended for those that are analyzing cost in switching frameworks and is not intended for someone trying to determine which framework to use.</p>"}}}

<p>This is not a comprehensive comparison, but is a comparison of the functions that I used the most.  Readers should note that while syntax appears similar, the philosophies of MooTools and jQuery are very different resulting in a fundamental differences in their implementation.  This data is intended for those that are analyzing cost in switching frameworks and is not intended for someone trying to determine which framework to use.</p>
<table class="table table-striped">
    <tbody>
        <tr>
            <td>
                
<h3>Mootools 1.12</h3>

            </td>
            <td>
                
<h3>Mootools 1.2.4</h3>

            </td>
            <td>
                
<h3>jQuery 1.4.2</h3>

            </td>
        </tr>
        <tr>
            <td><strong>Browser Detection</strong>
            </td>
            <td>&#160;</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>window.ie6</td>
            <td>Browser.Engine.trident4</td>
            <td>jQuery.browser</td>
        </tr>
        <tr>
            <td>&#160;</td>
            <td>&#160;</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td><strong>Element</strong>
            </td>
            <td>&#160;</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>el.setHTML(string|array)</td>
            <td>el.set('html', string|array)</td>
            <td>e.html('html')</td>
        </tr>
        <tr>
            <td>el.getText()</td>
            <td>el.get('text')</td>
            <td>el.text()</td>
        </tr>
        <tr>
            <td>el.setText(string)</td>
            <td>el.set('text', string)</td>
            <td>el.text('text')</td>
        </tr>
        <tr>
            <td>el.setStyle(style,value)</td>
            <td>el.setStyle(style,value)</td>
            <td>el.css(style,value)</td>
        </tr>
        <tr>
            <td>el.setStyles(object)</td>
            <td>el.setStyles(object)</td>
            <td>el.css(object)</td>
        </tr>
        <tr>
            <td>el.addClass(classname)</td>
            <td>el.addClass(classname)</td>
            <td>el.addClass(classname)</td>
        </tr>
        <tr>
            <td>el.removeClass(classname)</td>
            <td>el.removeClass(classname)</td>
            <td>el.removeClass(classname)</td>
        </tr>
        <tr>
            <td>el.remove()</td>
            <td>el.dispose()</td>
            <td>e.remove()</td>
        </tr>
        <tr>
            <td>el.replaceWith(element)</td>
            <td>element.replaces(el)</td>
            <td>el.replaceWith(el)</td>
        </tr>
        <tr>
            <td>new Fx(el,obj)</td>
            <td>new Fx.Morph(el, obj)</td>
            <td>el.animate()</td>
        </tr>
        <tr>
            <td>new Element(type,params)</td>
            <td>new Element(type,params)</td>
            <td>el.append(html)/el.appendTo(html)</td>
        </tr>
        <tr>
            <td>$('selector')</td>
            <td>$('selector')</td>
            <td>$('#selector')</td>
        </tr>
        <tr>
            <td>$$('.classname')</td>
            <td>$$('.classname')</td>
            <td>$('.classname')</td>
        </tr>
        <tr>
            <td>$E(selector)</td>
            <td>$$('selector').getFirst()</td>
            <td>$(selector).first()</td>
        </tr>
        <tr>
            <td>$ES(selector)</td>
            <td>$$('selector')</td>
            <td>$(selector)</td>
        </tr>
        <tr>
            <td>el.getSize().size.x/ el.getSize().size.y</td>
            <td>el.getSize().x/ el.getSize().y</td>
            <td>el.height() / el.width()</td>
        </tr>
        <tr>
            <td>el.getValue()</td>
            <td>el.get('value')</td>
            <td>el.val()</td>
        </tr>
        <tr>
            <td>el.setProperty(attribute,value)</td>
            <td>el.setProperty(attribute,value)</td>
            <td>el.attr(attribute,value)</td>
        </tr>
        <tr>
            <td>el.getProperty(attribute)</td>
            <td>el.getProperty(attribute)</td>
            <td>el.attr(attribute)</td>
        </tr>
        <tr>
            <td>el.injectInside(el)</td>
            <td>&#160;</td>
            <td>el.appendTo(el)</td>
        </tr>
        <tr>
            <td>el.injectAfter(el)</td>
            <td>&#160;</td>
            <td>el.insertAfter(el)</td>
        </tr>
        <tr>
            <td>el.getParent()</td>
            <td>el.getParent()</td>
            <td>el.parent()</td>
        </tr>
        <tr>
            <td>el.getChildren()</td>
            <td>el.getChildren()</td>
            <td>el.children()</td>
        </tr>
        <tr>
            <td>el.getNext()</td>
            <td>el.getNext()</td>
            <td>el.next()</td>
        </tr>
        <tr>
            <td>el.getPrevious()</td>
            <td>el.getPrevious()</td>
            <td>el.prev()</td>
        </tr>
        <tr>
            <td>el.getLast()</td>
            <td>el.getLast()</td>
            <td>el.first() / $(selector:first-child)</td>
        </tr>
        <tr>
            <td>el.getFirst()</td>
            <td>el.getFirst()</td>
            <td>el.last() / $(selector:last-child)</td>
        </tr>
        <tr>
            <td>&#160;</td>
            <td>&#160;</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td><strong>Event</strong>
            </td>
            <td>&#160;</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>window.addEvent("domready",fn)</td>
            <td>window.addEvent("domready",fn)</td>
            <td>$(document).ready(fn)</td>
        </tr>
        <tr>
            <td>el.addEvent("click",fn)</td>
            <td>el.addEvent("click",fn)</td>
            <td>el.click()</td>
        </tr>
        <tr>
            <td>el.addEvent("focus",fn)</td>
            <td>el.addEvent("focus",fn)</td>
            <td>el.focus()</td>
        </tr>
        <tr>
            <td>el.addEvent("blur",fn)</td>
            <td>el.addEvent("blur",fn)</td>
            <td>el.blur()</td>
        </tr>
        <tr>
            <td>el.addEvent("mouseenter",fn)</td>
            <td>el.addEvent("mouseenter",fn)</td>
            <td>el.mouseenter()</td>
        </tr>
        <tr>
            <td>el.addEvent("mouseleave",fn)</td>
            <td>el.addEvent("mouseleave",fn)</td>
            <td>el.mouseleave()</td>
        </tr>
        <tr>
            <td>el.addEvent("unload",fn)</td>
            <td>el.addEvent("unload",fn)</td>
            <td>el.unload()</td>
        </tr>
        <tr>
            <td>el.addEvent("submit",fn)</td>
            <td>el.addEvent("submit",fn)</td>
            <td>el.submit()</td>
        </tr>
        <tr>
            <td>el.removeEvent(event)</td>
            <td>el.removeEvent(event)</td>
            <td>el.unbind(event)</td>
        </tr>
        <tr>
            <td>event.stop()</td>
            <td>event.stop()</td>
            <td>event.stopPropagation()</td>
        </tr>
        <tr>
            <td>event.preventDefault()</td>
            <td>event.preventDefault()</td>
            <td>event.preventDefault()</td>
        </tr>
        <tr>
            <td>&#160;</td>
            <td>&#160;</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td><strong>Array</strong>
            </td>
            <td>&#160;</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>[].merge([])</td>
            <td>3. [].combine([])</td>
            <td>jQuery.merge([],[])</td>
        </tr>
        <tr>
            <td>&#160;</td>
            <td>&#160;</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td><strong>Ajax</strong>
            </td>
            <td>&#160;</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td>new Ajax</td>
            <td>new Request</td>
            <td>jQuery.ajax()</td>
        </tr>
    </tbody>
</table>