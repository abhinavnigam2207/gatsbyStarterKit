import { useState, useCallback } from 'react';

export default (initial) => {
    const [flag, setFlag] = useState(initial);
    return [flag, useCallback(() => setFlag((status) => !status))];
}