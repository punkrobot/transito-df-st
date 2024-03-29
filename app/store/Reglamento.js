Ext.define('TransitoDF.store.Reglamento', {
	extend: 'Ext.data.Store',
	
	config: {
		model: 'TransitoDF.model.Articulo',
		
		sorters: 'id',

		proxy: {
			type: 'memory',
			reader: {
				type: 'json',
				rootProperty: 'articulos'
			}
		},
		
		grouper: function(record){
			return record.get('capitulo');
		},
		
		data: {
			articulos : [
				{
					id: 1,
					capitulo: 'Capítulo 1: Disposiciones generales',
					titulo: '1. Introducción',
					texto: 'El presente Reglamento tiene por objeto establecer las normas relativas '+
						'al tránsito peatonal y de vehículos en el Distrito Federal y a la seguridad vial.<br><br>'+
						'La prioridad en el uso del espacio público de los diferentes modos de desplazamiento será conforme a la siguiente jerarquía:'+
						'<ol class="lista_art"><li>Peatones</li>'+
						'<li>Ciclistas</li>'+
						'<li>Usuarios y prestadores del servicio de transporte de pasajeros masivo, colectivo o individual</li>'+
						'<li>Usuarios de transporte particular automotor</li>'+
						'<li>Usuarios y prestadores del servicio de transporte de carga.</li></ol>'
				},
				{
					id: 2,
					capitulo: 'Capítulo 1: Disposiciones generales',
					titulo: '2. Autoridades compententes',
					texto: 'En el ámbito de sus atribuciones y jurisdicciones, son autoridades competentes para la aplicación del presente '+
						'reglamento las Secretarías de Transportes y Vialidad y de Seguridad Pública.<br/>'
				},
				{
					id: 3,
					capitulo: 'Capítulo 1: Disposiciones generales',
					titulo: '3. Programas viales',
					texto: 'Autoridades y promotores voluntarios llevarán a cabo en forma permanente campañas, programas y cursos de '+
						'seguridad y educación vial, en los que se promoverá:'+
						'<ol class="lista_art"><li>La cortesía y precaución en la conducción de vehículos</li>'+
						'<li>El respeto al agente de vialidad</li>'+
						'<li>La protección a los peatones, personas con discapacidad y ciclistas</li>'+
						'<li>La prevención de accidentes</li>'+
						'<li>El uso racional del automóvil particular.</li></ol>'
				},
				{
					id: 4,
					capitulo: 'Capítulo 1: Disposiciones generales',
					titulo: '4. Definiciones',
					texto: 'Además de lo que señala la Ley, para los efectos de este Reglamento, se entiende por:<br/><br/>'+
						'<ol class="lista_art"><li><strong>Agente</strong>, elemento de la Policía Preventiva del Distrito Federal</li>'+
						'<li><strong>área de espera ciclista</strong>, aquella zona, cuya función es la de servir de espacio de detención para los ciclistas durante el alto de un semáforo</li>'+
						'<li><strong>Carril compartido ciclista</strong>, carril ubicado en la extrema derecha del área de circulación vehicular, de ancho suficiente para '+
						'que los ciclistas lo compartan con vehículos de transporte público y otros vehículos, y que cuenta con dispositivos para el '+
						'control del tránsito que regulan la velocidad</li>'+
						'<li><strong>Ciclista</strong>, conductor de un vehículo de tracción humana a pedales</li>'+
						'<li><strong>Ciclocarril</strong>, carril en la vía destinado exclusivamente para circulación en bicicleta</li>'+
						'<li><strong>Ciclovía</strong>, vía o sección de una vía, exclusiva para la circulación ciclista, físicamente confinada del tránsito automotor</li>'+
						'<li><strong>Conductor</strong>, toda persona que maneje un vehículo en cualquiera de sus modalidades</li>'+
						'<li><strong>Dispositivos para el Control del Tránsito</strong>, conjunto de elementos que procuran el ordenamiento de los movimientos del '+
						'tránsito; previenen y proporcionan información a los usuarios de la vía para garantizar su seguridad, permitiendo una '+
						'operación efectiva del flujo vehicular y peatonal</li>'+
						'<li><strong>Infracción</strong>, conducta que transgrede alguna disposición del presente reglamento o demás disposiciones de tránsito '+
						'aplicables y que tiene como consecuencia una sanción</li>'+
						'<li><strong>Ley</strong>, la Ley de Transporte y Vialidad del Distrito Federal</li>'+
						'<li><strong>Peatón</strong>, persona que transita a pie por la vía pública. Para efectos del presente Reglamento, las personas en sillas de '+
						'ruedas, patines y patinetas serán considerados como peatones</li>'+
						'<li><strong>Persona con discapacidad</strong>, la que padece temporal o permanentemente una disminución en sus facultades físicas, '+
						'mentales o sensoriales</li>'+
						'<li><strong>Reglamento</strong>, el Reglamento de Tránsito Metropolitano</li>'+
						'<li><strong>Secretaría</strong>, la Secretaría de Transportes y Vialidad</li>'+
						'<li><strong>Seguridad Pública</strong>, la Secretaría de Seguridad Pública</li>'+
						'<li><strong>Seguridad Vial</strong>, conjunto de medidas tendientes a preservar la integridad física de las personas con motivo de su '+
						'tránsito en las vías públicas</li>'+
						'<li><strong>Señalización vial</strong>, la referida en el artículo 121 de la Ley</li>'+
						'<li><strong>Señalización vial restrictiva</strong>, aquella que tiene como finalidad prohibir expresamente la realización de la conducta que '+
						'se indica</li>'+
						'<li><strong>Vehículo</strong>, todo modo terrestre utilizado para el transporte de personas o bienes</li>'+
						'<li><strong>Vía pública</strong>, todo espacio de uso común destinado al tránsito de peatones y vehículos, así como a la prestación de '+
						'servicios públicos y colocación de mobiliario urbano</li>'+
						'<li><strong>Vía de Acceso controlado</strong>, aquella que presenta dos o más secciones, centrales y laterales, en un sólo sentido con '+
						'separador central y accesos y salidas sin cruces a nivel controlados por semáforos</li>'+
						'<li><strong>Vía primaria</strong>, aquella que por su anchura, longitud, señalización y equipamiento, posibilita un amplio volumen de '+
						'tránsito vehicular</li>'+
						'<li><strong>Vía secundaria</strong>, aquella que permite la circulación al interior de las colonias, barrios y pueblos</li>'+
						'<li><strong>Zona de tránsito calmado</strong>, área delimitada al interior de barrios, pueblos o colonias, cuyas vías se diseñan para '+
						'reducir la intensidad del tránsito, de forma tal que peatones, ciclistas y conductores de vehículos motorizados circulen de '+
						'manera segura.</li></ol>'
				},
				{
					id: 5,
					capitulo: 'Capítulo 2: Normas generales',
					titulo: '5. Obligaciones',
					texto: 'Los conductores deben:<br/><br/>'+
						'<ol class="lista_art"><li>Circular con licencia o permiso vigente</li>'+
						'<li>Portar la tarjeta de circulación original del vehículo</li>'+
						'<li>Obedecer los señalamientos de tránsito y las indicaciones de los agentes o personal de apoyo vial</li>'+
						'<li>Circular en el sentido que indique la vialidad; tratándose de vialidades reversibles, respetar los tramos y horarios que '+
						'determine la autoridad competente</li>'+
						'<li>Respetar los límites de velocidad establecidos en los señalamientos de tránsito. A falta de señalamiento específico, los '+
						'límites de velocidad se establecerán de acuerdo a lo siguiente:'+
						'<ol class="lista_inc"><li>En vías primarias la velocidad máxima será de 70 kilómetros por hora</li>'+
						'<li>En vías secundarias la velocidad máxima será de 40 kilómetros por hora</li>'+
						'<li>En zonas escolares, peatonales, de hospitales, de asilos, de albergues y casas hogar, la velocidad máxima será de 20 '+
						'kilómetros por hora</li>'+
						'<li>En zonas de tránsito calmado, la velocidad será de 30 kilómetros por hora</li>'+
						'<li>En vías peatonales, en las cuales se permita circular, la velocidad máxima será de 10 kilómetros por hora</li></ol/</li>'+
						'<li>Ajustarse el cinturón de seguridad y asegurarse que los demás pasajeros también se lo ajusten. Cuando se trate de '+
						'menores de 12 años o personas con discapacidad, deberán ser transportados utilizando los sistemas de retención '+
						'pertinentes</li>'+
						'<li>Tratándose de vehículos con placas de matrícula extranjera, portar los documentos oficiales en los que se describan las '+
						'características del vehículo y se acredite la legal estancia en el país</li>'+
						'<li>Rebasar sólo por el lado izquierdo; en caso de rebasar a ciclistas, otorgar al menos la distancia de 1 metro de '+
						'separación lateral entre los dos vehículos</li>'+
						'<li>Indicar la dirección de su giro o cambio de carril, mediante luces direccionales.</li></ol>',
					sanciones: '<table class="sanciones"><tr><th>Fracción</th><th>Sanción</th></tr>'+
									'<tr><td>III, IV, V incisos a), b) y d) VI, VIII y IX</td><td>5 días</td></tr>'+
									'<tr><td>V inciso c) y e)</td><td>10 días</td></tr>'+
									'<tr><td>I, II y VII</td><td>10 días y remisión</td></tr>'+
							   '</table>'
				},
				{
					id: 6,
					capitulo: 'Capítulo 2: Normas generales',
					titulo: '6. Prohibiciones',
					texto: 'Se prohíbe a los conductores:<br/><br/>'+
						'<ol class="lista_art"><li>Circular sobre banquetas, camellones, andadores, así como en las vías peatonales.</li>'+
						'<li>Circular en carriles de contraflujo, carriles confinados, excepto cuando conduzcan vehículos autorizados para ello</li>'+
						'<li>Detener su vehículo invadiendo los pasos peatonales marcados con rayas para cruces de las vías públicas, así como las '+
						'intersecciones con las vías</li>'+
						'<li>Circular en reversa más de 50 metros, salvo que no sea posible circular hacia delante</li>'+
						'<li>Dar vuelta en "U" cerca de una curva y donde la señalización expresamente lo prohíba</li>'+
						'<li>Circular en carriles exclusivos para el transporte público de pasajeros</li>'+
						'<li>Realizar maniobras de ascenso o descenso de personas en carriles centrales de las vías</li>'+
						'<li>Transportar mayor número de personas que el señalado en la tarjeta de circulación</li>'+
						'<li>Transportar menores de 12 años en los asientos delanteros</li>'+
						'<li>Transportar personas en la parte exterior de la carrocería, se exceptúa el transporte de cargadores o estibadores cuando '+
						'la finalidad del transporte requiera de ellos y en número y en condiciones tales que garanticen la integridad física de los mismos</li>'+
						'<li>Sujetar aparatos de telecomunicación u otros objetos que representen un distractor para la conducción segura del vehículo</li>'+
						'<li>Entorpecer la marcha de columnas militares, escolares, desfiles cívicos y similares</li>'+
						'<li>Utilizar o instalar sistemas antirradares o detector de radares de velocidad</li>'+
						'<li>Ofender, insultar o denigrar a los agentes o personal de apoyo vial en el desempeño de sus labores</li>'+
						'<li>Dar vuelta a la izquierda, derecha o en “U” cuando se interfiera los corredores del “Metrobús”, salvo que exista '+
						'señalamiento que lo permita</li>'+
						'<li>Transitar, en ciclovías y ciclocarriles</li>'+
						'<li>Detener su vehículo motorizado sobre un área de espera ciclista</li></ol>',
					sanciones: '<table class="sanciones"><tr><th>Fracción</th><th>Sanción</th></tr>'+
									'<tr><td>I, III, IV, VIII, XI y XII</td><td>5 días</td></tr>'+
									'<tr><td>VII, IX y X</td><td>10 días</td></tr>'+
									'<tr><td>V, XIV y XVII</td><td>20 días</td></tr>'+
									'<tr><td>II, VI, XIII, XV y XVI</td><td>40 días y remisión</td></tr>'+
							   '</table>'
				},
				{
					id: 7,
					capitulo: 'Capítulo 2: Normas generales',
					titulo: '7. Programas ambientales',
					texto: 'Los conductores deberán acatar los programas ambientales y no circular en vehículos que tengan '+
						'restricciones, los días y horas correspondientes.<br/><br/>'+
						'Quedan exceptuados los vehículos siguientes:'+
						'<ol class="lista_art"><li>Los de servicios médicos, seguridad pública, bomberos y rescate</li>'+
						'<li>Los que utilizan fuentes de energía no contaminantes</li>'+
						'<li>Los de transporte escolar</li>'+
						'<li>Las carrozas y transporte de servicios funerarios</li>'+
						'<li>Los de servicio particular que transporten o que sean conducidos por personas con discapacidad que acrediten la '+
						'autorización o cuenten con calcomanía o distintivo expedidos por la autoridad competente</li>'+
						'<li>Aquellos en que sea manifiesta o que se acredite una emergencia médica</li>'+
						'<li>Los demás que determinen las disposiciones jurídicas y administrativas aplicables</li></ol>',
					sanciones: 'Sanción de 20 días de salario mínimo y remisión del vehículo al depósito.'
				},
				{
					id: 8,
					capitulo: 'Capítulo 2: Normas generales',
					titulo: '8. Paso a vehículos',
					texto: 'Para las preferencias de paso en los cruceros, el conductor se ajustará a la señalización establecida y a las siguientes reglas:<br/><br/>'+
						'<ol class="lista_art"><li>En los cruceros regulados por un agente o por promotores voluntarios de seguridad vial, debe detener su vehículo o '+
						'avanzar cuando así lo ordene éste</li>'+
						'<li>En los cruceros regulados mediante semáforos, debe detener su vehículo en la línea de “alto”, sin invadir la zona para el '+
						'cruce de los peatones o el área de espera ciclista cuando la luz del semáforo esté en color rojo</li>'+
						'<li>Cuando la vía en que circule carezca de señalización que regule la preferencia de paso, o los semáforos se encuentren '+
						'con luces intermitentes, estará obligado a cederlo a los vehículos que se aproximen por su derecha, salvo cuando la vía en '+
						'que se circula sea de mayor amplitud que la otra o tenga mayor volumen de tránsito</li>'+
						'<li>Cuando los semáforos se encuentren con luces intermitentes se cruzará con precaución disminuyendo la velocidad. '+
						'Tiene preferencia de paso el conductor que transite por la vía cuyo semáforo esté destellando en color ámbar, sobre el '+
						'conductor que transite en una vía cuyo semáforo esté destellando en color rojo, quien deberá hacer alto total y después '+
						'cruzar con precaución</li>'+
						'<li>El que circule por una vía primaria tiene preferencia de paso sobre el que pretenda acceder a ella</li>'+
						'<li>Cuando exista la señalización de círculo rojo o en los cruceros no haya posibilidad de que los vehículos avancen hasta '+
						'cruzar la vía en su totalidad, evitará continuar la marcha y obstruir la circulación de las calles transversales</li>'+
						'<li>La vuelta a la derecha será continua y se dará con precaución, aún cuando el semáforo se encuentre en rojo. Sólo será '+
						'continua a la izquierda cuando la vía por la que circule el vehículo sea de un sólo sentido</li>'+
						'<li>En las glorietas, el que se halle dentro de la vía circular tiene preferencia de paso sobre el que pretenda acceder a ellas</li>'+
						'<li>Entre las 23:00 hrs. y las 5:00 hrs. del día siguiente, debe detener totalmente el vehículo frente a la indicación de alto de '+
						'un semáforo y, una vez que se cerciore de que ningún vehículo o peatón se dispone a atravesar un crucero, podrá continuar '+
						'la marcha aún cuando no haya cambiado la señal de alto</li>'+
						'<li>El ferrocarril, metrobús y tren ligero tienen preferencia de paso</li>'+
						'<li>Los vehículos de emergencia tienen derecho de paso cuando circulen con las señales de sonido o luminosas funcionando</li>'+
						'<li>Cuando en el cruce de dos vías secundarias sin semáforo, con un solo carril efectivo de circulación, se encuentre un '+
						'vehículo en cada una de las vías, debe realizar alto total y cruzar con precaución, debiendo ceder el paso al vehículo que se '+
						'aproxime por la derecha, teniendo preferencia un vehículo a la vez por cada una de las vías confluyentes</li></ol>',
					sanciones: '<table class="sanciones"><tr><th>Fracción</th><th>Sanción</th></tr>'+
									'<tr><td>I, II, III, IV, V, VI, VII, VIII, IX, X, XI y XII</td><td>10 días</td></tr>'+
							   '</table>'
				},
				{
					id: 9,
					capitulo: 'Capítulo 2: Normas generales',
					titulo: '9. Paso a peatones',
					texto: 'Los peatones tienen derecho de preferencia sobre el tránsito vehicular, para garantizar su integridad física cuando:<br/><br/>'+
						'<ol class="lista_art"><li>En los pasos peatonales, la señal del semáforo así lo indique</li>'+
						'<li>Habiéndoles correspondido el paso de acuerdo con el ciclo del semáforo no alcancen a cruzar la vía</li>'+
						'<li>Los vehículos vayan a dar vuelta para entrar a otra vía y haya peatones cruzando ésta</li>'+
						'<li>Los vehículos deban circular sobre el acotamiento y en éste haya peatones transitando aunque no dispongan de zona peatonal</li>'+
						'<li>Transiten por la banqueta y algún conductor deba cruzarla para entrar o salir de una cochera o estacionamiento</li>'+
						'<li>Transiten en comitivas organizadas o filas escolares</li>'+
						'<li>Transiten por los espacios habilitados para ello cuando la acera se encuentre afectada por la ejecución de un trabajo o '+
						'evento que modifique de forma transitoria las características del área de circulación peatonal</li></ol>',
					sanciones: '<table class="sanciones"><tr><th>Fracción</th><th>Sanción</th></tr>'+
									'<tr><td>I, II, III, IV, V, VI y VII</td><td>10 días</td></tr>'+
							   '</table>'
				},
				{
					id: 10,
					capitulo: 'Capítulo 2: Normas generales',
					titulo: '10. Obligaciones del peatón',
					texto: 'Los peatones deben:<br/><br/>'+
						'<ol class="lista_art"><li>Cruzar las vías primarías y secundarias por las esquinas o zonas marcadas para tal efecto, excepto en las calles locales o '+
						'domiciliarias cuando sólo exista un carril para la circulación</li>'+
						'<li>Utilizar los puentes, pasos peatonales a desnivel o rampas especiales para cruzar la vía pública dotada para ello</li>'+
						'<li>Tomar las precauciones necesarias en caso de no existir semáforo</li>'+
						'<li>Obedecer las indicaciones de los agentes, promotores voluntarios de seguridad vial y las señales de tránsito</li></ol>'+
						'Los peatones que no cumplan con las obligaciones de este Reglamento, serán amonestados verbalmente por los agentes y '+
						'orientados a conducirse de conformidad con lo establecido por las disposiciones aplicables.<br/><br/>'+
						'Las autoridades correspondientes tomarán las medidas que procedan para garantizar la integridad física y el tránsito seguro '+
						'de los peatones por la banqueta, en particular, de las personas con discapacidad. Asimismo, realizarán las acciones '+
						'necesarias para garantizar que las banquetas y rampas especiales, se encuentren libres de obstáculos que impidan el '+
						'tránsito peatonal y el desplazamiento de personas con discapacidad.<br/>',
				},
				{
					id: 11,
					capitulo: 'Capítulo 2: Normas generales',
					titulo: '11. Paso a ciclistas',
					texto: 'Los ciclistas tienen derecho de preferencia sobre el tránsito vehicular, cuando:<br/><br/>'+
						'<ol class="lista_art"><li>Habiéndoles correspondido el paso de acuerdo con el ciclo del semáforo no alcancen a cruzar la vía</li>'+
						'<li>Los vehículos vayan a dar vuelta a la derecha para entrar a otra vía, y haya ciclistas cruzando ésta</li>'+
						'<li>Los vehículos deban circular o cruzar una ciclovía y en ésta haya ciclistas circulando</li>'+
						'<li>Transiten por vía exclusiva de circulación ciclista y algún conductor pretenda cruzarla para entrar o salir de un predio</li>'+
						'<li>En caso de no haber semáforo, crucen una vía</li></ol>',
					sanciones: 'El conductor que incumpla con lo establecido en las fracciones anteriores se le sancionará con: <br/>'+
								'<table class="sanciones"><tr><th>Fracción</th><th>Sanción</th></tr>'+
									'<tr><td>I, II y III</td><td>10 días</td></tr>'+
							   '</table>'
				},
				{
					id: 12,
					capitulo: 'Capítulo 2: Normas generales',
					titulo: '12. Estacionamiento',
					texto: 'Se prohíbe estacionar cualquier vehículo en los siguientes espacios:<br/><br/>'+
						'<ol class="lista_art"><li>En las vías primarias</li>'+
						'<li>En zonas o vías públicas donde exista señalización vial restrictiva</li>'+
						'<li>En las vías públicas en doble o más filas y en batería, salvo que el señalamiento lo permita</li>'+
						'<li>En lugares donde se obstruya la visibilidad de señales de tránsito</li>'+
						'<li>En lugares destinados al estacionamiento momentáneo de vehículos de traslado de valores, identificados con la señalización respectiva</li>'+
						'<li>En los carriles exclusivos para transporte colectivo de pasajeros</li>'+
						'<li>En zonas autorizadas para carga y descarga, cuando éste no sea su fin</li>'+
						'<li>En accesos y salidas, áreas de circulación y zonas de ascenso y descenso de pasaje en las terminales del transporte colectivo Metro</li>'+
						'<li>Sobre las banquetas, rampas, camellones, andadores, retornos, isletas u otras vías y espacios reservados a peatones y '+
						'ciclistas; para ello es suficiente con que cualquier parte del vehículo se encuentre sobre estos espacios</li>'+
						'<li>Frente a:'+
						'<ol class="lista_inc"><li>Establecimientos bancarios</li>'+
						'<li>Hidrantes para uso de los bomberos</li>'+
						'<li>Entradas y salidas de ambulancias y vehículos de emergencia</li>'+
						'<li>Rampas especiales para personas con discapacidad</li>'+
						'<li>Rampas de entrada de vehículos, salvo que se trate de las del domicilio del propio conductor , siempre y cuando no se '+
						'obstruya el paso peatonal o el tránsito de personas con discapacidad</li></ol>'+
						'<li>Fuera de un cajón de estacionamiento, o invadiendo u obstruyendo otro</li>'+
						'<li>Sobre o debajo de cualquier puente o estructura elevada de una vía pública o en el interior de un túnel</li>'+
						'<li>En un tramo:'+
						'<ol class="lista_inc"><li>Menor a 5 metros de la entrada de una estación de bomberos y de vehículos de emergencia; y en un espacio de 25 '+
						'metros a cada lado del eje de entrada en la acera opuesta a ella</li>'+
						'<li>Menor a 10 metros de cualquier cruce ferroviario</li></ol>'+
						'<li>En lugares o cajones destinados al estacionamiento de vehículos que transporten o sean conducidos por personas con '+
						'discapacidad, identificados con la señalización respectiva</li>'+
						'<li>En los demás lugares que la Secretaría y Seguridad Pública determinen.</li></ol>',
					sanciones: '<table class="sanciones"><tr><th>Fracción</th><th>Sanción</th></tr>'+
									'<tr><td>I, II, III, IV, V, VI, VII, VIII, IX, X, XI, XII, XIII, XIV y XV</td><td>10 a 15 días y remisión</td></tr>'+
							   '</table>'
				},
				{
					id: 13,
					capitulo: 'Capítulo 2: Normas generales',
					titulo: '13. Inmovilizadores',
					texto: 'Los vehículos estacionados en lugares prohibidos en los que exista señalamiento de inmovilizador o donde se '+
						'encuentren instalados parquímetros o cualquier otro sistema de medición del tiempo de estacionamiento en la vía pública y '+
						'que no hayan cubierto la cuota de estacionamiento en el momento de la revisión, pueden ser inmovilizados por el agente, '+
						'aún cuando el conductor o alguna otra persona se encuentre presente. El vehículo será liberado hasta que se hayan '+
						'cubierto las sanciones económicas y los derechos por retiro de inmovilizador correspondientes.<br/><br/>'+
						'Seguridad Pública puede auxiliarse de terceros para la inmovilización de vehículos.<br/><br/>',
					sanciones: 'Sanción de 5 días de salario mínimo.<br/><br/>'+
						'Transcurridas más de dos horas de haber sido inmovilizado el vehículo, si el interesado no lo retira del lugar, se procederá a '+
						'la remisión del mismo al depósito correspondiente.'
				},
				{
					id: 14,
					capitulo: 'Capítulo 2: Normas generales',
					titulo: '14. Vías públicas',
					texto: 'En las vías públicas está prohibido:<br/><br/>'+
						'<ol class="lista_art"><li>Efectuar reparaciones a vehículos, salvo en casos de emergencia</li>'+
						'<li>Colocar señalamientos o cualquier otro objeto que obstaculicen o afecten la vialidad, salvo que se trate de mecanismos o '+
						'artefactos colocados momentáneamente para facilitar el ascenso o descenso de las personas con discapacidad o '+
						'señalamientos de advertencia de accidentes o emergencias</li>'+
						'<li>Arrojar, depositar o abandonar objetos o residuos que puedan entorpecer la libre circulación o estacionamiento de vehículos</li>'+
						'<li>Abandonar vehículos</li>'+
						'<li>Colocar señalamientos o cualquier otro objeto para reserva de espacios de estacionamiento en la vía pública sin la autorización correspondiente</li>'+
						'<li>Organizar o participar en competencias vehiculares de alta velocidad o "arrancones"</li>'+
						'<li>Cerrar u obstruir la circulación con vehículos, plumas, rejas o cualquier otro objeto</li></ol>',
					sanciones: '<table class="sanciones"><tr><th>Fracción</th><th>Sanción</th></tr>'+
									'<tr><td>I</td><td>5 días y remisión</td></tr>'+
									'<tr><td>II, III, V y VII</td><td>10 días</td></tr>'+
									'<tr><td>IV</td><td>10 días y remisión</td></tr>'+
									'<tr><td>VI</td><td>Arresto Administrativo Inconmutable de 20 a 36 horas y remisión</td></tr>'+
							   '</table><br/>'+
						'Seguridad Pública coadyuvará con las autoridades competentes en el retiro de los objetos que obstaculicen o impidan la '+
						'circulación o el estacionamiento de vehículos a que se refieren las fracciones II, III, IV, V y VII de este artículo; en caso de '+
						'que los responsables de su colocación se nieguen a retirarlos.'
				},
				{
					id: 15,
					capitulo: 'Capítulo 2: Normas generales',
					titulo: '15. Obstrucción de vía pública',
					texto: 'Cuando por caso fortuito o de fuerza mayor el conductor detenga su vehículo en las vías primarias procurará '+
						'no entorpecer la circulación y dejará una distancia que permita la visibilidad en ambos sentidos y, de inmediato, colocará los '+
						'dispositivos de advertencia. Si la vía es de doble sentido, los dispositivos de advertencia se colocarán 20 metros atrás del '+
						'vehículo y 20 metros adelante en el carril opuesto.<br/>',
					sanciones: 'Sanción de 5 días de salario mínimo.'
				},
				{
					id: 16,
					capitulo: 'Capítulo 2: Normas generales',
					titulo: '16. Estado del vehículo',
					texto: 'Los conductores deben cerciorarse de que su vehículo esté provisto de:<br/><br/>'+
						'<ol class="lista_art"><li>Combustible suficiente para su buen funcionamiento</li>'+
						'<li>Faros delanteros, que cumplan con las Normas Oficiales Mexicanas, dotados de un mecanismo para cambio de intensidad</li>'+
						'<li>Luces:'+
						'<ol class="lista_inc"><li>De destello intermitente de parada de emergencia</li>'+
						'<li>Especiales, según el tipo de dimensiones y servicio del vehículo</li>'+
						'<li>Que indiquen marcha atrás</li>'+
						'<li>Indicadoras de frenos en la parte trasera</li>'+
						'<li>Direccionales de destello intermitente, delanteras y traseras</li>'+
						'<li>Que iluminen la placa posterior</li></ol></li>'+
						'<li>Cuartos delanteros, de luz amarilla o blanca y cuartos traseros de luz roja</li>'+
						'<li>Llantas en condiciones que garanticen la seguridad</li>'+
						'<li>Extintor, señalamientos reflejantes, llanta de refacción y la herramienta adecuada para el cambio o reparación de la misma</li>'+
						'<li>Al menos dos espejos retrovisores, interior y lateral del conductor</li>'+
						'<li>Ambas defensas</li>'+
						'<li>Cinturones de seguridad</li>'+
						'<li>Parabrisas en óptimas condiciones que permita la visibilidad al interior y exterior del vehículo</li>'+
						'<li>Dispositivo de Geolocalización o de Georeferenciación Satelital Radioeléctrico o de tecnología similar</li></ol>'+
						'Cuando disminuya sensiblemente la visibilidad por cualquier factor natural, ambiental o debido a la infraestructura vial, se '+
						'deben encender las luces, evitando deslumbrar a quienes transitan en sentido opuesto.<br/>',
					sanciones: '<table class="sanciones"><tr><th>Fracción</th><th>Sanción</th></tr>'+
									'<tr><td>I, II, III, IV, V, VI, VII, VIII, IX, X y XI</td><td>5 días</td></tr>'+
							   '</table><br/>'
				},
				{
					id: 17,
					capitulo: 'Capítulo 2: Normas generales',
					titulo: '17. Matrícula y hologramas',
					texto: 'Los vehículos automotores sólo pueden circular con:<br/><br/>'+
						'<ol class="lista_art"><li>Placas de matrícula o permiso provisional vigentes, o en su defecto, la copia certificada de la denuncia de la pérdida de '+
						'las placas de matrícula ante el agente del Ministerio Público o la constancia de hechos ante el Juez Cívico, la cual no '+
						'deberá exceder del término de 10 días hábiles a partir de la fecha de su expedición; mismos que deberán:'+
						'<ol class="lista_inc"><li>Estar colocadas en el lugar destinado por el fabricante del vehículo</li>'+
						'<li>Encontrarse libres de cualquier objeto o sustancia que dificulte u obstruya su visibilidad o su registro</li>'+
						'<li>Coincidir con la calcomanía permanente de circulación, con la tarjeta de circulación y con los registros del Control Vehicular</li>'+
						'<li>Tener la dimensión y características que especifique la Norma Oficial Mexicana respectiva.</li></ol></li>'+
						'<li>La calcomanía de circulación permanente</li>'+
						'<li>El holograma de verificación vehicular vigente</li>'+
						'<li>En el caso de vehículos que transporten o sean conducidos por personas con discapacidad, contar con la autorización, '+
						'calcomanía o distintivo expedido por la autoridad competente.</li></ol>',
					sanciones: '<table class="sanciones"><tr><th>Fracción</th><th>Sanción</th></tr>'+
									'<tr><td>I, II, III y IV</td><td>20 días y remisión</td></tr>'+
							   '</table><br/>'
				},
				{
					id: 18,
					capitulo: 'Capítulo 2: Normas generales',
					titulo: '18. Remolques',
					texto: 'Los vehículos particulares que tengan adaptados dispositivos de acoplamiento para tracción de remolques y '+
						'semirremolques, contarán con un mecanismo giratorio o retráctil que no rebase la defensa del mismo; los vehículos que no '+
						'cumplan con este requisito deberán ser modificados por el propietario.<br/><br/> '+
						'Los remolques y semirremolques deben estar provistos en sus partes laterales y posteriores de dos o más reflejantes rojos, '+
						'así como de dos lámparas indicadoras de frenado.<br/><br/> '+
						'En combinación de vehículos, las luces de frenos deben ser visibles en la parte posterior del último vehículo.<br/>',
					sanciones: 'Sanción de 5 días de salario mínimo.'
				},
				{
					id: 19,
					capitulo: 'Capítulo 2: Normas generales',
					titulo: '19. Accesorios',
					texto: 'Se prohíbe instalar o utilizar en vehículos particulares:<br/><br/>' +
						'<ol class="lista_art"><li/>Cromáticas iguales o similares a las del transporte público de pasajeros matriculados en el Distrito Federal, vehículos de emergencia o patrullas</li>'+
						'<li>Dispositivos similares a los utilizados por vehículos policiales o de emergencia</li>'+
						'<li>Faros deslumbrantes que no cumplan con las Normas Oficiales Mexicanas y pongan en riesgo la seguridad de conductores o peatones</li>'+
						'<li>Luces de neón alrededor de las placas de matrícula</li>'+
						'<li>Anuncios publicitarios no autorizados</li>'+
						'<li>Televisor o pantalla de proyección de imágenes de entretenimiento en la parte delantera del habitáculo del vehículo. '+
						'Tratándose de dispositivos de apoyo a la conducción como mapas y navegadores GPS, cualquier manipulación o consulta '+
						'deberá hacerse con el vehículo debidamente estacionado</li>'+
						'<li>Películas de seguridad, control solar (polarizado) u oscurecimiento de vidrios en un porcentaje del 5% o 20% en '+
						'parabrisas o vidrios de puertas delanteras, salvo que vengan instalados de fábrica, de acuerdo a las normas Oficiales '+
						'Mexicanas correspondiente o cuando así se requiera por razones médicas, debidamente acreditadas ante la Secretaría, '+
						'mismas que deberán constar en la tarjeta de circulación</li></ol>',
					sanciones: '<table class="sanciones"><tr><th>Fracción</th><th>Sanción</th></tr>'+
									'<tr><td>III, IV y V</td><td>5 días</td></tr>'+
									'<tr><td>VI</td><td>10 días</td></tr>'+
									'<tr><td>I, II y VII</td><td>20 días y remisión</td></tr>'+
							   '</table><br/>'
				},
				{
					id: 20,
					capitulo: 'Capítulo 2: Normas generales',
					titulo: '20. Vehículos de emergencia',
					texto: 'Sin perjuicio de lo dispuesto en el Capítulo VII del presente Reglamento, en caso de emergencia, siniestro o '+
						'desastre, los vehículos destinados a la prestación de servicios de emergencia médica, de protección civil, de rescate, '+
						'motocicletas de apoyo vial, bomberos y de la policía pueden:<br/><br/>'+
						'<ol class="lista_art"><li>Estacionarse o detenerse en lugar prohibido</li>'+
						'<li>Circular por carriles de contraflujo, confinados y exclusivos para el transporte público de pasajeros</li>'+
						'<li>Proseguir con la luz roja del semáforo o señal de alto, reduciendo la velocidad</li>'+
						'<li>Exceder los límites de velocidad permitidos</li>'+
						'<li>Desatender los señalamientos de tránsito</li></ol>'+
						'En todo momento deben circular con las luces encendidas y la sirena abierta. Los conductores de los vehículos deben '+
						'conducir con la debida precaución para salvaguardar la integridad física de las personas y los bienes.<br/><br/>'+
						'<strong>Artículo 20 BIS.</strong> Sólo pueden circular por carriles exclusivos para el transporte público de pasajeros, confinados o de '+
						'contraflujo los vehículos de transporte público de pasajeros que cuenten con la autorización respectiva, debiendo circular '+
						'con las luces encendidas.</br>'
				},
				{
					id: 21,
					capitulo: 'Capítulo 2: Normas generales',
					titulo: '21. Transporte escolar',
					texto: 'Las escuelas deben contar con lugares especiales para que los vehículos de transporte escolar efectúen el '+
						'ascenso y descenso de los escolares, sin que afecten u obstaculicen la circulación en la vía pública.<br/><br/>'+
						'Los conductores de vehículos de transporte escolar que se detengan en la vía pública para efectuar maniobras de ascenso '+
						'y descenso, deben poner en funcionamiento las luces intermitentes de advertencia.<br/><br/>'+
						'Es responsabilidad del conductor del vehículo de transporte escolar tomar las debidas precauciones para que se realicen '+
						'las maniobras de ascenso y descenso de escolares de manera segura.<br/>'
				},
				{
					id: 22,
					capitulo: 'Capítulo 3: Transporte público',
					titulo: '22. Obligaciones',
					texto: 'Además de lo dispuesto en el Capítulo II del presente Reglamento, los conductores de vehículos de transporte público de pasajeros deben:<br/><br/>'+
						'<ol class="lista_art"><li>Conducir con licencia – tarjetón, la cual debe estar a la vista del pasajero; portar placas de matrícula o el permiso '+
						'provisional vigentes, así como el engomado de la concesión</li>'+
						'<li>Circular por el carril de la extrema derecha</li>'+
						'<li>Circular con las puertas cerradas</li>'+
						'<li>Realizar maniobras de ascenso o descenso de pasajeros, en el carril de la extrema derecha y sólo en lugares autorizados</li>'+
						'<li>Permitir el ascenso o descenso de pasajeros sólo cuando el vehículo esté sin movimiento</li>'+
						'<li>Circular con las luces blancas interiores encendidas cuando obscurezca</li>'+
						'<li>Hacer base o estacionar su vehículo en lugar autorizado o en los lugares de encierro o pernocta correspondientes en '+
						'horarios en que no se preste servicio</li>'+
						'<li>Tratándose de bicicletas adaptadas además deberán:'+
						'<ol class="lista_inc"><li>Portar el permiso expedido por autoridad correspondiente</li>'+
						'<li>Circular en zonas o vialidades autorizadas por la Secretaría</li></ol></li>'+
						'<li>Compartir de manera responsable con los ciclistas la circulación en carriles de la extrema derecha y rebasarlos siempre '+
						'otorgando al menos un metro de separación lateral entre los dos vehículos.</li></ol>',
					sanciones: '<table class="sanciones"><tr><th>Fracción</th><th>Sanción</th></tr>'+
									'<tr><td>II, III, V, VI y IX</td><td>10 días</td></tr>'+
									'<tr><td>IV</td><td>80 a 130 días</td></tr>'+
									'<tr><td>VIII</td><td>40 a 60 días y remisión</td></tr>'+
									'<tr><td>VII</td><td>80 a 130 días y remisión</td></tr>'+
									'<tr><td>I</td><td>80 a 100 días y remisión</td></tr>'+
							   '</table><br/>'	
				},
				{
					id: 23,
					capitulo: 'Capítulo 3: Transporte público',
					titulo: '23. Prohibiciones',
					texto: 'Queda prohibido a los conductores de vehículos de transporte público de pasajeros individual o colectivo:<br/><br/>'+
						'<ol class="lista_art"><li>Rebasar a otro vehículo en el carril de contraflujo de los ejes viales, salvo que dicho vehículo esté parado por alguna '+
						'descompostura. En este caso, el conductor rebasará con precaución, con las luces delanteras encendidas y direccionales funcionando</li>'+
						'<li>Realizar maniobras de ascenso o descenso de pasajeros, en el segundo o tercer carril de circulación, contados de derecha a izquierda</li>'+
						'<li>Llevar vidrios polarizados, obscurecidos o con aditamentos u objetos distintos a las calcomanías reglamentarias</li>'+
						'<li>Llevar objetos que obstruyan la visibilidad del conductor o lo distraigan</li>'+
						'<li>Instalar o utilizar televisores o pantallas de proyección de cualquier tipo de imagen en la parte delantera del vehículo</li>'+
						'<li>Instalar o utilizar faros deslumbrantes que pongan en riesgo la seguridad de conductores o peatones; así como luces de '+
						'neón alrededor de las placas de matrícula</li>'+
						'<li>Cargar combustible llevando pasajeros a bordo</li></ol>'+
						'Además de lo previsto en las fracciones anteriores, está prohibido a los conductores del transporte público colectivo de pasajeros:<br/><br/>'+
						'<ol class="lista_inc"><li>Circular por los carriles centrales de la red de vialidad primaria y de acceso controlado, excepto que se trate del servicio '+
						'exprés autorizado por la Secretaría</li>'+
						'<li>Circular por vías primarias en el segundo carril, a excepción de utilizarlo para rebasar, si no hay circulación que lo impida</li>'+
						'<li>Circular por el segundo carril de la vía lateral salvo que se utilice para rebasar.</li></ol>',
					sanciones: '<table class="sanciones"><tr><th>Fracción</th><th>Sanción</th></tr>'+
									'<tr><td>I, IV, VI y VII</td><td>10 días</td></tr>'+
									'<tr><td>V</td><td>20 días</td></tr>'+
									'<tr><td>II</td><td>80 días</td></tr>'+
									'<tr><td>III</td><td>10 días y remisión</td></tr>'+
									'<tr><td>Incisos a) al c) del último párrafo</td><td>10 días</td></tr>'+
							   '</table><br/>'	
				},
				{
					id: 24,
					capitulo: 'Capítulo 4: Transporte de carga',
					titulo: '24. Prohibiciones',
					texto: 'Los vehículos de transporte de carga no pueden circular:<br/><br/>'+
						'<ol class="lista_art"><li>Por carriles centrales de las vías de acceso controlado</li>'+
						'<li>Cuando la carga:'+
						'<ol class="lista_inc"><li>Sobresalga de la parte delantera o de los costados, salvo cuando se obtenga el permiso correspondiente de la Secretaría</li>'+
						'<li>Sobresalga de la parte posterior por más de un metro y no lleve reflejantes de color rojo o banderolas que indiquen peligro</li>'+
						'<li>Obstruya la visibilidad del conductor, salvo cuando se obtenga el permiso correspondiente de la Secretaría</li>'+
						'<li>No esté debidamente cubierta, tratándose de materiales esparcibles</li>'+
						'<li>No vaya debidamente sujeta al vehículo por cables o lonas.</li></ol></li></ol>',
					sanciones: '<table class="sanciones"><tr><th>Fracción</th><th>Sanción</th></tr>'+
									'<tr><td>I</td><td>100 a 300 días y remisión</td></tr>'+
									'<tr><td>II</td><td>10 días</td></tr>'+
							   '</table><br/>'	
				},
				{
					id: 25,
					capitulo: 'Capítulo 4: Transporte de carga',
					titulo: '25. Obligaciones',
					texto: 'Además de lo dispuesto en el Capítulo II del presente Reglamento, los conductores de vehículos de transporte de carga deben:<br/><br/>'+
						'<ol class="lista_art"><li>Circular por el carril de la extrema derecha y usar el izquierdo sólo para rebasar o dar vuelta a la izquierda</li>'+
						'<li>Sujetarse a los días, horarios y a las vialidades establecidas mediante aviso de la Secretaría</li>'+
						'<li>Estacionar el vehículo o contenedor en el lugar de encierro correspondiente</li>'+
						'<li>Circular con placas de matrícula o con permiso provisional vigente</li>'+
						'<li>Conducir con licencia vigente</li>'+
						'<li>Circular sin tirar objetos o derramar sustancias que obstruyan el tránsito o pongan en riesgo la integridad física de las personas</li>'+
						'<li>Realizar maniobras de carga y descarga sin afectar o interrumpir el tránsito vehicular</li>'+
						'<li>Abalizar con elementos reflejantes el perímetro de la carga cuando ésta sobresalga de las dimensiones del vehículo y '+
						'cuente con la autorización correspondiente</li></ol>'+
						'Los vehículos que transporten perecederos no serán remitidos al depósito, de acuerdo a lo dispuesto en el artículo 46 del presente Reglamento.<br/>',
					sanciones: '<table class="sanciones"><tr><th>Fracción</th><th>Sanción</th></tr>'+
									'<tr><td>I, II, IV</td><td>10 días</td></tr>'+
									'<tr><td>VI y VIII</td><td>40 a 60 días y remisión</td></tr>'+
									'<tr><td>V</td><td>60 a 80 días y remisión</td></tr>'+
									'<tr><td>VII</td><td>80 a 130 días y remisión</td></tr>'+
									'<tr><td>III</td><td>500 a 600 días y remisión</td></tr>'+
							   '</table><br/>'	
				},
				{
					id: 26,
					capitulo: 'Capítulo 4: Transporte de carga',
					titulo: '26. Obligaciones, sust. tóxicas',
					texto: 'Además de las obligaciones contenidas en el artículo que antecede, los conductores de vehículos que '+
						'transporten sustancias tóxicas o peligrosas deben:<br/><br/>'+
						'<ol class="lista_art"><li>Sujetarse estrictamente a las rutas y los itinerarios de carga y descarga autorizados por la Secretaría y por Seguridad Pública</li>'+
						'<li>Abstenerse de realizar paradas que no estén señaladas en la operación del servicio</li></ol>'+
						'En caso de congestionamiento vehicular que interrumpa la circulación, el conductor deberá solicitar a los agentes prioridad '+
						'para continuar su marcha, mostrándoles la documentación que ampare el riesgo sobre el producto que transporta.<br/>',
					sanciones: '<table class="sanciones"><tr><th>Fracción</th><th>Sanción</th></tr>'+
									'<tr><td>I y II</td><td>40 a 60 días</td></tr>'+
							   '</table><br/>'	
				},
				{
					id: 27,
					capitulo: 'Capítulo 4: Transporte de carga',
					titulo: '27. Prohibiciones, sust. tóxicas',
					texto: 'Se prohíbe a los conductores de vehículos que transporten sustancias tóxicas o peligrosas:<br/><br/>'+
						'<ol class="lista_art"><li>Llevar a bordo personas ajenas a su operación</li>'+
						'<li>Arrojar al piso o descargar en las vialidades, así como ventear innecesariamente cualquier tipo de sustancias tóxicas o peligrosas</li>'+
						'<li>Estacionar los vehículos en la vía pública o en la proximidad de fuente de riesgo, independientemente de la observancia '+
						'de las condiciones y restricciones impuestas por las autoridades federales en materia ambiental y de transporte</li>'+
						'<li>Realizar maniobras de carga y descarga en lugares inseguros y no destinados para tal fin</li>'+
						'<li>Circular por carriles centrales.</li></ol>',
					sanciones: '<table class="sanciones"><tr><th>Fracción</th><th>Sanción</th></tr>'+
									'<tr><td>I</td><td>10 días</td></tr>'+
									'<tr><td>V</td><td>50 días</td></tr>'+
									'<tr><td>IV</td><td>80 a 130 días</td></tr>'+
									'<tr><td>II</td><td>400 a 600 días</td></tr>'+
									'<tr><td>III</td><td>500 a 600 días</td></tr>'+
							   '</table><br/>'
				},
				{
					id: 28,
					capitulo: 'Capítulo 4: Transporte de carga',
					titulo: '28. Estacionamiento',
					texto: 'Cuando por alguna circunstancia de emergencia se requiera estacionar el vehículo que transporte sustancias '+
						'tóxicas o peligrosas en la vía pública u otra fuente de riesgo, el conductor deberá asegurarse de que la carga esté '+
						'debidamente protegida y señalizada, a fin de evitar que personas ajenas a la transportación manipulen el equipo o la carga.<br/><br/>'+
						'Cuando lo anterior suceda en horario nocturno, el conductor deberá colocar triángulos de seguridad o señalamientos de '+
						'advertencia tanto en la parte delantera como trasera de la unidad, a una distancia que permita a otros conductores tomar '+
						'las precauciones necesarias.<br/>',
					sanciones: 'Sanción de 10 días de salario mínimo.'
				},
				{
					id: 29,
					capitulo: 'Capítulo 5: Bicicletas y motocicletas',
					titulo: '29. Obligaciones',
					texto: 'Los ciclistas y motociclistas deben:<br/><br/>'+
						'<ol class="lista_art"><li>Respetar las señales de tránsito y las indicaciones de los agentes y del personal de apoyo vial</li>'+
						'<li>Circular en el sentido de la vía</li>'+
						'<li>Llevar a bordo sólo al número de personas para el que exista asiento disponible</li>'+
						'<li>En el caso de los motociclistas y sus acompañantes, usar casco de motociclista debidamente colocado y abrochado, que cumpla con las Normas Oficiales Mexicanas</li>'+
						'<li>Utilizar un sólo carril de circulación</li>'+
						'<li>Rebasar sólo por el carril izquierdo</li>'+
						'<li>El ciclista debe usar aditamentos o bandas reflejantes para uso nocturno</li>'+
						'<li>El ciclista circulará preferentemente por las vías destinadas para ello</li>'+
						'<li>En el caso de motocicletas, circular en todo tiempo con las luces encendidas</li>'+
						'<li>El ciclista debe indicar la dirección de su giro o cambio de carril, mediante señales con el brazo y mano</li>'+
						'<li>El ciclista debe compartir de manera responsable con los vehículos y el transporte público la circulación en carriles de la extrema derecha</li></ol>'+
						'Todo ciclista tiene los mismos derechos y obligaciones aplicables para un conductor de cualquier otro vehículo, '+
						'exceptuando lo establecido en el presente Reglamento, así como todas las provisiones que por la naturaleza propia de la '+
						'bicicleta no tengan aplicación.<br/><br/>'+
						'Dentro de la zona urbana, en las rutas donde se cuente con ciclovía, los ciclistas se encuentran obligados a circular en ella.<br/><br/>'+
						'Los ciclistas que no cumplan con las obligaciones de este Reglamento, serán amonestados verbalmente por los agentes y '+
						'orientados a conducirse de conformidad con lo establecido por las disposiciones aplicables.<br/><br/>'+
						'El motociclista que incumpla lo dispuesto en este artículo, se sancionará con base en la siguiente tabla:<br/>',
					sanciones: '<table class="sanciones"><tr><th>Fracción</th><th>Sanción</th></tr>'+
									'<tr><td>I, IV, VI y IX</td><td>5 días</td></tr>'+
									'<tr><td>II y III</td><td>10 días</td></tr>'+
							   '</table><br/>'
				},
				{
					id: 30,
					capitulo: 'Capítulo 5: Bicicletas y motocicletas',
					titulo: '30. Prohibiciones',
					texto: 'Se prohíbe a los ciclistas y motociclistas:<br/><br/>'+
						'<ol class="lista_art"><li>Circular por los carriles centrales o interiores de las vías de acceso controlado y en donde así lo indique el señalamiento, '+
						'salvo cuando mediante aviso publicado en la Gaceta Oficial, la Secretaría y Seguridad Pública determinen las condiciones, '+
						'los horarios y días permitidos en dichas vialidades</li>'+
						'<li>Circular entre carriles, salvo cuando el ciclista se encuentre con tránsito detenido y busque colocarse en lugar visible para reiniciar la marcha</li>'+
						'<li>Circular por los carriles exclusivos para el transporte público de pasajeros</li>'+
						'<li>Circular sobre las banquetas y áreas reservadas al uso exclusivo de peatones</li>'+
						'<li>Transportar a un pasajero en lugar intermedio entre la persona que conduce y el manubrio</li>'+
						'<li>Transportar carga que impida mantener ambas manos sobre el manubrio, y un debido control del vehículo o su necesaria estabilidad</li>'+
						'<li>Asirse o sujetarse a otros vehículos en movimiento</li>'+
						'<li>En el caso de motocicletas, transportar pasajeros menores de 12 años de edad</li>'+
						'<li>En el caso de motocicletas, rebasar los límites de velocidad previstos en el artículo 5° del presente Reglamento</li></ol>'+
						'Los ciclistas que no cumplan con las obligaciones de este Reglamento, serán amonestados verbalmente por los agentes y '+
						'orientados a conducirse de conformidad con lo establecido por las disposiciones aplicables.<br/><br/>'+
						'El motociclista que incumpla lo dispuesto en este artículo, se sancionará con base en la siguiente tabla:<br/>',
					sanciones: '<table class="sanciones"><tr><th>Fracción</th><th>Sanción</th></tr>'+
									'<tr><td>V</td><td>5 días</td></tr>'+
									'<tr><td>II, IV, VI, VII y VIII</td><td>10 días</td></tr>'+
									'<tr><td>I y III</td><td>20 días</td></tr>'+
									'<tr><td>IX</td><td>10 días y remisión</td></tr>'+
							   '</table><br/>'
				},
				{
					id: 31,
					capitulo: 'Capítulo 6: Alcohol y narcóticos',
					titulo: '31. Prohibiciones',
					texto: 'Queda prohibido conducir vehículos por la vía pública, cuando se tenga una cantidad de alcohol en la sangre '+
						'superior a 0.8 gramos por litro o de alcohol en aire expirado superior a 0.4 miligramos por litro o bajo el influjo de narcóticos.<br/><br/>'+
						'Los conductores de vehículos destinados al servicio de transporte de pasajeros, de transporte de carga o de transporte de '+
						'sustancias tóxicas o peligrosas, no deben presentar ninguna cantidad de alcohol en la sangre o en aire expirado, o '+
						'síntomas simples de aliento alcohólico o de estar bajo los efectos de narcóticos.<br/><br/>'+
						'Los conductores deben someterse a las pruebas de detección de ingestión de alcohol o de narcóticos cuando lo solicite la '+
						'autoridad competente.<br/>',
					sanciones: 'Arresto administrativo inconmutable de 20 a 36 horas'
				},
				{
					id: 32,
					capitulo: 'Capítulo 6: Alcohol y narcóticos',
					titulo: '32. Pruebas',
					texto: 'Los conductores de vehículos a quienes se les encuentre cometiendo actos que violen las disposiciones del '+
						'presente Reglamento y/o muestren síntomas de que conducen en estado de ebriedad o bajo el influjo de narcóticos, están '+
						'obligados a someterse a las pruebas necesarias con el Médico Legista ante el cual sean presentados o por personal '+
						'autorizado para tal efecto. En caso de que se certifique que el conductor se encuentra en estado de ebriedad o de '+
						'intoxicación de narcóticos, será aplicable la sanción del artículo anterior.<br/><br/>'+
						'Sin perjuicio de lo dispuesto en el artículo 39 del presente Reglamento, los agentes pueden detener la marcha de un '+
						'vehículo cuando Seguridad Pública establezca y lleve a cabo programas de control y preventivos de ingestión de alcohol o '+
						'de narcóticos, para conductores de vehículos. Estos programas deben ser publicados en la Gaceta Oficial del Distrito Federal.<br/>'
				},
				{
					id: 33,
					capitulo: 'Capítulo 6: Alcohol y narcóticos',
					titulo: '33. Alcoholímetro',
					texto: 'Cuando los agentes cuenten con dispositivos oficiales de detección de alcohol o de narcóticos, se procederá como sigue:<br/><br/>'+
						'<ol class="lista_art"><li>Los conductores se someterán a las pruebas para la detección del grado de intoxicación que establezca Seguridad Pública</li>'+
						'<li>El agente entregará un ejemplar del comprobante de los resultados de la prueba al conductor, inmediato a su realización</li>'+
						'<li>En caso de que el conductor sobrepase el límite permitido de alcohol en la sangre será remitido al Juzgado Cívico</li>'+
						'<li>El agente entregará un ejemplar del comprobante de los resultados de la prueba al Juez Cívico ante el cual sea '+
						'presentado, documento que constituirá prueba fehaciente de la cantidad de alcohol o narcóticos encontrados y servirá de '+
						'base para el dictamen del Médico Legista que determine el tiempo probable de recuperación, asimismo, se dará aviso '+
						'inmediato a la Secretaría, para que proceda a la cancelación de la licencia de conducir en los términos de la Ley</li></ol>',
					sanciones: 'Cuando el conductor sobrepase la cantidad de alcohol permitida, el vehículo será remitido al depósito vehicular, salvo que '+
						'cuente con alguna persona que conduzca el vehículo en los términos de la Ley y el presente Reglamento.'
				},
				{
					id: 34,
					capitulo: 'Capítulo 7: Accidentes y resp. civil',
					titulo: '34. Póliza de seguro',
					texto: 'Todo vehículo que circule en el Distrito Federal debe contar con póliza de seguro de responsabilidad civil '+
						'vigente, que ampare al menos, la responsabilidad civil y daños a terceros en su persona, en términos de la Ley.<br/>'
				},
				{
					id: 35,
					capitulo: 'Capítulo 7: Accidentes y resp. civil',
					titulo: '35. Daños a bienes públicos',
					texto: 'Si como resultado de un accidente de tránsito se ocasionan daños a bienes propiedad de la Administración '+
						'Pública del Distrito Federal, los implicados serán responsables del pago de los mismos, independientemente de lo que '+
						'establezcan otras disposiciones jurídicas.<br/><br/>'+
						'Cuando la causa del accidente de tránsito sea la falta de mantenimiento de una vialidad, una inadecuada señalización o '+
						'alguna otra causa imputable a las autoridades de la Administración Pública del Distrito Federal, los implicados no serán '+
						'responsables de los daños causados y pueden efectuar reclamación ante la autoridad que corresponda para que ésta, a '+
						'través de las dependencias u organismos y procedimientos legales correspondientes, repare los daños causados a su '+
						'persona y/o a su patrimonio.<br/><br/>'+
						'Las autoridades del Distrito Federal, en el caso de que se ocasionen daños a bienes de la Federación, darán aviso a las '+
						'autoridades federales competentes, a efecto de que procedan de conformidad con las disposiciones legales aplicables.<br/>'
				},
				{
					id: 36,
					capitulo: 'Capítulo 7: Accidentes y resp. civil',
					titulo: '36. Daños a bienes privados',
					texto: 'En caso de que en un accidente de tránsito sólo hubiere daños materiales a propiedad privada y los '+
						'involucrados estuvieren de acuerdo en la forma de reparación de los mismos, ningún agente puede remitirlos ante las '+
						'autoridades. La excepción no operará si el conductor se encuentra bajo los efectos del alcohol o narcóticos. No obstante, '+
						'los vehículos serán retirados del lugar a fin de no obstruir la circulación.<br/><br/>'+
						'El agente sólo llenará la boleta de sanción señalando la falta que causó un accidente.<br/><br/>'+
						'Si las partes no estuvieran de acuerdo con la forma de reparación de los daños, serán remitidos ante las autoridades correspondientes.<br/>'
				},
				{
					id: 37,
					capitulo: 'Capítulo 7: Accidentes y resp. civil',
					titulo: '37. Víctimas civiles',
					texto: 'Los conductores de vehículos involucrados en un accidente de tránsito en el que se produzcan lesiones o se '+
						'provoque la muerte de otra persona, siempre y cuando se encuentren en condiciones físicas que no requieran de atención '+
						'médica inmediata, deben proceder de la manera siguiente:<br/><br/>'+
						'<ol class="lista_art"><li>Permanecer en el lugar de los hechos para prestar o facilitar asistencia a la persona o personas lesionadas, procurando '+
						'que se dé aviso a la autoridad competente y a los servicios de emergencia, para que tomen conocimiento de los hechos y actúen en consecuencia</li>'+
						'<li>Desplazar o mover a las personas lesionadas del lugar en donde se encuentren, únicamente cuando no se disponga de '+
						'atención médica inmediata, y si el no hacerlo representa un peligro o se puede agravar su estado de salud</li>'+
						'<li>En caso de fallecimiento, el cuerpo y el o los vehículos no deberán ser removidos del lugar del accidente, hasta que la '+
						'autoridad competente así lo determine</li>'+
						'<li>Colocar de inmediato los señalamientos que se requieran para evitar otro posible accidente</li>'+
						'<li>Retirar el o los vehículos accidentados para despejar la vía, una vez que las autoridades competentes así lo determinen</li></ol>'
				},
				{
					id: 38,
					capitulo: 'Capítulo 8: Funciones de los agentes',
					titulo: '38. Agentes',
					texto: 'Las sanciones en materia de tránsito, señaladas en este Reglamento y demás disposiciones jurídicas, serán '+
						'impuestas por el agente que tenga conocimiento de su comisión, y se harán constar en las boletas seriadas autorizadas por '+
						'la Secretaría y por Seguridad Pública, las cuales para su validez contendrán:<br/><br/>'+
						'<ol class="lista_art"><li>Fundamento Jurídico: '+
						'<ol class="lista_inc"><li>Artículos de la Ley o del presente Reglamento que prevén la infracción cometida</li>'+
						'<li>Artículos de la Ley o del presente Reglamento que establecen la sanción impuesta</li></ol></li>'+
						'<li>Motivación: '+
						'<ol class="lista_inc"><li>Día, hora, lugar y breve descripción del hecho de la conducta infractora</li>'+
						'<li>Nombre y domicilio del infractor, salvo que no esté presente o no los proporcione</li>'+
						'<li>Placas de matrícula, y en su caso, número del permiso del vehículo para circular</li>'+
						'<li>En su caso, número y tipo de licencia o permiso de conducir</li></ol></li>'+
						'<li>Nombre, número de placa, adscripción y firma del agente que tenga conocimiento de la infracción, la cual debe ser en '+
						'forma autógrafa o electrónica, en cuyo caso se estará a lo previsto en la Ley de la materia</li></ol>'+
						'Seguridad Pública coadyuvará con la Secretaría para la aplicación de sanciones por el incumplimiento a la Ley de '+
						'Transporte cuando exista flagrancia.<br/><br/>'+
						'Cuando se trate de infracciones detectadas a través de los equipos y sistemas tecnológicos se estará a lo dispuesto en los '+
						'artículos 39 BIS y 42 del presente Reglamento.<br/>'
				},
				{
					id: 39,
					capitulo: 'Capítulo 8: Funciones de los agentes',
					titulo: '39. Proceso de infracción',
					texto: 'Cuando los conductores de vehículos cometan una infracción a lo dispuesto por este Reglamento y demás '+
						'disposiciones aplicables, los agentes procederán de la manera siguiente:<br/><br/>'+
						'<ol class="lista_art"><li>Indicarán al conductor que detenga la marcha de su vehículo</li>'+
						'<li>Se identificarán con su nombre y número de placa</li>'+
						'<li>Señalarán al conductor la infracción que cometió y le mostrarán el artículo del Reglamento que lo fundamenta, así como '+
						'la sanción que proceda por la infracción</li>'+
						'<li>Solicitarán al conductor la licencia de conducir y la tarjeta de circulación, documentos que serán entregados para su '+
						'revisión y devueltos en el mismo sitio inmediatamente después de que los hubiese revisado.</li></ol>'+
						'Una vez efectuada la revisión de los documentos y de la situación en la que se encuentra el vehículo, si éstos están en '+
						'orden, el agente procederá a llenar la boleta de sanción, de la que extenderá una copia al interesado.<br/><br/>'+
						'En caso de que el conductor no presente para su revisión la tarjeta de circulación y la licencia de conducir, el agente '+
						'procederá a remitir el vehículo al depósito.<br/><br/>'+
						'Para el caso de infracciones detectadas a través de la información obtenida con equipos y sistemas tecnológicos de '+
						'Seguridad Pública, se estará a lo dispuesto en los artículos 39 BIS y 42 del presente Reglamento.<br/><br/>'+
						'<strong>Artículo 39 BIS.</strong> Las infracciones a este Reglamento que sean detectadas a través de equipos y sistemas tecnológicos, '+
						'éstas serán impuestas por el agente que se encuentre asignado para ello, lo cual se hará constar en boletas seriadas '+
						'autorizadas por la Secretaría de Seguridad Pública, las cuales para su validez contendrán:<br/><br/>'+
						'<ol class="lista_art"><li>Fundamento Jurídico:'+
						'<ol class="lista_inc"><li>Artículos que prevén la infracción cometida de la Ley o el presente Reglamento</li>'+
						'<li>Artículos que establecen la sanción impuesta de la Ley o el presente Reglamento.</li></ol></li>'+
						'<li>Motivación:'+
						'<ol class="lista_inc"><li>Día, hora, lugar y breve descripción del hecho de la conducta infractora, que deriva de lo captado por el medio tecnológico utilizado</li>'+
						'<li>Nombre y domicilio del infractor</li>'+
						'<li>Placas de matrícula, y en su caso, número del permiso del vehículo para circular.</li></ol></li>'+
						'<li>Tecnología utilizada para captar la comisión de la infracción y el lugar en que se encontraba el equipo tecnológico al '+
						'momento de ser detectada la infracción cometida.</li>'+
						'<li>Atendiendo al tipo de tecnología utilizada, se acompaña con el formato expedido por el propio instrumento tecnológico '+
						'que captó la infracción o copia de la imagen y/o sonidos y su trascripción en su caso, con la confirmación de que dichos '+
						'elementos corresponden en forma auténtica y sin alteración de ningún tipo a lo captado por el instrumento tecnológico usado.</li>'+
						'<li>Nombre, número de placa, adscripción y firma electrónica del agente que se encuentre asignado y facultado para expedir la sanción</li></ol>'+
						'La información obtenida con equipos y sistemas tecnológicos, con base en la cual se determine la imposición de la sanción, '+
						'hará prueba plena en términos de lo que dispone el artículo 34 de la Ley que Regula el Uso de Tecnología para la '+
						'Seguridad Pública del Distrito Federal.<br/>'
				},
				{
					id: 40,
					capitulo: 'Capítulo 9: Sanciones',
					titulo: '40. Pago de multas',
					texto: 'El pago de la multa se puede realizar en:<br/><br/>'+
						'<ol class="lista_art"><li>Oficinas de la Administración Tributaria de la Tesorería del Distrito Federal de la Secretaría de Finanzas</li>'+
						'<li>Centros autorizados para este fin</li>'+
						'<li>Con el agente que impuso la infracción en caso de que cuente con tecnología que le permita emplear una terminal de cobro con impresora</li></ol>'+
						'El infractor tendrá un plazo de treinta días naturales contados a partir de la fecha de emisión de la boleta de sanción para '+
						'realizar el pago, teniendo derecho a que se le descuente un 50% del monto de la misma, con excepción de la sanción que '+
						'establece el artículo 13 del presente Reglamento; vencido dicho plazo sin que se realice el pago, deberá cubrir los demás '+
						'créditos fiscales que establece el Código Financiero del Distrito Federal.<br/><br/>'+
						'Para el caso de las infracciones que son notificadas vía correo certificado o con acuse de recibo, el ciudadano podrá '+
						'promover la aplicación del derecho mencionado si la línea de captura que acompaña al documento expira antes del plazo '+
						'mencionado, siempre y cuando se acredite, en las Oficinas de Atención Ciudadana para la Aclaración de Infracciones, que '+
						'la fecha de notificación domiciliaria fue extemporánea.<br/>'
				},
				{
					id: 41,
					capitulo: 'Capítulo 9: Sanciones',
					titulo: '41. Centros de verificación',
					texto: 'La autoridad ambiental facultará a los centros de verificación vehicular para que, sujetándose a los sistemas '+
						'informáticos que se desarrollen y los lineamientos que se expidan, constaten que los propietarios o poseedores de '+
						'vehículos están libres de adeudos por multas derivadas de infracciones al presente Reglamento, previa la realización de las '+
						'pruebas de emisiones.<br/>'
				},
				{
					id: 42,
					capitulo: 'Capítulo 9: Sanciones',
					titulo: '42. Infracciones automatizadas',
					texto: 'Cuando se trate de infracciones a este Reglamento captadas por equipos y sistemas tecnológicos, la boleta '+
						'de infracción será entregada en forma personal por conducto del agente que la expida, de lo cual dejará constancia. Si el '+
						'infractor se negare a recibirla se hará constar esa situación para los efectos correspondientes.<br/><br/>'+
						'Las multas expedidas con apoyo de equipos y medios tecnológicos, en el caso que no fuera posible la entrega personal al '+
						'infractor en el momento que se expida, será notificada por correo certificado o con acuse de recibo en el domicilio registrado '+
						'del propietario del vehículo quien será responsable de su pago.<br/><br/>'+
						'En el caso de los vehículos matriculados en el Distrito Federal, en cumplimiento de lo dispuesto por el artículo 41 del '+
						'presente Reglamento, se presume salvo prueba en contrario, que el propietario del vehículo toma conocimiento de la '+
						'infracción cometida, el día inmediato subsecuente al momento en que con motivo del trámite de verificación vehicular recibe '+
						'el informe de la multa que aparece registrada en el sistema con cargo al vehículo.<br/><br/>'+
						'Las multas impuestas por violación al presente Reglamento con motivo del uso o tenencia de vehículos podrán consultarse '+
						'en la página de Internet del <a href="http://www.infracciones.ssp.df.gob.mx">Sistema del Infracciones del Gobierno del Distrito Federal</a> '+
						'para su pago oportuno.<br/>'
				},
				{
					id: 43,
					capitulo: 'Capítulo 9: Sanciones',
					titulo: '43. Tipificación de un delito',
					texto: 'Sin perjuicio de las sanciones que correspondan, los conductores de vehículos que cometan alguna infracción '+
						'a las normas de este Reglamento que pueda dar lugar a la tipificación de un delito, serán puestos a disposición del '+
						'Ministerio Público que corresponda por los agentes que tengan conocimiento del caso, para que aquél resuelva conforme a derecho. <br/><br/>'+
						'Tratándose de menores de edad, el agente o el Ministerio Público que tenga conocimiento del caso deberá llamar a los '+
						'padres o tutores del menor a efecto de que, sin perjuicio de efectuar su remisión al Consejo Tutelar de Menores Infractores, '+
						'en los casos que proceda, se tomen las providencias necesarias para que se cubra la responsabilidad civil en que haya incurrido.<br/>'
				},
				{
					id: 44,
					capitulo: 'Capítulo 9: Sanciones',
					titulo: '44. Licencias y sistema de puntos',
					texto: 'Las licencias de conducir se cancelarán al acumular doce puntos de penalización.<br/><br/>'+
						'La Secretaría realizará el cómputo de los puntos de penalización con base en las boletas de sanción expedidas por '+
						'Seguridad Pública, que hubieran sido impuestas con información de la licencia del conductor presente en el momento de la conducta infractora.<br/><br/>'+
						'Los puntos de penalización se acumularán de la siguiente manera:<br/><br/>'+
						'<ol class="lista_art"><li>Seis puntos por infringir el presente Reglamento en sus artículos 5 fracción V, 6 fracciones I, II, VI y XV, 14 fracción VI, 31 y 32</li>'+
						'<li>Tres puntos por infringirlo en sus artículos 5 fracción III, 6 fracción IX y 12 fracción XIV</li>'+
						'<li>Un punto por infringirlo en cualquier artículo distinto de los señalados en las dos fracciones anteriores</li></ol>'+
						'Cuando una boleta de sanción sea anulada, los puntos se descontarán por la Secretaría con base en copia de la resolución '+
						'judicial o administrativa respectiva.<br/><br/>'+
						'La acumulación de puntos no eximirá al titular de la licencia de cumplir con la sanción que corresponda a la infracción cometida.<br/><br/>'+
						'Los puntos de penalización tendrán una vigencia de un año a partir de la fecha de la expedición de la boleta de sanción.<br/><br/>'+
						'La reexpedición de una licencia que se haya extinguido por penalización procederá sólo después de transcurridos tres años.<br/><br/>'+
						'Las personas cuya licencia haya sido cancelada, y conduzcan algún vehículo en el lapso a que se refiere el párrafo anterior, '+
						'serán sancionadas con la remisión del vehículo al depósito y una multa de noventa a ciento ochenta días de salario mínimo.<br/>'
				},
				{
					id: 45,
					capitulo: 'Capítulo 9: Sanciones',
					titulo: '45. Remisión al depósito',
					texto: 'En los casos en que proceda la remisión del vehículo al depósito, y previamente a que se haya iniciado el '+
						'proceso de arrastre, los agentes deben sellarlo para garantizar la guarda y custodia de los objetos que en él se encuentren.<br/><br/>'+
						'Procederá la remisión del vehículo al depósito aún cuando esté el conductor a bordo. Si se encontrare persona '+
						'ostensiblemente menor de 16 años, mayor de 65 años o con discapacidad, el agente levantará la infracción que '+
						'corresponda y esperará hasta que llegue el conductor o persona responsable para proceder en forma inmediata a la '+
						'remisión del vehículo al depósito, salvo que se encuentre dentro de los supuestos previstos en el artículo 46 de este Reglamento.<br/><br/>'+
						'Si el conductor o la persona responsable se opusiere a la remisión del vehículo y/o se negare a salir de él, será puesto a '+
						'disposición del Juez Cívico competente del lugar de los hechos, para la aplicación de la sanción correspondiente en '+
						'términos de la Ley de Cultura Cívica para el Distrito Federal.<br/><br/>'+
						'Los agentes de Seguridad Pública que hubieren ordenado o llevado a cabo la remisión al depósito, informarán de '+
						'inmediato, a través de los medios electrónicos de que dispongan, al centro de control correspondiente los datos del depósito '+
						'al cual se remitió, tipo de vehículo y matrícula así como el lugar del que fue retirado.<br/><br/>'+
						'Seguridad Pública puede auxiliarse de terceros para la remisión de vehículos a depósitos propios o de dichos terceros.<br/><br/>'+
						'Para la devolución del vehículo en los depósitos, será indispensable la comprobación de su propiedad o legal posesión, el '+
						'pago previo de las multas adeudadas y derechos que procedan, exhibición de la licencia de conducir, una copia de la '+
						'misma y portar las llaves del vehículo. Asimismo, se deberá comprobar la no existencia de créditos por concepto del '+
						'Impuesto sobre Tenencia o Uso de Vehículos, federal o local, según corresponda y derechos por servicios de control '+
						'vehicular, del ejercicio fiscal anterior al de la devolución del vehículo.<br/>'
				},
				{
					id: 46,
					capitulo: 'Capítulo 9: Sanciones',
					titulo: '46. Déposito, excepciones.',
					texto: 'Los vehículos que transporten perecederos, sustancias tóxicas o peligrosas o que cuenten con la autorización, '+
						'calcomanía o distintivo expedido por la autoridad competente para el traslado o conducción de personas con discapacidad, '+
						'no podrán ser remitidos al depósito por violación a lo establecido en el presente Reglamento, excepto cuando el conductor '+
						'muestre síntomas de estar en estado de ebriedad o bajo el influjo de narcóticos.<br/><br/>'+
						'En todo caso, el agente llenará la boleta de sanción correspondiente, permitiendo que el vehículo continúe su marcha.<br/>'
				},
				{
					id: 47,
					capitulo: 'Capítulo.10: Medios de impugnación',
					titulo: '47. Recurso de inconformidad',
					texto: 'Los particulares afectados por los actos y resoluciones de las autoridades, podrán en los términos '+
						'establecidos por la Ley de Procedimiento Administrativo del Distrito Federal, interponer el recurso de inconformidad, ante la '+
						'autoridad competente o impugnar la imposición de las sanciones ante el Tribunal de lo Contencioso Administrativo del '+
						'Distrito Federal, en los términos y formas señalados por la ley que lo rige.<br/><br/>'+
						'Cuando se trate de multas, la interposición del recurso de inconformidad suspenderá el plazo referido.<br/>'
				},
				{
					id: 48,
					capitulo: 'Capítulo.10: Medios de impugnación',
					titulo: '48. Sanciones a agentes',
					texto: 'A los agentes que violen lo preceptuado en este Reglamento o que en aplicación del mismo remitan a un '+
						'conductor ante un Juzgado Cívico, sin que medie infracción de tránsito alguna o remitan un vehículo a un depósito sin '+
						'causa justificada, se les aplicarán las sanciones correspondientes. Los particulares pueden acudir ante el Ministerio Público, '+
						'la Contraloría General del Distrito Federal, la Contraloría Interna o los órganos internos de Disciplina de Seguridad Pública '+
						'a denunciar presuntos actos ilícitos de un agente.<br/>'
				}
			]
		}
	}
});