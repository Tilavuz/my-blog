import { Link } from "react-router-dom"

function MainBodyContactLink() {
  return (
    <div className="flex flex-col gap-4 items-center">
        <p className="minism:line-clamp-3 text-center sm:line-clamp-none max-w-2xl">Sizni qiziqtira oldikmi? Unda birinchi qadam <i>Buyurtma berish</i> tugmasi ostida👇</p>
        <Link to='contact' className="bg-btnColor text-bgColor2 minism:py-2 minism:px-4 md:py-4 md:px-8 rounded-md">Buyurtma berish</Link>
    </div>
  )
}

export default MainBodyContactLink