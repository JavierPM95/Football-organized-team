import React from 'react';
import {connect} from 'react-redux';

const Players = ({players, addMainline, addAlternate}) => (
<section>
    <h2 className="container"> Avaliable players</h2>
    <div className=" container players-container" >
        {
            players.map(p =>(
                <article key={p.id} className="player">
                    <img className="player-img" src={p.photo} alt={p.name}/>
                    <h3>{p.name}</h3>
                    <div>
                        <button onClick={() => addMainline(p)} className="btn btn-primary">Mainline</button>
                        <button onClick={() => addAlternate(p)} className="btn btn-secondary">Alternate</button>
                    </div>
                </article>
            ))
        }
    </div>
</section>
)

const mapStateToProps = state => ({
    players: state.players
})

const mapDispatchToProps = dispatch => ({
    addMainline(player) {
        dispatch ({
            type: "Add-player",
            player
        })
    },

    addAlternate(player) {
        dispatch ({
            type: "Add-alternate",
            player
        })
    }
})

export default connect (mapStateToProps, mapDispatchToProps)(Players)