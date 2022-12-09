import styles from "./styles.module.css";

const Card = (props) => {
  const {dentista} = props;
 
  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
      <div className={`card`}>
        <img
          className="card-img-top"
          src="/images/doctor.jpg"
          alt="doctor placeholder"
        />
        <div className={`card-body ${styles.CardBody}`}>
          <a href={`/dentista/${dentista.matricula}`}>
            <h5 className={`card-title ${styles.title}`}>{dentista.nome}</h5>
          </a>
            <p className={`card-title ${styles.title}`}>{dentista.sobrenome}</p>
          <button>Favoritar</button>
        </div>
      </div>
    </>
  );
};

export default Card;