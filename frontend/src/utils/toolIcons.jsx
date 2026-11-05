'use client';

import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGithub,
  FaNodeJs,
  FaCode,
} from 'react-icons/fa';
import {
  SiExpress,
  SiMongodb,
  SiNetlify,
  SiHostinger,
  SiPostman,
  SiTypescript,
  SiSupabase,
  SiFirebase,
  SiVercel,
  SiNodedotjs,
} from 'react-icons/si';

const iconMap = {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGithub,
  FaNodeJs,
  BsTypescript: SiTypescript,
  SiTypescript,
  TbBrandNodejs: SiNodedotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  RiSupabaseFill: SiSupabase,
  SiSupabase,
  IoLogoFirebase: SiFirebase,
  SiFirebase,
  RiVercelFill: SiVercel,
  SiVercel,
  SiNetlify,
  SiHostinger,
  SiPostman,
};

export const getToolIcon = (iconName, toolName = '') => {
  if (iconName && iconMap[iconName]) {
    return iconMap[iconName];
  }

  // Fallback matching by name
  const name = String(toolName).toLowerCase().trim();
  if (name.includes('html')) return FaHtml5;
  if (name.includes('css')) return FaCss3Alt;
  if (name.includes('javascript')) return FaJsSquare;
  if (name.includes('typescript')) return SiTypescript;
  if (name.includes('react')) return FaReact;
  if (name.includes('node')) return SiNodedotjs;
  if (name.includes('express')) return SiExpress;
  if (name.includes('mongo')) return SiMongodb;
  if (name.includes('supabase')) return SiSupabase;
  if (name.includes('firebase')) return SiFirebase;
  if (name.includes('github') || name.includes('git')) return FaGithub;
  if (name.includes('vercel')) return SiVercel;
  if (name.includes('netlify')) return SiNetlify;
  if (name.includes('hostinger')) return SiHostinger;
  if (name.includes('postman')) return SiPostman;

  return FaCode;
};

