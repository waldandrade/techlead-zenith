import { Button } from "@/components/ui/button";
import { MessageCircle, Mail } from "lucide-react";

interface HeaderProps {
  onContactClick: (type: 'contratacao' | 'diagnostico') => void;
}

export const Header = ({ onContactClick }: HeaderProps) => {
  return (
    <header className="bg-white border-b border-border">
      <div className="container mx-auto max-w-6xl px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img 
              src="/lovable-uploads/e5070a58-ed6c-45c6-9ff7-c792c22e15af.png" 
              alt="OPTI Consultoria em TI" 
              className="h-12 w-auto"
            />
            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-foreground">OPTI Consultoria em TI</h1>
              <p className="text-sm text-muted-foreground">CNPJ: 28.896.606/0001-76</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Button 
              size="sm"
              onClick={() => onContactClick('diagnostico')}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Diagnóstico Gratuito
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};