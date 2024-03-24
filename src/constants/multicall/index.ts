import { ChainId } from '@uniswap/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xC2520D5CedEf8236E5d896aEAb52ac7C25a92349',
  [ChainId.MO]: '0xC2520D5CedEf8236E5d896aEAb52ac7C25a92349',
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
