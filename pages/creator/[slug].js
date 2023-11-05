import { useRouter } from "next/router";
import Image from "next/image";
import mongoose from "mongoose";
import Creator from "@/model/Creator";
import { Badge } from "@/components/ui/badge";
import { BiLogoInstagramAlt, BiLogoYoutube } from "react-icons/bi";

export default function Page({ creator }) {
  const {
    name,
    email,
    profileImage,
    platforms,
    bannerImages,
    category,
    city,
    state,
  } = creator;
  return (
    <div className="w-3/4 mx-auto flex flex-col gap-y-3">
      <div className="mt-16 flex items-center justify-start gap-x-5">
        <Image
          src={profileImage}
          height={180}
          width={180}
          alt="user"
          className="rounded-full object-cover h-28 w-28"
        />
        <div>
          <h3>
            {name.toUpperCase()}{" "}
            <Badge variant={"secondary"} className={"shadow-lg"}>
              {category}
            </Badge>
          </h3>
          <span className="text-gray-500">
            {city || "Mumbai"}, {state || "Maharashtra"}
          </span>
          <div className="flex gap-x-2 items-center justify-start text-2xl">
            <BiLogoInstagramAlt />
            <BiLogoYoutube />
          </div>
        </div>
      </div>
      <div>
        <p className="w-[80%] text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
          explicabo. Minus, voluptatibus tempore maiores repellat, placeat
          mollitia animi voluptatum corrupti vero, ratione voluptatem ad labore
          ducimus eos illo quia dicta.
        </p>
      </div>

      <div>
        <h3 className="text-3xl">Packages</h3>
      </div>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGODB_URI);
  }
  let creator = await Creator.findOne({ username: params.slug });
  return {
    props: {
      creator: JSON.parse(JSON.stringify(creator)),
    },
  };
}
