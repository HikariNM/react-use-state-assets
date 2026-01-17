import { useState } from 'react'
import props from '../data/languages'


function Main() {

    const [selected, setSelected] = useState(null);

    function onClick(id) {
        setSelected(currentId => currentId === id ? null : id);
    };

    function Card() {
        return (
            <div className='d-flex justify-content-center my-5'>
                <div className={`${selected ? 'p-4 border border-warning rounded-top bg-light-subtle' : 'p-4'}`}>
                    <h3>{selected ? props.find(e => e.id === selected).title : 'Nessun linguaggio selezionato'}</h3>
                    <p>{selected ? props.find(e => e.id === selected).description : ''}</p>
                </div>
            </div>

        )
    };

    return (<>
        <main>
            <div className='container-md my-5'>
                <div className='d-flex gap-3 justify-content-center'>
                    {props.map(e => (
                        <button onClick={() => onClick(e.id)} key={e.id} type="button" className={`btn ${selected === e.id ? 'btn-warning' : 'btn-primary'}`}>{e.title}</button>
                    ))}
                </div>

                {Card()}

            </div>
        </main>
    </>
    )
}

export default Main