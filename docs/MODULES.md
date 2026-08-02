# Módulos de trabajo

Hay dos colas coordinadas:

1. **Build (implementación)** → [BUILD-README.md](./BUILD-README.md) — frases: `ejecuta Fase N`
2. **Diseño (detalle)** → esta tabla — frase: **`continuar`**

Cuando el usuario diga **“continuar”** sin especificar, priorizar la **siguiente fase build pending** si el DoD de diseño mínimo ya está en BUILD-README; si pide diseño explícito, avanzar el siguiente módulo `pending` de esta tabla.

---

## Mapeo a fases build

| Módulos diseño | Fase BUILD |
|----------------|------------|
| M01, M02, M06 | Fase 1 — seguridad |
| M03 | Fase 2 — documentos |
| M04 | Fase 3 — RAG |
| M05, M07 | Fase 4 — chat + demo HR |
| M13 (packaging local) | Fase 5 — demo pack |
| M08–M12, M14 | Post-MVP |
| M15 | **done** — absorbido por BUILD-README (D-020) |

---

## Módulos de diseño

| ID | Módulo | Estado | Entregable principal | Docs clave |
|----|--------|--------|----------------------|------------|
| M00 | Alineación de visión + estructura documental | **done** | README, FUNCTIONALITY, MEMORY | README |
| M01 | Modelo organizacional, roles y permisos | pending | Modelo de datos org + policy engine | AUTH-AND-PERMISSIONS, EMPRESA-A, BUILD Fase 1 |
| M02 | Autenticación SSO / IdP | pending | Keycloak local + contrato OIDC | AUTH-AND-PERMISSIONS, BUILD Fase 1 |
| M03 | Documentos, metadatos y clasificación | pending | Ciclo de vida documental | DOCUMENTS-MULTIMEDIA, BUILD Fase 2 |
| M04 | RAG seguro + anti-leakage | pending | Flujo retrieval con ACL | RAG-AND-SECURITY, BUILD Fase 3 |
| M05 | Chat + orquestación de intención | pending | Contrato chat / fuentes | ARCHITECTURE, BUILD Fase 4 |
| M06 | Auditoría y compliance baseline | pending | Eventos auditables canónicos | AUDIT-COMPLIANCE, BUILD Fase 1 |
| M07 | Caso RRHH completo (demo) | pending | 3 consultas + bloqueos | EMPRESA-A, BUILD Fase 4 |
| M08 | Workflows y human-in-the-loop | pending | Ejemplo aumento salarial | AGENTS-AND-WORKFLOWS |
| M09 | Agentes especializados | pending | Router + allowlists | AGENTS-AND-WORKFLOWS |
| M10 | Multimedia / OCR / reuniones | pending | Pipelines multimodales | DOCUMENTS-MULTIMEDIA |
| M11 | Ventas y recomendaciones con evidencia | pending | ML + LLM explicación | BUSINESS / ARCHITECTURE |
| M12 | Integraciones (Drive, ERP, CRM…) | pending | Prioridad de conectores | ARCHITECTURE |
| M13 | Despliegue A/B/C + packaging | pending | Compose demo + tradeoffs enterprise | ARCHITECTURE, BUILD Fase 5 |
| M14 | Modelo de negocio y pricing | pending | Empaquetado comercial | ROADMAP-AND-BUSINESS |
| M15 | Especificación técnica MVP implementable | **done** | [BUILD-README.md](./BUILD-README.md) | BUILD-README |

---

## Reglas

1. **Gate de código:** no implementar una fase build hasta que la anterior esté `done` según su DoD en BUILD-README (D-020). Ya no se espera “llegar a M15”.
2. Cada módulo de diseño termina con: resumen, IDs tocados, decisiones nuevas, checklist de validación.
3. Si un módulo reabre una decisión `accepted`, crear `INC-*` en MEMORY.
4. Tras terminar un módulo: estado → `done`, siguiente → listo para “continuar”.
5. Implementación se dispara con **`ejecuta Fase N`**, no al terminar solo el diseño.

---

## Activo ahora

| Cola | Siguiente |
|------|-----------|
| Build | **Fase 0** — LLM + infra (`ejecuta Fase 0`) |
| Diseño | **M01** — org / roles / permisos (`continuar` si quieres detalle antes de codear Fase 1) |
