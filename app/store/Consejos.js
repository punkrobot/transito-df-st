Ext.define('TransitoDF.store.Consejos', {
	extend: 'Ext.data.Store',
	
	config: {
		model: 'TransitoDF.model.Consejo',

		proxy: {
			type: 'memory',
			reader: {
				type: 'json',
				rootProperty: 'consejos'
			}
		},
		
		data: {
			consejos : [
				{
					id: 1,
					titulo: '¿Conoces el proceso de infracción?',
					descripcion: '<ol><li>Los oficiales deben identificarse.</li>'+
						'<li>Señalarán la infracción cometida, el artículo que la fundamenta y la sanción.</li>'+
						'<li>Solicitarán licencia y tarjeta de circulación.</li>'+
						'<li>Si los documentos están en orden se procede a llenar la boleta de sanción.</li></ul>',
					articulo: 39
				},
				{
					id: 2,
					titulo: '¿Sabías que entre las 11:00 PM y 5:00 AM puedes pasarte los altos?',
					descripcion: 'Eso sí, debes detenerte por completo en el semáforo y fijarte bien '+
						'que no pasen vehículos o peatones.<br/>',
					articulo: 8
				},
				{
					id: 3,
					titulo: 'Acerca de los ciclistas',
					descripcion: 'La última actualización del reglamento de tránsito define los derechos y obligaciones de los conductores de '+
						'bicicletas. Aunque no andes en bici es importante saber del tema, el capítulo 5 del reglamento tiene toda la información.',
					articulo: 29
				},
				{
					id: 4,
					titulo: '¿Conoces el sistema de puntos?',
					descripcion: 'Cada infracción cometida acumula puntos, el número de puntos acumulados depende de la gravedad de la infracción, '+
						'éstos tienen una vigencia de un año y al acumular doce se cancela la licencia de conducir.',
					articulo: 44
				},
				{
					id: 5,
					titulo: 'Consulta de infracciones por internet',
					descripcion: 'Puedes ingresar al sitio de la <a href="http://www.setravi.df.gob.mx">Setravi</a> para '+
						'consular las infracciones de tu automóvil.',
					articulo: 0
				}
			]
		}
	}
});