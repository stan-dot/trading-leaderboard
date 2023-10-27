import { Root } from "../types";
import { getArkhamAddress } from "../utils/getArkhamAddress";

type TableOnContractProps = {
  data: Root;
};
export function TableOnContract({ data }: TableOnContractProps) {
  return (
    <table>
      <tr>
        <th>address</th>
        <th>weth</th>
        <th>link to arkham</th>
      </tr>
      {data.result.rows.length > 0
        ? data.result.rows.map((r) => {
          return (
            <tr>
              <th>
                {r.address}
              </th>
              <th>
                {r.weth_value}
              </th>
              <th>
                <a href={getArkhamAddress(r.address)}>
                  see on arkham platform
                </a>
              </th>
            </tr>
          );
        })
        : <p>No rows here</p>}
    </table>
  );
}
