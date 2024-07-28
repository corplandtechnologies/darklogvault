import { Button } from "@/components/ui/button";

const Support = () => {
  return (
    <div className="text-center flex flex-col gap-10 text-lg mt-10">
      <div>
        <h1 className="font-bold text-4xl mb-5">Support</h1>
        <p>For any inquiries or assistance, please contact our support team:</p>
      </div>
      <div>
        <h2 className="font-bold text-2xl mb-5">Telegram</h2>
        <p>Contact our Telegram support for real-time help and updates:</p>
        <a href="https://t.me/darklogvaultsupport">
          <Button className="mt-5">Telegram Support</Button>
        </a>
      </div>
    </div>
  );
};

export default Support;
