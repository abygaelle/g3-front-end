import * as profileService from '../../services/profileService'
const GameCard = ({game, user}) => {

  const handleAddGame = () => {
    // add game to profile
    profileService.addGame(user.profile, game)
  }

  const handleDeleteGame = () => {
    //delete game from profile
    profileService.deleteGame(user.profile, game)
  }

  return (  
<<<<<<< HEAD
<div className="card" style={{width: '18rem'}}>
  <img src={game.thumb_url} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{game.name}</h5>
    <p className="card-text">description goes here</p>
    <button className="btn btn-primary mx-2">Details</button>
    <button className="btn btn-primary mx-2">Add Game</button>
  </div>
</div>
=======
    <div className="card" style={{width: '15rem'}}>
      <img style={{height: '200px'}} src={game.thumb_url} className="img-thumbnail" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{game.name}</h5>
        {/* <p className="card-text">{game.description_preview}</p> */}
        <button className="btn btn-primary mx-2" data-toggle="collapse" data-target="#collapseExample">Details</button>
        <button onClick={handleAddGame} className="btn btn-primary">Add Game</button>
        <button onClick={handleDeleteGame} className="btn btn-primary mx-2">Delete</button>
      </div>
    </div>
>>>>>>> main
  );
}

export default GameCard;