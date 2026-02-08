
export interface MessageConfig {
  recipient: string;
  greeting: string;
  message: string;
  highlightedKeywords: string[];
  quote: string;
  author: string;
  signature: string;
}

export interface StarProps {
  top: string;
  left: string;
  size: string;
  duration: string;
}

export interface FloatingElement {
  id: number;
  type: 'heart' | 'flower' | 'butterfly';
  x: number;
  y: number;
  scale: number;
  delay: number;
  duration: number;
}
