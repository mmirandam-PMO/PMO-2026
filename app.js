function getProjectColor(q) {
  if (q.destacado === 'muted') return '#7F8C8D';
  if (q.destacado === 'blue') return '#1B355D';
  if (q.destacado === 'orange') return '#D35400';
  return '#24292F';
}

function getProgEmoji(name) {
  if (name.includes('Tecnológica')) return '💻';
  if (name.includes('Riesgos')) return '🛡️';
  if (name.includes('Cliente')) return '👥';
  if (name.includes('Negocio')) return '📈';
  if (name.includes('Generación')) return '🔘';
  return '🤝';
}

function buildProjectRows(proyectos, term) {
  let html = '';
  let matches = 0;

  proyectos.forEach(q => {
    const nameMatch = q.nombre.toLowerCase().includes(term);
    const ownerMatch = q.responsable.toLowerCase().includes(term);
    const statusMatch = q.estatus ? q.estatus.toLowerCase().includes(term) : false;

    if (nameMatch || ownerMatch || statusMatch) {
      matches++;
      const isTbd = !q.responsable || q.responsable === 'TBD' || q.responsable === '--';
      const statusClass = q.estatus ? q.estatus.toLowerCase().replace(/\s+/g, '-') : 'tbd';

      html += `
        <div class="proj-row">
          <span class="proj-name" style="color: ${getProjectColor(q)}">${q.nombre}</span>
          <div class="proj-meta">
            <span class="status-badge ${statusClass}">${q.estatus || 'TBD'}</span>
            <span class="proj-owner ${isTbd ? 'tbd' : ''}">${q.responsable}</span>
          </div>
        </div>
      `;
    }
  });

  return { html, matches };
}

function render() {
  const col1 = document.getElementById('col-1');
  const col2 = document.getElementById('col-2');
  const col3 = document.getElementById('col-3');
  
  if (!col1 || !col2 || !col3) return;
  
  col1.innerHTML = ''; col2.innerHTML = ''; col3.innerHTML = '';
  const term = document.getElementById('search-input').value.toLowerCase().trim();
  const findProg = name => pmoData.programas.find(p => p.nombre === name);

  // Columna 1
  const prog1 = findProg('Actualización Tecnológica');
  if (prog1) inyectarCard(prog1, term, col1, 'header-tecnologica');

  const prog6 = findProg('Programa Lazos');
  if (prog6) inyectarCard(prog6, term, col1, 'header-lazos');

  // Columna 2
  const prog2 = findProg('Control Interno y Riesgos');
  if (prog2) inyectarCard(prog2, term, col2, 'header-riesgos');

  const prog4 = findProg('Estrategias de Negocio');
  if (prog4) inyectarCard(prog4, term, col2, 'header-negocio');

  // Columna 3
  const prog3 = findProg('Enfoque al Cliente');
  if (prog3) inyectarCard(prog3, term, col3, 'header-cliente');

  const prog5 = findProg('Nueva Generación de');
  if (prog5) inyectarCard(prog5, term, col3, 'header-hub');
}

function inyectarCard(prog, term, columna, claseEstilo) {
  let cardHtml = `<div class="card ${claseEstilo}"><div class="card-head"><h2>${getProgEmoji(prog.nombre)} ${prog.nombre}</h2><span class="badge">${prog.total_proyectos}</span></div>`;
  prog.categorias.forEach(c => {
    const res = buildProjectRows(c.proyectos, term);
    if (res.matches > 0 || term === '') {
      cardHtml += `<div class="section-area"><div class="section-info"><span class="section-title">${c.tipo}</span></div><div class="proj-list">${res.html}</div></div>`;
    }
  });
  cardHtml += `</div>`;
  columna.appendChild(document.createRange().createContextualFragment(cardHtml));
}

document.getElementById('search-input').addEventListener('input', render);
window.addEventListener('DOMContentLoaded', render);