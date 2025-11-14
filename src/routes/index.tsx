import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/')({ component: App })

function App() {
  const links = [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/armandagopian/',
    },
    {
      label: 'GitHub',
      href: 'https://github.com/ArmandAgopian',
    },
    {
      label: 'Resume',
      href: 'https://github.com/ArmandAgopian/resume/blob/main/agopian-armand-resume-swe.pdf',
    },
  ]

  return (
    <div className="min-h-screen bg-background px-6 py-16">
      <div className="mx-auto flex max-w-4xl flex-1 flex-col items-center justify-center gap-6">
        <h1 className="text-center text-3xl font-semibold text-foreground md:text-4xl">
          Hi, I&apos;m Armand — find me here
        </h1>
        <div className="flex w-full flex-col items-center gap-4 md:flex-row md:justify-center">
          {links.map((link) => (
            <Button
              key={link.href}
              render={
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                />
              }
              className="w-full md:w-auto"
              size="lg"
            >
              {link.label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
