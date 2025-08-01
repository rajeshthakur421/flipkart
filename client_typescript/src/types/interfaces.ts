// Product interface
export interface Product {
  id: string;
  url: string;
  title: {
    shortTitle: string;
    longTitle: string;
  };
  discount: string;
  tagline: string;
  [key: string]: any;
}

// MultiSlide props
export interface MultiSlideProps {
  data: Product[];
  timer?: boolean;
  title: string;
}

// Slide props
export interface SlideProps extends MultiSlideProps {
  multi?: boolean;
}

// LoginDialog props
export interface LoginDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  setAccount: (account: string) => void;
}

// Login and Signup values
export interface LoginValues {
  username: string;
  password: string;
}

export interface SignupValues {
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
  phone: string;
}

// Account view
export interface AccountView {
  view: string;
  heading: string;
  subHeading: string;
}
