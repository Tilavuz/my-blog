function MainBodyCards() {
  return (
    <div className="py-4 minism:w-full minism:px-2 min-h-32 rounded-lg  md:px-10 sm:container mx-auto flex flex-col gap-8  lg:py-20">
        <div className="flex flex-col gap-8">
          <h2 className="minism:text-5xl md:text-6xl lg:text-7xl font-bold">Nega aynan biz?</h2>
          <p className="max-w-96">Bizning xizmatimiz boshqa kampaniyalar xizmatidan ancha arzon va raqobatlasha oladi!</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <div className="flex-row flex p-4 justify-center gap-6 minism:flex-wrap md:flex-nowrap items-center sm:w-full md:max-w-96 rounded-lg min-h-56 shadow hover:shadow-lg hover:bg-bgColor2 transition-all">
            <span className="text-7xl">🤩</span>
            <p className="text-center">Biz siz uchun chiroyli vebsayt qurib beramiz!</p>
          </div>
          <div className="flex-row flex p-4 justify-center gap-6 minism:flex-wrap md:flex-nowrap items-center sm:w-full md:max-w-96 rounded-lg min-h-56 shadow hover:shadow-lg hover:bg-bgColor2 transition-all">
            <span className="text-7xl">😎</span>
            <p className="text-center">Biz siz uchun qulay interfeysga ega vebsayt qurib beramiz!</p>
          </div>
          <div className="flex-row flex p-4 justify-center gap-6 minism:flex-wrap md:flex-nowrap items-center sm:w-full md:max-w-96 rounded-lg min-h-56 shadow hover:shadow-lg hover:bg-bgColor2 transition-all">
            <span className="text-7xl">🤯</span>
            <p className="text-center">Biz siz uchun chiroyli va qulay vebsaytni arzonga qurib beramiz!</p>
          </div>
          <div className="flex-row flex p-4 justify-center gap-6 minism:flex-wrap md:flex-nowrap items-center sm:w-full md:max-w-96 rounded-lg min-h-56 shadow hover:shadow-lg hover:bg-bgColor2 transition-all">
            <span className="text-7xl">✅</span>
            <p className="text-center">Bizga bilan bog'lanish juda oson. Buyurtma berish tugmasini bosing va biz siz bilan o'zimiz bog'lanamiz!</p>
          </div>
        </div>
    </div>
  )
}

export default MainBodyCards