import { LucideIcon } from 'lucide-react';

export interface DeliveryOptionProps {
  icon: LucideIcon;
  title: string;
  description: string;
  duration: string;
  price: string;
  recommended?: boolean;
}

export interface DeliveryOption {
  iconType: 'train' | 'truck' | 'plane' | 'ship';
  title: string;
  description: string;
  duration: string;
  price: string;
  recommended?: boolean;
}