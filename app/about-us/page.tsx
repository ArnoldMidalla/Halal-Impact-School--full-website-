export default function About() {
  return (
    <>
    <section className="flex gap-4 p-4 h-fit">
        <div className="bg-green-50 text-green-900 h-full w-90 rounded-lg p-8">
            <p className="text-md font-semibold">Our</p>
            <h1 className="text-6xl font-extrabold">Vision</h1>
        </div>
        <div className="text-green-900 bg-green-50 font-medium rounded-lg p-8 flex justify-center items-center">
            <p>Halal Impact Schools is a center of excellence committed to raising a generation of confident, disciplined, and well-rounded learners. With a strong foundation rooted in moral values, academic excellence, and creativity, we nurture every child to discover their unique potential and thrive in todays dynamic world</p>
        </div>
    </section>
    <section className="flex gap-4 p-4 h-fit">
        <div className="text-blue-900 bg-blue-50 font-medium rounded-lg p-8 flex justify-center items-center">
            <p>Halal Impact Schools is a center of excellence committed to raising a generation of confident, disciplined, and well-rounded learners. With a strong foundation rooted in moral values, academic excellence, and creativity, we nurture every child to discover their unique potential and thrive in todays dynamic world</p>
        </div>
        <div className="bg-blue-50 text-blue-900 h-full w-90 rounded-lg p-8">
            <p className="text-md font-semibold">Our</p>
            <h1 className="text-6xl font-extrabold">Mission</h1>
        </div>
    </section>
      <section className="flex flex-col justify-center items-center w-full gap-4">
        <h1 className="font-bold text-2xl">Meet our staff</h1>
        <div className="flex gap-4">
          <div className="w-40 h-60 hover:w-70 duration-300 rounded-md overflow-clip">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-40 h-60 hover:w-70 duration-300 rounded-md overflow-clip">
            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-40 h-60 hover:w-70 duration-300 rounded-md overflow-clip">
            <img
              src="https://images.unsplash.com/photo-1543949806-2c9935e6aa78?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}
