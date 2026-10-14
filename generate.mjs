import fs from 'fs';

// DATOS INCRUSTADOS DE TUS 6 CLASIFICACIONES NUEVAS
const data = {
  "programas": [
    {
      "nombre": "Actualización Tecnológica",
      "total_proyectos": 9,
      "proyectos": [
        {"nombre": "Upgrade S4 HANNA (E R P)", "responsable": "C. Budar"},
        {"nombre": "Herramientas IA", "responsable": "M. Matus"},
        {"nombre": "Implementación Middleware (Greenfield)", "responsable": "M. Matus"},
        {"nombre": "Robustecimiento BKAYA 2026", "responsable": "M. Matus"},
        {"nombre": "CRM Objetivo", "responsable": "M. Matus"},
        {"nombre": "Content Manager Objetivo (Filenet)", "responsable": "M. Matus"},
        {"nombre": "Migración a BAW en Contenedores", "responsable": "M. Matus"},
        {"nombre": "DR API CONNECT", "responsable": "M. Matus"},
        {"nombre": "Nuevo Core Bancario & Bca Empresarial", "responsable": "M. Matus"}
      ]
    },
    {
      "nombre": "Control Interno y Riesgos",
      "total_proyectos": 12,
      "proyectos": [
        {"nombre": "Control de Cambios Proceso de Seguimiento Articulo 61", "responsable": "A. Nava"},
        {"nombre": "Consultoría en PCI DSS", "responsable": "G. Hernández"},
        {"nombre": "Reportes Regulatorios Reportware", "responsable": "C. Budar"},
        {"nombre": "Migración Campo c63 al c57", "responsable": "A. Nava"},
        {"nombre": "Nuevos requerimientos regulatorios", "responsable": ""},
        {"nombre": "Monitor Plus", "responsable": "C. Carreón"},
        {"nombre": "Controles de Integridad de Software Core Bancario", "responsable": "C. Carreón"},
        {"nombre": "Actualización", "responsable": "C. Carreón"},
        {"nombre": "-3D Secure 2.0", "responsable": "C. Carreón"},
        {"nombre": "Implementación: PUI - Protocolo de Alerta Nacional", "responsable": "C.Carreón"},
        {"nombre": "DIMO", "responsable": "C. Carreón"},
        {"nombre": "CODI", "responsable": "C. Carreón"}
      ]
    },
    {
      "nombre": "Enfoque al Cliente",
      "total_proyectos": 14,
      "proyectos": [
        {"nombre": "Resolucion de incidencias SPEI", "responsable": "S. Olivero"},
        {"nombre": "Excepción biométrica y biométrico dactilar - 2026", "responsable": "S. Olivero"},
        {"nombre": "Reingeniería IVR", "responsable": "A. Nava"},
        {"nombre": "Automatización proceso trxs POS", "responsable": "A. Nava"},
        {"nombre": "Reportes Control Central de Cuentas - Mesa de Control", "responsable": "A. Nava"},
        {"nombre": "Identificación de tipo de solicitudes de Control Central", "responsable": "A. Nava"},
        {"nombre": "Generación de tablero de resultados de Banca patrimonial", "responsable": "C. Budar"},
        {"nombre": "Optimizacion Apertura Cuenta Personas Fisicas", "responsable": "C. Budar"},
        {"nombre": "Actualización y consulta de comprobantes de inversión", "responsable": "C. Budar"},
        {"nombre": "Estudios de mercado", "responsable": "R. Flores"},
        {"nombre": "Automatización de procesos (3 sows)", "responsable": "A. Nava"},
        {"nombre": "Vista Integral 360", "responsable": "A. Nava"},
        {"nombre": "Canal de soporte a Backoffice con Agente Numia", "responsable": "A. Nava"},
        {"nombre": "NPS", "responsable": "A. Nava"}
      ]
    },
    {
      "nombre": "Estrategias de Negocio",
      "total_proyectos": 3,
      "proyectos": [
        {"nombre": "Cuenta Rocket", "responsable": "C. Budar"},
        {"nombre": "CRÉDITOS PYMES", "responsable": "C. Budar"},
        {"nombre": "Cash Loans", "responsable": "S. Olivero"}
      ]
    },
    {
      "nombre": "Nueva Generación de",
      "total_proyectos": 3,
      "proyectos": [
        {"nombre": "Oferta Dinamica 2.0", "responsable": "S. Olivero"},
        {"nombre": "Definición nvo stack tecnol para nueva generación", "responsable": "M. Matus"},
        {"nombre": "Aplicación de Inversiones", "responsable": "S. Olivero"}
      ]
    },
    {
      "nombre": "Programa Lazos",
      "total_proyectos": 3,
      "proyectos": [
        {"nombre": "Campaña Perimetral: Trazabilidad WhatsApp", "responsable": "A. Nava"},
        {"nombre": "Automatización Programa Lazos", "responsable": "A. Nava"},
        {"nombre": "Apertura de cuenta + Crédito", "responsable": "R. Cohen"}
      ]
    }
  ]
};

const prog = n => data.programas.find(p => p.nombre === n);

// ---------- Medidas del Tablero ----------
const W = 1200, M = 30, GAP = 24;
const COL = (W - 2 * M - 2 * GAP) / 3;
const CHAR = 7.5;            
const LINE = 22;             
const ROW_GAP = 6;
const OWNER_GAP = 20;        
const PAD = 14;

const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function wrap(text, max) {
  const words = text.split(' '); const lines = []; let cur = '';
  for (const w of words) {
    if ((cur + ' ' + w).trim().length > max && cur) { lines.push(cur); cur = w; }
    else cur = (cur + ' ' + w).trim();
  }
  if (cur) lines.push(cur);
  return lines;
}

function row(x, y, name, owner, ownerColor) {
  const tbd = !owner || owner === 'TBD' || owner === '';
  const ownerW = tbd ? 0 : owner.length * 8.5;
  const avail = COL - 2 * PAD - ownerW - (tbd ? 0 : OWNER_GAP);
  const lines = wrap(name, Math.floor(avail / CHAR));
  const h = Math.max(42, lines.length * LINE + 16);
  const top = y + (h - (lines.length - 1) * LINE) / 2 - 2;
  let s = `<rect x="${x}" y="${y}" width="${COL}" height="${h}" rx="6" fill="#F5F7FA" stroke="#E1E4E8" stroke-width="1"/>`;
  lines.forEach((l, i) => {
    s += `<text x="${x + PAD}" y="${top + i * LINE}" font-size="14" font-weight="500" fill="#24292F">${esc(l)}</text>`;
  });
  if (!tbd) {
    s += `<text x="${x + COL - PAD}" y="${y + h / 2 + 5}" font-size="13" font-weight="700" text-anchor="end" fill="${ownerColor}">${esc(owner)}</text>`;
  }
  return { svg: s, h };
}

function header(x, y, title, count, bg) {
  return `<rect x="${x}" y="${y}" width="${COL}" height="48" rx="8" fill="${bg}"/>` +
    `<text x="${x + 16}" y="${y + 29}" font-size="16" font-weight="700" fill="#FFFFFF">${esc(title)}</text>` +
    `<text x="${x + COL - 16}" y="${y + 29}" font-size="16" font-weight="700" text-anchor="end" fill="#FFFFFF">${count}</text>`;
}

function section(x, y, rows, ownerColor) {
  let cy = y;
  let s = '';
  for (const [name, owner] of rows) {
    const r = row(x, cy, name, owner, ownerColor);
    s += r.svg; cy += r.h + ROW_GAP;
  }
  return { svg: s, y: cy };
}

const getProyectos = (p) => p ? p.proyectos.map(q => [q.nombre, q.responsable]) : [];
const X = i => M + i * (COL + GAP);
const TOP = 24;
let out = '';

// ==================== FILA 1 DE COLUMNAS ====================
const actTec = prog('Actualización Tecnológica');
out += header(X(0), TOP, '⚙️  Actualización Tecnológica', actTec ? actTec.total_proyectos : 0, '#4A90E2');
let c1 = section(X(0), TOP + 60, getProyectos(actTec), '#4A90E2');
out += c1.svg;

const ctrlInt = prog('Control Interno y Riesgos');
out += header(X(1), TOP, '🛡️  Control Interno y Riesgos', ctrlInt ? ctrlInt.total_proyectos : 0, '#A04000');
let c2 = section(X(1), TOP + 60, getProyectos(ctrlInt), '#A04000');
out += c2.svg;

const enfCli = prog('Enfoque al Cliente');
out += header(X(2), TOP, '👥  Enfoque al Cliente', enfCli ? enfCli.total_proyectos : 0, '#1F3A60');
let c3 = section(X(2), TOP + 60, getProyectos(enfCli), '#1F3A60');
out += c3.svg;

// ==================== FILA 2 DE COLUMNAS ====================
const Y2 = Math.max(c1.y, c2.y, c3.y) + 30;

const estNeg = prog('Estrategias de Negocio');
out += header(X(0), Y2, '📈  Estrategias de Negocio', estNeg ? estNeg.total_proyectos : 0, '#D35400');
let c4 = section(X(0), Y2 + 60, getProyectos(estNeg), '#D35400');
out += c4.svg;

const nvaGen = prog('Nueva Generación de');
out += header(X(1), Y2, '🚀  Nueva Generación', nvaGen ? nvaGen.total_proyectos : 0, '#27AE60');
let c5 = section(X(1), Y2 + 60, getProyectos(nvaGen), '#27AE60');
out += c5.svg;

const progLaz = prog('Programa Lazos');
out += header(X(2), Y2, '🤝  Programa Lazos', progLaz ? progLaz.total_proyectos : 0, '#8E44AD');
let c6 = section(X(2), Y2 + 60, getProyectos(progLaz), '#8E44AD');
out += c6.svg;

// ---------- Render e Impresión Final ----------
const H = Math.max(c4.y, c5.y, c6.y) + 30;
const svg = `<svg xmlns="http://w3.org" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" font-family="-apple-system, 'Segoe UI', Helvetica, Arial, sans-serif">
<rect width="${W}" height="${H}" fill="#FFFFFF"/>
${out}
</svg>`;

fs.writeFileSync('portafolio.svg', svg);
