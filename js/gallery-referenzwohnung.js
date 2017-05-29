---
gallery-folder: referenzwohnung
---
{% for category in site.data.gallery_categories %}
var {{category.folder}} = [{% 
    for image in site.static_files %}{% 
        assign basePath = '/img/gallery/' | append: {{page.gallery-folder}} | append: '/' | append: {{category.folder}} | append: '/large' %}{% 
        if image.path contains basePath %}{% 
            assign path = image.path %}{% 
            assign folders = path | split: "/" | reverse %}{% 
            assign sizeX = folders[1] | split: "x" | first %}{% 
            assign sizeY = folders[1] | split: "x" | last %}
{ src: '{{ path }}', w: {{sizeX}}, h: {{sizeY}} },{% 
    endif %}{% 
endfor %}
];{% 
endfor %}
{% include gallery.js %}