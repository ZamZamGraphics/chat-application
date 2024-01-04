import avatar from "../assets/avatar.svg";

// eslint-disable-next-line react/prop-types
function Member({ id }) {
  return (
    <div className="relative flex flex-row p-3 border-b border-slate-900/10 dark:border-slate-50/[0.06] hover:bg-slate-100 dark:hover:bg-slate-800">
      <div className="flex-none size-10 rounded-full overflow-hidden">
        <img src={avatar} alt="Member" />
      </div>
      <div className="flex-auto ml-3">
        <a
          className="before:absolute before:-inset-3 before:rounded-2xl sm:before:-inset-4"
          href={`message=${id}`}
        ></a>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Member name
        </h3>
        <span className="absolute right-2 top-3">27/12/2023</span>
        <p>Member Name : Last Massage...</p>
      </div>
    </div>
  );
}

export default Member;
