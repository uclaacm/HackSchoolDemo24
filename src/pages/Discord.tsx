import { useEffect } from 'react';

function Discord() {
  useEffect(() => {
    window.location.href = 'https://discord.com/invite/3GSPECbCnE';
  }, []);

  return (
    <div className="mt-28 text-center">
      <p>Redirecting to ACM Hack Discord...</p>
      <a
        href="https://discord.com/invite/3GSPECbCnE"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline"
      >
        Click here if not redirected.
      </a>
    </div>
  );
}

export default Discord;
