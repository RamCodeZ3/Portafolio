import { PanelTop, Bot, FileCode, FileCode2 } from 'lucide-react';
import type { ComponentType } from 'react';

interface serviceProps {
    icon:  ComponentType;
    title: string;
    description: string;
}

const services:serviceProps[] = [
  {
    icon: PanelTop,
    title: 'services.service1',
    description: 'services.description1',
  },
  {
    icon: Bot,
    title: 'services.service2',
    description: 'services.description2',
  },
  {
    icon: FileCode,
    title: 'services.service3',
    description: 'services.description3',
  },
  {
    icon: FileCode2,
    title: 'services.service4',
    description: 'services.description4',
  },
];

export default services;