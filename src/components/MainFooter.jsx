import Logo from '../img/star 1.png'

const navigation = {
  // solutions: [
  //   { name: 'Marketing', href: '#' },
  //   { name: 'Analytics', href: '#' },
  //   { name: 'Commerce', href: '#' },
  //   { name: 'Insights', href: '#' },
  // ],
  // support: [
  //   { name: 'Pricing', href: '#' },
  //   { name: 'Documentation', href: '#' },
  //   { name: 'Guides', href: '#' },
  //   { name: 'API Status', href: '#' },
  // ],
  // company: [
  //   { name: 'About', href: '#' },
  //   { name: 'Blog', href: '#' },
  //   { name: 'Jobs', href: '#' },
  //   { name: 'Press', href: '#' },
  //   { name: 'Partners', href: '#' },
  // ],
  // legal: [
  //   { name: 'Claim', href: '#' },
  //   { name: 'Privacy', href: '#' },
  //   { name: 'Terms', href: '#' },
  // ],
  
  social: [
    {
      name: 'GitHub',
      href: 'https://github.com/superattraction/',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
}

export default function MainFooter() {
  return (
    <footer className="bg-gray-800 mx-auto rounded-x" aria-labelledby="footer-heading">
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-8 sm:pt-8 lg:px-8 lg:pt-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <img
              className="h-10"
              src={Logo}
              alt="Company name"
            />
            <p className="text-md leading-6 text-gray-300">
              Super 이끌림은 세계의 발전을 위해 노력합니다.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-500 hover:text-gray-400">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              {/* <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Solutions</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div> */}
              {/* <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Support</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div> */}
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              {/* <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div> */}
              {/* <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div> */}
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-10 lg:mt-12">
          <p className="text-sm leading-5 text-gray-400">&copy; 2024 Super 이끌림, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
