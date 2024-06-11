export const MenuButton = ({ children }) => {
  return (
    <div className="w-[25%] justify-center flex">
      <div className="group relative cursor-pointer text-md  md:text-xl uppercase leading-6 text-black overflow-hidden">
        <span className="inline-block p-1 transition duration-500 ease-out group-hover:-translate-y-[120%] text-center"> {children} </span>
        <span className="absolute left-0 translate-y-[120%] rotate-12 group-hover:rotate-0 group-hover:translate-y-0 inline-block p-1 transition duration-500 ease-out"> {children} </span>
      </div>
    </div>
  )
}