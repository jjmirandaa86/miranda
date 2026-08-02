# Contexto obligatorio para la IA (Miranda)

Léeme al inicio de cada sesión de trabajo en este repo.

## Qué es Miranda

Plataforma empresarial de IA **privada** (on-prem / private cloud / hybrid) con LLM + otras IA, permisos granulares y auditoría. El LLM **nunca** decide autorización.

## Archivos canónicos

1. `../README.md` — visión y diagramas  
2. `BUILD-README.md` — **manual de construcción MVP** (fases 0–5, DoD, LLM 8B)  
3. `FUNCTIONALITY.md` — **fuente de verdad** de features (`F-*`)  
4. `ARCHITECTURE-MEMORY.md` — decisiones (`D-*`), pendientes (`P-*`), riesgos (`R-*`)  
5. `MODULES.md` — cola de diseño; build se ejecuta por fases del BUILD-README  
6. `HOW-TO-ITERATE.md` — protocolo de cambio + checklist  

## Reglas duras

- No inventar estadísticas de mercado.  
- No avanzar build/diseño automáticamente tras una propuesta; esperar `ejecuta Fase N` o `continuar`.  
- Todo cambio: validar checklist de FUNCTIONALITY.  
- Acciones críticas → human-in-the-loop.  
- Mantener diseño modular; señalar incompatibilidades con decisiones previas.  
- **Gate código:** DoD de la fase anterior en BUILD-README (D-020). No esperar M15 (ya absorbido).

## Stack MVP fijado (resumen)

Ollama `llama3.1:8b` + `nomic-embed-text` · Next.js · NestJS · PostgreSQL/pgvector · Redis · MinIO · Keycloak · Docker Compose · vertical RRHH

## Activo ahora

- Build: **Fase 0** → `ejecuta Fase 0`  
- Diseño: **M01** (opcional antes de Fase 1)

## Al analizar una idea

Problema · quién paga · por qué · ROI · datos · modelos · qué es/no es LLM · arquitectura · seguridad · permisos · integraciones · MVP · enterprise · venta.
