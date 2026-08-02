# Arquitectura técnica — Miranda

Estado: borrador modular (no cerrado). Decisiones stack: ver MEMORY `D-006`, pendientes `P-001..P-004`.

---

## 1. Vista lógica

```mermaid
flowchart TB
  subgraph Client
    WEB[Next.js + TypeScript]
  end

  subgraph Edge
    NGX[Nginx / Ingress]
  end

  subgraph App
    API[NestJS API]
    ORCH[Orchestrator]
    POL[Policy Engine]
    CHAT[Chat Service]
    DOC[Document Service]
    ING[Ingestion Workers]
    AGT[Agent Router]
    WF[Workflow Engine]
    AUD[Audit Service]
  end

  subgraph Data
    PG[(PostgreSQL)]
    RD[(Redis)]
    S3[(MinIO / S3)]
    VEC[(Vector DB)]
  end

  subgraph AI
    LLM[Ollama / vLLM / llama.cpp]
    EMB[Embedding service]
    OCR[OCR / Vision]
    STT[STT]
  end

  subgraph External
    IDP[IdP SSO]
    SYS[ERP CRM Drive...]
  end

  WEB --> NGX --> API
  API --> ORCH
  ORCH --> POL
  ORCH --> CHAT
  ORCH --> AGT
  ORCH --> WF
  CHAT --> DOC
  CHAT --> VEC
  CHAT --> LLM
  DOC --> S3
  DOC --> PG
  ING --> EMB --> VEC
  ING --> OCR
  ING --> STT
  API --> IDP
  AGT --> SYS
  API --> AUD
  POL --> PG
  API --> RD
```

---

## 2. Stack recomendado por escenario

### MVP / PoC on-prem

| Capa | Opción preferida | Alternativa |
|------|------------------|-------------|
| Frontend | Next.js + TS | — |
| Backend | NestJS | Express solo si se necesita ultra-mínimo |
| DB | PostgreSQL | — |
| Cache / cola ligera | Redis | — |
| Objects | MinIO | S3 |
| Vectors | **PostgreSQL + pgvector** (D-013); Qdrant/Milvus si escala | Weaviate/Milvus |
| LLM | **Ollama `llama3.1:8b`** (D-018) / vLLM (prod) | llama.cpp, MLX (Apple) |
| Auth | **Keycloak local** (D-014); Entra/Google después | Auth0/Okta |
| Ingress | Nginx | Traefik |

### Enterprise scale

- Kubernetes
- Kafka (eventos de alto volumen)
- Vector DB dedicada (Qdrant/Milvus)
- vLLM + model routing
- Observabilidad (OpenTelemetry + Prometheus/Grafana)
- Secrets: Vault / cloud KMS

**No son obligatorias** todas las tecnologías del prompt maestro; se eligen por escenario.

---

## 3. Principio de selección de inteligencia

```mermaid
flowchart TD
  Q[Request] --> I[Clasificar tarea]
  I --> T1{¿Determinista / compliance?}
  T1 -->|Sí| RULES[Reglas / workflow]
  T1 -->|No| T2{¿Predicción / scoring?}
  T2 -->|Sí| ML[ML tradicional]
  T2 -->|No| T3{¿Documento / imagen / audio?}
  T3 -->|Doc| RAG[RAG + ACL]
  T3 -->|Img| CV[OCR / Vision]
  T3 -->|Audio| STT[STT → texto → RAG/WF]
  T3 -->|Lenguaje abierto| LLM[LLM]
  ML --> EXP[LLM explica con evidencia]
  RAG --> LLM
  RULES --> HITL{¿Acción crítica?}
  HITL -->|Sí| HUM[Aprobación humana]
  HITL -->|No| AUTO[Ejecutar automatización]
```

---

## 4. Despliegue A / B / C

```mermaid
flowchart TB
  subgraph OnPrem[A On-Premise]
    OP1[Cluster cliente]
    OP2[LLM local]
    OP3[Datos locales]
  end

  subgraph Private[B Private Cloud]
    PC1[Tenant dedicado Miranda/Cloud]
    PC2[Red aislada]
  end

  subgraph Hybrid[C Hybrid]
    HY1[Datos sensibles en cliente]
    HY2[Control plane / modelos no sensibles]
  end
```

| | On-Prem | Private Cloud | Hybrid |
|--|---------|---------------|--------|
| Seguridad percibida | Muy alta | Alta | Alta |
| Time-to-value | Más lento | Medio | Medio |
| Ops | Cliente + Miranda | Miranda managed | Compartido |
| Data residency | Total | Según región | Configurable |
| Mejor para | Regulados / air-gap | Mid-market enterprise | Transición gradual |

---

## 5. Límites del LLM en la arquitectura

El LLM puede:

- Generar lenguaje, resúmenes, borradores
- Explicar resultados de otras piezas
- Extraer campos con validación posterior

El LLM **no** puede:

- Decidir autorización
- Ejecutar acciones críticas sin workflow
- Inventar KPIs/estadísticas
- Saltar tenant o ACL

Implementación: Policy Engine + tool allowlists + retrieval filtrado + post-checks.

---

## 6. Paquetes MVP (contenedores lógicos)

1. `miranda-web`
2. `miranda-api`
3. `miranda-worker-ingest`
4. `miranda-llm` (o externo al compose)
5. `postgres`, `redis`, `minio`, `vector`

Detalle de compose/k8s: módulo M13.
