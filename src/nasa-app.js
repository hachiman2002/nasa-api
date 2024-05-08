import './presentation/table/table.css';
import html from './presentation/loader-spinner/loader-spinner.html?raw'
import { createTable } from './presentation/table/create-table';
import { fetchQuote } from './functions/fetch-quote';
import { getCurrentDate } from './functions/get-current-date';

let table;


/**
 * @param {HTMLDivElement} element 
 */
export const NasaApp = async (element) => {
    console.log("App nasa");

    element.innerHTML = html;

    const renderQuote = async(data) =>{

        data = await fetchQuote();

        const date = getCurrentDate();

        
        const asteroidObjects = data.near_earth_objects[date];

        if(!table){
            table = createTable();
            element.replaceChildren( table );
        }
        
        let tableHTML = '';

        asteroidObjects.forEach(asteroid => {
            const dangerClass = asteroid.is_potentially_hazardous_asteroid ? 'text-danger' : '';
            tableHTML += `
                    <tr>
                        <td>${asteroid.id}</td>
                        <td>${asteroid.name}</td>
                        <td class="${dangerClass}">${asteroid.is_potentially_hazardous_asteroid ? 'Yes' : 'No'}</td>
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