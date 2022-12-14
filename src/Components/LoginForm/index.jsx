import api from "../../Services/api";
import styles from "./styles.module.css";
import { ToastContainer, toast } from "react-toastify";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { themeContext } from '../../contexts/ThemeProvider'

const LoginForm = () => {

  const navigate = useNavigate();

  const { theme } = useContext(themeContext);

  // const{dentistas, dentista, getAllDentistas, getDentista} = useContext(DentistaContext);

  const {userData, fillUserDataState} = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    await auth();
  }
  
  async function auth(){
    console.log(auth);
    
    try {
      const response = await api.post("/auth", {
        username: username,
        password: password,
      });
      localStorage.setItem("token", response.data.token)
      toast("Autenticação realizada com sucesso!", {type: "success"});
      alert("Autenticação realizada com sucesso!");
      navigate("/home");
      fillUserDataState({
        username: response.data.username,
        token: response.data.token,
        password: response.data.password,
      });
      
    } catch (error) {
      toast.error("Erro de autenticação", {position: "bottom-center" });
      }
    }

  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
     <div className={theme === "light"
            ? `text-center card container ${styles.card}`
            : `text-center card container dark ${styles.card} ${styles.cardDark}`}>
        <div className={`card-body ${styles.CardBody}`}>
          <form onSubmit={handleSubmit}>
            <input
              value = {username}
              onChange={(event) => setUsername(event.target.value)}
              className={`form-control ${styles.inputSpacing}`}
              placeholder="Login"
              name="login"
              required
            />
            <input
              value = {password}
              onChange={(event) => setPassword(event.target.value)}
              className={`form-control ${styles.inputSpacing}`}
              placeholder="Password"
              name="password"
              type="password"
              required
            />
            <button className="btn btn-primary" type="submit">
              Send
            </button>
          </form>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default LoginForm;