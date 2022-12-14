import styles from "./styles.module.css";
import { DentistaContext } from '../../contexts/DentistaContext'
import { useContext } from 'react'
import { useEffect } from 'react'
import { themeContext } from '../../contexts/ThemeProvider';



const Card = (props) => {

  const {dentista} = props;

  const { theme } = useContext(themeContext)
  const{getDentista} = useContext(DentistaContext);

  useEffect(() => {
    getDentista(dentista.matricula);
  }, [])

 
  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
      <div className={theme === "light" ? `card` : `card dark ${styles.cardDark}`}>
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
          <button className={`btn btn-light ${styles.button}`} >Favoritar</button>
        </div>
      </div>
    </>
  );
};

export default Card;