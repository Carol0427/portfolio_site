declare module 'react-typewriter-effect' {
    import React from 'react';
  
    interface TypewriterProps {
      text: string | string[];
      typeSpeed?: number;
      cursorColor?: string;
      onTypingDone?: () => void;
    }
  
    const Typewriter: React.FC<TypewriterProps>;
  
    export default Typewriter;
  }
  