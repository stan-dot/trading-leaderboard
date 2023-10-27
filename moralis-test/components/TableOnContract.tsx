import { Root, Row } from "../types";
import { getArkhamAddress } from "../utils/getArkhamAddress";

type TableOnContractProps = {
  rows: Row[];
  tableTitle: string;
};

export function TableOnContract({ rows, tableTitle }: TableOnContractProps) {
  console.log("rows:", rows);
  if (rows.length === 0) {
    return <h2>No table here - {tableTitle}</h2>;
  }
  const sum = rows.reduce((prev, curr) => prev + curr.weth_value, 0);
  return (
    <>
      <h2>{tableTitle}</h2>
      <table>
        <thead>
          <tr id="headerRow">
            <th>address</th>
            <th>weth</th>
            <th>link to arkham</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => {
            return (
              <tr key={`table-row-${i}`}>
                <td>
                  {r.address}
                </td>
                <td>
                  {r.weth_value}
                </td>
                <td>
                  <a href={getArkhamAddress(r.address)}>
                    see
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td>
              sum
            </td>
            <td>
              {sum}
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
}