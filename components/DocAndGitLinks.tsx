import { DocumentationSVG, GithubSVG } from '@/assets/images'

export const DocAndGitLinks = () => {
  return (
    <>
      <a className='flex align-middle self-center gap-2 px-4 font-medium underline' href='https://open-docs.neuvector.com' target='_blank' rel='noreferrer'>
        <DocumentationSVG className='fill-current w-6' />
        <span className='self-center'>Docs</span>
      </a>

      <a className='flex self-center gap-2 px-4 font-medium underline' href='https://github.com/neuvector' target='_blank' rel='noreferrer'>
        <GithubSVG className='fill-current w-6' />
        <span className='self-center'> GitHub</span>
      </a>
    </>
  )
}
