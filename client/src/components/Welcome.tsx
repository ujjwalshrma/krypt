import React, { useContext } from 'react'
import { AiFillPlayCircle } from 'react-icons/ai'
import { SiEthereum } from 'react-icons/si'
import { BsInfoCircle } from 'react-icons/bs'
import { Loader } from './'
import { TransactionContext } from '../context/TransactionsContext'
import { shortenAddress } from '../utils/shortenAddress'

interface InputProps {
  placeholder?: string
  type?: string
  value?: string
  handleChange: any
  name?: string
}

const commonStyles = 'min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white'

const Input: React.FC<InputProps> = ({ placeholder, name, value, type, handleChange }) => (
  <input step="0.0001" placeholder={placeholder} type={type} name={name} onChange={(e: React.ChangeEvent<HTMLInputElement>): void => handleChange(e, name)} value={value} className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism" />
)

const Welcome: React.FC = () => {
  const transactionContext = useContext<any>(TransactionContext)

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const { addressTo, amount, message, keyword } = transactionContext.formData

    e.preventDefault()

    console.log('before')

    if (!addressTo || !amount || !message || !keyword) return

    console.log('after')

    transactionContext?.sendTransaction()

  }

  return (
    <div className='flex w-full justify-center items-center'>
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start flex-col mf:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">Send Crypt <br /> accross the world</h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            Explore the crypto world. Buy and sell crypto currencies on Krypt
          </p>
          {!transactionContext?.currentAccount && (<button type="button" onClick={transactionContext?.connectWallet} className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]">
            <p className="text-white text-base font-semibold">
              connect wallet
            </p>
          </button>)}
          <div className="grid sm:grid-cols-3 grid-row-cold-2 w-full mt-10">
            <div className={`rounded-tl-2xl ${commonStyles}`}>Reliability</div>
            <div className={commonStyles}>Security</div>
            <div className={`rounded-tr-2xl ${commonStyles}`}>Ethereum</div>
            <div className={`rounded-bl-2xl ${commonStyles}`}>Web 3.0</div>
            <div className={commonStyles}>Low Fees</div>
            <div className={`rounded-br-2xl ${commonStyles}`}>Blockchain</div>
          </div>
        </div>
        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
          <div className="p-2 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 rounded-full border-2 h-10 border-white flex justify-center items-center">
                  <SiEthereum fontSize={21} color="#fff" />
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>
              <div>
                <p className="text-white font-light text-sm">
                  {shortenAddress(transactionContext?.currentAccount)}
                </p>
                <p className="text-white font-semibold text-lg">
                  Ethereum
                </p>
              </div>
            </div>
          </div>
          <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
            <Input placeholder="Address To" name="addressTo" type="text" handleChange={transactionContext?.handleChange} />
            <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={transactionContext?.handleChange} />
            <Input placeholder="Keyword (Gif)" name="keyword" type="text" handleChange={transactionContext?.handleChange} />
            <Input placeholder="Enter Message" name="message" type="text" handleChange={transactionContext?.handleChange} />

            <div className="h-[1px] w-full bg-gray-400 my-2" />
            {
              transactionContext.isLoading ? (
                <Loader />
              ) : (
                <button type="button" onClick={handleSubmit} className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer">Send Now</button>
              )}
          </div>
        </div>
      </div>
    </div >
  )
}

export default Welcome
