import { useEffect, useRef, useState } from 'react'

function useScrollReveal({ once = true, rootMargin = '0px 0px -10% 0px', threshold = 0.15 } = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === 'undefined') return true

    return !('IntersectionObserver' in window)
  })

  useEffect(() => {
    const element = ref.current

    if (!element) return undefined

    if (!('IntersectionObserver' in window)) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)

          if (once) observer.unobserve(entry.target)
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { rootMargin, threshold },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [once, rootMargin, threshold])

  return { isVisible, ref }
}

export default useScrollReveal
