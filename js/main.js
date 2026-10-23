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
        imagen: "img/fotoperiodismo-derrumbe.jpg",
        alt: "Fotoperiodista con varias cámaras trabajando entre los escombros de un edificio derrumbado",
        pie: "Fotoperiodista en zona de desastre",
        fuente: "Lámina I",
        texto:
          "Imágenes objetivas de hechos que documentan eventos noticiosos. Es un género fotográfico en el que la cámara actúa como testigo: capta el instante y lo convierte en noticia.",
        quePasa:
          "Vemos a un fotoperiodista de pie sobre los escombros, con dos cámaras colgadas del cuello y una tercera en las manos, revisando sus ajustes. Detrás de él se levanta la fachada partida de un edificio derrumbado, todavía entre el humo. La escena muestra el trabajo del reportero gráfico: no mira la catástrofe, la registra para contarla.",
      },
      {
        titulo: "Infografías",
        etiqueta: "Informativo",
        imagen: "img/infografia-delfines.jpg",
        alt: "Infografía sobre datos curiosos de los delfines con un delfín saltando sobre el mar",
        pie: "Infografía: datos curiosos de los delfines",
        fuente: "Lámina II",
        texto:
          "Visualización de datos complejos a través de imágenes explicativas. Combinan tipografía, color y jerarquía para hacer legible lo que una tabla no logra.",
        quePasa:
          "La lámina reparte diez datos sobre los delfines en columnas cortas, con títulos en negrita y el animal saltando en la fotografía de fondo. La imagen del delfín en pleno salto ancla la lectura: da un motivo visual al texto y hace que el dato se recuerde mejor.",
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
        imagen: "img/publicidad-mcdonalds.jpg",
        alt: "Anuncio de McDonald's: un vaso de helado convertido en piscina con muñequitos recargándose",
        pie: "McDonald's · A little taste of summer",
        fuente: "Lámina III",
        texto:
          "Es generada por entidades comerciales para vender productos o servicios. Peninou, G. (1976) la considera una figura clave de la semiótica publicitaria: busca la adquisición o el consumo enfocándose en la construcción de valor simbólico alrededor de un producto.",
        quePasa:
          "El helado McDonald's aparece agrandado hasta parecer una piscina: sus espirales de crema son toboganes y las piedras de colores, flotadores. Figuras diminutas se recuestan, nadan y suben por una escalera de juguete, con una palmera plantada encima. La marca vende verano y diversión, no comida: es la construcción de valor simbólico del producto.",
      },
      {
        titulo: "Propaganda",
        etiqueta: "Persuasivo",
        imagen: "img/propaganda-vivanda.jpg",
        alt: "Cartel de Vivanda: un blíster de pastillas cuyos casilleros contienen tomates, pasta, semillas y lechuga",
        pie: "Vivanda · Comer sano es tu mejor medicina",
        fuente: "Lámina IV",
        texto:
          "González, E. (1981) la caracteriza como el uso de técnicas psicológicas a través del empleo de símbolos para modificar o alterar opiniones o ideas de adeptos con el objetivo de lograr la adhesión a una doctrina o ideología.",
        quePasa:
          "Un blíster de pastillas, del tipo farmacéutico, en lugar de medicamentos contiene comida real: tomates, pasta, semillas y hojas de lechuga. La frase 'comer sano es tu mejor medicina' completa el mensaje. El símbolo de la medicina se reaprovecha para persuadirnos de una idea: la alimentación como remedio.",
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
        imagen: "img/retrato-frida-kahlo.jpg",
        alt: "Autorretrato al óleo de Frida Kahlo entre monos y hojas tropicales",
        pie: "Frida Kahlo · Autorretrato con monos",
        fuente: "Lámina V",
        texto:
          "Representación pictórica de una persona utilizando las técnicas pictóricas. El retrato sirve tanto para registrar la fisonomía como para mostrar el carácter y el mundo interior del retratado.",
        quePasa:
          "Frida Kahlo se retrata de frente, con mirada serena, entre monos y un gato negro que la rodean sobre un fondo de hojas tropicales. Cuelga de su cuello un colibrí muerto enredado en espinas. Cada elemento es un símbolo personal: el retrato no solo muestra su rostro, sino su dolor y su identidad mexicana.",
      },
      {
        titulo: "Arte Abstracto",
        etiqueta: "Artístico",
        imagen: "img/abstracto-kandinsky.jpg",
        alt: "Pintura abstracta con círculos, triángulos y pinceladas de colores intensos",
        pie: "W. Kandinsky · Composición abstracta",
        fuente: "Lámina VI",
        texto:
          "Manifestación artística que abandona las cualidades de la representación formal desde un punto figurativo, convirtiéndose en expresión cualitativa: sus niveles expresivos se manifiestan a través de color, líneas, puntos y ritmo.",
        quePasa:
          "No hay nada reconocible: círculos, triángulos, arcos y pinceladas sueltas se cruzan sobre naranjas, azules y verdes muy intensos. Kandinsky llama a esto su vocabulario musical, donde cada color suena como una nota. El mensaje es el color mismo, sin objetos que lo expliquen.",
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
        imagen: "img/fotografia-atardecer.jpg",
        alt: "Manos sosteniendo una cámara réflex que encuadra un atardecer sobre el mar",
        pie: "Cámara réflex capturando un atardecer",
        fuente: "Lámina VII",
        texto:
          "Proceso técnico que permite capturar instantes a través de soluciones químicas o sensores que reaccionan ante la luz. Dubois, P. (1986) la define como un signo que mantiene una relación física con su referente.",
        quePasa:
          "Alguien sostiene una cámara réflex frente a un atardecer dorado sobre el mar. En la pantalla trasera se ve el mismo sol reproduciéndose en tiempo real, con los datos técnicos de la toma superpuestos. Es la fotografía mostrándose a sí misma: la mano, el aparato y el paisaje a la vez.",
      },
      {
        titulo: "Grabado",
        etiqueta: "Imagen fija",
        imagen: "img/grabado-linoleo.jpg",
        alt: "Linograbado de una mujer con audífonos, rodeado de las virutas del tallado",
        pie: "Linograbado sobre bloque de linóleo",
        fuente: "Lámina VIII",
        texto:
          "Es una técnica de estampación que consiste en crear una matriz (madera, metal, linóleo), sobre la cual se realizan incisiones y surcos para luego entintar y volcar, sobre papel, la imagen por presión.",
        quePasa:
          "En el centro está el bloque de linóleo ya tallado, con el rostro de una mujer con audífonos y rayos que salen de su cabeza. Alrededor, las virutas blancas que la gubia fue recortando siguen esparcidas sobre la mesa. La imagen deja ver el proceso: la matriz nace de quitar material, no de agregarlo.",
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
        imagen: "img/cine-walking-dead.jpg",
        alt: "Póster de The Walking Dead con un hombre amenazando con un cuchillo visto desde abajo",
        pie: "The Walking Dead · Póster promocional",
        fuente: "Lámina IX",
        texto:
          "Narrativa audiovisual que se realiza a través de fotogramas: cuenta una historia bajo un contexto y personajes que la representan. La ilusión de movimiento nace de la persistencia retiniana.",
        quePasa:
          "La cámara mira hacia arriba desde el suelo: en primer plano, un hombre barbudo extiende la mano mientras otro, colgado del borde superior, le apunta con un cuchillo. Abajo, tres sobrevivientes armados esperan junto a una torre vigilancia. El ángulo invertido y el contralur generan tensión: sentimos que estamos en el centro del peligro.",
      },
      {
        titulo: "Animación",
        etiqueta: "Imagen en movimiento",
        imagen: "img/animacion-personajes.jpg",
        alt: "Dibujo coloreado a mano con decenas de personajes de caricaturas clásicas",
        pie: "Personajes de animación coloreados a mano",
        fuente: "Lámina X",
        texto:
          "Es el resultado de conferir cualidades humanas y atributos físicos a dibujos, a los cuales se les agrega movimiento, historia y contexto. Nace del lápiz y del papel: cada fotograma es dibujado.",
        quePasa:
          "Más de treinta personajes de caricaturas se amontonan en una sola lámina: Mickey, Patricio Estrella, Scooby-Doo, Piolín, Stitch, Simson y muchos más, todos coloreados a mano. Cada uno nació como un dibujo quieto al que se le dio movimiento fotograma a fotograma; juntos cuentan la historia misma de la animación.",
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
        imagen: "img/meme-rana.jpg",
        alt: "Meme de una rana con gafas de sol recargada en una tumbona con el texto problema tuyo papi",
        pie: "Meme viral de rana · Cultura de red",
        fuente: "Lámina XI",
        texto:
          "Según la definición semiótica de Pérez, G., el meme es un lenguaje que tiene sentido al poseer un conjunto de signos empleados como recurso expresivo que se convierte en parte del repertorio común en la cultura viral en redes.",
        quePasa:
          "Una rana antropomorfe se recuesta en una tumbona con gafas oscuras, un vaso en la mano y gesto de total indiferencia. Debajo, la frase 'problema tuyo papi'. La imagen no se queda con su autor original: se descarga, se recorta y se reescribe hasta volverse un formato que cualquiera puede usar para responder algo.",
      },
      {
        titulo: "Realidad virtual",
        etiqueta: "Digital",
        imagen: "img/realidad-virtual.jpg",
        alt: "Hombre con casco de realidad virtual manipulando controles entre esquemas digitales azules",
        pie: "Usuario explorando un entorno de RV",
        fuente: "Lámina XII",
        texto:
          "Entornos inmersivos de escenas u objetos con apariencia real que se generan con tecnología. Kerschhove, D. (1999) refiere que es algo que va más allá del hardware y el software para concebirse dentro de la mente del usuario.",
        quePasa:
          "Un hombre lleva un casco de RV y sostiene dos controles, con los brazos levantados como si tocara algo que solo él ve. A su alrededor flotan esquemas digitales en azul neón. La escena ocurre a medias en el mundo real y a medias dentro de la simulación: justo la experiencia inmersiva que describe el género.",
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
        imagen: "img/comic-looney-tunes.jpg",
        alt: "Página de cómic de los Looney Tunes dividida en viñetas con globos de diálogo",
        pie: "Página de cómic · Looney Tunes",
        fuente: "Lámina XIII",
        texto:
          "Historias con viñetas donde se coloca el texto. La relación entre imagen y globo de diálogo crea un ritmo de lectura que ninguna de las dos formas logra por separado.",
        quePasa:
          "La página se divide en seis viñetas con marco grueso, cada una con un personaje distinto: Bugs Bunny, Pato Lucas, Piolín, Silvestre y el Coyote. Globos de diálogo y onomatopeyas como 'POW!' ordenan la lectencia de izquierda a derecha y de arriba abajo, como una historia dibujada.",
      },
      {
        titulo: "Storyboards",
        etiqueta: "Secuencial",
        imagen: "img/storyboard-gumball.jpg",
        alt: "Storyboard de The Amazing World of Gumball con viñetas en blanco y negro y notas de diálogo",
        pie: "Storyboard de producción · Gumball",
        fuente: "Lámina XIV",
        texto:
          "Guiones visuales que cuentan historias de manera secuencial, previas a la realización de una película o serie. Antes de filmar un solo plano, la historia ya existe dibujada.",
        quePasa:
          "Doce viñetas en blanco y negro ordenan una escena de Gumball, cada una con su casilla técnica arriba (escena, plano, fondo) y el diálogo escrito debajo. Flechas rojas marcan los movimientos de cámara. Es el plano de construcción: el equipo de producción sigue estas láminas antes de animar.",
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
        imagen: "img/pintura-ultima-cena.jpg",
        alt: "La Última Cena: Jesús y sus discípulos reunidos en una larga mesa",
        pie: "Leonardo da Vinci · La Última Cena, 1498",
        fuente: "Lámina XV",
        texto:
          "Pinturas donde se plasman escenas que representan hechos históricos o religiosos reales, únicos, con carga simbólica. Un solo lienzo condensa horas, años o siglos en una composición jerárquica.",
        quePasa:
          "Jesús ocupa el centro de una larga mesa y a su alrededor reaccionan los doce apóstoles en grupos de tres, sorprendidos por el anuncio de la traición. Los gestos, las manos y las miradas cuentan la escena entera en un solo instante: no hace falta una segunda imagen para entenderla.",
      },
      {
        titulo: "Fotografía conceptual",
        etiqueta: "No secuencial",
        imagen: "img/foto-conceptual-celular.jpg",
        alt: "Obra conceptual: un hombre con el celular sujeto a la cara con una venda y el cable enrollado al cuello",
        pie: "Obra conceptual · Dependencia tecnológica",
        fuente: "Lámina XVI",
        texto:
          "Imágenes autónomas con mensaje dirigidas a la publicidad y a la autoría. La idea precede a la toma: cada elemento dentro del encuadre está elegido por su significado, no por su azar.",
        quePasa:
          "Un hombre tiene un celular vendado sobre el rostro, tapándole los ojos, y el cable de carga enrollado al cuello como una soga. Con una sola imagen se expone la idea completa: la pantalla que nos ciega y el aparato que nos ata. Es el mensaje antes que la belleza.",
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
        imagen: "img/cine-posters-coleccion.jpg",
        alt: "Colección extensa de pósters de películas célebres dispuestos unos sobre otros",
        pie: "Colección de pósters de cine",
        fuente: "Lámina XVII",
        texto:
          "Es una técnica, un arte y una forma de comunicación audiovisual que permite narrar historias, expresar ideas y representar la realidad mediante imágenes en movimiento y sonido. Al reunir similitudes, suele dividirse en géneros.",
        quePasa:
          "Decenas de pósters de películas famosas se amontonan formando un gran mosaico: El Padrino, Pulp Fiction, Casino, Titanic y muchas más, con los rostros de sus estrellas superpuestos. El montaje muestra el cine como consumo masivo: un repertorio compartido que casi todos reconocen.",
      },
      {
        titulo: "Arte Callejero",
        etiqueta: "Popular",
        imagen: "img/callejero-muro-bowie.jpg",
        alt: "Muro urbano cubierto de afiches pegados, con un retrato de David Bowie y frases como Sea feliz",
        pie: "Muro urbano · Afiches y wheatpaste",
        fuente: "Lámina XVIII",
        texto:
          "También llamado arte urbano: intervenciones creativas realizadas en espacios públicos y urbanos para comunicar ideas, emociones o mensajes sociales mediante técnicas como el grafiti y el muralismo.",
        quePasa:
          "Un muro de la ciudad aparece cubierto por capas de afiches pegados con pasta: un retrato estilizado de David Bowie con su rayo en la cara, el cartel 'SEA FELIZ', frases como 'el amor y el aire son libres' y dibujos de distintos autores. El muro funciona como un mural colectivo, abierto a quien pase por ahí.",
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
        imagen: "img/ciencia-lamina-hongos.jpg",
        alt: "Lámina científica antigua con hongos, plantas y notas manuscritas dibujados a plumilla",
        pie: "Lámina científica · Estudio de hongos",
        fuente: "Lámina XIX",
        texto:
          "Disciplina que combina conocimiento científico y técnicas de dibujo para mostrar información científica con exactitud y claridad, sirviendo como herramienta de apoyo para el estudio y la divulgación del conocimiento.",
        quePasa:
          "En papel envejecido, hongos, plantas, hojas y pequeños animales están dibujados a plumilla con enorme detalle, acompañados de notas manuscritas. La ilustración cumple una función docente: sin fotografía ni color, el trazo preciso permite estudiar cada especie con detalle.",
      },
      {
        titulo: "Cartografía",
        etiqueta: "Académico",
        imagen: "img/cartografia-mapa-antiguo.jpg",
        alt: "Mapa antiguo del mundo pintado a mano con galeones, bestias marinas y cartelas decorativas",
        pie: "Mapa mural antiguo del mundo",
        fuente: "Lámina XX",
        texto:
          "La RAE (2012) afirma que es la disciplina encargada de recopilar, estudiar y representar gráficamente la información de un territorio para crear mapas útiles y comprensibles.",
        quePasa:
          "Un mapa del mundo pintado a mano: los continentes en ocre, los océanos verdes surcados por galeones y bestias marinas, una rosa de los vientos y cartelas ornamentadas en las esquinas. Además de ubicar lugares, el mapa refleja cómo se veía el mundo en la época en que se trazó.",
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
            <p class="encabezado-seccion__kicker">Sección</p>
            <div class="encabezado-seccion__numero">${entrada.seccion}</div>
            <h2 class="encabezado-seccion__nombre">${entrada.seccionNombre}</h2>
            <p class="encabezado-seccion__definicion">${entrada.seccionDefinicion}</p>
          </header>`;
    }

    // Título de subgrupo (a-, b-, c-)
    if (entrada.grupo !== grupoActual) {
      if (grupoActual !== "") html += `</div>`; // cierra lista anterior
      grupoActual = entrada.grupo;
      html += `
          <div class="subgrupo">
            <h3 class="subgrupo__titulo reveal" data-letra="${entrada.grupo}.">${entrada.grupoTitulo}</h3>
            <p class="subgrupo__definicion reveal">${entrada.grupoDefinicion}</p>
            <div class="lista-fichas">`;
    }

    // Fichas del subgrupo (una debajo de la otra)
    entrada.fichas.forEach((f) => {
      numeroFicha++;
      const num = String(numeroFicha).padStart(2, "0");
      const textoBusqueda = (f.titulo + " " + f.texto + " " + f.quePasa)
        .replace(/<[^>]*>/g, "")
        .toLowerCase();
      html += `
          <article class="ficha reveal" data-etiqueta="${f.etiqueta.toLowerCase()}" data-texto="${textoBusqueda}">
            <div class="ficha__marca">
              <span>${f.etiqueta}</span>
              <span class="ficha__numero">Ficha ${num}</span>
            </div>
            <figure class="ficha__lamina" data-img="${f.imagen}" data-pie="${f.pie}">
              <img src="${f.imagen}" alt="${f.alt}" loading="lazy" />
            </figure>
            <h4 class="ficha__titulo">${f.titulo}</h4>
            <p class="ficha__definicion">${f.texto}</p>
            <div class="ficha__vision">
              <span class="ficha__vision-titulo">Qué vemos en la imagen</span>
              <p class="ficha__vision-texto">${f.quePasa}</p>
            </div>
            <div class="ficha__pie">
              <span>${f.pie}</span>
              <span class="ficha__fuente">${f.fuente}</span>
            </div>
          </article>`;
    });
  });

  html += `</div></section>`; // cierra última lista y sección
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
