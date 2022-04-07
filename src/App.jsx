import { useState, useEffect } from "react"
import DataTable from "./components/DataTable";
import Error from "./components/Error";
import Form from "./components/Form";
import Header from "./components/Header"
import { getMedicamentos } from "./data/medicamentos"

const App = () => {
  
  const [medicamentos, setmedicamentos] = useState([]);
  const [errorApi, setErrorApi] = useState("");
  const [llamarInfo, setllamarInfo] = useState(true)

  useEffect(() => {

    if (llamarInfo) {
      getMedicamentos(data => {
      let parser = JSON.stringify(data);
      if (data.data) {
        setmedicamentos(data.data)
      }
      if (JSON.parse(parser).message) {
        setErrorApi(JSON.parse(parser).message)
      }
      });
      setllamarInfo(false)
    }

    setllamarInfo(false)

    return () => setllamarInfo(false)
  }, [llamarInfo])

  return (
    <div className="container mt-10 mx-auto">
      <Header />
      <div className="mt-10 md:flex">
        <div className="lg:w-3/12 md:w-1/2">
          <Form setllamarInfo={setllamarInfo}
            setErrorApi={setErrorApi } />
        </div>
        <div className="lg:w-9/12 md:w-1/2">

          {errorApi && 
            <Error error={errorApi} key={"errorApi"} setErrorApi={setErrorApi} />
          }
          
          {medicamentos && medicamentos.length ?
            (
              <DataTable header={medicamentos[0]}
              medicamentos={medicamentos} key={"renderData"} /> ):
            (
              <h2 className="font-bold text-2xl text-center">
                No Hay Medicamentos
              </h2>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default App
