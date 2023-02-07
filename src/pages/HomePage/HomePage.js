import React from "react";


export default function HomePage () {
    return (
    
        <div className="Home">
            <div className='Home-wrapper'>
                <div className='Home-section'>
                    <h2>Поколение</h2>
                    <label>
                        <input name="origin" type="radio" value="number" checked/>1-е
                    </label>
                    <label>
                        <input name="origin" type="radio" value="number" checked/>2-е
                    </label>
                        <label>
                        <input name="origin" type="radio" value="number" checked/>3-е
                    </label>
                        <label>
                        <input name="origin" type="radio" value="number" checked/>4-е
                    </label>
                        <label>
                        <input name="origin" type="radio" value="number" checked/>5-е
                    </label>
                        <label>
                        <input name="origin" type="radio" value="number" checked/>6-е
                    </label>
                        <label>
                        <input name="origin" type="radio" value="number" checked/>7-е
                    </label>
                        <label>
                        <input name="origin" type="radio" value="number" checked/>8-е
                    </label>
                        <label>
                        <input name="origin" type="radio" value="number" checked/>9-е новое
                    </label>
                    <h2>Тип</h2>
                    <p>Физические</p>
                    <p>Специальные</p>
                </div>
                <div className='Home-section2'>
                <div className='logoHome'>

                        </div>
                </div>
            </div>
        </div>
        )
}