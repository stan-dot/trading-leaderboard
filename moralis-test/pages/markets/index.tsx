import { GetTokenMetadataRequest } from "@moralisweb3/common-evm-utils";
import { useEvmTokenMetadata } from "@moralisweb3/next";
import Link from "next/link";
import { markets } from "../../utils/markets";
import MarketsList from "../../components/markets/MarketsList";

function MarketsPage() {
  return (
    <div>
      <h3>Markets</h3>
      <MarketsList/>
    </div>
  );
}

export default MarketsPage;
