export default function LandForm(props) {
    return (
        <div style={{ height: '90%', width: '100%', backgroundColor: '#000000AA', position: 'absolute', alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
            <form>
                <div style={{ marginBottom: 10 }}>Ingresa los datos del campo</div>
                <input onChange={(e) => props.setName(e.target.value)} style={{ marginBottom: 10 }} type={'text'} placeholder={'Nombre del campo'} className={'form-control'} />
                <input onChange={(e) => props.setCity(e.target.value)} style={{ marginBottom: 10 }} type={'text'} placeholder={'Ciudad'} className={'form-control'} />
                <input onChange={(e) => props.setGeom(e.target.value)} style={{ marginBottom: 10 }} type={'text'} placeholder={'Coords. geoespaciales'} className={'form-control'} />
                <button onClick={props.addLand} type="button" className={'form-control btn btn-success mb-3'}>
                    Enviar
                </button>
                <button onClick={() => props.setIsFormVisible(false)} type="button" className={'form-control btn btn-danger'}>
                    Cerrar
                </button>
            </form>
        </div>
    )
}
