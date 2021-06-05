import {columns, rows} from "./FormData/data.json";
import "./Form.scss";


const Table = () => {
  return(
    <table className="form__table">
      <TableHead />
      <TableBody />
    </table>
  )
}

const TableHead = () => {
  return(
    <thead className="form__titles">
      <tr>
      {columns.map((column)=>{
        return <th className="form__titles-cell form-cell">{column.headerName}</th> 
      })}
      </tr>
    </thead>
  )
}

const TableBody = () => {
  return(
    <tbody className="form__body">
      {rows.map((row)=>{
        return <tr className="form__body__row">
          {columns.map((column) => <th className="form__body__row-cell form-cell">{(row as any)[column.field as any]}</th>)}
          
        </tr>
      })}
    </tbody>
  )
}

const Form = () => {
 
  return(
    <div className="form">
    <Table />
  </div>
  )
  
}

export default Form;
