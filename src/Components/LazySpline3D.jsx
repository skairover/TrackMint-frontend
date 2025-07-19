// LazySpline.jsx
import { useInView } from 'react-intersection-observer'
import { lazy, Suspense } from 'react'

const Spline = lazy(() => import('@splinetool/react-spline'))

export default function LazySpline3D() {
  const { ref, inView } = useInView({ triggerOnce: true })

  return (
    <div ref={ref}>
      {inView && (
        <Suspense fallback={null}>
          <div className='w-full h-[500px] hidden md:block -z-1 opacity-40 md:opacity-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
             md:top-auto md:left-auto md:-bottom-60 md:-right-250 md:transform-none'>
            <Spline scene="https://prod.spline.design/5qAOo2IHrhsF6yTd/scene.splinecode" />
          </div>
        </Suspense>
      )}
    </div>
  )
}
