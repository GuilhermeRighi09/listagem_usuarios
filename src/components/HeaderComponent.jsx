function HeaderComponent({ busca, onBuscaChange }) {
    return (
        <header className="app-header">
            <h2 className="app-title">Catalogo de Usuários</h2>
            <label className="search-field">
                <input
                    type="text"
                    placeholder="filtrar usuarios..."
                    value={busca}
                    onChange={(evento) => onBuscaChange(evento.target.value)}
                />
            </label>
        </header>
    );
}

export default HeaderComponent;
