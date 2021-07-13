import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { ReactComponent as Hamburger } from "../../assets/images/icon-hamburger.svg";
import { ReactComponent as PinterestIcon } from "../../assets/images/icon-pinterest.svg";
import { ReactComponent as FacebookIcon } from "../../assets/images/icon-facebook.svg";
import { ReactComponent as InstagramIcon } from "../../assets/images/icon-instagram.svg";
import { ReactComponent as TwitterIcon } from "../../assets/images/icon-twitter.svg";
import { ReactComponent as ArrowDownIcon } from "../../assets/images/icon-arrow-down.svg";
import headerImgLg from "../../assets/images/desktop/image-header.jpg";
import headerImgSm from "../../assets/images/mobile/image-header.jpg";

import eggImgLg from "../../assets/images/desktop/image-transform.jpg";
import eggImgSm from "../../assets/images/mobile/image-transform.jpg";

import glassImgLg from "../../assets/images/desktop/image-stand-out.jpg";
import glassImgSm from "../../assets/images/mobile/image-stand-out.jpg";

import designImgLg from "../../assets/images/desktop/image-graphic-design.jpg";
import designImgSm from "../../assets/images/mobile/image-graphic-design.jpg";

class ImageSrc {
  smallSrc: string;
  largeSrc: string;

  constructor(smallSrc: string, largeSrc: string) {
    this.smallSrc = smallSrc;
    this.largeSrc = largeSrc;
  }
}

const headerImg = new ImageSrc(headerImgSm, headerImgLg);
const eggImg = new ImageSrc(eggImgSm, eggImgLg);
const glassImg = new ImageSrc(glassImgSm, glassImgLg);
const designImg = new ImageSrc(designImgSm, designImgLg);

export {
  Logo,
  headerImg,
  eggImg,
  glassImg,
  designImg,
  //--- ICON ----
  Hamburger,
  PinterestIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  ArrowDownIcon,
};
