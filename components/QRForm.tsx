import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { QrCode } from "lucide-react";

interface QRFormProps {
  onGenerate: (text: string) => void;
}

export function QRForm({ onGenerate }: QRFormProps) {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onGenerate(text.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="search-container">
        <Input
          type="text"
          placeholder="Enter your URL or text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full h-14 pl-6 pr-32 text-lg rounded-full border-2 border-gray-100 focus:border-secondary focus:ring-secondary"
        />
        <Button
          type="submit"
          disabled={!text.trim()}
          className="h-11 px-6 rounded-full bg-secondary hover:bg-secondary/90 text-white"
        >
          <QrCode className="w-5 h-5 mr-2" />
          Generate
        </Button>
      </div>
    </form>
  );
} 