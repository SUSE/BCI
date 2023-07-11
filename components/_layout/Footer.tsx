import { DocAndGitLinks } from '../DocAndGitLinks'

export const Footer = () => {
  return (
    <div className='bg-primary-light dark:bg-black text-white'>
      <div className='grid grid-flow-row align-middle mx-auto w-5/6 2xl:w-4/6'>
        <div className='grid grid-flow-row md:grid-flow-col gap-4 justify-between items-center py-4'>
          <div className='flex gap-4 text-[12px]'>
            <DocAndGitLinks />
          </div>

          <p className='text-[12px] text-center md:text-left'>© 2023 SUSE LLC. BCI is an open source project of SUSE.</p>
          {/* <SuseLogoSVG className='w-40 h-20 fill-current text-white' /> */}
        </div>
      </div>
    </div>
  )
}
