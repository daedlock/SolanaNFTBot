import { Marketplace, NFTSale } from "./types";
import { parseNFTSaleOnTx } from "./helper";

const solSea: Marketplace = {
  name: "Solsea",
  programId: "617jbWo616ggkDxvW1Le8pV38XLbVSyWY8ae6QUmGBAU",
  itemURL: (token: String) => `https://solsea.io/nft/${token}`,
  parseNFTSale(txResp): NFTSale | null {
    return parseNFTSaleOnTx(txResp, this, 0);
  },
};

export default solSea;
