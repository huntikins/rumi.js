function GameCard({game}){
    return (
        <article className="room">
            <div className="room-data">
                <div className="room-data_title">
                    <h3>{game.name_name}</h3>
                    <h4>Host: {game.host_name}</h4>
                </div>
                <div className="room-data_info">
                    Players: {game.players.length} / {game.player_count}
                </div>
            </div>
        </article>
    )
}

export default GameCard;