import {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"

interface ViewportContextInterface {
  width: number | undefined
  setWidth: Dispatch<SetStateAction<number | undefined>>
  breakpoint: number
}

export const ViewportContext = createContext<ViewportContextInterface>(
  {} as ViewportContextInterface
)

export const useViewport = () => {
  return useContext(ViewportContext)
}

export const ViewportlProvider: FC<{ breakpoint: number }> = ({ children, breakpoint }) => {
  const [width, setWidth] = useState<number>()
  useEffect(() => {
    if (width === undefined) {
      setWidth(window.innerWidth)
    }
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleWindowResize)
    return () => window.removeEventListener("resize", handleWindowResize)
  }, [])
  const providerValue = useMemo(() => ({ width, setWidth, breakpoint }), [width])
  return <ViewportContext.Provider value={providerValue}>{children}</ViewportContext.Provider>
}
