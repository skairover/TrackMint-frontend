import Spline from '@splinetool/react-spline';

function My3DComponent() {
  return (
    <div style={{ width: '100%', height: '500px' }} className='-z-1 opacity-40 md:opacity-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
             md:top-auto md:left-auto md:-bottom-70 md:-right-250 md:transform-none'>
      <Spline  scene="https://prod.spline.design/5qAOo2IHrhsF6yTd/scene.splinecode" />
    </div>
  );
}
export default My3DComponent;