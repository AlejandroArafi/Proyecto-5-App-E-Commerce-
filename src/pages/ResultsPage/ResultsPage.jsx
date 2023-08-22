import { useLocation } from "react-router-dom";

export const ResultsPage = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search)
  const query = params.get('query')
    
  return (
  <>
  {JSON.stringify(query)}
  </>
  )
}
