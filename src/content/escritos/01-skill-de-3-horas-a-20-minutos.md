---
slug: skill-de-3-horas-a-20-minutos
title: "Una skill que bajó un proceso mensual de 3 horas a 20 minutos"
summary: "Diez validaciones manuales de distinto tipo, automatizadas con una skill de Claude Code — y los tres problemas de diseño que aparecieron en el camino."
date: 2026-06-12
keywords: [Claude Code, Claude Cowork, skills, context rot, workers, automatización, IA agéntica]
tags: [Claude Code, Claude Cowork, Skills]
type: escrito
---

⏱️ 3 horas → 20 minutos. Eso logró una skill que construí en Claude Code, corriendo desde Claude Cowork, para automatizar un proceso mensual de validaciones previo a la facturación.

Alrededor de diez validaciones que antes se hacían a mano — y no eran del mismo tipo. Algunas requerían consumir endpoints y verificar respuestas. Otras implicaban interacción directa con una página web. Y una requería una contraparte manual, porque desde el sandbox de Cowork no había acceso a ese sistema.

Al final del proceso, la skill genera automáticamente un reporte con el resultado de cada validación — un entregable concreto, listo para revisar.

Tres aprendizajes que me dejó:

🏗️ **El diseño es crítico.** Meter todo en un solo `.md` no funciona. Terminé modularizando las validaciones dentro de la misma skill. ¿Es la mejor opción? No lo sé aún — sigo aprendiendo.

🧠 **El modelo olvida.** La comunidad lo llama *context rot*: las instrucciones se diluyen a medida que el contexto crece. No es un bug tuyo. La solución: instrucciones cortas y recordatorios explícitos en los pasos críticos.

⚡ **Los workers cambian el juego.** Las validaciones sin dependencia entre sí corren en paralelo y reducen tiempos de forma significativa. La limitación: las tareas con interacción web no se pueden paralelizar.

La skill funciona, está en uso, y sigo iterando sobre ella. 🔄
