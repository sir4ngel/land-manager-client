import AddIcon from '../assets/icons/add.png';

export default function AddButton(props) {
    return (
        <button onClick={() => props.setIsFormVisible(true)} style={{ display: 'flex', overflow: 'hidden', marginBottom: 15 }} className={'form-control'}>
            <img src={AddIcon} alt={"LocationIcon"} style={{ height: 24, width: 24, marginRight: 10 }} />
            <span>Agregar campo</span>
        </button>
    )
}
