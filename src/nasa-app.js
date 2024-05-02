import './table.css';
import html from './loader-spinner.html?raw'
import { createTable } from './create-table';
import { fetchQuote } from './fetch-quote';

let table;




/**
 * @param {HTMLDivElement} element 
 */
export const NasaApp = async (element) => {
    console.log("App nasa");
    console.log(html);
    element.innerHTML = html

    const renderQuote = async(data) =>{
        data = await fetchQuote();
        const asteroidObjects = data.near_earth_objects["2024-04-25"];

        if(!table){
            table = createTable();
            element.replaceChildren( table );
        }
        
        let tableHTML = '';

        asteroidObjects.forEach(asteroid => {
            tableHTML += `
                    <tr>
                        <td>${asteroid.id}</td>
                        <td>${asteroid.name}</td>
                        <td>${asteroid.is_potentially_hazardous_asteroid ? 'Yes' : 'No'}</td>
                        <td>${asteroid.absolute_magnitude_h}</td>
                        <td>
                            ${asteroid.estimated_diameter.kilometers.estimated_diameter_min}(km) <br>
                            ${asteroid.estimated_diameter.kilometers.estimated_diameter_min * 1000} (m)
                        </td>
                        <td>
                            ${asteroid.estimated_diameter.kilometers.estimated_diameter_max}(km) <br>
                            ${asteroid.estimated_diameter.kilometers.estimated_diameter_max * 1000} (m)
                        </td>
                        <td>${asteroid.close_approach_data[0].close_approach_date_full}</td>
                        <td>${asteroid.close_approach_data[0].relative_velocity.kilometers_per_hour}</td>
                    </tr>
            `
        });
        table.querySelector('tbody').innerHTML = tableHTML;
    }

    fetchQuote().then(renderQuote);
};