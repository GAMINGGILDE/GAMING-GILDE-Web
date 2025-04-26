import React, { useEffect, useState } from 'react';

interface AlertProps {
    message: string;
    duration?: number;
}

const Alert: React.FC<AlertProps> = ({ message, duration = 3000 }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, duration);

        return () => clearTimeout(timer);
    }, [duration]);

    if (!visible) return null;

    return (
        <div style={{ zIndex: 99999 }} className="fixed top-5 right-5 z-50 bg-green-500 text-white px-4 py-2 rounded shadow-lg transition-opacity duration-300">
            {message}
        </div>
    );
};

export default Alert;
