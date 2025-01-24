import React from 'react';
import getAllPosts from '../../../utils/getAllPosts';
import Link from 'next/link';

const HomePage = async () => {
    const data = await getAllPosts();
    return (
      <div>
        <ul className="grid grid-cols-4 items-center justify-center gap-5 text-center mt-20">
          {data.map((data) => (
            <>
              <Link href={`/home/${data.id}`}>
                <li className="border h-20 p-3" key={data.title}>
                  {data.title}
                </li>
              </Link>
            </>
          ))}
        </ul>
      </div>
    );
};

export default HomePage;