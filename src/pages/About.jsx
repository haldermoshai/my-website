// About.jsx

const About = () => {
  return (
    <>
      <div className="container mx-auto bg-slate-100 flex flex-col items-center gap-x-4 gap-y-4 px-8 lg:px-0 py-8 lg:py-0 lg:flex-row">
        <div className="w-full lg:w-9/20">
          <img
            src="/frames/me.jpg"
            alt="Getting Started"
            className="rounded-sm"
          />
        </div>
        <div className="space-y-6 w-full lg:w-11/20 p-0 lg:px-20">
          <p className="text-3xl font-myfont text-left lg:text-center font-bold md:text-4xl">About Me</p>
          <p className="text-base font-myfont text-gray-500 md:text-lg">
            Hi, this is <span className="font-bold text-cyan-400">Sourav Halder</span> from Kolkata, India. I’m a self-taught artist. I’m not a photographer by profession. I simply enjoy the process of taking pictures. I started photography when I was in my teen days probably in the year 2018 and I’m still learning. I’m not perfect with my framing, composition or post processing in any way whatsoever; I do things the way I love to imagine. Photography for me is my therapy. My escape from the world. I fall in love with taking pictures, with wandering around finding new things. To me, it is my way of expressing what I observe through my lens. To capture the moment, to feel the environment, to be indulged with a piece of time which will never repeat is truly a blessing to me.
          </p>
        </div>
      </div>
    </>
  )
}

export default About;