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

import orangeImgLg from "../../assets/images/desktop/image-photography.jpg";
import orangeImgSm from "../../assets/images/mobile/image-photography.jpg";

import imgEmily from "../../assets/images/image-emily.jpg";
import imgJennie from "../../assets/images/image-jennie.jpg";
import imgThomas from "../../assets/images/image-thomas.jpg";

import imgGalleryConeSm from "../../assets/images/mobile/image-gallery-cone.jpg";
import imgGalleryConeLg from "../../assets/images/desktop/image-gallery-cone.jpg";
import imgGalleryOrangeSm from "../../assets/images/mobile/image-gallery-orange.jpg";
import imgGalleryOrangeLg from "../../assets/images/desktop/image-gallery-orange.jpg";
import imgGalleryMilkBottleSm from "../../assets/images/mobile/image-gallery-milkbottles.jpg";
import imgGalleryMilkBottleLg from "../../assets/images/desktop/image-gallery-milkbottles.jpg";
import imgGallerySugarCubeSm from "../../assets/images/mobile/image-gallery-sugar-cubes.jpg";
import imgGallerySugarCubeLg from "../../assets/images/desktop/image-gallery-sugar-cubes.jpg";

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
const orangeImg = new ImageSrc(orangeImgSm, orangeImgLg);

const galleryImgs: Array<ImageSrc> = [
  new ImageSrc(imgGalleryConeSm, imgGalleryConeLg),
  new ImageSrc(imgGalleryOrangeSm, imgGalleryOrangeLg),
  new ImageSrc(imgGalleryMilkBottleSm, imgGalleryMilkBottleLg),
  new ImageSrc(imgGallerySugarCubeSm, imgGallerySugarCubeLg),
];

const socialIcons = [FacebookIcon, InstagramIcon, TwitterIcon, PinterestIcon];

export {
  Logo,
  headerImg,
  eggImg,
  glassImg,
  designImg,
  orangeImg,
  galleryImgs,
  // --- Testimonial --
  imgEmily,
  imgJennie,
  imgThomas,
  //--- Icon ----
  Hamburger,
  PinterestIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  ArrowDownIcon,
  socialIcons,
};
