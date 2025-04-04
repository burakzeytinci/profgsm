import "@material-tailwind/react";

declare module "@material-tailwind/react" {
  // Tüm ortak özellikleri içeren bir tip tanımlıyoruz
  interface CommonProps {
    placeholder?: string;
    onPointerEnterCapture?: () => void;
    onPointerLeaveCapture?: () => void;
  }

  // Her bileşen için bu ortak özellikleri ekliyoruz
  export interface ButtonProps extends CommonProps {}
  export interface CardProps extends CommonProps {}
  export interface CardBodyProps extends CommonProps {}
  export interface IconButtonProps extends CommonProps {}
  export interface TypographyProps extends CommonProps {}
  export interface AvatarProps extends CommonProps {}
  export interface ChipProps extends CommonProps {}
  export interface DialogProps extends CommonProps {}
  export interface MenuProps extends CommonProps {}
  export interface MenuHandlerProps extends CommonProps {}
  export interface MenuListProps extends CommonProps {}
  export interface MenuItemProps extends CommonProps {}
  export interface TabsProps extends CommonProps {}
  export interface TabProps extends CommonProps {}
  export interface TabPanelProps extends CommonProps {}
  export interface AccordionProps extends CommonProps {}
  export interface AlertProps extends CommonProps {}
  export interface NavbarProps extends CommonProps {}
} 