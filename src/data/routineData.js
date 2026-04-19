export const mesocyclesInfo = {
  "meso1": {
    "id": "meso1",
    "title": "MESOCICLO 1: \"Tensión Constante y Adaptación Base\"",
    "justification": "El objetivo de estas primeras 4 semanas no es la destrucción fibrilar, sino la eficiencia neurológica y la hipertrofia mediada por el Tiempo Bajo Tensión (TUT). Utilizamos prioritariamente poleas y máquinas porque eliminan el vector de inestabilidad; esto permite que tu Sistema Nervioso Central (SNC) envíe el máximo voltaje eléctrico al músculo objetivo sin desperdiciar energía estabilizando articulaciones. En calistenia, no te subes a la barra hasta que tu core pueda generar el torque necesario en el suelo (Dragon Flag)."
  },
  "meso2": {
    "id": "meso2",
    "title": "MESOCICLO 2: \"Alteración de Vectores y Peso Libre\"",
    "justification": "Una vez que el tejido conectivo está lubricado, alteramos el perfil de resistencia pasando a los pesos libres (mancuernas y barras). Esto modifica el brazo de momento y obliga a los músculos antagonistas y estabilizadores a co-contraerse, aumentando drásticamente la resiliencia articular. En calistenia, condicionamos la cápsula del hombro y el tendón bicipital con la rotación extrema (Skin the Cat) para que no te rompas cuando intentes el Back Lever real."
  },
  "meso3": {
    "id": "meso3",
    "title": "MESOCICLO 3: \"Hibridación, Transferencia y Sobrecarga\"",
    "justification": "Es la fase de clímax del macrociclo. Utilizamos variantes guiadas de carga supramáxima (Smith Inclinado, Hack Squat) para reventar la vía anabólica mTORc1 sin que tu lumbar dicte el fallo. La fuerza estructural construida en los dos meses anteriores ahora se transfiere directamente a la isometría en la barra (calistenia). Es aquí donde se materializan las skills utilizando asistencia (bandas) para replicar la cinemática exacta del movimiento final sin colapso técnico."
  },
  "meso4": {
    "id": "meso4",
    "title": "MESOCICLO 4: \"Fuerza Unilateral y Consolidación de Skills\"",
    "justification": "Tras 12 semanas de sobrecarga progresiva y desarrollo de estabilidad asistida, el Sistema Nervioso Central (SNC) está capacitado para gestionar la inestabilidad extrema. Desplazamos el eje mecánico hacia la fuerza unilateral absoluta (Pistol Squats), exigiendo co-contracción máxima del complejo lumbopélvico, propiocepción y dorsiflexión profunda. En calistenia, se abandona la preparación basal en suelo para transferir la fuerza estructural directamente a la barra, materializando las isometrías objetivo utilizando asistencia (bandas) para replicar la cinemática final sin colapso articular."
  }
};

const rawSplitData = {
  "meso1": {
    "week1": {
      "title": "SEMANA 1: VOLUMEN Y ADAPTACIÓN BASE",
      "objective": "Acumulación de trabajo (RIR 2). Cadencia: 3-1-X-1. Agarres Calistenia: Pronos.",
      "days": [
        {
          "id": "d1",
          "dayName": "DÍA 1 (Lunes)",
          "split": "PULL 2 (Gimnasio)",
          "color": "blue",
          "details": [
            {
              "type": "Básico",
              "desc": "Remo con máquina | 4 series x 8-10 reps."
            },
            {
              "type": "Aislamiento Dorsal",
              "desc": "Jalón polea alta prono | 3 series x 10-12 reps."
            },
            {
              "type": "Estabilizadores",
              "desc": "Facepull polea alta | 3 series x 12-15 reps."
            },
            {
              "type": "Estabilizadores",
              "desc": "Chest Supported Y Raise | 3 series x 12 reps."
            },
            {
              "type": "Metabólica",
              "desc": "Shrugs (3 x 12) + Curl Martillo mancuerna (3 x 10)."
            },
            {
              "type": "Bíceps",
              "desc": "Curl Scott (Predicador) | 2 series x 10-12 reps."
            },
            {
              "type": "Bíceps",
              "desc": "Curl Bayesian en polea | 2 series x 10-12 reps."
            }
          ]
        },
        {
          "id": "d2",
          "dayName": "DÍA 2 (Martes)",
          "split": "PUSH 2 (Calistenia)",
          "color": "purple",
          "details": [
            {
              "type": "Skills",
              "desc": "Planche Leans | 3 series x 8 a 10 reps con isometría."
            },
            {
              "type": "Skills",
              "desc": "L-Sit en paralelas | 3 series x 10-15 seg."
            },
            {
              "type": "Verticales",
              "desc": "Vertical (Handstand) / Ranita | 15 minutos."
            },
            {
              "type": "Básico",
              "desc": "Fondos en Paralelas (Dips) | 4 series x 6-8 reps."
            },
            {
              "type": "Aislamiento",
              "desc": "Flexiones diamante + Flexiones | 3 series x 10-15 reps (Objetivo: RIR 2)."
            }
          ]
        },
        {
          "id": "d3",
          "dayName": "DÍA 3 (Miércoles)",
          "split": "LEGS 2 (Gimnasio)",
          "color": "green",
          "details": [
            {
              "type": "Básico",
              "desc": "Peso Muerto Convencional | 3 series x 5 reps."
            },
            {
              "type": "Aislamiento",
              "desc": "Hip Thrust pesado | 3 series x 8-10 reps."
            },
            {
              "type": "Aislamiento",
              "desc": "Curl de isquios sentado | 3 series x 10-12 reps."
            },
            {
              "type": "Pantorrillas",
              "desc": "Elevación pantorrillas pie | 3 series x 12-15 reps. + Tibialis"
            },
            {
              "type": "Core",
              "desc": "Espinales en banco | 2 x 12 + Crunch polea"
            }
          ]
        },
        {
          "id": "d4",
          "dayName": "DÍA 4 (Jueves)",
          "split": "PULL 1 (Calistenia)",
          "color": "blue",
          "details": [
            {
              "type": "Skills",
              "desc": "Dragon Flag (Tucks) | 3 series x 8-10 reps."
            },
            {
              "type": "Skills",
              "desc": "Rodillas a la barra estricto | 3 series x 10 reps."
            },
            {
              "type": "Verticales",
              "desc": "Vertical (Handstand) puro | 15 minutos."
            },
            {
              "type": "Básico",
              "desc": "Dominadas Estrictas Prono | 4 series x 5-8 reps (RIR 2)."
            },
            {
              "type": "Aislamiento",
              "desc": "Scapular Pull-ups | 3 series x 8-10 reps.\nCurl Biceps | 3 series x 8-10 reps."
            }
          ]
        },
        {
          "id": "d5",
          "dayName": "DÍA 5 (Viernes)",
          "split": "PUSH 1 (Gimnasio)",
          "color": "purple",
          "details": [
            {
              "type": "Básico",
              "desc": "Press Banca Plano Barra | 4 series x 6-8 reps."
            },
            {
              "type": "Aislamiento",
              "desc": "Peck Deck | 3 series x 10-12 reps."
            },
            {
              "type": "Hombro",
              "desc": "Press Militar Smith | 2 series x 8-10 reps."
            },
            {
              "type": "Hombro",
              "desc": "Elevaciones Laterales polea | 2 series x 12-15 reps."
            },
            {
              "type": "Hombro",
              "desc": "Peck Deck Inverso | 2 series x 12-15 reps."
            },
            {
              "type": "Tríceps",
              "desc": "Tras nuca polea | 2 series x 10-12 reps."
            },
            {
              "type": "Tríceps",
              "desc": "Extensión cuerda | 2 series x 10-12 reps."
            },
            {
              "type": "Tríceps",
              "desc": "Unilateral supino | 2 series x 12-15 reps."
            }
          ]
        },
        {
          "id": "d6",
          "dayName": "DÍA 6 (Sábado)",
          "split": "LEGS 1 (Gimnasio)",
          "color": "green",
          "details": [
            {
              "type": "Básico",
              "desc": "Sentadilla Libre | 4 series x 6-8 reps."
            },
            {
              "type": "Unilateral",
              "desc": "Búlgaras | 3 series x 8-10 reps por pierna."
            },
            {
              "type": "Aislamiento",
              "desc": "Sissy Squat | 3 series x 10-12 reps."
            },
            {
              "type": "Aductores",
              "desc": "Máquina | 2 series x 12-15 reps c/u."
            },
            {
              "type": "Core",
              "desc": "Crunch polea | 2 series x 12 reps."
            }
          ]
        },
        {
          "id": "d7",
          "dayName": "DÍA 7 (Domingo)",
          "split": "DESCANSO ACTIVO",
          "color": "gray",
          "details": [
            {
              "type": "Cardio",
              "desc": "Caminata - Zona 2."
            }
          ]
        }
      ]
    },
    "week2": {
      "title": "SEMANA 2: FUERZA BASE Y TENSIÓN MECÁNICA",
      "objective": "Sobrecarga progresiva (+5/10% peso). RIR 1. Cadencia: 3-1-X-1.",
      "days": [
        {
          "id": "d1",
          "dayName": "DÍA 1 (Lunes)",
          "split": "PULL 2 (Gimnasio)",
          "color": "blue",
          "details": [
            {
              "type": "Básico",
              "desc": "Remo con máquina | 4 series x 4-6 reps (Carga alta)."
            },
            {
              "type": "Aislamiento Dorsal",
              "desc": "Jalón polea alta prono | 3 series x 8-10 reps."
            },
            {
              "type": "Estabilizadores",
              "desc": "Facepull polea alta | 3 series x 10-12 reps."
            },
            {
              "type": "Estabilizadores",
              "desc": "Chest Supported Y Raise | 3 series x 8-10 reps."
            },
            {
              "type": "Metabólica",
              "desc": "Shrugs (3x10) + Curl Martillo mancuerna (3x8-10)."
            },
            {
              "type": "Bíceps",
              "desc": "Curl Scott | 2 series x 8-10 reps."
            },
            {
              "type": "Bíceps",
              "desc": "Curl Bayesian | 2 series x 8-10 reps."
            }
          ]
        },
        {
          "id": "d2",
          "dayName": "DÍA 2 (Martes)",
          "split": "PUSH 2 (Calistenia)",
          "color": "purple",
          "details": [
            {
              "type": "Skills",
              "desc": "Planche Leans | 3 series x 15-20 seg."
            },
            {
              "type": "Skills",
              "desc": "L-Sit en paralelas | 3 series x 15-20 seg."
            },
            {
              "type": "Verticales",
              "desc": "Handstand puro | 15 minutos."
            },
            {
              "type": "Básico",
              "desc": "Fondos Paralelas | EMOM 10 minutos (2-3 reps/min)."
            },
            {
              "type": "Aislamiento",
              "desc": "Pike Push ups + Extensión Tríceps tras nuca | 3 series x 8-10 reps."
            }
          ]
        },
        {
          "id": "d3",
          "dayName": "DÍA 3 (Miércoles)",
          "split": "LEGS 2 (Gimnasio)",
          "color": "green",
          "details": [
            {
              "type": "Básico",
              "desc": "Peso Muerto Convencional | 4 series x 4-5 reps (RIR 1)."
            },
            {
              "type": "Aislamiento",
              "desc": "Hip Thrust pesado | 3 series x 8-10 reps."
            },
            {
              "type": "Aislamiento",
              "desc": "Curl isquios sentado | 3 series x 8-10 reps."
            },
            {
              "type": "Pantorrillas",
              "desc": "Elevación pie | 3 series x 10-12 reps. + Tibialis."
            },
            {
              "type": "Core",
              "desc": "Espinales con peso | 2 series x 10-12 reps."
            }
          ]
        },
        {
          "id": "d4",
          "dayName": "DÍA 4 (Jueves)",
          "split": "PULL 1 (Calistenia)",
          "color": "blue",
          "details": [
            {
              "type": "Skills",
              "desc": "Dragon Flag (Excéntricas) | 3 series x 10-15 seg."
            },
            {
              "type": "Skills",
              "desc": "Levantamiento rodillas | 3 series x 10 reps."
            },
            {
              "type": "Verticales",
              "desc": "Handstand puro | 15 minutos."
            },
            {
              "type": "Básico",
              "desc": "Dominadas Estrictas | EMOM 10 min (2-3 reps/min)."
            },
            {
              "type": "Aislamiento",
              "desc": "Typewriter Pull-ups | 3 series x 8-10 reps.\nCurl Biceps | 3 series x 8-10 reps."
            }
          ]
        },
        {
          "id": "d5",
          "dayName": "DÍA 5 (Viernes)",
          "split": "PUSH 1 (Gimnasio)",
          "color": "purple",
          "details": [
            {
              "type": "Básico",
              "desc": "Press Banca Plano Barra | 4 series x 4-6 reps."
            },
            {
              "type": "Aislamiento",
              "desc": "Peck Deck | 3 series x 8-10 reps."
            },
            {
              "type": "Hombro",
              "desc": "Press Militar Smith | 2 series x 8-10 reps."
            },
            {
              "type": "Hombro",
              "desc": "Elevaciones Laterales | 2 series x 8-10 reps."
            },
            {
              "type": "Hombro",
              "desc": "Peck Deck Inverso | 2 series x 8-10 reps."
            },
            {
              "type": "Tríceps",
              "desc": "Regla de 3: Tras nuca, Cuerda, Unilateral | 8-12 reps."
            }
          ]
        },
        {
          "id": "d6",
          "dayName": "DÍA 6 (Sábado)",
          "split": "LEGS 1 (Gimnasio)",
          "color": "green",
          "details": [
            {
              "type": "Básico",
              "desc": "Sentadilla Libre | 4 series x 4-6 reps."
            },
            {
              "type": "Unilateral",
              "desc": "Búlgaras | 3 series x 6-8 reps."
            },
            {
              "type": "Aislamiento",
              "desc": "Sissy Squat | 3 series x 8-10 reps."
            },
            {
              "type": "Aductores",
              "desc": "Máquinas | 2 series x 10-12 reps."
            },
            {
              "type": "Core",
              "desc": "Crunch polea | 2 x 12."
            }
          ]
        },
        {
          "id": "d7",
          "dayName": "DÍA 7 (Domingo)",
          "split": "DESCANSO ACTIVO",
          "color": "gray",
          "details": [
            {
              "type": "Cardio",
              "desc": "Zona 2 obligatoria. Sin barras."
            }
          ]
        }
      ]
    },
    "week3": {
      "title": "SEMANA 3: PEAKING E INTENSIDAD MÁXIMA",
      "objective": "RIR 0. Cargas pesadas. DropSet/Rest-Pause.",
      "days": [
        {
          "id": "d1",
          "dayName": "DÍA 1 (Lunes)",
          "split": "PULL 2 (Gimnasio)",
          "color": "blue",
          "details": [
            {
              "type": "Básico",
              "desc": "Remo con máquina | 3 series x 3-5 reps (Pesado, RIR 0)."
            },
            {
              "type": "Aislamiento",
              "desc": "Jalón polea alta prono | 3 series x 6-8 reps (DropSet)."
            },
            {
              "type": "Estabilizadores",
              "desc": "Facepull (3x10) + Chest Supported Y Raise (3x6-8 + DropSet)."
            },
            {
              "type": "Metabólica",
              "desc": "Shrugs + Curl Martillo | 3 series x 6-8 reps. Fallo + Parciales extremas."
            },
            {
              "type": "Bíceps",
              "desc": "Curl Scott & Bayesian | 2 series x 6-8 reps (DropSets)."
            }
          ]
        },
        {
          "id": "d2",
          "dayName": "DÍA 2 (Martes)",
          "split": "PUSH 2 (Calistenia)",
          "color": "purple",
          "details": [
            {
              "type": "Skills",
              "desc": "Planche Leans | 3 series x AMRAP."
            },
            {
              "type": "Skills",
              "desc": "L-Sit | 3 series x Tiempo Máximo."
            },
            {
              "type": "Verticales",
              "desc": "Handstand | 15 min."
            },
            {
              "type": "Básico",
              "desc": "Fondos en Paralelas | Test AMRAP (Max reps x 3)."
            },
            {
              "type": "Aislamiento",
              "desc": "Flexiones Archer + Extensiones Trasnuca | 3 series x 6-10 reps (Al fallo absoluto / RIR 0)."
            }
          ]
        },
        {
          "id": "d3",
          "dayName": "DÍA 3 (Miércoles)",
          "split": "LEGS 2 (Gimnasio)",
          "color": "green",
          "details": [
            {
              "type": "Básico",
              "desc": "Peso Muerto Convencional | 3 series x 3-5 reps (RIR 0)."
            },
            {
              "type": "Aislamiento",
              "desc": "Hip Thrust | 3 series x 6-8 reps (Rest-Pause)."
            },
            {
              "type": "Aislamiento",
              "desc": "Curl isquios sentado | 3 series x 6-8 reps (DropSet)."
            },
            {
              "type": "Pantorrillas",
              "desc": "Elevación pie | 3x8-10 + Tibialis."
            },
            {
              "type": "Core",
              "desc": "Espinales | 2 x 10-12 al fallo."
            }
          ]
        },
        {
          "id": "d4",
          "dayName": "DÍA 4 (Jueves)",
          "split": "PULL 1 (Calistenia)",
          "color": "blue",
          "details": [
            {
              "type": "Skills",
              "desc": "Dragon Flag | 3 series x Tiempo Máximo."
            },
            {
              "type": "Skills",
              "desc": "Rodillas a la barra | 3 series x Max reps."
            },
            {
              "type": "Verticales",
              "desc": "15 min."
            },
            {
              "type": "Básico",
              "desc": "Dominadas Estrictas | Test AMRAP."
            },
            {
              "type": "Aislamiento",
              "desc": "Scapular Pull-ups | 3 series x 8 reps (Sosteniendo contracción isométrica de 2 segundos arriba).\nCurl de bíceps | 3 series x 6-10 reps (Al fallo absoluto / RIR 0)."
            }
          ]
        },
        {
          "id": "d5",
          "dayName": "DÍA 5 (Viernes)",
          "split": "PUSH 1 (Gimnasio)",
          "color": "purple",
          "details": [
            {
              "type": "Básico",
              "desc": "Press Banca Plano | 3 series x 3-5 reps (RIR 0)."
            },
            {
              "type": "Aislamiento",
              "desc": "Peck Deck | 3 series x 6-8 reps (DropSet)."
            },
            {
              "type": "Hombro",
              "desc": "Frontal, Lateral, Posterior | 2x6-8 reps (DropSet)."
            },
            {
              "type": "Tríceps",
              "desc": "Regla de 3 | 2x6-8. DropSets en la segunda serie."
            }
          ]
        },
        {
          "id": "d6",
          "dayName": "DÍA 6 (Sábado)",
          "split": "LEGS 1 (Gimnasio)",
          "color": "green",
          "details": [
            {
              "type": "Básico",
              "desc": "Sentadilla Libre | 3 series x 3-5 reps (RIR 0)."
            },
            {
              "type": "Unilateral",
              "desc": "Búlgaras | 3 series x 6-8 reps (Serie 3 al fallo)."
            },
            {
              "type": "Aislamiento",
              "desc": "Sissy Squat | 3 series x 6-8 reps al fallo."
            },
            {
              "type": "Aductores",
              "desc": "Máquina | 2 series x 8-10 reps (DropSet)."
            },
            {
              "type": "Core",
              "desc": "Crunch polea | 2 x 12."
            }
          ]
        },
        {
          "id": "d7",
          "dayName": "DÍA 7 (Domingo)",
          "split": "DESCANSO ABSOLUTO",
          "color": "gray",
          "details": [
            {
              "type": "Cardio",
              "desc": "Descanso biológico o camina ligera Z2."
            }
          ]
        }
      ]
    },
    "week4": {
      "title": "SEMANA 4: DESCARGA METABÓLICA (DELOAD)",
      "objective": "Bajar todas las cargas 40%. RIR 3-4 (Altas reps). Calistenia sin fallo.",
      "days": [
        {
          "id": "d1",
          "dayName": "DÍA 1 (Lunes)",
          "split": "PULL 2 (Gimnasio)",
          "color": "blue",
          "details": [
            {
              "type": "Básico",
              "desc": "Remo con máquina | 2 series x 10-12 reps."
            },
            {
              "type": "Aislamiento",
              "desc": "Jalón polea prono | 2 series x 12-15 reps."
            },
            {
              "type": "Estabilizadores",
              "desc": "Facepull (2x15) + Chest Supported Y (2x12)."
            },
            {
              "type": "Metabólica",
              "desc": "Shrugs (2x15) + Curl Martillo (2x15) suave."
            },
            {
              "type": "Bíceps",
              "desc": "Curl Scott & Bayesian | 1 serie x 15 reps suave."
            }
          ]
        },
        {
          "id": "d2",
          "dayName": "DÍA 2 (Martes)",
          "split": "PUSH 2 (Calistenia)",
          "color": "purple",
          "details": [
            {
              "type": "Skills",
              "desc": "Planche Leans | 2x5-10s (leve)."
            },
            {
              "type": "Skills",
              "desc": "L-Sit | 2x5-10s con elásticas."
            },
            {
              "type": "Verticales",
              "desc": "15 min suaves."
            },
            {
              "type": "Básico",
              "desc": "Fondos en Paralelas | 2 series x 8-10 reps (Banda si necesario)."
            },
            {
              "type": "Aislamiento",
              "desc": "Flexiones (Agarre Libre) | 2 series x 10-12 reps (Objetivo: RIR 4 - Bombeo suave)."
            }
          ]
        },
        {
          "id": "d3",
          "dayName": "DÍA 3 (Miércoles)",
          "split": "LEGS 2 (Gimnasio)",
          "color": "green",
          "details": [
            {
              "type": "Básico",
              "desc": "Peso Muerto Convencional | 2 series x 8-10 reps (pesos bajísimos)."
            },
            {
              "type": "Accesorios",
              "desc": "Hip Thrust (2x15), Curl Isquios (2x15), Pantorrillas (2x15)."
            },
            {
              "type": "Core",
              "desc": "Espinales | 1x12."
            }
          ]
        },
        {
          "id": "d4",
          "dayName": "DÍA 4 (Jueves)",
          "split": "PULL 1 (Calistenia)",
          "color": "blue",
          "details": [
            {
              "type": "Skills",
              "desc": "Dragon Flag Tucks | 2 series x 5-10 seg suaves."
            },
            {
              "type": "Skills",
              "desc": "Rodillas a barra | 2 series x 8 reps."
            },
            {
              "type": "Básico",
              "desc": "Dominadas Estrictas | 2 series de 5-8 reps (Bandas gruesas)."
            },
            {
              "type": "Aislamiento",
              "desc": "Scapular Pull-ups | 2 series x 8-10 reps (Pausas de 2 segundos arriba, suave)."
            }
          ]
        },
        {
          "id": "d5",
          "dayName": "DÍA 5 (Viernes)",
          "split": "PUSH 1 (Gimnasio)",
          "color": "purple",
          "details": [
            {
              "type": "Básico",
              "desc": "Press Banca Plano | 2 series x 10-12 reps (-40% carga)."
            },
            {
              "type": "Aislamiento",
              "desc": "Peck Deck | 2 series x 12-15 reps."
            },
            {
              "type": "Hombros",
              "desc": "Frontal, Lateral, Posterior | 1 serie x 15 reps c/u."
            },
            {
              "type": "Tríceps",
              "desc": "Regla de 3 | 1 serie x 15 reps."
            }
          ]
        },
        {
          "id": "d6",
          "dayName": "DÍA 6 (Sábado)",
          "split": "LEGS 1 (Gimnasio)",
          "color": "green",
          "details": [
            {
              "type": "Básico",
              "desc": "Sentadilla Libre | 2 series x 10-12 reps (Solo barra)."
            },
            {
              "type": "Unilateral",
              "desc": "Búlgaras | 2 series x 8-10 reps corporales."
            },
            {
              "type": "Aislamiento",
              "desc": "Sissy Squat | 2x10 suaves."
            },
            {
              "type": "Accesorios",
              "desc": "Ad/Abductor (1x15) y Crunch (2x12)."
            }
          ]
        },
        {
          "id": "d7",
          "dayName": "DÍA 7 (Domingo)",
          "split": "RECUPERACIÓN BIOLÓGICA",
          "color": "gray",
          "details": [
            {
              "type": "Descanso",
              "desc": "Hidratación y proteínas. Lejos del gimnasio."
            }
          ]
        }
      ]
    }
  },
  "meso2": {
    "week1": {
      "title": "SEMANA 1: VOLUMEN Y ADAPTACIÓN BASE (MESO 2)",
      "objective": "Alteración de Vectores y Peso Libre. RIR 2.",
      "days": [
        {
          "id": "d1",
          "dayName": "DÍA 1 (Lunes)",
          "split": "PULL 2 (Gimnasio)",
          "color": "blue",
          "details": [
            {
              "type": "Básico",
              "desc": "Remo pecho con mancuernas | 4 series x 8-10 reps."
            },
            {
              "type": "Aislamiento Dorsal",
              "desc": "Jalón polea alta neutro | 3 series x 10-12 reps."
            },
            {
              "type": "Estabilizadores Fijos",
              "desc": "Facepull polea alta | 3 series x 12-15 reps.\nPullOver | 3 series x 12 reps."
            },
            {
              "type": "Superserie Metabólica",
              "desc": "Shrugs (3 x 12) + Curl Martillo mancuerna (3 x 10)."
            },
            {
              "type": "Bíceps",
              "desc": "Curl Inclinado con mancuerna | 2 series x 10-12 reps.\nCurl Scott (Predicador) | 2 series x 10-12 reps."
            }
          ]
        },
        {
          "id": "d2",
          "dayName": "DÍA 2 (Martes)",
          "split": "PUSH 2 (Calistenia)",
          "color": "purple",
          "details": [
            {
              "type": "Skills",
              "desc": "Transición a Skin the Cat | 3 series x isometría submáxima.\nL-Sit en paralelas | 3 series x 10-15 seg."
            },
            {
              "type": "Verticales",
              "desc": "Vertical (Handstand) puro | 15 minutos."
            },
            {
              "type": "Básico",
              "desc": "Fondos en Paralelas (Dips) | 4 series x 6-8 reps."
            },
            {
              "type": "Aislamiento",
              "desc": "Flexiones diamante + Flexiones | 3 series x 10-15 reps (Objetivo: RIR 2)."
            }
          ]
        },
        {
          "id": "d3",
          "dayName": "DÍA 3 (Miércoles)",
          "split": "LEGS 2 (Gimnasio)",
          "color": "green",
          "details": [
            {
              "type": "Básico",
              "desc": "Peso Muerto Convencional | 3 series x 5 reps (sin straps)."
            },
            {
              "type": "Aislamiento Glúteo",
              "desc": "Hip Thrust pesado | 3 series x 8-10 reps."
            },
            {
              "type": "Aislamiento Isquios",
              "desc": "Curl nórdico | 3 series x 10-12 reps."
            },
            {
              "type": "Aislamiento Pantorrillas",
              "desc": "Elevación pantorrillas pie | 3 series x 12-15 reps. + Tibialis Raises."
            },
            {
              "type": "Core",
              "desc": "Espinales con peso en banco | 2 series x 12 reps. + Crunch polea."
            }
          ]
        },
        {
          "id": "d4",
          "dayName": "DÍA 4 (Jueves)",
          "split": "PULL 1 (Calistenia)",
          "color": "blue",
          "details": [
            {
              "type": "Skills",
              "desc": "Dragon Flag | 3 series x 8-10 reps.\nLevantamiento de rodillas a la barra | 3 series x 10 reps."
            },
            {
              "type": "Verticales",
              "desc": "Vertical (Handstand) puro | 15 minutos."
            },
            {
              "type": "Básico",
              "desc": "Dominadas Estrictas (Agarre Prono) | 4 series x 5-8 reps (RIR 2)."
            },
            {
              "type": "Aislamiento",
              "desc": "Scapular Pull-ups | 3 series x 8-10 reps.\nCurl Biceps | 3 series x 8-10 reps."
            }
          ]
        },
        {
          "id": "d5",
          "dayName": "DÍA 5 (Viernes)",
          "split": "PUSH 1 (Gimnasio)",
          "color": "purple",
          "details": [
            {
              "type": "Básico",
              "desc": "Press Banca Plano Barra | 4 series x 6-8 reps. (Descanso: 3 min)."
            },
            {
              "type": "Aislamiento Pecho",
              "desc": "Press Inclinado Mancuerna | 3 series x 10-12 reps."
            },
            {
              "type": "Hombros",
              "desc": "Frontal: Press Militar Mancuernas (2x8-10) \nLateral: Elevaciones laterales mancuerna (2x12-15)\nPosterior: Vuelos inversos (2x12-15)"
            },
            {
              "type": "Tríceps",
              "desc": "Rompecráneos (2x10-12) \nExtensión en polea barra recta (2x10-12)\nExtensión unilateral supino (2x12-15)"
            }
          ]
        },
        {
          "id": "d6",
          "dayName": "DÍA 6 (Sábado)",
          "split": "LEGS 1 (Gimnasio)",
          "color": "green",
          "details": [
            {
              "type": "Básico",
              "desc": "Sentadilla Libre | 4 series x 6-8 reps."
            },
            {
              "type": "Secundario",
              "desc": "Prensa | 3 series x 8-10 reps."
            },
            {
              "type": "Aislamiento Cuádriceps",
              "desc": "Sillón de cuádriceps | 3 series x 10-12 reps."
            },
            {
              "type": "Aductores / Abductores",
              "desc": "Máquina (ambos) | 2 series x 12-15 reps c/u."
            },
            {
              "type": "Core",
              "desc": "Crunch polea | 2 series x 12 reps."
            }
          ]
        },
        {
          "id": "d7",
          "dayName": "DÍA 7 (Domingo)",
          "split": "DESCANSO ACTIVO",
          "color": "gray",
          "details": [
            {
              "type": "Cardio",
              "desc": "Caminata - Zona 2."
            }
          ]
        }
      ]
    },
    "week2": {
      "title": "SEMANA 2: FUERZA BASE Y TENSIÓN MECÁNICA (MESO 2)",
      "objective": "RIR 1. Aumento de peso obligatorio. EMOMs en Calistenia.",
      "days": [
        {
          "id": "d1",
          "dayName": "DÍA 1 (Lunes)",
          "split": "PULL 2 (Gimnasio)",
          "color": "blue",
          "details": [
            {
              "type": "Básico",
              "desc": "Remo pecho mancuernas | 4 series x 4-6 reps (Carga alta)."
            },
            {
              "type": "Aislamiento",
              "desc": "Jalón polea alta neutro | 3 series x 8-10 reps."
            },
            {
              "type": "Estabilizadores",
              "desc": "Facepull (3x10-12), PullOver (3x8-10)"
            },
            {
              "type": "Superserie",
              "desc": "Shrugs (3x10) + Curl Martillo mancuerna (3x8-10)."
            },
            {
              "type": "Bíceps",
              "desc": "Curl Inclinado (2x8-10) \nCurl Scott (2x8-10)"
            }
          ]
        },
        {
          "id": "d2",
          "dayName": "DÍA 2 (Martes)",
          "split": "PUSH 2 (Calistenia)",
          "color": "purple",
          "details": [
            {
              "type": "Skills",
              "desc": "Transición a Skin the Cat | 3 series x 15-20 seg.\nL-Sit en paralelas | 3 series x 15-20 seg."
            },
            {
              "type": "Verticales",
              "desc": "Vertical puro | 15 minutos."
            },
            {
              "type": "Básico",
              "desc": "Fondos en Paralelas (Dips) | EMOM de 10 minutos (2-3 reps/min)."
            },
            {
              "type": "Aislamiento",
              "desc": "Pike Push ups + Extensión Tríceps tras nuca | 3 series x 8-10 reps."
            }
          ]
        },
        {
          "id": "d3",
          "dayName": "DÍA 3 (Miércoles)",
          "split": "LEGS 2 (Gimnasio)",
          "color": "green",
          "details": [
            {
              "type": "Básico",
              "desc": "Peso Muerto Convencional | 4 series x 4-5 reps (RIR 1)."
            },
            {
              "type": "Aislamiento Glúteo",
              "desc": "Hip Thrust pesado | 3 series x 8-10 reps."
            },
            {
              "type": "Aislamiento Isquios",
              "desc": "Curl nórdico | 3 series x 8-10 reps."
            },
            {
              "type": "Aislamiento Pantorrillas",
              "desc": "Elevación pie | 3 series x 10-12 reps. + Tibialis Raises."
            },
            {
              "type": "Core",
              "desc": "Espinales con peso | 2 series x 10-12 reps."
            }
          ]
        },
        {
          "id": "d4",
          "dayName": "DÍA 4 (Jueves)",
          "split": "PULL 1 (Calistenia)",
          "color": "blue",
          "details": [
            {
              "type": "Skills",
              "desc": "Dragon Flag | 3 series x 10-15 seg.\nLevantamiento de rodillas a la barra | 3 series x 10 reps."
            },
            {
              "type": "Verticales",
              "desc": "Vertical puro | 15 minutos."
            },
            {
              "type": "Básico",
              "desc": "Dominadas Estrictas (Supino) | EMOM de 10 minutos (2-3 reps)."
            },
            {
              "type": "Aislamiento",
              "desc": "Typewriter Pull-ups | 3 series x 8-10 reps.\nCurl Biceps | 3 series x 8-10 reps."
            }
          ]
        },
        {
          "id": "d5",
          "dayName": "DÍA 5 (Viernes)",
          "split": "PUSH 1 (Gimnasio)",
          "color": "purple",
          "details": [
            {
              "type": "Básico",
              "desc": "Press Banca Plano | 4 series x 4-6 reps."
            },
            {
              "type": "Aislamiento Pecho",
              "desc": "Press Inclinado Mancuerna | 3 series x 8-10 reps (1s pausa en estiramiento)."
            },
            {
              "type": "Hombros",
              "desc": "Militar Mancuernas (2x8-10)\nLaterales sentado (2x8-10)\nVuelos inversos (2x8-10)"
            },
            {
              "type": "Tríceps",
              "desc": "Rompecráneos (2x8-10)\nExtensión polea barra (2x8-10)\nExt unilateral supino (2x10-12)"
            }
          ]
        },
        {
          "id": "d6",
          "dayName": "DÍA 6 (Sábado)",
          "split": "LEGS 1 (Gimnasio)",
          "color": "green",
          "details": [
            {
              "type": "Básico",
              "desc": "Sentadilla Libre | 4 series x 4-6 reps."
            },
            {
              "type": "Secundario",
              "desc": "Prensa | 3 series x 6-8 reps."
            },
            {
              "type": "Aislamiento Cuádriceps",
              "desc": "Sillón de cuádriceps | 3 series x 8-10 reps."
            },
            {
              "type": "Aductores / Abductores",
              "desc": "Máquina | 2 series x 10-12 reps c/u."
            },
            {
              "type": "Core",
              "desc": "Crunch polea | 2 series x 12 reps."
            }
          ]
        },
        {
          "id": "d7",
          "dayName": "DÍA 7 (Domingo)",
          "split": "DESCANSO ACTIVO",
          "color": "gray",
          "details": [
            {
              "type": "Cardio",
              "desc": "Zona 2 obligatoria (120-135 ppm). Para metabolizar."
            }
          ]
        }
      ]
    },
    "week3": {
      "title": "SEMANA 3: INTENSIDAD MÁXIMA (MESO 2)",
      "objective": "RIR 0. Series al fallo. Tests AMRAP en Calistenia.",
      "days": [
        {
          "id": "d1",
          "dayName": "DÍA 1 (Lunes)",
          "split": "PULL 2 (Gimnasio)",
          "color": "blue",
          "details": [
            {
              "type": "Básico",
              "desc": "Remo pecho mancuernas | 3 series x 3-5 reps (RIR 0)."
            },
            {
              "type": "Aislamiento",
              "desc": "Jalón polea alta neutro | 3 series x 6-8 reps (DropSet en 3ra)."
            },
            {
              "type": "Estabilizadores",
              "desc": "Facepull (3x10), PullOver (3x6-8 DropSet)"
            },
            {
              "type": "Superserie",
              "desc": "Shrugs + Curl Martillo | 3 series x 6-8 reps. ¡Regla de Animal en la 3ra serie!"
            },
            {
              "type": "Bíceps",
              "desc": "Curl Inclinado (2x6-8, DropSet)\nCurl Scott (2x6-8, DropSet)"
            }
          ]
        },
        {
          "id": "d2",
          "dayName": "DÍA 2 (Martes)",
          "split": "PUSH 2 (Calistenia)",
          "color": "purple",
          "details": [
            {
              "type": "Skills",
              "desc": "Transición Skin the Cat | 3 series x Tiempo Máximo.\nL-Sit | 3 series x Tiempo Máximo."
            },
            {
              "type": "Verticales",
              "desc": "Handstand puro | 15 minutos."
            },
            {
              "type": "Básico",
              "desc": "Fondos en Paralelas | Test AMRAP (3 series x Max reps strictly)."
            },
            {
              "type": "Aislamiento",
              "desc": "Flexiones Archer + Extensiones Trasnuca | 3 series x 6-10 reps (Al fallo absoluto / RIR 0)."
            }
          ]
        },
        {
          "id": "d3",
          "dayName": "DÍA 3 (Miércoles)",
          "split": "LEGS 2 (Gimnasio)",
          "color": "green",
          "details": [
            {
              "type": "Básico",
              "desc": "Peso Muerto Convencional | 3 series x 3-5 reps (Carga máxima)."
            },
            {
              "type": "Aislamiento Glúteo",
              "desc": "Hip Thrust pesado | 3 series x 6-8 reps (Rest-Pause 3ra serie)."
            },
            {
              "type": "Aislamiento Isquios",
              "desc": "Curl nórdico | 3 series x 6-8 reps (Fallo en excéntrica)."
            },
            {
              "type": "Aislamiento Pantorrillas",
              "desc": "Elevación pie | 3 series x 8-10 reps (DropSet). + Tibialis Raises."
            },
            {
              "type": "Core",
              "desc": "Espinales con peso | 2 series x 10-12 reps al fallo."
            }
          ]
        },
        {
          "id": "d4",
          "dayName": "DÍA 4 (Jueves)",
          "split": "PULL 1 (Calistenia)",
          "color": "blue",
          "details": [
            {
              "type": "Skills",
              "desc": "Dragon Flag | 3 series x Tiempo Máximo.\nRodillas a barra | 3 series x AMRAP."
            },
            {
              "type": "Verticales",
              "desc": "Handstand puro | 15 minutos."
            },
            {
              "type": "Básico",
              "desc": "Dominadas Estrictas | Test AMRAP (3 series x Máximas reps perfectas)."
            },
            {
              "type": "Aislamiento",
              "desc": "Scapular Pull-ups | 3 series x 8 reps (Sosteniendo contracción isométrica de 2 segundos arriba).\nCurl de bíceps | 3 series x 6-10 reps (Al fallo absoluto / RIR 0)."
            }
          ]
        },
        {
          "id": "d5",
          "dayName": "DÍA 5 (Viernes)",
          "split": "PUSH 1 (Gimnasio)",
          "color": "purple",
          "details": [
            {
              "type": "Básico",
              "desc": "Press Banca Plano | 3 series x 3-5 reps (Volumen bajo, Peso máximo, 4m descanso)."
            },
            {
              "type": "Aislamiento Pecho",
              "desc": "Press Inclinado Mancuerna | 3 series x 6-8 reps (DropSet en 3ra)."
            },
            {
              "type": "Hombros",
              "desc": "Frontal, Lateral, Posterior | 2 series x 6-8 reps c/u (DropSet en 2da serie)."
            },
            {
              "type": "Tríceps",
              "desc": "Rompecráneos, Extensión polea, Extensión unilateral | 2x6-8 reps. Todo DropSet en 2da."
            }
          ]
        },
        {
          "id": "d6",
          "dayName": "DÍA 6 (Sábado)",
          "split": "LEGS 1 (Gimnasio)",
          "color": "green",
          "details": [
            {
              "type": "Básico",
              "desc": "Sentadilla Libre | 3 series x 3-5 reps (RIR 0)."
            },
            {
              "type": "Secundario",
              "desc": "Prensa | 3 series x 6-8 reps (Serie 3 al fallo)."
            },
            {
              "type": "Aislamiento Cuádriceps",
              "desc": "Sillón cuádriceps | 3 series x 6-8 reps (DropSet)."
            },
            {
              "type": "Aductores / Abductores",
              "desc": "Máquina | 2 series x 8-10 reps (DropSet)."
            },
            {
              "type": "Core",
              "desc": "Crunch polea | 2 series x 12 reps al fallo."
            }
          ]
        },
        {
          "id": "d7",
          "dayName": "DÍA 7 (Domingo)",
          "split": "DESCANSO ABSOLUTO",
          "color": "gray",
          "details": [
            {
              "type": "Recuperación",
              "desc": "Sistema endocrino repleto de lactato. Descanso absoluto."
            }
          ]
        }
      ]
    },
    "week4": {
      "title": "SEMANA 4: DESCARGA (DELOAD) MESO 2",
      "objective": "Cargas al 60% de tu máximo. RIR 3-4. Cortar volumen a la mitad.",
      "days": [
        {
          "id": "d1",
          "dayName": "DÍA 1 (Lunes)",
          "split": "PULL 2 (Gimnasio)",
          "color": "blue",
          "details": [
            {
              "type": "Básico",
              "desc": "Remo pecho mancuernas | 2 series x 10-12 reps."
            },
            {
              "type": "Aislamiento Dorsal",
              "desc": "Jalón polea alta neutro | 2 series x 12-15 reps."
            },
            {
              "type": "Estabilizadores",
              "desc": "Facepull (2x15), PullOver (2x12)"
            },
            {
              "type": "Superserie",
              "desc": "Shrugs (2x15) + Curl Martillo (2x12-15)."
            },
            {
              "type": "Bíceps",
              "desc": "Curl Inclinado, Curl Scott | 1 serie x 15 reps c/u."
            }
          ]
        },
        {
          "id": "d2",
          "dayName": "DÍA 2 (Martes)",
          "split": "PUSH 2 (Calistenia)",
          "color": "purple",
          "details": [
            {
              "type": "Skills",
              "desc": "Skin the Cat | 2 series x 1 rep.\nL-Sit | 2 series x 5-10 seg (banda)."
            },
            {
              "type": "Verticales",
              "desc": "Handstand puro | 15 minutos sin forzar."
            },
            {
              "type": "Básico",
              "desc": "Fondos en Paralelas | 2 series x 8-10 reps (Banda / RIR 4)."
            },
            {
              "type": "Aislamiento",
              "desc": "Flexiones (Agarre Libre) | 2 series x 10-12 reps (Objetivo: RIR 4 - Bombeo suave)."
            }
          ]
        },
        {
          "id": "d3",
          "dayName": "DÍA 3 (Miércoles)",
          "split": "LEGS 2 (Gimnasio)",
          "color": "green",
          "details": [
            {
              "type": "Básico",
              "desc": "Peso Muerto Convencional | 2 series x 8-10 reps (pesos bajísimos)."
            },
            {
              "type": "Aislamiento Glúteo",
              "desc": "Hip Thrust | 2 series x 12-15 reps."
            },
            {
              "type": "Aislamiento Isquios",
              "desc": "Curl nórdico | 2 series x bajadas asistidas."
            },
            {
              "type": "Aislamiento Pantorrillas",
              "desc": "Elevación pie | 2 series x 15 reps. + Tibialis Raises."
            },
            {
              "type": "Core",
              "desc": "Espinales | 1 serie x 12 reps."
            }
          ]
        },
        {
          "id": "d4",
          "dayName": "DÍA 4 (Jueves)",
          "split": "PULL 1 (Calistenia)",
          "color": "blue",
          "details": [
            {
              "type": "Skills",
              "desc": "Dragon Flag | 2 series Tucks x 5-10 seg.\nRodillas a barra | 2 series x 8 reps."
            },
            {
              "type": "Verticales",
              "desc": "Handstand puro | 15 min."
            },
            {
              "type": "Básico",
              "desc": "Dominadas Estrictas | 2 series x 5-8 reps (Banda gruesa)."
            },
            {
              "type": "Aislamiento",
              "desc": "Scapular Pull-ups | 2 series x 8-10 reps (Pausas de 2 segundos arriba, suave)."
            }
          ]
        },
        {
          "id": "d5",
          "dayName": "DÍA 5 (Viernes)",
          "split": "PUSH 1 (Gimnasio)",
          "color": "purple",
          "details": [
            {
              "type": "Básico",
              "desc": "Press Banca Plano | 2 series x 10-12 reps (-40%)."
            },
            {
              "type": "Aislamiento Pecho",
              "desc": "Press Inclinado Mancuerna | 2 series x 12-15 reps."
            },
            {
              "type": "Hombros",
              "desc": "Frontal, Lateral, Posterior | 1 serie x 15 reps c/u."
            },
            {
              "type": "Tríceps",
              "desc": "Rompecráneos, Ext. polea, Supino | 1 serie x 15 reps c/u."
            }
          ]
        },
        {
          "id": "d6",
          "dayName": "DÍA 6 (Sábado)",
          "split": "LEGS 1 (Gimnasio)",
          "color": "green",
          "details": [
            {
              "type": "Básico",
              "desc": "Sentadilla Libre | 2 series x 10-12 reps (Solo barra)."
            },
            {
              "type": "Secundario",
              "desc": "Prensa | 2 series x 10-12 reps."
            },
            {
              "type": "Aislamiento Cuádriceps",
              "desc": "Sillón de cuádriceps | 2 series x 10 reps."
            },
            {
              "type": "Aductores / Abductores",
              "desc": "Máquina | 1 serie x 15 reps c/u."
            },
            {
              "type": "Core",
              "desc": "Crunch polea | 2 series x 12 reps."
            }
          ]
        },
        {
          "id": "d7",
          "dayName": "DÍA 7 (Domingo)",
          "split": "DESCANSO ABSOLUTO",
          "color": "gray",
          "details": [
            {
              "type": "Recuperación",
              "desc": "Descanso biológico total. Hidratación y proteínas."
            }
          ]
        }
      ]
    }
  },
  "meso3": {
    "week1": {
      "title": "SEMANA 1: ADAPTACIÓN BASE Y TRANSFERENCIA (MESO 3)",
      "objective": "Tensión Constante Guiada. RIR 2.",
      "days": [
        {
          "id": "d1",
          "dayName": "DÍA 1 (Lunes)",
          "split": "PULL 2 (Gimnasio)",
          "color": "blue",
          "details": [
            {
              "type": "Básico",
              "desc": "Remo con máquina | 4 series x 8-10 reps."
            },
            {
              "type": "Aislamiento Dorsal",
              "desc": "Jalón polea alta prono | 3 series x 10-12 reps."
            },
            {
              "type": "Estabilizadores Fijos",
              "desc": "Facepull polea alta | 3 series x 12-15 reps.\nPullOver | 3 series x 12 reps."
            },
            {
              "type": "Superserie Metabólica",
              "desc": "Shrugs (3 x 12) + Curl Martillo mancuerna (3 x 10)."
            },
            {
              "type": "Bíceps",
              "desc": "Curl Inclinado con mancuerna | 2 series x 10-12 reps.\nCurl Bayesian en polea | 2 series x 10-12 reps."
            }
          ]
        },
        {
          "id": "d2",
          "dayName": "DÍA 2 (Martes)",
          "split": "PUSH 2 (Calistenia)",
          "color": "purple",
          "details": [
            {
              "type": "Skills",
              "desc": "Tuck Back Lever o Planche Tuck asistida | 3 series x 10-15 seg.\nL-Sit en paralelas | 3 series x 10-15 seg."
            },
            {
              "type": "Verticales",
              "desc": "Vertical puro | 15 minutos."
            },
            {
              "type": "Básico",
              "desc": "Fondos en Paralelas (Dips) | 4 series x 6-8 reps."
            },
            {
              "type": "Aislamiento",
              "desc": "Flexiones diamante + Flexiones | 3 series x 10-15 reps (Objetivo: RIR 2)."
            }
          ]
        },
        {
          "id": "d3",
          "dayName": "DÍA 3 (Miércoles)",
          "split": "LEGS 2 (Gimnasio)",
          "color": "green",
          "details": [
            {
              "type": "Básico",
              "desc": "Peso Muerto Convencional | 3 series x 5 reps."
            },
            {
              "type": "Aislamiento Glúteo",
              "desc": "Hip Thrust pesado | 3 series x 8-10 reps."
            },
            {
              "type": "Aislamiento Isquios",
              "desc": "Curl de isquios Sillón | 3 series x 10-12 reps."
            },
            {
              "type": "Aislamiento Pantorrillas",
              "desc": "Elevación pantorrillas pie | 3 series x 12-15 reps. + Tibialis Raises."
            },
            {
              "type": "Core",
              "desc": "Espinales con peso | 2 series x 12 reps. + Crunch polea."
            }
          ]
        },
        {
          "id": "d4",
          "dayName": "DÍA 4 (Jueves)",
          "split": "PULL 1 (Calistenia)",
          "color": "blue",
          "details": [
            {
              "type": "Skills",
              "desc": "Front Lever asistido con banda | 3 series x 10-15 seg.\nLevantamiento de rodillas a la barra | 3 series x 10 reps."
            },
            {
              "type": "Verticales",
              "desc": "Vertical puro | 15 minutos."
            },
            {
              "type": "Básico",
              "desc": "Dominadas Estrictas (Prono) | 4 series x 5-8 reps (RIR 2)."
            },
            {
              "type": "Aislamiento",
              "desc": "Scapular Pull-ups | 3 series x 8-10 reps.\nCurl Biceps | 3 series x 8-10 reps."
            }
          ]
        },
        {
          "id": "d5",
          "dayName": "DÍA 5 (Viernes)",
          "split": "PUSH 1 (Gimnasio)",
          "color": "purple",
          "details": [
            {
              "type": "Básico",
              "desc": "Press Banca Plano | 4 series x 6-8 reps."
            },
            {
              "type": "Aislamiento Pecho",
              "desc": "Press Inclinado Smith (Carga supramáxima segura) | 3 series x 10-12 reps."
            },
            {
              "type": "Hombros",
              "desc": "Press Militar Mancuernas (2x8-10)\nLaterales parado (2x12-15)\nPeck Deck inverso (2x12-15)"
            },
            {
              "type": "Tríceps",
              "desc": "Extensión tras nuca, Extensión cuerda, Unilateral supino | 2 series x 10-12 reps c/u."
            }
          ]
        },
        {
          "id": "d6",
          "dayName": "DÍA 6 (Sábado)",
          "split": "LEGS 1 (Gimnasio)",
          "color": "green",
          "details": [
            {
              "type": "Básico",
              "desc": "Sentadilla Libre | 4 series x 6-8 reps."
            },
            {
              "type": "Unilateral",
              "desc": "Búlgaras (Pesadas) | 3 series x 8-10 reps por pierna."
            },
            {
              "type": "Aislamiento Cuádriceps",
              "desc": "Hack Squat | 3 series x 10-12 reps."
            },
            {
              "type": "Aductores / Abductores",
              "desc": "Máquina (ambos) | 2 series x 12-15 reps c/u."
            },
            {
              "type": "Core",
              "desc": "Crunch polea | 2 series x 12 reps."
            }
          ]
        },
        {
          "id": "d7",
          "dayName": "DÍA 7 (Domingo)",
          "split": "DESCANSO ACTIVO",
          "color": "gray",
          "details": [
            {
              "type": "Cardio",
              "desc": "Caminata - Zona 2."
            }
          ]
        }
      ]
    },
    "week2": {
      "title": "SEMANA 2: FUERZA BASE Y TENSIÓN MECÁNICA (MESO 3)",
      "objective": "RIR 1. Aumento de peso obligatorio. EMOMs en Calistenia.",
      "days": [
        {
          "id": "d1",
          "dayName": "DÍA 1 (Lunes)",
          "split": "PULL 2 (Gimnasio)",
          "color": "blue",
          "details": [
            {
              "type": "Básico",
              "desc": "Remo con máquina | 4 series x 4-6 reps (Carga alta)."
            },
            {
              "type": "Aislamiento",
              "desc": "Jalón polea alta prono | 3 series x 8-10 reps."
            },
            {
              "type": "Estabilizadores",
              "desc": "Facepull (3x10-12), PullOver (3x8-10)"
            },
            {
              "type": "Superserie",
              "desc": "Shrugs (3x10) + Curl Martillo (3x8-10)."
            },
            {
              "type": "Bíceps",
              "desc": "Curl Inclinado, Curl Bayesian | 2 series x 8-10 reps c/u."
            }
          ]
        },
        {
          "id": "d2",
          "dayName": "DÍA 2 (Martes)",
          "split": "PUSH 2 (Calistenia)",
          "color": "purple",
          "details": [
            {
              "type": "Skills",
              "desc": "Tuck Back Lever o Planche Tuck asistida | 3 series x 15-20 seg.\nL-Sit | 3 series x 15-20 seg."
            },
            {
              "type": "Verticales",
              "desc": "Vertical puro | 15 minutos."
            },
            {
              "type": "Básico",
              "desc": "Fondos en Paralelas (Dips) | EMOM 10 minutos (2-3 reps/min)."
            },
            {
              "type": "Aislamiento",
              "desc": "Pike Push ups + Extensión Tríceps tras nuca | 3 series x 8-10 reps."
            }
          ]
        },
        {
          "id": "d3",
          "dayName": "DÍA 3 (Miércoles)",
          "split": "LEGS 2 (Gimnasio)",
          "color": "green",
          "details": [
            {
              "type": "Básico",
              "desc": "Peso Muerto Convencional | 4 series x 4-5 reps (RIR 1)."
            },
            {
              "type": "Aislamiento Glúteo",
              "desc": "Hip Thrust pesado | 3 series x 8-10 reps."
            },
            {
              "type": "Aislamiento Isquios",
              "desc": "Curl de isquios Sillón | 3 series x 8-10 reps."
            },
            {
              "type": "Aislamiento Pantorrillas",
              "desc": "Elevación pantorrillas pie | 3 series x 10-12 reps. + Tibialis."
            },
            {
              "type": "Core",
              "desc": "Espinales con peso | 2 series x 10-12 reps + Crunch polea."
            }
          ]
        },
        {
          "id": "d4",
          "dayName": "DÍA 4 (Jueves)",
          "split": "PULL 1 (Calistenia)",
          "color": "blue",
          "details": [
            {
              "type": "Skills",
              "desc": "Front Lever asistido | 3 series x 15-20 seg.\nRodillas a barra | 3 series x 10 reps."
            },
            {
              "type": "Verticales",
              "desc": "Vertical puro | 15 minutos."
            },
            {
              "type": "Básico",
              "desc": "Dominadas Estrictas (Supino) | EMOM 10 minutos (2-3 reps/min)."
            },
            {
              "type": "Aislamiento",
              "desc": "Typewriter Pull-ups | 3 series x 8-10 reps.\nCurl Biceps | 3 series x 8-10 reps."
            }
          ]
        },
        {
          "id": "d5",
          "dayName": "DÍA 5 (Viernes)",
          "split": "PUSH 1 (Gimnasio)",
          "color": "purple",
          "details": [
            {
              "type": "Básico",
              "desc": "Press Banca Plano | 4 series x 4-6 reps (3m descanso)."
            },
            {
              "type": "Aislamiento Pecho",
              "desc": "Press Inclinado Smith | 3 series x 8-10 reps."
            },
            {
              "type": "Hombros",
              "desc": "Press Militar Mancuernas (2x8-10)\nLaterales parado (2x8-10)\nPeck Deck inverso (2x8-10)"
            },
            {
              "type": "Tríceps",
              "desc": "Extensión tras nuca, Extensión cuerda, Unilateral | 2x8-10 reps c/u."
            }
          ]
        },
        {
          "id": "d6",
          "dayName": "DÍA 6 (Sábado)",
          "split": "LEGS 1 (Gimnasio)",
          "color": "green",
          "details": [
            {
              "type": "Básico",
              "desc": "Sentadilla Libre | 4 series x 4-6 reps."
            },
            {
              "type": "Unilateral",
              "desc": "Búlgaras (Pesadas) | 3 series x 6-8 reps."
            },
            {
              "type": "Aislamiento Cuádriceps",
              "desc": "Hack Squat | 3 series x 8-10 reps (Control en máquina)."
            },
            {
              "type": "Aductores / Abductores",
              "desc": "Máquina | 2 series x 10-12 reps c/u."
            },
            {
              "type": "Core",
              "desc": "Crunch polea | 2 series x 12 reps."
            }
          ]
        },
        {
          "id": "d7",
          "dayName": "DÍA 7 (Domingo)",
          "split": "DESCANSO ACTIVO",
          "color": "gray",
          "details": [
            {
              "type": "Cardio",
              "desc": "Caminata Zona 2 obligatoria (120-135 ppm). Cero levantamientos."
            }
          ]
        }
      ]
    },
    "week3": {
      "title": "SEMANA 3: INTENSIDAD MÁXIMA (MESO 3)",
      "objective": "RIR 0. Series al fallo absoluto. Tests AMRAP en Calistenia.",
      "days": [
        {
          "id": "d1",
          "dayName": "DÍA 1 (Lunes)",
          "split": "PULL 2 (Gimnasio)",
          "color": "blue",
          "details": [
            {
              "type": "Básico",
              "desc": "Remo con máquina | 3 series x 3-5 reps (RIR 0)."
            },
            {
              "type": "Aislamiento Dorsal",
              "desc": "Jalón polea alta prono | 3 series x 6-8 reps (DropSet en 3ra)."
            },
            {
              "type": "Estabilizadores",
              "desc": "Facepull (3x10), PullOver (3x6-8 DropSet)"
            },
            {
              "type": "Superserie",
              "desc": "Shrugs + Curl Martillo | 3 series x 6-8 reps. ¡Regla de Animal!"
            },
            {
              "type": "Bíceps",
              "desc": "Curl Inclinado, Curl Bayesian | 2 series x 6-8 reps (DropSet en 2da)."
            }
          ]
        },
        {
          "id": "d2",
          "dayName": "DÍA 2 (Martes)",
          "split": "PUSH 2 (Calistenia)",
          "color": "purple",
          "details": [
            {
              "type": "Skills",
              "desc": "Tuck Back Lever o Planche Tuck | 3 series x Tiempo Máximo.\nL-Sit | 3 series x Tiempo Máximo."
            },
            {
              "type": "Verticales",
              "desc": "Vertical puro | 15 minutos."
            },
            {
              "type": "Básico",
              "desc": "Fondos en Paralelas (Dips) | Test AMRAP."
            },
            {
              "type": "Aislamiento",
              "desc": "Flexiones Archer + Extensiones Trasnuca | 3 series x 6-10 reps (Al fallo absoluto / RIR 0)."
            }
          ]
        },
        {
          "id": "d3",
          "dayName": "DÍA 3 (Miércoles)",
          "split": "LEGS 2 (Gimnasio)",
          "color": "green",
          "details": [
            {
              "type": "Básico",
              "desc": "Peso Muerto Convencional | 3 series x 3-5 reps (Carga máxima)."
            },
            {
              "type": "Aislamiento Glúteo",
              "desc": "Hip Thrust pesado | 3 series x 6-8 reps (Rest-Pause 3ra)."
            },
            {
              "type": "Aislamiento Isquios",
              "desc": "Curl de isquios Sillón | 3 series x 6-8 reps (DropSet)."
            },
            {
              "type": "Aislamiento Pantorrillas",
              "desc": "Elevación pie | 3 series x 8-10 reps (DropSet) + Tibialis."
            },
            {
              "type": "Core",
              "desc": "Espinales con peso | 2 series x 10-12 reps al fallo."
            }
          ]
        },
        {
          "id": "d4",
          "dayName": "DÍA 4 (Jueves)",
          "split": "PULL 1 (Calistenia)",
          "color": "blue",
          "details": [
            {
              "type": "Skills",
              "desc": "Front Lever asistido | 3 series x Tiempo Máximo.\nRodillas a barra | 3 series x AMRAP."
            },
            {
              "type": "Verticales",
              "desc": "Handstand puro | 15 minutos."
            },
            {
              "type": "Básico",
              "desc": "Dominadas Estrictas (Prono) | Test AMRAP."
            },
            {
              "type": "Aislamiento",
              "desc": "Scapular Pull-ups | 3 series x 8 reps (Sosteniendo contracción isométrica de 2 segundos arriba).\nCurl de bíceps | 3 series x 6-10 reps (Al fallo absoluto / RIR 0)."
            }
          ]
        },
        {
          "id": "d5",
          "dayName": "DÍA 5 (Viernes)",
          "split": "PUSH 1 (Gimnasio)",
          "color": "purple",
          "details": [
            {
              "type": "Básico",
              "desc": "Press Banca Plano | 3 series x 3-5 reps (Volumen bajo, Peso máximo, RIR 0)."
            },
            {
              "type": "Aislamiento Pecho",
              "desc": "Press Inclinado Smith | 3 series x 6-8 reps (DropSet en 3ra)."
            },
            {
              "type": "Hombros",
              "desc": "Frontal, Lateral, Posterior | 2x6-8 reps c/u (DropSet)."
            },
            {
              "type": "Tríceps",
              "desc": "Tras nuca, Cuerda, Unilateral | 2x6-8 reps (DropSet)."
            }
          ]
        },
        {
          "id": "d6",
          "dayName": "DÍA 6 (Sábado)",
          "split": "LEGS 1 (Gimnasio)",
          "color": "green",
          "details": [
            {
              "type": "Básico",
              "desc": "Sentadilla Libre | 3 series x 3-5 reps (RIR 0)."
            },
            {
              "type": "Unilateral",
              "desc": "Búlgaras | 3 series x 6-8 reps por pierna (Serie 3 al fallo corporal)."
            },
            {
              "type": "Aislamiento Cuádriceps",
              "desc": "Hack Squat | 3 series x 6-8 reps (DropSet)."
            },
            {
              "type": "Aductores / Abductores",
              "desc": "Máquina | 2 series x 8-10 reps (DropSet)."
            },
            {
              "type": "Core",
              "desc": "Crunch polea | 2 series x 12 reps al fallo."
            }
          ]
        },
        {
          "id": "d7",
          "dayName": "DÍA 7 (Domingo)",
          "split": "DESCANSO ABSOLUTO",
          "color": "gray",
          "details": [
            {
              "type": "Recuperación",
              "desc": "Descanso biológico total. Hidratación y proteínas."
            }
          ]
        }
      ]
    },
    "week4": {
      "title": "SEMANA 4: DESCARGA (DELOAD) MESO 3",
      "objective": "Cargas al 60% de tu máximo. RIR 3-4. Cortar volumen a la mitad.",
      "days": [
        {
          "id": "d1",
          "dayName": "DÍA 1 (Lunes)",
          "split": "PULL 2 (Gimnasio)",
          "color": "blue",
          "details": [
            {
              "type": "Básico",
              "desc": "Remo con máquina | 2 series x 10-12 reps."
            },
            {
              "type": "Aislamiento Dorsal",
              "desc": "Jalón polea alta prono | 2 series x 12-15 reps."
            },
            {
              "type": "Estabilizadores",
              "desc": "Facepull (2x15), PullOver (2x12)"
            },
            {
              "type": "Superserie",
              "desc": "Shrugs (2x15) + Curl Martillo (2x12-15) suave."
            },
            {
              "type": "Bíceps",
              "desc": "Curl Inclinado, Curl Bayesian | 1 serie x 15 reps c/u."
            }
          ]
        },
        {
          "id": "d2",
          "dayName": "DÍA 2 (Martes)",
          "split": "PUSH 2 (Calistenia)",
          "color": "purple",
          "details": [
            {
              "type": "Skills",
              "desc": "Tuck Back Lever o Planche Tuck | 2 series x 5-10 seg (banda gruesa).\nL-Sit | 2 series x 5-10 seg."
            },
            {
              "type": "Verticales",
              "desc": "Handstand puro | 15 minutos sin forzar."
            },
            {
              "type": "Básico",
              "desc": "Fondos en Paralelas | 2 series x 8-10 reps (RIR 4)."
            },
            {
              "type": "Aislamiento",
              "desc": "Flexiones (Agarre Libre) | 2 series x 10-12 reps (Objetivo: RIR 4 - Bombeo suave)."
            }
          ]
        },
        {
          "id": "d3",
          "dayName": "DÍA 3 (Miércoles)",
          "split": "LEGS 2 (Gimnasio)",
          "color": "green",
          "details": [
            {
              "type": "Básico",
              "desc": "Peso Muerto Convencional | 2 series x 8-10 reps (pesos bajísimos)."
            },
            {
              "type": "Aislamiento Glúteo",
              "desc": "Hip Thrust | 2 series x 12-15 reps."
            },
            {
              "type": "Aislamiento Isquios",
              "desc": "Curl de isquios Sillón | 2 series x 12-15 reps."
            },
            {
              "type": "Aislamiento Pantorrillas",
              "desc": "Elevación pie | 2 series x 15 reps. + Tibialis Raises."
            },
            {
              "type": "Core",
              "desc": "Espinales | 1 serie x 12 reps."
            }
          ]
        },
        {
          "id": "d4",
          "dayName": "DÍA 4 (Jueves)",
          "split": "PULL 1 (Calistenia)",
          "color": "blue",
          "details": [
            {
              "type": "Skills",
              "desc": "Front Lever asistido | 2 series x 5-10 seg.\nRodillas a barra | 2 series x 8 reps."
            },
            {
              "type": "Verticales",
              "desc": "Handstand puro | 15 min."
            },
            {
              "type": "Básico",
              "desc": "Dominadas Estrictas | 2 series x 5-8 reps (Banda gruesa)."
            },
            {
              "type": "Aislamiento",
              "desc": "Scapular Pull-ups | 2 series x 8-10 reps (Pausas de 2 segundos arriba, suave)."
            }
          ]
        },
        {
          "id": "d5",
          "dayName": "DÍA 5 (Viernes)",
          "split": "PUSH 1 (Gimnasio)",
          "color": "purple",
          "details": [
            {
              "type": "Básico",
              "desc": "Press Banca Plano | 2 series x 10-12 reps (-40%)."
            },
            {
              "type": "Aislamiento Pecho",
              "desc": "Press Inclinado Smith | 2 series x 12-15 reps."
            },
            {
              "type": "Hombros",
              "desc": "Frontal, Lateral, Posterior | 1 serie x 15 reps c/u."
            },
            {
              "type": "Tríceps",
              "desc": "Tras nuca, Ext. polea, Supino | 1 serie x 15 reps c/u."
            }
          ]
        },
        {
          "id": "d6",
          "dayName": "DÍA 6 (Sábado)",
          "split": "LEGS 1 (Gimnasio)",
          "color": "green",
          "details": [
            {
              "type": "Básico",
              "desc": "Sentadilla Libre | 2 series x 10-12 reps (Solo barra o 5kg)."
            },
            {
              "type": "Unilateral",
              "desc": "Búlgaras | 2 series x 8-10 reps corporales."
            },
            {
              "type": "Aislamiento Cuádriceps",
              "desc": "Hack Squat | 2 series x 10 reps (carro vacío)."
            },
            {
              "type": "Aductores / Abductores",
              "desc": "Máquina | 1 serie x 15 reps c/u."
            },
            {
              "type": "Core",
              "desc": "Crunch polea | 2 series x 12 reps."
            }
          ]
        },
        {
          "id": "d7",
          "dayName": "DÍA 7 (Domingo)",
          "split": "DESCANSO ABSOLUTO",
          "color": "gray",
          "details": [
            {
              "type": "Recuperación",
              "desc": "Descanso biológico total. Hidratación y proteínas."
            }
          ]
        }
      ]
    }
  },
  "meso4": {
    "week1": {
      "title": "SEMANA 1: ADAPTACIÓN UNILATERAL (MESO 4)",
      "objective": "Tensión Constante Unilateral. RIR 2.",
      "days": [
        {
          "id": "d1",
          "dayName": "DÍA 1 (Lunes)",
          "split": "PULL 2 (Gimnasio)",
          "color": "blue",
          "details": [
            {
              "type": "Básico",
              "desc": "Remo con máquina | 4 series x 8-10 reps."
            },
            {
              "type": "Aislamiento Dorsal",
              "desc": "Jalón polea alta prono | 3 series x 10-12 reps."
            },
            {
              "type": "Estabilizadores Fijos",
              "desc": "Facepull polea alta | 3 series x 12-15 reps.\nChest Supported Y Raise | 3 series x 12 reps."
            },
            {
              "type": "Superserie Metabólica",
              "desc": "Shrugs (3 x 12) + Curl Martillo mancuerna (3 x 10)."
            },
            {
              "type": "Bíceps",
              "desc": "Curl Bayesian en polea | 2 series x 10-12 reps.\nCurl Inclinado con mancuerna | 2 series x 10-12 reps."
            }
          ]
        },
        {
          "id": "d2",
          "dayName": "DÍA 2 (Martes)",
          "split": "PUSH 2 (Calistenia)",
          "color": "purple",
          "details": [
            {
              "type": "Skills",
              "desc": "Tuck Back Lever (Sostener isometría) | 3 series x 10-15 seg.\nL-Sit en suelo | 3 series x 10-15 seg."
            },
            {
              "type": "Verticales",
              "desc": "Vertical puro | 15 minutos."
            },
            {
              "type": "Básico",
              "desc": "Fondos en Paralelas (Dips) | 4 series x 6-8 reps."
            },
            {
              "type": "Aislamiento",
              "desc": "Flexiones diamante + Flexiones | 3 series x 10-15 reps (Objetivo: RIR 2)."
            }
          ]
        },
        {
          "id": "d3",
          "dayName": "DÍA 3 (Miércoles)",
          "split": "LEGS 2 (Gimnasio)",
          "color": "green",
          "details": [
            {
              "type": "Básico",
              "desc": "Peso Muerto Convencional | 3 series x 5 reps."
            },
            {
              "type": "Aislamiento Glúteo",
              "desc": "Hip Thrust pesado | 3 series x 8-10 reps."
            },
            {
              "type": "Aislamiento Isquios",
              "desc": "DRL con mancuernas | 3 series x 10-12 reps."
            },
            {
              "type": "Aislamiento Pantorrillas",
              "desc": "Elevación pantorrillas pie | 3 series x 12-15 reps. + Tibialis Raises."
            },
            {
              "type": "Core",
              "desc": "Espinales con peso | 2 series x 12 reps. + Crunch polea."
            }
          ]
        },
        {
          "id": "d4",
          "dayName": "DÍA 4 (Jueves)",
          "split": "PULL 1 (Calistenia)",
          "color": "blue",
          "details": [
            {
              "type": "Skills",
              "desc": "Front Lever asistido | 3 series x 10-15 seg.\nLevantamiento de rodillas a la barra | 3 series x 10 reps."
            },
            {
              "type": "Verticales",
              "desc": "Vertical puro | 15 minutos."
            },
            {
              "type": "Básico",
              "desc": "Dominadas Estrictas (Prono) | 4 series x 5-8 reps (RIR 2)."
            },
            {
              "type": "Aislamiento",
              "desc": "Scapular Pull-ups | 3 series x 8-10 reps.\nCurl Biceps | 3 series x 8-10 reps."
            }
          ]
        },
        {
          "id": "d5",
          "dayName": "DÍA 5 (Viernes)",
          "split": "PUSH 1 (Gimnasio)",
          "color": "purple",
          "details": [
            {
              "type": "Básico",
              "desc": "Press Banca Plano | 4 series x 6-8 reps."
            },
            {
              "type": "Aislamiento Pecho",
              "desc": "Press Inclinado Smith (Carga supramáxima) | 3 series x 10-12 reps."
            },
            {
              "type": "Hombros",
              "desc": "Press Militar Smith (2x8-10)\nLaterales polea (2x12-15)\nVuelos inversos (2x12-15)"
            },
            {
              "type": "Tríceps",
              "desc": "Extensión tras nuca, Extensión cuerda, Unilateral supino | 2 series x 10-12 reps c/u."
            }
          ]
        },
        {
          "id": "d6",
          "dayName": "DÍA 6 (Sábado)",
          "split": "LEGS 1 (Gimnasio)",
          "color": "green",
          "details": [
            {
              "type": "Básico",
              "desc": "Sentadilla Libre | 4 series x 6-8 reps."
            },
            {
              "type": "Unilateral",
              "desc": "Pistol Squats asistidas | 3 series x 8-10 reps por pierna."
            },
            {
              "type": "Aislamiento Cuádriceps",
              "desc": "Prensa de piernas (Volumen guiado) | 3 series x 10-12 reps."
            },
            {
              "type": "Aductores / Abductores",
              "desc": "Máquina (ambos) | 2 series x 12-15 reps c/u."
            },
            {
              "type": "Core",
              "desc": "Crunch polea | 2 series x 12 reps."
            }
          ]
        },
        {
          "id": "d7",
          "dayName": "DÍA 7 (Domingo)",
          "split": "DESCANSO ACTIVO",
          "color": "gray",
          "details": [
            {
              "type": "Cardio",
              "desc": "Caminata - Zona 2."
            }
          ]
        }
      ]
    },
    "week2": {
      "title": "SEMANA 2: FUERZA BASE UNILATERAL (MESO 4)",
      "objective": "RIR 1. Aumento de peso obligatorio. EMOMs en Calistenia.",
      "days": [
        {
          "id": "d1",
          "dayName": "DÍA 1 (Lunes)",
          "split": "PULL 2 (Gimnasio)",
          "color": "blue",
          "details": [
            {
              "type": "Básico",
              "desc": "Remo con máquina | 4 series x 4-6 reps (Carga alta)."
            },
            {
              "type": "Aislamiento",
              "desc": "Jalón polea alta prono | 3 series x 8-10 reps."
            },
            {
              "type": "Estabilizadores",
              "desc": "Facepull (3x10-12), Chest Supported Y Raise (3x8-10)"
            },
            {
              "type": "Superserie",
              "desc": "Shrugs (3x10) + Curl Martillo (3x8-10)."
            },
            {
              "type": "Bíceps",
              "desc": "Curl Bayesian, Curl Inclinado | 2 series x 8-10 reps c/u."
            }
          ]
        },
        {
          "id": "d2",
          "dayName": "DÍA 2 (Martes)",
          "split": "PUSH 2 (Calistenia)",
          "color": "purple",
          "details": [
            {
              "type": "Skills",
              "desc": "Tuck Back Lever | 3 series x 15-20 seg (+5s de progresión).\nL-Sit en suelo | 3 series x 15-20 seg (+5s)."
            },
            {
              "type": "Verticales",
              "desc": "Vertical puro | 15 minutos."
            },
            {
              "type": "Básico",
              "desc": "Fondos en Paralelas (Dips) | EMOM 10 minutos (2-3 reps/min)."
            },
            {
              "type": "Aislamiento",
              "desc": "Pike Push ups + Extensión Tríceps tras nuca | 3 series x 8-10 reps."
            }
          ]
        },
        {
          "id": "d3",
          "dayName": "DÍA 3 (Miércoles)",
          "split": "LEGS 2 (Gimnasio)",
          "color": "green",
          "details": [
            {
              "type": "Básico",
              "desc": "Peso Muerto Convencional | 4 series x 4-5 reps (RIR 1)."
            },
            {
              "type": "Aislamiento Glúteo",
              "desc": "Hip Thrust pesado | 3 series x 8-10 reps."
            },
            {
              "type": "Aislamiento Isquios",
              "desc": "DRL con mancuernas | 3 series x 8-10 reps."
            },
            {
              "type": "Aislamiento Pantorrillas",
              "desc": "Elevación pantorrillas pie | 3 series x 10-12 reps. + Tibialis."
            },
            {
              "type": "Core",
              "desc": "Espinales con peso | 2 series x 10-12 reps + Crunch polea."
            }
          ]
        },
        {
          "id": "d4",
          "dayName": "DÍA 4 (Jueves)",
          "split": "PULL 1 (Calistenia)",
          "color": "blue",
          "details": [
            {
              "type": "Skills",
              "desc": "Front Lever asistido | 3 series x 15-20 seg.\nRodillas a barra | 3 series x 10 reps."
            },
            {
              "type": "Verticales",
              "desc": "Vertical puro | 15 minutos."
            },
            {
              "type": "Básico",
              "desc": "Dominadas Estrictas (Supino) | EMOM 10 minutos (2-3 reps/min)."
            },
            {
              "type": "Aislamiento",
              "desc": "Typewriter Pull-ups | 3 series x 8-10 reps.\nCurl Biceps | 3 series x 8-10 reps."
            }
          ]
        },
        {
          "id": "d5",
          "dayName": "DÍA 5 (Viernes)",
          "split": "PUSH 1 (Gimnasio)",
          "color": "purple",
          "details": [
            {
              "type": "Básico",
              "desc": "Press Banca Plano | 4 series x 4-6 reps (3m descanso)."
            },
            {
              "type": "Aislamiento Pecho",
              "desc": "Press Inclinado Smith | 3 series x 8-10 reps."
            },
            {
              "type": "Hombros",
              "desc": "Press Militar Smith (2x8-10)\nLaterales polea (2x8-10)\nVuelos inversos (2x8-10)"
            },
            {
              "type": "Tríceps",
              "desc": "Extensión tras nuca, Extensión cuerda, Unilateral | 2x8-10 reps c/u."
            }
          ]
        },
        {
          "id": "d6",
          "dayName": "DÍA 6 (Sábado)",
          "split": "LEGS 1 (Gimnasio)",
          "color": "green",
          "details": [
            {
              "type": "Básico",
              "desc": "Sentadilla Libre | 4 series x 4-6 reps."
            },
            {
              "type": "Unilateral",
              "desc": "Pistol Squats asistidas | 3 series x 6-8 reps por pierna."
            },
            {
              "type": "Aislamiento Cuádriceps",
              "desc": "Prensa de piernas | 3 series x 8-10 reps."
            },
            {
              "type": "Aductores / Abductores",
              "desc": "Máquina | 2 series x 10-12 reps c/u."
            },
            {
              "type": "Core",
              "desc": "Crunch polea | 2 series x 12 reps."
            }
          ]
        },
        {
          "id": "d7",
          "dayName": "DÍA 7 (Domingo)",
          "split": "DESCANSO ACTIVO",
          "color": "gray",
          "details": [
            {
              "type": "Cardio",
              "desc": "Caminata Zona 2 obligatoria (120-135 ppm). Lavar ácido láctico."
            }
          ]
        }
      ]
    },
    "week3": {
      "title": "SEMANA 3: INTENSIDAD MÁXIMA (MESO 4)",
      "objective": "RIR 0. Series al fallo absoluto. Tests AMRAP en Calistenia.",
      "days": [
        {
          "id": "d1",
          "dayName": "DÍA 1 (Lunes)",
          "split": "PULL 2 (Gimnasio)",
          "color": "blue",
          "details": [
            {
              "type": "Básico",
              "desc": "Remo con máquina | 3 series x 3-5 reps (RIR 0)."
            },
            {
              "type": "Aislamiento Dorsal",
              "desc": "Jalón polea alta prono | 3 series x 6-8 reps (DropSet en 3ra)."
            },
            {
              "type": "Estabilizadores",
              "desc": "Facepull (3x10), Chest Supported Y Raise (3x6-8 DropSet)"
            },
            {
              "type": "Superserie",
              "desc": "Shrugs + Curl Martillo | 3 series x 6-8 reps. ¡Regla de Animal!"
            },
            {
              "type": "Bíceps",
              "desc": "Curl Bayesian, Curl Inclinado | 2 series x 6-8 reps (DropSet en 2da)."
            }
          ]
        },
        {
          "id": "d2",
          "dayName": "DÍA 2 (Martes)",
          "split": "PUSH 2 (Calistenia)",
          "color": "purple",
          "details": [
            {
              "type": "Skills",
              "desc": "Tuck Back Lever | 3 series x Tiempo Máximo.\nL-Sit en suelo | 3 series x Tiempo Máximo."
            },
            {
              "type": "Verticales",
              "desc": "Vertical puro | 15 minutos."
            },
            {
              "type": "Básico",
              "desc": "Fondos en Paralelas (Dips) | Test AMRAP."
            },
            {
              "type": "Aislamiento",
              "desc": "Flexiones Archer + Extensiones Trasnuca | 3 series x 6-10 reps (Al fallo absoluto / RIR 0)."
            }
          ]
        },
        {
          "id": "d3",
          "dayName": "DÍA 3 (Miércoles)",
          "split": "LEGS 2 (Gimnasio)",
          "color": "green",
          "details": [
            {
              "type": "Básico",
              "desc": "Peso Muerto Convencional | 3 series x 3-5 reps (Carga máxima)."
            },
            {
              "type": "Aislamiento Glúteo",
              "desc": "Hip Thrust pesado | 3 series x 6-8 reps (Rest-Pause 3ra)."
            },
            {
              "type": "Aislamiento Isquios",
              "desc": "DRL con mancuernas | 3 series x 6-8 reps (DropSet)."
            },
            {
              "type": "Aislamiento Pantorrillas",
              "desc": "Elevación pie | 3 series x 8-10 reps (DropSet) + Tibialis."
            },
            {
              "type": "Core",
              "desc": "Espinales con peso | 2 series x 10-12 reps al fallo."
            }
          ]
        },
        {
          "id": "d4",
          "dayName": "DÍA 4 (Jueves)",
          "split": "PULL 1 (Calistenia)",
          "color": "blue",
          "details": [
            {
              "type": "Skills",
              "desc": "Front Lever asistido | 3 series x Tiempo Máximo.\nRodillas a barra | 3 series x AMRAP."
            },
            {
              "type": "Verticales",
              "desc": "Handstand puro | 15 minutos."
            },
            {
              "type": "Básico",
              "desc": "Dominadas Estrictas (Prono) | Test AMRAP."
            },
            {
              "type": "Aislamiento",
              "desc": "Scapular Pull-ups | 3 series x 8 reps (Sosteniendo contracción isométrica de 2 segundos arriba).\nCurl de bíceps | 3 series x 6-10 reps (Al fallo absoluto / RIR 0)."
            }
          ]
        },
        {
          "id": "d5",
          "dayName": "DÍA 5 (Viernes)",
          "split": "PUSH 1 (Gimnasio)",
          "color": "purple",
          "details": [
            {
              "type": "Básico",
              "desc": "Press Banca Plano | 3 series x 3-5 reps (Volumen bajo, Peso máximo, RIR 0)."
            },
            {
              "type": "Aislamiento Pecho",
              "desc": "Press Inclinado Smith | 3 series x 6-8 reps (DropSet en 3ra)."
            },
            {
              "type": "Hombros",
              "desc": "Frontal, Lateral, Posterior | 2x6-8 reps c/u (DropSet)."
            },
            {
              "type": "Tríceps",
              "desc": "Tras nuca, Cuerda, Unilateral | 2x6-8 reps (DropSet)."
            }
          ]
        },
        {
          "id": "d6",
          "dayName": "DÍA 6 (Sábado)",
          "split": "LEGS 1 (Gimnasio)",
          "color": "green",
          "details": [
            {
              "type": "Básico",
              "desc": "Sentadilla Libre | 3 series x 3-5 reps (RIR 0)."
            },
            {
              "type": "Unilateral",
              "desc": "Pistol Squats | 3 series x 6-8 reps por pierna (Serie 3 al fallo corporal)."
            },
            {
              "type": "Aislamiento Cuádriceps",
              "desc": "Prensa de piernas | 3 series x 6-8 reps (Serie 3 fallo total)."
            },
            {
              "type": "Aductores / Abductores",
              "desc": "Máquina | 2 series x 8-10 reps (DropSet)."
            },
            {
              "type": "Core",
              "desc": "Crunch polea | 2 series x 12 reps al fallo."
            }
          ]
        },
        {
          "id": "d7",
          "dayName": "DÍA 7 (Domingo)",
          "split": "DESCANSO ABSOLUTO",
          "color": "gray",
          "details": [
            {
              "type": "Recuperación",
              "desc": "Descanso biológico total. Hidratación y proteínas."
            }
          ]
        }
      ]
    },
    "week4": {
      "title": "SEMANA 4: DESCARGA (DELOAD) MESO 4",
      "objective": "Cargas al 60% de tu máximo. RIR 3-4. Cortar volumen a la mitad.",
      "days": [
        {
          "id": "d1",
          "dayName": "DÍA 1 (Lunes)",
          "split": "PULL 2 (Gimnasio)",
          "color": "blue",
          "details": [
            {
              "type": "Básico",
              "desc": "Remo con máquina | 2 series x 10-12 reps."
            },
            {
              "type": "Aislamiento Dorsal",
              "desc": "Jalón polea alta prono | 2 series x 12-15 reps."
            },
            {
              "type": "Estabilizadores",
              "desc": "Facepull (2x15), Chest Supported Y Raise (2x12)"
            },
            {
              "type": "Superserie",
              "desc": "Shrugs (2x15) + Curl Martillo (2x12-15) suave."
            },
            {
              "type": "Bíceps",
              "desc": "Curl Bayesian, Curl Inclinado | 1 serie x 15 reps c/u."
            }
          ]
        },
        {
          "id": "d2",
          "dayName": "DÍA 2 (Martes)",
          "split": "PUSH 2 (Calistenia)",
          "color": "purple",
          "details": [
            {
              "type": "Skills",
              "desc": "Tuck Back Lever | 2 series x 5-10 seg (banda gruesa).\nL-Sit | 2 series x 5-10 seg."
            },
            {
              "type": "Verticales",
              "desc": "Handstand puro | 15 minutos sin forzar."
            },
            {
              "type": "Básico",
              "desc": "Fondos en Paralelas | 2 series x 8-10 reps (RIR 4)."
            },
            {
              "type": "Aislamiento",
              "desc": "Flexiones (Agarre Libre) | 2 series x 10-12 reps (Objetivo: RIR 4 - Bombeo suave)."
            }
          ]
        },
        {
          "id": "d3",
          "dayName": "DÍA 3 (Miércoles)",
          "split": "LEGS 2 (Gimnasio)",
          "color": "green",
          "details": [
            {
              "type": "Básico",
              "desc": "Peso Muerto Convencional | 2 series x 8-10 reps (pesos bajísimos)."
            },
            {
              "type": "Aislamiento Glúteo",
              "desc": "Hip Thrust | 2 series x 12-15 reps."
            },
            {
              "type": "Aislamiento Isquios",
              "desc": "DRL con mancuernas | 2 series x 12-15 reps."
            },
            {
              "type": "Aislamiento Pantorrillas",
              "desc": "Elevación pie | 2 series x 15 reps. + Tibialis Raises."
            },
            {
              "type": "Core",
              "desc": "Espinales | 1 serie x 12 reps."
            }
          ]
        },
        {
          "id": "d4",
          "dayName": "DÍA 4 (Jueves)",
          "split": "PULL 1 (Calistenia)",
          "color": "blue",
          "details": [
            {
              "type": "Skills",
              "desc": "Front Lever asistido | 2 series x 5-10 seg.\nRodillas a barra | 2 series x 8 reps."
            },
            {
              "type": "Verticales",
              "desc": "Handstand / Ranita | 15 min."
            },
            {
              "type": "Básico",
              "desc": "Dominadas Estrictas | 2 series x 5-8 reps (Banda gruesa)."
            },
            {
              "type": "Aislamiento",
              "desc": "Scapular Pull-ups | 2 series x 8-10 reps (Pausas de 2 segundos arriba, suave)."
            }
          ]
        },
        {
          "id": "d5",
          "dayName": "DÍA 5 (Viernes)",
          "split": "PUSH 1 (Gimnasio)",
          "color": "purple",
          "details": [
            {
              "type": "Básico",
              "desc": "Press Banca Plano | 2 series x 10-12 reps (-40%)."
            },
            {
              "type": "Aislamiento Pecho",
              "desc": "Press Inclinado Smith | 2 series x 12-15 reps."
            },
            {
              "type": "Hombros",
              "desc": "Frontal, Lateral, Posterior | 1 serie x 15 reps c/u."
            },
            {
              "type": "Tríceps",
              "desc": "Tras nuca, Ext. polea, Supino | 1 serie x 15 reps c/u."
            }
          ]
        },
        {
          "id": "d6",
          "dayName": "DÍA 6 (Sábado)",
          "split": "LEGS 1 (Gimnasio)",
          "color": "green",
          "details": [
            {
              "type": "Básico",
              "desc": "Sentadilla Libre | 2 series x 10-12 reps (Solo barra)."
            },
            {
              "type": "Unilateral",
              "desc": "Pistol Squats | 2 series x 8-10 reps corporales."
            },
            {
              "type": "Aislamiento Cuádriceps",
              "desc": "Prensa de piernas | 2 series x 10 reps."
            },
            {
              "type": "Aductores / Abductores",
              "desc": "Máquina | 1 serie x 15 reps c/u."
            },
            {
              "type": "Core",
              "desc": "Crunch polea | 2 series x 12 reps."
            }
          ]
        },
        {
          "id": "d7",
          "dayName": "DÍA 7 (Domingo)",
          "split": "DESCANSO ABSOLUTO",
          "color": "gray",
          "details": [
            {
              "type": "Recuperación",
              "desc": "Descanso biológico total. Hidratación y proteínas."
            }
          ]
        }
      ]
    }
  }
};

export const splitData = rawSplitData;