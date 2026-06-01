import { Calendar, Award, Fingerprint, Calculator, FileText, CreditCard, HeartPulse, GraduationCap, ShieldCheck, Printer, Users, CheckCircle2, Car, MapPin, Phone, MessageCircle, Clock, Mail, Info, FileStack, ChevronRight, IdCard } from 'lucide-react';
import { ReactNode } from 'react';

export const getIcon = (name: string, className?: string): ReactNode => {
  const icons: Record<string, any> = {
    Calendar,
    Award,
    Fingerprint,
    Calculator,
    FileText,
    CreditCard,
    HeartPulse,
    GraduationCap,
    ShieldCheck,
    Printer,
    Users,
    CheckCircle2,
    Car,
    MapPin,
    Phone,
    MessageCircle,
    Clock,
    Mail,
    Info,
    FileStack,
    ChevronRight,
    IdCard
  };

  const IconComponent = icons[name] || CheckCircle2;
  return <IconComponent className={className} />;
};
