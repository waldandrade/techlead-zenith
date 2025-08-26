import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ServiceCard } from "@/components/ServiceCard";
import { ContactForm } from "@/components/ContactForm";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Rocket, Target, Code, Users, Settings, Zap, CheckCircle, MessageCircle, Mail, ArrowRight, Star } from "lucide-react";
const Index = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [formType, setFormType] = useState<'contratacao' | 'diagnostico'>('contratacao');
  const openDialog = (type: 'contratacao' | 'diagnostico') => {
    setFormType(type);
    setDialogOpen(true);
  };
  const services = [{
    icon: Rocket,
    title: "Nascimento",
    description: "Do zero ao MVP com estrutura sólida",
    iconBgColor: "bg-primary/10",
    services: ["Definição de tecnologias", "Montagem de times", "Organização de rotinas", "Acompanhamento de MVP", "Organização de infraestrutura"]
  }, {
    icon: Target,
    title: "Consolidação",
    description: "Estruturação e otimização de processos",
    iconBgColor: "bg-primary/10",
    services: ["Treinamentos sob demanda", "Migração para o remoto", "Revisão de arquitetura", "Implementação de rotinas", "Code review"]
  }, {
    icon: Code,
    title: "Mão na Massa",
    description: "Execução técnica especializada",
    iconBgColor: "bg-primary/10",
    services: ["P&D com PoC", "Integrações", "Salas de guerra", "Profissional dedicado", "CI/CD"]
  }];
  const benefits = ["Mais de 10 anos de experiência em liderança técnica", "Metodologias ágeis e práticas DevOps", "Acompanhamento personalizado para cada necessidade", "Resultados mensuráveis e entrega de valor"];
  return <div className="min-h-screen bg-background">
      <Header onContactClick={openDialog} />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-gradient-hero overflow-hidden">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center text-primary-foreground">
            <Badge className="mb-8 bg-white/10 text-white border-white/20 hover:bg-white/20 transition-colors">
              Consultoria TechLead Especializada
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight">
              Uma jornada para resultados{" "}
              <span className="block">de alto nível.</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-12 text-white/80 max-w-3xl mx-auto font-light leading-relaxed">
              E toda jornada exige direção estratégica para transformar sua visão tecnológica em realidade.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-10 py-4 rounded-xl font-medium" onClick={() => openDialog('diagnostico')}>
                <MessageCircle className="w-5 h-5 mr-2" />
                Diagnóstico Gratuito
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 px-6 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                OPTI é um ponto de virada organizacional.
              </h2>
              <p className="text-xl text-muted-foreground mb-8 font-light leading-relaxed">
                Destravamos a liderança técnica, organizamos a estratégia e fazemos a operação fluir. 
                Entramos quando o modelo atual já não sustenta mais o futuro.
              </p>
            </div>
            
            <div className="order-1 lg:order-2">
              <Card className="bg-gradient-card border-primary/10 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">OPTI é mais que uma consultoria.</h3>
                  <h3 className="text-2xl font-bold mb-6 text-primary">É um sistema de aceleração.</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Validado em grandes organizações, que conecta presença executiva, 
                    método próprio e resultados reais.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-24 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Do caos para a clareza.
            </h2>
            <h2 className="text-3xl md:text-4xl font-light text-muted-foreground mb-8">
              Da desordem para o foco. Da estagnação para o movimento.
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
              Três blocos de consultoria para atender cada momento da sua jornada tecnológica
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => <ServiceCard key={index} {...service} />)}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="sobre" className="py-24 px-6 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Estratégia com método
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
              Nada aqui é baseado em achismos. Atuamos com frameworks, métricas, processos 
              e provocações orientadas por um método robusto e proprietário.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => <Card key={index} className="border-primary/10 bg-gradient-card backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-foreground font-light leading-relaxed">{benefit}</p>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contato" className="py-24 px-6 bg-primary">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-8 leading-tight">
            Pronto para acelerar seu projeto?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-12 font-light leading-relaxed max-w-2xl mx-auto">
            Entre em contato e descubra como podemos ajudar a transformar seus desafios tecnológicos em oportunidades
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-10 py-4 rounded-xl font-medium" onClick={() => openDialog('diagnostico')}>
            <MessageCircle className="w-5 h-5 mr-2" />
            Diagnóstico Gratuito
          </Button>
        </div>
      </section>

      {/* Contact Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-2xl">
          <ContactForm type={formType} onClose={() => setDialogOpen(false)} />
        </DialogContent>
      </Dialog>
      
      <Footer onContactClick={openDialog} />
    </div>;
};
export default Index;