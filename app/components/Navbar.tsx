import React from 'react';
import Link from 'next/link';

const NavbarPage = () => {
  return (
    <div style={{ padding: '15px', backgroundColor: '#111' }}>
      <div style={{ display: 'flex', gap: '25px', color: 'white' }}>
        <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>
          Home
        </Link>
        <Link
          href="/performence"
          style={{ color: 'white', textDecoration: 'none' }}
        >
          Performance
        </Link>
        <Link
          href="/reliability"
          style={{ color: 'white', textDecoration: 'none' }}
        >
          Reliability
        </Link>
      </div>
    </div>
  );
};

export default NavbarPage;
