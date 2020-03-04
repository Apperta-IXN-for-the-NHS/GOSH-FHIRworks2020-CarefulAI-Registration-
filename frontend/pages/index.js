import React from 'react';
import Link from 'next/link';

export default function Index() {
    return (
        <div>
            <Link href="/Main">
                <a>Main Page</a>
            </Link>
            <p>Hello Next.js</p>
        </div>
    );
}
