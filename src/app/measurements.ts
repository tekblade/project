export interface Measurements {
    current: [];
    forecast: [];
    history: [];
}


export interface WeatherReadout {
    fromDateTime: string,
    tillDateTime: string,
    values: {name: string, value: number}[],
    indexes: {
      name: string,
      value: number,
      level: string,
      description: string,
      advice: string,
      color: string
    }[],
    starndards: {
      name: string,
      pollutant: string,
      limit: number,
      percent: number
    }[]
  }
  
export  interface WeatherData {
    current: WeatherReadout,
    history: WeatherReadout[],
    forecast: WeatherReadout[]
  }
  