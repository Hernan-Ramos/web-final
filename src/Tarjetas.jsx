function Tarjetas({ titulo, texto, imagen }) {
  return (
    <div className="card text-center">
      <img
        src={imagen}
        alt={titulo}
        className="card-img-top img-fluid rounded-circle object-fit-cover mx-auto mt-3"
        style={{ width: "400px", height: "400px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title">{titulo}</h5>
        <p className="card-text">{texto}</p>
      </div>
    </div>
  );
}
export default Tarjetas;