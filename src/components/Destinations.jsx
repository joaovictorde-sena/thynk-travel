import { destinations } from "../data/data";
import './Destinations.css'
const Destinations = () => {
  return (
    <section className="destinations" id="destinos">
      <div className="destinations-information">
        <h2>Escolha os melhores destinos na melhor agência</h2>
        <p>
          Com a Agência de Viagens, você pode escolher o local perfeito para
          suas férias. Oferecemos uma variedade de pacotes exclusivos e
          experiências inesquecíveis para todos os gostos.
        </p>
      </div>

      <div className="destinations-cards">
        {destinations.map((destino, index)=>(
            <div className="destination-card" key={index}>
                <img src= {destino.image} alt={destino.name} />
                <span>{destino.name}</span>
            </div>
        ))}
      </div>
    </section>
  );
};

export default Destinations;
