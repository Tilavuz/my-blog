import { Link } from "react-router-dom"
import qrtg from '../../assets/qrtg.svg'


function MainBodyHead() {
  return (
    <div className="bg-bgColor2 py-4 minism:w-full minism:px-2 min-h-32 rounded-lg  md:px-10 sm:container mx-auto flex flex-col gap-8  lg:py-20 lg:flex-row lg:items-center">
        <div className="flex flex-col items-start text-2xl gap-4 lg:gap-8">
        <h1 className="md:text-4xl lg:text-6xl font-bold">Vebsaytingizni <br /> 🛠qurishda bizning <br />💻xizmatimizdan foydalaning?</h1>
        <p className="minism:line-clamp-3 sm:line-clamp-none max-w-2xl">Biznesingiz uchun 0 dan ajoyib vebsayt qurish kerakmi? Unda bizning xizmat aynan siz uchun. Birinchi qadam <i>Buyurtma berish</i> tugmasi ostida👇</p>
        <Link to='contact' className="bg-btnColor text-bgColor2 minism:py-2 minism:px-4 md:py-4 md:px-8 rounded-md">Buyurtma berish</Link>
        </div>
        <img className="w-56" src={qrtg} alt="Telegram qr code" />
    </div>
  )
}

export default MainBodyHead