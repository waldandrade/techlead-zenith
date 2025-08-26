import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
interface HeaderProps {
  onContactClick: (type: 'contratacao' | 'diagnostico') => void;
}
export const Header = ({
  onContactClick
}: HeaderProps) => {
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <img src="/lovable-uploads/e5070a58-ed6c-45c6-9ff7-c792c22e15af.png" alt="OPTI Consultoria em TI" className="h-8 w-auto" />
            
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#servicos" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Serviços
            </a>
            <a href="#sobre" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Sobre
            </a>
            <a href="#contato" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Contato
            </a>
          </nav>
          
          <Button variant="outline" size="sm" onClick={() => onContactClick('diagnostico')} className="border-primary/20 hover:bg-primary/5">
            <MessageCircle className="w-4 h-4 mr-2" />
            Diagnóstico Gratuito
          </Button>
        </div>
      </div>
    </header>;
};