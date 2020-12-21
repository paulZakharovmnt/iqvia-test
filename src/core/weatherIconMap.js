import day from "../icons/animated/day.svg";
import cloudy from "../icons/animated/cloudy.svg";
import night from "../icons/animated/night.svg";
import cloudy_day_3 from "../icons/animated/cloudy-day-3.svg";
import cloudy_night_3 from "../icons/animated/cloudy-night-3.svg";
import rainy_6 from "../icons/animated/rainy-6.svg";
import rainy_3 from "../icons/animated/rainy-3.svg";
import thunder from "../icons/animated/thunder.svg";
import snowy_6 from "../icons/animated/snowy-6.svg";

const weatherIconMap = {
  "01d": day,
  "01n": night,
  "02d": cloudy_day_3,
  "02n": cloudy_night_3,
  "03d": cloudy,
  "03n": cloudy,
  "04d": cloudy,
  "04n": cloudy,
  "09d": rainy_6,
  "09n": rainy_6,
  "10d": rainy_3,
  "10n": rainy_3,
  "11d": thunder,
  "11n": thunder,
  "13d": snowy_6,
  "13n": snowy_6,
  // There is no mist icons in pack
  "50d": cloudy,
  "50n": cloudy,
};

export default weatherIconMap;
