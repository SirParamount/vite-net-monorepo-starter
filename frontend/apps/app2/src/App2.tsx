import { TestCoreComponent } from '@core/components/test-core-component/test-core-component';
import { TestSharedComponent } from '@shared/components/test-shared-component/test-shared-component';
import React, { useEffect, useState } from 'react';

export const App2: React.FC = () => {
  const [msg, setMsg] = useState('');

  useEffect(() => {
    const controller = new AbortController();
    fetch('https://localhost:7068/api/hello', { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then((data) => {
        setMsg(data.message);
      })
      .catch((error) => {
        if (error.name !== 'AbortError') {
          console.error('Fetch failed:', error);
        }
      });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-3xl font-bold">App2</h1>
      <p>{msg}</p>
      <TestCoreComponent text="This is a core component" />
      <TestSharedComponent text="This is a shared component" />
    </div>
  );
};
