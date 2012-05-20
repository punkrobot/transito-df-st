Ext.define('TransitoDF.view.Articulos', {
	extend: 'Ext.List',
	xtype: 'articulos',
	
	requires: ['Ext.TitleBar', 'Ext.Toolbar', 'Ext.field.Search'],

	config: {
		store: 'Reglamento',
		
		onItemDisclosure: false,
		sorters: 'titulo',
		grouped: true,
		
		itemTpl: '{titulo}',
		
		items: [
			{
				xtype: 'titlebar',
				title: 'Reglamento de tránsito DF',
				docked: 'top',
				style: 'background-color: black; background-image: none;'
			},
			{
				xtype: 'toolbar',
				docked: 'bottom',
				style: 'background-color: black; background-image: none;',
				
				items: [
					{
						xtype: 'searchfield',
						placeHolder: 'Búsqueda...',
						centered: true
					}
				]
			}
		]
	}
});