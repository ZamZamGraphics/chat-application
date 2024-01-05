import avatar from "../assets/avatar.svg";

function Message() {
  return (
    <div className="flex flex-row m-3">
      <div className="flex-none size-10 rounded-full overflow-hidden">
        <img src={avatar} alt="Member" />
      </div>
      <div className="flex-auto ml-3 py-2 px-3 border">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Member name
        </h3>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti odio
          quas facere nulla id consequuntur expedita dolore fugit, corporis
          soluta tempore laboriosam quod facilis sapiente at iste laborum illum
          aut! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
          possimus et maiores voluptatem pariatur atque. Quae, illum dolores
          quia eos nulla mollitia vitae inventore modi, repellendus eveniet
          totam qui exercitationem?
        </p>
        <p className="text-right">27/12/2023</p>
      </div>
    </div>
  );
}

export default Message;
