import React from 'react';
import {connect} from 'react-redux';

const Alternate = ({alternate, removeAlternate}) => (
    <section>
        <h2>Alternate</h2>
        <div className="alternate">
            {
                alternate.map(p =>(
                    <article key={p.id} className="alternates">
                        <div>
                        <img src={p.photo} alt={p.name}/>
                            <button className="btn btn-danger" onClick={() => removeAlternate(p)}>X</button>
                        </div>
                        <h5>{p.name}</h5>
                    </article>
                ))
            }
        </div>
    </section>
)

const mapStateToProps = state => ({
    alternate: state.alternate
})

const mapDispatchToProps = dispatch => ({
    removeAlternate(player) {
        dispatch ({
            type: "Remove-alternate",
            player
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Alternate)