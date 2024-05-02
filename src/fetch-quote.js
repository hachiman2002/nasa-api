/**
* 
* @returns{Promise<Object>} quote information
*/

export const fetchQuote = async () => {
    const key = "EqSMx0ZgrT2KnaaNfkXDVmUcCJ3ntMZBs43akuxO";
    const res = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=2024-04-25&end_date=2024-04-25&api_key=${key}`)
    const data = await res.json();

    return data;
}