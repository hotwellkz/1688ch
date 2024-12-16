import { LucideIcon } from 'lucide-react';

export interface ComparisonBlockProps {
  title: string;
  selfText: string;
  assistedText: string;
}

export interface ComparisonSideProps {
  icon: LucideIcon;
  title: string;
  text: string;
  variant: 'self' | 'assisted';
}