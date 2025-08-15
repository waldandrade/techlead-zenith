import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ServiceCard } from "@/components/ServiceCard";
import { ContactForm } from "@/components/ContactForm";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { 
  Rocket, 
  Target, 
  Code, 
  Users, 
  Settings, 
  Zap,
  CheckCircle,
  MessageCircle,
  Mail,
  ArrowRight,
  Star
} from "lucide-react";

const Index = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [formType, setFormType] = useState<'contratacao' | 'diagnostico'>('contratacao');

  const openDialog = (type: 'contratacao' | 'diagnostico') => {
    setFormType(type);
    setDialogOpen(true);
  };

  const services = [
    {
      icon: Rocket,
      title: "Nascimento",
      description: "Do zero ao MVP com estrutura sólida",
      iconBgColor: "bg-primary",
      services: [
        "Definição de tecnologias",
        "Montagem de times",
        "Organização de rotinas",
        "Acompanhamento de MVP",
        "Organização de infraestrutura"
      ]
    },
    {
      icon: Target,
      title: "Consolidação", 
      description: "Estruturação e otimização de processos",
      iconBgColor: "bg-primary-blue",
      services: [
        "Treinamentos sob demanda",
        "Migração para o remoto",
        "Revisão de arquitetura",
        "Implementação de rotinas",
        "Code review"
      ]
    },
    {
      icon: Code,
      title: "Mão na Massa",
      description: "Execução técnica especializada",
      iconBgColor: "bg-success",
      services: [
        "P&D com PoC",
        "Integrações",
        "Salas de guerra",
        "Profissional dedicado",
        "CI/CD"
      ]
    }
  ];

  const benefits = [
    "Mais de 10 anos de experiência em liderança técnica",
    "Metodologias ágeis e práticas DevOps",
    "Acompanhamento personalizado para cada necessidade",
    "Resultados mensuráveis e entrega de valor"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header onContactClick={openDialog} />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center text-primary-foreground">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">
              Consultoria TechLead Especializada
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Transforme sua <span className="text-white">Visão</span> em <span className="text-white">Realidade</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              Consultoria técnica especializada para acelerar o crescimento do seu produto digital, 
              desde a concepção até a consolidação no mercado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-3"
                onClick={() => openDialog('contratacao')}
              >
                <Mail className="w-5 h-5 mr-2" />
                Contratar Agora
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-3"
                onClick={() => openDialog('diagnostico')}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Diagnóstico Gratuito
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Serviços Especializados
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Três blocos de consultoria para atender cada momento da sua jornada tecnológica
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Por que escolher nossa consultoria?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Experiência comprovada em liderança técnica e transformação digital, 
                com foco em resultados práticos e sustentáveis.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <Card className="border-primary/20">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle>Consultoria Personalizada</CardTitle>
                <CardDescription>
                  Cada projeto é único e merece uma abordagem especializada
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-6">
                  Trabalhamos lado a lado com sua equipe, garantindo transferência de conhecimento 
                  e capacitação contínua.
                </p>
                <Button className="w-full" onClick={() => openDialog('diagnostico')}>
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Começar com Diagnóstico Gratuito
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Pronto para acelerar seu projeto?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Entre em contato e descubra como podemos ajudar a transformar seus desafios em oportunidades
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-3"
              onClick={() => openDialog('contratacao')}
            >
              <Mail className="w-5 h-5 mr-2" />
              Contratar Consultoria
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-3"
              onClick={() => openDialog('diagnostico')}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Solicitar Diagnóstico
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-2xl">
          <ContactForm 
            type={formType} 
            onClose={() => setDialogOpen(false)} 
          />
        </DialogContent>
      </Dialog>
      
      <Footer onContactClick={openDialog} />
    </div>
  );
};

export default Index;
