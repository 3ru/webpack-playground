import { debounce, pick, throttle } from "lodash";
import { useEffect, useMemo, useState } from "react";
import { render } from "react-dom";
import { addDays, format } from "date-fns";
import { Box, Button, TextField } from "@mui/material";
import { default as default_0 } from "axios";

;// external "lodash"

;// external "react"

;// external "react-dom"

;// external "date-fns"

;// external "@mui/material"

;// external "axios"

;// ./src/index.js
// Test library - Uses only specific features from various external modules
// When tree-shaking works, unused imports should not be included in final output

// Lodash - Utility functions (only some are used)


// React - Hooks (only some are used)


// React DOM - Rendering


// Date-fns - Date manipulation (only some are used)


// MUI Material - UI Components (only some are used)


// Axios - HTTP Client


// ========================================
// Only actually used functions (tree-shaking test)
// ========================================

function createDebouncedFunction(fn, delay) {
  return debounce(fn, delay);
}

function createThrottledFunction(fn, delay) {
  return throttle(fn, delay);
}

function extractProperties(obj, keys) {
  return pick(obj, keys);
}

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  
  const increment = useMemo(() => 
    throttle(() => setCount(c => c + 1), 100), []
  );
  
  useEffect(() => {
    console.log(`Counter value: ${count}`);
  }, [count]);
  
  return { count, increment };
}

function formatCurrentDate() {
  return format(new Date(), 'yyyy-MM-dd');
}

function getNextWeek() {
  return addDays(new Date(), 7);
}

async function fetchData(url) {
  try {
    const response = await default_0.get(url);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch:', error);
    throw error;
  }
}

function createSimpleComponent() {
  // Not JSX, but createElement-equivalent processing
  return {
    render: () => render,
    Button: () => Button,
    TextField: () => TextField,
    Box: () => Box
  };
}

// Default export
/* harmony default export */ const src = ({
  createDebouncedFunction,
  createThrottledFunction,
  extractProperties,
  useCounter,
  formatCurrentDate,
  getNextWeek,
  fetchData,
  createSimpleComponent
});
export { createDebouncedFunction, createSimpleComponent, createThrottledFunction, src as default, extractProperties, fetchData, formatCurrentDate, getNextWeek, useCounter };
