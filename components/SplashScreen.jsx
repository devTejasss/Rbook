import React,{ useState, useEffect } from 'react'
import { useSpring, animated } from 'react-spring'

const SplashScreen = () => {
  const [isSplashScreenVisible, setIsSplashScreenVisible] = useState(true)

  // Use react-spring to animate the splash screen's opacity
  const fadeIn = useSpring({
    from: { opacity: 1 },
    to: { opacity: 0 },
    config: { duration: 1000 }
  })

  // Hide the splash screen after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashScreenVisible(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  if (!isSplashScreenVisible) {
    return null
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        backgroundColor: '#FFFFFF'
      }}
    >
      <animated.div style={fadeIn}>
        <img src="/gg.png" alt="Logo" style={{ width: "20", height: "5"}} />
      </animated.div>
    </div>
  )
}

export default SplashScreen
