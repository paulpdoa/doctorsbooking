import { Download } from "../components/Download"
import { Offers } from "../components/Offers"
import { Welcome } from "../components/Welcome"

export const Home = () => {
    return (
        <>
            <Welcome />
            <Download />
            <Offers />
        </>
    )
}