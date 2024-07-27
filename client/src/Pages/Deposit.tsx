import { deposit } from "@/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormEvent, useState } from "react";

const Deposit = () => {
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const amount: any = document.querySelector('input[name="amount"]').value;
    try {
      const result = await deposit(parseFloat(amount));
      setResponse(result.data);
    } catch (error) {
      console.error("Failed to make deposit:", error);
    }
  };
  return (
    <div className="p-5 flex flex-col gap-5">
      <div className="font-bold text-lg">
        Your Balance will be funded immediately payment is made.
      </div>
      {!response ? (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2.5">
          <div className="flex flex-col gap-2.5">
            <div className="font-semibold text-sm">Amount (USD)</div>
            <div>
              <Input
                type="number"
                name="amount"
                placeholder="Enter Amount"
                className="w-full focus-visible:outline-sky-600 "
                pattern="\d*"
              />
            </div>
          </div>
          <div>
            <Button
              type="submit"
              className="bg-blue-500 text-white py-2 px-5 rounded-md text-sm font-semibold "
            >
              Deposit
            </Button>
          </div>
        </form>
      ) : (
        <>
          <div className="mt-5 p-4 shadow rounded-lg border flex flex-col gap-5">
            <p className="font-semibold text-lg">
              BTC Address:
              <p className="text-sm">{response.btcAddress}</p>
            </p>
            <p className="font-semibold text-lg">
              Equivalent BTC:
              <p className="text-sm">{response.equivalentBTC} BTC</p>
            </p>
            <img
              src={response.qrCodeURL}
              alt="QR Code"
              className="w-1/2 flex self-center"
            />
            <p className="font-semibold text-lg">
              Time Left:
              <p className="text-sm">{response.timeLeft} minutes</p>{" "}
            </p>
            <p className="font-extrabold">{response.message}</p>
            <p className="text-red-500 font-extrabold">
              {" "}
              Sending any coins or tokens other than BTC to this Address might
              result in the loss of your funds!
            </p>
          </div>
          <div>
            <button></button>
          </div>
        </>
      )}
    </div>
  );
};

export default Deposit;
