function UserCardComponent({ usuario }) {
    return (
        <li className="user-card">
            <img
                className="user-photo"
                src={`https://i.pravatar.cc/150?img=${usuario.id}`}
                alt={`Foto de ${usuario.name}`}
            />
            <div className="user-info">
                <strong className="user-name">{usuario.name}</strong>
                <span className="user-username">@{usuario.username}</span>
                <a className="user-email" href={`mailto:${usuario.email}`}>
                    {usuario.email}
                </a>
            </div>
        </li>
    );
}

export default UserCardComponent;
