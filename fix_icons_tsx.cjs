const fs = require('fs');
let code = fs.readFileSync('src/components/Icons.tsx', 'utf8');

code = `import { 
  Calendar, Award, Fingerprint, Calculator, FileText, CreditCard, HeartPulse, GraduationCap, 
  ShieldCheck, Printer, Users, CheckCircle2, Car, CarFront, MapPin, Phone, MessageCircle, 
  Clock, Mail, Info, FileStack, ChevronRight, IdCard, Landmark, Home, Briefcase, Sun, 
  PiggyBank, Camera, Image as ImageIcon, Banknote, FileSignature, ScrollText, Wrench, Gift, 
  Heart, Wheat, HardHat, Shield, Globe, UserCheck, Tractor, HeartHandshake, UserPlus, Package, 
  BookOpen, FilePlus, Stethoscope, Send, Building, FileLineChart, Utensils, Laptop
} from 'lucide-react';
import { ReactNode } from 'react';

export const getIcon = (name: string, className?: string): ReactNode => {
  const icons: Record<string, any> = {
    Calendar, Award, Fingerprint, Calculator, FileText, CreditCard, HeartPulse, GraduationCap, 
    ShieldCheck, Printer, Users, CheckCircle2, Car, CarFront, MapPin, Phone, MessageCircle, 
    Clock, Mail, Info, FileStack, ChevronRight, IdCard, Landmark, Home, Briefcase, Sun, 
    PiggyBank, Camera, ImageIcon, Banknote, FileSignature, ScrollText, Wrench, Gift, 
    Heart, Wheat, HardHat, Shield, Globe, UserCheck, Tractor, HeartHandshake, UserPlus, Package, 
    BookOpen, FilePlus, Stethoscope, Send, Building, FileLineChart, Utensils, Laptop
  };

  const IconComponent = icons[name] || CheckCircle2;
  return <IconComponent className={className} />;
};
`;

fs.writeFileSync('src/components/Icons.tsx', code, 'utf8');
