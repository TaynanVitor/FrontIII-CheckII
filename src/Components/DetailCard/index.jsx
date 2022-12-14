import ScheduleFormModal from '../ScheduleFormModal'

import styles from './styles.modules.css'
import { useEffect } from 'react'
import { DentistaContext } from '../../contexts/DentistaContext'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { themeContext } from '../../contexts/ThemeProvider';

const DetailCard = (props) => {

  const { theme } = useContext(themeContext)

  const { dentista } = props;

  const { id } = useParams();
  const{getDentista} = useContext(DentistaContext);

  useEffect(() => {
    getDentista(id);
  }, [])

  return (
    //As instruções que estão com {''} precisam ser
    //substituídas com as informações que vem da api
    <>
      <h1>Details about Dentist {dentista.nome}</h1>
      <section className="card col-sm-12 col-lg-6 container">
        {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
        <div className={`card-body row ${theme} === "dark" ? 'cardDark' : 'card-body'`}>
          <div className="col-sm-12 col-lg-6">
            <img
              className="card-img-top"
              src="/images/doctor.jpg"
              alt="doctor placeholder"
            />
          </div>
          <div className="col-sm-12 col-lg-6">
            <ul className="list-group">
              <li className="list-group-item">Nome: {dentista.nome}</li>
              <li className="list-group-item">
                Sobrenome: {dentista.sobrenome}
              </li>
              <li className="list-group-item">
                {/* Usuário: {dentista.usuario.username} */}
              </li>
            </ul>
            <div className="text-center">
              {/* //Na linha seguinte deverá ser feito um teste se a aplicação
              // está em dark mode e deverá utilizado o css correto */}
              <button
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                className={`btn ${theme} === "dark" ? 'dark' : 'light'  btn-light ${styles.button}`}
              >
                Marcar consulta
              </button>
            </div>
          </div>
        </div>
      </section>
      <ScheduleFormModal />
    </>
  )
}

// `${dentista.usuario}`
export default DetailCard