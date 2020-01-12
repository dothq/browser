import { lightTheme, darkTheme, oledTheme } from '~/renderer/constants/themes';

export const getTheme = (name: string) => {
  if (name === 'light') return lightTheme;
  else if (name === 'dark') return darkTheme;
  else if (name === 'oled') return oledTheme;
  return lightTheme;
};
