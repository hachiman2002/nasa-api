import { getCurrentDate } from "./get-current-date";
/**
* 
* @returns{Promise<Object>} quote information
*/

export const fetchQuote = async (date = null) => {
    
    if (!date) {
        date = getCurrentDate();
    }
    const key = "EqSMx0ZgrT2KnaaNfkXDVmUcCJ3ntMZBs43akuxO";
    const res = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${date}&end_date=${date}&api_key=${key}`)
    const data = await res.json();
    console.log(data);

    return data;
}