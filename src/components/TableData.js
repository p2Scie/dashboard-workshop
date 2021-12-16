import React, {useEffect} from "react";
import axios from "axios"

const TableData = () => {

    const addresses = [
        {from: "16 RUE DU BOIS JOLY 92000 NANTERRE", to: "313 Terasse de l'ARCHE 92000 NANTERRE FRANCE"},
        {from: "77 RUE DU GENERAL LECLERC 95600 EAUBONNE", to: "125 avenue de Paris Châtillon 92320"},
        {from: "109 RUE DU GENERAL LECLERC 95600 EAUBONNE", to: "48 rue de Neuilly 92110 CLICHY France"},
        {from: "3 AV DIVISION LECLERC ANTONY 92160", to: "18 RUE TAYLOR Paris 75010"},
        {from: "313 Terrasse de l'Arche 92727 NANTERRE FRANCE", to: "40 impasse Madeleine Brès Lieusaint 77127"},
        {from: "5, rue de la Terrasse Paris 75017", to: "18 RUE TAYLOR Paris 75010"},
        {from: "13-15 Avenue du Maréchal Juin 92360 MEUDON LA FORÊT FRANCE", to: "50 boulevard Voltaire PARIS 75011"},
        {from: "34 RUE DE LA FORET EPINAY SOUS SENART 91860", to: "30 AVENUE CORENTIN CARIOU Paris 75019"},
        {from: "72 rue de la République 76140 LE PETIT QUEVILLY FRANCE", to: "10, ALLEE DES CASCADES VILLEPINTE 93420"},
    ];


    useEffect(() => {
        console.log(getGeometryCoordinates());
    })

    const getGeometryCoordinates = () => {

        let geometryCoordinates = [];

        addresses.forEach(address => {
            const geometryCoordinate = {from: "", to: ""};

            axios.get("https://api-adresse.data.gouv.fr/search/?q=" + address.from)
                .then((response) => {
                    geometryCoordinate.from = response.data.features[0].geometry.coordinates;
                })
                .then(() => {
                    axios.get("https://api-adresse.data.gouv.fr/search/?q=" + address.to)
                        .then((response) => {
                            geometryCoordinate.to = response.data.features[0].geometry.coordinates;
                        })
                        .then(() => {
                            geometryCoordinates.push(geometryCoordinate);
                        });
                });
        })

        return geometryCoordinates;
    }

    return (
        <div>
            <h1>Hi</h1>

        </div>
    )
}

export default TableData;