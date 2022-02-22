import * as HeroIcons from "@heroicons/react/solid";
type CardInteractionProps = {
  /**
   * { activeHeader: boolean; dropIcon?: keyof typeof HeroIcons; options: { label: string; action: () => void; }[]; }
   */
  header: {
    activeHeader: boolean;
    dropIcon?: keyof typeof HeroIcons;
    options?: {
      label: string;
      action: () => void;
    }[];
  };
  /**
   * { title: string; subtitle?: string; avatar?: string; }
   */
  content: {
    avatar?: string;
    title: string;
    subtitle?: string;
  };
  /**
   * { activeActions: boolean; primary: { label: string; action: () => void; }; secondary?: { label: string; action: () => void; }; }
   */
  actions: {
    activeActions: boolean;
    primary?: {
      label: string;
      action: () => void;
    };
    secondary?: {
      label: string;
      action: () => void;
    };
  };
};

export default CardInteractionProps;
