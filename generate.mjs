import fs from 'fs';

const data = JSON.parse(fs.readFileSync('./proyectos.txt', 'utf-8'));
const prog = n => data.programas.find(p => p.nombre === n);

// ---------- Medidas ----------
const W = 1200, M = 30, GAP = 24;
const COL = (W - 2 * M - 2 * GAP) / 3;
const CHAR = 8.2;            
const LINE = 21;             
const ROW_GAP = 5;
const OWNER_GAP = 28;        
const PAD = 16;

const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// Colores de texto destacados (Opcional - Estilo Visual)
const RED = '#C0392B', ORANGE = '#D35400', BLUE = '#2980B9';
const highlight = {
  'Upgrade S4 HANNA': RED, 'Cuenta Rocket': ORANGE, 'Reingeniería IVR': ORANGE,
};
const nameColor = n => {
  const k = Object.keys(highlight).find(k => n.startsWith(k));
  return k ? highlight[k] : '#24292F';
};

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
  const ownerW = tbd ? 0 : owner.length * 8.6;
  const avail = COL - 2 * PAD - ownerW - (tbd ? 0 : OWNER_GAP);
  const lines = wrap(name, Math.floor(avail / CHAR));
  const h = lines.length * LINE + 22;
  const color = name.startsWith('•') ? '#7F8C8D' : nameColor(name);
  const top = y + (h - lines.length * LINE) / 2 + 15;
  let s = `<rect x="${x}" y="${y}" width="${COL}" height="${h}" rx="5" fill="#F5F7FA"/>`;
  lines.forEach((l, i) => {
    s += `<text x="${x + PAD}" y="${top + i * LINE}" font-size="16" fill="${color}">${esc(l)}</text>`;
  });
  if (!tbd) s += `<text x="${x + COL - PAD}" y="${y + h / 2 + 5}" font-size="14" font-weight="700" text-anchor="end" fill="${ownerColor}">${esc(owner)}</text>`;
  return { svg: s, h };
}

function header(x, y, title, count, bg, fg = '#FFFFFF') {
  return `<rect x="${x}" y="${y}" width="${COL}" height="46" rx="7" fill="${bg}"/>` +
    `<text x="${x + 16}" y="${y + 30}" font-size="19" font-weight="700" fill="${fg}">${esc(title)}</text>` +
    `<text x="${x + COL - 16}" y="${y + 30}" font-size="19" font-weight="700" text-anchor="end" fill="${fg}">${count}</text>`;
}

function section(x, y, label, count, rows, ownerColor) {
  let s = `<text x="${x}" y="${y + 17}" font-size="17" font-weight="700" fill="#24292F">${esc(label)}` +
    (count != null ? `<tspan font-weight="400" fill="#777777" dx="7">• ${count}</tspan>` : '') + `</text>`;
  s += `<line x1="${x}" y1="${y + 28}" x2="${x + COL}" y2="${y + 28}" stroke="#E1E4E8" stroke-width="1"/>`;
  let cy = y + 40;
  for (const [name, owner] of rows) {
    const r = row(x, cy, name, owner, ownerColor);
    s += r.svg; cy += r.h + ROW_GAP;
  }
  return { svg: s, y: cy + 20 };
}

const cat = (p, tipo) => {
  if (!p || !p.categorias) return [];
  const c = p.categorias.find(c => c.tipo === tipo);
  return c ? c.proyectos.map(q => [q.nombre, q.responsable]) : [];
};

const X = i => M + i * (COL + GAP);
const TOP = 24;
let out = '';

// ==================== FILA 1 DE COLUMNAS ====================
// Columna 1: Actualización Tecnológica
const actTec = prog('Actualización Tecnológica');
out += header(X(0), TOP, '⚙️ Actualización Tecnológica', actTec ? actTec.total_proyectos : 0, '#4A90E2');
let c1 = section(X(0), TOP + 64, 'Proyectos', null, cat(actTec, 'Todos'), '#4A90E2');
out += c1.svg;

// Columna 2: Control Interno y Riesgos
const ctrlInt = prog('Control Interno y Riesgos');
out += header(X(1), TOP, '🛡️ Control Interno y Riesgos', ctrlInt ? ctrlInt.total_proyectos : 0, '#A04000');
let c2 = section(X(1), TOP + 64, 'Proyectos', null, cat(ctrlInt, 'Todos'), '#A04000');
out += c2.svg;

// Columna 3: Enfoque al Cliente
const enfCli = prog('Enfoque al Cliente');
out += header(X(2), TOP, '👥 Enfoque al Cliente', enfCli ? enfCli.total_proyectos : 0, '#1F3A60');
let c3 = section(X(2), TOP + 64, 'Proyectos', null, cat(enfCli, 'Todos'), '#1F3A60');
out += c3.svg;

// ==================== FILA 2 DE COLUMNAS ====================
const Y2 = Math.max(c1.y, c2.y, c3.y) + 20;

// Columna 4: Estrategias de Negocio
const estNeg = prog('Estrategias de Negocio');
out += header(X(0), Y2, '📈 Estrategias de Negocio', estNeg ? estNeg.total_proyectos : 0, '#D35400');
let c4 = section(X(0), Y2 + 64, 'Proyectos', null, cat(estNeg, 'Todos'), '#D35400');
out += c4.svg;

// Columna 5: Nueva Generación de
const nvaGen = prog('Nueva Generación de');
out += header(X(1), Y2, '🚀 Nueva Generación', nvaGen ? nvaGen.total_proyectos : 0, '#27AE60');
let c5 = section(X(1), Y2 + 64, 'Proyectos', null, cat(nvaGen, 'Todos'), '#27AE60');
out += c5.svg;

// Columna 6: Programa Lazos
const progLaz = prog('Programa Lazos');
out += header(X(2), Y2, '🤝 Programa Lazos', progLaz ? progLaz.total_proyectos : 0, '#8E44AD');
let c6 = section(X(2), Y2 + 64, 'Proyectos', null, cat(progLaz, 'Todos'), '#8E44AD');
out += c6.svg;

// ---------- Render Final del SVG ----------
const H = Math.max(c4.y, c5.y, c6.y) + 30;
const svg = `<svg xmlns="http://w3.org" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" font-family="-apple-system, 'Segoe UI', Helvetica, Arial, sans-serif">
<rect width="${W}" height="${H}" fill="#FFFFFF"/>
${out}
</svg>`;

fs.writeFileSync('portafolio.svg', svg);
console.log('Nuevo portafolio.svg generado con éxito!', W, 'x', H);
