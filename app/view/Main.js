Ext.define("TransitoDF.view.Main", {
    extend: 'Ext.navigation.View',
    xtype: 'main',
    id: 'mainView',
    
    config: {
		fullscreen: true,
		
		navigationBar: {
			hidden: true
		},

        layout: {
			type: 'card',
			animation: false
		}
    }
});
