import React, {useEffect} from "react";

const ImpactCarbone = () => {

    let queryParams = {km: 250, param: '&transportations=', transport_id: 3 }
    let endpoint = 'https://api.monimpacttransport.fr/beta/getEmissionsPerDistance?km='
        + queryParams.km
        + queryParams.param
        +queryParams.transport_id;

    useEffect(async () => {
        try {
            const response = await fetch(endpoint)
            const data = await response.json();

            //console.log(data[0].emissions.kgco2e);
        } catch (e) {
            console.log(e)
        }
    }, [])

    return <div></div>;
}

export default ImpactCarbone;