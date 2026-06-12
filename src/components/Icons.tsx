import { Calendar, Award, Fingerprint, Calculator, FileText, CreditCard, HeartPulse, GraduationCap, ShieldCheck, Printer, Users, CheckCircle2, Car, CarFront, MapPin, Phone, MessageCircle, Clock, Mail, Info, FileStack, ChevronRight, IdCard, Landmark, Home, Briefcase, Sun, PiggyBank, Camera, Image as ImageIcon, Banknote, FileSignature, ScrollText, Wrench, Gift, Heart, Wheat } from 'lucide-react';
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
    CarFront,
    MapPin,
    Phone,
    MessageCircle,
    Clock,
    Mail,
    Info,
    FileStack,
    ChevronRight,
    IdCard,
    Landmark,
    Home,
    Briefcase,
    Sun,
    PiggyBank,
    Camera,
    ImageIcon,
    Banknote,
    FileSignature,
    ScrollText,
    Wrench,
    Gift,
    Heart,
    Wheat
  };

  const IconComponent = icons[name] || CheckCircle2;
  return <IconComponent className={className} />;
};
