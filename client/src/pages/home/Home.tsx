import { Suspense, lazy } from "react"

// Components
const MainBodyHead = lazy(() => import('../../components/mainBody/MainBodyHead'))
const MainBodyCards = lazy(() => import('../../components/mainBody/MainBodyCards'))


function Blogs() {

  return (
    <main className="py-28 flex flex-col gap-20">
        <Suspense>
          <MainBodyHead />
        </Suspense>
        <Suspense>
          <MainBodyCards />
        </Suspense>
    </main>
  )
}

export default Blogs