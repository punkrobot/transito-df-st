Ext.define('TransitoDF.view.BotonVerArticulo', {
	extend: 'Ext.Button',
	xtype: 'botonarticulo',
	
	config: {
		text: 'Ver artículo',
		width: '80px',
		action: 'verArticulo',
		ui: 'forward',
		style: 'margin-right:20px;'
	}
});