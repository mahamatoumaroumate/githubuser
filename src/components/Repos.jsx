import { useSelector } from 'react-redux'
import { Wrapper } from '../assets/wrappers/Repos'
import Pie from './Pie'
import Doughnut from './Doughnut'
import Column from './Column'
import Bar from './Bar'
const Repos = () => {
  const { repos } = useSelector((store) => store.user)
  const languages = repos.reduce((total, item) => {
    const { language, stargazers_count } = item
    if (!language) return total
    if (!total[language]) {
      total[language] = { label: language, value: 1, stars: stargazers_count }
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
        stars: total[language].stars + stargazers_count,
      }
    }
    return total
  }, {})

  const mostUsed = Object.values(languages)
    .sort((a, b) => {
      return b.value - a.value
    })
    .slice(0, 5)
  const mostPopular = Object.values(languages)
    .sort((a, b) => {
      return b.stars - a.stars
    })
    .map((item) => {
      return { ...item, value: item.stars }
    })
    .slice(0, 5)
  let { starts, forks } = repos.reduce(
    (total, item) => {
      const { stargazers_count, name, forks } = item
      total.starts[stargazers_count] = {
        label: name,
        value: stargazers_count,
      }
      total.forks[stargazers_count] = {
        label: name,
        value: forks,
      }

      return total
    },
    {
      starts: {},
      forks: {},
    }
  )
  starts = Object.values(starts).slice(-5).reverse()
  forks = Object.values(forks).slice(-5).reverse()
  return (
    <Wrapper>
      <Column data={starts} />
      <Pie data={mostUsed} />
      <Bar data={forks} />
      <Doughnut data={mostPopular} />
    </Wrapper>
  )
}
export default Repos
