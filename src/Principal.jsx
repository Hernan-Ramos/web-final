import { Link, Routes, Route } from "react-router-dom";
import Tarjetas from "./Tarjetas";
import './Principal.css';


function Peliculas() {
    const peliculas = [
        {
            id: "modalAvengers",
            titulo: "Avengers",
            imagen: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2018/05/vengadores-infinity-war.jpg?tf=1920x",
            descripcion: "Cuando un enemigo inesperado surge como una gran amenaza para la seguridad mundial, Nick Fury recluta a un equipo de superhéroes para salvar el mundo."
        },
        {
            id: "modalForrest",
            titulo: "Forrest Gump",
            imagen: "https://musicart.xboxlive.com/7/40025100-0000-0000-0000-000000000002/504/image.jpg",
            descripcion: "Forrest cuenta su vida desde un banco en Georgia, mientras recuerda cómo participó en eventos históricos importantes, a pesar de sus limitaciones mentales."
        },
        {
            id: "modalRapidos",
            titulo: "Rápidos y Furiosos",
            imagen: "https://musicart.xboxlive.com/7/a8c15100-0000-0000-0000-000000000002/504/image.jpg",
            descripcion: "Toretto y su equipo combinan carreras callejeras con misiones globales de alto riesgo mientras mantienen su lema: la familia es lo primero."
        },
        {
            id: "modalBigBang",
            titulo: "Big Bang Theory",
            imagen: "https://m.media-amazon.com/images/M/MV5BZjgzY2QyNzItNDhhYi00ZWIwLWFjN2UtZDJkN2MxYWNjMmJjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
            descripcion: "Un grupo de científicos vive situaciones hilarantes cuando una nueva vecina altera su mundo geek. Ciencia, amistad y comedia en una sola serie."
        },
        {
            id: "modalSpiderman",
            titulo: "Spiderman",
            imagen: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Spider-Man_Homecoming_-minimal_poster_by_abijithka.png",
            descripcion: "Peter Parker obtiene poderes arácnidos y decide usarlos para proteger Nueva York, mientras aprende que un gran poder conlleva una gran responsabilidad."
        },
        {
            id: "modalBatman",
            titulo: "Batman El Caballero de la Noche",
            imagen: "https://play-lh.googleusercontent.com/EGAMPH-ce931SI34Xvp9rrbbiFfWq1qkw2Llg1YeGxG13S5FXt8gbwzDqzre12gD03UvchcWJOaM9NnGzss",
            descripcion: "Con la ayuda del teniente Jim Gordon y del Fiscal del Distrito Harvey Dent, Batman mantiene a raya el crimen organizado en Gotham. Todo cambia cuando aparece el Joker, un nuevo criminal que desencadena el caos y tiene aterrados a los ciudadanos."
        }
    ];

    return (
        <div className="container mt-5 bg-dark text-light p-4 rounded">
            <div className="row g-4">
                {peliculas.map((p) => (
                    <div className="col-md-4" key={p.id}>
                        <div className="card h-100 shadow-lg border-0 bg-secondary text-light">
                            <img
                                src={p.imagen}
                                className="card-img-top rounded-top"
                                alt={p.titulo}
                                style={{ height: "400px", objectFit: "cover" }}
                            />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title text-center">{p.titulo}</h5>
                                <button
                                    type="button"
                                    className="btn btn-outline-light mt-auto custom-hover"
                                    data-bs-toggle="modal"
                                    data-bs-target={`#${p.id}`}
                                >
                                    Ver más
                                </button>
                            </div>
                        </div>

                        {/* Modal */}
                        <div className="modal fade" id={p.id} tabIndex="-1" aria-labelledby={`${p.id}Label`} aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content bg-dark text-light border-light">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id={`${p.id}Label`}>{p.titulo}</h5>
                                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">{p.descripcion}</div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-outline-light" data-bs-dismiss="modal">Cerrar</button>
                                        <button type="button" className="btn btn-primary">Ver más</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Estilo personalizado para efecto hover */}
            <style>{`
                .custom-hover:hover {
                    background-color: #0d6efd;
                    color: white;
                    transition: all 0.3s ease;
                }
            `}</style>
        </div>
    );
}


function Inicio() {
  return (
    <div className="container mt-4">
      <div className="row g-3">
        <div className="col-md-4">
          <Tarjetas
            titulo="Robert Deniro"
            texto="Robert De Niro es un legendario actor estadounidense, nacido el 17 de agosto de 1943 en Nueva York. Es conocido por sus papeles icónicos en películas como Taxi Driver, El Padrino: Parte II, Toro Salvaje y Goodfellas. Ha trabajado en múltiples géneros, desde drama y suspenso hasta comedia, y ha colaborado frecuentemente con el director Martin Scorsese. Su talento le ha valido dos premios Óscar, además de otros reconocimientos a lo largo de su carrera
"
            imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgHu_ySlhpNdBdJclvDlIJeylrnyqtK8igPBtTZzgTpQ_BitOBUus7Ovh-oXwy_HxjqzQRBf_z_pIe0_CHM9fyvA"
          />
        </div>
        <div className="col-md-4">
          <Tarjetas
            titulo="Harrison Ford"
            texto="Harrison Ford es un actor icónico estadounidense, nacido el 13 de julio de 1942 en Chicago. Es mundialmente reconocido por interpretar a Han Solo en Star Wars y a Indiana Jones en la saga homónima. Su carrera despegó gracias a su colaboración con George Lucas y Steven Spielberg, convirtiéndose en una de las estrellas más taquilleras de Hollywood. Además de su éxito en el cine, es piloto de aviación y ambientalista
"
            imagen="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQnzg5Fw80Xvzwz-f5xNSAjA3kV_epQ7iIpLIOQ4IdKfmSTZM38kqPc6rgdDGKKaJKIDsJ_aqsQm1KXkt0"
          />
        </div>
        <div className="col-md-4">
          <Tarjetas
            titulo="Leonardo Dicaprio"
            texto="Leonardo DiCaprio es un actor, productor y ambientalista estadounidense, nacido el 11 de noviembre de 1974 en Los Ángeles. Es reconocido por su talento y versatilidad en películas como Titanic, El aviador, El lobo de Wall Street y El renacido, por la que ganó un Óscar al mejor actor. Además de su carrera cinematográfica, es un activista comprometido con el medio ambiente, promoviendo iniciativas para la conservación del planeta
"
            imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ3Bp66Izb88A_B1DlFmZ-fDOIwgD3zfFDQn7vSb66-YfWSCyUeTrXreTwrTgUkbYl6j99rn5Zgkbxhcpd0_Id7Q"
          />
        </div>
        <div className="col-md-4">
          <Tarjetas
            titulo="Hailee Steinfeld"
            texto=" Hailee Steinfeld, una actriz y cantante estadounidense, nacida el 11 de diciembre de 1996 en Los Ángeles. Se hizo famosa por su papel en True Grit (2010), que le valió una nominación al Óscar. También ha participado en películas como El juego de Ender, Bumblebee y Spider-Man: Into the Spider-Verse. En televisión, interpretó a Emily Dickinson en la serie Dickinson y a Kate Bishop en Hawkeye. Además, ha desarrollado una carrera musical con éxitos como Love Myself y Starving
"
            imagen="https://media.vogue.mx/photos/5fefc9be9342f2b02c7a6252/master/pass/hailee-steinfield-actriz-estadounidense.jpg"
          />
        </div>
        <div className="col-md-4">
          <Tarjetas
            titulo="Emma Watson"
            texto="Emma Watson es una actriz, modelo y activista británica, nacida el 15 de abril de 1990 en París. Se hizo mundialmente famosa por interpretar a Hermione Granger en la saga Harry Potter, papel que desempeñó desde los nueve años. Además de su carrera en el cine, ha trabajado en la moda y ha sido embajadora de ONU Mujeres, promoviendo la igualdad de género
"
            imagen=" https://www.infobae.com/resizer/v2/ESJE3SSHUBBLZIZVPGCMZD2EOA.jpg?auth=46de9f9468a3c70f267940f29d7562bb94a510ba355ca6792ff7c79422656046&smart=true&width=1200&height=1200&quality=85"
          />
        </div>
        <div className="col-md-4">
          <Tarjetas
            titulo="Margaret Qualley"
            texto="Margaret Qualley es una actriz y modelo estadounidense, nacida el 23 de octubre de 1994 en Kalispell, Montana. Es hija de la actriz Andie MacDowell y comenzó su carrera en el mundo del ballet antes de dedicarse a la actuación. Se hizo conocida por su papel en la serie The Leftovers y ha participado en películas como Once Upon a Time in Hollywood, Death Note y La Sustancia. Su talento y versatilidad la han convertido en una figura destacada en el cine contemporáneo
"
            imagen="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Margaret_Qualley_by_Gage_Skidmore.jpg/250px-Margaret_Qualley_by_Gage_Skidmore.jpg"
          />
        </div>
        <div className="col-md-4">
          <Tarjetas
            titulo="Robert Downey Jr"
            texto="Robert Downey Jr. es un actor, productor y cantante estadounidense, nacido el 4 de abril de 1965 en Nueva York. Es conocido por su versatilidad y carisma en la pantalla, destacando en películas como Chaplin, Sherlock Holmes y, sobre todo, como Iron Man en el Universo Cinematográfico de Marvel. Su carrera ha estado marcada por altibajos, incluyendo problemas personales y un regreso triunfal que lo convirtió en uno de los actores mejor pagados de Hollywood
"
            imagen="https://images.hellomagazine.com/horizon/square/f835369de025-robert-downey-jr.jpg"
          />
        </div>
        <div className="col-md-4">
          <Tarjetas
            titulo="Jake Gyllenhaal"
            texto="Jake Gyllenhaal es un actor y productor estadounidense, nacido el 19 de diciembre de 1980 en Los Ángeles. Es conocido por su versatilidad en películas como Donnie Darko, Brokeback Mountain, Nightcrawler y Spider-Man: Far From Home, donde interpretó a Mysterio. Ha trabajado en una amplia gama de géneros, desde thrillers psicológicos hasta dramas y acción. Además, ha sido activista en diversas causas sociales y ambientales
"
            imagen="https://www.buscabiografias.com/img/people/Jake_Gyllenhaal.jpg"
          />
        </div>
        <div className="col-md-4">
          <Tarjetas
            titulo="Henry Cavill"
            texto="Henry Cavill es un actor británico, nacido el 5 de mayo de 1983 en Saint Helier, Jersey. Se hizo famoso por interpretar a Superman en El Hombre de Acero (2013) y sus secuelas dentro del Universo DC. También destacó en la serie The Tudors y como Geralt de Rivia en The Witcher. Además de su carrera en el cine y la televisión, es un apasionado del deporte y la literatura
"
            imagen="https://hips.hearstapps.com/hmg-prod/images/actor-henry-cavill-arrives-at-the-premiere-of-warner-bros-news-photo-1622539515.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=1200:*"
          />
        </div>
      </div>
    </div>
  );
}

function Principal() {
  return (
    <div>
      <header className="bg-dark text-white py-4">
        <div className="container text-center">
          <h1 className="fw-bold display-5" style={{ letterSpacing: "1px" }}>
            <i className="bi bi-camera-reels-fill me-2 text-warning" />
            CINEMATECA BOLIVIANA
          </h1>
          <p className="lead text-warning fst-italic">
            Tu portal de cine clásico y boliviano
          </p>
        </div>
      </header>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
        <div className="container">
          <Link className="navbar-brand fw-bold fs-4" to="/">
            <i className="bi bi-film" /> Diego Hernan Ramos Choque
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto fs-5">
              <li className="nav-item mx-2">
                <Link className="nav-link active" to="/pag1">
                  <i className="bi bi-house-door-fill me-1" /> Inicio
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/pag2">
                  <i className="bi bi-camera-reels-fill me-1" /> Películas
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className="container my-5">
        <Routes>
          <Route path="/pag1" element={<Inicio />} />
          <Route path="/pag2" element={<Peliculas />} />
        </Routes>
      </main>
     
  

{/* Publicidad llamativa */}
    {/* Publicidad llamativa con estrenos */}
<section className="bg-light py-5 border-top border-bottom">
  <div className="container text-center">
    <h2 className="mb-4 text-dark">
      <i className="bi bi-star-fill text-warning me-2" />
      🎬 Estrenos Exclusivos en la Cinemateca
    </h2>

    <div className="row justify-content-center">
      {/* Tarjeta 1 */}
      <div className="col-md-4 mb-4">
        <div className="card h-100 shadow-sm">
          <img
            src="https://i.blogs.es/04e16f/personajes-tu-amigo-vecino-spider-man-estreno-mexico-disney-plus/650_1200.jpeg"
            className="card-img-top"
            alt="friendly neighborhood spider"
            style={{ height: "300px", objectFit: "cover" }}
          />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title fw-bold">Friendly Neighborhood Spider</h5>
            <p
              className="card-text text-muted flex-grow-1"
              style={{ fontSize: "0.95rem", maxHeight: "160px", overflowY: "auto" }}
            >
              El joven Peter Parker acaba de descubrir sus poderes, pero ser Spider-Man no es tan sencillo como esperaba...
            </p>
            <a href="/pag2" className="btn btn-warning mt-auto">
              Ver más <i className="bi bi-film ms-1" />
            </a>
          </div>
        </div>
      </div>

      {/* Tarjeta 2 */}
      <div className="col-md-4 mb-4">
        <div className="card h-100 shadow-sm">
          <img
            src="https://m.media-amazon.com/images/M/MV5BMGNiN2RlZTMtMTkyZC00YjkwLTgyY2QtMDg1ZDNhODQwNWM4XkEyXkFqcGc@._V1_.jpg"
            className="card-img-top"
            alt="Avenger Doomsday"
            style={{ height: "300px", objectFit: "cover" }}
          />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title fw-bold">Avengers: Doomsday</h5>
            <p
              className="card-text text-muted flex-grow-1"
              style={{ fontSize: "0.95rem", maxHeight: "160px", overflowY: "auto" }}
            >
              Iron Man, Thor, Capitán América y el resto de los héroes deben enfrentarse a su batalla más desesperada...
            </p>
            <a href="/pag2" className="btn btn-warning mt-auto">
              Ver más <i className="bi bi-film ms-1" />
            </a>
          </div>
        </div>
      </div>

      {/* Tarjeta 3 */}
      <div className="col-md-4 mb-4">
        <div className="card h-100 shadow-sm">
          <img
            src="https://musicart.xboxlive.com/7/51bf5000-0000-0000-0000-000000000002/504/image.jpg"
            className="card-img-top"
            alt="Freddy vs Jason"
            style={{ height: "300px", objectFit: "cover" }}
          />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title fw-bold">Freddy vs Jason</h5>
            <p
              className="card-text text-muted flex-grow-1"
              style={{ fontSize: "0.95rem", maxHeight: "160px", overflowY: "auto" }}
            >
              El terror regresa… y esta vez, nadie está a salvo. Cuando un eclipse de sangre oscurece el cielo, Freddy y Jason despiertan...
            </p>
            <a href="/pag2" className="btn btn-warning mt-auto">
              Ver más <i className="bi bi-film ms-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      <footer className="bg-dark text-white mt-5">
        {/* Publicidad */}
        <div className="bg-warning text-dark py-3 text-center fs-5">
          <strong>Publicidad:</strong> ¡Disfruta nuestras películas clásicas todos los miércoles a mitad de precio!
        </div>

        {/* Redes sociales */}
        <div className="text-center py-3">
          <a href="https://facebook.com" target="_blank" className="text-white mx-2 fs-4">
            <i className="bi bi-facebook" />
          </a>
          <a href="https://instagram.com" target="_blank" className="text-white mx-2 fs-4">
            <i className="bi bi-instagram" />
          </a>
          <a href="https://youtube.com" target="_blank" className="text-white mx-2 fs-4">
            <i className="bi bi-youtube" />
          </a>
        </div>

        {/* Derechos reservados */}
        <div className="py-2 border-top border-secondary text-center">
          <small>
            © {new Date().getFullYear()} Diego Hernan | Todos los derechos reservados.
          </small>
        </div>
      </footer>
    </div>
  );
}

export default Principal;
