import React from "react";

function useFetch(url) {
  const [data, setData] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState("")
  React.useEffect(() => {

    (async function () {
      setLoading(true)
      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error(`HTTP  status error ${response.status}`)

        }
        const results = await response.json()
        setData(results)
      } catch (error) {
        setError(error)

      } finally {
        setLoading(false)
      }
    })()
  }, [url])
  return {data, loading, error}
}

export default useFetch
