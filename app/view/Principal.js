Ext.define('TransitoDF.view.Principal', {
	extend: 'Ext.Container',
	xtype: 'principal',

	requires: ['TransitoDF.view.BotonVerArticulo', 'Ext.TitleBar', 'Ext.carousel.Carousel', 'Ext.Panel', 'Ext.Button', 'Ext.Label'],
	
	config: {
		layout: 'vbox',
		
		items: [
			{
				xtype: 'titlebar',
				title: 'Reglamento de tránsito DF',
				docked: 'top',
				style: 'background-color: black; background-image: none;'
			},
			{
				xtype: 'carousel',
				itemId: 'consejos',
				styleHtmlContent: true,
				width: '90%',
				flex: 3,
				config: {
					fullscreen: false,
					direction: 'horizontal',
					indicator: true
				}
			},
			{
				xtype: 'panel',
				flex: 2,
				layout: {
					type: 'vbox',
					align: 'center'
				},
				defaults: {
					xtype: 'button',
					width: '80%',
					margin: 5
				},
				items: [
					{
						action: 'verReglamento',
						ui: 'action',
						text: 'Consultar reglamento',
						iconCls: 'icono_reg'
					},
					{
						action: 'verCalculadora',
						text: 'Calculadora de multas',
						iconCls: 'icono_calc'
					},
					{
						action: 'verListaDepositos',
						text: 'Depósitos vehiculares',
						iconCls: 'icono_dep'
					}
				]
			}
		]
	},

	initialize: function() {
		var carousel = this.getComponent('consejos');
		var items = [];

		Ext.getStore('Consejos').data.each(function() {
			items.push({
				xtype: 'panel',
				layout: 'vbox',
				styleHtmlContent: true,
				items: [
					{
						xtype: 'label',
						html: '<strong>'+this.data['titulo']+'</strong>',
						style: 'margin-bottom:10px;'
					},
					{
						xtype: 'label',
						html: this.data['descripcion'],
						style: 'margin-bottom:10px;'
					},
					{
						xtype: 'panel',
						layout: 'hbox',
						items: [
							{ xtype: 'spacer' },
							{
								xtype: 'botonarticulo',
								data: { articulo: this.data['articulo'] }
							}
						],
						hidden: this.data['articulo'] == 0 ? true : false
					}
				]
			});
		});
		carousel.setItems(items);
	}
});