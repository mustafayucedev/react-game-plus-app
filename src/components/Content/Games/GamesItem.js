function GamesItem ( {data: {character,games}} ) {
  return (
    <>
        <div className="games-item">
            <div className="games-title">
                <h3> {character} </h3>
            </div>
            <div className="games-content">
                <ul>
                    {games.map((game) => 
                        <li>
                            <a href="/" title={game}> {game} </a>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    </>
  )
}

export default GamesItem