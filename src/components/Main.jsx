import { useState } from 'react'
import props from '../data/languages'
import Card from './Card'

function Main() {

    const [selected, setSelected] = useState(null);

    function onClick(id) {
        setSelected(currentId => currentId === id ? null : id);
    };



    return (<>
        <main>
            <div className='container-md my-5'>
                <div className='d-flex gap-3 justify-content-center'>
                    {props.map(e => (
                        <button onClick={() => onClick(e.id)} key={e.id} type="button" className={`btn ${selected === e.id ? 'btn-warning' : 'btn-primary'}`}>{e.title}</button>
                    ))}
                </div>

                <Card state={selected} data={props} />


            </div>
        </main>
    </>
    )
}

export default Main