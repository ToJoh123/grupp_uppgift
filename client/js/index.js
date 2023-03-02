const india = document.querySelector('#india');
const pakistan = document.querySelector('#pakistan');
const sweden = document.querySelector('#sweden');
const h2 = document.querySelector('h2')
const p1 = document.querySelector('#p1')
const p2 = document.querySelector('#p2')
const p3 = document.querySelector('#p3')

india.addEventListener('click', async () => {
    const res = await fetch('http://localhost:5050/?country=India')
    h2.textContent = 'India'
    const data = await res.json()
    const name = `Name: ${data.name}`
    const capital = `Capital: ${data.capital}`
    const population = `Population: ${data.population}`
    p1.textContent = name
    p2.textContent = capital
    p3.textContent =population

})
pakistan.addEventListener('click', async () => {
    const res = await fetch('http://localhost:5050/?country=Pakistan')
    h2.textContent = 'Pakistan'
    const data = await res.json()
    const name = `Name: ${data.name}`
    const capital = `Capital: ${data.capital}`
    const population = `Population: ${data.population}`
    p1.textContent = name
    p2.textContent = capital
    p3.textContent =population

})
sweden.addEventListener('click', async () => {
    const res = await fetch('http://localhost:5050/?country=Sweden')
    h2.textContent = 'Sweden'
    const data =  await res.json()
    const name = `Name: ${data.name}`
    const capital = `Capital: ${data.capital}`
    const population = `Population: ${data.population}`
    p1.textContent = name
    p2.textContent = capital
    p3.textContent =population
})

