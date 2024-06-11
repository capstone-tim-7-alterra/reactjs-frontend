import Navbar from "./headerDashboard";

export default function AddEvent() {
  return (
    <>
      <section className="section-addEvent">
        <Navbar />
        <div className=" text-sm font-normal breadcrumbs text-neutral-40 gap-[1px]">
          <ul className="w-[1391px] h-[20px] mx-auto">
            <li>
              <a href="#" className="w-[79px] h-[20px]">
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="w-[100px] h-[20px] mr-4">
                Manage Event
              </a>
            </li>
            <li className="w-[106px] h-[20px] font-semibold">Add new event</li>
          </ul>
        </div>


      </section>
    </>
  );
}
