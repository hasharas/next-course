import Link from 'next/link';
import React from 'react';

const abo = () => {
      return (
            <div>
                  <h1>
                        new about page
                  </h1>
                  <Link href={'/users'}>back</Link>
            </div>
      );
}

export default abo;

