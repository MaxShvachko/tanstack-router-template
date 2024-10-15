import { Sun, Moon } from 'lucide-react';

import { useTheme, type Theme } from '@/providers/theme';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';

const THEME_VALUES: Theme[] = ['dark', 'light', 'system'];

export function ThemeSwitcher() {
  const { currentTheme, setTheme } = useTheme();

  const handleSetTheme = (event: React.MouseEvent<HTMLButtonElement>) => {
    setTheme(event.currentTarget.value as Theme);
  };

  return (
    <Popover>
      <PopoverTrigger>
        {currentTheme === 'light' ? <Sun /> : <Moon />}
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="end">
        <div className="flex flex-col">
          {THEME_VALUES.map((value) => {
            return (
              <Button
                variant="ghost"
                value={value}
                className="px-8 capitalize"
                onClick={handleSetTheme}
                key={value}
              >
                {value}
              </Button>
            );
          })}
        </div>
      </PopoverContent>
    </Popover>
  );
}
