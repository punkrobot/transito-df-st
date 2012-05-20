Ext.define('TransitoDF.model.Deposito', {
	extend: 'Ext.data.Model',
	
	config: {
		fields: ['id', 'nombre' ,'delegacion', 'direccion', 'telefono', 'longitud', 'latitud']
	}
});