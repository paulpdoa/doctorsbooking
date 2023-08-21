import { Download } from "../components/Download"
import { Services } from "../components/Services"
import { Welcome } from "../components/Welcome"

export const Home = () => {
    return (
        <>
            <Welcome />
            <Download />
            <Services />
        </>
    )
}