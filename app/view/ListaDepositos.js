Ext.define('TransitoDF.view.ListaDepositos', {
	extend: 'Ext.List',
	xtype: 'listadepositos',

	requires: ['Ext.TitleBar', 'Ext.Button'],
	
	config: {
		store: 'Depositos',

		onItemDisclosure: false,
		grouped: true,
		itemTpl: '{nombre}',
		
		items: [
			{
				xtype: 'titlebar',
				title: 'Depósitos vehiculares',
				docked: 'top',
				style: 'background-color: black; background-image: none;',

				items: [
					{
						xtype: 'button',

						action: 'verMapa',
						align: 'right',
						iconCls: 'icono_mapa'
					}
				]
			}
		]
	}
});