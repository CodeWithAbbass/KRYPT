import React, {
  ueeEffect,
  createContext,
  useReducer,
  useEffect,
  useState,
} from "react";
import { ethers } from "ethers";
import { contractAbi, contractAddress } from "../utils/constant";

export const TransactionContext = createContext();
const { ethereum } = window;

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractAbi,
    signer
  );

  console.log({ provider, signer, transactionContract });
};

export const TransactionProvider = ({ children }) => {
  const [connectedAccounts, setconnectedAccounts] = useState("");

  const checkIfWalletIsConnected = async () => {
    if (!ethereum) {
      alert("Please Install Metamask");
      return;
    }
    try {
      const accounts = await ethereum.request({ method: "eth_accounts" });
      if (accounts.length > 0) {
        console.log("Found an authorized account:", accounts);
      } else {
        console.log("No authorized account found");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) {
        alert("Please Install Metamask");
        return;
      }
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <TransactionContext.Provider value={{ connectWallet }}>
      {children}
    </TransactionContext.Provider>
  );
};
