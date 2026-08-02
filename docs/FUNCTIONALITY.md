# FUNCTIONALITY — Fuente de verdad de Miranda

Este archivo es el **catálogo canónico de funcionalidades**.

Cada cambio a la idea, la arquitectura o el código debe:

1. Identificar qué IDs `F-*` toca.
2. Actualizar el estado del ID si cambia.
3. Registrar el impacto en [ARCHITECTURE-MEMORY.md](./ARCHITECTURE-MEMORY.md).
4. Completar el checklist de validación al final de este archivo.

---

## Cómo leer un ID

```
F-<DOMINIO>-<NNN> | Nombre
Estado: proposed | accepted | in-progress | done | deferred | rejected
Fase: 1–5
Prioridad: P0 | P1 | P2 | P3
Depende de: otros IDs
```

Leyenda de estado:

| Estado | Significado |
|--------|-------------|
| `proposed` | Idea documentada, no acordada |
| `accepted` | Acordada para el diseño |
| `in-progress` | En diseño/implementación activa |
| `done` | Implementada / especificada al nivel actual |
| `deferred` | Pospuesta conscientemente |
| `rejected` | Descartada (mantener motivo en memoria) |

---

## 1. Organización y multi-tenant

| ID | Funcionalidad | Estado | Fase | Prioridad | Depende de |
|----|---------------|--------|------|-----------|------------|
| F-ORG-001 | Multi-empresa / multi-tenant | accepted | 1 | P0 | — |
| F-ORG-002 | Subsidiarias, sucursales, países, regiones | accepted | 1 | P0 | F-ORG-001 |
| F-ORG-003 | Departamentos y equipos configurables | accepted | 1 | P0 | F-ORG-001 |
| F-ORG-004 | Proyectos, clientes, centros de costo, BU | accepted | 1 | P1 | F-ORG-001 |
| F-ORG-005 | Árbol jerárquico editable por cliente | accepted | 1 | P0 | F-ORG-003 |
| F-ORG-006 | Usuario pertenece a uno o varios nodos | accepted | 1 | P0 | F-ORG-005 |
| F-ORG-007 | Aislamiento estricto entre tenants | accepted | 1 | P0 | F-ORG-001 |

---

## 2. Autenticación e identidad

| ID | Funcionalidad | Estado | Fase | Prioridad | Depende de |
|----|---------------|--------|------|-----------|------------|
| F-AUTH-001 | Login SSO empresarial | accepted | 1 | P0 | — |
| F-AUTH-002 | OIDC / OAuth (Google, Microsoft) | accepted | 1 | P0 | F-AUTH-001 |
| F-AUTH-003 | SAML SSO | accepted | 2 | P1 | F-AUTH-001 |
| F-AUTH-004 | Entra ID / Azure AD | accepted | 1 | P0 | F-AUTH-002 |
| F-AUTH-005 | Active Directory / LDAP | accepted | 2 | P1 | F-AUTH-001 |
| F-AUTH-006 | Okta / Auth0 / IdP genérico | accepted | 2 | P1 | F-AUTH-002 |
| F-AUTH-007 | MFA (vía IdP o plataforma) | accepted | 1 | P0 | F-AUTH-001 |
| F-AUTH-008 | Gestión de sesiones + rotación tokens | accepted | 1 | P0 | F-AUTH-001 |
| F-AUTH-009 | Revocación / desactivación al offboarding | accepted | 1 | P0 | F-AUTH-008 |
| F-AUTH-010 | Sync de usuarios desde IdP | accepted | 2 | P1 | F-AUTH-004 |
| F-AUTH-011 | SCIM provisioning | proposed | 2 | P2 | F-AUTH-010 |
| F-AUTH-012 | Sin contraseña local obligatoria para end-user | accepted | 1 | P0 | F-AUTH-001 |

---

## 3. Roles, permisos y autorización

| ID | Funcionalidad | Estado | Fase | Prioridad | Depende de |
|----|---------------|--------|------|-----------|------------|
| F-PERM-001 | RBAC | accepted | 1 | P0 | F-ORG-006 |
| F-PERM-002 | ABAC (atributos: dept, cargo, país, proyecto…) | accepted | 1 | P0 | F-PERM-001 |
| F-PERM-003 | Políticas por tipo de documento / confidencialidad | accepted | 1 | P0 | F-PERM-002 |
| F-PERM-004 | Acciones: READ/CREATE/UPDATE/DELETE/APPROVE/EXECUTE/EXPORT/SHARE | accepted | 1 | P0 | F-PERM-001 |
| F-PERM-005 | Acciones extendidas: buscar, subir, firmar, generar… | accepted | 1 | P1 | F-PERM-004 |
| F-PERM-006 | Permisos por horario / estado de proceso | proposed | 3 | P2 | F-PERM-002 |
| F-PERM-007 | Policy engine externo al LLM | accepted | 1 | P0 | F-PERM-002 |
| F-PERM-008 | Evaluación de permisos auditable | accepted | 1 | P0 | F-AUD-001 |
| F-PERM-009 | Deny-by-default | accepted | 1 | P0 | F-PERM-007 |
| F-PERM-010 | Impedir privilege escalation vía prompts | accepted | 1 | P0 | F-PERM-007 |

---

## 4. Seguridad del LLM (anti-leakage)

| ID | Funcionalidad | Estado | Fase | Prioridad | Depende de |
|----|---------------|--------|------|-----------|------------|
| F-SEC-001 | AuthZ antes de retrieval | accepted | 1 | P0 | F-PERM-007 |
| F-SEC-002 | AuthZ antes de enviar contexto al LLM | accepted | 1 | P0 | F-SEC-001 |
| F-SEC-003 | Validación post-respuesta (redacción / bloqueo) | accepted | 1 | P1 | F-SEC-002 |
| F-SEC-004 | Mitigación prompt injection | accepted | 1 | P0 | F-SEC-002 |
| F-SEC-005 | Mitigación indirect prompt injection | accepted | 1 | P0 | F-SEC-004 |
| F-SEC-006 | Límites de agency / tool allowlist | accepted | 2 | P0 | F-AGT-001 |
| F-SEC-007 | Aislamiento cross-tenant | accepted | 1 | P0 | F-ORG-007 |
| F-SEC-008 | El LLM nunca decide permisos | accepted | 1 | P0 | F-PERM-007 |
| F-SEC-009 | Zero Trust / least privilege | accepted | 1 | P0 | F-PERM-009 |
| F-SEC-010 | Encryption at rest / in transit | accepted | 1 | P0 | — |
| F-SEC-011 | Secrets & key management | accepted | 1 | P0 | F-SEC-010 |
| F-SEC-012 | DLP básico en export/share | proposed | 3 | P2 | F-PERM-004 |

---

## 5. Documentos y multimedia

| ID | Funcionalidad | Estado | Fase | Prioridad | Depende de |
|----|---------------|--------|------|-----------|------------|
| F-DOC-001 | Upload PDF/DOCX/XLSX/CSV/PPTX | accepted | 1 | P0 | F-ORG-001 |
| F-DOC-002 | Imágenes / fotos | accepted | 1 | P1 | F-DOC-001 |
| F-DOC-003 | Audio / video | accepted | 2 | P1 | F-DOC-001 |
| F-DOC-004 | Emails / contratos / planos / manuales | accepted | 2 | P1 | F-DOC-001 |
| F-DOC-005 | Metadatos obligatorios (empresa, dept, owner, tags…) | accepted | 1 | P0 | F-DOC-001 |
| F-DOC-006 | Clasificación PUBLIC→HIGHLY CONFIDENTIAL | accepted | 1 | P0 | F-DOC-005 |
| F-DOC-007 | Herencia de permisos + override | accepted | 1 | P0 | F-PERM-003 |
| F-DOC-008 | Versionado y expiración | accepted | 2 | P1 | F-DOC-005 |
| F-DOC-009 | Pipeline multimodal (transcribe, summarize, extract) | accepted | 2 | P1 | F-DOC-003 |
| F-DOC-010 | OCR de facturas / documentos | accepted | 2 | P1 | F-DOC-002 |

---

## 6. RAG empresarial

| ID | Funcionalidad | Estado | Fase | Prioridad | Depende de |
|----|---------------|--------|------|-----------|------------|
| F-RAG-001 | Indexación de documentos con embeddings | accepted | 1 | P0 | F-DOC-001 |
| F-RAG-002 | Metadata filtering en retrieval | accepted | 1 | P0 | F-DOC-005 |
| F-RAG-003 | ACL filtering pre-LLM | accepted | 1 | P0 | F-SEC-001 |
| F-RAG-004 | Document-level permissions | accepted | 1 | P0 | F-DOC-007 |
| F-RAG-005 | Chunk-level permissions (cuando aplique) | proposed | 3 | P2 | F-RAG-004 |
| F-RAG-006 | Row-level security para datos tabulares | proposed | 3 | P2 | F-PERM-002 |
| F-RAG-007 | Namespace / tenant isolation en vector DB | accepted | 1 | P0 | F-ORG-007 |
| F-RAG-008 | Conectores: Drive, SharePoint, OneDrive | accepted | 2 | P1 | F-RAG-001 |
| F-RAG-009 | Conectores: Confluence, Jira, GitHub | accepted | 2 | P2 | F-RAG-001 |
| F-RAG-010 | Conectores: CRM / ERP / APIs / email | accepted | 2–3 | P1 | F-RAG-001 |
| F-RAG-011 | Citar fuentes en respuestas | accepted | 1 | P0 | F-RAG-003 |
| F-RAG-012 | No recuperar docs no autorizados (hard fail) | accepted | 1 | P0 | F-RAG-003 |

---

## 7. Chat y orquestación

| ID | Funcionalidad | Estado | Fase | Prioridad | Depende de |
|----|---------------|--------|------|-----------|------------|
| F-CHAT-001 | Chat unificado (un asistente) | accepted | 1 | P0 | F-AUTH-001 |
| F-CHAT-002 | Detección de intención | accepted | 1 | P0 | F-CHAT-001 |
| F-CHAT-003 | Selección de modelo según caso de uso | accepted | 2 | P1 | F-CHAT-002 |
| F-CHAT-004 | Respuestas con explicación + fuentes | accepted | 1 | P0 | F-RAG-011 |
| F-CHAT-005 | Bloqueo explícito de acciones sensibles | accepted | 1 | P0 | F-SEC-006 |
| F-CHAT-006 | Multi-turn con contexto de sesión autorizado | accepted | 1 | P1 | F-CHAT-001 |

---

## 8. Agentes

| ID | Funcionalidad | Estado | Fase | Prioridad | Depende de |
|----|---------------|--------|------|-----------|------------|
| F-AGT-001 | Arquitectura multi-agente con router | accepted | 2 | P0 | F-CHAT-002 |
| F-AGT-002 | HR Agent | accepted | 2 | P0 | F-AGT-001 |
| F-AGT-003 | Finance Agent | accepted | 2 | P1 | F-AGT-001 |
| F-AGT-004 | Sales Agent | accepted | 2 | P1 | F-AGT-001 |
| F-AGT-005 | IT / Security / Legal / Ops Agents | accepted | 2–3 | P1 | F-AGT-001 |
| F-AGT-006 | Tools + allowlist + límites por agente | accepted | 2 | P0 | F-SEC-006 |
| F-AGT-007 | Agente no puede saltarse permisos de otro | accepted | 2 | P0 | F-PERM-007 |
| F-AGT-008 | Marketplace de agentes | proposed | 4 | P3 | F-AGT-001 |

---

## 9. Workflows y aprobaciones

| ID | Funcionalidad | Estado | Fase | Prioridad | Depende de |
|----|---------------|--------|------|-----------|------------|
| F-WF-001 | Motor de workflows | accepted | 2 | P0 | F-PERM-004 |
| F-WF-002 | Approval chains (manager → HR → Finance…) | accepted | 2 | P0 | F-WF-001 |
| F-WF-003 | Human-in-the-loop obligatorio en críticos | accepted | 2 | P0 | F-WF-002 |
| F-WF-004 | Escalamiento / delegación / rechazo | accepted | 2 | P1 | F-WF-002 |
| F-WF-005 | IA prepara docs/recomendaciones, no aprueba sola | accepted | 2 | P0 | F-WF-003 |
| F-WF-006 | Auditoría de cada paso del workflow | accepted | 2 | P0 | F-AUD-001 |

---

## 10. Inteligencia especializada

| ID | Funcionalidad | Estado | Fase | Prioridad | Depende de |
|----|---------------|--------|------|-----------|------------|
| F-AI-001 | Modelos locales/privados (Ollama/vLLM/etc.) | accepted | 1 | P0 | — |
| F-AI-002 | Routing a modelos pequeños/grandes/especializados | accepted | 2 | P1 | F-CHAT-003 |
| F-AI-003 | Vision models | accepted | 2 | P1 | F-DOC-002 |
| F-AI-004 | Audio STT/TTS | accepted | 2 | P1 | F-DOC-003 |
| F-AI-005 | Embeddings + búsqueda semántica | accepted | 1 | P0 | F-RAG-001 |
| F-AI-006 | ML predicción / anomalías | proposed | 3 | P1 | — |
| F-AI-007 | Recomendaciones (sales) con evidencia real | accepted | 3 | P1 | F-AI-006 |
| F-AI-008 | LLM no inventa estadísticas | accepted | 1 | P0 | F-AI-007 |
| F-AI-009 | Fine-tuning / LoRA (selectivo) | proposed | 3 | P2 | F-AI-001 |
| F-AI-010 | Code models (IT) | proposed | 3 | P2 | F-AGT-005 |

---

## 11. Módulos de negocio (casos de uso)

| ID | Funcionalidad | Estado | Fase | Prioridad | Depende de |
|----|---------------|--------|------|-----------|------------|
| F-HR-001 | Consultas políticas RRHH autorizadas | accepted | 1 | P0 | F-RAG-003 |
| F-HR-002 | Candidatos a promoción (recomendación) | accepted | 2 | P1 | F-AGT-002 |
| F-HR-003 | Estimación costo despido (con validación humana) | accepted | 2 | P1 | F-WF-003 |
| F-FIN-001 | Consultas políticas / reportes autorizados | accepted | 2 | P1 | F-AGT-003 |
| F-SALES-001 | Next-best-offer / cross-sell con evidencia | accepted | 3 | P1 | F-AI-007 |
| F-OPS-001 | Extracción tareas desde reuniones | accepted | 2 | P2 | F-DOC-009 |
| F-AP-001 | OCR factura → validación → aprobación | accepted | 2 | P1 | F-DOC-010 |

*(Los 100 casos de negocio viven en BUSINESS-OPPORTUNITIES.md; aquí solo los priorizados como producto.)*

---

## 12. Auditoría

| ID | Funcionalidad | Estado | Fase | Prioridad | Depende de |
|----|---------------|--------|------|-----------|------------|
| F-AUD-001 | Audit log inmutable (append-only preferido) | accepted | 1 | P0 | — |
| F-AUD-002 | Registrar prompt, tools, docs, resultado | accepted | 1 | P0 | F-AUD-001 |
| F-AUD-003 | Quién consultó / descargó / ejecutó | accepted | 1 | P0 | F-AUD-001 |
| F-AUD-004 | Trazabilidad de fuentes usadas por la IA | accepted | 1 | P0 | F-RAG-011 |
| F-AUD-005 | IP, dispositivo, timestamp | accepted | 1 | P0 | F-AUD-001 |
| F-AUD-006 | Consultas de auditoría por compliance | accepted | 2 | P1 | F-AUD-003 |

---

## 13. Despliegue y operaciones

| ID | Funcionalidad | Estado | Fase | Prioridad | Depende de |
|----|---------------|--------|------|-----------|------------|
| F-DEP-001 | Despliegue On-Premise | accepted | 1 | P0 | — |
| F-DEP-002 | Despliegue Private Cloud | accepted | 2 | P1 | F-DEP-001 |
| F-DEP-003 | Despliegue Hybrid | accepted | 2 | P1 | F-DEP-001 |
| F-DEP-004 | Docker / K8s packaging | accepted | 1 | P0 | F-DEP-001 |
| F-DEP-005 | Observabilidad (logs, metrics, traces) | accepted | 1 | P1 | — |
| F-DEP-006 | CI/CD | accepted | 1 | P1 | — |

---

## 14. Negocio / plataforma comercial

| ID | Funcionalidad | Estado | Fase | Prioridad | Depende de |
|----|---------------|--------|------|-----------|------------|
| F-BIZ-001 | Implementación inicial + recurrente | accepted | 1 | P0 | — |
| F-BIZ-002 | Pricing por usuarios / dept / consumo | proposed | 2 | P1 | F-BIZ-001 |
| F-BIZ-003 | Managed AI | proposed | 3 | P2 | F-DEP-002 |
| F-BIZ-004 | Marketplace conectores | proposed | 4 | P3 | F-RAG-008 |
| F-BIZ-005 | Configuración no-code de procesos | proposed | 4 | P3 | F-WF-001 |

---

## Checklist de validación (obligatorio en cada cambio)

Copiar y completar en el mensaje de cambio / PR / nota de diseño:

```md
### Validación FUNCTIONALITY
- [ ] IDs afectados listados: …
- [ ] Estados actualizados en este archivo
- [ ] ¿Rompe F-SEC-008 (LLM no decide permisos)? No / Sí → mitigación: …
- [ ] ¿Rompe F-ORG-007 (aislamiento tenant)? No / Sí → mitigación: …
- [ ] ¿Rompe F-RAG-012 (no retrieval no autorizado)? No / Sí → mitigación: …
- [ ] ¿Introduce acción sensible sin F-WF-003 (HITL)? No / Sí → mitigación: …
- [ ] ARCHITECTURE-MEMORY actualizada
- [ ] Diagramas README/ARCHITECTURE actualizados si aplica
- [ ] Compatibilidad con decisiones accepted revisada
- [ ] Nuevas funcionalidades tienen ID nuevo (no reutilizar IDs)
```

### Reglas duras de validación (fallo automático)

Un cambio **falla validación** si:

1. El LLM puede decidir acceso a datos (viola F-SEC-008).
2. Un tenant puede leer datos de otro (viola F-ORG-007).
3. El retrieval ignora ACL (viola F-RAG-012).
4. Una acción crítica se ejecuta sin aprobación humana cuando el caso lo exige (viola F-WF-003).
5. Se inventan métricas/estadísticas sin fuente (viola F-AI-008).
6. Se elimina una funcionalidad `accepted` sin moverla a `rejected`/`deferred` con motivo.

---

## Índice rápido por fase MVP

### Fase 1 (núcleo) — mínimo para demo seria

`F-ORG-*` P0 · `F-AUTH-*` P0 · `F-PERM-*` P0 · `F-SEC-*` P0 · `F-DOC-001/005/006/007` · `F-RAG-001..004/007/011/012` · `F-CHAT-001/002/004/005` · `F-AUD-001..005` · `F-AI-001/005/008` · `F-HR-001` · `F-DEP-001/004`

### Fase 2

Agentes, workflows, conectores, multimedia, sync IdP, casos HR/Finance/AP.

### Fase 3+

ML, recomendaciones, fine-tuning, marketplace, no-code.
