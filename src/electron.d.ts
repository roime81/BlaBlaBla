declare global {
  interface Window {
    blablabla?: {
      openOrb: () => Promise<void>;
      minimize: () => Promise<void>;
      maximize: () => Promise<void>;
      close: () => Promise<void>;
      hideExpanded: () => Promise<void>;
      openPage: (url: string) => Promise<void>;
      backToChat: () => Promise<void>;
    };
    appInfo?: {
      name: string;
      version: string;
    };
  }
}

export {};
