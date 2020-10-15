import React from 'react'
import './styles.css'
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';
import {TableBody, TableCell } from '@material-ui/core';
import { makeStyles,createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
interface IProps{
  rely: string,    
  data: string,   
  cplx: string,   
  time: string,   
  stor: string,   
  virt: string,   
  turn: string,   
  acap: string,   
  aexp: string,   
  pcap: string,   
  vexp: string,   
  lexp: string,   
  modp: string,   
  tool: string,   
  sced: string,   
  
  setRely : React.Dispatch<React.SetStateAction<string>>,
  setData : React.Dispatch<React.SetStateAction<string>>,
  setCplx : React.Dispatch<React.SetStateAction<string>>,
  setTime : React.Dispatch<React.SetStateAction<string>>,
  setStor : React.Dispatch<React.SetStateAction<string>>,
  setVirt : React.Dispatch<React.SetStateAction<string>>,
  setTurn : React.Dispatch<React.SetStateAction<string>>,
  setAcap : React.Dispatch<React.SetStateAction<string>>,
  setAexp : React.Dispatch<React.SetStateAction<string>>,
  setPcap : React.Dispatch<React.SetStateAction<string>>,
  setVexp : React.Dispatch<React.SetStateAction<string>>,
  setLexp : React.Dispatch<React.SetStateAction<string>>,
  setModp : React.Dispatch<React.SetStateAction<string>>,
  setTool : React.Dispatch<React.SetStateAction<string>>,
  setSced : React.Dispatch<React.SetStateAction<string>>,
}
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
const CostTable: React.FC<IProps> = ({rely,data,cplx,time,stor,virt,turn,acap,aexp,pcap,vexp,lexp,modp,tool,sced,setRely,setModp,setData,setCplx,setTime,setStor,setVirt,setTurn,setAcap,setAexp,setPcap,setVexp,setLexp,setTool,setSced}) => {

  const classes = useStyles();

  const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });

    
  return (
    <ThemeProvider theme = {darkTheme}>
      <TableContainer component={Paper}>

      <Table  className={classes.table} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Direcionador de custo</TableCell>
          <TableCell>Descrição</TableCell>
          <TableCell>Muito baixo</TableCell>
          <TableCell>Baixo</TableCell>
          <TableCell>Nominal</TableCell>
          <TableCell>Alto</TableCell>
          <TableCell>Muito alto</TableCell>
          <TableCell>Extra alto</TableCell>
        </TableRow>
      </TableHead>
      <TableHead>
        <TableRow>
          <TableCell className="tTitle">Produto</TableCell>
        </TableRow>

      </TableHead>
      <TableBody>

        <TableRow>
          <TableCell>RELY</TableCell>
          <TableCell>Confiabilidade do software</TableCell>
          <TableCell>0,75 <input type="checkbox" checked={rely === "0.75"} value={0.75} onChange={e => setRely(e.currentTarget.value)} /></TableCell>
          <TableCell>0,88 <input type="checkbox" checked={rely === "0.88"} value={0.88} onChange={e => setRely(e.currentTarget.value)} /></TableCell>
          <TableCell>1,00 <input type="checkbox" checked={rely === "1"} value={1} onChange={e => setRely(e.currentTarget.value)} /></TableCell>
          <TableCell>1,15 <input type="checkbox" checked={rely === "1.15"} value={1.15} onChange={e => setRely(e.currentTarget.value)} /></TableCell>
          <TableCell>1,40 <input type="checkbox" checked={rely === "1.4"} value={1.40} onChange={e => setRely(e.currentTarget.value)} /></TableCell>
          <TableCell>-</TableCell>
        </TableRow>

        <TableRow>
          <TableCell>DATA</TableCell>
          <TableCell>Tamanho do banco de dados</TableCell>
          <TableCell>-</TableCell>
          <TableCell>0,94<input type="checkbox" checked={data === "0.94"} value={0.94} onChange={e => setData(e.currentTarget.value)} /></TableCell>
          <TableCell>1,00 <input type="checkbox" checked={data === "1"} value={1} onChange={e => setData(e.currentTarget.value)} /></TableCell>
          <TableCell>1,08 <input type="checkbox" checked={data === "1.08"} value={1.08} onChange={e => setData(e.currentTarget.value)} /></TableCell>
          <TableCell>1,16 <input type="checkbox" checked={data === "1.16"} value={1.16} onChange={e => setData(e.currentTarget.value)} /></TableCell>
          <TableCell>-</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>CPLX</TableCell>
          <TableCell>Complexidade do produto </TableCell>
          <TableCell>0,70 <input type="checkbox" checked={cplx === "0.7"} value={0.70} onChange={e => setCplx(e.currentTarget.value)} /></TableCell>
          <TableCell>0,85  <input type="checkbox" checked={cplx === "0.85"} value={0.85} onChange={e => setCplx(e.currentTarget.value)} /></TableCell>
          <TableCell>1,00  <input type="checkbox" checked={cplx === "1"} value={1} onChange={e => setCplx(e.currentTarget.value)} /></TableCell>
          <TableCell>1,15  <input type="checkbox" checked={cplx === "1.15"} value={1.15} onChange={e => setCplx(e.currentTarget.value)} /></TableCell>
          <TableCell>1,30  <input type="checkbox" checked={cplx === "1.3"} value={1.30} onChange={e => setCplx(e.currentTarget.value)} /></TableCell>
          <TableCell>1,65  <input type="checkbox" checked={cplx === "1.65"} value={1.65} onChange={e => setCplx(e.currentTarget.value)} /></TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="tTitle">Computador</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>TIME</TableCell>
          <TableCell>Restrição de tempo de execução</TableCell>
          <TableCell>-</TableCell>
          <TableCell>-</TableCell>
          <TableCell>1,00 <input type="checkbox" checked={time === "1"} value={1} onChange={e => setTime(e.currentTarget.value)} /></TableCell>
          <TableCell>1,11 <input type="checkbox" checked={time === "1.11"} value={1.11} onChange={e => setTime(e.currentTarget.value)} /></TableCell>
          <TableCell>1,30 <input type="checkbox" checked={time === "1.3"} value={1.30} onChange={e => setTime(e.currentTarget.value)} /></TableCell>
          <TableCell>1,66 <input type="checkbox" checked={time === "1.66"} value={1.66} onChange={e => setTime(e.currentTarget.value)} /></TableCell>
        </TableRow>
        <TableRow>
          <TableCell>STOR</TableCell>
          <TableCell>Restrição memória principal</TableCell>
          <TableCell>-</TableCell>
          <TableCell>-</TableCell>
          <TableCell>1,00 <input type="checkbox" checked={stor === "1"} value={1.00} onChange={e => setStor(e.currentTarget.value)} /></TableCell>
          <TableCell>1,06 <input type="checkbox" checked={stor === "1.06"} value={1.06} onChange={e => setStor(e.currentTarget.value)} /></TableCell>
          <TableCell>1,21 <input type="checkbox" checked={stor === "1.21"} value={1.21} onChange={e => setStor(e.currentTarget.value)} /></TableCell>
          <TableCell>1.56 <input type="checkbox" checked={stor === "1.56"} value={1.56} onChange={e => setStor(e.currentTarget.value)} /></TableCell>
        </TableRow>
        <TableRow>
          <TableCell>VIRT</TableCell>
          <TableCell>Mudanças do ambiente </TableCell>
          <TableCell>-</TableCell>
          <TableCell>0,87 <input type="checkbox" checked={virt === "0.87"} value={0.87} onChange={e => setVirt(e.currentTarget.value)} /></TableCell>
          <TableCell>1,00 <input type="checkbox" checked={virt === "1"} value={1.00} onChange={e => setVirt(e.currentTarget.value)} /></TableCell>
          <TableCell>1,15 <input type="checkbox" checked={virt === "1.15"} value={1.15} onChange={e => setVirt(e.currentTarget.value)} /></TableCell>
          <TableCell>1,30 <input type="checkbox" checked={virt === "1.3"} value={1.30} onChange={e => setVirt(e.currentTarget.value)} /></TableCell>
          <TableCell>-</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>TURN</TableCell>
          <TableCell>Velocidade processamento computador</TableCell>
          <TableCell>-</TableCell>
          <TableCell>0,87 <input type="checkbox" checked={turn === "0.87"} value={0.87} onChange={e => setTurn(e.currentTarget.value)} /></TableCell>
          <TableCell>1,00 <input type="checkbox" checked={turn === "1"} value={1.00} onChange={e => setTurn(e.currentTarget.value)} /></TableCell>
          <TableCell>1,07 <input type="checkbox" checked={turn === "1.07"} value={1.07} onChange={e => setTurn(e.currentTarget.value)} /></TableCell>
          <TableCell>1,15 <input type="checkbox" checked={turn === "1.15"} value={1.15} onChange={e => setTurn(e.currentTarget.value)} /></TableCell>
          <TableCell>-</TableCell>
        </TableRow>

          <TableRow>
              <TableCell className="tTitle">Pessoal</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>ACAP</TableCell>
            <TableCell>Capacidade do analista</TableCell>
            <TableCell>1,46 <input type="checkbox" checked={acap === "1.46"} value={1.46} onChange={e => setAcap(e.currentTarget.value)} /></TableCell>
            <TableCell>1,19 <input type="checkbox" checked={acap === "1.19"} value={1.19} onChange={e => setAcap(e.currentTarget.value)} /></TableCell>
            <TableCell>1,00 <input type="checkbox" checked={acap === "1"} value={1} onChange={e => setAcap(e.currentTarget.value)} /></TableCell>
            <TableCell>0,86 <input type="checkbox" checked={acap === "0.86"} value={0.86} onChange={e => setAcap(e.currentTarget.value)} /></TableCell>
            <TableCell>0,71 <input type="checkbox" checked={acap === "0.71"} value={0.71} onChange={e => setAcap(e.currentTarget.value)} /></TableCell>
            <TableCell>-</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>AEXP</TableCell>
            <TableCell>Experiência na aplicação</TableCell>
            <TableCell>1,29 <input type="checkbox" checked={aexp === "1.29"} value={1.29} onChange={e => setAexp(e.currentTarget.value)} /></TableCell>
            <TableCell>1,13  <input type="checkbox" checked={aexp === "1.13"} value={1.13} onChange={e => setAexp(e.currentTarget.value)} /></TableCell>
            <TableCell>1,00  <input type="checkbox" checked={aexp === "1"} value={1} onChange={e => setAexp(e.currentTarget.value)} /></TableCell>
            <TableCell>0,91  <input type="checkbox" checked={aexp === "0.91"} value={0.91} onChange={e => setAexp(e.currentTarget.value)} /></TableCell>
            <TableCell>0,82  <input type="checkbox" checked={aexp === "0.82"} value={0.82} onChange={e => setAexp(e.currentTarget.value)} /></TableCell>
            <TableCell>-</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>PCAP</TableCell>
            <TableCell>Capacidade do programador</TableCell>
            <TableCell>1,42  <input type="checkbox" checked={pcap === "1.42"} value={1.42} onChange={e => setPcap(e.currentTarget.value)} /></TableCell>
            <TableCell>1,17 <input type="checkbox" checked={pcap === "1.17"} value={1.17} onChange={e => setPcap(e.currentTarget.value)} /></TableCell>
            <TableCell>1,00 <input type="checkbox" checked={pcap === "1"} value={1} onChange={e => setPcap(e.currentTarget.value)} /></TableCell>
            <TableCell>0,86 <input type="checkbox" checked={pcap === "0.86"} value={0.86} onChange={e => setPcap(e.currentTarget.value)} /></TableCell>
            <TableCell>0,70 <input type="checkbox" checked={pcap === "0.7"} value={0.70} onChange={e => setPcap(e.currentTarget.value)} /></TableCell>
            <TableCell>-</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>VEXP</TableCell>
            <TableCell>Experiência com hardware </TableCell>
            <TableCell>1,21 <input type="checkbox" checked={vexp === "1.21"} value={1.21} onChange={e => setVexp(e.currentTarget.value)} /></TableCell>
            <TableCell>1,10 <input type="checkbox" checked={vexp === "1.10"} value={1.10} onChange={e => setVexp(e.currentTarget.value)} /></TableCell>
            <TableCell>1,00 <input type="checkbox" checked={vexp === "1"} value={1} onChange={e => setVexp(e.currentTarget.value)} /></TableCell>
            <TableCell>0,90 <input type="checkbox" checked={vexp === "0.9"} value={0.90} onChange={e => setVexp(e.currentTarget.value)} /></TableCell>
            <TableCell>-</TableCell>
            <TableCell>-</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>LEXP</TableCell>
            <TableCell>Experiência na linguagem</TableCell>
            <TableCell>1,14 <input type="checkbox" checked={lexp === "1.14"} value={1.14} onChange={e => setLexp(e.currentTarget.value)} /></TableCell>
            <TableCell>1,07 <input type="checkbox" checked={lexp === "1.07"} value={1.07} onChange={e => setLexp(e.currentTarget.value)} /></TableCell>
            <TableCell>1,00 <input type="checkbox" checked={lexp === "1"} value={1} onChange={e => setLexp(e.currentTarget.value)} /></TableCell>
            <TableCell>0,95 <input type="checkbox" checked={lexp === "0.95"} value={0.95} onChange={e => setLexp(e.currentTarget.value)} /></TableCell>
            <TableCell>-</TableCell>
            <TableCell>-</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="tTitle">
              Projeto
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>MODP</TableCell>
            <TableCell>Práticas modernas de programação</TableCell>
            <TableCell>1,24 <input type="checkbox" checked={modp === "1.24"} value={1.24} onChange={e => setModp(e.currentTarget.value)} /></TableCell>
            <TableCell>1,1 <input type="checkbox" checked={modp === "1.1"} value={1.1} onChange={e => setModp(e.currentTarget.value)} /></TableCell>
            <TableCell>1,00 <input type="checkbox" checked={modp === "1"} value={1} onChange={e => setModp(e.currentTarget.value)} /></TableCell>
            <TableCell>0,91 <input type="checkbox" checked={modp === "0.91"} value={0.91} onChange={e => setModp(e.currentTarget.value)} /></TableCell>
            <TableCell>0,82 <input type="checkbox" checked={modp === "0.82"} value={0.82} onChange={e => setModp(e.currentTarget.value)} /></TableCell>
            <TableCell>-</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>TOOL</TableCell>
            <TableCell>Ferramentas de software</TableCell>
            <TableCell>1,24 <input type="checkbox" checked={tool === "1.24"} value={1.24} onChange={e => setTool(e.currentTarget.value)} /></TableCell>
            <TableCell>1,10 <input type="checkbox" checked={tool === "1.1"} value={1.10} onChange={e => setTool(e.currentTarget.value)} /></TableCell>
            <TableCell>1,00 <input type="checkbox" checked={tool === "1"} value={1} onChange={e => setTool(e.currentTarget.value)} /></TableCell>
            <TableCell>0,91 <input type="checkbox" checked={tool === "0.91"} value={0.91} onChange={e => setTool(e.currentTarget.value)} /></TableCell>
            <TableCell>0,83 <input type="checkbox" checked={tool === "0.83"} value={0.83} onChange={e => setTool(e.currentTarget.value)} /></TableCell>
            <TableCell>-</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>SCED</TableCell>
            <TableCell>Cronograma de desenvolvimento</TableCell>
            <TableCell>1,23 <input type="checkbox" checked={sced === "1.23"} value={1.23} onChange={e => setSced(e.currentTarget.value)} /></TableCell>
            <TableCell>1,08 <input type="checkbox" checked={sced === "1.08"} value={1.08} onChange={e => setSced(e.currentTarget.value)} /></TableCell>
            <TableCell>1,00 <input type="checkbox" checked={sced === "1"} value={1} onChange={e => setSced(e.currentTarget.value)} /></TableCell>
            <TableCell>1,04 <input type="checkbox" checked={sced === "1.04"} value={1.04} onChange={e => setSced(e.currentTarget.value)} /></TableCell>
            <TableCell>1,10 <input type="checkbox" checked={sced === "1.1"} value={1.10} onChange={e => setSced(e.currentTarget.value)} /></TableCell>
            <TableCell>-</TableCell>
          </TableRow>


        </TableBody>
      </Table>
      </TableContainer>
    </ThemeProvider>
      

     
  )
}

export default CostTable