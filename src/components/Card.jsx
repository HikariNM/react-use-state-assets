function Card({ state, data }) {
    return (
        <div className='d-flex justify-content-center my-5'>
            <div className={`${state ? 'p-4 border border-warning rounded-top bg-light-subtle' : 'p-4'}`}>
                <h3>{state ? data.find(e => e.id === state).title : 'Nessun linguaggio selezionato'}</h3>
                <p>{state ? data.find(e => e.id === state).description : ''}</p>
            </div>
        </div>

    )
};
export default Card