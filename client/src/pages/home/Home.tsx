import { Suspense, lazy } from "react"

// Components
const MainBodyHead = lazy(() => import('../../components/mainBody/MainBodyHead'))
const MainBodyCards = lazy(() => import('../../components/mainBody/MainBodyCards'))
const MainBodyContactLink = lazy(() => import('../../components/mainBody/MainBodyContactLink'))


function Blogs() {

  return (
    <main className="py-28 flex flex-col gap-20">
        <Suspense>
          <MainBodyHead />
        </Suspense>
        <Suspense>
          <MainBodyCards />
        </Suspense>
        <Suspense>
          <MainBodyContactLink />
        </Suspense>
    </main>
  )
}

export default Blogs