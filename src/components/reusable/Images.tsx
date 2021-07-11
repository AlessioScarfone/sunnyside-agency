import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { ReactComponent as Hamburger } from "../../assets/images/icon-hamburger.svg";
import headerImgLg from "../../assets/images/desktop/image-header.jpg";
import headerImgSm from "../../assets/images/mobile/image-header.jpg";

class ImageSrc {
  smallSrc: string;
  largeSrc: string;

  constructor(smallSrc: string, largeSrc: string) {
    this.smallSrc = smallSrc;
    this.largeSrc = largeSrc;
  }
}

const HeaderImg = new ImageSrc(headerImgSm, headerImgLg);

export { Logo, HeaderImg, Hamburger };
