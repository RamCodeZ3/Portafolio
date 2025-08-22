import { Bot, PanelTop, FileCode, FileCode2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const { t } = useTranslation();

const services = [
  {
      icon: <PanelTop />,
      title: t('services.service1'),
      description: t('services.description1'),
    },
    {
      icon: <Bot/>,
      title: t('services.service2'),
      description: t('services.description2'),
    },
    {
      icon: <FileCode/>,
      title: t('services.service3'),
      description: t('services.description3'),
    },
    {
      icon: <FileCode2/>,
      title: t('services.service4'),
      description: t('services.description4'),
    },
  ];


export default services;
