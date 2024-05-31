// Write your code here
import './index.css'
import {BarChart, Bar, XAxis, YAxis, Legend} from 'recharts'

const VaccinationCoverage = props => {
  const dataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }

  const {daysOfVaccination} = props
  return (
    <>
      <h1 className="head">Vaccination Coverage</h1>
      <BarChart
        width={900}
        height={400}
        data={daysOfVaccination}
        margin={{
          top: 5,
        }}
      >
        <XAxis
          dataKey="vaccineDate"
          tick={{
            stroke: '#6c757d',
            strokeWidth: 1,
          }}
        />
        <YAxis
          tickFormatter={dataFormatter}
          tick={{
            stroke: 'gray',
            strokeWidth: 0,
          }}
        />
        <Legend
          wrapperStyle={{
            padding: 30,
          }}
        />
        <Bar
          dataKey="dose1"
          name="Dose 1"
          radius={[10, 10, 0, 0]}
          fill="#5a8dee"
          barSize="20%"
        />
        <Bar
          dataKey="dose2"
          name="Dose 2"
          radius={[5, 5, 0, 0]}
          fill=" #f54394"
          barSize="20%"
        />
      </BarChart>
    </>
  )
}

export default VaccinationCoverage
