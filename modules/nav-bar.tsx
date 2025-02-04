type params = {
  clicked: string;
};

export default function NavigationBar({clicked}: params) {
  return <div>{clicked == 'home' && HomeNavigationBar()}</div>;
}

function HomeNavigationBar() {
  return (
    <div className="relative mx-10 my-10 text-xl">
      <div className="absolute top-0 right-0 flex flex-row gap-10">
        <button className="bg-[#E2BDF0] w-[100px] h-[40px] rounded-xl">
          home
        </button>

        <button className="w-[100px] h-[40px] rounded-2xl">
          <a href="/about-me"> about me</a>
        </button>

        <button className="w-[100px] h-[40px] rounded-2xl">
          <a href="/experience"> experience</a>
        </button>

        <button className="w-[100px] h-[40px] rounded-2xl">
          <a href="/projects"> projects</a>
        </button>

        <button className="w-[100px] h-[40px] rounded-2xl">
          <a href="/contact"> contact</a>
        </button>
      </div>
    </div>
  );
}

