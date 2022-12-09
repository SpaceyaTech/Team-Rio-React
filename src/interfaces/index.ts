export interface Blog {
  id: number;
  title?: string;
  category?: string;
  content?: string;
  authorid?: number;
  author?: string;
  date?: string;
}

export interface CustomButtonProps {
  text: string;
  color: string;
  textColor: string;
}

export interface BlogFilterButtonProps {
  category: string;
  isActive: boolean;
  handleClick: (category: string) => void;
}
