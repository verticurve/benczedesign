{% for category in data %}{% 
     assign basePath = '/img/gallery/' | append: {{page.gallery-folder}} | append: '/' | append: {{category.folder}} | append: '/large' %}{%
     assign images = site.static_files | where_exp: "item", "item.path contains basePath" %}
var {{category.folder}} = [{% 
    for image in images %}{% 
        assign path = image.path %}{% 
        assign folders = path | split: "/" | reverse %}{% 
        assign sizeX = folders[1] | split: "x" | first %}{% 
        assign sizeY = folders[1] | split: "x" | last %}
{ src: '{{ path }}', w: {{sizeX}}, h: {{sizeY}} },{%
endfor %}
];{% 
endfor %}
{% include photoswipe.min.js %}{% include photoswipe-ui-default.min.js %}{% include gallery.js %}