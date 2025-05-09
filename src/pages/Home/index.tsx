import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductList'
import Game from '../../models/Game'
import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description:
      'Resident Evil4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival Horror',
    title: 'Resident Evil 4',
    system: 'PS5',
    infos: ['10%', 'R$ 290,00'],
    image: resident
  },
  {
    id: 2,
    category: 'Ação',
    description:
      'Resident Evil4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival Horror',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: diablo
  },
  {
    id: 3,
    category: 'Ação',
    description:
      'Resident Evil4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival Horror',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: zelda
  },
  {
    id: 4,
    category: 'Ação',
    description:
      'Resident Evil4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival Horror',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: starWars
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'RPG',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    title: 'Diablo IV',
    system: 'Windows',
    infos: ['17/05'],
    image: diablo
  },
  {
    id: 6,
    category: 'RPG',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    title: 'Diablo IV',
    system: 'Windows',
    infos: ['17/05'],
    image: diablo
  },
  {
    id: 7,
    category: 'RPG',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    title: 'Zelda',
    system: 'Windows',
    infos: ['17/05'],
    image: zelda
  },
  {
    id: 8,
    category: 'RPG',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    title: 'Star Wars',
    system: 'Nintendo Switch',
    infos: ['17/05'],
    image: starWars
  }
]
const Home = () => (
  <>
    <Banner />
    <ProductsList games={promocoes} title="Promoções" background="gray" />
    <ProductsList games={emBreve} title="Em breve" background="black" />
  </>
)

export default Home
