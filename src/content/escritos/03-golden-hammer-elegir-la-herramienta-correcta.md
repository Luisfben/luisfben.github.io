---
slug: golden-hammer-elegir-la-herramienta-correcta
title: "Golden Hammer: cuando la herramienta no falló, la elegí mal"
summary: "Dos requerimientos a la misma herramienta de diseño, dos resultados opuestos, y un antipatrón con nombre propio desde 1998."
date: 2026-07-29
keywords: [Golden Hammer, antipatrones, Claude Design, criterio técnico, herramientas de IA, ingeniería de software]
tags: [Claude Design, Golden Hammer]
type: escrito
---

Probé Claude Design con dos requerimientos muy distintos, y la diferencia entre los dos resultados me dejó pensando en algo que pasa seguido en ingeniería de software.

El primero fue simple: un diseño básico. El resultado casi calzó con lo que esperaba, probablemente porque la sencillez del requerimiento coincidía con la forma en que la herramienta realmente "dibuja": layouts, formas y componentes.

El segundo fue más ambicioso: le pedí una imagen de una persona trabajando frente a una computadora. El resultado fueron cuadrados, círculos y líneas, algo que podría haber dibujado un niño de preescolar. Tiene sentido: Claude Design no genera imágenes rasterizadas, genera HTML y CSS editable; está pensado para prototipos y layouts, no para ilustración. Ahí entendí que estaba usando la herramienta para un trabajo distinto al que fue pensada para resolver.

Es algo que pasa seguido, no solo con IA. Es como intentar meter un tornillo a martillazos: funciona a las patadas, pero termina dañando la madera, porque un martillo está hecho para golpear, no para girar. Hay hasta un nombre para este tipo de error: **Golden Hammer** (o el martillo de Maslow), un antipatrón descrito desde 1998, basado en una frase de Abraham Maslow de 1966: *"si la única herramienta que tienes es un martillo, tiendes a tratar todo como si fuera un clavo."* 🔨

Claude Design no falló: yo la usé para algo distinto a lo que fue diseñada. La diferencia entre un buen y un mal resultado, muchas veces, no está en la herramienta sino en si elegimos la correcta para el problema que tenemos.
