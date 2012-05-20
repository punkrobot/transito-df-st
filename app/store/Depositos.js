Ext.define('TransitoDF.store.Depositos', {
	extend: 'Ext.data.Store',
	
	config: {
		model: 'TransitoDF.model.Deposito',
		
		sorters: 'id',

		proxy: {
			type: 'memory',
			reader: {
				type: 'json',
				rootProperty: 'depositos'
			}
		},
		
		grouper: function(record){
			return record.get('delegacion');
		},
		
		data: {
			depositos : [
				{
					id: 1,
					nombre: 'Las Águilas',
					delegacion: 'Alvaro Obregón',
					direccion: 'Av. Rómulo O\'Farril s/n esq. Alfonso Caso Col. Las Águilas' ,
					telefono: '55 93 68 91',
					longitud: '-99.207573',
					latitud: '19.352074'
				},
				{
					id: 2,
					nombre: 'Canarios',
					delegacion: 'Alvaro Obregón',
					direccion: 'Canarios s/n esq. División del norte Col. Bellavista',
					telefono: '52 73 44 43',
					longitud: '-99.193092',
					latitud: '19.393591'
				},
				{
					id: 3,
					nombre: 'Grutas',
					delegacion: 'Alvaro Obregón',
					direccion: 'Grutas s/n esq Av. Central Col. 8 de Agosto',
					telefono: '26 14 17 31',
					longitud: '-99.189285',
					latitud: '19.393618'
				},
				{
					id: 4,
					nombre: 'Azcapotzalco',
					delegacion: 'Azcapotzalco',
					direccion: 'Poniente 152 No. 1020 entre Av. Ceylan y Vallejo Col. Prensa Nacional',
					telefono: '55 67 21 87',
					longitud: '-99.172157',
					latitud: '19.507986'
				},
				{
					id: 5,
					nombre: 'Culturas',
					delegacion: 'Azcapotzalco',
					direccion: 'Av Culturas entre Norte 5 y Fco Márquez Col. San Pedro Xalpa',
					telefono: '53 18 70 13',
					longitud: '-99.189384',
					latitud: '19.509878'
				},
				{
					id: 6,
					nombre: 'Las Armas',
					delegacion: 'Azcapotzalco',
					direccion: 'Cda. de Franciso Villa s/n esq. Emiliano Zapata Col San Pedro Xalpa',
					telefono: '53 18 70 13',
					longitud: '-99.214584',
					latitud: '19.485029'
				},
				{
					id: 7,
					nombre: 'Industrial Vallejo',
					delegacion: 'Azcapotzalco',
					direccion: 'Calzada Azcapotzalco-La Villa No. 624 entre Ceylan y Norte 59 Col. Industrial Vallejo',
					telefono: '53 68 97 24',
					longitud: '-99.167328',
					latitud: '19.490580'
				},
				{
					id: 8,
					nombre: 'Obrera',
					delegacion: 'Cuahutémoc',
					direccion: 'Av. Taller No. 18 entre San Antonio Abad y Callejón Agustín Delgado Col. Tránsito',
					telefono: '57 41 42 44',
					longitud: '-99.134216',
					latitud: '19.413816'
				},
				{
					id: 9,
					nombre: 'Imán',
					delegacion: 'Coyoacán',
					direccion: 'Antonio Delfín Madrigal entre enrique Ureñas y Av. Aztecas Col. Santo Domingo',
					telefono: '58 38 83 88',
					longitud: '-99.173111',
					latitud: '19.322788'
				},
				{
					id: 10,
					nombre: 'Indios Verdes',
					delegacion: 'Gustavo A. Madero',
					direccion: 'Av. Insurgetes Norte s/n esq. Acueducto de Guadalupe Col. Santa Isabel Tola',
					telefono: '57 48 17 57',
					longitud: '-99.117767',
					latitud: '19.500637'
				},
				{
					id: 11,
					nombre: 'El Coyol',
					delegacion: 'Gustavo A. Madero',
					direccion: 'Av. Eduardo Molina No. 1639 esq. Oriente 157 Col El Coyol (ex Módulo Ruta 100)',
					telefono: '57 37 62 24',
					longitud: '-99.093773',
					latitud: '19.487022'
				},
				{
					id: 12,
					nombre: 'El Zarco',
					delegacion: 'Gustavo A. Madero',
					direccion: 'Av. Talismán s/n esq. Gran Canal Col. San Juan de Aragón',
					telefono: '57 41 78 55',
					longitud: '-99.095032',
					latitud: '19.466869'
				},
				{
					id: 13,
					nombre: 'Añil',
					delegacion: 'Iztacalco',
					direccion: 'Eje 3 Sur s/n casi esq. Viaducto frente a Estacionamiento del Palacio de los Deportes, pta. 7 y 8 Col Granjas',
					telefono: '56 48 41 70',
					longitud: '-99.102905',
					latitud: '19.406393'
				},
				{
					id: 14,
					nombre: 'La Viga',
					delegacion: 'Iztacalco',
					direccion: 'Juan Álvarez s/n esq. Calzada de la Viga Col. Benito Juárez',
					telefono: '56 33 14 00',
					longitud: '-99.121078',
					latitud: '19.386068'
				},
				{
					id: 15,
					nombre: 'Troncoso',
					delegacion: 'Iztacalco',
					direccion: 'Oriente 110 s/n esq. Troncoso y Recreo. Col. Benito Juárez',
					telefono: '56 33 14 00',
					longitud: '-99.114357',
					latitud: '19.392412'
				},
				{
					id: 16,
					nombre: 'Cabeza de Juárez',
					delegacion: 'Iztapalapa',
					direccion: 'Av. 3 esq. Emilio Azcárraga Vidaurreta (Estacionamiento del Deportivo Fco. I. Madero) Col. Ejército de Oriente',
					telefono: '57 73 74 36',
					longitud: '-99.039909',
					latitud: '19.382870'
				},
				{
					id: 17,
					nombre: 'Sta. Cruz Meyehualco',
					delegacion: 'Iztapalapa',
					direccion: 'Samuel Gompers s/n entre Genaro Estrada y Calle 71 Col. Santra Cruz Meyehualco',
					telefono: '56 92 63 43',
					longitud: '-99.047249',
					latitud: '19.350279'
				},
				{
					id: 18,
					nombre: 'Módulo 39',
					delegacion: 'Iztapalapa',
					direccion: 'Av. Enrique Contel, U.H. Ejército Consitucionalista entre Emilio Balli y Emilio Azcárraga Col. Santa Cruz Meyehualco',
					telefono: '',
					longitud: '-99.044861',
					latitud: '19.386150'
				},
				{
					id: 19,
					nombre: 'Fuerte Loreto',
					delegacion: 'Iztapalapa',
					direccion: 'Eje 5 Sur s/n esq. Plan de Ayala Col. Santa María Aztahuacán entre Av. Circunvalación y José Aguilar',
					telefono: '',
					longitud: '-99.031189',
					latitud: '19.363503'
				},
				{
					id: 20,
					nombre: 'Renovación',
					delegacion: 'Iztapalapa',
					direccion: 'Eje 5 Sur s/n Col. Renovación',
					telefono: '56 00 36 85',
					longitud: '-99.049049',
					latitud: '19.373602'
				},
				{
					id: 21,
					nombre: 'Salinillas',
					delegacion: 'Miguel Hidalgo',
					direccion: 'Prensa Salinillas casi esq. Ingenieros Militares Col. Irrigación',
					telefono: '53 95 87 81',
					longitud: '-99.216606',
					latitud: '19.444471'
				},
				{
					id: 22,
					nombre: 'Tláhuac',
					delegacion: 'Tláhuac',
					direccion: 'Juan Mendoza s/n esq. Tierra y Libertad Col. San José Tláhuac',
					telefono: '58 42 93 56',
					longitud: '-99.001144',
					latitud: '19.279375'
				},
				{
					id: 23,
					nombre: 'Piraña',
					delegacion: 'Tláhuac',
					direccion: 'Piraña s/n entre Leandro Valle y Langosta Col. del Mar (en el interior del Agrupamiento Fuerza de Tarea)',
					telefono: '',
					longitud: '-99.066406',
					latitud: '19.285439'
				},
				{
					id: 24,
					nombre: 'Xochimilco',
					delegacion: 'Xochimilco',
					direccion: 'Capulines s/n entre La Presa y Prolongación 16 de Septiembre Col. Barrio Xaltocan',
					telefono: '55 55 50 90',
					longitud: '-99.107674',
					latitud: '19.250372'
				}
			]
		}
	}
});