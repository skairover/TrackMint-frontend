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
          <div className='w-full h-[800px] hidden md:block -z-1  md:opacity-100 absolute left-64 -bottom-18'>
            <Spline scene="https://prod.spline.design/5qAOo2IHrhsF6yTd/scene.splinecode" />
          </div>
        </Suspense>
      )}
    </div>
  )
}
