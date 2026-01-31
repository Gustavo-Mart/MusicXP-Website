export default function MenuInstaller() {
  return (
    <div className="flex flex-col items-center justify-center bg-green-500 w-full border-b-2 border-b-black">
      <h1 
      className="text-7xl font-semibold font-array uppercase
      xs:text-8xl
      md:hidden
      ">MusicXP</h1>
      <div className="flex flex-row justify-between h-24 items-center px-12 gap-4">
        <a href="/Music Widget Setup 1.0.0.exe" download
          className="text-2xl font-bold font-clash uppercase hover:text-white 
              transition-colors cursor-pointer flex items-center gap-4 w-1/2 h-full
              md:text-4xl">
          <i className="fa-brands fa-windows text-4xl"></i>
          Windows Installer
        </a>
        <a href="/electron-app_1.0.0_amd64.deb" download
          className="text-2xl font-bold font-clash uppercase hover:text-white 
              transition-colors cursor-pointer flex items-center gap-4 w-1/2 h-full
              md:text-4xl">
          <i className="fa-brands fa-linux text-4xl"></i>
          Linux Installer
        </a>
      </div>
    </div>
  )
}