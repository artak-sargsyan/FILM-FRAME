import React from 'react'
import {FaFacebookSquare, FaGithub, FaInstagram, FaLinkedin,} from 'react-icons/fa'
import {SiImdb} from 'react-icons/si'

const Footer = () => {
  return (
    <>
<footer className="bg-gray-600 dark:bg-gray-900">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <a href="#" className="flex items-center">
                  <img src="https://img.uxwing.com/wp-content/themes/uxwing/download/video-photography-multimedia/movies-icon.svg" className="h-8 mr-3" alt="FILM FRAME Logo" />
                  <span className="self-center text-2xl text-red-700 font-semibold whitespace-nowrap dark:text-white">FILM FRAME</span>
              </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-black uppercase dark:text-white">Resources</h2>
                  <ul className="text-black dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="https://flowbite.com/" className="hover:underline text-black">FILM FRAME</a>
                      </li>
                      <li>
                          <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-black uppercase dark:text-white">Follow us</h2>
                  <ul className="text-black dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Github</a>
                      </li>
                      <li>
                          <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Discord</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-black uppercase dark:text-white">Legal</h2>
                  <ul className="text-black dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-red-950 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-black sm:text-center dark:text-gray-400">© 2021 <a href="https://flowbite.com/" className="hover:underline">FILM FRAME™</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
              <a href="https://github.com/artak-sargsyan?tab=repositories" className="text-black hover:text-red-700" target="_blank">
                <FaGithub className="w-5 h-5" /><span className="sr-only">GitHub account</span>
              </a>
              <a href="https://www.linkedin.com/in/artak-sargsyan-704a15265/" className="text-black hover:text-red-700" target="_blank">
                <FaLinkedin className="w-5 h-5" /><span className="sr-only">Linkedin page</span>
              </a>
              <a href="https://www.imdb.com/" className="text-black hover:text-red-700" target="_blank">
                <SiImdb className="w-5 h-5" /><span className="sr-only">IMDb account</span>
              </a>
              <a href="#" className="text-black hover:text-red-700" target="_blank">
                <FaFacebookSquare className="w-5 h-5"/><span className="sr-only">Facebook page</span>
              </a>
              <a href="#" className="text-black hover:text-red-700" target="_blank">
                <FaInstagram className="w-5 h-5" /><span className="sr-only">Instagram page</span>
              </a>
          </div>
      </div>
    </div>
</footer>


    </>
  )
}

export default Footer