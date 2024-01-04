import Member from "./Member";

function Sidebar() {
  return (
    <div className="w-[22rem] h-screen fixed z-20 inset-0 top-[3.3rem] overflow-y-auto md:block hidden bg-white dark:bg-slate-900 border-r border-slate-900/10 dark:border-slate-50/[0.06]">
      <Member id={1} />
      <Member id={2} />
      <Member id={3} />
      <Member id={4} />
      <Member id={5} />
      <Member id={6} />
      <Member id={7} />
      <Member id={8} />
      <Member id={9} />
      <Member id={10} />
      <Member id={11} />
      <Member id={12} />
      <Member id={13} />
      <Member id={14} />
      <Member id={15} />
    </div>
  );
}

export default Sidebar;
