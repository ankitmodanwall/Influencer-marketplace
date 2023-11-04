import { useRouter } from 'next/router';
import Image from 'next/image';
import mongoose from 'mongoose';
import Creator from '@/model/Creator';

export default function Page({ creator }) {
  const {
    name,
    email,
    profileImage,
    platforms,
    bannerImages,
    category,
    city,
    state
  } = creator;

  return (
    <>
      <div className='flex'>
        <div className='mx-auto my-20'>
          <div className='justify-center grid grid-cols-3 gap-2'>
            {[...Array(2)].map((bannerImageLink, i) => (
              <div
                key={i}
                className={`row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-2 dark:bg-neutral-900 ${
                  i === 0 || i === 3 ? 'col-span-2' : ''
                }`}
              >
                <Image
                  src={
                    'https://www.influencer.in/wp-content/uploads/2020/12/Sadaf-Hussain-a-famous-Indian-Instagrammer-shares-his-amazing-make-at-home-recipes-with-his-29.3K-followers..png'
                  }
                  alt='product preview'
                  width={350}
                  height={350}
                  quality={100}
                  className='rounded-lg h-[300px] object-cover shadow-md ring-1 ring-gray-900/10'
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps({ params }) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGODB_URI);
  }
  let creator = await Creator.findOne({ username: params.slug });
  return {
    props: {
      creator: JSON.parse(JSON.stringify(creator))
    }
  };
}
