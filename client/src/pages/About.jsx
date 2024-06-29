import React from 'react'
import banner from '../assets/about.jpg'
import { Headtags } from '../components' 
import { IoStorefrontOutline } from "react-icons/io5";
import img1 from '../assets/image-13.jpg'
import img2 from '../assets/image-14.jpg'

const About = () => {
  return (
    <div className='w-full'>
      <Headtags pageTitle="About Us"/>
      <img src={banner} alt="banner" className='w-full md:h-[350px] object-cover'/>
      <div className='w-full max-w-[1300px] px-3 mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between w-full relative pb-10'>
          <div className='flex flex-col gap-3 px-0 xl:px-14 py-10 lg:py-20 flex-[2] w-full lg:absolute bg-white lg:top-[-170px] xl:max-w-[900px]'>
            <h3 className='text-red-500'>About Clotya Fashion</h3>
            <h1 className='text-[1.5rem] md:text-[2.3rem] font-medium'>
              Pellentesque habitant morbi tristiqque senectus et netus et malesuada fames ac egestas</h1>
            <p>
              In hac habitasse platea dictumst. Pellentesque viverra sem nec orci lacinia, in bibendum urna mollis. Quisque nunc lacus, varius vel leo a, pretium lobortis metus. Vivamus consectetur consequat justo. Sed interdum nunc ut tristique congue. Quisque maximus mauris et dui sagittis scelerisque.</p>
            <p>
              Quisque elementum tortor risus. Suspendisse nibh nisl, dignissim pellentesque mi eget, porta rhoncus quam. Curabitur gravida nibh sed purus efficitur, at pretium neque vulputate. Duis euismod aliquam tellus, in accumsan metus viverra finibus. Mauris sodales est nibh, quis bibendum eros aliquam sed. Etiam dolor ipsum, consectetur et tempor nec, mollis at felis. Quisque non tellus mauris. Duis venenatis posuere semper.
            </p>
          </div>
          <div className='flex-1 w-full p-4 w-full lg:absolute lg:right-0 max-w-[300px] lg:top-20'>
            <div className='flex items-center py-3 gap-4 mb-2'>
              <IoStorefrontOutline className='text-[1.5rem] text-red-500'/>
              <span className='font-medium'>Clotya Store</span>
            </div>
            <p className='text-[0.9rem]'>Germany — 785 15h Street, Office 478/B</p>
            <p className='text-[0.9rem] mb-4'>Green Mall Berlin, De 81566</p>
            <p className='text-[0.9rem] text-gray-500'> Phone: <span className='text-black'>+49 30 123456789</span></p>
            <div className='text-[0.9rem]'>Email: <span className='text-red-500'>Clotya@gmail.com</span></div>
          </div>
        </div>
        <hr className='border border-gray-200 xl:mt-80'/>
        <div className='w-full py-10'>
          <div className='flex flex-col gap-5 lg:gap-0 lg:flex-row items-center justify-between w-full'>
            <div className='flex flex-1 flex-col md:flex-row items-start gap-20 w-full'>
              <h1 className='text-[2rem]'>.01</h1>
              <div className='flex flex-col gap-3'>
                <h3 className='text-[0.8rem] font-medium text-gray-500'>ABOUT FOR CLOTYA FASHION</h3>
                <h1 className='text-[1.8rem] w-full lg:max-w-[500px]'>Ullamcorper sit amet lorem sed, tempus eleifend lacus.</h1>
              </div>
            </div>
            <div className='text-[0.9rem] flex-1 lg:max-w-[500px]'>
              In hac habitasse platea dictumst. Pellentesque viverra sem nec orci lacinia, in bibendum urna mollis. Quisque nunc lacus, varius vel leo a, pretium lobortis metus. Vivamus consectetur consequat justo. Sed interdum nunc ut tristique congue. Quisque maximus mauris et dui sagittis scelerisque.
            </div>
          </div>
          <p className='text-[0.9rem] py-4'>
            In hac habitasse platea dictumst. Pellentesque viverra sem nec orci lacinia, in bibendum urna mollis. Quisque nunc lacus, varius vel leo a, pretium lobortis metus. Vivamus consectetur consequat justo. Sed interdum nunc ut tristique congue. Quisque maximus mauris et dui sagittis scelerisque. Donec laoreet at turpis non molestie. Aenean dui leo, rutrum ac nisl ac, accumsan feugiat eros. Curabitur tempor vestibulum massa, vitae tincidunt justo congue at. Aliquam ullamcorper sem elit, vestibulum cursus dui dictum vitae. Curabitur vestibulum semper dolor, quis lacinia urna elementum vitae
          </p>
          <div className='w-full flex-col lg:flex-row text-[1rem] flex items-center justify-between gap-8 py-10 border-b'>
            <div className='w-full'>
              <p>
                In hac habitasse platea dictumst. Pellentesque viverra sem nec orci lacinia, in bibendum urna mollis. Quisque nunc lacus, varius vel leo a, pretium lobortis metus. Vivamus consectetur consequat justo. Sed interdum nunc ut tristique congue. Quisque maximus mauris et dui sagittis scelerisque
              </p>
              <ul className='py-8 list-disc px-10'>
                <li>Integer ullamcorper lorem ultrices orci faucibus consequat. Sed ut ultricies dolor, vel consectetur ex. In rutrum quam felis, feugiat ultricies magna fermentum sed.</li>
                <li>
                Nam in imperdiet lorem. Nulla condimentum, arcu nec aliquam ullamcorper, massa risus posuere enim, quis lacinia enim neque faucibus mi
                </li>
                <li>
                Mauris molestie ante in neque scelerisque, imperdiet ultrices quam commodo. Suspendisse a tincidunt justo.
                </li>
              </ul>
              <p>Aliquam erat volutpat. Morbi vel enim quis purus accumsan faucibus ac ac diam. Donec dapibus lacus sit amet risus ultrices, vitae fringilla sem vehicula. Cras pulvinar, arcu id vehicula ultrices, sapien augue ullamcorper leo, at auctor lacus lectus sed lectus. Aenean molestie euismod nibh, feugiat viverra justo consectetur et. Nullam lacinia tempus finibus. Aenean in ligula augue. Aenean in nisl tristique, ultricies sapien quis, mollis enim. Morbi aliquet risus velit, convallis faucibus nisl sagittis quis. Fusce nulla lorem, fermentum et interdum porta, hendrerit feugiat est. Aliquam vitae quam augue.
              </p>
            </div>
            <figure className='w-full'>
              <img src={img1} alt="image1" />
            </figure>
          </div>
        </div>

        <div className='w-full py-10'>
          <div className='flex flex-col lg:flex-row gap-5 lg:gap-0 items-center justify-between w-full'>
            <div className='flex flex-1 flex-col md:flex-row items-start gap-20 w-full'>
              <h1 className='text-[2rem]'>.02</h1>
              <div className='flex flex-col gap-3'>
                <h3 className='text-[0.8rem] font-medium text-gray-500'>ABOUT FOR CLOTYA FASHION</h3>
                <h1 className='text-[1.8rem] w-full lg:max-w-[500px]'>Ullamcorper sit amet lorem sed, tempus eleifend lacus.</h1>
              </div>
            </div>
            <div className='text-[0.9rem] flex-1 lg:max-w-[500px] '>
              In hac habitasse platea dictumst. Pellentesque viverra sem nec orci lacinia, in bibendum urna mollis. Quisque nunc lacus, varius vel leo a, pretium lobortis metus. Vivamus consectetur consequat justo. Sed interdum nunc ut tristique congue. Quisque maximus mauris et dui sagittis scelerisque.
            </div>
          </div>
          <p className='text-[0.9rem] py-4'>
            In hac habitasse platea dictumst. Pellentesque viverra sem nec orci lacinia, in bibendum urna mollis. Quisque nunc lacus, varius vel leo a, pretium lobortis metus. Vivamus consectetur consequat justo. Sed interdum nunc ut tristique congue. Quisque maximus mauris et dui sagittis scelerisque. Donec laoreet at turpis non molestie. Aenean dui leo, rutrum ac nisl ac, accumsan feugiat eros. Curabitur tempor vestibulum massa, vitae tincidunt justo congue at. Aliquam ullamcorper sem elit, vestibulum cursus dui dictum vitae. Curabitur vestibulum semper dolor, quis lacinia urna elementum vitae
          </p>
          <div className='w-full text-[1rem] flex flex-col-reverse lg:flex-row-reverse items-center justify-between gap-8 py-10'>
            <div className='w-full'>
              <p>
                In hac habitasse platea dictumst. Pellentesque viverra sem nec orci lacinia, in bibendum urna mollis. Quisque nunc lacus, varius vel leo a, pretium lobortis metus. Vivamus consectetur consequat justo. Sed interdum nunc ut tristique congue. Quisque maximus mauris et dui sagittis scelerisque
              </p>
              <ul className='py-8 list-disc px-10'>
                <li>Integer ullamcorper lorem ultrices orci faucibus consequat. Sed ut ultricies dolor, vel consectetur ex. In rutrum quam felis, feugiat ultricies magna fermentum sed.</li>
                <li>
                Nam in imperdiet lorem. Nulla condimentum, arcu nec aliquam ullamcorper, massa risus posuere enim, quis lacinia enim neque faucibus mi
                </li>
                <li>
                Mauris molestie ante in neque scelerisque, imperdiet ultrices quam commodo. Suspendisse a tincidunt justo.
                </li>
              </ul>
              <p>Aliquam erat volutpat. Morbi vel enim quis purus accumsan faucibus ac ac diam. Donec dapibus lacus sit amet risus ultrices, vitae fringilla sem vehicula. Cras pulvinar, arcu id vehicula ultrices, sapien augue ullamcorper leo, at auctor lacus lectus sed lectus. Aenean molestie euismod nibh, feugiat viverra justo consectetur et. Nullam lacinia tempus finibus. Aenean in ligula augue. Aenean in nisl tristique, ultricies sapien quis, mollis enim. Morbi aliquet risus velit, convallis faucibus nisl sagittis quis. Fusce nulla lorem, fermentum et interdum porta, hendrerit feugiat est. Aliquam vitae quam augue.
              </p>
            </div>
            <figure className='w-full'>
              <img src={img2} alt="image2" />
            </figure>
          </div>
        </div>
        <p>In hac habitasse platea dictumst. Pellentesque viverra sem nec orci lacinia, in bibendum urna mollis. Quisque nunc lacus, varius vel leo a, pretium lobortis metus. Vivamus consectetur consequat justo. Sed interdum nunc ut tristique congue. Quisque maximus mauris et dui sagittis scelerisque. Donec laoreet at turpis non molestie. Aenean dui leo, rutrum ac nisl ac, accumsan feugiat eros. Curabitur tempor vestibulum massa, vitae tincidunt justo congue at. Aliquam ullamcorper sem elit, vestibulum cursus dui dictum vitae. Curabitur vestibulum semper dolor, quis lacinia urna elementum vitae.</p>
      </div>
    </div>
  )
}

export default About
