"use client";
import { useRouter } from "next/navigation";
import "@/styles/navbar.css"
import Image from "next/image"

function HomeButton() {
    const router = useRouter()
    return (
        <button  onClick={() => router.push("/")} ><Image src="/home-icon.png" alt="Home" width={32} height={32} />
</button>
    )
}

function FoodButton() {
    const router = useRouter()
    return (
        <button  onClick={() => router.push("/food")} >Food</button>
    )
}

function AboutButton() {
    const router = useRouter()
    return (
        <button  onClick={() => router.push("/about")} >About</button>
    )
}

function ContactsButton() {
    const router = useRouter()
    return (
        <button onClick={() => router.push("/contacts")} >Contacts</button>
    )
}

const user = {
    name: 'Thomas Brown',
    imageUri: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Thomas_Brown_philosopher.jpg',
};

export default function Navbar() {
    return (
        <nav className="navbar flex space-x-6">
            <div className="navbar-left">
                <HomeButton />
            </div>
            <div className="navbar-center space-x-4">
                <FoodButton />
                <ContactsButton />
                <AboutButton />
            </div>
            <div className="navbar-right">
                <img
                    className="user-icon"
                    src={user.imageUri}
                    alt={'Photo of ' + user.name}
                />
            </div>

        </nav>
    );
}