import { useContext } from 'react';
import { themeContext } from '../../Contexts/ThemeProvider';
import ScheduleFormModal from '../ScheduleFormModal'

import styles from './styles.modules.css'

const DetailCard = (props) => {
  const { theme } = useContext(themeContext)

  const {dentista} = props;
  console.log(dentista)

  return (
    <>
      <h1>Detalhe sobre o dentista {dentista.nome}</h1>
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
              <li className="list-group-item"><strong>Nome: </strong> {dentista.nome}</li>
              <li className="list-group-item">
              <strong>Sobrenome:</strong> {dentista.sobrenome}
              </li>
              <li className="list-group-item"><strong>Matricula: </strong> {dentista.matricula}</li>
              <li className="list-group-item">
                {/* <strong>Usuário:</strong> {dentista.usuario.username} ***FAVOR NOTAR QUE O CAMINHO ESTÁ ACUSANDO COMO UNDEFINED E QUEBRANDO A APLICAÇÃO** */}
                
              </li>
            </ul>
            <div className="text-center">
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

export default DetailCard