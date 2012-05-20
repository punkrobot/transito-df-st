Ext.define('TransitoDF.controller.PrincipalController', {
	extend: 'Ext.app.Controller',
	
	requires:  ['TransitoDF.view.Articulos',
				'TransitoDF.view.CalcMultas',
				'TransitoDF.view.ListaDepositos'],
	
	stores: ['Reglamento'],

	config: {
		routes: {
			'verCalculadora': 'verCalculadora',
			'verReglamento': 'verReglamento',
			'verListaDepositos': 'verListaDepositos',
			'^/?': 'inicio'
		},

		refs: {
			main: 'main'
		},
		
		control: {
			'button[action=verReglamento]' : {
				tap: function() {
					this.redirectTo('verReglamento');
				}
			}, 

			'button[action=verCalculadora]' : {
				tap: function() {
					this.redirectTo('verCalculadora');
				}
			},

			'button[action=verListaDepositos]' : {
				tap: function() {
					this.redirectTo('verListaDepositos');
				}
			},

			'button[action=verArticulo]' : {
				tap: function(button) {
					this.redirectTo('verArticulo/' + button.getData().articulo);
				}
			}
		}
	},

	verReglamento: function() {
		this.getMain().push({
			xtype: 'articulos'
		});
	},

	verCalculadora: function() {
		this.getMain().push({
			xtype: 'calcmultas'
		});
	},

	verListaDepositos: function() {
		this.getMain().push({
			xtype: 'listadepositos'
		});
	},

	inicio: function(){
		this.getMain().setActiveItem({
			xtype: 'principal'
		});
		Ext.getStore('Reglamento').clearFilter();
	}
});