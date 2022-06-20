import { useEffect, useState } from "react";
import LandList from "../../components/LandList";
import Map from "../../components/Map";

import AddButton from "../../components/AddButton";
import LandForm from "../../components/LandForm";

export default function LandHomeView() {
  const [lands, setLands] = useState([]);
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [geom, setGeom] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false);

  const getLands = async () => {
    const data = await fetch('http://localhost:3001/lands/')
      .then(res => res.json())
      .then(res => res)
      .catch(error => alert(error));

    if (data.status === 'ERROR') {
      alert(data.message);
    } else {
      setLands(data.data);
      console.log(data);
    };
  };

  const deleteLand = async (id) => {
    const data = await fetch('http://localhost:3001/lands/' + id, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(res => res)
      .catch(error => alert(error));

    if (data.status === 'ERROR') {
      alert(data.message);
    } else {
      getLands();
    };
  };

  const addLand = async () => {
    if (!name) {
      alert('El campo nombre está vacío')
    } else if (!city) {
      alert('El campo ciudad está vacío')
    } else if (!geom) {
      alert('El campo coordenadas está vacío')
    } else {
      const req = {
        name: name,
        city: city,
        geom: geom
      };
      const data = await fetch('http://localhost:3001/lands/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(req)
      })
        .then(res => res.json())
        .then(res => res)
        .catch(error => alert(error));
      if (data.status === 'ERROR') {
        alert(data.message);
      } else {
        getLands();
      };

      setName("");
      setCity("");
      setGeom("");
      setIsFormVisible(false);
    }
  };

  useEffect(() => {
    getLands();
    return () => {
    }
  }, [])

  return (
    <div className="subcontainer">

      <div className="list">
        <input type={"search"} className={'form-control mb-2'} placeholder={'Toca para buscar...'} />
        <AddButton setIsFormVisible={setIsFormVisible} />
        <LandList data={lands} deleteLand={deleteLand} />
      </div>
      <div className="map">
        {
          !isFormVisible &&
          <Map lands={lands} />
        }
      </div>
      {
        isFormVisible &&
        <LandForm addLand={addLand} setIsFormVisible={setIsFormVisible} setName={setName} setCity={setCity} setGeom={setGeom} />
      }
    </div>
  )
}
