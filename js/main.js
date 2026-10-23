/* =========================================================
   CATÁLOGO DE GÉNEROS VISUALES — JavaScript vanilla
   Renderiza las fichas, filtra, busca, amplía láminas
   ========================================================= */

/* ---------- DATOS DEL CATÁLOGO ---------- */
const CATALOGO = [
  {
    seccion: "I",
    seccionNombre: "Según su función comunicativa",
    seccionDefinicion:
      "Basados en el propósito primario de la imagen: ¿qué busca hacer la imagen con quien la mira?",
    grupo: "a",
    grupoTitulo: "Géneros Informativos",
    grupoDefinicion:
      "Su objetivo principal es transmitir información, datos y conocimiento al público para mantenerlo al tanto de acontecimientos y eventos importantes. Sus características más importantes son la objetividad, claridad de la información y precisión en la presentación de los datos suministrados.",
    fichas: [
      {
        titulo: "Fotoperiodismo",
        etiqueta: "Informativo",
        imagen: "img/fotoperiodismo-madre.jpg",
        alt: "Fotografía Madre Migrante de Dorothea Lange",
        pie: "D. Lange · Madre migrante, 1936",
        fuente: "Lámina I",
        texto:
          "Imágenes objetivas de hechos que documentan eventos noticiosos. Es un género fotográfico en el que la cámara actúa como testigo: capta el instante y lo convierte en noticia. <strong>Dorothea Lange</strong> y su serie sobre la Gran Depresión son su máxima expresión.",
      },
      {
        titulo: "Infografías",
        etiqueta: "Informativo",
        imagen: "img/infografia-nightingale.jpg",
        alt: "Diagrama rosas de Florence Nightingale sobre mortalidad en el ejército",
        pie: "F. Nightingale · Diagrama de mortalidad, 1858",
        fuente: "Lámina II",
        texto:
          "Visualización de datos complejos a través de imágenes explicativas. Combinan tipografía, color y geometría para hacer legible lo que una tabla no logra: aquí, el famoso diagrama de rosas que Florence Nightingale usó para demostrar que la mayoría de muertes eran evitables.",
      },
    ],
  },
  {
    seccion: "I",
    seccionNombre: "Según su función comunicativa",
    seccionDefinicion:
      "Basados en el propósito primario de la imagen: ¿qué busca hacer la imagen con quien la mira?",
    grupo: "b",
    grupoTitulo: "Géneros Persuasivos",
    grupoDefinicion:
      "Hovland, C. (1959) define que son aquellos que se valen de la persuasión como un proceso que implica la presentación de un mensaje atractivo y convincente que influye en la opinión y decisiones del público mediante la interacción entre el emisor y el receptor del mensaje.",
    fichas: [
      {
        titulo: "Publicidad",
        etiqueta: "Persuasivo",
        imagen: "img/publicidad-cocacola.jpg",
        alt: "Anuncio publicitario antiguo de Coca-Cola de 1900",
        pie: "Anuncio de Coca-Cola, 1900",
        fuente: "Lámina III",
        texto:
          "Es generada por entidades comerciales para vender productos o servicios. Peninou, G. (1976) la considera una figura clave de la semiótica publicitaria: busca la adquisición o el consumo enfocándose en la construcción de valor simbólico alrededor de un producto.",
      },
      {
        titulo: "Propaganda",
        etiqueta: "Persuasivo",
        imagen: "img/propaganda-unclesam.jpg",
        alt: "Póster de propaganda de reclutamiento I Want You for U.S. Army, 1917",
        pie: "J. M. Flagg · I Want You, 1917",
        fuente: "Lámina IV",
        texto:
          "González, E. (1981) la caracteriza como el uso de técnicas psicológicas a través del empleo de símbolos para modificar o alterar opiniones o ideas de adeptos con el objetivo de lograr la adhesión a una doctrina o ideología.",
      },
    ],
  },
  {
    seccion: "I",
    seccionNombre: "Según su función comunicativa",
    seccionDefinicion:
      "Basados en el propósito primario de la imagen: ¿qué busca hacer la imagen con quien la mira?",
    grupo: "c",
    grupoTitulo: "Géneros Artísticos",
    grupoDefinicion:
      "Son las diferentes categorías en las cuales están divididas las artes visuales. Lotman, Y. (1996) agrega que son un conjunto de normas y procedimientos que guían la producción e interpretación de las obras, actuando como efectos de sentido.",
    fichas: [
      {
        titulo: "Pinturas de retratos",
        etiqueta: "Artístico",
        imagen: "img/retrato-perla.jpg",
        alt: "Pintura La chica con el arete de perla de Johannes Vermeer",
        pie: "J. Vermeer · Chica con arete de perla, 1665",
        fuente: "Lámina V",
        texto:
          "Representación pictórica de una persona utilizando las técnicas pictóricas. Van Eyck, Velázquez o Vermeer convirtieron el retrato en un estudio de la luz, el carácter y el estatus social del retratado.",
      },
      {
        titulo: "Arte Abstracto",
        etiqueta: "Artístico",
        imagen: "img/abstracto-kandinsky.jpg",
        alt: "Pintura abstracta Composición VII de Wassily Kandinsky",
        pie: "W. Kandinsky · Composición VII, 1913",
        fuente: "Lámina VI",
        texto:
          "Manifestación artística que abandona las cualidades de la representación formal desde un punto figurativo, convirtiéndose en expresión cualitativa: sus niveles expresivos se manifiestan a través de color, líneas, puntos, ritmo y tensión.",
      },
    ],
  },
  {
    seccion: "II",
    seccionNombre: "Según su soporte o medio",
    seccionDefinicion:
      "Géneros cuya clasificación depende del soporte donde estén realizados, caracterizados por imágenes estáticas o dinámicas.",
    grupo: "a",
    grupoTitulo: "Imagen fija",
    grupoDefinicion:
      "Representaciones estáticas: la imagen existe como un único instante detenido, independiente del tiempo de exposición o del esfuerzo de su elaboración.",
    fichas: [
      {
        titulo: "Fotografía",
        etiqueta: "Imagen fija",
        imagen: "img/camara-rolleiflex.jpg",
        alt: "Cámara réflex de doble objetivo Rolleiflex",
        pie: "Rolleiflex · Cámara de doble objetivo",
        fuente: "Lámina VII",
        texto:
          "Proceso técnico que permite capturar instantes a través de soluciones químicas que reaccionan ante la luz. Dubois, P. (1986) la define como un signo que mantiene una relación física con su referente: el índice fotográfico.",
      },
      {
        titulo: "Grabado",
        etiqueta: "Imagen fija",
        imagen: "img/grabado-gran-ola.jpg",
        alt: "Grabado en madera La gran ola de Kanagawa de Hokusai",
        pie: "Hokusai · La gran ola de Kanagawa, ca. 1831",
        fuente: "Lámina VIII",
        texto:
          "Es una técnica de estampación que consiste en crear una matriz (madera, metal, plástico), sobre la cual se realizan incisiones y surcos para luego entintar y volcar, sobre papel, la imagen por presión. Del mismo taller: los aguafuertes de <strong>Albrecht Dürer</strong>.",
      },
    ],
  },
  {
    seccion: "II",
    seccionNombre: "Según su soporte o medio",
    seccionDefinicion:
      "Géneros cuya clasificación depende del soporte donde estén realizados, caracterizados por imágenes estáticas o dinámicas.",
    grupo: "b",
    grupoTitulo: "Imagen en Movimiento",
    grupoDefinicion:
      "Desde el punto de semiótico, se definen como un texto audiovisual cuya significación depende no solo de sus códigos visuales, sino de su articulación en el tiempo. Deleuze, G. (2009) la definió como un bloque de movimiento/tiempo.",
    fichas: [
      {
        titulo: "Cine",
        etiqueta: "Imagen en movimiento",
        imagen: "img/cine-metropolis.jpg",
        alt: "Póster del film Metropolis de Fritz Lang, 1927",
        pie: "B. Bilinski · Póster de Metropolis, 1927",
        fuente: "Lámina IX",
        texto:
          "Narrativa audiovisual que se realiza a través de fotogramas: cuenta una historia bajo un contexto y personajes que la representan. La ilusión de movimiento nace de la persistencia retiniana, veinticuatro fotogramas por segundo.",
      },
      {
        titulo: "Animación",
        etiqueta: "Imagen en movimiento",
        imagen: "img/animacion-gertie.jpg",
        alt: "Póster de la caricatura Gertie the Dinosaur de Winsor McCay, 1914",
        pie: "W. McCay · Gertie the Dinosaur, 1914",
        fuente: "Lámina X",
        texto:
          "Es el resultado de conferir cualidades humanas y atributos físicos a dibujos, a los cuales se les agrega movimiento, historia y contexto. Nace del lápiz y del papel: cada fotograma es dibujado a mano.",
      },
    ],
  },
  {
    seccion: "II",
    seccionNombre: "Según su soporte o medio",
    seccionDefinicion:
      "Géneros cuya clasificación depende del soporte donde estén realizados, caracterizados por imágenes estáticas o dinámicas.",
    grupo: "c",
    grupoTitulo: "Imágenes Digitales",
    grupoDefinicion:
      "Es una imagen representada digitalmente que puede generarse, almacenarse y manipularse utilizando bits, la unidad mínima de información.",
    fichas: [
      {
        titulo: "Memes",
        etiqueta: "Digital",
        imagen: "img/meme-gato.jpg",
        alt: "Meme de internet con un gato y texto de humor",
        pie: "Meme de red · Cultura viral",
        fuente: "Lámina XI",
        texto:
          "Según la definición semiótica de Pérez, G., el meme es un lenguaje que tiene sentido al poseer un conjunto de signos empleados como recurso expresivo que se convierte en parte del repertorio común en la cultura viral en redes.",
      },
      {
        titulo: "Realidad virtual",
        etiqueta: "Digital",
        imagen: "img/realidad-virtual.jpg",
        alt: "Persona usando un casco de realidad virtual",
        pie: "Entorno inmersivo de realidad virtual",
        fuente: "Lámina XII",
        texto:
          "Entornos inmersivos de escenas u objetos con apariencia real que se generan con tecnología. Kerschhove, D. (1999) refiere que es algo que va más allá del hardware y el software para concebirse dentro de la mente del usuario.",
      },
    ],
  },
  {
    seccion: "III",
    seccionNombre: "Según su estructura narrativa",
    seccionDefinicion:
      "Cuentan una historia o relatos, reales o ficticios, mediante una organización específica de los hechos que presentan una secuencia de acciones protagonizadas por personajes en un espacio y tiempo determinado.",
    grupo: "a",
    grupoTitulo: "Secuenciales",
    grupoDefinicion:
      "Imágenes que dependen unas de otras: el sentido se construye en la lectura encadenada, de la primera a la última viñeta.",
    fichas: [
      {
        titulo: "Cómics",
        etiqueta: "Secuencial",
        imagen: "img/comic-krazy-kat.jpg",
        alt: "Tira cómica clásica Krazy Kat de 1941",
        pie: "G. Herriman · Krazy Kat, 1941",
        fuente: "Lámina XIII",
        texto:
          "Historias con viñetas donde se coloca el texto. La relación entre imagen y globo de diálogo crea un ritmo de lectura que ninguna de las dos formas logra por separado.",
      },
      {
        titulo: "Storyboards",
        etiqueta: "Secuencial",
        imagen: "img/storyboard-sketch.png",
        alt: "Storyboard a lápiz con viñetas para una escena de acción",
        pie: "Storyboard · Guion visual de producción",
        fuente: "Lámina XIV",
        texto:
          "Guiones visuales que cuentan historias de manera secuencial, previas a la realización de una película. Antes de rodar un solo plano, la película ya existe dibujada.",
      },
    ],
  },
  {
    seccion: "III",
    seccionNombre: "Según su estructura narrativa",
    seccionDefinicion:
      "Cuentan una historia o relatos, reales o ficticios, mediante una organización específica de los hechos que presentan una secuencia de acciones protagonizadas por personajes en un espacio y tiempo determinado.",
    grupo: "b",
    grupoTitulo: "No Secuenciales",
    grupoDefinicion:
      "Son aquellas imágenes que no dependen de otra para su interpretación: se bastan a sí mismas para sostener todo el relato.",
    fichas: [
      {
        titulo: "Pintura histórica",
        etiqueta: "No secuencial",
        imagen: "img/pintura-historica.jpg",
        alt: "Pintura La Declaración de Independencia de John Trumbull",
        pie: "J. Trumbull · Declaración de Independencia, 1819",
        fuente: "Lámina XV",
        texto:
          "Pinturas donde se plasman escenas que representan hechos históricos reales, únicos, con carga simbólica. Un solo lienzo condensa horas, años o siglos en una composición jerárquica.",
      },
      {
        titulo: "Fotografía conceptual",
        etiqueta: "No secuencial",
        imagen: "img/foto-conceptual.jpg",
        alt: "Fotografía pictorialista alegórica de Julia Margaret Cameron",
        pie: "J. M. Cameron · Queen of the May, 1867",
        fuente: "Lámina XVI",
        texto:
          "Imágenes autónomas con mensaje dirigidas a la publicidad y a la autoría. La idea precede a la toma: cada elemento dentro del encuadre está elegido por su significado, no por su azar.",
      },
    ],
  },
  {
    seccion: "IV",
    seccionNombre: "Según su contexto cultural",
    seccionDefinicion:
      "Son categorías que agrupan imágenes u obras por la función que cumplen y por la situación en la que se usan, lo que trae como consecuencia la manera en la que influyen en la interpretación de la misma.",
    grupo: "a",
    grupoTitulo: "Géneros Populares",
    grupoDefinicion:
      "Son formas artísticas o comunicativas que se consumen de manera amplia en la sociedad y que suelen difundirse por medios masivos, debido a que resultan cercanos, reconocibles y atractivos para grandes audiencias. Ejemplos: el cine y el arte callejero.",
    fichas: [
      {
        titulo: "Cine popular",
        etiqueta: "Popular",
        imagen: "img/cine-sala.jpg",
        alt: "Interior de un cine antiguo con marquesina y butacas",
        pie: "Sala de cine clásica · consumo masivo",
        fuente: "Lámina XVII",
        texto:
          "Es una técnica, un arte y una forma de comunicación audiovisual que permite narrar historias, expresar ideas y representar la realidad mediante imágenes en movimiento y sonido. De acuerdo con ciertas características y similitudes entre películas, suele dividirse en géneros.",
      },
      {
        titulo: "Arte Callejero",
        etiqueta: "Popular",
        imagen: "img/callejero-mural.jpg",
        alt: "Calle cubierta de murales y grafitis de colores",
        pie: "Hosier Lane · Muralismo urbano",
        fuente: "Lámina XVIII",
        texto:
          "También llamado arte urbano: intervenciones creativas realizadas en espacios públicos y urbanos para comunicar ideas, emociones o mensajes sociales mediante técnicas como el grafiti y el muralismo, dialogando con quienes lo habitan.",
      },
    ],
  },
  {
    seccion: "IV",
    seccionNombre: "Según su contexto cultural",
    seccionDefinicion:
      "Son categorías que agrupan imágenes u obras por la función que cumplen y por la situación en la que se usan, lo que trae como consecuencia la manera en la que influyen en la interpretación de la misma.",
    grupo: "b",
    grupoTitulo: "Géneros Académicos",
    grupoDefinicion:
      "Son producciones que surgen en contextos educativos, científicos o investigativos cuya finalidad es explicar, analizar o difundir conocimiento. Su objetivo primordial es la transmisión de ideas mediante imágenes, diagramas, gráficos y mapas.",
    fichas: [
      {
        titulo: "Ilustraciones científicas",
        etiqueta: "Académico",
        imagen: "img/ciencia-haeckel.jpg",
        alt: "Lámina ilustrada de Ernst Haeckel con formas de vida marina",
        pie: "E. Haeckel · Kunstformen der Natur, 1904",
        fuente: "Lámina XIX",
        texto:
          "Disciplina que combina conocimiento científico y técnicas de dibujo para mostrar información científica con exactitud y claridad, sirviendo como herramienta de apoyo para el estudio, la enseñanza y la divulgación del conocimiento.",
      },
      {
        titulo: "Cartografía",
        etiqueta: "Académico",
        imagen: "img/cartografia-blaeu.jpg",
        alt: "Mapa mundi antiguo de Willem Blaeu del siglo XVII",
        pie: "W. Blaeu · Nova Totius Terrarum Orbis, 1635",
        fuente: "Lámina XX",
        texto:
          "En cuanto a este aspecto, la RAE (2012) afirma que es la disciplina encargada de recopilar, estudiar y representar gráficamente la información de un territorio para crear mapas útiles y comprensibles.",
      },
    ],
  },
];

/* ---------- REFERENCIAS AL DOM ---------- */
const contenedor = document.getElementById("contenedor-secciones");
const botonesFiltro = document.querySelectorAll(".filtro");
const campoBuscar = document.getElementById("buscar");
const contador = document.getElementById("contador");
const botonSubir = document.getElementById("subir");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxPie = document.getElementById("lightbox-pie");
const lightboxCerrar = document.getElementById("lightbox-cerrar");

/* Mapeo de filtros -> etiquetas de las fichas */
const FILTROS = {
  informativos: "Informativo",
  persuasivos: "Persuasivo",
  artisticos: "Artístico",
  soporte: ["Imagen fija", "Imagen en movimiento", "Digital"],
  narrativa: ["Secuencial", "No secuencial"],
  cultural: ["Popular", "Académico"],
};

/* ---------- RENDER DEL CATÁLOGO ---------- */
function renderizar() {
  let numeroFicha = 0;
  let html = "";
  let seccionActual = "";
  let grupoActual = "";

  CATALOGO.forEach((entrada) => {
    // Cabecera de sección (solo una vez por sección)
    if (entrada.seccion !== seccionActual) {
      seccionActual = entrada.seccion;
      grupoActual = "";
      html += `
        <section class="seccion" data-seccion="${entrada.seccion}">
          <header class="encabezado-seccion reveal">
            <div class="encabezado-seccion__numero">Sección ${entrada.seccion}</div>
            <h2 class="encabezado-seccion__nombre">${entrada.seccionNombre}</h2>
            <p class="encabezado-seccion__definicion">${entrada.seccionDefinicion}</p>
            <div class="encabezado-seccion__reglas"></div>
          </header>`;
    }

    // Título de subgrupo (a-, b-, c-)
    if (entrada.grupo !== grupoActual) {
      if (grupoActual !== "") html += `</div>`; // cierra rejilla anterior
      grupoActual = entrada.grupo;
      html += `
          <div class="subgrupo">
            <h3 class="subgrupo__titulo reveal" data-letra="${entrada.grupo}.">${entrada.grupoTitulo}</h3>
            <p class="encabezado-seccion__definicion" style="text-align:left;margin:0 0 24px;">${entrada.grupoDefinicion}</p>
            <div class="rejilla-fichas">`;
    }

    // Fichas del subgrupo
    entrada.fichas.forEach((f) => {
      numeroFicha++;
      const num = String(numeroFicha).padStart(2, "0");
      html += `
          <article class="ficha reveal" data-etiqueta="${f.etiqueta.toLowerCase()}" data-texto="${(
        f.titulo +
        " " +
        f.texto
      )
        .replace(/<[^>]*>/g, "")
        .toLowerCase()}">
            <div class="ficha__marca">
              <span>${f.etiqueta}</span>
              <span class="ficha__numero">Ficha ${num}</span>
            </div>
            <figure class="ficha__lamina" data-img="${f.imagen}" data-pie="${f.pie}">
              <img src="${f.imagen}" alt="${f.alt}" loading="lazy" />
            </figure>
            <h4 class="ficha__titulo">${f.titulo}</h4>
            <p class="ficha__definicion">${f.texto}</p>
            <div class="ficha__pie">
              <span>${f.pie}</span>
              <span class="ficha__fuente">${f.fuente}</span>
            </div>
          </article>`;
    });
  });

  html += `</div></section>`; // cierra última rejilla y sección
  contenedor.innerHTML = html;
  observarRevelados();
}

/* ---------- FILTRADO Y BÚSQUEDA ---------- */
let filtroActivo = "todas";

function aplicarFiltros() {
  const termino = campoBuscar.value.trim().toLowerCase();
  const reglas = FILTROS[filtroActivo];
  const fichas = contenedor.querySelectorAll(".ficha");
  let visibles = 0;

  fichas.forEach((ficha) => {
    const etiqueta = ficha.dataset.etiqueta;
    const coincideFiltro =
      filtroActivo === "todas" ||
      (Array.isArray(reglas)
        ? reglas.some((r) => r.toLowerCase() === etiqueta)
        : reglas.toLowerCase() === etiqueta);
    const coincideTexto = !termino || ficha.dataset.texto.includes(termino);

    const visible = coincideFiltro && coincideTexto;
    ficha.classList.toggle("ficha--oculta", !visible);
    if (visible) visibles++;
  });

  // Oculta subgrupos y secciones sin fichas visibles
  contenedor.querySelectorAll(".subgrupo").forEach((sub) => {
    const hayFichas = [...sub.querySelectorAll(".ficha")].some(
      (f) => !f.classList.contains("ficha--oculta")
    );
    sub.style.display = hayFichas ? "" : "none";
  });
  contenedor.querySelectorAll(".seccion").forEach((sec) => {
    const hayFichas = [...sec.querySelectorAll(".ficha")].some(
      (f) => !f.classList.contains("ficha--oculta")
    );
    sec.style.display = hayFichas ? "" : "none";
  });

  // Aviso si no hay resultados
  const aviso = document.getElementById("aviso-vacio");
  if (visibles === 0) {
    if (!aviso) {
      const div = document.createElement("div");
      div.id = "aviso-vacio";
      div.className = "vacio";
      div.textContent = "Ninguna ficha coincide con la búsqueda. Pruebe con otra palabra.";
      contenedor.appendChild(div);
    }
  } else if (aviso) {
    aviso.remove();
  }

  contador.textContent = visibles === 1 ? "1 ficha" : `${visibles} fichas`;

  // El filtrado reacomoda el layout: re-observamos y aseguramos lo visible
  observarRevelados();
  requestAnimationFrame(revelarPendientes);
}

/* ---------- EVENTOS ---------- */
botonesFiltro.forEach((boton) => {
  boton.addEventListener("click", () => {
    botonesFiltro.forEach((b) => b.classList.remove("filtro--activo"));
    boton.classList.add("filtro--activo");
    filtroActivo = boton.dataset.filtro;
    aplicarFiltros();
  });
});

campoBuscar.addEventListener("input", aplicarFiltros);

/* Lightbox: abrir al pulsar una lámina */
contenedor.addEventListener("click", (e) => {
  const lamina = e.target.closest(".ficha__lamina");
  if (!lamina) return;
  lightboxImg.src = lamina.dataset.img;
  lightboxImg.alt = lamina.querySelector("img")?.alt || "";
  lightboxPie.textContent = lamina.dataset.pie;
  lightbox.hidden = false;
  document.body.style.overflow = "hidden";
});

function cerrarLightbox() {
  lightbox.hidden = true;
  lightboxImg.src = "";
  document.body.style.overflow = "";
}

lightboxCerrar.addEventListener("click", cerrarLightbox);
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) cerrarLightbox();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !lightbox.hidden) cerrarLightbox();
});

/* Botón subir */
botonSubir.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

window.addEventListener("scroll", () => {
  botonSubir.classList.toggle("visible", window.scrollY > 600);
  revelarPendientes();
});

/* ---------- APARICIÓN AL DESPLAZAR ---------- */
let observador;
function observarRevelados() {
  if (!("IntersectionObserver" in window)) {
    // Navegador sin soporte: todo visible de entrada
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("visible"));
    return;
  }
  if (!observador) {
    observador = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {
            entrada.target.classList.add("visible");
            observador.unobserve(entrada.target);
          }
        });
      },
      // Umbral 0 + margen: se revela en cuanto aparece un pixel,
      // sin importar lo alta que sea la ficha ni el tamaño del viewport.
      { threshold: 0, rootMargin: "0px 0px -40px 0px" }
    );
  }
  document.querySelectorAll(".reveal:not(.visible)").forEach((el) => observador.observe(el));
}

/* Red de seguridad: nada debe quedar invisible si el observer no dispara.
   Se revela todo lo que ya cruzó el borde inferior del viewport, aunque el
   scroll haya saltado por encima (así nunca queda una ficha fantasma). */
function revelarPendientes() {
  document.querySelectorAll(".reveal:not(.visible)").forEach((el) => {
    if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add("visible");
  });
}

/* ---------- ARRANQUE ---------- */
renderizar();
aplicarFiltros();
document.getElementById("anio").textContent = new Date().getFullYear();

// Red de seguridad inicial y ante cambios de tamaño de ventana
revelarPendientes();
window.addEventListener("resize", revelarPendientes);
window.addEventListener("load", revelarPendientes);
