import {FC} from "react";
import cloudsd from '../assets/icons/cloudsd.png';
import cloudsn from '../assets/icons/cloudsn.png';
import clearskyd from '../assets/icons/clearskyd.png';
import clearskyn from '../assets/icons/clearskyn.png';
import fewcloudsd from '../assets/icons/fewcloudsd.png';
import fewcloudsn from '../assets/icons/fewcloudsn.png';
import mistd from '../assets/icons/mistd.png';
import mistn from '../assets/icons/mistn.png';
import raind from '../assets/icons/raind.png';
import rainn from '../assets/icons/rainn.png';
import drizzled from '../assets/icons/drizzled.png';
import drizzlen from '../assets/icons/drizzlen.png';
import snowd from '../assets/icons/snowd.png';
import snown from '../assets/icons/snown.png';
import thunderstormd from '../assets/icons/thunderstormd.png';
import thunderstormn from '../assets/icons/thunderstormn.png';

interface Props {
  imageName: string;
  description: string;
}

const CurrentWeatherIcon: FC<Props> = ({imageName, description}) => {

  const images: { [key: string]: string } = {
    'cloudsd': cloudsd,
    'cloudsn': cloudsn,
    'cleard': clearskyd,
    'clearn': clearskyn,
    'fewcloudsd': fewcloudsd,
    'fewcloudsn': fewcloudsn,
    'mistd': mistd,
    'mistn': mistn,
    'raind': raind,
    'rainn': rainn,
    'drizzled': drizzled,
    'drizzlen': drizzlen,
    'snowd': snowd,
    'snown': snown,
    'thunderstormd': thunderstormd,
    'thunderstormn': thunderstormn,
  }

  return (
    <div className="self-center">
      <img src={images[imageName]} alt={description} className="mb-2" />
      <p className="text-center">{description}</p>
    </div>
  );
};

export default CurrentWeatherIcon;