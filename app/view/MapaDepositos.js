Ext.define('TransitoDF.view.MapaDepositos', {
	extend: 'Ext.Map',
	xtype: 'mapadepositos',
	
	config: {
		useCurrentLocation: false,

		mapOptions : {
            zoom : 11,
            navigationControl: true
        },

        listeners: {
            maprender: function(comp, map) {
                Ext.getStore('Depositos').data.each(function() {
                    var position = new google.maps.LatLng(this.data['latitud'], this.data['longitud']);
                    
                    var marker = new google.maps.Marker({
                        position: position,
                        title : this.data['nombre'],
                        map: map
                    });

                    var tel = this.data['telefono'];
                    var infowindow = new google.maps.InfoWindow({
                        content: this.data['nombre']+'<br/><br/><a href="tel:'+tel+'">'+tel+'</a>'
                    });

                    google.maps.event.addListener(marker, 'click', function() {
                        infowindow.open(map, marker);
                    });
                });
                
                setTimeout(function() {
                    map.panTo(new google.maps.LatLng(19.386068, -99.121078));
                }, 1000);
            }
        }
	}
});