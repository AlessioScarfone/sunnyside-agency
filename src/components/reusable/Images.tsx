import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { ReactComponent as Hamburger } from "../../assets/images/icon-hamburger.svg";
import { ReactComponent as PinterestIcon } from "../../assets/images/icon-pinterest.svg";
import { ReactComponent as FacebookIcon } from "../../assets/images/icon-facebook.svg";
import { ReactComponent as InstagramIcon } from "../../assets/images/icon-instagram.svg";
import { ReactComponent as TwitterIcon } from "../../assets/images/icon-twitter.svg";
import { ReactComponent as ArrowDownIcon } from "../../assets/images/icon-arrow-down.svg";
import headerImgLg from "../../assets/images/desktop/image-header.jpg";
import headerImgSm from "../../assets/images/mobile/image-header.jpg";

import EggImgLg from "../../assets/images/desktop/image-transform.jpg";
import EggImgSm from "../../assets/images/mobile/image-transform.jpg";

class ImageSrc {
  smallSrc: string;
  largeSrc: string;

  constructor(smallSrc: string, largeSrc: string) {
    this.smallSrc = smallSrc;
    this.largeSrc = largeSrc;
  }
}

const HeaderImg = new ImageSrc(headerImgSm, headerImgLg);
const EggImg = new ImageSrc(EggImgSm, EggImgLg);

export {
  Logo,
  HeaderImg,
  EggImg,
  Hamburger,
  PinterestIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  ArrowDownIcon,
};
