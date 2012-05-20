Ext.define('TransitoDF.controller.CalcMultaController', {
	extend: 'Ext.app.Controller',
	
	requires:  ['TransitoDF.view.CalcMultas'],

	config: {

		refs: {
			calc: 'calcmultas'
		},
		
		control: {
			'textfield[name=salarios]' : {
				keyup: 'calcularMulta',
				clearicontap: 'limpiarMulta'
			}
		}
	},

	calcularMulta: function(field){
		var value = field.getValue();
		var form = this.getCalc().getComponent('calculadora');
		var multa = isNaN(value) == false ? value : 0;

		form.getComponent('multa').setValue('$'+(multa*62.3));
		form.getComponent('multa_desc').setValue('$'+(multa*62.3/2));
		
		return true;
	},

	limpiarMulta: function(field){
		var form = this.getCalc().getComponent('calculadora');
		
		form.getComponent('multa').setValue('');
		form.getComponent('multa_desc').setValue('');
		
		return true;
	}
});