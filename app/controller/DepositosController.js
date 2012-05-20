Ext.define('TransitoDF.controller.DepositosController', {
	extend: 'Ext.app.Controller',
	
	requires:  ['TransitoDF.view.MapaDepositos', 
				'TransitoDF.view.ListaDepositos', 
				'Ext.MessageBox'],

	stores: ['Depositos'],

	config: {
		routes: {
			'verMapa': 'lazyLoadScript'
		},

		refs: {
			main: 'main'
		},
		
		control: {
			'listadepositos': {
				select: 'verDeposito'
			},

			'button[action=verMapa]': {
				tap: function(){
					this.redirectTo('verMapa');
				}
			}
		}
	},

	verDeposito: function(view, record){
		var tel = record.get('telefono');

		Ext.Msg.alert(record.get('nombre'), 
			'Delegación ' + record.get('delegacion') + 
			'<br/><br/>' + record.get('direccion') + 
			'<br/><br/> Teléfono: <a href="tel:' + tel +'">' + tel + '</a>');
	},

	/*
	*	Carga el script de google, al terminar se ejecuta la función verMapa definida en el archivo app.js
	*/
	lazyLoadScript: function() {
		if (typeof google === 'undefined') {
			var script = document.createElement("script");
			script.type = "text/javascript";
			script.src = "http://maps.googleapis.com/maps/api/js?sensor=true&callback=TransitoDF.app.verMapa";
			document.body.appendChild(script);
		} else {
			this.getMain().push({
				xtype: 'mapadepositos'
			});
		}
	}
});