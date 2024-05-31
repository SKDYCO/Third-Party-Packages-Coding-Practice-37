// Write your code here
import {PieChart, Pie, Legend, Cell} from 'recharts'

const VaccinationByAge = props => {
  const {divideByAgeGroup} = props
  return (
    <div>
      <h1 className="head">Vaccination by Age</h1>
      <PieChart width={1000} height={300}>
        <Pie
          cx="50%"
          cy="30%"
          data={divideByAgeGroup}
          innerRadius="30%"
          outerRadius="60%"
          dataKey="count"
        >
          <Cell name="18-44" fill="#fecba6" />
          <Cell name="44-60" fill="#b3d23f" />
          <Cell name="above60" fill="#a44c9e" />
        </Pie>
        <Legend
          iconType="circle"
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
          wrapperStyle={{fontSize: 12, fontFamily: 'Roboto'}}
        />
      </PieChart>
    </div>
  )
}
export default VaccinationByAge
