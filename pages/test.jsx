import { useEffect, useState } from 'react';
import axios from 'axios'

const fetchData = async () => {        
    const res = await axios.get('https://randomuser.me/api/?results=20')           
    console.log(res.data.results);
    return res.data.results
}

const flatLocations = (locations) => {
    console.log(locations);
    const flattenedLocation = []
    for (const location of locations) {
        
    }
}


const test = () => {
    const [people, setPeople] = useState([])
    const [flattenedLocations, setFlattenLocations] = useState([])

    useEffect(() => { 
        fetchData().then(apiPeople => {
            setPeople(apiPeople)
            setFlattenLocations(
                flatLocations(apiPeople.map(({location}) => location)))
        })

        const fetchDatas = async () => {
            const apiPeople = await fetchData()
            setPeople(apiPeople)
            setFlattenLocations(
                flatLocations(apiPeople.map(({location}) => location))
            )
        }
        fetchDatas()
    }, [])


    return (
        <div>
            {people.map((person, idx) => (
                <div style={{marginBottom: "25px"}}>
                    <div>{person.name.first} {person.name.last}</div>
                    <div>
                        {person.location.city}
                    </div>
                </div>                
            ))}
        </div>
    )
};

export default test;
