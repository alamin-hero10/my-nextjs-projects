
import getAllPosts from '../../../utils/getAllPosts';
import Link from 'next/link';

const HomePage = async () => {
  const data = await getAllPosts();

    return (
      <div>
        <ul className="grid md:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-5 text-center mt-20">
          {data.map((item) => (
            <>
              <Link href={`/home/${item.id}`}>
                <li
                  className="border h-20 border-[#8fb7f3] bg-[#BFDBFE] p-5 rounded-md shadow-xl"
                  key={item.title}
                >
                  {item.title}
                </li>
              </Link>
            </>
          ))}
        </ul>
        <div className="text-center mt-14 mb-10">
          <button className="btn bg-[#BFDBFE] rounded-none">View More</button>
        </div>
      </div>
    );
};

export default HomePage;