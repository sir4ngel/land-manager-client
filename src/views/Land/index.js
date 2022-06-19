import LandList from "../../components/LandList";
import Map from "../../components/Map";
const DATA = [
  {
    title: "Predio 1",
    description: "Mesa del Seri - Maleza"
  },
  {
    title: "Predio 2",
    description: "Mesa del Seri - Maleza"
  },
  {
    title: "Predio 3",
    description: "Mesa del Seri - Hermosillo"
  }
]
export default function LandHomeView() {
  return (
    <div className="subcontainer">
      <div className="list">
        <input type={"search"} className={'form-control mb-2'} placeholder={'Toca para buscar...'} />
        <LandList data={DATA} />
      </div>
      <div className="map">
        <Map />
      </div>
    </div>
  )
}
