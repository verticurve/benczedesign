{% for category in data %}
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
{% include photoswipe.min.js %}{% include photoswipe-ui-default.min.js %}{% include gallery.js %}