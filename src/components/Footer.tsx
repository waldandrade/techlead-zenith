import { Button } from "@/components/ui/button";
import { Mail, MessageCircle } from "lucide-react";

interface FooterProps {
  onContactClick: (type: 'contratacao' | 'diagnostico') => void;
}

export const Footer = ({ onContactClick }: FooterProps) => {
  return (
    <footer className="bg-muted py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-start">
            <img 
              src="/lovable-uploads/e5070a58-ed6c-45c6-9ff7-c792c22e15af.png" 
              alt="OPTI Consultoria em TI" 
              className="h-10 w-auto mb-4"
            />
            <h3 className="font-bold text-foreground mb-2">OPTI Consultoria em TI</h3>
            <p className="text-sm text-muted-foreground mb-1">CNPJ: 28.896.606/0001-76</p>
            <p className="text-sm text-muted-foreground">
              Consultoria TechLead Especializada
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Nossos Serviços</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Nascimento de Produtos</li>
              <li>• Consolidação de Processos</li>
              <li>• Implementação Técnica</li>
              <li>• Diagnóstico Gratuito</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Fale Conosco</h4>
            <div className="space-y-3">
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full justify-start"
                onClick={() => onContactClick('diagnostico')}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Solicitar Diagnóstico
              </Button>
              <Button 
                size="sm" 
                className="w-full justify-start"
                onClick={() => onContactClick('contratacao')}
              >
                <Mail className="w-4 h-4 mr-2" />
                Contratar Consultoria
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 OPTI Consultoria em TI. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};