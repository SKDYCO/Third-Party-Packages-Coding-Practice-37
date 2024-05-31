// Write your code here
import {PieChart, Pie, Cell, Legend} from 'recharts'

const VaccinationByGender = props => {
  const {genderDetails} = props
  return (
    <div>
      <h1 className="head">Vaccination by gender</h1>
      <PieChart width={1000} height={300}>
        <Pie
          cx="70%"
          cy="40%"
          data={genderDetails}
          startAngle={180}
          endAngle={0}
          innerRadius="30%"
          outerRadius="60%"
          dataKey="count"
        >
          <Cell name="male" fill="#fecba6" />
          <Cell name="female" fill="#b3d23f" />
          <Cell name="other" fill="#a44c9e" />
        </Pie>
        <Legend
          iconType="circle"
          layout="horizontal"
          verticalAlign="middle"
          align="center"
        />
      </PieChart>
    </div>
  )
}
export default VaccinationByGender
