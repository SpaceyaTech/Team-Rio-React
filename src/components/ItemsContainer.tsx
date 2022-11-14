import Item from "./Item";
import SocialIcons from "./SocialIcons";
import { Icons } from "./Menus";
import { Company, Resources, QuickLinks} from "./Menus";
const ItemsContainer = () => {
  return (
    <div className=" grid justify-evenly text-teal-400 grid-cols-10 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:px-8 px-5 py-8">

      <div>
        <img src="icon.png" alt="" />
        <div className="mt-4"  >
          <SocialIcons  Icons={Icons} />
          </div>
      </div>
      <Item Links={Company} title="Company" />
      <Item Links={Resources} title="Resources" />
      <Item Links={QuickLinks} title="Quick Links" />
      <div >
        <h2>News Letter</h2>
        <p className="text-gray-400">Subscribe to our newsletter to get your weekly dose of news, updates, tips , and even special offers !</p>
        <div className=""  >
          <div>
        <input
            type="text "
            placeholder="Write your Email here"
            className="text-gray-800 w-5
           sm:w-72  sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
          />
          </div>
          <div>
          <button
            className="bg-teal-400 hover:bg-teal-500 border-solid border-2 border-green-500 duration-300 px-5 py-2.5 m-4 font-[Poppins]
           rounded-md text-white md:w-auto w-full"
          >
           Subscribe!
        </button>
        </div>
          </div>
      </div>
    </div>
  );
};


// 
export default ItemsContainer;
