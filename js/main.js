/* Datos mock: reemplazar por respuestas de Firebase/Node cuando exista backend. */
const img = (name) => `assets/img/${name}`;
const songLibrary = {
  'noche de fiesta': 'https://open.spotify.com/track/3n3Ppam7vgaVa1iaRUc9Lp',
  'recuerdos de promo': 'https://open.spotify.com/track/6habFhsOp2NvshLv26DqMb',
  'viaje y amigos': 'https://open.spotify.com/track/2takcwOaAZWiXQijPHIx7B',
  'la última fila': 'https://open.spotify.com/track/7ouMYWpwJ422jRcDASZB7P'
};
function getSongUrl(value) {
  if (!value) return '';
  const trimmed = value.trim();
  if (!trimmed) return '';
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return songLibrary[trimmed.toLowerCase()] || '';
}
const data = {
  schools: [
    { id: 1, name: 'Instituto Técnico Salesiano Villada', city: 'Córdoba', province: 'Córdoba', posts: 48, image: 'pexels-koolshooters-6982443.jpg', dinner: '15 de noviembre de 2026', spotify: 'https://open.spotify.com/', description: 'Una promo cordobesa que transforma cada encuentro en un recuerdo para siempre.' },
    { id: 2, name: 'Colegio Nacional de Monserrat', city: 'Córdoba', province: 'Córdoba', posts: 62, image: 'pexels-nicolasflor-37200651.jpg', dinner: '21 de noviembre de 2026', spotify: 'https://open.spotify.com/', description: 'Historias, viajes y celebraciones de la promoción 2026 en la ciudad de Córdoba.' },
    { id: 3, name: 'Instituto Nuestra Señora del Huerto', city: 'Córdoba', province: 'Córdoba', posts: 35, image: 'pexels-zachtheshoota-4307128.jpg', dinner: '28 de noviembre de 2026', spotify: 'https://open.spotify.com/', description: 'La comunidad que nos acompañó durante todo el secundario.' },
    { id: 4, name: 'Colegio La Salle', city: 'Córdoba', province: 'Córdoba', posts: 41, image: 'pexels-davincidelasfotos-20716167.jpg', dinner: '6 de diciembre de 2026', spotify: 'https://open.spotify.com/', description: 'La previa, el viaje y la cena: todos nuestros momentos en un solo lugar.' },
    { id: 5, name: 'Instituto Parroquial Cristo Redentor', city: 'Villa Carlos Paz', province: 'Córdoba', posts: 27, image: 'pexels-holodna-21579377.jpg', dinner: '13 de noviembre de 2026', spotify: 'https://open.spotify.com/', description: 'Una promoción serrana con ganas de hacer historia.' },
    { id: 6, name: 'Colegio Santo Tomás', city: 'Río Cuarto', province: 'Córdoba', posts: 53, image: 'pexels-meetjoeblack-28365587.jpg', dinner: '5 de diciembre de 2026', spotify: 'https://open.spotify.com/', description: 'A un paso de la última fila, pero al frente de cada recuerdo.' }
  ],
  cities: [
    { name: 'Córdoba', province: 'Córdoba', image: 'pexels-maorattias-5192307.jpg', events: 14 },
    { name: 'Villa Carlos Paz', province: 'Córdoba', image: 'pexels-nicolasflor-37200651.jpg', events: 11 },
    { name: 'Río Cuarto', province: 'Córdoba', image: 'pexels-lukas-kosc-525097851-16766917.jpg', events: 9 },
    { name: 'Alta Gracia', province: 'Córdoba', image: 'pexels-anat-landa-2162599192-38446274.jpg', events: 8 },
    { name: 'Villa María', province: 'Córdoba', image: 'pexels-zachtheshoota-4307128.jpg', events: 7 },
    { name: 'Jesús María', province: 'Córdoba', image: 'pexels-holodna-21579377.jpg', events: 6 }
  ],
  events: [
    { type: 'Viajes', title: 'Última noche en Bariloche', date: '18 Jul 2026', school: 'Instituto Técnico Salesiano Villada', city: 'Córdoba', image: 'pexels-anat-landa-2162599192-38446274.jpg' },
    { type: 'Viajes', title: 'Previa del viaje de egresados', date: '14 Jul 2026', school: 'Colegio La Salle', city: 'Córdoba', image: 'pexels-holodna-21579377.jpg' },
    { type: 'Cena de egresados', title: 'Cena de la Promo 26', date: '15 Nov 2026', school: 'Instituto Técnico Salesiano Villada', city: 'Córdoba', image: 'pexels-koolshooters-6982443.jpg' },
    { type: 'Cena de egresados', title: 'Noche de gala', date: '21 Nov 2026', school: 'Colegio Nacional de Monserrat', city: 'Córdoba', image: 'pexels-davincidelasfotos-20716167.jpg' },
    { type: 'UPD', title: 'El último primer día', date: '2 Mar 2026', school: 'Colegio Santo Tomás', city: 'Río Cuarto', image: 'img-rosa-humo-porta.jpg' },
    { type: 'Fiestas', title: 'Fiesta de disfraces', date: '30 Oct 2026', school: 'Instituto Nuestra Señora del Huerto', city: 'Córdoba', image: 'pexels-marwen-larafa-2159807713-36606989.jpg' },
    { type: 'Viaje educativo', title: 'Misión Sierras Grandes', date: '4 Sep 2026', school: 'Instituto Parroquial Cristo Redentor', city: 'Villa Carlos Paz', image: 'pexels-maorattias-5192307.jpg' }
  ]
};
const provinces = ['Buenos Aires','Catamarca','Chaco','Chubut','Ciudad Autónoma de Buenos Aires','Córdoba','Corrientes','Entre Ríos','Formosa','Jujuy','La Pampa','La Rioja','Mendoza','Misiones','Neuquén','Río Negro','Salta','San Juan','San Luis','Santa Cruz','Santa Fe','Santiago del Estero','Tierra del Fuego','Tucumán'];
let slideIndex = 0;
let userPosts = [];
try {
  const storedPosts = JSON.parse(localStorage.getItem('ultimaFilaPosts')) || [];
  userPosts = Array.isArray(storedPosts)
    ? storedPosts.map((post, index) => ({ ...post, id: post.id || `legacy-${Date.now()}-${index}` }))
    : [];
  localStorage.setItem('ultimaFilaPosts', JSON.stringify(userPosts));
} catch { userPosts = []; }

const pageContent = document.getElementById('pageContent');
const modalBackdrop = document.getElementById('modalBackdrop');
const modalContent = document.getElementById('modalContent');

function showToast(message) { const toast = document.getElementById('toast'); toast.textContent = message; toast.classList.add('show'); setTimeout(() => toast.classList.remove('show'), 3200); }
function ensurePostIds() {
  let changed = false;
  userPosts = userPosts.map((post, index) => {
    if (post.id) return post;
    changed = true;
    return { ...post, id: `post-${Date.now()}-${index}` };
  });
  if (changed) localStorage.setItem('ultimaFilaPosts', JSON.stringify(userPosts));
}
function isVideoSrc(src) { return typeof src === 'string' && src.startsWith('data:video'); }
function schoolCard(school) { return `<article class="card"><img class="school-image" src="${img(school.image)}" alt="${school.name}"><div class="card-body"><h3>${school.name}</h3><p>⌖ ${school.city}, ${school.province}</p></div><div class="card-footer"><span>${school.posts} publicaciones</span><button class="text-button" data-school="${school.id}">Ver perfil →</button></div></article>`; }
function eventCard(event) { return `<article class="card"><img class="event-image" src="${img(event.image)}" alt="${event.title}"><div class="card-body"><h3>${event.title}</h3><p>${event.school}</p><div class="event-meta"><span class="chip">${event.date}</span><span class="chip">${event.city}</span></div></div></article>`; }
function profilePostCard(post) {
  const images = (post.images && post.images.length) ? post.images : [post.image];
  const layout = post.layout || 'grid';
  const layoutClass = `layout-${layout}`;
  const media = images.map((src, index) => {
    const heroClass = layout === 'hero' && index === 0 ? ' class="hero-image"' : '';
    return isVideoSrc(src) ? `<video src="${src}" controls${heroClass}></video>` : `<img src="${src}" alt="${post.title}"${heroClass}>`;
  }).join('');
  const audioBlock = post.music ? renderAudioBlock(post.music) : '';
  const songLabel = post.songName ? `<p class="post-song-label">🎵 ${post.songName}</p>` : '';
  return `<article class="card post-card ${layoutClass}"><div class="post-header"><div><h3>${post.title}</h3><p>${post.location || 'Sin ubicación'} · ${post.type || 'Evento'}</p></div><button class="icon-button" data-delete-post="${post.id}" aria-label="Eliminar publicación">🗑️</button></div><div class="event-meta"><span class="chip">${post.date || 'Sin fecha'}</span><span class="chip">${post.music ? 'Música incluida' : 'Sin música'}</span></div><div class="post-media-grid">${media}</div><p class="post-description">${post.description || ''}</p>${songLabel}${audioBlock}</article>`;
}

function renderAudioBlock(musicUrl) {
  if (!musicUrl) return '';
  const resolvedUrl = getSongUrl(musicUrl);
  if (!resolvedUrl) {
    return `<div class="post-audio-wrapper"><p class="post-audio-fallback">La canción <strong>${musicUrl}</strong> se guardó, pero no se puede reproducir directamente. Seleccioná una canción conocida o agregá un enlace válido.</p></div>`;
  }
  const url = resolvedUrl;
  const spotifyMatch = url.match(/open\.spotify\.com\/(track|album|playlist)\/([A-Za-z0-9]+)(?:\?.*)?$/);
  if (spotifyMatch) {
    return `<div class="post-audio-wrapper"><iframe class="post-audio-iframe" src="https://open.spotify.com/embed/${spotifyMatch[1]}/${spotifyMatch[2]}" width="100%" height="100" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" allowtransparency="true"></iframe></div>`;
  }
  const audioExt = url.split('.').pop().split('?')[0].toLowerCase();
  if (['mp3','ogg','wav','m4a','aac'].includes(audioExt)) {
    return `<div class="post-audio-wrapper"><audio controls preload="none" class="post-audio" src="${url}">Tu navegador no admite este audio.</audio></div>`;
  }
  return `<div class="post-audio-wrapper"><p class="post-audio-fallback">No se puede reproducir este enlace dentro de la página. <a href="${url}" target="_blank" rel="noopener">Abrir enlace</a></p></div>`;
}

function homePage() {
  const recentPosts = userPosts.slice(0, 3);
  const recentSection = recentPosts.length ? `<section class="recent-section"><div class="page-heading"><div><p class="eyebrow">De tu perfil</p><h1>Tus últimos recuerdos</h1><p>Estas publicaciones se recuperan automáticamente cada vez que abrís la página.</p></div><button class="secondary-button" data-page="perfil">Ver mi galería</button></div><div class="grid">${recentPosts.map(post => `<article class="card">${isVideoSrc(post.image) ? `<video class="event-image" src="${post.image}" muted playsinline></video>` : `<img class="event-image" src="${post.image}" alt="${post.title}">`}<div class="card-body"><h3>${post.title}</h3><p>${post.description || 'Un nuevo recuerdo de la Promo 2026.'}</p><div class="event-meta"><span class="chip">${post.date || 'Sin fecha'}</span></div></div></article>`).join('')}</div></section>` : '';
  return `<section><div class="page-heading"><div><p class="eyebrow">Tu último año, tu historia</p><h1>Momentos que quedan para siempre.</h1></div><p>Descubrí y compartí las historias que hacen única a cada promoción.</p></div><section class="spotify-bar"><div class="spotify-cover">♪</div><div><b>Tu banda sonora de la promo</b><p>Conectá tu cuenta y sumá tus canciones favoritas a cada recuerdo.</p></div><button class="primary-button" id="spotifyConnect">Conectar con Spotify</button></section><section class="hero-carousel" aria-label="Carrusel de recuerdos"><article class="slide active" style="background-image:url('${img('pexels-marwen-larafa-2159807713-36606989.jpg')}')"><div class="slide-content"><p class="eyebrow">#PROMO2026</p><h2>Reviví tus<br>recuerdos</h2><p>La fiesta de egresados más grande, plasmada en fotos y videos que te acompañan siempre.</p><button class="primary-button" data-page="eventos">Explorar recuerdos</button></div></article><article class="slide" style="background-image:url('${img('img-rosa-humo-porta.jpg')}')"><div class="slide-content"><p class="eyebrow">EVENTOS ÚNICOS</p><h2>La noche es<br>de ustedes</h2><p>Encontrá las celebraciones, cenas y fiestas que están haciendo historia.</p><button class="primary-button" data-page="eventos">Ver eventos</button></div></article><article class="slide" style="background-image:url('${img('pexels-anat-landa-2162599192-38446274.jpg')}')"><div class="slide-content"><p class="eyebrow">DESTINOS</p><h2>Viajes que<br>nos unen</h2><p>Desde Bariloche hasta cada escapada: guardá el viaje de tu vida.</p><button class="primary-button" data-page="ciudades">Explorar destinos</button></div></article><button class="carousel-arrow prev" aria-label="Imagen anterior">‹</button><button class="carousel-arrow next" aria-label="Imagen siguiente">›</button><div class="carousel-dots"><button class="dot active" data-slide="0"></button><button class="dot" data-slide="1"></button><button class="dot" data-slide="2"></button></div></section>${recentSection}</section>`;
}
function collegesPage() { return `<section><div class="page-heading"><div><p class="eyebrow">Comunidad</p><h1>Colegios</h1><p>Encontrá a tu colegio y conocé las historias de otras promociones.</p></div><button class="secondary-button" id="clearFilters">Limpiar filtros</button></div><div class="filters"><input id="schoolSearch" class="field" placeholder="Buscar por nombre de colegio"><select id="provinceFilter" class="field"><option value="">Todas las provincias</option>${provinces.map(p => `<option>${p}</option>`).join('')}</select><select id="cityFilter" class="field"><option value="">Todas las ciudades</option></select></div><div class="grid" id="schoolGrid">${data.schools.map(schoolCard).join('')}</div></section>`; }
function citiesPage(city) { const list = city ? data.events.filter(e => e.city === city.name) : data.cities; const heading = city ? `Eventos en ${city.name}` : 'Ciudades'; return `<section><div class="page-heading"><div><p class="eyebrow">Explorá Argentina</p><h1>${heading}</h1><p>${city ? `Todo lo que está pasando en ${city.name}, sin importar el colegio.` : 'Cada ciudad tiene una historia y una noche inolvidable para compartir.'}</p></div>${city ? '<button class="secondary-button" data-page="ciudades">← Todas las ciudades</button>' : ''}</div>${city ? `<div class="grid">${list.length ? list.map(eventCard).join('') : '<div class="empty">Todavía no hay eventos publicados en esta ciudad.</div>'}</div>` : `<div class="grid">${data.cities.map(c => `<button class="card city-card" data-city="${c.name}"><img src="${img(c.image)}" alt="${c.name}"><div><h3>${c.name}</h3><p>${c.province} · ${c.events} eventos disponibles</p></div></button>`).join('')}</div>`}</section>`; }
function eventsPage() { const types = [...new Set(data.events.map(event => event.type))]; return `<section><div class="page-heading"><div><p class="eyebrow">Todo lo que pasa</p><h1>Eventos</h1><p>Explorá experiencias de distintos colegios organizadas por tipo de evento.</p></div></div><div class="event-groups">${types.map(type => `<div><h2 class="event-group-title">${type}</h2><div class="grid">${data.events.filter(e => e.type === type).map(eventCard).join('')}</div></div>`).join('')}</div></section>`; }
function profilePage() {
  ensurePostIds();
  const profile = window.profileData || { photo: img('05_12.jfif'), name: 'Valentina Martínez', school: 'Instituto Técnico Salesiano Villada', city: 'Córdoba' };
  const defaultGallery = ['pexels-marwen-larafa-2159807713-36606989.jpg','img-rosa-humo-porta.jpg','pexels-maorattias-5192307.jpg','pexels-koolshooters-6982443.jpg','pexels-holodna-21579377.jpg','pexels-zachtheshoota-4307128.jpg'].map(file => ({ src: img(file), title: 'Recuerdo de Valentina' }));
  const publishedGallery = userPosts.map(post => ({ src: post.image, title: `${post.title} · ${post.date || 'Sin fecha'}` }));
  const postSection = userPosts.length ? `<section class="profile-posts"><div class="page-heading"><div><p class="eyebrow">Publicaciones</p><h1>Tus eventos</h1><p>Podés eliminar publicaciones y cada evento guarda música si la agregaste.</p></div></div><div class="grid">${userPosts.map(profilePostCard).join('')}</div></section>` : '';
  return `<section><div class="profile-cover"></div><div class="profile-summary"><img class="profile-picture" src="${profile.photo}" alt="Foto de ${profile.name}"><div><h1>${profile.name}</h1><p>Promo 2026 · ${profile.school}, ${profile.city}</p></div><button class="secondary-button" id="editProfile">Editar perfil</button></div><div class="info-panel"><article class="info-card"><h2>Sobre mi promo</h2><p>Guardando cada momento del último año: la previa, el viaje, la cena y esas tardes que se hicieron inolvidables.</p><button class="text-button" id="addPost">＋ Crear publicación</button></article><article class="info-card"><h2>Información</h2><div class="details-list"><div class="detail"><span>Cena de egresados</span><b>15 de noviembre, 2026</b></div><div class="detail"><span>Entradas</span><a href="https://www.paseshow.com.ar/" target="_blank" rel="noopener">Comprar entradas ↗</a></div><div class="detail"><span>Mi playlist</span><a href="${window.profileData?.music || 'https://open.spotify.com/'}" target="_blank" rel="noopener">Abrir en Spotify ↗</a></div></div></article></div>${postSection}<div class="page-heading"><div><p class="eyebrow">Mi galería</p><h1>Recuerdos publicados</h1><p>${userPosts.length ? `${userPosts.length} publicación${userPosts.length > 1 ? 'es nuevas' : ' nueva'} guardada${userPosts.length > 1 ? 's' : ''} en este navegador.` : 'Todavía no publicaste fotos propias.'}</p></div></div><div class="gallery">${[...publishedGallery, ...defaultGallery].map(item => isVideoSrc(item.src) ? `<video src="${item.src}" title="${item.title}" muted playsinline></video>` : `<img src="${item.src}" alt="${item.title}" title="${item.title}">`).join('')}</div></section>`;
}
function schoolProfile(school) { return `<section><div class="profile-cover" style="background-image:linear-gradient(105deg,rgba(11,37,69,.84),rgba(22,119,255,.25)),url('${img(school.image)}')"></div><div class="profile-summary"><img class="profile-picture" src="${img(school.image)}" alt="${school.name}"><div><h1>${school.name}</h1><p>${school.city}, ${school.province} · ${school.posts} publicaciones</p></div><button class="secondary-button" data-page="colegios">← Volver</button></div><div class="info-panel"><article class="info-card"><h2>Acerca de la promo</h2><p>${school.description}</p><p><b>Cena de egresados:</b> ${school.dinner}</p></article><article class="info-card"><h2>Links de la comunidad</h2><div class="details-list"><a class="primary-button" href="https://www.paseshow.com.ar/" target="_blank" rel="noopener">Comprar entradas ↗</a><a class="secondary-button" href="${school.spotify}" target="_blank" rel="noopener">Abrir playlist en Spotify ↗</a></div></article></div><div class="page-heading"><div><p class="eyebrow">Galería de recuerdos</p><h1>Eventos de ${school.name}</h1></div></div><div class="grid">${data.events.slice(0,3).map(eventCard).join('')}</div></section>`; }
function settingsPage() { return `<section><div class="page-heading"><div><p class="eyebrow">Preferencias</p><h1>Configuración</h1><p>Personalizá cómo querés vivir La Última Fila.</p></div></div><article class="info-card" style="max-width:700px"><h2>Privacidad y notificaciones</h2><div class="details-list"><label class="detail"><span>Permitir notificaciones de eventos</span><input type="checkbox" checked></label><label class="detail"><span>Mostrar mi playlist de Spotify</span><input type="checkbox" checked></label><label class="detail"><span>Perfil visible para mi ciudad</span><input type="checkbox" checked></label></div></article></section>`; }
function render(page = 'home', context) { const pages = { home: homePage, colegios: collegesPage, ciudades: () => citiesPage(context), eventos: eventsPage, perfil: profilePage, configuracion: settingsPage }; pageContent.innerHTML = pages[page] ? pages[page]() : homePage(); document.querySelectorAll('.nav-link').forEach(link => link.classList.toggle('active', link.dataset.page === page)); pageContent.focus(); if (page === 'colegios') setupFilters(); if (page === 'home') setupCarousel(); bindDynamicActions(); }
function setupCarousel() { const change = (next) => { slideIndex = (next + 3) % 3; document.querySelectorAll('.slide').forEach((slide, i) => slide.classList.toggle('active', i === slideIndex)); document.querySelectorAll('.dot').forEach((dot, i) => dot.classList.toggle('active', i === slideIndex)); }; document.querySelector('.prev').onclick = () => change(slideIndex - 1); document.querySelector('.next').onclick = () => change(slideIndex + 1); document.querySelectorAll('.dot').forEach(dot => dot.onclick = () => change(Number(dot.dataset.slide))); }
function setupFilters() { const search = document.getElementById('schoolSearch'), province = document.getElementById('provinceFilter'), city = document.getElementById('cityFilter'); const updateCities = () => { const cities = [...new Set(data.schools.filter(s => !province.value || s.province === province.value).map(s => s.city))]; city.innerHTML = `<option value="">Todas las ciudades</option>${cities.map(c => `<option>${c}</option>`).join('')}`; }; const apply = () => { const query = search.value.toLowerCase(); const visible = data.schools.filter(s => s.name.toLowerCase().includes(query) && (!province.value || s.province === province.value) && (!city.value || s.city === city.value)); document.getElementById('schoolGrid').innerHTML = visible.length ? visible.map(schoolCard).join('') : '<div class="empty">No encontramos colegios con esos filtros.</div>'; bindDynamicActions(); }; search.oninput = apply; province.onchange = () => { updateCities(); apply(); }; city.onchange = apply; document.getElementById('clearFilters').onclick = () => { search.value = ''; province.value = ''; updateCities(); city.value = ''; apply(); }; updateCities(); }
function bindDynamicActions() {
  document.querySelectorAll('[data-page]').forEach(el => el.onclick = (event) => { event.preventDefault(); render(el.dataset.page); });
  document.querySelectorAll('[data-school]').forEach(button => button.onclick = () => renderSchool(Number(button.dataset.school)));
  document.querySelectorAll('[data-city]').forEach(button => button.onclick = () => render('ciudades', data.cities.find(c => c.name === button.dataset.city)));
  const spotify = document.getElementById('spotifyConnect');
  if (spotify) spotify.onclick = () => { showToast('La integración está lista para OAuth. Te redirigimos a Spotify para crear o conectar tu cuenta.'); window.open('https://www.spotify.com/ar/signup/', '_blank', 'noopener'); };
}
function renderSchool(id) { const school = data.schools.find(item => item.id === id); pageContent.innerHTML = schoolProfile(school); document.querySelectorAll('.nav-link').forEach(link => link.classList.toggle('active', link.dataset.page === 'colegios')); bindDynamicActions(); }
function readImage(file) { return new Promise((resolve, reject) => { const reader = new FileReader(); reader.onload = () => resolve(reader.result); reader.onerror = reject; reader.readAsDataURL(file); }); }

/* Abre los formularios reales (con cuentas/perfil persistentes) definidos como templates en index.html. */
function openModal(type) {
  const templateMap = { login: 'loginFormTemplate', register: 'registerFormTemplate', profile: 'profileFormTemplate', post: 'postFormTemplate' };
  const templateId = templateMap[type];
  if (templateId && typeof window.setModalContent === 'function') window.setModalContent(templateId);
}
function closeModal() { modalBackdrop.classList.remove('open'); modalBackdrop.setAttribute('aria-hidden','true'); }

document.getElementById('sidebarToggle').onclick = () => document.getElementById('sidebar').classList.toggle('collapsed');
document.getElementById('mobileMenu').onclick = () => document.getElementById('sidebar').classList.toggle('open');
document.getElementById('sidebarClose').onclick = () => document.getElementById('sidebar').classList.remove('open');
modalBackdrop.onclick = event => { if (event.target === modalBackdrop) closeModal(); };
render();
