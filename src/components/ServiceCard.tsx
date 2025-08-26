import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  services: string[];
  iconBgColor?: string;
}

export function ServiceCard({ icon: Icon, title, description, services, iconBgColor = "bg-primary/10" }: ServiceCardProps) {
  return (
    <Card className="h-full hover:shadow-lg transition-all duration-300 border-primary/10 bg-gradient-card backdrop-blur-sm group">
      <CardHeader className="text-center p-8">
        <div className={`w-20 h-20 ${iconBgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform`}>
          <Icon className="w-10 h-10 text-primary" />
        </div>
        <CardTitle className="text-2xl font-bold text-foreground mb-3">{title}</CardTitle>
        <CardDescription className="text-muted-foreground font-light text-base leading-relaxed">{description}</CardDescription>
      </CardHeader>
      <CardContent className="p-8 pt-0">
        <div className="space-y-3">
          {services.map((service, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
              <span className="text-foreground font-light text-sm">{service}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}