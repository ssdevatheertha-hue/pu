var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_kerala_1 = new ol.format.GeoJSON();
var features_kerala_1 = format_kerala_1.readFeatures(json_kerala_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kerala_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kerala_1.addFeatures(features_kerala_1);
var lyr_kerala_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kerala_1, 
                style: style_kerala_1,
                popuplayertitle: 'kerala',
                interactive: true,
                title: '<img src="styles/legend/kerala_1.png" /> kerala'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_kerala_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_kerala_1];
lyr_kerala_1.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'ID_2': 'ID_2', 'NAME_2': 'NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'NL_NAME_2': 'NL_NAME_2', 'VARNAME_2': 'VARNAME_2', 'date': 'date', });
lyr_kerala_1.set('fieldImages', {'ID_0': '', 'ISO': '', 'NAME_0': '', 'ID_1': '', 'NAME_1': '', 'ID_2': '', 'NAME_2': '', 'TYPE_2': '', 'ENGTYPE_2': '', 'NL_NAME_2': '', 'VARNAME_2': '', 'date': '', });
lyr_kerala_1.set('fieldLabels', {'ID_0': 'inline label - always visible', 'ISO': 'inline label - always visible', 'NAME_0': 'inline label - always visible', 'ID_1': 'inline label - always visible', 'NAME_1': 'inline label - always visible', 'ID_2': 'inline label - always visible', 'NAME_2': 'inline label - always visible', 'TYPE_2': 'inline label - always visible', 'ENGTYPE_2': 'inline label - always visible', 'NL_NAME_2': 'inline label - always visible', 'VARNAME_2': 'inline label - always visible', 'date': 'inline label - always visible', });
lyr_kerala_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});