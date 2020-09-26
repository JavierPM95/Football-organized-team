import React from 'react';
import {connect} from 'react-redux';
import field from '../soccer-field.svg'
const Mainline = ({mainline, removeMainline}) => (
    <section>
        <h2>Mainline</h2>
        <div className="mainline">
            {
                mainline.map(p =>(
                    <article key={p.id} className="mainlines">
                    <div>
                    <img src={p.photo} alt={p.name}/>
                        <button className="btn btn-danger" onClick={() => removeMainline(p)}>X</button>
                    </div>
                    <p>{p.name}</p>
                </article>
                ))
            }
            <img src={field} alt="soccer-field" className="field"/>
        </div>
    </section>
)

const mapStateToProps = state => ({
    mainline: state.mainline
})

const mapDispatchToProps = dispatch => ({
    removeMainline(player) {
        dispatch ({
            type: "Remove-mainline",
            player
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Mainline)