export type GuideVariant = 
  | 'primary'
  | 'secondary'

export interface IGuideProps {
  title: string;
  subtitle?: string;
  slug?: string;
  width?: string;
  iconSrc?: string;
  variant?: GuideVariant;
  href?: string;
}