import { Tilt } from 'react-tilt'

const defaultOptions = {
  reverse: false,
  max: 35,
  perspective: 1000,
  scale: 1.1,
  speed: 1000,
  transition: true,
  axis: null,
  reset: true,
  easing: 'cubic-bezier(.03,.98,.52,.99)',
}

const Logo = () => {
  return (
    <div className="mt-0 m-4">
      <Tilt
        className="border border-2 shadow-md"
        options={defaultOptions}
        style={{ height: 150, width: 150 }}
      >
        <div className="p-6">👽</div>
      </Tilt>
    </div>
  )
}

export default Logo
