Ext.define('TransitoDF.controller.ArticulosController', {
	extend: 'Ext.app.Controller',
	
	requires:  ['TransitoDF.view.Articulos'],
	
	stores: ['Reglamento'],

	config: {
		routes: {
			'verArticulo/:num': 'verArticulo'
		},

		refs: {
			main: 'main'
		},
		
		control: {
			'articulos' : {
				itemtap: function(view, index, target, record) {
					this.redirectTo('verArticulo/'+record.data.id);
					Ext.getStore('Reglamento').clearFilter();
				}
			},
			
			'searchfield': {
				clearicontap: 'limpiarBusqueda',
				keyup: 'busqueda'
			}
		}
	},

	verArticulo: function(num){
		var reg = Ext.getStore('Reglamento');
		var art = reg.findRecord('id',num);

		this.getMain().push({
			xtype: 'panel',
			data: art.data,
			styleHtmlContent: true,
			scrollable: 'vertical',
			tpl: '{texto}'+
				'<tpl if="sanciones != null">'+
					'<br/>{sanciones}'+
				'</tpl>',
			items:[
				{
					xtype: 'titlebar',
					title: art.data.titulo,
					docked: 'top',
					style: 'background-color: black; background-image: none;'
				}
			]
		});
	},

	busqueda: function(field) {
		var value = field.getValue();
		var store = Ext.getStore('Reglamento');

		store.clearFilter();

		if (value) {
			var searches = value.split(' '), regexps = [], i;
			
			for (i = 0; i < searches.length; i++) {
				if (!searches[i]) continue;
				regexps.push(new RegExp(searches[i], 'i'));
			}
			
			store.filter(function(record) {
				var matched = [];
				for (i = 0; i < regexps.length; i++) {
					var search = regexps[i];
					var didMatch = record.get('titulo').match(search) || record.get('texto').match(search);
					matched.push(didMatch);
				}
				if (regexps.length > 1 && matched.indexOf(false) != -1) 
					return false;
				else 
					return matched[0];
			});
		}
	},

	limpiarBusqueda: function() {
		Ext.getStore('Reglamento').clearFilter();
	}

});
