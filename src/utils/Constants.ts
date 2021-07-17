import { imgEmily, imgJennie, imgThomas } from '../components/reusable/Images';
import MenuItemElemModel from './MenuItemElem.model';

export const textSectionData: Array<{ title: string, text: string, link?: string }> = [
    {
        title: "Transform your brand",
        text: "We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.",
        link: 'Learn more'
    },
    {
        title: "Stand out to the right audience",
        text: "Using a collaborative formula of designers, researchers,photographers,videographers,and copywriters,we’ll build and extend your brand in digital places.",
        link: 'Learn more'
    },
    {
        title: "Graphic Design",
        text: "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."
    },
    {
        title: "Photography",
        text: "Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
    },
]

export const testimonialData: Array<{ id: string, image: any, text: string, name: string, desc: string }> = [
    {
        id: 'emily',
        image: imgEmily,
        text: "We put our trust in Creative and they delivered, making sure our needs were met and deadlines were always hit.",
        name: "Emily R.",
        desc: "Marketing Director"
    },
    {
        id: 'jennie',
        image: imgJennie,
        text: "Incredible end result! Our sales increased over 400% when we worked with Creative. Highly recommended!",
        name: "Jennie F.",
        desc: "Business Owner"
    },
    {
        id: 'thomas',
        image: imgThomas,
        text: "Creative’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
        name: "Thomas S.",
        desc: "Chief Operating Officer"
    }
]

export const menuItems: MenuItemElemModel[] = [
    {
        text: "About",
        selected: false
    },
    {
        text: "Services",
        selected: false
    },
    {
        text: "Projects",
        selected: false
    },
    {
        text: "Contact",
        selected: true
    },
]
