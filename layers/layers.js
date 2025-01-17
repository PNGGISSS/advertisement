ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([15507849.855369, -1559073.040753, 17696364.216155, -155093.808656]);
var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_PNGGISSSShortCourses_2 = new ol.format.GeoJSON();
var features_PNGGISSSShortCourses_2 = format_PNGGISSSShortCourses_2.readFeatures(json_PNGGISSSShortCourses_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PNGGISSSShortCourses_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PNGGISSSShortCourses_2.addFeatures(features_PNGGISSSShortCourses_2);
var lyr_PNGGISSSShortCourses_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PNGGISSSShortCourses_2, 
                style: style_PNGGISSSShortCourses_2,
                popuplayertitle: "PNG GISSS-Short Courses",
                interactive: true,
                title: '<img src="styles/legend/PNGGISSSShortCourses_2.png" /> PNG GISSS-Short Courses'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_PNGGISSSShortCourses_2.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_OSMStandard_1,lyr_PNGGISSSShortCourses_2];
lyr_PNGGISSSShortCourses_2.set('fieldAliases', {'id': 'id', 'Location': 'Location', 'Date': 'Date', 'Duration': 'Duration', 'Time': 'Time', 'Moderator': 'Moderator', 'Courses': 'Courses', });
lyr_PNGGISSSShortCourses_2.set('fieldImages', {'id': 'TextEdit', 'Location': 'TextEdit', 'Date': '', 'Duration': '', 'Time': '', 'Moderator': '', 'Courses': '', });
lyr_PNGGISSSShortCourses_2.set('fieldLabels', {'id': 'no label', 'Location': 'header label - visible with data', 'Date': 'header label - visible with data', 'Duration': 'header label - visible with data', 'Time': 'header label - visible with data', 'Moderator': 'header label - visible with data', 'Courses': 'header label - visible with data', });
lyr_PNGGISSSShortCourses_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});