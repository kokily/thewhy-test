import { useCallback, useState } from 'react';

export default function useNavigation() {
  const [toggle, setToggle] = useState(false);

  const onToggle = useCallback(() => {
    setToggle((prev) => !prev);
  }, []);

  return {
    toggle,
    onToggle,
  };
}
