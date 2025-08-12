'use client'

// Next Imports
import Link from 'next/link'

// Third-party Imports
import classnames from 'classnames'

// Hook Imports
import useVerticalNav from '@menu/hooks/useVerticalNav'

// Util Imports
import { verticalLayoutClasses } from '@layouts/utils/layoutClasses'

const FooterContent = () => {
  // Hooks
  const { isBreakpointReached } = useVerticalNav()

  return (
    <div
      className={classnames(verticalLayoutClasses.footerContent, 'flex items-center justify-between flex-wrap gap-4')}
    >
      <p>
        <span>{`© Tedtek Studios ${new Date().getFullYear()}`}</span>
      </p>
      {!isBreakpointReached && (
        <div className='flex items-center gap-4'>
          <Link href='https://github.com/tedtekstudios' target='_blank' className='text-primary'>
            License
          </Link>
          <Link href='https://github.com/tedtekstudios' target='_blank' className='text-primary'>
            More Themes
          </Link>
          <Link href={process.env.NEXT_PUBLIC_DOCS_URL as string} target='_blank' className='text-primary'>
            Documentation
          </Link>
          <Link
            href={`https://github.com/tedtekstudios/${process.env.NEXT_PUBLIC_REPO_NAME}/issues`}
            target='_blank'
            className='text-primary'
          >
            Support
          </Link>
        </div>
      )}
    </div>
  )
}

export default FooterContent
