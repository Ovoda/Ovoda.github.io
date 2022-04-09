import { FaHeart, FaHome, FaHandHoldingHeart, FaAtom, FaGripHorizontal } from "react-icons/fa";

export const pages = [
    {
        id: "0",
        name: "Home",
        href: "#",
        icon: <FaHome className="icons" />
    },
    {
        id: "1",
        name: "Metadonate",
        href: "#",
        icon: <FaHandHoldingHeart className="icons" />
    },
    {
        id: "2",
        name: "About Us",
        href: "#",
        icon: <FaAtom className="icons" />
    },
    {
        id: "3",
        name: "Gallery",
        href: "#",
        icon: <FaGripHorizontal className="icons" />
    }
];

export const listPages = pages.map((page) =>
    <li key={page.id.toString()}>
        <a href={page.href}>{page.name}</a>
    </li>
);