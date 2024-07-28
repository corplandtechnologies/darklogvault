import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function PaymentDialog({}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Extract</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Make Payment Here</DialogTitle>
          <DialogDescription>
            Please confirm the BTC details before proceeding with the
            extraction.
            <p className="font-extrabold text-green-500 mt-5">
              Log Details would be sent through your email once payment has been
              made.
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
          <p className="font-semibold text-lg">
            Equivalent BTC:
            <p className="text-sm">0.0054 BTC</p>
          </p>
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
  );
}
