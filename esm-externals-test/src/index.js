// Test library - Uses only specific features from various external modules
// When tree-shaking works, unused imports should not be included in final output

// Lodash - Utility functions (only some are used)
import { 
  debounce, 
  throttle, 
  pick,
  omit,        // Unused - should be excluded by tree-shaking
  cloneDeep,   // Unused - should be excluded by tree-shaking
  merge        // Unused - should be excluded by tree-shaking
} from 'lodash';

// React - Hooks (only some are used)
import { 
  useState, 
  useEffect,
  useMemo,
  useContext,   // Unused - should be excluded by tree-shaking
  useReducer,   // Unused - should be excluded by tree-shaking
  useCallback   // Unused - should be excluded by tree-shaking
} from 'react';

// React DOM - Rendering
import { 
  render,
  createPortal  // Unused - should be excluded by tree-shaking
} from 'react-dom';

// Date-fns - Date manipulation (only some are used)
import { 
  format, 
  addDays,
  subDays,      // Unused
  startOfDay,   // Unused
  endOfDay      // Unused
} from 'date-fns';

// MUI Material - UI Components (only some are used)
import { 
  Button,
  TextField,
  Box,
  Container,   // Unused
  Paper,       // Unused
  Grid         // Unused
} from '@mui/material';

// Axios - HTTP Client
import axios from 'axios';

// ========================================
// Only actually used functions (tree-shaking test)
// ========================================

export function createDebouncedFunction(fn, delay) {
  return debounce(fn, delay);
}

export function createThrottledFunction(fn, delay) {
  return throttle(fn, delay);
}

export function extractProperties(obj, keys) {
  return pick(obj, keys);
}

export function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  
  const increment = useMemo(() => 
    throttle(() => setCount(c => c + 1), 100), []
  );
  
  useEffect(() => {
    console.log(`Counter value: ${count}`);
  }, [count]);
  
  return { count, increment };
}

export function formatCurrentDate() {
  return format(new Date(), 'yyyy-MM-dd');
}

export function getNextWeek() {
  return addDays(new Date(), 7);
}

export async function fetchData(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch:', error);
    throw error;
  }
}

export function createSimpleComponent() {
  // Not JSX, but createElement-equivalent processing
  return {
    render: () => render,
    Button: () => Button,
    TextField: () => TextField,
    Box: () => Box
  };
}

// Default export
export default {
  createDebouncedFunction,
  createThrottledFunction,
  extractProperties,
  useCounter,
  formatCurrentDate,
  getNextWeek,
  fetchData,
  createSimpleComponent
};