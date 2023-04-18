export type ArticleVariant = 
  | 'primary'
  | 'secondary'

export interface IArticleProps {
  title: string;
  subtitle?: string;
  slug?: string;
  width?: string;
  iconSrc?: string;
  variant?: ArticleVariant;
  href?: string;
}