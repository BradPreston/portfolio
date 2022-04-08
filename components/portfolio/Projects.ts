import Project from '../../interfaces/Project';
import Kazoo48 from '../../public/images/kazoo48.png';
import ParrotDistro from '../../public/images/parrot-distro.png';
import Ams from '../../public/images/ams.png';

const Projects: Project[] = [
  {
    name: 'Kazoo 48 Film Festival',
    link: 'https://kazoo48.com',
    bio: "The Kazoo 48 Film Festival is a film competition held in Kalamazoo, MI. Each contestant is given a unique genre, line of dialogue, prop, and character to use in their film. They're allowed 48 hours only to film, edit, and export their entry.",
    part: 'I designed, developed, and hosted this site.',
    challenges:
      'This was my first attempt at using Stripe. Learning how to use Stripe Checkout proved to be difficult at first, but after reading the docs and watching a few tutorials, I was able to get it up and running.',
    stack: ['Next JS', 'SASS', 'TypeScript', 'Stripe', 'Vercel'],
    image: Kazoo48,
    key: 'aek83j',
    slug: 'kazoo48'
  },
  {
    name: 'Parrot Distro',
    link: 'https://parrotdistro.com',
    bio: 'Parrot Distro is a distribution company based in Kalamazoo, MI. The goal is to assist bands, labels, and artists of all sizes to sell their merch online.',
    part: 'I assisted in setting up the store and built some custom pages/components.',
    challenges:
      "Repurposing the brand page to be an artists page wasn't as straight forward as initially planned. Getting is set up to scale and match any growth Parrot distro sees was a crucial step that was built with some custom JavaScript.",
    stack: [
      'Stencil',
      'Handlebars',
      'HTML',
      'CSS',
      'JavaScript',
      'BigCommerce'
    ],
    image: ParrotDistro,
    key: 'dhwe93',
    slug: 'parrot-distro'
  },
  {
    name: "Aaron's Music Service",
    link: 'https://aaronsmusicservice.com',
    bio: "Aaron's Music Service is a music store in Vicksburg, MI who builds, repairs, and consigns stringed instruments. They're a family owned business since 1983, when the Gibson factory moved to Nashville.",
    part: 'I deisgned, developed, and hosted this site.',
    challenges:
      'This was my first attempt at Svelte. I was curious about Svelte and figured that this simple site would be a perfect chance to build with it.',
    stack: ['Svelte', 'HTML', 'CSS', 'Render'],
    image: Ams,
    key: 'ot2b0w',
    slug: 'aarons-music-service'
  }
];

export default Projects;
