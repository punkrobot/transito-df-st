Ext.define('TransitoDF.view.CalcMultas', {
	extend: 'Ext.Container',
	xtype: 'calcmultas',

	requires: ['Ext.TitleBar', 'Ext.form.FormPanel', 'Ext.field.Text', 'Ext.Label'],
	
	config: {
		layout: 'vbox',
		styleHtmlContent: true,

		items: [
			{
				xtype: 'titlebar',
				title: 'Calculadora de multas',
				docked: 'top',
				style: 'background-color: black; background-image: none;'
			},
			{
				xtype: 'formpanel',
				itemId: 'calculadora',
				scrollable: false,
				
				items: [
					{
						xtype: 'textfield',
						name: 'salarios',
						label: 'Multa:',
						labelWidth: '45%',
						placeHolder: 'En días de salario mínimo...'
					},
					{
						xtype: 'textfield',
						itemId: 'multa',
						label: 'Total a pagar:',
						labelWidth: '45%',
						readOnly: true
					},
					{
						xtype: 'textfield',
						itemId: 'multa_desc',
						label: 'Con descuento:',
						labelWidth: '45%',
						readOnly: true
					}
				]
			},
			{
				xtype: 'label',
				html: '<br/><p>Según lo establecido por el artículo 40 del reglamento de tránsito, '+
				'el infractor tiene un plazo de 30 días a partir de la fecha de emisión de la infracción para contar '+
				'con un descuento del 50% sobre el monto de la multa.</p>'+
				'<p>Se puede consultar información para realizar el pago en la página de la '+ 
				'<a href="http://www.finanzas.df.gob.mx/">Secretaría de Finanzas del DF.</a></p>',
				heigth: ''
			}
		]
	}
});