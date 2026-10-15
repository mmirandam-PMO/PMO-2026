const pmoData = {
  programas: [
    {
      nombre: "Banca Minorista",
      total_proyectos: 14,
      categorias: [
        {
          tipo: "Enfoque al Cliente & Canales · 14",
          proyectos: [
            { nombre: "Resolución de incidencias SPEI", responsable: "S. Olivero", estatus: "Planeado", destacado: "blue" },
            { nombre: "Excepción biométrica y biométrico dactilar - 2026", responsable: "S. Olivero", estatus: "Planeado", destacado: "blue" },
            { nombre: "Reingeniería IVR", responsable: "A. Nava", estatus: "En proceso" },
            { nombre: "Automatización proceso trxs POS", responsable: "A. Nava", estatus: "En proceso" },
            { nombre: "Reportes Control Central de Cuentas - Mesa de Control", responsable: "A. Nava", estatus: "En proceso" },
            { nombre: "Identificación de tipo de solicitudes de Control Central de Cuentas", responsable: "A. Nava", estatus: "En proceso" },
            { nombre: "Generación de tablero de resultados de Banca patrimonial", responsable: "C. Budar", estatus: "No planeado", destacado: "orange" },
            { nombre: "Optimización Apertura Cuenta Personas Físicas", responsable: "C. Budar", estatus: "En proceso" },
            { nombre: "Actualización y consulta de comprobantes de inversión", responsable: "C. Budar", estatus: "En proceso" },
            { nombre: "Estudios de mercado", responsable: "R. Flores", estatus: "En proceso" },
            { nombre: "Automatización de procesos (3 saws)", responsable: "A. Nava", estatus: "En proceso" },
            { nombre: "Vista Integral 360", responsable: "A. Nava", estatus: "En proceso" },
            { nombre: "Canal de soporte a Backoffice con Agente Numia", responsable: "A. Nava", estatus: "En proceso" },
            { nombre: "NPS", responsable: "A. Nava", estatus: "Planeado", destacado: "blue" }
          ]
        }
      ]
    },
    {
      nombre: "Regulatorios",
      total_proyectos: 12,
      categorias: [
        {
          tipo: "Control Interno y Riesgos · 12",
          proyectos: [
            { nombre: "Control de Cambios Proceso de Seguimiento Artículo 61", responsable: "A. Nava", estatus: "En proceso" },
            { nombre: "Consultoría en PCI DSS", responsable: "G. Hernández", estatus: "En proceso" },
            { nombre: "Reportes Regulatorios Reportware", responsable: "C. Budar", estatus: "En proceso" },
            { nombre: "Migración Campo c63 al c57", responsable: "A. Nava", estatus: "No planeado", destacado: "orange" },
            { nombre: "Nuevos requerimientos regulatorios", responsable: "--", estatus: "En proceso" },
            { nombre: "Monitor Plus", responsable: "C. Carreón", estatus: "En proceso" },
            { nombre: "Controles de Integridad de Software Core Bancario", responsable: "C. Carreón", estatus: "En proceso" },
            { nombre: "Actualización", responsable: "C. Carreón", estatus: "Planeado", destacado: "blue" },
            { nombre: "-3D Secure 2.0", responsable: "C. Carreón", estatus: "Planeado", destacado: "blue" },
            { nombre: "Implementación: PUI - Protocolo Alerta de Búsqueda", responsable: "C. Carreón", estatus: "En proceso" },
            { nombre: "DIMO", responsable: "C. Carreón", estatus: "En proceso" },
            { nombre: "CODI", responsable: "C. Carreón", estatus: "Planeado", destacado: "blue" }
          ]
        }
      ]
    },
    {
      nombre: "Banca Mayorista",
      total_proyectos: 7,
      subprogramas: [
        { 
          nombre: "Estrategias Comerciales", 
          responsables: ["C. Budar", "S. Olivero"], 
          proyectos: [
            { nombre: "Cuenta Rocket", responsable: "C. Budar", estatus: "En proceso" }, 
            { nombre: "• CRÉDITOS PYMES", responsable: "C. Budar", estatus: "No planeado", destacado: "muted" },
            { nombre: "• Cash Loans", responsable: "S. Olivero", estatus: "No planeado", destacado: "muted" }
          ] 
        },
        { 
          nombre: "Lazos y Alianzas", 
          responsables: ["A. Nava", "R. Cohen"], 
          proyectos: [
            { nombre: "Campaña Perimetral: WhatsApp + Salesforce", responsable: "A. Nava", estatus: "En proceso" },
            { nombre: "• Automatización Prog. Lazos", responsable: "A. Nava", estatus: "En proceso", destacado: "muted" },
            { nombre: "• Apertura de cuenta + Crédito", responsable: "R. Cohen", estatus: "En proceso", destacado: "muted" }
          ] 
        }
      ],
      transversales: [
        {
          tipo: "Líneas de Negocio Colectivas",
          proyectos: [
            { nombre: "Oferta Dinámica 2.0", responsable: "S. Olivero", estatus: "En proceso" }
          ]
        }
      ]
    },
    {
      nombre: "Hub de Innovación",
      total_proyectos: 2,
      categorias: [
        {
          tipo: "Nueva Generación Tecnológica · 2",
          proyectos: [
            { nombre: "Definición nvo stack tecnol para aplicaciones", responsable: "M. Matus", estatus: "En proceso" },
            { nombre: "Aplicación de Inversiones", responsable: "S. Olivero", estatus: "En proceso" }
          ]
        }
      ]
    },
    {
      nombre: "Carry-over 2026",
      total_proyectos: 9,
      categorias: [
        {
          tipo: "Actualización Tecnológica · 9",
          proyectos: [
            { nombre: "Upgrade S4 HANNA (E R P)", responsable: "C. Budar", estatus: "En proceso" },
            { nombre: "Herramientas IA", responsable: "M. Matus", estatus: "En proceso" },
            { nombre: "Implementación Middleware (Greenfield)", responsable: "M. Matus", estatus: "En proceso" },
            { nombre: "Robustecimiento BKAYA 2026", responsable: "M. Matus", estatus: "En proceso" },
            { nombre: "CRM Objetivo", responsable: "M. Matus", estatus: "En proceso" },
            { nombre: "Content Manager Objetivo (Filenet)", responsable: "M. Matus", estatus: "En proceso" },
            { nombre: "Migración a BAW en Contenedores", responsable: "M. Matus", estatus: "En proceso" },
            { nombre: "DR API CONNECT", responsable: "M. Matus", estatus: "En proceso" },
            { nombre: "Nuevo Core Bancario & Bca Empresarial", responsable: "M. Matus", estatus: "En proceso" }
          ]
        }
      ]
    }
  ]
};