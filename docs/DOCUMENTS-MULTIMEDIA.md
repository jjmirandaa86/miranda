# Documentos y multimedia

IDs: `F-DOC-*`, `F-AI-003/004`

---

## 1. Tipos de contenido

PDF · DOCX · XLSX · CSV · PPTX · imágenes · audio · video · emails · contratos · planos · manuales · grabaciones · docs técnicos

---

## 2. Metadatos mínimos

```text
archivo: Contrato_Cliente_ABC.pdf
empresa, departamento, uploader, owner, fecha
tipo_documento, cliente, proyecto, país, sucursal
confidentiality, clasificación, etiquetas, estado
expiración, versión, permisos/ACL
```

### Clasificación

`PUBLIC` → `INTERNAL` → `CONFIDENTIAL` → `RESTRICTED` → `HIGHLY CONFIDENTIAL`

Los permisos se heredan de Empresa → Departamento → Equipo → Proyecto → Usuario, con **override** explícito.

```mermaid
flowchart TD
  E[Empresa ACL] --> D[Departamento ACL]
  D --> T[Equipo / Proyecto ACL]
  T --> DOC[Documento]
  U[Override explícito] --> DOC
  DOC --> EFF[ACL efectiva]
```

---

## 3. Pipeline multimodal

### Video de reunión

```mermaid
flowchart LR
  V[Video] --> STT[Transcripción]
  STT --> NER[Participantes / fechas]
  NER --> SUM[Resumen]
  SUM --> DEC[Decisiones]
  DEC --> TASK[Tareas / checklist]
  TASK --> STORE[Guardar bajo ACL del contexto]
```

### Imagen de factura

```mermaid
flowchart LR
  IMG[Imagen] --> OCR[OCR / Vision]
  OCR --> EXT[Proveedor, monto, impuestos]
  EXT --> DUP[Chequeo duplicados]
  DUP --> WF[Enviar a aprobación]
```

Todo el output hereda la ACL del contenedor (proyecto/departamento) salvo política más restrictiva detectada.
