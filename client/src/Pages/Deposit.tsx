// import { deposit } from "@/api";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { FormEvent, useState } from "react";

// interface ResponseData {
//   btcAddress: string;
//   equivalentBTC: string;
//   qrCodeURL: string;
//   timeLeft: number;
//   message: string;
// }

const Deposit = () => {
  // const [response, setResponse] = useState<ResponseData | null>(null);

  // const handleSubmit = async (e: FormEvent) => {
  //   e.preventDefault();
  //   const inputElement = document.querySelector('input[name="amount"]');
  //   if (!inputElement) {
  //     console.error("Input element not found");
  //     return;
  //   }
  //   // Asserting the type to HTMLInputElement to access the value property
  //   const amount = (inputElement as HTMLInputElement).value;
  //   try {
  //     const result = await deposit(parseFloat(amount));
  //     setResponse(result.data);
  //   } catch (error) {
  //     console.error("Failed to make deposit:", error);
  //   }
  // };
  return (
    <div className="p-5 flex flex-col gap-5">
      <div className="font-bold text-lg">
        Your Balance will be funded immediately payment is made.
      </div>
      {/* {!response ? (
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
      ) : ( */}
      <>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="md:w-32">
              Deposit now
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Make Payment Here</DialogTitle>
              <DialogDescription>
                Please confirm the BTC details before proceeding with the
                deposit.
                <p className="font-extrabold text-green-500 mt-5">
                  Your wallet balance would be updated immediately your transfer has been made successfully.
                </p>
              </DialogDescription>
            </DialogHeader>
            <div className="mt-5 p-4 shadow rounded-lg border flex flex-col gap-5">
              <p className="font-semibold text-lg">
                BTC Address:
                <p className="text-sm">
                  bc1qtz3g498mpym3mj20mtw94x7lgnt3urzz4nu7yf
                </p>
              </p>
              {/* <p className="font-semibold text-lg">
                Equivalent BTC:
                <p className="text-sm">0.0054 BTC</p>
              </p> */}
              <img
                src={
                  "https://api.qrserver.com/v1/create-qr-code/?data=bc1qtz3g498mpym3mj20mtw94x7lgnt3urzz4nu7yf&size=100x100}"
                }
                alt="QR Code"
                className="w-1/2 flex self-center md:w-60"
              />
              <p className="font-semibold text-lg">
                Time Left:
                <p className="text-sm">30 minutes</p>{" "}
              </p>
              <p className="font-extrabold">Send BTC to only this address</p>
              <p className="text-red-500 font-extrabold">
                Sending any coins or tokens other than BTC to this Address might
                result in the loss of your funds!
              </p>
            </div>
            {/* <DialogFooter>
          <Button type="submit">Confirm Extraction</Button>
        </DialogFooter> */}
          </DialogContent>
        </Dialog>
      </>
      {/* )} */}
    </div>
  );
};

export default Deposit;
