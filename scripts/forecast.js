class Forecast {
    constructor() {
        this.key = 'tOyuMjr9HAcGbNBMiM1FNAlIY1p8eSJy';
        this.weatherURL = 'https://dataservice.accuweather.com/currentconditions/v1/';
        this.cityURL = 'https://dataservice.accuweather.com/locations/v1/cities/search';
    }
    async updateCity(city) {
        const cityDets = await this.getCity(city);
        const weather = await this.getWeather(cityDets.Key);
        return { cityDets, weather };
    }
    async getCity(city) {
        const query = `?apikey=${this.key}&q=${city}`;
        const response = await fetch(this.cityURL + query);
        if (response.status != 200) throw new Error('Some error occured. Please try again.');
        const data = await response.json();
        if (!data.length) throw new Error('Some error occured. Please try again.');
        return data[0];
    }
    async getWeather(id) {
        const query = `${id}?apikey=${this.key}`;
        const response = await fetch(this.weatherURL + query);
        if (response.status != 200) throw new Error('Some error occured. Please try again.');
        const data = await response.json();
        if (!data.length) throw new Error('Some error occured. Please try again.');
        return data[0];
    }
}