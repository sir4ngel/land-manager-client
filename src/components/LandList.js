import LocationIcon from '../assets/icons/location.png';
import DeleteIcon from '../assets/icons/delete.png';

export default function LandList(props) {

    const Item = ({ item }) => (
        <div style={{ flexDirection: 'row', display: 'flex', backgroundColor: 'white', marginBottom: 10, borderRadius: 10 }}>
            <div style={{ width: '10%', alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
                <img src={LocationIcon} alt={"LocationIcon"} style={{ width: 24, height: 24 }} />
            </div>
            <div style={{ width: '80%' }}>
                <div style={{ color: 'black', fontWeight: 'bold' }}>{item.title}</div>
                <div style={{ color: 'black' }}>{item.description}</div>
            </div>
            <div style={{ width: '10%', display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
                <button className='btn btn-outline-danger' style={{ width: 30, height: 30, alignItems: 'center', justifyContent: 'center', display: 'flex' }} >
                    <img src={DeleteIcon} alt={"DeleteIcon"} style={{ width: 20, height: 20 }} />
                </button>
            </div>
        </div>
    );

    return (
        <div>
            {
                props.data.map((item, index) => (
                    <Item key={index} item={item} />
                ))
            }
        </div>
    )
}