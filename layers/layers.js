var wms_layers = [];

var format_2023_0 = new ol.format.GeoJSON();
var features_2023_0 = format_2023_0.readFeatures(json_2023_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2023_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2023_0.addFeatures(features_2023_0);
var lyr_2023_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2023_0, 
                style: style_2023_0,
                popuplayertitle: "2023",
                interactive: true,
    title: '2023<br />\
    <img src="styles/legend/2023_0_0.png" /> 66<br />\
    <img src="styles/legend/2023_0_1.png" /> 73<br />\
    <img src="styles/legend/2023_0_2.png" /> 76<br />\
    <img src="styles/legend/2023_0_3.png" /> 77<br />\
    <img src="styles/legend/2023_0_4.png" /> 79<br />\
    <img src="styles/legend/2023_0_5.png" /> 80<br />\
    <img src="styles/legend/2023_0_6.png" /> 81<br />\
    <img src="styles/legend/2023_0_7.png" /> 82<br />\
    <img src="styles/legend/2023_0_8.png" /> 85<br />\
    <img src="styles/legend/2023_0_9.png" /> 86<br />\
    <img src="styles/legend/2023_0_10.png" /> 87<br />\
    <img src="styles/legend/2023_0_11.png" /> 88<br />\
    <img src="styles/legend/2023_0_12.png" /> 89<br />\
    <img src="styles/legend/2023_0_13.png" /> 90<br />\
    <img src="styles/legend/2023_0_14.png" /> 92<br />\
    <img src="styles/legend/2023_0_15.png" /> 93<br />\
    <img src="styles/legend/2023_0_16.png" /> 94<br />\
    <img src="styles/legend/2023_0_17.png" /> 96<br />\
    <img src="styles/legend/2023_0_18.png" /> 98<br />\
    <img src="styles/legend/2023_0_19.png" /> 99<br />\
    <img src="styles/legend/2023_0_20.png" /> <br />'
        });
var format_2022_1 = new ol.format.GeoJSON();
var features_2022_1 = format_2022_1.readFeatures(json_2022_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2022_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2022_1.addFeatures(features_2022_1);
var lyr_2022_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2022_1, 
                style: style_2022_1,
                popuplayertitle: "2022",
                interactive: true,
    title: '2022<br />\
    <img src="styles/legend/2022_1_0.png" /> 65<br />\
    <img src="styles/legend/2022_1_1.png" /> 73<br />\
    <img src="styles/legend/2022_1_2.png" /> 76<br />\
    <img src="styles/legend/2022_1_3.png" /> 77<br />\
    <img src="styles/legend/2022_1_4.png" /> 78<br />\
    <img src="styles/legend/2022_1_5.png" /> 79<br />\
    <img src="styles/legend/2022_1_6.png" /> 80<br />\
    <img src="styles/legend/2022_1_7.png" /> 81<br />\
    <img src="styles/legend/2022_1_8.png" /> 85<br />\
    <img src="styles/legend/2022_1_9.png" /> 86<br />\
    <img src="styles/legend/2022_1_10.png" /> 87<br />\
    <img src="styles/legend/2022_1_11.png" /> 88<br />\
    <img src="styles/legend/2022_1_12.png" /> 89<br />\
    <img src="styles/legend/2022_1_13.png" /> 91<br />\
    <img src="styles/legend/2022_1_14.png" /> 92<br />\
    <img src="styles/legend/2022_1_15.png" /> 93<br />\
    <img src="styles/legend/2022_1_16.png" /> 94<br />\
    <img src="styles/legend/2022_1_17.png" /> 95<br />\
    <img src="styles/legend/2022_1_18.png" /> 96<br />\
    <img src="styles/legend/2022_1_19.png" /> 97<br />\
    <img src="styles/legend/2022_1_20.png" /> 98<br />\
    <img src="styles/legend/2022_1_21.png" /> <br />'
        });
var format_2021_2 = new ol.format.GeoJSON();
var features_2021_2 = format_2021_2.readFeatures(json_2021_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2021_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2021_2.addFeatures(features_2021_2);
var lyr_2021_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2021_2, 
                style: style_2021_2,
                popuplayertitle: "2021",
                interactive: true,
    title: '2021<br />\
    <img src="styles/legend/2021_2_0.png" /> 64<br />\
    <img src="styles/legend/2021_2_1.png" /> 67<br />\
    <img src="styles/legend/2021_2_2.png" /> 73<br />\
    <img src="styles/legend/2021_2_3.png" /> 76<br />\
    <img src="styles/legend/2021_2_4.png" /> 77<br />\
    <img src="styles/legend/2021_2_5.png" /> 79<br />\
    <img src="styles/legend/2021_2_6.png" /> 80<br />\
    <img src="styles/legend/2021_2_7.png" /> 81<br />\
    <img src="styles/legend/2021_2_8.png" /> 83<br />\
    <img src="styles/legend/2021_2_9.png" /> 84<br />\
    <img src="styles/legend/2021_2_10.png" /> 85<br />\
    <img src="styles/legend/2021_2_11.png" /> 86<br />\
    <img src="styles/legend/2021_2_12.png" /> 88<br />\
    <img src="styles/legend/2021_2_13.png" /> 89<br />\
    <img src="styles/legend/2021_2_14.png" /> 90<br />\
    <img src="styles/legend/2021_2_15.png" /> 91<br />\
    <img src="styles/legend/2021_2_16.png" /> 93<br />\
    <img src="styles/legend/2021_2_17.png" /> 94<br />\
    <img src="styles/legend/2021_2_18.png" /> 95<br />\
    <img src="styles/legend/2021_2_19.png" /> 97<br />\
    <img src="styles/legend/2021_2_20.png" /> 99<br />\
    <img src="styles/legend/2021_2_21.png" /> <br />'
        });

lyr_2023_0.setVisible(true);lyr_2022_1.setVisible(true);lyr_2021_2.setVisible(true);
var layersList = [lyr_2023_0,lyr_2022_1,lyr_2021_2];
lyr_2023_0.set('fieldAliases', {'PROVINSI': 'PROVINSI', 'objectif': 'objectif', });
lyr_2022_1.set('fieldAliases', {'PROVINSI': 'PROVINSI', 'objectif': 'objectif', });
lyr_2021_2.set('fieldAliases', {'PROVINSI': 'PROVINSI', 'objectif': 'objectif', });
lyr_2023_0.set('fieldImages', {'PROVINSI': 'TextEdit', 'objectif': 'TextEdit', });
lyr_2022_1.set('fieldImages', {'PROVINSI': 'TextEdit', 'objectif': 'TextEdit', });
lyr_2021_2.set('fieldImages', {'PROVINSI': 'TextEdit', 'objectif': 'TextEdit', });
lyr_2023_0.set('fieldLabels', {'PROVINSI': 'no label', 'objectif': 'no label', });
lyr_2022_1.set('fieldLabels', {'PROVINSI': 'no label', 'objectif': 'no label', });
lyr_2021_2.set('fieldLabels', {'PROVINSI': 'no label', 'objectif': 'no label', });
lyr_2021_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});