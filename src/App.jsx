import { useEffect, useState } from "react";
import axios from "axios";
import HeaderComponent from "./components/HeaderComponent";
import LoadingComponent from "./components/LoadingComponent";
import UserListComponent from "./components/UserListComponent";
import "./styles.css";

const API_URL = "https://jsonplaceholder.typicode.com/users";

const filtrarUsuariosPorTermo = (termo) => (usuario) => {
    const termoLower = termo.toLowerCase();

    return [usuario.name, usuario.username, usuario.email]
        .some((campo) => campo.toLowerCase().includes(termoLower));
};

function App() {
    const [usuarios, setUsuarios] = useState([]);
    const [erro, setErro] = useState(null);
    const [carregando, setCarregando] = useState(true);
    const [busca, setBusca] = useState("");
    const usuariosFiltrados = usuarios.filter(filtrarUsuariosPorTermo(busca));

    useEffect(() => {
        async function buscarUsuarios() {
            try {
                const response = await axios.get(API_URL);
                setUsuarios(response.data);
            } catch (error) {
                console.error("Erro ao buscar usuários:", error);
                setErro(`Não foi possível buscar os usuários. Erro: ${error.message}`);
            } finally {
                setCarregando(false);
            }
        }

        buscarUsuarios();
    }, []);

    return (
        <main className="app">
            <div className="app-shell">
                <HeaderComponent busca={busca} onBuscaChange={setBusca} />
                <section className="content">
                    <p className="results-count">Usuários encontrados: {usuariosFiltrados.length}</p>
                    {carregando && <LoadingComponent />}
                    {erro && <p className="error-message">{erro}</p>}
                    {!carregando && !erro && (
                        <UserListComponent usuarios={usuariosFiltrados} />
                    )}
                </section>
            </div>
        </main>
    );
}

export default App;