import cards from './PokeList'
import './Pokedex.css'

const Pokedex = () => {
  return (
    <div class="w3-container w3-center">
      <h3>Pokedex</h3>
      <div class="w3-cell-row w3-center">
      {cards.map(c =>(
          <div className="w3-cell Pokecard">
            <h3 className="w3-text-black Pokecard-name">{c.name}</h3>
            <div className="Pokecard-img">
              <img src={c.img} />
            </div>
            <div className="Pokecard-stats">
              <h5 className="Pokecard-type">TYPE: {c.type}</h5>
              <h5 className="Pokecard-exp">EXP: {c.base_experience}</h5>
            </div>
          </div>
      ))}
      </div>
    </div>
  )
}

export default Pokedex
