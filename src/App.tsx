import React, { useEffect, useState } from 'react';
import CostTable from './components/CostTable';
import { toast, ToastContainer } from 'react-toastify'
import { Button, Grid } from '@material-ui/core';
import './App.css';

let ab: number
let bb: number
let ai: number
let bi: number
let ci: number
let di: number
let cb: number
let db: number
let erros: number


function App() {
  const modo = {
    ORGANICO: "organico",
    SEMIDESTACADO: "semidestacado",
    EMBUTIDO: "embutido"
  };

  const modelo = {
    BASICO: "basico",
    INTERMEDIARIO: "intermediario",
  }
  const [modoOption, setModoOption] = useState(modo.ORGANICO)
  const [modeloOption, setModeloOption] = useState(modelo.BASICO)
  const [kloc, setKloc] = useState("")
  const [rely, setRely] = useState("")
  const [data, setData] = useState("")
  const [cplx, setCplx] = useState("")
  const [time, setTime] = useState("")
  const [stor, setStor] = useState("")
  const [virt, setVirt] = useState("")
  const [turn, setTurn] = useState("")
  const [acap, setAcap] = useState("")
  const [aexp, setAexp] = useState("")
  const [pcap, setPcap] = useState("")
  const [vexp, setVexp] = useState("")
  const [lexp, setLexp] = useState("")
  const [modp, setModp] = useState("")
  const [tool, setTool] = useState("")
  const [sced, setSced] = useState("")
  const [E, setE] = useState(0)
  const [D, setD] = useState(0)
  const [P, setP] = useState(0)

  function checkCampusAndCalculeEAF(obj: Object) {
    erros = 0
    Object.entries(obj).map(item => {
      if (item[1] === "") {
        toast.error(`Você esqueceu de selecionar o campo ${item[0]}`)
        erros++
      }
      return false
    })
    if (erros > 0) return 0
    let produto = 1
    Object.values(obj).map(item => produto *= parseFloat(item))
    console.log(produto)
    return produto
  }

  function setModoAndModel(modoOption: string, modeloOption: string) {
    if (modeloOption === modelo.BASICO) {
      if (modoOption === modo.ORGANICO) {
        ab = 2.4
        bb = 1.05
        cb = 2.5
        db = 0.38
      }
      if (modoOption === modo.SEMIDESTACADO) {
        ab = 3.0
        bb = 1.12
        cb = 2.5
        db = 0.35
      }
      if (modoOption === modo.EMBUTIDO) {
        ab = 3.6
        bb = 1.20
        cb = 2.5
        db = 0.32
      }
    }

    if (modeloOption === modelo.INTERMEDIARIO) {
      if (modoOption === modo.ORGANICO) {
        ai = 3.2
        bi = 1.05
        ci = 2.5
        di = 0.38
      }
      if (modoOption === modo.SEMIDESTACADO) {
        ai = 3.0
        bi = 1.12
        ci = 2.5
        di = 0.35
      }
      if (modoOption === modo.EMBUTIDO) {
        ai = 2.8
        bi = 1.20
        ci = 2.5
        di = 0.32
      }
    }
  }
  function calcBasic() {
    setE(ab * parseFloat(kloc) ** bb)

  }
  function calcInter() {
    let produto = checkCampusAndCalculeEAF({
      rely,
      data,
      cplx,
      time,
      stor,
      virt,
      turn,
      acap,
      aexp,
      pcap,
      vexp,
      lexp,
      modp,
      tool,
      sced
    })

    if (erros > 0) return
    setE(ai * (parseFloat(kloc)) ** bi * produto)
  }
  function execCalc() {
    setModoAndModel(modoOption, modeloOption);
    if (kloc === null || kloc === "") return toast.error("Por favor coloque a quantidade de linhas (milhares)")

    if (modeloOption === modelo.BASICO) return calcBasic()
    if (modeloOption === modelo.INTERMEDIARIO) return calcInter()
  }

  useEffect(() => {
    if (modeloOption === modelo.BASICO) return setD(cb * E ** db)
    if (modeloOption === modelo.INTERMEDIARIO) return setD(ci * E ** di)

  }, [E, modeloOption, modelo.BASICO, modelo.INTERMEDIARIO])
  useEffect(() => {
    setP(E / D)
  }, [D, E])

  return (
    <div className="App">
      <Grid container >
        <Grid item xs={6}>

          <div id="optionsContainer">
            <div>
              <label htmlFor="">Quantidade de linhas de código: </label>
              <input type="number" placeholder="KLOC" value={kloc} onChange={e => setKloc(e.target.value)} />
        (milhares)
        </div>
            <div>
              <label htmlFor="">Selecione o modo desejado: </label>
              <select onChange={value => setModoOption(value.currentTarget.value)}>
                <option value={modo.ORGANICO}>Orgânico</option>
                <option value={modo.SEMIDESTACADO}>Semidestacado</option>
                <option value={modo.EMBUTIDO}>Embutido</option>
              </select>
            </div>
            <div>
              <label htmlFor="">Selecione o modelo desejado: </label>
              <select onChange={value => {
                setModeloOption(value.currentTarget.value)
                setE(0)
                setD(0)
                setP(0)
              }}>
                <option value={modelo.BASICO}>Básico</option>
                <option value={modelo.INTERMEDIARIO}>Intermediario</option>
              </select>
            </div>
            <Button variant="contained" color="primary" id="buttonCalc" onClick={execCalc}>Calcular</Button>
          </div>

        </Grid>
        <Grid item xs={6}>
          <div id="rightContainer">
            <p><span>Esforço:</span> {E ? `${E} (Pessoas/Mês)` : ""}</p>
            <p><span>Tempo:</span> {D ? `${D} (Meses)` : ""}</p>
            <p><span>Pessoas:</span>  {P ? `${P} (Pessoas)` : ""}</p>
          </div>
        </Grid>

      </Grid>
      <ToastContainer />
      {modeloOption === modelo.INTERMEDIARIO && <CostTable rely={rely} setRely={setRely} data={data} setData={setData} cplx={cplx} setCplx={setCplx} time={time} setTime={setTime} stor={stor} setStor={setStor} virt={virt} setVirt={setVirt} turn={turn} setTurn={setTurn} acap={acap} setAcap={setAcap} aexp={aexp} setAexp={setAexp} pcap={pcap} setPcap={setPcap} vexp={vexp} setVexp={setVexp} lexp={lexp} setLexp={setLexp} modp={modp} setModp={setModp} tool={tool} setTool={setTool} sced={sced} setSced={setSced}
      />}

    </div>
  );
}

export default App;
