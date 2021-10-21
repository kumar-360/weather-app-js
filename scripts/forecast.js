const key = 'tOyuMjr9HAcGbNBMiM1FNAlIY1p8eSJy';
const getWeather = async (id) => {
    const base = 'https://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;
    const response = await fetch(base + query);
    if (response.status != 200) throw new Error('Some error occured. Please try again.');
    const data = await response.json();
    if (!data.length) throw new Error('Some error occured. Please try again.');
    return data[0];
};
const getCity = async (city) => {
    const base = 'https://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;
    const response = await fetch(base + query);
    if (response.status != 200) throw new Error('Some error occured. Please try again.');
    const data = await response.json();
    if (!data.length) throw new Error('Some error occured. Please try again.');
    return data[0];
};