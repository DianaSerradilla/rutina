export const nutritionData = {
  suplementos: [
    {
      nombre: "Creatina Monohidrato",
      dosis: "10g",
      momento: "5g en el desayuno + 5g post-entreno",
      objetivo: "Resaturación de ATP y resiliencia cognitiva frente a privación de sueño."
    },
    {
      nombre: "Melena de León",
      dosis: "1g a 2g",
      momento: "45 min antes de tu sesión de Boxeo o Calistenia nocturna",
      objetivo: "Aumento del enfoque (NGF) y mitigación de la fatiga del sistema nervioso central."
    },
    {
      nombre: "Ashwagandha",
      dosis: "300mg - 600mg",
      momento: "Con la cena (noche)",
      objetivo: "Reducción del cortisol inducido por el entrenamiento y mejora endocrina."
    },
    {
      nombre: "Magnesio (Bisglicinato o Treonato)",
      dosis: "400mg - 1g",
      momento: "30 min antes de dormir",
      objetivo: "Apagado del sistema nervioso simpático; facilitación del sueño de ondas lentas."
    },
    {
      nombre: "Omega-3 (EPA/DHA)",
      dosis: "2g a 3g",
      momento: "Con el almuerzo o cena (requiere grasa para absorberse)",
      objetivo: "Profilaxis neurológica (vital por los impactos del boxeo) y control de inflamación celular."
    },
    {
      nombre: "Beta-Alanina",
      dosis: "6.4g",
      momento: "Repartido a lo largo del día (fase de carga crónica)",
      objetivo: "Esponja molecular para retrasar el fallo por ácido láctico en tus AMRAPs."
    }
  ],
  esquema_semanal: [
    {
      dia: "Lunes",
      entrenamiento: "PULL a las 07:00 hs + Boxeo a las 19:00 hs",
      almuerzo: { tipo: "Carbo-Proteico", desc: "Vital para reponer el glucógeno destruido en la mañana y llenar los depósitos para soportar el boxeo en la noche." },
      cena: { tipo: "Solo Proteína", desc: "Bajas la insulina en sangre para facilitar la liberación de hormona de crecimiento nocturna." }
    },
    {
      dia: "Martes",
      entrenamiento: "Movilidad AM + Calistenia PUSH a las 21:00 hs",
      almuerzo: { tipo: "Solo Proteína", desc: "Tu mañana fue de movilidad fascial; no hay vaciamiento de glucógeno. La energía la obtienes de las grasas." },
      cena: { tipo: "Carbo-Proteico", desc: "Inmediatamente después de tus fondos pesados y verticales para cortar el catabolismo y reparar el tejido." }
    },
    {
      dia: "Miércoles",
      entrenamiento: "LEGS a las 07:00 hs + Boxeo a las 19:00 hs",
      almuerzo: { tipo: "Carbo-Proteico", desc: "Obligatorio tras el estrés masivo del Peso Muerto y antes del impacto del boxeo." },
      cena: { tipo: "Solo Proteína", desc: "Bajas la insulina nocturna post-entrenamiento para optimizar la reparación celular y evitar almacenamiento lipídico." }
    },
    {
      dia: "Jueves",
      entrenamiento: "Movilidad AM + Calistenia PULL a las 21:00 hs",
      almuerzo: { tipo: "Solo Proteína", desc: "Tu mañana fue de movilidad; sin demanda glucolítica intensa. Mantienes la quema de grasas activa." },
      cena: { tipo: "Carbo-Proteico", desc: "Para la recuperación estructural tras las dominadas estrictas e isometrías (Front Lever)." }
    },
    {
      dia: "Viernes",
      entrenamiento: "PUSH a las 07:00 hs + Cardio Zona 1/2 a las 17:00 hs",
      almuerzo: { tipo: "Carbo-Proteico", desc: "Post empuje pesado (Press Banca)." },
      cena: { tipo: "Solo Proteína", desc: "El cardio en Zona 2 oxida ácidos grasos, no agota glucógeno. No necesitas carbohidratos aquí." }
    },
    {
      dia: "Sábado",
      entrenamiento: "LEGS a las 10:00/11:00 hs + Cardio",
      almuerzo: { tipo: "Carbo-Proteico", desc: "Inmediatamente después de la compresión axial de las Sentadillas libres." },
      cena: { tipo: "Solo Proteína", desc: "Sin entrenamientos posteriores. Prioridad absoluta a la reparación tisular y descanso del sistema nervioso." }
    },
    {
      dia: "Domingo",
      entrenamiento: "Descanso Activo / Zona 2 pura",
      almuerzo: { tipo: "Solo Proteína", desc: "(Cero levantamientos = cero necesidad de recarga glucídica pesada)." },
      cena: { tipo: "Solo Proteína", desc: "(Cero levantamientos = cero necesidad de recarga glucídica pesada)." },
      nota: "Como pautamos UN solo Cheat Meal semanal, el Domingo en el almuerzo es el momento biomecánicamente óptimo para colocarlo. Esto provocará un superávit agudo que rellenará tus reservas sistémicas justo a tiempo para afrontar el Lunes de doble turno."
    }
  ],
  regla_vegetales: {
    libres: "Hojas verdes (lechuga, espinaca, rúcula, kale), pepino, apio, espárragos, brócoli.",
    restringidos: "Frutas de todo tipo, remolacha, zanahoria, choclo, calabaza pesada. Son carbohidratos, trátalos como tal."
  },
  estrategia_perientrenamiento: {
    titulo: "ESTRATEGIA PERI-ENTRENAMIENTO (Early Morning)",
    desc: "Ya que vas al gimnasio a las 07:00 hs, tu estrategia actual es clínicamente perfecta para evitar el catabolismo y aportar glucosa directa sin pesadez gástrica.",
    comida: "Pre-entreno (06:30 AM): Café negro + 2 dátiles + puñado de frambuesas + 1 cdita de miel.",
    nota: "Agrega tus 5g de Creatina aquí o en el desayuno posterior."
  },
  comidas: {
    desayunos: [
      { titulo: "Opción 1 (Eléctrica)", desc: "2 rebanadas de pan (integral o masa madre) + 2 huevos enteros revueltos + 1/4 de palta pisada." },
      { titulo: "Opción 2 (Anabólica)", desc: "1 porción de Pancakes proteicos/ketos Granger + puñado de frutos rojos." },
      { titulo: "Opción 3 (Rápida)", desc: "200g de Yogurt natural + 1 scoop de proteína (mezclado en la masa o como \"syrup\" con un poco de agua) + 20g de Quinoa pop + 1 manzana verde picada + 3 nueces picadas." }
    ],
    carbo_proteicas: {
      regla: "Úsalas EXCLUSIVAMENTE como almuerzos o cenas en los DÍAS DE ALTO IMPACTO (Lunes, Miércoles, Viernes y Sábados).",
      opciones: [
        { titulo: "Opción 1", desc: "150g Suprema de pollo a la plancha + 60g (en crudo) de Arroz integral o Quinoa + Espinaca salteada y tomate." },
        { titulo: "Opción 2", desc: "150g Bife de chorizo (corte magro, retira la grasa visible) + 150g de Papa o Camote (hervido/horno, pesado en crudo) + Ensalada verde." },
        { titulo: "Opción 3", desc: "1 Lata de atún al natural + 60g (en crudo) de fideos o lentejas/garbanzos + 1 cda sopera de aceite de oliva + Tomate y pepino." },
        { titulo: "Opción 4", desc: "2 huevos + 2 porciones de pizza con queso y jamon + 1 cda sopera de aceite de oliva + Tomate y pepino." }
      ]
    },
    solo_proteicas: {
      regla: "Úsalas para las cenas, o como almuerzos en tus DÍAS DE DESCANSO / MOVILIDAD (Martes, Jueves, Domingos).",
      opciones: [
        { titulo: "Opción 1", desc: "150g Suprema de pollo + Ensalada gigante (lechuga, espinaca, pepino) + 1/2 palta + 1 cda de aceite de oliva. (Aportas la energía desde los lípidos, no desde el glucógeno)." },
        { titulo: "Opción 2", desc: "Tortilla de 3 huevos (1 entero, 2 claras) + 200g de Calabaza al horno + Remolacha rallada + 3 nueces." },
        { titulo: "Opción 3", desc: "150g Bife de chorizo + Puré de calabaza (solo calabaza, sin manteca ni leche) + Espinaca salteada con un hilo de aceite de oliva." }
      ]
    }
  },
  chocolate: "El pedacito de chocolate semiamargo (15-20g) después de almorzar o cenar es viable. Te ayuda psicológicamente a marcar el \"fin de la comida\" y promueve la adherencia. Se queda en el plan.",
  matematica_clinica: [
    {
      titulo: "Las Proteínas (Regla de la Deshidratación = Pierden un 25% a 30%)",
      desc: "El calor contrae el músculo del animal y expulsa agua. Tus macros y calorías siguen intactos en ese trozo más pequeño. 150g de Suprema o Bife (en crudo) -> Se convierten en 110g - 115g cocidos (ya sea a la plancha, al horno o hervidos)."
    },
    {
      titulo: "Los Carbohidratos Secos (Regla de la Hidratación = Multiplican por 3)",
      desc: "El almidón absorbe agua hervida como una esponja. Esa agua extra da saciedad mecánica pero tiene cero calorías. 60g de Arroz / Fideos / Lentejas / Quinoa (en crudo) -> Se convierten en 180g hervidos. En tu semana de descarga (40g en crudo) -> Se convierten en 120g hervidos."
    },
    {
      titulo: "Los Tubérculos (Regla del Horno = Pierden un 20%)",
      desc: "150g de Papa o Camote (en crudo) -> Si los haces al horno, pierden humedad y se reducen a unos 115g - 120g horneados. Si los hierves, el peso se mantiene casi idéntico al crudo."
    }
  ],
  hidratacion: {
    titulo: "Agua (Sistema de Bloques)",
    desc: "No pienses en '2 litros'. Piensa en eventos. Toma 500ml apenas te levantas (antes del café). Toma 500ml intra-entrenamiento en el gimnasio. Toma 500ml antes de sentarte a almorzar. Toma 500ml antes de sentarte a cenar. Listo, completaste 2 litros sin pensarlo."
  },
  protocolos_picoteo: [
    { titulo: "Estandarización Circadiana (Oficina)", desc: "Consumir comidas a horas matemáticamente idénticas cada día sincroniza el reloj biológico periférico. Esto estabiliza la liberación de insulina, leptina y grelina, minimizando la fatiga de decisión en la oficina y anulando la necesidad fisiológica de picotear. Pon alarmas en tu teléfono. Comes a esa hora, y fuera de esa hora, tu boca está cerrada." },
    { titulo: "Protocolo 1 (Bloqueo Hormonal del Hambre)", desc: "2 Huevos duros enteros. (La combinación de grasas y proteínas de altísima biodisponibilidad frena la grelina en seco y tiene un impacto glucémico nulo)." },
    { titulo: "Protocolo 2 (Volumen sin Calorías Útiles)", desc: "Bastones de apio y pepino (cantidad libre) untados con 1 cucharada sopera rasa (15g) de queso crema light o humus. (Satisface la necesidad mecánica de masticar por ansiedad en la oficina)." },
    { titulo: "Protocolo 3 (Densidad Lipídica)", desc: "15 almendras o 6 mitades de nueces. Ni una más. (No dispares la insulina, aportas neuroprotección, pero debes contarlas una por una porque la densidad calórica es masiva)." },
    { titulo: "Protocolo 4 (Reposición de Electrolitos)", desc: "8 aceitunas verdes o una taza de caldo de huesos/vegetales bien salado. (A veces el 'hambre' es simplemente una caída de la presión arterial y falta de sodio tras sudar en tus entrenamientos)." }
  ],
  semana_descarga: {
    titulo: "SEMANAS DE DESCARGA",
    puntos: [
      {
        titulo: "1. Pre-Entrenamiento (El Ajuste del Motor)",
        desc: "Como no vas a levantar pesado ni a hacer AMRAPs al fallo en el boxeo, no necesitas un pico de glucosa en sangre a las 06:30 AM. El Ajuste: Elimina los dátiles y la miel. Qué consumes: Solo el Café negro + tu dosis de Creatina (10g) + el puñado de frambuesas (fibra de bajo impacto)."
      },
      {
        titulo: "2. Desayunos (Mantenimiento Basal)",
        desc: "Se mantienen intactos. Necesitas este bloque nutricional para arrancar tu metabolismo y frenar el cortisol matutino. Porciones: 200g de Yogurt natural + 1 Scoop de Proteína + 20g Quinoa pop + 1 manzana + 3 nueces O 2 rebanadas de pan + 2 huevos + 1/4 palta."
      },
      {
        titulo: "3. Comidas Carbo-Proteicas (El Recorte Estratégico)",
        desc: "Aquí es donde aplicamos el bisturí. Como no hay un gasto energético masivo, reducimos la carga glucídica (almidones) aproximadamente un 30% para evitar que el exceso de glucosa se almacene como grasa. La Proteína (Inamovible): 150g de Suprema, Bife magro o 1 lata de atún. Los Carbohidratos (Ajuste a la baja): Si comías 60g de arroz/fideos/lentejas, ahora pesas 40g en crudo. Si comías 150g de papa/camote, ahora pesas 100g en crudo. Los Vegetales: Ensalada verde libre."
      },
      {
        titulo: "4. Comidas Solo Proteínas (El Entorno Lipolítico)",
        desc: "Al igual que los desayunos, estas comidas se mantienen absolutamente idénticas. En tu semana de descarga, esta es la comida que forzará a tu cuerpo a seguir oxidando grasas en reposo. Porciones: 150g de Proteína (Pollo/Carne) o Tortilla de 3 huevos + Vegetales verdes gigantes (Lechuga, espinaca, pepino, calabaza) + Tu fuente de grasa (1/2 palta o 1 cucharada sopera de aceite de oliva)."
      }
    ],
    reglas_clinicas: [
      { titulo: "Frecuencia del Cheat Meal", desc: "Sigue siendo UNO solo en la semana (preferiblemente el domingo al mediodía). No uses la descarga como excusa para comer basura todos los días." },
      { titulo: "Hidratación", desc: "Bajas la intensidad, sudas menos. Puedes reducir ese margen extra de 1.5 - 2 litros que tomabas durante el boxeo pesado, pero tus 2 litros basales de agua pura fuera del gimnasio son innegociables." }
    ]
  }
};
